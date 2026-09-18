/* Read-only website audit. Outputs evidence and screenshots under docs/ui-refresh. */
const fs = require('fs');
const path = require('path');
const { chromium } = require('../../next-app/node_modules/@playwright/test');
const root = path.resolve(__dirname, '../..');
const clean = s => s.replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
const attr = (s, name) => (s.match(new RegExp('\\b' + name + '=["\']([^"\']*)["\']', 'i')) || [])[1] || '';
const files = fs.readdirSync(root).filter(f => f.endsWith('.html')).sort();
if (fs.existsSync(path.join(root, 'sample2/index.html'))) files.push('sample2/index.html');
const evidence = files.map(file => {
  const html = fs.readFileSync(path.join(root, file), 'utf8');
  const line = i => html.slice(0, i).split('\n').length;
  const headings = [...html.matchAll(/<(h[123])\b[^>]*>([\s\S]*?)<\/\1>/gi)].map(m => ({ level: m[1], text: clean(m[2]), line: line(m.index) }));
  const sections = [...html.matchAll(/<section\b([^>]*)>([\s\S]*?)<\/section>/gi)].map(m => ({
    line: line(m.index), id: attr(m[1], 'id'), classes: attr(m[1], 'class'),
    heading: clean((m[2].match(/<h[12]\b[^>]*>([\s\S]*?)<\/h[12]>/i)||[])[1] || ''),
    subheadings: [...m[2].matchAll(/<h3\b[^>]*>([\s\S]*?)<\/h3>/gi)].map(x=>clean(x[1])),
    links: [...m[2].matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)].map(x=>({href:attr(x[1],'href'),text:clean(x[2]).slice(0,120)})),
    images: [...m[2].matchAll(/<img\b([^>]*)>/gi)].map(x=>attr(x[1],'src'))
  }));
  const styles = [...html.matchAll(/<link\b([^>]*)>/gi)].filter(m=>attr(m[1],'rel')==='stylesheet').map(m=>attr(m[1],'href'));
  const scripts = [...html.matchAll(/<script\b([^>]*)>/gi)].map(m=>attr(m[1],'src')).filter(Boolean);
  const images = [...html.matchAll(/<img\b([^>]*)>/gi)].map(m=>({src:attr(m[1],'src'),alt:attr(m[1],'alt'),line:line(m.index)}));
  const resources = [...styles,...scripts,...images.map(i=>i.src)].filter(s=>s&&!/^(https?:|data:|\/\/)/.test(s));
  const missing = [...new Set(resources)].filter(s=>!fs.existsSync(path.resolve(root,path.dirname(file),s.split(/[?#]/)[0])));
  return {file,title:clean((html.match(/<title>([\s\S]*?)<\/title>/i)||[])[1]||file),headings,sections,styles,scripts,images,missing,oldLogos:images.filter(i=>/\/logo\.png$/.test(i.src)),hasFavicon:/rel=["'](?:shortcut )?icon["']/.test(html)};
});
async function main() {
  const browser = await chromium.launch({channel:'msedge',headless:true});
  fs.mkdirSync(path.join(__dirname,'evidence'),{recursive:true});
  let next=0;
  async function worker(){
    while(next<evidence.length){
      const item=evidence[next++];
      const page=await browser.newPage({viewport:{width:1440,height:900},reducedMotion:'reduce'});
      const errors=[];page.on('pageerror',e=>errors.push(e.message));
      // Keep measurements reproducible without remote font/CDN availability.
      await page.route(/^https?:\/\//,r=>r.abort());
      try {
        await page.goto('file:///'+path.join(root,item.file).replace(/\\/g,'/'),{waitUntil:'load',timeout:15000});
        async function measure(){return page.evaluate(()=>{
          const nav=document.querySelector('#nav');
          const sections=[...document.querySelectorAll('section')].map(el=>{
            const cs=getComputedStyle(el),r=el.getBoundingClientRect();
            return {id:el.id,classes:el.className,heading:el.querySelector('h1,h2')?.textContent.trim().replace(/\s+/g,' ')||'',height:Math.round(r.height),background:cs.backgroundColor,color:cs.color,backgroundImage:cs.backgroundImage,padding:cs.padding};
          });
          const pricing=document.querySelector('.nav-links > a[href="pricing.html"]');
          return {width:innerWidth,overflow:document.documentElement.scrollWidth>innerWidth,documentWidth:document.documentElement.scrollWidth,nav:nav?{height:nav.offsetHeight,background:getComputedStyle(nav).backgroundColor}:null,pricing:pricing?{display:getComputedStyle(pricing).display,align:getComputedStyle(pricing).alignItems}:null,sections};
        })}
        item.desktop=await measure();
        if(['index.html','sales-agent.html','integrations.html','pricing.html','contact.html'].includes(item.file)){
          await page.screenshot({path:path.join(__dirname,'evidence',item.file.replace('.html','')+'-desktop.png')});
        }
        if(item.file==='sales-agent.html'){
          for(const [label,selector] of [['integrations','.sales-integrations, .section--dark:not(.final-cta)'],['cta','.final-cta'],['workflow','.sig-sales-thread']]){
            const el=page.locator(selector).first();await el.scrollIntoViewIfNeeded();await page.waitForTimeout(100);await el.screenshot({path:path.join(__dirname,'evidence','sales-agent-'+label+'.png')});
          }
        }
        await page.setViewportSize({width:390,height:844});
        await page.evaluate(()=>window.scrollTo(0,0));
        item.mobile=await measure();
        if(['index.html','sales-agent.html'].includes(item.file))await page.screenshot({path:path.join(__dirname,'evidence',item.file.replace('.html','')+'-mobile.png')});
        item.errors=errors;
      }catch(e){item.auditError=e.message;}
      await page.close();
    }
  }
  await Promise.all([worker(),worker(),worker()]);
  await browser.close();
  fs.writeFileSync(path.join(__dirname,'evidence','page-inventory.json'),JSON.stringify(evidence,null,2));
  console.log(JSON.stringify({pages:evidence.length,darkPages:evidence.filter(x=>x.sections.some(s=>s.classes.includes('section--dark'))).length,oldLogoPages:evidence.filter(x=>x.oldLogos.length).length,missingResources:evidence.filter(x=>x.missing.length).map(x=>({file:x.file,missing:x.missing})),overflow:evidence.filter(x=>x.desktop?.overflow||x.mobile?.overflow).map(x=>({file:x.file,desktop:x.desktop?.overflow,mobile:x.mobile?.overflow})),errors:evidence.filter(x=>x.errors?.length||x.auditError).map(x=>({file:x.file,errors:x.errors,error:x.auditError}))},null,2));
}
main().catch(e=>{console.error(e);process.exitCode=1});

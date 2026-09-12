/* Channel-native hero examples inside a shared glass presentation frame. */
(() => {
  const channelRail=document.querySelector('.hero-channels');
  const heroVisual=document.querySelector('.hero-visual');
  if(channelRail && heroVisual) {
    heroVisual.prepend(channelRail);
    channelRail.setAttribute('aria-orientation','vertical');
    channelRail.querySelectorAll('[data-hero-ch]').forEach(button=>{
      const label=button.textContent.trim();
      button.setAttribute('aria-label',label);
      button.title=label;
      button.addEventListener('keydown',event=>{
        if(!['ArrowUp','ArrowDown'].includes(event.key)) return;
        event.preventDefault();
        const buttons=[...channelRail.querySelectorAll('button')];
        const next=buttons[(buttons.indexOf(button)+(event.key==='ArrowDown'?1:-1)+buttons.length)%buttons.length];
        next.focus(); next.click();
      });
    });
  }
  const verified='<svg class="native-verified" viewBox="0 0 24 24" aria-label="Verified badge in example"><path fill="#3897f0" d="m12 1 3 2 3.6.4 1 3.5L22 10l-1 3.5.3 3.6-3.2 1.6L16 22l-4-1-4 1-2.1-3.3-3.2-1.6.3-3.6L2 10l2.4-3.1 1-3.5L9 3Z"/><path d="m7 12 3 3 7-7" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const stamp='<span class="native-time">10:42 <span class="native-read">✓✓</span></span>';
  const bubble=(text,out=false)=>`<div class="native-message ${out?'native-out':'native-in'}">${text}${stamp}</div>`;
  const product=(name,img,action)=>`<div class="native-product"><img src="${img}" alt="${name}" width="90" height="100"><div><strong>${name}</strong><span>Available in your size</span><span class="native-product-link">${action} ↗</span></div></div>`;
  const day='<div class="native-day">TODAY · 10:41 AM</div>';
  Object.assign(HERO_SCENARIOS.whatsapp,{
    brandNm:'Your brand '+verified, brandOn:'Business account',
    html:day+bubble('Hi! Is the Oxford shirt available in medium?',true)+bubble('Hi Priya! Yes, medium is in stock. Would you like to see the colours?')+product('The Oxford shirt','images/product-oxford-shirts.jpg','View collection')+bubble('Perfect. Please send me the link.',true)+bubble('Here you go. You can choose your colour and complete your order securely.')
  });
  Object.assign(HERO_SCENARIOS.instagram,{
    brandNm:'yourbrand '+verified, brandOn:'Active now',
    html:day+'<div class="native-reel"><img src="images/product-mandarin-shirt.jpg" alt="Shirt featured in an example Reel"><div><span>You replied to their story</span><strong>The everyday edit.</strong></div></div>'+bubble('Love this shirt! Do you have it in medium?',true)+bubble('We do! Here’s the collection you spotted. Choose your colour and find your fit.')+product('The everyday collection','images/product-mandarin-shirt.jpg','View product')+bubble('Just what I was looking for. Thank you!',true)
  });
  Object.assign(HERO_SCENARIOS.shopify,{
    headClass:'brand-wa',brandAv:HERO_SCENARIOS.whatsapp.brandAv,brandNm:'Your store '+verified,brandOn:'WhatsApp · Connected to Shopify',
    html:day+bubble('Can I change order #SH-9281 to size L?',true)+bubble('I’ve checked your Shopify order. It hasn’t shipped, and size L is available.')+product('Oxford shirt · Size L','images/product-oxford-shirts.jpg','View order')+'<div class="native-sync"><span data-icon="shopify">'+ICONS.shopify+'</span>Order updated in Shopify</div>'+bubble('Your size is updated. Your confirmation is on its way.')
  });
  Object.assign(HERO_SCENARIOS.messenger,{
    brandNm:'Your brand '+verified,brandOn:'Typically replies instantly',
    html:day+bubble('Hi, can you check order #8472?',true)+bubble('Of course. Your order is on its way and expected on Thursday.')+'<div class="native-order"><span>ORDER #8472</span><strong>On its way to you</strong><div class="native-order-line"><i></i><i></i><i></i></div><p>Confirmed &nbsp; · &nbsp; Shipped &nbsp; · &nbsp; Delivered</p></div>'+bubble('Great, thanks for checking!',true)+bubble('You’re welcome. You can message us here if you need anything else.')
  });
  const frame=document.querySelector('.hero-chat');
  frame.dataset.cinematic='true';
  const header=document.getElementById('heroChatHead');
  const footer=frame.querySelector('.ch-input');
  const icons='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M7 3H4v3c0 8 6 14 14 14h3v-4l-5-2-2 2a13 13 0 0 1-6-6l2-2-3-5Z"/></svg><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="3" y="6" width="12" height="12" rx="3"/><path d="m15 10 6-3v10l-6-3"/></svg>';
  function syncChrome(){
    const selected=document.querySelector('[data-hero-ch].active')?.dataset.heroCh || 'website';
    frame.dataset.native=selected==='shopify'?'whatsapp':selected;
    let tools=header.querySelector('.native-header-tools');
    if(!tools){ tools=document.createElement('span');tools.className='native-header-tools';header.append(tools); }
    tools.innerHTML=icons;
    const label={website:'Website concierge',shopify:'WhatsApp × Shopify',whatsapp:'WhatsApp Business',instagram:'Instagram Direct',messenger:'Messenger'}[selected];
    frame.querySelector('.hcb-url').textContent=label;
    footer.innerHTML='<span class="native-compose-plus" aria-hidden="true">+</span><span>Message'+(selected==='instagram'?'…':'')+'</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="9" y="2" width="6" height="13" rx="3"/><path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3m-4 0h8"/></svg>';
  }
  new MutationObserver(syncChrome).observe(document.getElementById('heroChatBody'),{childList:true});
  const body=document.getElementById('heroChatBody');
  const reduce=matchMedia('(prefers-reduced-motion: reduce)');
  let pending=[], animations=[], visible=false;
  const pause=document.createElement('button');
  pause.type='button'; pause.className='hero-motion-toggle'; pause.textContent='Pause demo';
  document.querySelector('.hero-demo-controls').append(pause);
  function stop(){
    pending.forEach(clearTimeout);pending=[];
    animations.forEach(a=>a.cancel());animations=[];
    [...body.children].forEach(el=>el.hidden=false);
    frame.classList.remove('agent-typing');
    pause.textContent='Replay demo';
    pause.setAttribute('aria-label','Replay conversation animation');
  }
  function play(){
    stop();
    if(reduce.matches || !visible || document.hidden) return;
    body.scrollTop=0;
    pause.textContent='Pause demo'; pause.setAttribute('aria-label','Pause conversation animation');
    const messages=[...body.children].filter(el=>!el.classList.contains('native-day'));
    // Keep the first exchange visible so the channel never opens as an empty shell.
    messages.forEach((el,index)=>el.hidden=index>1);
    messages.slice(2).forEach((el,index)=>{
      pending.push(setTimeout(()=>{
        frame.classList.toggle('agent-typing',el.classList.contains('native-in') || el.classList.contains('msg-row')&&!el.classList.contains('right'));
      },index*850));
      pending.push(setTimeout(()=>{
        frame.classList.remove('agent-typing');el.hidden=false;
        animations.push(el.animate([{opacity:0,transform:'translateY(12px) scale(.97)',filter:'blur(3px)'},{opacity:1,transform:'translateY(0) scale(1)',filter:'blur(0)'}],{duration:480,easing:'cubic-bezier(.16,1,.3,1)'}));
        body.scrollTo({top:body.scrollHeight,behavior:'smooth'});
      },index*850+400));
    });
    pending.push(setTimeout(()=>{frame.classList.remove('agent-typing');pause.textContent='Replay demo';},messages.length*850+500));
  }
  pause.addEventListener('click',()=>pause.textContent==='Pause demo'?stop():play());
  document.getElementById('heroReplay').addEventListener('click',play);
  new MutationObserver(play).observe(body,{childList:true});
  new IntersectionObserver(entries=>entries.forEach(e=>{const wasVisible=visible;visible=e.isIntersecting;if(visible&&!wasVisible)play();else if(!visible)stop();}),{threshold:.3}).observe(frame);
  const hero=document.getElementById('hero');
  new IntersectionObserver(entries=>entries.forEach(e=>{
    hero.classList.toggle('hero-in-view',e.isIntersecting && !document.hidden);
  }),{threshold:0}).observe(hero);
  document.addEventListener('visibilitychange',()=>{
    hero.classList.toggle('hero-in-view',!document.hidden && hero.getBoundingClientRect().bottom>0 && hero.getBoundingClientRect().top<innerHeight);
  });
  document.addEventListener('visibilitychange',()=>{if(document.hidden)stop();});
  reduce.addEventListener('change',stop);
  renderHeroDestination('website');
})();

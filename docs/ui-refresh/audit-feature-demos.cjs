const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');
const { chromium } = require('../../next-app/node_modules/@playwright/test');
const root = path.resolve(__dirname, '../..');
const output = path.join(__dirname, 'evidence/features');
(async () => {
  fs.mkdirSync(output, { recursive: true });
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const report = [];
  for (const file of ['sales-agent.html', 'lead-agent.html', 'support-agent.html']) {
    const page = await browser.newPage({ viewport: { width: 1440, height: 960 } });
    await page.route(/^https?:/, route => route.abort());
    await page.goto(pathToFileURL(path.join(root, file)).href);
    const section = page.locator('section').filter({ has: page.locator('.kicker', { hasText: 'What it does' }) }).first();
    const rows = section.locator('.spread');
    const items = [];
    for (let i = 0; i < await rows.count(); i++) {
      const row = rows.nth(i);
      await row.scrollIntoViewIfNeeded();
      await page.waitForTimeout(650);
      const first = await row.evaluate(el => ({
        heading: el.querySelector('h3').textContent,
        images: el.querySelectorAll('img').length,
        messages: [...el.querySelectorAll('.lw-bubble')].map(e => ({ text: e.textContent.trim(), opacity: getComputedStyle(e).opacity })),
        typingIndicators: el.querySelectorAll('.lw-typing').length,
        controls: [...el.querySelectorAll('button')].map(e => e.textContent.trim()),
        width: Math.round(el.getBoundingClientRect().width)
      }));
      await page.waitForTimeout(1400);
      const last = await row.evaluate(el => [...el.querySelectorAll('.lw-bubble')].map(e => ({ text: e.textContent.trim(), opacity: getComputedStyle(e).opacity })));
      items.push({ ...first, messageSequenceChangedDuringObservation: JSON.stringify(first.messages) !== JSON.stringify(last) });
      await row.screenshot({ animations: 'disabled', timeout: 10000, path: path.join(output, file.replace('.html', '') + '-row-' + (i + 1) + '.png') });
    }
    report.push({ file, rows: items, sectionHeight: await section.evaluate(el => Math.round(el.getBoundingClientRect().height)) });
    await page.close();
  }
  await browser.close();
  fs.writeFileSync(path.join(output, 'audit.json'), JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
})().catch(e => { console.error(e); process.exitCode = 1; });

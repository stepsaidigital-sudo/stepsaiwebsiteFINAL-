const path = require('path');
const { pathToFileURL } = require('url');
const { chromium } = require('../../next-app/node_modules/@playwright/test');
const root = path.resolve(__dirname, '../..');
const target = pathToFileURL(path.join(root, 'sales-agent.html')).href;
const evidence = path.join(__dirname, 'evidence/features');

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 960 } });
  const pageErrors = [];
  page.on('pageerror', error => pageErrors.push(error.message));
  await page.route(/^https?:/, route => route.abort());
  await page.goto(target);
  const first = page.locator('[data-feature-demo]').first();
  await first.scrollIntoViewIfNeeded();
  await page.waitForTimeout(350);
  const started = await first.evaluate(el => ({
    status: el.querySelector('[data-demo-status]').textContent,
    shown: el.querySelectorAll('[data-demo-step].is-shown').length
  }));
  await first.locator('[data-demo-toggle]').click();
  const pausedCount = await first.locator('[data-demo-step].is-shown').count();
  await page.waitForTimeout(1100);
  const pausedStable = pausedCount === await first.locator('[data-demo-step].is-shown').count();
  await first.locator('[data-demo-toggle]').click();
  await page.waitForTimeout(4400);
  const completed = await first.evaluate(el => ({
    status: el.querySelector('[data-demo-status]').textContent,
    shown: el.querySelectorAll('[data-demo-step].is-shown').length,
    total: el.querySelectorAll('[data-demo-step]').length,
    lingeringLoaders: el.querySelectorAll('.is-loading').length
  }));
  await first.locator('[data-demo-replay]').click();
  await page.waitForTimeout(100);
  const replayed = await first.evaluate(el => ({
    status: el.querySelector('[data-demo-status]').textContent,
    shown: el.querySelectorAll('[data-demo-step].is-shown').length
  }));
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(350);
  const offscreenStatus = await first.locator('[data-demo-status]').textContent();
  const newsletter = page.locator('.footer-9-nl-form');
  await newsletter.locator('input[type="email"]').fill('review@example.com');
  await newsletter.locator('button[type="submit"]').click();
  const newsletterStatus = await page.locator('.footer-9-nl-status').textContent();
  await page.close();

  const widths = [];
  for (const width of [320, 390, 768, 1024, 1440]) {
    const current = await browser.newPage({ viewport: { width, height: 960 }, reducedMotion: 'reduce' });
    await current.route(/^https?:/, route => route.abort());
    await current.goto(target);
    const result = await current.evaluate(() => ({
      client: document.documentElement.clientWidth,
      scroll: document.documentElement.scrollWidth,
      demos: [...document.querySelectorAll('[data-feature-demo]')].map(el => ({
        shown: el.querySelectorAll('[data-demo-step].is-shown').length,
        total: el.querySelectorAll('[data-demo-step]').length,
        status: el.querySelector('[data-demo-status]').textContent,
        controlsHidden: getComputedStyle(el.querySelector('.feature-demo-controls')).display === 'none'
      }))
    }));
    widths.push({ width, ...result });
    if (width === 1440) {
      await current.locator('.sales-feature-section').screenshot({ animations: 'disabled', path: path.join(evidence, 'sales-feature-section-complete.png') });
      for (let i = 0; i < 3; i++) {
        await current.locator('.sales-feature-section .spread').nth(i).screenshot({ animations: 'disabled', path: path.join(evidence, `sales-feature-row-${i + 1}-complete.png`) });
      }
    }
    if (width === 390) {
      for (let i = 0; i < 3; i++) {
        await current.locator('[data-feature-demo]').nth(i).screenshot({ animations: 'disabled', path: path.join(evidence, `sales-feature-row-${i + 1}-mobile.png`) });
      }
    }
    await current.close();
  }
  const noJs = await browser.newPage({ viewport: { width: 390, height: 960 }, javaScriptEnabled: false });
  await noJs.route(/^https?:/, route => route.abort());
  await noJs.goto(target);
  const noJsResult = await noJs.evaluate(() => ({
    client: document.documentElement.clientWidth,
    scroll: document.documentElement.scrollWidth,
    demos: [...document.querySelectorAll('[data-feature-demo]')].map(el => ({
      steps: el.querySelectorAll('[data-demo-step]').length,
      visible: [...el.querySelectorAll('[data-demo-step]')].every(step => getComputedStyle(step).opacity === '1'),
      controlsHidden: getComputedStyle(el.querySelector('.feature-demo-controls')).display === 'none'
    }))
  }));
  await noJs.close();
  await browser.close();
  const report = { started, pausedStable, completed, replayed, offscreenStatus, newsletterStatus, pageErrors, noJsResult, widths };
  console.log(JSON.stringify(report, null, 2));
  const ok = pausedStable && completed.shown === completed.total && completed.lingeringLoaders === 0 && /Paused off screen/.test(offscreenStatus) && /not connected/.test(newsletterStatus) && pageErrors.length === 0 && noJsResult.client === noJsResult.scroll && noJsResult.demos.every(d => d.visible && d.controlsHidden) && widths.every(x => x.client === x.scroll && x.demos.every(d => d.shown === d.total && d.controlsHidden));
  if (!ok) process.exitCode = 1;
})().catch(error => { console.error(error); process.exitCode = 1; });

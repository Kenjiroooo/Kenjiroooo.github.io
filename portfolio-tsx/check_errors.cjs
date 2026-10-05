const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('BROWSER_CONSOLE:', msg.text()));
  page.on('pageerror', error => console.log('BROWSER_ERROR:', error.message));
  page.on('requestfailed', request => console.log('BROWSER_REQ_FAILED:', request.url(), request.failure().errorText));

  await page.goto('http://localhost:5174', { waitUntil: 'networkidle2' });
  
  // wait 3 seconds to see if it crashes
  await new Promise(r => setTimeout(r, 3000));
  
  await browser.close();
})();

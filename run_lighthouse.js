const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

async function runLighthouse(url) {
  const chrome = await chromeLauncher.launch({chromeFlags: ['--headless', '--no-sandbox']});
  const options = {logLevel: 'info', output: 'json', onlyCategories: ['performance'], port: chrome.port};
  const runnerResult = await lighthouse(url, options);

  console.log('Report is done for', runnerResult.lhr.finalDisplayedUrl);
  console.log('Performance score was', runnerResult.lhr.categories.performance.score * 100);

  const audits = runnerResult.lhr.audits;
  const metrics = runnerResult.lhr.audits.metrics.details.items[0];
  console.log('Metrics:', metrics);

  // Sort audits by weight or impact
  const auditList = Object.keys(audits).map(key => audits[key]).filter(a => a.score !== null && a.score < 1);
  auditList.sort((a, b) => a.score - b.score);

  auditList.forEach(a => {
      console.log(`${a.id}: ${a.score} - ${a.title} - ${a.displayValue}`);
  });

  await chrome.kill();
}

runLighthouse('http://localhost:3000');

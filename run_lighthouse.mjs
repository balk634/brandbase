import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';

async function runLighthouse(url) {
  const chrome = await chromeLauncher.launch({chromeFlags: ['--headless', '--no-sandbox']});
  const options = {
    logLevel: 'error',
    output: 'json',
    onlyCategories: ['performance'],
    port: chrome.port,
    formFactor: 'mobile',
    screenEmulation: {
      mobile: true,
      width: 360,
      height: 640,
      deviceScaleFactor: 2.625,
      disabled: false,
    },
    throttling: {
      rttMs: 150,
      throughputKbps: 1638.4,
      cpuSlowdownMultiplier: 4,
      requestLatencyMs: 0,
      downloadThroughputKbps: 0,
      uploadThroughputKbps: 0
    }
  };

  let bestScore = 0;
  for (let i = 0; i < 3; i++) {
      const runnerResult = await lighthouse(url, options);
      const lhr = runnerResult.lhr;
      const score = lhr.categories.performance.score * 100;
      console.log(`Run ${i+1} Score:`, score);
      if (score > bestScore) bestScore = score;
  }

  console.log("Best Score:", bestScore);

  await chrome.kill();
}

runLighthouse('http://localhost:3000');

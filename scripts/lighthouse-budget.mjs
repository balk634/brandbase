import { access, readFile, rm } from "node:fs/promises";
import path from "node:path";
import { spawn } from "node:child_process";
import {
  getAvailablePort,
  startNextServer,
  stopProcess,
  waitForServer,
} from "./_nextServer.mjs";

const PORT = process.env.LIGHTHOUSE_PORT
  ? Number(process.env.LIGHTHOUSE_PORT)
  : await getAvailablePort();
const BASE_URL = `http://127.0.0.1:${PORT}`;

const routesToCheck = ["/", "/digital-marketing"];
const thresholds = {
  performance: 0.5,
  accessibility: 0.85,
  "best-practices": 0.85,
  seo: 0.9,
};

const lighthouseCliPath = path.join(
  process.cwd(),
  "node_modules",
  "lighthouse",
  "cli",
  "index.js",
);

function runNodeScript(scriptPath, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [scriptPath, ...args], {
      stdio: "inherit",
      env: process.env,
    });

    child.once("exit", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Process exited with code ${code}`));
      }
    });
  });
}

async function runLighthouseForRoute(route) {
  const outputPath = path.join(
    process.cwd(),
    ".next",
    `lighthouse-${route.replace(/[^a-z0-9]+/gi, "_") || "home"}.json`,
  );

  const args = [
    `${BASE_URL}${route}`,
    "--quiet",
    "--only-categories=performance,accessibility,best-practices,seo",
    "--chrome-flags=--headless=new --no-sandbox",
    "--output=json",
    `--output-path=${outputPath}`,
  ];

  if (process.env.CHROME_PATH) {
    args.push(`--chrome-path=${process.env.CHROME_PATH}`);
  }

  await runNodeScript(lighthouseCliPath, args);

  const json = JSON.parse(await readFile(outputPath, "utf8"));
  await rm(outputPath, { force: true });

  const categories = json?.categories || {};
  const failures = [];

  for (const [category, threshold] of Object.entries(thresholds)) {
    const score = categories?.[category]?.score;
    if (typeof score !== "number") {
      failures.push(`${route}: missing ${category} score`);
      continue;
    }

    if (score < threshold) {
      failures.push(
        `${route}: ${category} ${(score * 100).toFixed(0)} is below ${(threshold * 100).toFixed(0)}`,
      );
    }

    console.log(
      `Lighthouse ${route} ${category}: ${(score * 100).toFixed(0)} (threshold ${(threshold * 100).toFixed(0)})`,
    );
  }

  return failures;
}

let server;

try {
  await access(lighthouseCliPath);

  server = startNextServer(PORT);
  await waitForServer(`${BASE_URL}/`);

  const allFailures = [];
  for (const route of routesToCheck) {
    const failures = await runLighthouseForRoute(route);
    allFailures.push(...failures);
  }

  if (allFailures.length > 0) {
    throw new Error(allFailures.join("\n"));
  }

  console.log("Lighthouse budget check passed.");
} catch (error) {
  console.error("Lighthouse budget check failed.");
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
} finally {
  await stopProcess(server);
}

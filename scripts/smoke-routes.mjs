import {
  getAvailablePort,
  startNextServer,
  stopProcess,
  waitForServer,
} from "./_nextServer.mjs";

const PORT = process.env.SMOKE_PORT
  ? Number(process.env.SMOKE_PORT)
  : await getAvailablePort();
const BASE_URL = `http://127.0.0.1:${PORT}`;

async function assertResponse(pathname, expectedStatus, requiredText) {
  const response = await fetch(`${BASE_URL}${pathname}`, {
    redirect: "manual",
  });

  if (response.status !== expectedStatus) {
    throw new Error(`${pathname} expected ${expectedStatus}, got ${response.status}`);
  }

  if (requiredText) {
    const body = await response.text();
    if (!body.includes(requiredText)) {
      throw new Error(`${pathname} missing expected marker: ${requiredText}`);
    }
  }

  console.log(`Smoke OK ${pathname} -> ${response.status}`);
}

let server;

try {
  server = startNextServer(PORT);
  await waitForServer(`${BASE_URL}/`);

  await assertResponse("/", 200, "BrandBase");
  await assertResponse("/website-solutions", 200, "WEBSITE SOLUTIONS");
  await assertResponse("/digital-marketing", 200, "DIGITAL MARKETING");
  await assertResponse("/contact", 200, "Contact");
  await assertResponse("/sitemap.xml", 200, "<urlset");
  await assertResponse("/robots.txt", 200, "Sitemap:");

  const legacy = await fetch(`${BASE_URL}/social-media-growth`, {
    redirect: "manual",
  });

  if (legacy.status !== 308) {
    throw new Error(`/social-media-growth expected 308 redirect, got ${legacy.status}`);
  }

  const location = legacy.headers.get("location") || "";
  if (!location.includes("/digital-marketing")) {
    throw new Error(`Legacy redirect points to unexpected location: ${location}`);
  }

  console.log("Legacy redirect OK /social-media-growth -> /digital-marketing");
  console.log("Route smoke check passed.");
} catch (error) {
  console.error("Route smoke check failed.");
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
} finally {
  await stopProcess(server);
}

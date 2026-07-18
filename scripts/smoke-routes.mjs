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
  await assertResponse("/management-solutions/health", 200, "HEALTH BASE");
  await assertResponse("/management-solutions/education", 200, "EDUCATION BASE");
  await assertResponse("/management-solutions/food-hospitality", 200, "HOSPITALITY BASE");
  await assertResponse("/contact", 200, "Contact");
  await assertResponse("/sitemap.xml", 200, "<urlset");
  await assertResponse("/robots.txt", 200, "Sitemap:");

  const legacySocial = await fetch(`${BASE_URL}/social-media-growth`, {
    redirect: "manual",
  });

  if (legacySocial.status !== 308 && legacySocial.status !== 307 && legacySocial.status !== 301) {
    throw new Error(`/social-media-growth expected redirect, got ${legacySocial.status}`);
  }

  const locationSocial = legacySocial.headers.get("location") || "";
  if (locationSocial !== "/" && !locationSocial.endsWith("/")) {
    throw new Error(`Legacy social-media-growth redirect points to unexpected location: ${locationSocial}`);
  }

  const legacyMarketing = await fetch(`${BASE_URL}/digital-marketing`, {
    redirect: "manual",
  });

  if (legacyMarketing.status !== 308 && legacyMarketing.status !== 307 && legacyMarketing.status !== 301) {
    throw new Error(`/digital-marketing expected redirect, got ${legacyMarketing.status}`);
  }

  const locationMarketing = legacyMarketing.headers.get("location") || "";
  if (locationMarketing !== "/" && !locationMarketing.endsWith("/")) {
    throw new Error(`Legacy digital-marketing redirect points to unexpected location: ${locationMarketing}`);
  }

  // Validate operating-systems redirect
  const legacyOS = await fetch(`${BASE_URL}/operating-systems/health`, {
    redirect: "manual",
  });

  if (legacyOS.status !== 308 && legacyOS.status !== 307 && legacyOS.status !== 301) {
    throw new Error(`/operating-systems/health expected redirect, got ${legacyOS.status}`);
  }

  const locationOS = legacyOS.headers.get("location") || "";
  if (!locationOS.includes("/management-solutions/health")) {
    throw new Error(`Legacy operating-systems/health redirect points to unexpected location: ${locationOS}`);
  }

  // Validate website-redesign redirect
  const legacyRedesign = await fetch(`${BASE_URL}/website-solutions/website-redesign`, {
    redirect: "manual",
  });

  if (legacyRedesign.status !== 308 && legacyRedesign.status !== 307 && legacyRedesign.status !== 301) {
    throw new Error(`/website-solutions/website-redesign expected redirect, got ${legacyRedesign.status}`);
  }

  const locationRedesign = legacyRedesign.headers.get("location") || "";
  if (!locationRedesign.includes("/website-solutions/custom-web-design")) {
    throw new Error(`Legacy website-redesign redirect points to unexpected location: ${locationRedesign}`);
  }

  console.log("Legacy redirects OK -> /");
  console.log("Route smoke check passed.");
} catch (error) {
  console.error("Route smoke check failed.");
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
} finally {
  await stopProcess(server);
}

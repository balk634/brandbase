import { readFile } from "node:fs/promises";
import path from "node:path";

const sitemapPath = path.join(process.cwd(), ".next", "server", "app", "sitemap.xml.body");

function extractMatches(xml, tagName) {
  const regex = new RegExp(`<${tagName}>(.*?)<\\/${tagName}>`, "g");
  const values = [];
  let match;
  while ((match = regex.exec(xml)) !== null) {
    values.push(match[1].trim());
  }
  return values;
}

try {
  const xml = await readFile(sitemapPath, "utf8");

  if (!xml.includes("<urlset") || !xml.includes("</urlset>")) {
    throw new Error("Sitemap is missing <urlset> root tags.");
  }

  const locs = extractMatches(xml, "loc");
  if (locs.length === 0) {
    throw new Error("Sitemap has zero <loc> entries.");
  }

  const uniqueLocs = new Set(locs);
  if (uniqueLocs.size !== locs.length) {
    throw new Error("Sitemap has duplicate <loc> URLs.");
  }

  for (const loc of locs) {
    try {
      const url = new URL(loc);
      if (!(url.protocol === "http:" || url.protocol === "https:")) {
        throw new Error(`Invalid protocol in loc: ${loc}`);
      }
    } catch {
      throw new Error(`Invalid sitemap URL: ${loc}`);
    }
  }

  const imageLocs = extractMatches(xml, "image:loc");
  for (const imageLoc of imageLocs) {
    if (imageLoc.includes("?")) {
      throw new Error(`Image URL must not include query string: ${imageLoc}`);
    }
  }

  console.log(`Sitemap check passed: ${locs.length} URLs, ${imageLocs.length} image URLs.`);
} catch (error) {
  console.error("Sitemap check failed.");
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
}

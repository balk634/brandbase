import test from "node:test";
import assert from "node:assert";
import { buildPageMetadata, NON_INDEXABLE_ROUTES } from "@/lib/seoMetadata";
import { masterConfig } from "@/config/master";

test("buildPageMetadata - happy path", () => {
  const input = {
    title: "Test Page",
    description: "A description of the test page",
    path: "/test-path",
  };

  const metadata = buildPageMetadata(input);

  assert.strictEqual(metadata.title, "Test Page");
  assert.strictEqual(metadata.description, "A description of the test page");
  assert.strictEqual(metadata.alternates?.canonical, `${masterConfig.metadata.baseUrl}/test-path`);

  // Verify defaults for OpenGraph
  assert.strictEqual(metadata.openGraph?.title, "Test Page");
  assert.strictEqual(metadata.openGraph?.description, "A description of the test page");
  assert.strictEqual(metadata.openGraph?.url, `${masterConfig.metadata.baseUrl}/test-path`);
  assert.strictEqual(metadata.openGraph?.type, masterConfig.metadata.openGraph.type);

  // Verify default robots for indexable page
  assert.deepStrictEqual(metadata.robots, {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  });
});

test("buildPageMetadata - path normalization", () => {
  const testCases = [
    { input: "about", expected: "/about" },
    { input: "/about", expected: "/about" },
    { input: "about/", expected: "/about" },
    { input: "/about/", expected: "/about" },
    { input: "/", expected: "/" },
    { input: "", expected: "/" },
  ];

  for (const { input, expected } of testCases) {
    const metadata = buildPageMetadata({
      title: "Test",
      description: "Test",
      path: input,
    });

    // Ensure canonical URL is correct and doesn't contain double slashes (unless it's from protocol)
    const baseUrl = masterConfig.metadata.baseUrl.replace(/\/+$/, "");
    const expectedCanonical = `${baseUrl}${expected}`;
    assert.strictEqual(
      metadata.alternates?.canonical,
      expectedCanonical,
      `Path '${input}' should resolve to canonical '${expectedCanonical}'`
    );
  }
});

test("buildPageMetadata - keyword merging and deduplication", () => {
  const globalKeywords = masterConfig.metadata.keywords;
  const customKeywords = ["custom keyword", "  spaced keyword  ", globalKeywords[0]]; // Include a duplicate

  const metadata = buildPageMetadata({
    title: "Test",
    description: "Test",
    path: "/test",
    keywords: customKeywords,
  });

  const keywordsArray = metadata.keywords as string[];

  assert.ok(keywordsArray.includes("custom keyword"));
  assert.ok(keywordsArray.includes("spaced keyword")); // Trimmed
  assert.ok(keywordsArray.includes(globalKeywords[0]));

  // Verify deduplication
  const occurrenceCount = keywordsArray.filter((k) => k === globalKeywords[0]).length;
  assert.strictEqual(occurrenceCount, 1, "Duplicate keywords should be removed");
});

test("buildPageMetadata - global keywords used as fallback", () => {
  const metadata = buildPageMetadata({
    title: "Test",
    description: "Test",
    path: "/test",
  });

  const keywordsArray = metadata.keywords as string[];

  assert.ok(keywordsArray.length > 0);
  assert.strictEqual(keywordsArray[0], masterConfig.metadata.keywords[0].trim());
});

test("buildPageMetadata - noIndex override", () => {
  const metadata = buildPageMetadata({
    title: "Test",
    description: "Test",
    path: "/test",
    noIndex: true,
  });

  assert.deepStrictEqual(metadata.robots, {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  });
});

test("buildPageMetadata - non-indexable routes", () => {
  for (const route of NON_INDEXABLE_ROUTES) {
    const metadata = buildPageMetadata({
      title: "Test",
      description: "Test",
      path: route,
      // Pass noIndex: false explicitly to ensure the nonIndexablePathSet overrides it
      noIndex: false,
    });

    assert.deepStrictEqual(metadata.robots, {
      index: false,
      follow: true,
      googleBot: {
        index: false,
        follow: true,
      },
    }, `Route ${route} should be non-indexable`);
  }
});

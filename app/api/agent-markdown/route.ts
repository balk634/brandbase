import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

function estimateTokens(text: string): number {
  return Math.ceil(text.length / 4);
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const headerPath = request.headers.get("x-agent-path");
  const rawPath = headerPath || searchParams.get("path") || "/";
  const targetPath = rawPath.toLowerCase().replace(/\/+$/, "") || "/";

  let markdownContent = "";

  try {
    if (targetPath === "/pricing") {
      const pricingPath = path.join(process.cwd(), "public", "pricing.md");
      if (fs.existsSync(pricingPath)) {
        markdownContent = fs.readFileSync(pricingPath, "utf8");
      }
    }

    if (!markdownContent) {
      const llmsPath = path.join(process.cwd(), "public", "llms.txt");
      if (fs.existsSync(llmsPath)) {
        markdownContent = fs.readFileSync(llmsPath, "utf8");
      }
    }
  } catch {
    markdownContent = `# BrandBase\n\nHigh-performance web applications and custom management systems.\n\nWebsite: https://brandbase.in\nContact: info@brandbase.in`;
  }

  const tokenCount = estimateTokens(markdownContent);

  return new NextResponse(markdownContent, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "X-Markdown-Tokens": tokenCount.toString(),
      "x-markdown-tokens": tokenCount.toString(),
      "Vary": "Accept",
      "Cache-Control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400",
      "Link": '</.well-known/api-catalog>; rel="api-catalog", </.well-known/llms.txt>; rel="describedby"; type="text/markdown", </pricing.md>; rel="service-doc"; type="text/markdown"',
    },
  });
}

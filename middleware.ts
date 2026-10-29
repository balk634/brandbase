import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const LINK_HEADER =
  '</.well-known/api-catalog>; rel="api-catalog", </.well-known/llms.txt>; rel="describedby"; type="text/markdown", </pricing.md>; rel="service-doc"; type="text/markdown"';

export function middleware(request: NextRequest) {
  const acceptHeader = request.headers.get("accept") || "";

  // 1. Content negotiation: if an AI agent requests markdown, rewrite internally to markdown generator
  if (acceptHeader.includes("text/markdown")) {
    const url = request.nextUrl.clone();
    url.pathname = "/api/agent-markdown";
    url.searchParams.set("path", request.nextUrl.pathname);

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-agent-path", request.nextUrl.pathname);

    const response = NextResponse.rewrite(url, {
      request: {
        headers: requestHeaders,
      },
    });
    response.headers.set("Vary", "Accept");
    response.headers.set("Link", LINK_HEADER);
    return response;
  }

  // 2. Default browser traffic: serve standard HTML with discovery Link headers
  const response = NextResponse.next();
  response.headers.set("Link", LINK_HEADER);
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api routes
     * - _next/static, _next/image
     * - static assets (.svg, .png, .jpg, .ico, .txt, .xml, etc.)
     */
    "/((?!api|_next/static|_next/image|favicon\\.ico|robots\\.txt|sitemap\\.xml|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico|bmp|woff|woff2|txt|xml|json|md)$).*)",
  ],
};

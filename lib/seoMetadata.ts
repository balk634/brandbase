import type { Metadata } from "next";
import { masterConfig } from "@/config/master";

export const NON_INDEXABLE_ROUTES = ["/privacy", "/terms", "/impressum", "/cookies"] as const;
const nonIndexablePathSet = new Set<string>(NON_INDEXABLE_ROUTES);

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  noIndex?: boolean;
};

function normalizePath(path: string) {
  if (!path || path === "/") return "/";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return normalized.replace(/\/+$/, "") || "/";
}

function toAbsoluteUrl(url: string) {
  if (/^https?:\/\//i.test(url)) return url;
  const baseUrl = masterConfig.metadata.baseUrl.replace(/\/+$/, "");
  const normalizedPath = normalizePath(url);
  return `${baseUrl}${normalizedPath}`;
}

export function buildPageMetadata({
  title,
  description,
  path,
  keywords,
  noIndex = false,
}: PageMetadataInput): Metadata {
  const canonicalPath = normalizePath(path);
  const shouldNoIndex = noIndex || nonIndexablePathSet.has(canonicalPath);
  const openGraphImages = masterConfig.metadata.openGraph.images?.map((image) => ({
    ...image,
    url: toAbsoluteUrl(image.url),
  }));
  const mergedKeywords = Array.from(
    new Set(
      (keywords ?? masterConfig.metadata.keywords)
        .map((keyword) => keyword.trim())
        .filter(Boolean)
    )
  );

  return {
    title,
    description,
    keywords: mergedKeywords,
    alternates: {
      canonical: toAbsoluteUrl(canonicalPath),
    },
    openGraph: {
      ...masterConfig.metadata.openGraph,
      url: toAbsoluteUrl(canonicalPath),
      title,
      description,
      images: openGraphImages,
    },
    twitter: {
      ...masterConfig.metadata.twitter,
      title,
      description,
      images: openGraphImages?.[0]?.url,
    },
    robots: shouldNoIndex
      ? {
          index: false,
          follow: true,
          googleBot: {
            index: false,
            follow: true,
          },
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1,
          },
        }
  };
}

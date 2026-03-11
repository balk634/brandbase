import type { Metadata } from "next";
import { masterConfig } from "@/config/master";

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
  const openGraphImages = masterConfig.metadata.openGraph.images?.map((image) => ({
    ...image,
    url: toAbsoluteUrl(image.url),
  }));

  return {
    title,
    description,
    keywords: keywords ?? masterConfig.metadata.keywords,
    alternates: {
      canonical: canonicalPath,
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
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : undefined,
  };
}

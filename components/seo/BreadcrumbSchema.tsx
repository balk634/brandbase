"use client";

import { usePathname } from "next/navigation";
import { masterConfig } from "@/config/master";

// Pre-compute navigation lookup map for O(1) access
const navMap = new Map<string, string>();
if (masterConfig.navigation) {
  for (const item of masterConfig.navigation) {
    if (item.href) navMap.set(item.href, item.name);
    if (item.subItems) {
      for (const sub of item.subItems) {
        if (sub.href) navMap.set(sub.href, sub.name);
      }
    }
  }
}

/**
 * Renders BreadcrumbList JSON-LD schema without any visual UI.
 * This satisfies SEO requirements for breadcrumb structured data
 * while respecting user preference for a clean, non-breadcrumb UI.
 */
export function BreadcrumbSchema() {
  const pathname = usePathname();
  const baseUrl = masterConfig.metadata.baseUrl.replace(/\/+$/, "");

  // Skip for homepage
  if (pathname === "/") return null;

  const pathSegments = pathname.split("/").filter(Boolean);
  
  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
    // Try to find a human-readable name from navigation or capitalize
    const name = navMap.get(href) || segment
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return { name, href };
  });

  const allBreadcrumbs = [{ name: "Home", href: "/" }, ...breadcrumbs];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": allBreadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `${baseUrl}${crumb.href === "/" ? "" : crumb.href}`
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
    />
  );
}

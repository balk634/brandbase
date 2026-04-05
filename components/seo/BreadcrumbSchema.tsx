"use client";

import { usePathname } from "next/navigation";
import { masterConfig } from "@/config/master";

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
    const navItem = masterConfig.navigation.find(item => item.href === href);
    const subNavItem = masterConfig.navigation
      .flatMap(item => item.subItems ?? [])
      .find(sub => sub.href === href);
    
    const name = navItem?.name || subNavItem?.name || segment
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

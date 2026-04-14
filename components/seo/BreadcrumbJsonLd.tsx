"use client";

import { usePathname } from "next/navigation";
import { masterConfig } from "@/config/master";
import { NAVIGATION, FOOTER_COLUMNS } from "@/config/navigation";

function titleCase(value: string) {
  return value
    .split("-")
    .map((part) => (part ? part[0].toUpperCase() + part.slice(1) : part))
    .join(" ");
}

const labelByPath = (() => {
  const entries: Array<[string, string]> = [
    ["/", "Home"],
    ["/blog", "Blog"],
    ["/process", "Process"],
    ["/pitchdecks", "Pitch Decks"],
  ];

  for (const item of NAVIGATION) {
    entries.push([item.href, item.name]);
    for (const subItem of item.subItems ?? []) {
      entries.push([subItem.href, subItem.name]);
    }
  }

  for (const column of FOOTER_COLUMNS) {
    for (const link of column.links) {
      entries.push([link.href, link.name]);
    }
  }

  return new Map(entries);
})();

export function BreadcrumbJsonLd() {
  const pathname = usePathname();

  if (!pathname || pathname === "/" || pathname.startsWith("/blog/")) {
    return null;
  }

  const baseUrl = masterConfig.metadata.baseUrl.replace(/\/+$/, "");
  const segments = pathname.split("/").filter(Boolean);

  const itemListElement = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: baseUrl,
    },
  ];

  let currentPath = "";
  for (let index = 0; index < segments.length; index += 1) {
    currentPath += `/${segments[index]}`;
    itemListElement.push({
      "@type": "ListItem",
      position: index + 2,
      name: labelByPath.get(currentPath) ?? titleCase(segments[index]),
      item: `${baseUrl}${currentPath}`,
    });
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
    />
  );
}

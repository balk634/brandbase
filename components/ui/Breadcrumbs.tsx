"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { masterConfig } from "@/config/master";
import { cn } from "@/lib/utils";

export function Breadcrumbs({ className }: { className?: string }) {
  const pathname = usePathname();
  const baseUrl = masterConfig.metadata.baseUrl.replace(/\/+$/, "");

  // Don't show breadcrumbs on homepage
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
    <nav aria-label="Breadcrumb" className={cn("py-4 border-b border-grid/5 bg-paper/50 backdrop-blur-sm sticky top-[var(--navbar-height,64px)] z-20", className)}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Container>
        <ol className="flex flex-wrap items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-ink-muted">
          {allBreadcrumbs.map((crumb, index) => {
            const isLast = index === allBreadcrumbs.length - 1;
            return (
              <li key={crumb.href} className="flex items-center gap-2">
                {isLast ? (
                  <span className="text-ink font-semibold" aria-current="page">
                    {crumb.name}
                  </span>
                ) : (
                  <>
                    <Link
                      href={crumb.href}
                      className="hover:text-primary transition-colors hover:underline underline-offset-4"
                    >
                      {crumb.name}
                    </Link>
                    <span className="text-grid/30 font-sans" aria-hidden="true">/</span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </Container>
    </nav>
  );
}

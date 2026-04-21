"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { IconChevronLeft, IconChevronRight, IconDots } from "@tabler/icons-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
}

function getPageNumbers(current: number, total: number): (number | string)[] {
  const pages: (number | string)[] = [];

  if (total <= 7) {
    for (let i = 1; i <= total; i++) pages.push(i);
    return pages;
  }

  if (current <= 3) {
    pages.push(1, 2, 3, 4, "...", total);
  } else if (current >= total - 2) {
    pages.push(1, "...", total - 3, total - 2, total - 1, total);
  } else {
    pages.push(1, "...", current - 1, current, current + 1, "...", total);
  }

  return pages;
}

export function Pagination({ currentPage, totalPages, baseUrl }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = getPageNumbers(currentPage, totalPages);

  return (
    <nav
      className="flex items-center justify-center gap-1 sm:gap-2"
      aria-label="Pagination"
    >
      {/* Previous Button */}
      <PaginationLink
        href={currentPage > 1 ? (currentPage === 2 ? baseUrl : `${baseUrl}?page=${currentPage - 1}`) : undefined}
        disabled={currentPage === 1}
        aria-label="Go to previous page"
      >
        <IconChevronLeft className="w-4 h-4" />
      </PaginationLink>

      {/* Page Numbers */}
      <div className="flex items-center gap-1">
        {pages.map((page, index) => (
          <PageNumber
            key={`${page}-${index}`}
            page={page}
            currentPage={currentPage}
            baseUrl={baseUrl}
          />
        ))}
      </div>

      {/* Next Button */}
      <PaginationLink
        href={currentPage < totalPages ? `${baseUrl}?page=${currentPage + 1}` : undefined}
        disabled={currentPage === totalPages}
        aria-label="Go to next page"
      >
        <IconChevronRight className="w-4 h-4" />
      </PaginationLink>
    </nav>
  );
}

interface PaginationLinkProps {
  href?: string;
  disabled?: boolean;
  children: React.ReactNode;
  "aria-label": string;
}

function PaginationLink({ href, disabled, children, "aria-label": ariaLabel }: PaginationLinkProps) {
  const className = cn(
    "inline-flex items-center justify-center h-9 w-9 sm:h-10 sm:w-10",
    "border border-grid/15 bg-white",
    "text-ink-muted transition-colors duration-200",
    "hover:border-grid/30 hover:text-ink",
    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary",
    disabled && "opacity-40 pointer-events-none border-grid/10 text-ink-muted/50"
  );

  if (disabled || !href) {
    return (
      <span className={className} aria-disabled="true" aria-label={ariaLabel}>
        {children}
      </span>
    );
  }

  return (
    <Link href={href} className={className} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}

interface PageNumberProps {
  page: number | string;
  currentPage: number;
  baseUrl: string;
}

function PageNumber({ page, currentPage, baseUrl }: PageNumberProps) {
  if (page === "...") {
    return (
      <span
        className="inline-flex items-center justify-center h-9 w-9 sm:h-10 sm:w-10 text-ink-muted/50"
        aria-hidden="true"
      >
        <IconDots className="w-4 h-4" />
      </span>
    );
  }

  const isCurrent = page === currentPage;
  const href = page === 1 ? baseUrl : `${baseUrl}?page=${page}`;

  return (
    <Link
      href={href}
      aria-current={isCurrent ? "page" : undefined}
      aria-label={`Go to page ${page}`}
      className={cn(
        "inline-flex items-center justify-center h-9 w-9 sm:h-10 sm:w-10",
        "border text-xs sm:text-sm font-mono font-medium tracking-tight",
        "transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary",
        isCurrent
          ? "border-primary bg-primary text-white pointer-events-none"
          : "border-grid/15 bg-white text-ink-muted hover:border-grid/30 hover:text-ink"
      )}
    >
      {page}
    </Link>
  );
}

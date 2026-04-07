import Link from "next/link";
import { Button } from "./Button";
import { cn } from "@/lib/utils";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
}

export function Pagination({ currentPage, totalPages, baseUrl }: PaginationProps) {
  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const showMax = 5; // Number of pages to show before ellipsis

    if (totalPages <= showMax + 2) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      // Logic for ellipsis
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
      }
    }
    return pages;
  };

  const pages = getPageNumbers();
  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;

  return (
    <nav className="flex items-center justify-center gap-2 mt-16" aria-label="Pagination">
      {/* Previous Button */}
      <Button
        asChild
        variant="outline"
        size="icon"
        className={cn(
          "h-10 w-10 rounded-none border-grid/15 hover:bg-grid/5 group",
          !prevPage && "opacity-20 pointer-events-none"
        )}
      >
        <Link 
            href={prevPage ? `${baseUrl}?page=${prevPage}` : "#"}
            aria-disabled={!prevPage}
            aria-label="Previous Page"
        >
          <IconChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
        </Link>
      </Button>
      
      {/* Numbered Pages */}
      <div className="flex items-center gap-1.5 mx-2">
        {pages.map((page, index) => {
          if (page === "...") {
            return (
              <span key={`ellipsis-${index}`} className="w-8 text-center text-ink-muted font-mono text-xs select-none">
                ...
              </span>
            );
          }

          const isCurrent = page === currentPage;
          return (
            <Button
              key={`page-${page}`}
              asChild
              variant={isCurrent ? "primary" : "outline"}
              className={cn(
                "h-10 w-10 rounded-none p-0 font-mono text-xs transition-all",
                isCurrent ? "border-primary bg-primary text-white" : "border-grid/15 text-ink hover:border-grid/30 bg-transparent"
              )}
            >
              <Link href={`${baseUrl}?page=${page}`} aria-current={isCurrent ? "page" : undefined}>
                {page}
              </Link>
            </Button>
          );
        })}
      </div>

      {/* Next Button */}
      <Button
        asChild
        variant="outline"
        size="icon"
        className={cn(
          "h-10 w-10 rounded-none border-grid/15 hover:bg-grid/5 group",
          !nextPage && "opacity-20 pointer-events-none"
        )}
      >
        <Link 
            href={nextPage ? `${baseUrl}?page=${nextPage}` : "#"}
            aria-disabled={!nextPage}
            aria-label="Next Page"
        >
          <IconChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </Button>
    </nav>
  );
}

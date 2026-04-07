import Link from "next/link";
import { Button } from "./Button";
import { cn } from "@/lib/utils";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
}

export function Pagination({ currentPage, totalPages, baseUrl }: PaginationProps) {
  if (totalPages <= 1) return null;

  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;

  return (
    <nav className="flex items-center justify-center gap-6 mt-16" aria-label="Pagination">
      <Button
        asChild
        variant="outline"
        size="icon"
        className={cn(
          "h-12 w-12 rounded-none border-grid/20 hover:bg-grid/5 group",
          !prevPage && "opacity-20 pointer-events-none"
        )}
      >
        <Link 
            href={prevPage ? `${baseUrl}?page=${prevPage}` : "#"}
            aria-disabled={!prevPage}
            aria-label="Previous Page"
        >
          <IconArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
        </Link>
      </Button>
      
      <div className="flex items-center gap-3 px-6 h-12 border-x border-grid/10">
        <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-ink-muted select-none">PAGE</span>
        <span className="text-base font-mono font-bold text-ink min-w-[1.2ch] text-center">{currentPage}</span>
        <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-ink-muted select-none">OF</span>
        <span className="text-base font-mono font-bold text-ink min-w-[1.2ch] text-center">{totalPages}</span>
      </div>

      <Button
        asChild
        variant="outline"
        size="icon"
        className={cn(
          "h-12 w-12 rounded-none border-grid/20 hover:bg-grid/5 group",
          !nextPage && "opacity-20 pointer-events-none"
        )}
      >
        <Link 
            href={nextPage ? `${baseUrl}?page=${nextPage}` : "#"}
            aria-disabled={!nextPage}
            aria-label="Next Page"
        >
          <IconArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </Button>
    </nav>
  );
}

import { cn } from "@/lib/utils";

interface KickerProps {
  children: React.ReactNode;
  className?: string;
}

function formatKickerChildren(children: React.ReactNode) {
  if (typeof children === "string" || typeof children === "number") {
    const raw = String(children).trim();
    const unwrapped = raw.replace(/^\[\s*/, "").replace(/\s*\]$/, "").trim();
    return `[ ${unwrapped} ]`;
  }

  return children;
}

export function Kicker({ children, className }: KickerProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center px-3 py-1 border border-grid/15 bg-paper/70 text-[10px] font-mono uppercase tracking-[0.35em] text-ink-muted",
        className
      )}
    >
      {formatKickerChildren(children)}
    </div>
  );
}


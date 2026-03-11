"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function DraggableScroller({
  className,
  children,
  "aria-label": ariaLabel,
}: {
  className?: string;
  children: React.ReactNode;
  "aria-label"?: string;
}) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [dragging, setDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragStartScrollLeft = useRef(0);

  return (
    <div
      ref={scrollerRef}
      className={cn(
        "overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing touch-pan-y",
        dragging && "select-none",
        className
      )}
      aria-label={ariaLabel}
      onPointerDown={(e) => {
        if (e.pointerType === "mouse" && e.button !== 0) return;

        const el = scrollerRef.current;
        if (!el) return;

        setDragging(true);
        dragStartX.current = e.clientX;
        dragStartScrollLeft.current = el.scrollLeft;

        el.setPointerCapture(e.pointerId);
        if (e.pointerType === "mouse") e.preventDefault();
      }}
      onPointerMove={(e) => {
        if (!dragging) return;
        const el = scrollerRef.current;
        if (!el) return;
        const deltaX = e.clientX - dragStartX.current;
        el.scrollLeft = dragStartScrollLeft.current - deltaX;
      }}
      onPointerUp={(e) => {
        const el = scrollerRef.current;
        setDragging(false);
        try {
          el?.releasePointerCapture(e.pointerId);
        } catch {}
      }}
      onPointerCancel={(e) => {
        const el = scrollerRef.current;
        setDragging(false);
        try {
          el?.releasePointerCapture(e.pointerId);
        } catch {}
      }}
    >
      {children}
    </div>
  );
}

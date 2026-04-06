"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils";
import { IconArrowsLeftRight } from "@tabler/icons-react";

function OldSiteMock() {
  return (
    <div className="h-full w-full bg-white">
      <div className="h-10 border-b border-grid/15 bg-paper/60 px-4 flex items-center justify-between">
        <div className="h-3 w-24 bg-grid/10" />
        <div className="flex items-center gap-2">
          <div className="h-2.5 w-10 bg-grid/10" />
          <div className="h-2.5 w-10 bg-grid/10" />
          <div className="h-2.5 w-10 bg-grid/10" />
        </div>
      </div>
      <div className="p-5 space-y-4">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-8 space-y-2">
            <div className="h-4 w-5/6 bg-grid/15" />
            <div className="h-3 w-full bg-grid/10" />
            <div className="h-3 w-11/12 bg-grid/10" />
            <div className="h-3 w-10/12 bg-grid/10" />
          </div>
          <div className="col-span-4 border border-grid/15 bg-paper/50 p-3 space-y-2">
            <div className="h-2.5 w-3/4 bg-grid/10" />
            <div className="h-2.5 w-full bg-grid/10" />
            <div className="h-2.5 w-5/6 bg-grid/10" />
            <div className="mt-2 h-7 w-full bg-grid/15" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="border border-grid/15 bg-paper/50 p-3 space-y-2">
              <div className="h-2.5 w-3/4 bg-grid/10" />
              <div className="h-2.5 w-full bg-grid/10" />
            </div>
          ))}
        </div>

        <div className="border border-red-500/20 bg-red-500/10 px-3 py-2 flex items-center justify-between">
          <div className="h-2.5 w-40 bg-red-500/20" />
          <div className="h-2.5 w-16 bg-red-500/20" />
        </div>
      </div>
    </div>
  );
}

function NewSiteMock() {
  return (
    <div className="h-full w-full bg-white">
      <div className="h-10 border-b border-grid/15 bg-white px-4 flex items-center justify-between">
        <div className="h-3 w-24 bg-grid/10" />
        <div className="flex items-center gap-6">
          <div className="h-2.5 w-14 bg-grid/10" />
          <div className="h-2.5 w-14 bg-grid/10" />
          <div className="h-7 w-20 bg-primary/15 border border-primary/20" />
        </div>
      </div>

      <div className="p-6">
        <div className="max-w-[360px] space-y-4">
          <div className="h-7 w-3/4 bg-grid/15" />
          <div className="h-3 w-full bg-grid/10" />
          <div className="h-3 w-10/12 bg-grid/10" />
          <div className="pt-2 flex items-center gap-3">
            <div className="h-10 w-32 bg-primary/20 border border-primary/25" />
            <div className="h-10 w-28 bg-paper/60 border border-grid/15" />
          </div>
        </div>

        <div className="mt-7 grid grid-cols-3 gap-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="border border-grid/15 bg-paper/40 p-4">
              <div className="h-2.5 w-16 bg-grid/10" />
              <div className="mt-3 h-2.5 w-24 bg-grid/10" />
            </div>
          ))}
        </div>

        <div className="mt-6 border border-green-600/20 bg-green-600/10 px-3 py-2 flex items-center justify-between">
          <div className="h-2.5 w-44 bg-green-600/20" />
          <div className="h-2.5 w-20 bg-green-600/20" />
        </div>
      </div>
    </div>
  );
}

export function BeforeAfterSlider({
  className,
  initial = 54,
  leftLabel = "BEFORE",
  rightLabel = "AFTER",
}: {
  className?: string;
  initial?: number;
  leftLabel?: string;
  rightLabel?: string;
}) {
  const [value, setValue] = useState(initial);
  const inputId = useId();

  return (
    <div className={cn("w-full", className)}>
      <div className="relative overflow-hidden border border-grid/15 bg-white">
        <div className="relative aspect-4/3 md:aspect-5/4">
          <NewSiteMock />

          <div className="absolute inset-0 overflow-hidden" style={{ width: `${value}%` }}>
            <OldSiteMock />
          </div>

          <div
            className="pointer-events-none absolute inset-y-0"
            style={{ left: `${value}%` }}
          >
            <div className="absolute inset-y-0 -translate-x-px w-px bg-grid/25" />
            <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 h-9 w-9 border border-grid/15 bg-paper/80 grid place-items-center">
              <IconArrowsLeftRight className="h-4 w-4 text-ink-muted" strokeWidth={1.5} />
            </div>
          </div>

          <div className="pointer-events-none absolute top-3 left-3 font-mono text-[10px] uppercase tracking-[0.35em] text-ink-muted">
            {leftLabel}
          </div>
          <div className="pointer-events-none absolute top-3 right-3 font-mono text-[10px] uppercase tracking-[0.35em] text-ink-muted">
            {rightLabel}
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <label
          htmlFor={inputId}
          className="font-mono text-[10px] uppercase tracking-[0.35em] text-ink-muted"
        >
          Drag to compare
        </label>
        <input
          id={inputId}
          type="range"
          min={10}
          max={90}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="w-full sm:max-w-[360px] accent-primary"
          aria-label="Compare old vs modern website"
        />
      </div>
    </div>
  );
}


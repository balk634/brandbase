"use client";

import { useEffect, useState } from "react";

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

type Snapshot = {
  loadPct: number;
  latencyMs: number;
  rps: number;
  cacheHitPct: number;
};

export function StatusGraph() {
  const [snapshot, setSnapshot] = useState<Snapshot>({
    loadPct: 92,
    latencyMs: 12.4,
    rps: 840,
    cacheHitPct: 99.2,
  });

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) return;

    let intervalId: number | null = null;

    const tick = () => {
      setSnapshot((prev) => {
        const nextLatency = clamp(
          Math.round((prev.latencyMs + (Math.random() - 0.5) * 2) * 10) / 10,
          8,
          24
        );
        const nextLoad = clamp(
          Math.round(prev.loadPct + (Math.random() - 0.5) * 6),
          74,
          99
        );
        const nextRps = clamp(
          Math.round(prev.rps + (Math.random() - 0.5) * 120),
          320,
          1400
        );
        const nextCache = clamp(
          Math.round((prev.cacheHitPct + (Math.random() - 0.5) * 0.6) * 10) / 10,
          96,
          99.9
        );

        return {
          loadPct: nextLoad,
          latencyMs: nextLatency,
          rps: nextRps,
          cacheHitPct: nextCache,
        };
      });
    };

    const start = () => {
      if (intervalId !== null) return;
      intervalId = window.setInterval(tick, 1600);
    };

    const stop = () => {
      if (intervalId === null) return;
      window.clearInterval(intervalId);
      intervalId = null;
    };

    const handleVisibility = () => {
      if (document.visibilityState === "visible") start();
      else stop();
    };

    handleVisibility();
    document.addEventListener("visibilitychange", handleVisibility, { passive: true });

    const handleMotion = () => {
      if (motionQuery.matches) stop();
      else handleVisibility();
    };

    if (typeof motionQuery.addEventListener === "function") {
      motionQuery.addEventListener("change", handleMotion);
    } else {
      // Safari < 14
      motionQuery.addListener(handleMotion);
    }

    return () => {
      stop();
      document.removeEventListener("visibilitychange", handleVisibility);
      if (typeof motionQuery.removeEventListener === "function") {
        motionQuery.removeEventListener("change", handleMotion);
      } else {
        motionQuery.removeListener(handleMotion);
      }
    };
  }, []);

  return (
    <div className="mt-6 pt-4 border-t border-grid/10">
      <div className="flex items-center justify-between text-[10px] text-ink-muted font-mono">
        <span>SERVER LOAD</span>
        <span className="tabular-nums">{snapshot.latencyMs.toFixed(1)}ms</span>
      </div>

      <div className="mt-2 h-1.5 w-full bg-grid/10 rounded-full overflow-hidden relative">
        <div
          className="h-full bg-primary transition-[width] duration-700 ease-out"
          style={{ width: `${snapshot.loadPct}%` }}
        />
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2 text-[10px] font-mono text-ink-muted">
        <div className="border border-grid/15 bg-paper/60 px-2 py-1 flex items-center justify-between">
          <span>REQ/S</span>
          <span className="tabular-nums text-ink">{snapshot.rps}</span>
        </div>
        <div className="border border-grid/15 bg-paper/60 px-2 py-1 flex items-center justify-between">
          <span>CACHE</span>
          <span className="tabular-nums text-ink">{snapshot.cacheHitPct.toFixed(1)}%</span>
        </div>
        <div className="border border-grid/15 bg-paper/60 px-2 py-1 flex items-center justify-between">
          <span>LOAD</span>
          <span className="tabular-nums text-ink">{snapshot.loadPct}%</span>
        </div>
      </div>
    </div>
  );
}

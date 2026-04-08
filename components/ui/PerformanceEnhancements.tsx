"use client";

import { useEffect, useState } from "react";
import type { ComponentType } from "react";

type PerformanceEnhancementsProps = {
  enableSmoothScroll: boolean;
  enableMicroInteractions: boolean;
  enableScrollProgress: boolean;
};

type LoadedEnhancements = {
  NavigationTransitionManager?: ComponentType;
  SmoothScroll?: ComponentType<{ enabled?: boolean }>;
  MicroInteractionEngine?: ComponentType<{ enabled?: boolean }>;
  ScrollProgress?: ComponentType;
};

function scheduleIdleLoad(callback: () => void) {
  type RequestIdleCallback = (
    cb: () => void,
    opts?: { timeout?: number }
  ) => number;
  type CancelIdleCallback = (id: number) => void;

  const requestIdle = (window as unknown as { requestIdleCallback?: RequestIdleCallback })
    .requestIdleCallback;
  const cancelIdle = (window as unknown as { cancelIdleCallback?: CancelIdleCallback })
    .cancelIdleCallback;

  if (typeof requestIdle === "function") {
    const idleId = requestIdle(callback, { timeout: 2500 });
    return () => {
      if (typeof cancelIdle === "function") cancelIdle(idleId);
    };
  }

  const timeoutId = window.setTimeout(callback, 1200);
  return () => window.clearTimeout(timeoutId);
}

export function PerformanceEnhancements({
  enableSmoothScroll,
  enableMicroInteractions,
  enableScrollProgress,
}: PerformanceEnhancementsProps) {
  const [loaded, setLoaded] = useState<LoadedEnhancements | null>(null);

  useEffect(() => {
    let cancelled = false;

    // Check if device is touch or prefers reduced motion (avoiding heavy chunks on mobile)
    const isTouchDevice = typeof window !== "undefined" && 
      (window.matchMedia("(hover: none) and (pointer: coarse)").matches || 
       navigator.maxTouchPoints > 0 || 
       "ontouchstart" in window);
       
    const prefersReducedMotion = typeof window !== "undefined" && 
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const clearSchedule = scheduleIdleLoad(async () => {
      const modules = await Promise.all([
        import("./NavigationTransitionManager"),
        enableSmoothScroll && !isTouchDevice && !prefersReducedMotion ? import("./SmoothScroll") : Promise.resolve(null),
        enableMicroInteractions && !isTouchDevice && !prefersReducedMotion ? import("./MicroInteractionEngine") : Promise.resolve(null),
        enableScrollProgress ? import("./ScrollProgress") : Promise.resolve(null),
      ]);

      if (cancelled) return;

      const [navigationModule, smoothScrollModule, microModule, scrollProgressModule] = modules;

      setLoaded({
        NavigationTransitionManager: navigationModule.NavigationTransitionManager,
        SmoothScroll: smoothScrollModule?.SmoothScroll,
        MicroInteractionEngine: microModule?.MicroInteractionEngine,
        ScrollProgress: scrollProgressModule?.ScrollProgress,
      });
    });

    return () => {
      cancelled = true;
      clearSchedule();
    };
  }, [enableSmoothScroll, enableMicroInteractions, enableScrollProgress]);

  if (!loaded) return null;

  const NavigationTransitionManager = loaded.NavigationTransitionManager;
  const SmoothScroll = loaded.SmoothScroll;
  const MicroInteractionEngine = loaded.MicroInteractionEngine;
  const ScrollProgress = loaded.ScrollProgress;

  return (
    <>
      {NavigationTransitionManager ? <NavigationTransitionManager /> : null}
      {SmoothScroll ? <SmoothScroll enabled={enableSmoothScroll} /> : null}
      {MicroInteractionEngine ? <MicroInteractionEngine enabled={enableMicroInteractions} /> : null}
      {ScrollProgress ? <ScrollProgress /> : null}
    </>
  );
}

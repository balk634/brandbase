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

    const loadModules = async () => {
      // Delay until after interaction to save Main thread parsing time
      await new Promise(resolve => setTimeout(resolve, 3000));
      if (cancelled) return;

      const modules = await Promise.all([
        import("./NavigationTransitionManager"),
        enableSmoothScroll ? import("./SmoothScroll") : Promise.resolve(null),
        enableMicroInteractions ? import("./MicroInteractionEngine") : Promise.resolve(null),
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
    };

    // Attempt standard idle load logic
    const clearSchedule = scheduleIdleLoad(loadModules);

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

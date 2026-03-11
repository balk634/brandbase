"use client";

import { useEffect } from "react";

type SmoothScrollProps = {
    enabled?: boolean;
};

export function SmoothScroll({ enabled = true }: SmoothScrollProps) {
    useEffect(() => {
        if (!enabled) return;

        const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        const isTouchDevice =
            navigator.maxTouchPoints > 0 || "ontouchstart" in window;

        // Avoid extra JS/RAF work on touch + reduced motion environments.
        if (motionQuery.matches || isTouchDevice) return;

        let lenis: import("lenis").default | null = null;
        let rafId: number | null = null;
        let cancelled = false;
        let clearIdle: (() => void) | null = null;

        const start = async () => {
            try {
                const { default: Lenis } = await import("lenis");
                if (cancelled) return;

                lenis = new Lenis({
                    duration: 1.25,
                    easing: (t) => 1 - Math.pow(1 - t, 3),
                    orientation: "vertical",
                    gestureOrientation: "vertical",
                    smoothWheel: true,
                    wheelMultiplier: 0.95,
                    touchMultiplier: 2,
                });
                (window as Window & { __lenis?: import("lenis").default }).__lenis = lenis;

                const raf = (time: number) => {
                    lenis?.raf(time);
                    rafId = requestAnimationFrame(raf);
                };

                rafId = requestAnimationFrame(raf);
            } catch {
                // If Lenis fails to load for any reason, fall back to native scrolling.
            }
        };

        type RequestIdleCallback = (
            cb: () => void,
            opts?: { timeout?: number }
        ) => number;
        type CancelIdleCallback = (id: number) => void;

        const requestIdle = (window as unknown as { requestIdleCallback?: RequestIdleCallback })
            .requestIdleCallback;
        const cancelIdle = (window as unknown as { cancelIdleCallback?: CancelIdleCallback })
            .cancelIdleCallback;

        // Defer loading Lenis until the browser is idle to avoid impacting LCP/TBT.
        if (typeof requestIdle === "function") {
            const idleId = requestIdle(() => void start(), { timeout: 2000 });
            clearIdle = () => {
                if (typeof cancelIdle === "function") cancelIdle(idleId);
            };
        } else {
            const timeoutId = window.setTimeout(() => void start(), 1);
            clearIdle = () => window.clearTimeout(timeoutId);
        }

        return () => {
            cancelled = true;
            clearIdle?.();

            if (rafId !== null) cancelAnimationFrame(rafId);
            lenis?.destroy();
            lenis = null;
            delete (window as Window & { __lenis?: import("lenis").default }).__lenis;
        };
    }, [enabled]);

    return null;
}

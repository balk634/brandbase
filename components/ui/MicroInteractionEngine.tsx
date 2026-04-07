"use client";

import { useEffect } from "react";

const INTERACTIVE_SURFACE_SELECTOR = [
  "[data-mi-surface]",
  "[data-mi-card]",
  ".mi-surface",
  ".mi-card",
  ".card-hover",
  ".group.cursor-default",
  "[class*='group'][class*='cursor-default']",
  "[class*='border-grid/15'][class*='bg-white']",
  "[class*='border-grid/10'][class*='bg-white']",
  "[class*='border-grid/15'][class*='bg-paper']",
].join(",");

const DEFAULT_X = "50%";
const DEFAULT_Y = "50%";
const ACTIVATION_ROOT_MARGIN = "160px";
const MAX_SURFACE_WIDTH = 940;
const MAX_SURFACE_HEIGHT = 620;
const MAX_SURFACE_AREA = 420000;
const POINTER_LERP = 0.18;
const POINTER_SETTLE_DISTANCE = 0.35;
const ICON_HEIGHT_CLASS_PATTERN = /\bh-(6|7|8|9|10|11|12|14)\b/;
const ICON_WIDTH_CLASS_PATTERN = /\bw-(6|7|8|9|10|11|12|14)\b/;
const ICON_GRID_CLASS_PATTERN = /\bgrid\b/;
const ICON_CENTER_CLASS_PATTERN = /\bplace-items-center\b/;
const NON_INTERACTIVE_CONTAINER_TAGS = new Set([
  "HTML",
  "BODY",
  "MAIN",
  "SECTION",
  "NAV",
  "HEADER",
  "FOOTER",
  "UL",
  "OL",
]);

function supportsLivePointerMicroInteractions() {
  if (typeof window === "undefined") return false;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return finePointer && !reduceMotion;
}

function isLikelyIconContainer(el: HTMLElement) {
  if (!(el.firstElementChild instanceof SVGElement)) return false;
  if (el.children.length !== 1) return false;
  const className = el.className || "";
  return (
    ICON_HEIGHT_CLASS_PATTERN.test(className) &&
    ICON_WIDTH_CLASS_PATTERN.test(className) &&
    ICON_GRID_CLASS_PATTERN.test(className) &&
    ICON_CENTER_CLASS_PATTERN.test(className)
  );
}

type MicroInteractionEngineProps = {
  enabled?: boolean;
};

export function MicroInteractionEngine({ enabled = true }: MicroInteractionEngineProps) {
  useEffect(() => {
    if (!enabled) return;
    if (!supportsLivePointerMicroInteractions()) return;

    const tracked = new WeakSet<HTMLElement>();
    const active = new WeakSet<HTMLElement>();
    const cleanups = new Set<() => void>();
    const pendingRoots = new Set<ParentNode>();
    let flushRafId = 0;

    const activateElement = (el: HTMLElement) => {
      if (active.has(el)) return;
      active.add(el);

      const computed = window.getComputedStyle(el);
      el.style.setProperty("--mi-bg-base", computed.backgroundColor);
      el.style.setProperty("--mi-border-base", computed.borderColor);

      el
        .querySelectorAll<HTMLElement>("[data-mi-icon], .card-hover-icon")
        .forEach((iconEl) => iconEl.classList.add("mi-card-icon"));

      el.querySelectorAll<SVGSVGElement>("svg").forEach((iconSvg) => {
        const parent = iconSvg.parentElement;
        if (!(parent instanceof HTMLElement) || parent.dataset.miIcon === "off") return;
        if (isLikelyIconContainer(parent)) {
          parent.classList.add("mi-card-icon");
        }
      });

      let surfaceRect = el.getBoundingClientRect();

      const refreshRect = () => {
        surfaceRect = el.getBoundingClientRect();
        return surfaceRect;
      };

      const setPointerVars = (x: number, y: number) => {
        const normalizedX = surfaceRect.width > 0 ? (x / surfaceRect.width - 0.5) * 2 : 0;
        const normalizedY = surfaceRect.height > 0 ? (y / surfaceRect.height - 0.5) * 2 : 0;
        el.style.setProperty("--mi-x", `${x.toFixed(2)}px`);
        el.style.setProperty("--mi-y", `${y.toFixed(2)}px`);
        el.style.setProperty("--mi-tilt-x", normalizedX.toFixed(3));
        el.style.setProperty("--mi-tilt-y", normalizedY.toFixed(3));
      };

      const getLocalPointer = (event: PointerEvent) => {
        const bounds = refreshRect();
        const x = Math.max(0, Math.min(event.clientX - bounds.left, bounds.width));
        const y = Math.max(0, Math.min(event.clientY - bounds.top, bounds.height));
        return { x, y };
      };

      let rafId = 0;
      let currentX = surfaceRect.width * 0.5;
      let currentY = surfaceRect.height * 0.5;
      let targetX = currentX;
      let targetY = currentY;

      const queueFrame = () => {
        if (rafId !== 0) return;
        rafId = window.requestAnimationFrame(stepPointer);
      };

      const stepPointer = () => {
        rafId = 0;

        currentX += (targetX - currentX) * POINTER_LERP;
        currentY += (targetY - currentY) * POINTER_LERP;
        setPointerVars(currentX, currentY);

        const deltaX = Math.abs(targetX - currentX);
        const deltaY = Math.abs(targetY - currentY);
        const settled = deltaX <= POINTER_SETTLE_DISTANCE && deltaY <= POINTER_SETTLE_DISTANCE;
        if (settled) {
          setPointerVars(targetX, targetY);
          return;
        }

        queueFrame();
      };

      const handlePointerEnter = (event: PointerEvent) => {
        const pointer = getLocalPointer(event);
        currentX = pointer.x;
        currentY = pointer.y;
        targetX = pointer.x;
        targetY = pointer.y;
        setPointerVars(currentX, currentY);
      };

      const handlePointerMove = (event: PointerEvent) => {
        const pointer = getLocalPointer(event);
        targetX = pointer.x;
        targetY = pointer.y;
        queueFrame();
      };

      const handlePointerLeave = () => {
        const bounds = refreshRect();
        targetX = bounds.width * 0.5;
        targetY = bounds.height * 0.5;
        queueFrame();
      };

      el.addEventListener("pointerenter", handlePointerEnter, { passive: true });
      el.addEventListener("pointermove", handlePointerMove, { passive: true });
      el.addEventListener("pointerleave", handlePointerLeave, { passive: true });

      const cleanup = () => {
        if (rafId !== 0) window.cancelAnimationFrame(rafId);
        el.removeEventListener("pointerenter", handlePointerEnter);
        el.removeEventListener("pointermove", handlePointerMove);
        el.removeEventListener("pointerleave", handlePointerLeave);
        el.style.setProperty("--mi-x", DEFAULT_X);
        el.style.setProperty("--mi-y", DEFAULT_Y);
        el.style.setProperty("--mi-tilt-x", "0");
        el.style.setProperty("--mi-tilt-y", "0");
      };

      cleanups.add(cleanup);
    };

    let intersectionObserver: IntersectionObserver | null = null;
    if (typeof window.IntersectionObserver === "function") {
      intersectionObserver = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            const el = entry.target;
            if (el instanceof HTMLElement) activateElement(el);
            intersectionObserver?.unobserve(el);
          }
        },
        { rootMargin: ACTIVATION_ROOT_MARGIN }
      );
    }

    const registerElement = (el: HTMLElement) => {
      if (tracked.has(el) || el.dataset.miOff === "true") return;
      if (NON_INTERACTIVE_CONTAINER_TAGS.has(el.tagName)) return;

      const width = el.clientWidth;
      const height = el.clientHeight;
      const area = width * height;
      if (
        width > MAX_SURFACE_WIDTH ||
        height > MAX_SURFACE_HEIGHT ||
        area > MAX_SURFACE_AREA
      ) {
        return;
      }

      tracked.add(el);

      el.classList.add("mi-surface");
      el.style.setProperty("--mi-x", DEFAULT_X);
      el.style.setProperty("--mi-y", DEFAULT_Y);
      if (intersectionObserver) {
        intersectionObserver.observe(el);
      } else {
        activateElement(el);
      }
    };

    const registerAll = (root: ParentNode) => {
      root.querySelectorAll<HTMLElement>(INTERACTIVE_SURFACE_SELECTOR).forEach(registerElement);
    };

    const flushPendingRoots = () => {
      flushRafId = 0;
      const roots = Array.from(pendingRoots);
      pendingRoots.clear();

      for (const root of roots) {
        if (!(root instanceof HTMLElement || root instanceof DocumentFragment || root instanceof Document)) {
          continue;
        }
        if (root instanceof HTMLElement && root.matches(INTERACTIVE_SURFACE_SELECTOR)) {
          registerElement(root);
        }
        registerAll(root);
      }
    };

    const queueRoot = (root: ParentNode) => {
      pendingRoots.add(root);
      if (flushRafId !== 0) return;
      flushRafId = window.requestAnimationFrame(flushPendingRoots);
    };

    queueRoot(document);

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          queueRoot(node);
        });
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      intersectionObserver?.disconnect();
      if (flushRafId !== 0) window.cancelAnimationFrame(flushRafId);
      cleanups.forEach((cleanup) => cleanup());
      cleanups.clear();
    };
  }, [enabled]);

  return null;
}

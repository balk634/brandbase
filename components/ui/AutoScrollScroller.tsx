"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AutoScrollScrollerProps {
  className?: string;
  speedPxPerSecond?: number;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  "aria-label"?: string;
}

export function AutoScrollScroller({
  className,
  speedPxPerSecond = 26,
  pauseOnHover = true,
  children,
  "aria-label": ariaLabel,
}: AutoScrollScrollerProps) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const state = useRef({
    pos: 0,
    lastTime: 0,
    isHovering: false,
    isDragging: false,
    dragStartX: 0,
    dragStartPos: 0,
    pointerId: null as number | null,
  });

  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    state.current.pos = el.scrollLeft;
    state.current.lastTime = 0;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let shouldReduceMotion = motionQuery.matches;
    let isInView = false;
    let isPageVisible = document.visibilityState === "visible";

    const canAnimate = () => isInView && isPageVisible && !shouldReduceMotion;

    const animate = (time: number) => {
      const el = scrollerRef.current;
      if (!el) return;

      const s = state.current;

      if (!s.lastTime) {
        s.lastTime = time;
      }

      const dt = time - s.lastTime;
      s.lastTime = time;

      const isPaused = (pauseOnHover && s.isHovering) || s.isDragging;

      if (!isPaused) {
        const safeDt = Math.min(dt, 100);
        s.pos += (speedPxPerSecond * safeDt) / 1000;
      } else {
        s.pos = el.scrollLeft;
      }

      const canScroll = el.scrollWidth > el.clientWidth;
      const maxScroll = el.scrollWidth / 2;

      if (canScroll && maxScroll > 0) {
        if (s.pos >= maxScroll) {
          s.pos -= maxScroll;
        } else if (s.pos < 0) {
          s.pos += maxScroll;
        }
      }

      if (!s.isDragging) {
        el.scrollLeft = s.pos;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    const start = () => {
      if (requestRef.current !== null) return;
      requestRef.current = requestAnimationFrame(animate);
    };

    const stop = () => {
      if (requestRef.current === null) return;
      cancelAnimationFrame(requestRef.current);
      requestRef.current = null;

      const el = scrollerRef.current;
      if (el) state.current.pos = el.scrollLeft;
      state.current.lastTime = 0;
    };

    const sync = () => {
      if (canAnimate()) start();
      else stop();
    };

    const onVisibility = () => {
      isPageVisible = document.visibilityState === "visible";
      sync();
    };

    document.addEventListener("visibilitychange", onVisibility, { passive: true });

    const onMotionChange = () => {
      shouldReduceMotion = motionQuery.matches;
      sync();
    };

    if (typeof motionQuery.addEventListener === "function") {
      motionQuery.addEventListener("change", onMotionChange);
    } else {
      // Safari < 14
      motionQuery.addListener(onMotionChange);
    }

    let observer: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        (entries) => {
          isInView = entries.some((entry) => entry.isIntersecting);
          sync();
        },
        { threshold: 0.01 }
      );
      observer.observe(el);
    } else {
      isInView = true;
    }

    sync();

    return () => {
      stop();
      observer?.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      if (typeof motionQuery.removeEventListener === "function") {
        motionQuery.removeEventListener("change", onMotionChange);
      } else {
        motionQuery.removeListener(onMotionChange);
      }
    };
  }, [pauseOnHover, speedPxPerSecond]);

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    const el = scrollerRef.current;
    if (!el) return;

    const s = state.current;
    s.isDragging = true;
    s.pointerId = e.pointerId;
    s.dragStartX = e.clientX;
    s.dragStartPos = el.scrollLeft;

    try {
      el.setPointerCapture(e.pointerId);
    } catch {}

    el.style.cursor = "grabbing";
    el.style.userSelect = "none";
    if (e.pointerType === "mouse") e.preventDefault();
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const s = state.current;
    if (!s.isDragging) return;
    const el = scrollerRef.current;
    if (!el) return;

    const dx = e.clientX - s.dragStartX;
    const nextPos = s.dragStartPos - dx;

    el.scrollLeft = nextPos;
    s.pos = nextPos;
  };

  const endDrag = () => {
    const el = scrollerRef.current;
    const s = state.current;
    if (!s.isDragging) return;

    s.isDragging = false;

    if (el) {
      const canScroll = el.scrollWidth > el.clientWidth;
      const maxScroll = el.scrollWidth / 2;

      if (canScroll && maxScroll > 0) {
        const current = el.scrollLeft;
        let next = current;

        if (next >= maxScroll) next -= maxScroll;
        else if (next < 0) next += maxScroll;

        if (next !== current) {
          el.scrollLeft = next;
        }

        s.pos = next;
      }

      if (s.pointerId !== null) {
        try {
          el.releasePointerCapture(s.pointerId);
        } catch {}
      }
      el.style.cursor = "grab";
      el.style.userSelect = "";
    }

    s.pointerId = null;
  };

  return (
    <div
      ref={scrollerRef}
      className={cn("overflow-x-hidden whitespace-nowrap will-change-scroll", className)}
      style={{ touchAction: "pan-y", cursor: "grab" }}
      aria-label={ariaLabel}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onMouseEnter={() => (state.current.isHovering = true)}
      onMouseLeave={() => (state.current.isHovering = false)}
    >
      {children}
    </div>
  );
}

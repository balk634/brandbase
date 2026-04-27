"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface AutoScrollScrollerProps {
  className?: string;
  speedPxPerSecond?: number;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  "aria-label"?: string;
}

export function AutoScrollScroller({
  className,
  pauseOnHover = true,
  children,
  "aria-label": ariaLabel,
}: AutoScrollScrollerProps) {
  return (
    <div
      className={cn("overflow-hidden whitespace-nowrap", className)}
      aria-label={ariaLabel}
    >
      <style jsx>{`
        @keyframes scroll-testimonials {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .animate-scroll-testimonials {
            /* 1000px at 26px/s is ~38s. We can fine-tune if needed */
            animation: scroll-testimonials 60s linear infinite;
            will-change: transform;
        }
        .animate-scroll-testimonials:hover {
            ${pauseOnHover ? 'animation-play-state: paused;' : ''}
        }
        @media (prefers-reduced-motion: reduce) {
            .animate-scroll-testimonials {
                animation: none;
            }
        }
      `}</style>
      <div className="flex w-max animate-scroll-testimonials">
        {children}
        {/* Clone children for seamless scroll */}
        {children}
      </div>
    </div>
  );
}

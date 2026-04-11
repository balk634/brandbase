"use client";

import { useEffect, useRef } from "react";
import { masterConfig } from "@/config/master";

interface CalInlineProps {
  className?: string;
}

export function CalInline({ className }: CalInlineProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run if not already loaded in this container to prevent double embeds
    if (!containerRef.current || containerRef.current.dataset.loaded) return;

    let timerId: number;

    const loadCal = () => {
      (function (C, A, L) {
        const p = function (a: { q: unknown[] }, ar: unknown) {
          a.q.push(ar);
        };
        const d = C.document;

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (C as any).Cal = (C as any).Cal || function (...args: unknown[]) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const cal = (C as any).Cal;
          const ar = args;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const api: any = function (...innerArgs: unknown[]) {
              p(api, innerArgs);
            };
            const namespace = ar[1] as string;
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
      })(window, "https://booking.brandbase.in/embed/embed.js", "init");

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const Cal = (window as any).Cal;
      const namespace = "30min";

      Cal("init", namespace, { origin: "https://booking.brandbase.in" });

      Cal.ns[namespace]("inline", {
        elementOrSelector: "#my-cal-inline-30min",
        config: {
          layout: "month_view",
          useSlotsViewOnSmallScreen: "true",
          theme: "light",
        },
        calLink: masterConfig.contact.calcomSlug, // Using the slug from masterConfig
      });

      Cal.ns[namespace]("ui", {
        theme: "light",
        cssVarsPerTheme: {
          light: { "cal-brand": masterConfig.colors.primary }, // Link to theme primary color
          dark: { "cal-brand": "#fafafa" },
        },
        hideEventTypeDetails: true,
        layout: "month_view",
      });

      if (containerRef.current) {
        containerRef.current.dataset.loaded = "true";
      }
    };

    // Defer execution using setTimeout (mobile optimization)
    if (typeof window !== 'undefined') {
        timerId = window.setTimeout(loadCal, 2500);
    }

    return () => {
      if (timerId) window.clearTimeout(timerId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ width: "100%", height: "100%", minHeight: "650px", overflow: "scroll" }}
      id="my-cal-inline-30min"
    />
  );
}

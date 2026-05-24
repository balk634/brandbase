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

    interface CalApi {
      (...args: unknown[]): void;
      loaded?: boolean;
      ns?: Record<string, CalApi>;
      q: unknown[][];
    }

    const C = window as Window & { Cal?: CalApi };
    const d = document;

    if (!C.Cal) {
      const cal: CalApi = function (...args: unknown[]) {
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          const script = d.createElement("script");
          script.src = "https://booking.brandbase.in/embed/embed.js";
          d.head.appendChild(script);
          cal.loaded = true;
        }

        if (args[0] === "init") {
          const api: CalApi = function (...subArgs: unknown[]) {
            api.q.push(subArgs);
          } as CalApi;
          api.q = api.q || [];
          const namespace = args[1];
          if (typeof namespace === "string" && cal.ns) {
            cal.ns[namespace] = cal.ns[namespace] || api;
            cal.ns[namespace](...args);
            cal.q.push(["initNamespace", namespace]);
          } else {
            cal.q.push(args);
          }
          return;
        }
        cal.q.push(args);
      } as CalApi;

      C.Cal = cal;
    }

    const Cal = C.Cal;
    if (!Cal || !Cal.ns) return;
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

    containerRef.current.dataset.loaded = "true";
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

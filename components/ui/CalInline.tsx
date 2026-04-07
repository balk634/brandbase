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

    (function (C, A, L) {
      let p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      let d = C.document;
      (C as any).Cal = (C as any).Cal || function () {
        let cal = (C as any).Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api: any = function () {
            p(api, arguments);
          };
          const namespace = ar[1];
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
      calLink: masterConfig.contact.calcomSlug,
    });

    Cal.ns[namespace]("ui", {
      theme: "light",
      cssVarsPerTheme: {
        light: { "cal-brand": masterConfig.colors.primary },
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
      style={{ width: "100%", height: "100%", minHeight: "480px" }}
      id="my-cal-inline-30min"
    />
  );
}

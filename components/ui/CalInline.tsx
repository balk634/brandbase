"use client";

import { useEffect, useState } from "react";
import { getCalApi } from "@calcom/embed-react";
import { masterConfig } from "@/config/master";
import { usePathname } from "next/navigation";

export function CalInline({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Avoid sync setState in effect
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    let api: unknown;
    (async function () {
      try {
        const cal = await getCalApi();
        api = cal;
        // Basic configuration
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        cal("ui", {
          styles: { branding: { brandColor: "#0A0A0A" } },
          hideEventTypeDetails: false,
          layout: "month_view"
        });

        // Add pathname context
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        cal("on", {
          action: "bookingSuccessful",
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          callback: (e) => {
            if (typeof window !== 'undefined' && window.dataLayer) {
              window.dataLayer.push({
                event: 'cal_booking_success',
                page_path: pathname,
                booking_data: e.detail
              });
            }
          }
        });

      } catch (e) {
        console.error("Cal.com init error", e);
      }
    })();
    return () => {
      // attempt cleanup if needed
      if (api && typeof (api as { destroy?: () => void }).destroy === "function") {
          (api as { destroy?: () => void }).destroy?.();
      }
    };
  }, [mounted, pathname]);

  if (!mounted) {
    return (
      <div className={`flex items-center justify-center bg-grid/5 ${className}`}>
        <div className="flex flex-col items-center gap-3 text-ink-muted">
          <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          <span className="text-sm font-mono uppercase tracking-widest">Loading Calendar...</span>
        </div>
      </div>
    );
  }

  // Use raw Cal embed markup
  return (
    <div
      className={className}
      data-cal-namespace=""
      data-cal-inline={masterConfig.contact.calcomSlug}
      data-cal-config='{"layout":"month_view"}'
    >
      {/* Fallback spinner while cal.com iframe loads */}
      <div className="w-full h-full flex items-center justify-center absolute inset-0 -z-10 bg-grid/5">
        <div className="flex flex-col items-center gap-3 text-ink-muted">
          <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          <span className="text-sm font-mono uppercase tracking-widest">Loading Calendar...</span>
        </div>
      </div>
    </div>
  );
}

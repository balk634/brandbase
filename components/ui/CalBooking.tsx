"use client";

import { useRef } from "react";
import { masterConfig } from "@/config/master";
import { Button } from "@/components/ui/Button";

// The Cal API callable type — a function that accepts a method name + options.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type CalApi = (method: string, options?: Record<string, unknown>) => void;

// Lazily loaded Cal.com API — only imported on first user interaction.
// This removes ~84KB of the @calcom/embed-react SDK from the initial JS bundle.
let calApiPromise: Promise<CalApi> | null = null;

async function getCalLazy(): Promise<CalApi> {
  if (!calApiPromise) {
    calApiPromise = import("@calcom/embed-react").then(async ({ getCalApi }) => {
      const cal = await getCalApi({ namespace: masterConfig.contact.calcomNamespace });
      // cal() can be called as a function — cast to our simplified type
      return cal as unknown as CalApi;
    });
  }
  return calApiPromise;
}

async function initAndOpenCal(slug: string) {
  const cal = await getCalLazy();
  cal("ui", {
    theme: "light",
    styles: { branding: { brandColor: masterConfig.colors.primary } },
    hideEventTypeDetails: false,
    layout: "month_view",
  });
  const [pathWithSlash] = slug.split("?");
  const path = pathWithSlash.replace(/\/$/, "");
  cal("modal", {
    calLink: path,
    config: { origin: masterConfig.contact.calcomUrl, theme: "light" },
  });
}

export function CalButton({
  children,
  className,
  variant = "primary",
  size = "lg",
  eventSlug,
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  eventSlug?: string;
}) {
  const isOpeningRef = useRef(false);
  const calcomSlug = eventSlug || masterConfig.contact.calcomSlug;
  const fullUrl = `${masterConfig.contact.calcomUrl}/${calcomSlug}`;

  return (
    <Button asChild variant={variant} size={size} className={className}>
      <a
        href={fullUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={async (e) => {
          e.preventDefault();
          if (isOpeningRef.current) return;
          isOpeningRef.current = true;
          try {
            await initAndOpenCal(calcomSlug);
          } catch {
            // Fallback: open in new tab if Cal.com fails to load
            window.open(fullUrl, "_blank", "noopener,noreferrer");
          } finally {
            isOpeningRef.current = false;
          }
        }}
      >
        {children}
      </a>
    </Button>
  );
}

/** @deprecated Use CalButton directly. Kept for backward compatibility. */
export function useCalBooking() {
  const openBooking = async (eventSlug?: string) => {
    const slug = eventSlug || masterConfig.contact.calcomSlug;
    await initAndOpenCal(slug);
  };
  return { openBooking, isReady: true };
}

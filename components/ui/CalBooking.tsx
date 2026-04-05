"use client";

import { useEffect } from "react";
import { masterConfig } from "@/config/master";
import { Button } from "@/components/ui/Button";

// The Cal API callable type — a function that accepts a method name + options.
 
type CalApi = (method: string, options?: Record<string, unknown>) => void;

// Lazily loaded Cal.com API — only imported on first user interaction.
// This removes ~84KB of the @calcom/embed-react SDK from the initial JS bundle.
let calApiPromise: Promise<CalApi> | null = null;

async function getCalLazy(): Promise<CalApi> {
  if (!calApiPromise) {
    calApiPromise = import("@calcom/embed-react").then(async ({ getCalApi }) => {
      const cal = await getCalApi({ namespace: masterConfig.contact.calcomNamespace });
      
      // Initialize UI global settings once the API is loaded
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: masterConfig.colors.primary } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
      
      return cal as unknown as CalApi;
    });
  }
  return calApiPromise;
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
  const calcomSlug = eventSlug || masterConfig.contact.calcomSlug;
  const fullUrl = `${masterConfig.contact.calcomUrl}/${calcomSlug}`;

  // Pre-load and initialize on mount / hover
  useEffect(() => {
    getCalLazy();
  }, []);

  return (
    <Button asChild variant={variant} size={size} className={className}>
      <a
        href={fullUrl}
        target="_blank"
        rel="noopener noreferrer"
        // Use data-cal-link which is natively supported by the @calcom/embed-react library.
        // This ensures that if the script loads, it handles the modal. 
        // If the script fails, the link works perfectly as a standard link.
        data-cal-link={calcomSlug}
        data-cal-namespace={masterConfig.contact.calcomNamespace}
        data-cal-config={JSON.stringify({ 
          origin: masterConfig.contact.calcomUrl,
          theme: "light",
        })}
        onPointerEnter={() => getCalLazy()}
      >
        {children}
      </a>
    </Button>
  );
}

/** @deprecated Use CalButton directly. Retained for backward compatibility. */
export function useCalBooking() {
  const openBooking = async (eventSlug?: string) => {
    const slug = eventSlug || masterConfig.contact.calcomSlug;
    const cal = await getCalLazy();
    cal("modal", {
      calLink: slug,
      config: { origin: masterConfig.contact.calcomUrl, theme: "light" },
    });
  };
  return { openBooking, isReady: true };
}

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
      const cal = await getCalApi(`${masterConfig.contact.calcomUrl}/embed/embed.js`);
      
      // Initialize namespace and origin
      cal("init", masterConfig.contact.calcomNamespace, { 
        origin: masterConfig.contact.calcomUrl 
      });

      // Initialize UI global settings for the namespace
      const nsCal = (cal as any).ns[masterConfig.contact.calcomNamespace];
      if (nsCal) {
        nsCal("ui", {
          theme: "light",
          cssVarsPerTheme: { 
            light: { "cal-brand": "#0d29be" }, 
            dark: { "cal-brand": "#fafafa" } 
          },
          hideEventTypeDetails: false,
          layout: "month_view",
        });
      }
      
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
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  eventSlug?: string;
  onClick?: () => void;
}) {
  const calcomSlug = eventSlug || masterConfig.contact.calcomSlug;
  const fullUrl = `${masterConfig.contact.calcomUrl}/${calcomSlug}`;

  // Pre-load and initialize on mount / hover
  useEffect(() => {
    // getCalLazy(); — REMOVED: Only load on interaction to save initial JS execution
  }, []);

  return (
    <Button asChild variant={variant} size={size} className={className} onClick={onClick}>
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
          layout: "month_view",
          useSlotsViewOnSmallScreen: "true",
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
      config: { 
        origin: masterConfig.contact.calcomUrl, 
        theme: "light",
        hideBranding: true,
      } as any,
    });
  };
  return { openBooking, isReady: true };
}

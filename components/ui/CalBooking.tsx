"use client";

import { useEffect, useState } from "react";
import { masterConfig } from "@/config/master";
import { Button } from "@/components/ui/Button";

// Lazy loaders for the 80KB Cal.com script
let getCalApiPromise: Promise<any> | null = null;

export function CalButton({
  children,
  className,
  variant = "primary",
  size = "lg",
  eventSlug = masterConfig.contact.calcomSlug,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  eventSlug?: string;
  onClick?: () => void;
}) {
  const [isPreloaded, setIsPreloaded] = useState(false);
  const fullUrl = `${masterConfig.contact.calcomUrl}/${eventSlug}`;

  const preloadCal = async () => {
    if (isPreloaded) return;
    setIsPreloaded(true);
    
    if (!getCalApiPromise) {
      getCalApiPromise = import("@calcom/embed-react").then((mod) => mod.getCalApi({ 
        embedJsUrl: `${masterConfig.contact.calcomUrl}/embed/embed.js` 
      }));
    }
    
    const cal = await getCalApiPromise;
    cal("init", masterConfig.contact.calcomNamespace, { origin: masterConfig.contact.calcomUrl });
    const nsCal = cal.ns[masterConfig.contact.calcomNamespace];
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
  };

  const handleBookClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (onClick) onClick();
    
    await preloadCal();
    const cal = await getCalApiPromise;
    const nsCal = cal?.ns[masterConfig.contact.calcomNamespace] || cal;
    
    if (nsCal) {
      nsCal("modal", {
        calLink: eventSlug,
        config: { 
          origin: masterConfig.contact.calcomUrl, 
          theme: "light",
          layout: "month_view",
          useSlotsViewOnSmallScreen: "true",
        }
      });
    } else {
      // Fallback if script fails
      window.open(fullUrl, "_blank");
    }
  };

  return (
    <Button asChild variant={variant} size={size} className={className}>
      <a
        href={fullUrl}
        target="_blank"
        rel="noopener noreferrer"
        onPointerEnter={preloadCal}
        onClick={handleBookClick}
      >
        {children}
      </a>
    </Button>
  );
}

"use client";

import { useEffect, useState } from "react";
import { getCalApi } from "@calcom/embed-react";
import { masterConfig } from "@/config/master";
import { Button } from "@/components/ui/Button";

export function useCalBooking() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    (async function init() {
      const cal = await getCalApi({ namespace: masterConfig.contact.calcomNamespace });
      cal("ui", {
        theme: "light",
        styles: {
          branding: {
            brandColor: masterConfig.colors.primary,
          },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
      setIsReady(true);
    })();
  }, []);

  const openBooking = async (eventSlug?: string) => {
    const cal = await getCalApi({ namespace: masterConfig.contact.calcomNamespace });
    // Split slug and query params if present
    const slug = eventSlug || masterConfig.contact.calcomSlug;
    const [path, query] = slug.split('?');
    
    cal("modal", {
      calLink: path,
      config: {
        origin: masterConfig.contact.calcomUrl,
        theme: "light",
      },
    });
  };

  return { openBooking, isReady };
}

export function CalButton({ 
  children, 
  className, 
  variant = "primary", 
  size = "lg",
  eventSlug
}: { 
  children: React.ReactNode; 
  className?: string; 
  variant?: "primary" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  eventSlug?: string;
}) {
  const [isMounted, setIsMounted] = useState(false);
  const { openBooking } = useCalBooking();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const calcomSlug = eventSlug || masterConfig.contact.calcomSlug;
  // If not mounted yet, we MUST use the value that the server used
  // to avoid hydration mismatch.
  const fullUrl = `${masterConfig.contact.calcomUrl}/${calcomSlug}`;

  return (
    <Button 
      asChild
      variant={variant}
      size={size}
      className={className}
    >
      <a 
        href={fullUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => {
          e.preventDefault();
          // We pass the full slug (including sub-paths and params) 
          // but calcom-embed usually handles the slug portion.
          // If it fails, we might need to split it.
          openBooking(calcomSlug);
        }}
      >
        {children}
      </a>
    </Button>
  );
}

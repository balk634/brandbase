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
    cal("modal", {
      calLink: eventSlug || masterConfig.contact.calcomSlug,
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
  const { openBooking } = useCalBooking();
  const fullUrl = `${masterConfig.contact.calcomUrl}/${eventSlug || masterConfig.contact.calcomSlug}`;

  return (
    <Button 
      variant={variant}
      size={size}
      className={className}
      href={fullUrl}
      target="_blank"
      onClick={(e) => {
        e.preventDefault();
        openBooking(eventSlug);
      }}
    >
      {children}
    </Button>
  );
}

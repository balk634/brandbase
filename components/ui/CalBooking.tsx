"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { masterConfig } from "@/config/master";

export function useCalBooking() {
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
    })();
  }, []);

  const openBooking = async (eventSlug?: string) => {
    const cal = await getCalApi({ namespace: masterConfig.contact.calcomNamespace });
    cal("modal", {
      calLink: eventSlug || masterConfig.contact.calcomSlug,
      config: {
        origin: masterConfig.contact.calcomUrl,
      },
    });
  };

  return { openBooking };
}

import Link from "next/link";
import { Button } from "@/components/ui/Button";

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

  return (
    <Button 
      variant={variant}
      size={size}
      className={className}
      onClick={() => openBooking(eventSlug)}
    >
      {children}
    </Button>
  );
}

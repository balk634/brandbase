"use client";

import { masterConfig } from "@/config/master";
import { Button } from "@/components/ui/Button";

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
  const fullUrl = `${masterConfig.contact.calcomUrl}/${eventSlug}`;

  return (
    <Button asChild variant={variant} size={size} className={className} onClick={onClick}>
      <a
        href={fullUrl}
        target="_blank"
        rel="noopener noreferrer"
        // Native attributes for the custom raw Cal.com script element click
        data-cal-link={eventSlug}
        data-cal-namespace={masterConfig.contact.calcomNamespace}
        data-cal-config={JSON.stringify({ 
          origin: masterConfig.contact.calcomUrl,
          theme: "light",
          layout: "month_view",
          useSlotsViewOnSmallScreen: "true",
        })}
      >
        {children}
      </a>
    </Button>
  );
}

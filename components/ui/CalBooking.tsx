"use client";

import { masterConfig } from "@/config/master";
import { Button } from "@/components/ui/Button";

/**
 * CalButton Component
 * 
 * Simple, reliable button that redirects to the Cal.com booking page.
 * Opens in the same tab (_self) for a seamless transition as per user request.
 */
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
        target="_self" // Opens in the same tab for a fast, standard redirect
        rel="noopener noreferrer"
      >
        {children}
      </a>
    </Button>
  );
}

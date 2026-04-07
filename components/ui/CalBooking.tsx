import Link from "next/link";
import { Button } from "@/components/ui/Button";

/**
 * CalButton Component
 * 
 * Simplified to a 'Get in Touch' link to the contact page, 
 * where the Cal.com booking system is now embedded inline.
 */
export function CalButton({
  children,
  className,
  variant = "primary",
  size = "lg",
  onClick,
}: {
  children?: React.ReactNode;
  className?: string;
  variant?: "primary" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  onClick?: () => void;
}) {
  return (
    <Button asChild variant={variant} size={size} className={className} onClick={onClick}>
      <Link href="/contact">
        {children || "Get in Touch"}
      </Link>
    </Button>
  );
}

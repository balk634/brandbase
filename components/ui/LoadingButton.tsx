"use client";

import React from "react";
import { Button, buttonVariants } from "@/components/ui/Button";
import { type VariantProps } from "class-variance-authority";
import { IconLoader2 } from "@tabler/icons-react";

interface LoadingButtonProps 
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  loadingText?: string;
  children: React.ReactNode;
}

export function LoadingButton({
  isLoading = false,
  loadingText = "Sending...",
  children,
  variant = "primary",
  size = "default",
  className,
  ...props
}: LoadingButtonProps) {
  return (
    <Button
      variant={variant}
      size={size}
      disabled={isLoading}
      className={`relative ${className}`}
      {...props}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <IconLoader2 className="w-4 h-4 animate-spin" />
        </div>
      )}
      <span className={isLoading ? "opacity-0" : "opacity-100"}>
        {children}
      </span>
    </Button>
  );
}

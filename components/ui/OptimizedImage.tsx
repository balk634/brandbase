"use client";

import React, { useState, useEffect } from "react";
import Image, { ImageProps } from "next/image";

interface OptimizedImageProps extends Omit<ImageProps, 'loading'> {
  // We omit 'loading' to force our own deferred logic
}

/**
 * OptimizedImage Component
 * 
 * Replaces standard lazy-loading with a "Deferred Eager Loading" strategy.
 * - If `priority` is true: Preloads instantly (standard Next.js behavior).
 * - If `priority` is false: Initially sets loading to "lazy" to let the Hero load,
 *   then switches to "eager" after mount to start background fetching before the user scrolls.
 */
export function OptimizedImage({
  priority = false,
  ...props
}: OptimizedImageProps) {
  const [shouldEagerLoad, setShouldEagerLoad] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!priority) {
      // Defer eager loading by ~150ms to ensure the Hero has started its request first.
      // This eliminates the "pop-in" effect while scrolling because images are 
      // already locally cached by the time the user reaches them.
      const timer = setTimeout(() => {
        setShouldEagerLoad(true);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [priority]);

  if (hasError) {
    return (
      <div className={`bg-paper/40 flex items-center justify-center text-ink-muted/40 text-[10px] uppercase font-mono tracking-widest ${props.className || ""}`}
           style={props.fill ? { position: 'absolute', inset: 0 } : { width: props.width, height: props.height, aspectRatio: props.fill ? undefined : "16/10" }}>
        <span>Image unavailable</span>
      </div>
    );
  }

  return (
    <Image
      {...props}
      priority={priority}
      // When priority is set, Next.js handles it. 
      // Otherwise, we toggle from lazy to eager after the initial mount delay.
      loading={priority ? undefined : (shouldEagerLoad ? "eager" : "lazy")}
      onError={() => setHasError(true)}
      // Standardize on 75 quality unless overridden
      quality={props.quality || 75}
      // Use "high" fetchpriority for priority images
      fetchPriority={priority ? "high" : "auto"}
    />
  );
}

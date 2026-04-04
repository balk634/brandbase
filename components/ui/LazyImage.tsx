"use client";

import React, { useState } from "react";
import Image from "next/image";

interface LazyImageProps {
    src: string;
    alt: string;
    className?: string;
    priority?: boolean;
    sizes?: string;
    quality?: number;
    blurDataURL?: string;
    fill?: boolean;
    width?: number;
    height?: number;
    objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
}

export function LazyImage({
    src,
    alt,
    className = "",
    priority = true,
    sizes = "(max-width: 768px) 100vw, 50vw",
    quality = 75,
    blurDataURL,
    fill = false,
    width,
    height,
    objectFit = 'cover',
}: LazyImageProps) {
    const [hasError, setHasError] = useState(false);

    const handleError = () => setHasError(true);

    // --- Fill mode ---
    if (fill) {
        if (hasError) {
            return (
                <div className={`absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-400 text-sm ${className}`}>
                    <span>Image unavailable</span>
                </div>
            );
        }

        return (
            <Image
                src={src}
                alt={alt}
                fill
                className={`object-${objectFit} ${className}`}
                sizes={sizes}
                quality={quality}
                priority={priority}
                placeholder={blurDataURL ? "blur" : "empty"}
                blurDataURL={blurDataURL}
                onError={handleError}
            />
        );
    }

    // --- Sized mode (width + height provided, no fill) ---
    if (hasError) {
        return (
            <div
                className={`bg-gray-100 flex items-center justify-center text-gray-400 text-sm ${className}`}
                style={width && height ? { width, height } : { aspectRatio: "16/10" }}
            >
                <span>Image unavailable</span>
            </div>
        );
    }

    return (
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={`object-${objectFit} ${className}`}
            sizes={sizes}
            quality={quality}
            priority={priority}
            placeholder={blurDataURL ? "blur" : "empty"}
            blurDataURL={blurDataURL}
            onError={handleError}
        />
    );
}

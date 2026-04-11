import React from "react";
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
    priority = false,
    sizes = "(max-width: 768px) 100vw, 50vw",
    quality = 75,
    blurDataURL,
    fill = false,
    width,
    height,
    objectFit = 'cover',
}: LazyImageProps) {

    // --- Fill mode ---
    if (fill) {
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
            />
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
            fetchPriority={priority ? "high" : "auto"}
            placeholder={blurDataURL ? "blur" : "empty"}
            blurDataURL={blurDataURL}
        />
    );
}

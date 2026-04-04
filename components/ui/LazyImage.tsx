"use client";

import React, { useState, useRef, useEffect } from "react";
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
}: LazyImageProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(priority);
    const containerRef = useRef<HTMLDivElement>(null);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        if (priority || isInView) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "50px" }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, [priority]);

    const handleLoad = () => setIsLoaded(true);
    const handleError = () => setHasError(true);

    // In fill mode the PARENT div already defines the frame via position:relative +
    // explicit dimensions. We must NOT add any wrapper div of our own — doing so
    // creates a new stacking context that breaks fill positioning altogether.
    if (fill) {
        if (!isInView && !priority) {
            return (
                <div
                    ref={containerRef}
                    className={`absolute inset-0 bg-gray-100 animate-pulse ${className}`}
                    aria-hidden="true"
                />
            );
        }

        if (hasError) {
            return (
                <div className={`absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-400 text-sm ${className}`}>
                    <span>Image unavailable</span>
                </div>
            );
        }

        return (
            <>
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className={`object-cover transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
                    sizes={sizes}
                    quality={quality}
                    priority={priority}
                    placeholder={blurDataURL ? "blur" : "empty"}
                    blurDataURL={blurDataURL}
                    onLoad={handleLoad}
                    onError={handleError}
                />
                {!isLoaded && (
                    <div className="absolute inset-0 bg-gray-100 animate-pulse" aria-hidden="true" />
                )}
            </>
        );
    }

    // --- Sized mode (width + height provided, no fill) ---
    if (!isInView && !priority) {
        return (
            <div
                ref={containerRef}
                className={`bg-gray-100 animate-pulse ${className}`}
                style={width && height ? { width, height } : { aspectRatio: "16/10" }}
                aria-hidden="true"
            />
        );
    }

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
        <div className={`relative ${className}`}>
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className={`object-cover transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
                sizes={sizes}
                quality={quality}
                priority={priority}
                placeholder={blurDataURL ? "blur" : "empty"}
                blurDataURL={blurDataURL}
                onLoad={handleLoad}
                onError={handleError}
            />
            {!isLoaded && (
                <div className="absolute inset-0 bg-gray-100 animate-pulse" aria-hidden="true" />
            )}
        </div>
    );
}

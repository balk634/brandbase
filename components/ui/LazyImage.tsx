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
    placeholder?: "blur" | "empty";
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
    placeholder = "blur",
    blurDataURL,
    fill = false,
    width,
    height,
}: LazyImageProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(priority);
    const imgRef = useRef<HTMLDivElement>(null);
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
            {
                rootMargin: "50px", // Start loading 50px before image comes into view
            }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => observer.disconnect();
    }, [priority]);

    const handleLoad = () => {
        setIsLoaded(true);
    };

    const handleError = () => {
        setHasError(true);
    };

    const defaultBlurDataURL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8A8A";

    if (!isInView && !priority) {
        return (
            <div
                ref={imgRef}
                className={`bg-gray-100 animate-pulse ${className}`}
                style={{ aspectRatio: "16/10" }}
                aria-hidden="true"
            />
        );
    }

    if (hasError) {
        return (
            <div
                className={`bg-gray-100 flex items-center justify-center text-gray-400 text-sm ${className}`}
                style={{ aspectRatio: "16/10" }}
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
                fill={fill}
                width={width}
                height={height}
                className={`object-cover transition-opacity duration-300 ${
                    isLoaded ? "opacity-100" : "opacity-0"
                }`}
                sizes={sizes}
                quality={quality}
                priority={priority}
                placeholder={placeholder}
                blurDataURL={blurDataURL || defaultBlurDataURL}
                onLoad={handleLoad}
                onError={handleError}
            />
            {!isLoaded && (
                <div
                    className="absolute inset-0 bg-gray-100 animate-pulse"
                    aria-hidden="true"
                />
            )}
        </div>
    );
}

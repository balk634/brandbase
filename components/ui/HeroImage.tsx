"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";

interface HeroImageProps {
    src: string;
    alt: string;
    priority?: boolean;
}

function normalizeHeroSrc(value: string) {
    const trimmed = value.trim();
    const withoutPrefixedSlash = trimmed.replace(/^\/(https?:\/\/)/i, "$1");
    if (/^https?:\/\//i.test(withoutPrefixedSlash)) return withoutPrefixedSlash;
    if (withoutPrefixedSlash.startsWith("/")) return withoutPrefixedSlash;
    return `/${withoutPrefixedSlash}`;
}

export function HeroImage({ src, alt, priority = false }: HeroImageProps) {
    const [imgSrc, setImgSrc] = useState(() => normalizeHeroSrc(src));
    const [hasError, setHasError] = useState(false);

    // Memoize the normalized source to prevent unnecessary recalculations
    const normalizedSrc = useMemo(() => normalizeHeroSrc(src), [src]);

    // Update imgSrc only if the normalized source changes
    React.useEffect(() => {
        if (normalizedSrc !== imgSrc) {
            setImgSrc(normalizedSrc);
            setHasError(false);
        }
    }, [normalizedSrc, imgSrc]);

    const handleError = () => {
        if (!hasError && imgSrc !== "/placeholder.jpg") {
            setImgSrc("/placeholder.jpg");
            setHasError(true);
        }
    };

    return (
        <Image
            src={imgSrc}
            alt={alt}
            fill
            className="object-cover"
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw"
            onError={handleError}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8A8A"
        />
    );
}

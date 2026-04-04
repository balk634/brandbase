"use client";

import React, { useState } from "react";
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
    const normalizedSrc = normalizeHeroSrc(src);
    const [hasError, setHasError] = useState(false);

    if (hasError) {
        return (
            <div
                className="absolute inset-0 bg-gray-100 flex items-center justify-center"
                aria-label={alt}
            >
                <span className="text-gray-400 text-xs font-mono uppercase tracking-wider">
                    Image unavailable
                </span>
            </div>
        );
    }

    return (
        <Image
            src={normalizedSrc}
            alt={alt}
            fill
            className="object-cover"
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw"
            onError={() => setHasError(true)}
        />
    );
}

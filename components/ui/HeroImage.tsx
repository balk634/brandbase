"use client";

import { useState } from "react";
import Image from "next/image";

interface HeroImageProps {
    src: string;
    alt: string;
}

function normalizeHeroSrc(value: string) {
    const trimmed = value.trim();
    const withoutPrefixedSlash = trimmed.replace(/^\/(https?:\/\/)/i, "$1");
    if (/^https?:\/\//i.test(withoutPrefixedSlash)) return withoutPrefixedSlash;
    if (withoutPrefixedSlash.startsWith("/")) return withoutPrefixedSlash;
    return `/${withoutPrefixedSlash}`;
}

export function HeroImage({ src, alt }: HeroImageProps) {
    const [imgSrc, setImgSrc] = useState(() => normalizeHeroSrc(src));

    return (
        <Image
            src={imgSrc}
            alt={alt}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 45vw"
            onError={() => {
                if (imgSrc !== "/placeholder.jpg") {
                    setImgSrc("/placeholder.jpg");
                }
            }}
        />
    );
}

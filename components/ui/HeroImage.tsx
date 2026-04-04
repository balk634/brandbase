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

export function HeroImage({ src, alt, priority = true }: HeroImageProps) {
    const normalizedSrc = normalizeHeroSrc(src);

    return (
        <Image
            src={normalizedSrc}
            alt={alt}
            fill
            className="object-cover"
            priority={priority}
            fetchPriority={priority ? "high" : "auto"}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 440px"
        />
    );
}

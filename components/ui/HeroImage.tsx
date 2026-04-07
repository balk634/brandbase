import Image from "next/image";

interface HeroImageProps {
    src: string;
    alt: string;
    priority?: boolean;
    sizes?: string;
}

function normalizeHeroSrc(value: string) {
    const trimmed = value.trim();
    const withoutPrefixedSlash = trimmed.replace(/^\/(https?:\/\/)/i, "$1");
    if (/^https?:\/\//i.test(withoutPrefixedSlash)) return withoutPrefixedSlash;
    if (withoutPrefixedSlash.startsWith("/")) return withoutPrefixedSlash;
    return `/${withoutPrefixedSlash}`;
}

export function HeroImage({ src, alt, priority = true, className, sizes }: HeroImageProps & { className?: string }) {
    const normalizedSrc = normalizeHeroSrc(src);

    return (
        <Image
            src={normalizedSrc}
            alt={alt}
            fill
            className={className || "object-cover"}
            // Hero images must ALWAYS have priority to avoid lazy load pop-in
            priority={priority}
            // Tells the browser to start fetching this before anything else
            fetchPriority={priority ? "high" : "auto"}
            // No lazy loading for any hero
            loading={priority ? undefined : "eager"}
            sizes={sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 440px"}
        />
    );
}

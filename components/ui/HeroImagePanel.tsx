import Image from "next/image";
import { masterConfig } from "@/config/master";

type HeroImagePanelProps = {
  src: string;
  alt: string;
};

function normalizeHeroSrc(value: string) {
  const trimmed = value.trim();
  const withoutPrefixedSlash = trimmed.replace(/^\/(https?:\/\/)/i, "$1");
  if (/^https?:\/\//i.test(withoutPrefixedSlash)) return withoutPrefixedSlash;
  if (withoutPrefixedSlash.startsWith("/")) return withoutPrefixedSlash;
  return `/${withoutPrefixedSlash}`;
}

export function HeroImagePanel({ src, alt }: HeroImagePanelProps) {
  const normalizedSrc = normalizeHeroSrc(src);

  return (
    <div className="relative overflow-hidden">
      <div
        className={`relative ${masterConfig.ui.heroImages.className}`}
        style={{
          maxWidth: masterConfig.ui.heroImages.maxWidth,
          aspectRatio: masterConfig.ui.heroImages.aspectRatio,
        }}
      >
        <Image
          src={normalizedSrc}
          alt={alt}
          fill
          className="object-cover"
          style={{ filter: "none", mixBlendMode: "normal" }}
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}

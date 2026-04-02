import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { CorePillars } from "@/components/sections/CorePillars";

import { OurProcess } from "@/components/sections/OurProcess";
import { Testimonials } from "@/components/sections/Testimonials";
import { BlogGrid } from "@/components/sections/BlogGrid";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { buildPageMetadata } from "@/lib/seoMetadata";

export const metadata = buildPageMetadata({
  title: "BrandBase | Conversion-First Websites & Performance Marketing",
  description:
    "BrandBase builds fast, conversion-first websites with clean tracking and SEO foundations—then scales results with performance marketing.",
  path: "/",
});

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <TrustStrip />
      <CorePillars />

      <OurProcess />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </main>
  );
}

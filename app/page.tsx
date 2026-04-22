import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { CorePillars } from "@/components/sections/CorePillars";
import { OurProcess } from "@/components/sections/OurProcess";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Purpose } from "@/components/sections/Purpose";
import { FinalCTA } from "@/components/sections/FinalCTA";

import { buildPageMetadata } from "@/lib/seoMetadata";

export const metadata = buildPageMetadata({
  title: "BrandBase | Conversion-First Websites & Marketing",
  description:
    "High-performance, conversion-first websites and data-driven marketing results for growth-focused brands.",
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
      <Purpose />
      <FinalCTA />
    </main>
  );
}

import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { CorePillars } from "@/components/sections/CorePillars";

const OurProcess = dynamic(() => import("@/components/sections/OurProcess").then(mod => mod.OurProcess), {
  ssr: true,
});
const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then(mod => mod.Testimonials), {
  ssr: true,
});
const FAQ = dynamic(() => import("@/components/sections/FAQ").then(mod => mod.FAQ), {
  ssr: true,
});
const FinalCTA = dynamic(() => import("@/components/sections/FinalCTA").then(mod => mod.FinalCTA), {
  ssr: true,
});

import { buildPageMetadata } from "@/lib/seoMetadata";

export const metadata = buildPageMetadata({
  title: "BrandBase | Conversion-First Websites & Performance Marketing",
  description:
    "BrandBase builds fast, conversion-first websites with clean tracking and SEO foundations—then scales results with data-driven performance marketing for brands.",
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

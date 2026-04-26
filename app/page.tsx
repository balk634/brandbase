import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { CorePillars } from "@/components/sections/CorePillars";
import { OurProcess } from "@/components/sections/OurProcess";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

import { buildPageMetadata } from "@/lib/seoMetadata";

export const metadata = buildPageMetadata({
  title: "BrandBase | Digital Growth Platform & Marketing Services",
  description:
    "BrandBase is a digital growth platform and web application that provides high-performance websites, SEO services, and data-driven marketing to help businesses scale. View our privacy policy and terms of service.",
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

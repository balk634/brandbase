import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { CorePillars } from "@/components/sections/CorePillars";
import { DashboardShowcase } from "@/components/sections/DashboardShowcase";
import { IntegrationsGrid } from "@/components/sections/IntegrationsGrid";
import { OurProcess } from "@/components/sections/OurProcess";
import { Technologies } from "@/components/sections/Technologies";
import { AISearchBanner } from "@/components/sections/AISearchBanner";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

import { buildPageMetadata } from "@/lib/seoMetadata";

export const metadata = buildPageMetadata({
  title: "BrandBase | Digital Growth Platform & Marketing Services",
  description:
    "BrandBase is a digital growth platform providing high-performance websites, SEO, and data-driven marketing to help serious businesses scale their operations.",
  path: "/",
});

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <TrustStrip />
      <CorePillars />
      <DashboardShowcase />
      <IntegrationsGrid />
      <AISearchBanner />
      <Technologies />
      <OurProcess />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </main>
  );
}

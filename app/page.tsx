import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { WhatWeReplace } from "@/components/sections/WhatWeReplace";
import { CorePillars } from "@/components/sections/CorePillars";
import { DashboardShowcase } from "@/components/sections/DashboardShowcase";
import { WhyNotGenericCRM } from "@/components/sections/WhyNotGenericCRM";
import { Testimonials } from "@/components/sections/Testimonials";
import { Technologies } from "@/components/sections/Technologies";
import { FinalCTA } from "@/components/sections/FinalCTA";

import { buildPageMetadata } from "@/lib/seoMetadata";

export const metadata = buildPageMetadata({
  title: "BrandBase | Custom Business Management Systems & Websites",
  description:
    "What is BrandBase? BrandBase builds custom management systems for clinics, coaching centers, and restaurants that replace paper registers and WhatsApp chaos with automated operations. How much does it cost? Systems start at ₹15,000. What's included? Custom backend, WhatsApp automation, staff training, and ongoing support.",
  path: "/",
});

export default function Home() {
  return (
    <main className="relative">
      {/* 1. Hero — Systems first, Websites second */}
      <Hero />

      {/* 2. Trust strip — operational outcome facts */}
      <TrustStrip />

      {/* 3. What we replace — before-state pain section (dark) */}
      <WhatWeReplace />

      {/* 4. Core Pillars — Management Solutions (01), Website Solutions (02) */}
      <CorePillars />

      {/* 5. Dashboard Showcase — tabbed preview: Clinic / Coaching / Restaurant (dark) */}
      <DashboardShowcase />

      {/* 6. Why Not a Generic CRM — comparison table (light) */}
      <WhyNotGenericCRM />

      {/* 8. Testimonials */}
      <Testimonials />

      {/* 9. Infrastructure / Technologies — scrolling tech marquee */}
      <Technologies />

      {/* 10. Final CTA — scoping call framing */}
      <FinalCTA />
    </main>
  );
}

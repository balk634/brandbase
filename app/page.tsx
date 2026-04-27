import { Hero } from "@/components/sections/Hero";
import dynamic from "next/dynamic";
import { buildPageMetadata } from "@/lib/seoMetadata";

const TrustStrip = dynamic(() => import("@/components/sections/TrustStrip").then(mod => mod.TrustStrip), { ssr: true });
const CorePillars = dynamic(() => import("@/components/sections/CorePillars").then(mod => mod.CorePillars), { ssr: true });
const OurProcess = dynamic(() => import("@/components/sections/OurProcess").then(mod => mod.OurProcess), { ssr: true });
const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then(mod => mod.Testimonials), { ssr: true });
const FAQ = dynamic(() => import("@/components/sections/FAQ").then(mod => mod.FAQ), { ssr: true });
const FinalCTA = dynamic(() => import("@/components/sections/FinalCTA").then(mod => mod.FinalCTA), { ssr: true });

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

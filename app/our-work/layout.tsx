import { buildPageMetadata } from "@/lib/seoMetadata";
import type { ReactNode } from "react";

export const metadata = buildPageMetadata({
  title: "Our Work | BrandBase — Live Client Websites & Custom Dashboards",
  description:
    "Explore BrandBase's portfolio of live client websites across healthcare, hospitality, education, and food & dining. Every site ships with a custom admin dashboard and is optimised for Google AI Search.",
  path: "/our-work",
});

export default function OurWorkLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

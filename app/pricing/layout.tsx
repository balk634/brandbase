import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seoMetadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Pricing Estimate | Nodecraft",
  description:
    "Build your custom website and marketing package, estimate project scope, and get a tailored strategy quote.",
  path: "/pricing",
});

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}

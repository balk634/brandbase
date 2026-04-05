import { buildPageMetadata } from "@/lib/seoMetadata";

export const metadata = buildPageMetadata({
  title: "Pricing Estimate | Strategy, Web & Marketing Quote",
  description:
    "Build your custom website and marketing package. Get an instant scope estimate and tailored growth strategy from the BrandBase team today.",
  path: "/pricing",
});

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

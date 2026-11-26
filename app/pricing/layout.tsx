import { buildPageMetadata } from "@/lib/seoMetadata";

export const metadata = buildPageMetadata({
  title: "Pricing | BrandBase",
  description: "BrandBase commercial scopes and engagement models.",
  path: "/pricing",
  noIndex: true,
});

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

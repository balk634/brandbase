import { buildPageMetadata } from "@/lib/seoMetadata";

export const metadata = buildPageMetadata({
  title: "Pricing | Custom Business Management Systems from ₹15,000",
  description:
    "Custom business management systems for clinics, coaching centers, and restaurants. See a realistic investment range for your business type and get a tailored quote.",
  path: "/pricing",
});

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

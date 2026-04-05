import { ContactForm } from "@/components/sections/ContactForm";
import { buildPageMetadata } from "@/lib/seoMetadata";

export const metadata = buildPageMetadata({
  title: "Contact BrandBase | Let's Build Your Next High-Performance Website",
  description:
    "Ready to scale? Contact BrandBase in Mumbai for conversion-first web design and performance marketing services. Book a strategy call today.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="relative">
      <ContactForm variant="page" />
    </main>
  );
}


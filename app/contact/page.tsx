import { ContactForm } from "@/components/sections/ContactForm";
import { buildPageMetadata } from "@/lib/seoMetadata";

export const metadata = buildPageMetadata({
  title: "Contact BrandBase | Book a Consultation Call",
  description:
    "Tell us your goals and get a conversion-first website and marketing plan tailored to your business.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="relative">
      <ContactForm variant="page" />
    </main>
  );
}


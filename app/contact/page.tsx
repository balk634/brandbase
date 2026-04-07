import { ContactForm } from "@/components/sections/ContactForm";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Kicker } from "@/components/ui/Kicker";
import { CalInline } from "@/components/ui/CalInline";
import { IconMail, IconPhone, IconMapPin } from "@tabler/icons-react";
import { masterConfig } from "@/config/master";
import { buildPageMetadata } from "@/lib/seoMetadata";

export const metadata = buildPageMetadata({
  title: "Contact BrandBase | Let's Build Your Next High-Performance Website",
  description:
    "Ready to scale? Contact BrandBase in Mumbai for conversion-first web design and performance marketing services. Book a strategy call today.",
  path: "/contact",
});

const CONTACT_INFO = [
  {
    icon: IconMail,
    label: "Email",
    value: masterConfig.contact.email,
    href: `mailto:${masterConfig.contact.email}`,
  },
  {
    icon: IconPhone,
    label: "Phone",
    value: masterConfig.contact.phone,
    href: `tel:${masterConfig.contact.phone.replace(/\s+/g, "")}`,
  },
  {
    icon: IconMapPin,
    label: "Address",
    value: `${masterConfig.contact.address.street} ${masterConfig.contact.address.locality}, ${masterConfig.contact.address.city}`,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${masterConfig.contact.address.street} ${masterConfig.contact.address.city}`)}`,
  },
];

export default function ContactPage() {
  return (
    <main className="relative">
      {/* Header Section */}
      <Section className="bg-transparent pt-10 md:pt-12 lg:pt-14 pb-0 border-b-0">
        <Container>
          <div className="border border-grid/15 bg-white overflow-hidden p-6 sm:p-8 md:p-12 lg:p-14 text-center">
            <Kicker>CONTACT</Kicker>
            <h1 className="mt-8 text-3xl sm:text-4xl md:text-6xl font-serif leading-[0.95] tracking-tighter text-ink">
              Book a instant call for <em className="font-serif-20 italic">consultation.</em>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-ink-muted leading-relaxed text-lg md:text-xl">
              We&apos;ll review your website (or idea), identify the biggest conversion opportunities, and outline what to build first. Then we&apos;ll map the right marketing moves to scale what works.
            </p>
          </div>
        </Container>
      </Section>

      {/* Info Grid Section */}
      <Section className="bg-transparent py-0 border-b-0">
        <Container>
          <div className="grid sm:grid-cols-3 gap-0 border-x border-grid/15">
            {CONTACT_INFO.map((info) => (
              <a
                key={info.label}
                href={info.href}
                target={info.label === "Address" ? "_blank" : undefined}
                rel={info.label === "Address" ? "noopener noreferrer" : undefined}
                className="group p-8 md:p-10 border-y border-b-0 sm:border-b last:border-b sm:border-y-0 sm:border-r border-grid/15 bg-white flex flex-col items-center text-center hover:bg-paper/40 transition-colors"
                style={{ borderRightWidth: info.label === "Address" ? 0 : undefined }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <info.icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted group-hover:text-primary transition-colors">
                    {info.label}
                  </span>
                </div>
                <div className="text-sm font-serif text-ink tracking-tight">
                  {info.value}
                </div>
              </a>
            ))}
          </div>
        </Container>
      </Section>

      {/* Main Content Split Section */}
      <Section className="bg-transparent pt-0">
        <Container>
          <div className="grid lg:grid-cols-12 border-x border-b border-grid/15 bg-white divide-y lg:divide-y-0 lg:divide-x divide-grid/15">
            {/* Left: Cal.com Inline Booking */}
            <div className="lg:col-span-7 p-0 overflow-hidden min-h-[600px] bg-paper/20">
              <CalInline />
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-5 p-6 sm:p-8 md:p-10">
              <ContactForm variant="section" />
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}

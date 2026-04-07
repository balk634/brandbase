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

export default function ContactPage() {
  return (
    <main className="relative">
      <Section className="bg-transparent py-8 md:py-10 lg:py-12">
        <Container>
          <div className="border border-grid/15 bg-white">
            <div className="p-4 sm:p-8 md:p-12">
              <div className="text-center">
                <Kicker className="mx-auto"> CONTACT </Kicker>
              </div>

              <h1 className="mt-8 text-center text-3xl sm:text-4xl md:text-6xl font-serif leading-[0.95] tracking-tighter text-ink">
                Let&apos;s build your <em className="font-serif-20 italic">engine.</em>
              </h1>
              <p className="mt-6 text-center text-lg md:text-xl text-ink-muted leading-relaxed max-w-3xl mx-auto">
                Ready to scale? Book a consultation below or send us a message. We&apos;ll review your project and outline a path to growth.
              </p>
            </div>

            {/* Info Grid - Docked with 0 gap to the bottom section */}
            <div className="border-t border-grid/15 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-grid/15">
              <div className="p-10 md:p-12 lg:p-14 flex flex-col items-center text-center">
                <IconMail className="w-5 h-5 text-primary mb-4" strokeWidth={1.5} />
                <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-ink-muted mb-3">Email</div>
                <a href={`mailto:${masterConfig.contact.email}`} className="font-serif text-xl text-ink hover:text-primary transition-colors">
                  {masterConfig.contact.email}
                </a>
              </div>
              <div className="p-10 md:p-12 lg:p-14 flex flex-col items-center text-center">
                <IconPhone className="w-5 h-5 text-primary mb-4" strokeWidth={1.5} />
                <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-ink-muted mb-3">Phone</div>
                <a href={`tel:${masterConfig.contact.phone.replace(/\s+/g, '')}`} className="font-serif text-xl text-ink hover:text-primary transition-colors">
                  {masterConfig.contact.phone}
                </a>
              </div>
              <div className="p-10 md:p-12 lg:p-14 flex flex-col items-center text-center">
                <IconMapPin className="w-5 h-5 text-primary mb-4" strokeWidth={1.5} />
                <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-ink-muted mb-3">Address</div>
                <address className="not-italic font-serif text-lg leading-snug text-ink px-4">
                  {masterConfig.contact.address.street},<br />
                  {masterConfig.contact.address.city}, {masterConfig.contact.address.state}
                </address>
              </div>
            </div>

            {/* Split Section - Cal.com + Form */}
            <div className="border-t border-grid/15 grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-grid/15">
              {/* Left: Cal.com Embed */}
              <div className="p-6 sm:p-10 bg-paper/20">
                <div className="mb-8">
                  <Kicker>Book a Call</Kicker>
                </div>
                <div className="border border-grid/10 bg-white shadow-sm overflow-hidden min-h-[650px]">
                  <CalInline className="w-full h-full" />
                </div>
              </div>

              {/* Right: Lead Form */}
              <div className="p-6 sm:p-10">
                <div className="mb-8">
                  <Kicker>Send a Message</Kicker>
                </div>
                <ContactForm variant="page" hideHeader={true} />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}

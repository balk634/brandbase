import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { masterConfig } from "@/config/master";
import { buildPageMetadata } from "@/lib/seoMetadata";

export const metadata = buildPageMetadata({
  title: "Impressum | BrandBase",
  description: "Legal disclosure and company information for BrandBase.",
  path: "/impressum",
  noIndex: true,
});

export default function ImpressumPage() {
  return (
    <main className="relative">
      <Section className="py-16 md:py-24 bg-paper">
        <Container>
 <h1 className="text-4xl md:text-5xl font-serif-20 tracking-tighter mb-8">
            Impressum
          </h1>
          <div className="prose prose-sm md:prose-base font-sans text-ink-muted">
            <p className="text-lg text-ink font-medium mb-8">
              Legal Disclosure according to international requirements.
            </p>

 <h3 className="font-serif">Information required under Section 5 of the German Telemedia Act (TMG):</h3>
            <p>
              BrandBase<br />
              {masterConfig.contact.address.street} {masterConfig.contact.address.locality}<br />
              {masterConfig.contact.address.city}, {masterConfig.contact.address.state} {masterConfig.contact.address.postalCode}<br />
              {masterConfig.contact.address.country}
            </p>

            <h3>Represented by:</h3>
            <p>
              Balkrishna &amp; Harshwardhan Pawar (Founders)
            </p>

            <h3>Contact Details:</h3>
            <p>
              <strong>Phone:</strong> {masterConfig.contact.phone}<br />
              <strong>Email:</strong> <a href={`mailto:${masterConfig.contact.email}`} className="underline hover:text-ink">{masterConfig.contact.email}</a>
            </p>

            <h3>Dispute Resolution:</h3>
            <p>
              We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board. Any disputes will be handled within the jurisdiction of Mumbai, Maharashtra, India.
            </p>

            <h3>Liability for Content</h3>
            <p>
              As a service provider, we are responsible for our own content on these pages in accordance with general laws. However, we are not obligated to monitor transmitted or stored external information or to investigate circumstances that suggest illegal activity.
            </p>

            <h3>Liability for Links</h3>
            <p>
              Our website contains links to external, third-party websites beyond our control. Therefore, we cannot accept any responsibility for this external content. The respective provider or operator of the pages is always responsible for the content of the linked pages.
            </p>

            <h3>Copyright</h3>
            <p>
              The content and works published on this website are subject to copyright law. Any duplication, processing, distribution, or any form of commercialization of such material beyond the scope of the copyright law requires the prior written consent of its respective author or creator.
            </p>
          </div>
        </Container>
      </Section>
    </main>
  );
}



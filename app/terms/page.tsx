import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { masterConfig } from "@/config/master";
import { buildPageMetadata } from "@/lib/seoMetadata";

export const metadata = buildPageMetadata({
  title: "Terms of Service | Nodecraft",
  description: "Terms and conditions governing the use of Nodecraft website and services.",
  path: "/terms",
  noIndex: true,
});

export default function TermsPage() {
  return (
    <main className="relative">
      <Section className="py-16 md:py-24 bg-paper">
        <Container className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-sans font-bold tracking-tighter mb-8">
            Terms of Service
          </h1>
          <div className="prose prose-sm md:prose-base font-sans text-ink-muted">
            <p className="text-lg text-ink font-medium mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <h3>1. Agreement to Terms</h3>
            <p>
              These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement made between you, whether personally or on behalf of an entity (&quot;you&quot;) and Nodecraft (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), concerning your access to and use of our website and services. By accessing our website, you agree that you have read, understood, and agreed to be bound by all of these Terms.
            </p>

            <h3>2. Intellectual Property Rights</h3>
            <p>
              Unless otherwise indicated, the website and its entire contents (including but not limited to source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics) are owned or controlled by us and are protected by copyright and trademark laws.
            </p>

            <h3>3. User Representations</h3>
            <p>
              By using the website, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information; (3) you have the legal capacity and you agree to comply with these Terms; and (4) you are not a minor in the jurisdiction in which you reside.
            </p>

            <h3>4. Data Privacy</h3>
            <p>
              Your privacy is critically important to us. We process your information in accordance with global data protection standards, including the GDPR, CCPA, and India&apos;s Digital Personal Data Protection (DPDP) Act. For full details on how we handle your data, please refer to our <a href="/privacy" className="underline hover:text-ink">Privacy Policy</a>.
            </p>

            <h3>5. Prohibited Activities</h3>
            <p>
              You may not access or use the website for any purpose other than that for which we make the website available. The website may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
            </p>

            <h3>6. Limitation of Liability</h3>
            <p>
              In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the website, even if we have been advised of the possibility of such damages.
            </p>

            <h3>7. Governing Law</h3>
            <p>
              These Terms shall be governed by and defined following the laws of India. Nodecraft and yourself irrevocably consent that the courts of Mumbai, Maharashtra, India shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
            </p>

            <h3>8. Contact Us</h3>
            <p>
              In order to resolve a complaint regarding the website or to receive further information regarding use of the website, please contact us at:
            </p>
            <p>
              <strong>Email:</strong> {masterConfig.contact.email}<br />
              <strong>Phone:</strong> {masterConfig.contact.phone}<br />
              <strong>Address:</strong>            {masterConfig.contact.address.street} {masterConfig.contact.address.locality}<br />{masterConfig.contact.address.city}, {masterConfig.contact.address.state}, {masterConfig.contact.address.postalCode}, {masterConfig.contact.address.country}
            </p>
          </div>
        </Container>
      </Section>
    </main>
  );
}



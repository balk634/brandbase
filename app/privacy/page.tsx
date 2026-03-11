import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { masterConfig } from "@/config/master";
import { buildPageMetadata } from "@/lib/seoMetadata";

export const metadata = buildPageMetadata({
  title: "Privacy Policy | Nodecraft",
  description: "How Nodecraft collects, uses, and protects personal data across its website and services.",
  path: "/privacy",
  noIndex: true,
});

export default function PrivacyPolicyPage() {
  return (
    <main className="relative">
      <Section className="py-16 md:py-24 bg-paper">
        <Container className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-sans font-bold tracking-tighter mb-8">
            Privacy Policy
          </h1>
          <div className="prose prose-sm md:prose-base font-sans text-ink-muted">
            <p className="text-lg text-ink font-medium mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <h3>1. Introduction</h3>
            <p>
              Nodecraft (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share your personal information when you visit our website or use our services. We are committed to processing data in accordance with the General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), the Digital Personal Data Protection (DPDP) Act of India, and other applicable privacy laws.
            </p>

            <h3>2. Information We Collect</h3>
            <p>We may collect the following types of information:</p>
            <ul>
              <li><strong>Personal Information:</strong> Name, email address, phone number, and any other information you provide when you contact us or fill out a form.</li>
              <li><strong>Usage Data:</strong> Information about how you use our website, such as your IP address, browser type, pages visited, and time spent on the site.</li>
              <li><strong>Cookies:</strong> Small data files stored on your device that help us improve our website and your experience.</li>
            </ul>

            <h3>3. How We Use Your Information</h3>
            <p>We use the information we collect for the following purposes:</p>
            <ul>
              <li>To provide and maintain our services.</li>
              <li>To communicate with you, including responding to your inquiries.</li>
              <li>To improve our website and analyze usage patterns.</li>
              <li>To comply with legal obligations.</li>
            </ul>

            <h3>4. Sharing Your Information</h3>
            <p>
              We do not sell your personal information. We may share your information with trusted third-party service providers who assist us in operating our website and conducting our business, provided they agree to keep this information confidential. We may also disclose your information if required by law.
            </p>

            <h3>5. Data Security</h3>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, please be aware that no method of transmission over the internet or method of electronic storage is 100% secure.
            </p>

            <h3>6. Your Rights</h3>
            <p>Depending on your location, you may have the following rights regarding your personal information:</p>
            <ul>
              <li><strong>Access:</strong> You have the right to request copies of your personal data.</li>
              <li><strong>Rectification:</strong> You have the right to request that we correct any information you believe is inaccurate.</li>
              <li><strong>Erasure:</strong> You have the right to request that we erase your personal data, under certain conditions.</li>
              <li><strong>Object to Processing:</strong> You have the right to object to our processing of your personal data.</li>
            </ul>
            <p>To exercise these rights, please contact us using the information below.</p>

            <h3>7. Cookies</h3>
            <p>
              Our website uses cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, but this may affect the functionality of our website. For more details, please view our <a href="/cookies" className="underline hover:text-ink">Cookie Policy</a>.
            </p>

            <h3>8. Changes to This Policy</h3>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
            </p>

            <h3>9. Contact Us</h3>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p>
              <strong>Email:</strong> {masterConfig.contact.email}<br />
              <strong>Phone:</strong> {masterConfig.contact.phone}<br />
              <strong>Address:</strong> {masterConfig.contact.address.street} {masterConfig.contact.address.locality}<br />{masterConfig.contact.address.city}, {masterConfig.contact.address.state}, {masterConfig.contact.address.postalCode}, {masterConfig.contact.address.country}
            </p>
          </div>
        </Container>
      </Section>
    </main>
  );
}



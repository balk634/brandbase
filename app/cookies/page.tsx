import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { masterConfig } from "@/config/master";
import { buildPageMetadata } from "@/lib/seoMetadata";

export const metadata = buildPageMetadata({
  title: "Cookie Policy | BrandBase",
  description: "Read how BrandBase uses cookies and preference storage on this website.",
  path: "/cookies",
  noIndex: true,
});

export default function CookieSettingsPage() {
  return (
    <main className="relative">
      <Section className="py-16 md:py-24 bg-paper">
        <Container className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-newsreader tracking-tighter mb-8">
            Cookie Policy
          </h1>
          <div className="prose prose-sm md:prose-base font-sans text-ink-muted">
            <p className="text-lg text-ink font-medium mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <h3 className="font-newsreader">1. What Are Cookies?</h3>
            <p>
              Cookies are simple text files that are stored on your computer or mobile device by a website&apos;s server. Each cookie is unique to your web browser. It will contain some anonymous information such as a unique identifier, the website&apos;s site name, and some digits and numbers.
            </p>

            <h3>2. How We Use Cookies</h3>
            <p>
              We use cookies to improve your browsing experience by:
            </p>
            <ul>
              <li>Enabling certain functions of the website.</li>
              <li>Providing analytics to helping us understand how you use the website.</li>
              <li>Storing your preferences.</li>
            </ul>
            <p className="mt-4">
              Our use of cookies is designed to comply with global privacy standards, including the GDPR, CCPA, and the Digital Personal Data Protection (DPDP) Act of India.
            </p>

            <h3>3. Types of Cookies We Use</h3>
            <p>
              <strong>Essential Cookies:</strong> These are necessary for the website to function properly. We use these to remember your preferences, such as whether you have accepted our cookie policy.<br /><br />
              <strong>Analytics Cookies:</strong> We use these to track information about how the website is used so that we can make improvements. We may use third-party service providers like Google Analytics for this purpose.
            </p>

            <h3>4. How to Control Cookies</h3>
            <p>
              You can control and/or delete cookies as you wish – for details, see <a href="https://www.aboutcookies.org/" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">aboutcookies.org</a>. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
            </p>

            <h3>5. Contact Us</h3>
            <p>
              If you have any questions about our use of cookies, please contact us at:
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


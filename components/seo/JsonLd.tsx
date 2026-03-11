import { masterConfig } from "@/config/master";

export function JsonLd() {
    const { metadata, contact } = masterConfig;
    const baseUrl = metadata.baseUrl.replace(/\/+$/, "");
    const sameAs = [contact.social.linkedin, contact.social.instagram].filter(Boolean);

    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebSite",
                "@id": `${baseUrl}/#website`,
                "url": baseUrl,
                "name": "Nodecraft",
                "description": metadata.description,
                "inLanguage": "en-IN",
                "publisher": {
                    "@id": `${baseUrl}/#organization`
                }
            },
            {
                "@type": "ProfessionalService",
                "@id": `${baseUrl}/#organization`,
                "name": "Nodecraft",
                "url": baseUrl,
                "logo": `${baseUrl}/brand/logo.svg`,
                "image": `${baseUrl}${metadata.openGraph.images?.[0]?.url || "/og-image.png"}`,
                "description": metadata.description,
                "areaServed": "Worldwide",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": `${contact.address.street}${contact.address.locality ? ` ${contact.address.locality}` : ''}`,
                    "addressLocality": contact.address.city,
                    "addressRegion": contact.address.state,
                    "postalCode": contact.address.postalCode,
                    "addressCountry": contact.address.country
                },
                "contactPoint": [
                    {
                        "@type": "ContactPoint",
                        "email": contact.email,
                        "telephone": contact.phone,
                        "contactType": "sales",
                        "availableLanguage": ["English", "Hindi"]
                    }
                ],
                "telephone": contact.phone,
                "email": contact.email,
                "priceRange": "₹₹",
                "sameAs": sameAs
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
        />
    );
}

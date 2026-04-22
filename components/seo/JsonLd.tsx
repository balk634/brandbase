import { masterConfig } from "@/config/master";
import { NAVIGATION } from "@/config/navigation";

export function JsonLd() {
    const { metadata, contact } = masterConfig;
    const baseUrl = metadata.baseUrl.replace(/\/+$/, "");
    const sameAs = [contact.social.linkedin, contact.social.instagram].filter(Boolean);
    const toAbsoluteUrl = (path: string) => `${baseUrl}${path.startsWith("/") ? path : `/${path}`}`;

    const navigationLinks = NAVIGATION.flatMap((item) => [
        { name: item.name, href: item.href },
        ...(item.subItems ?? []).map((subItem) => ({ name: subItem.name, href: subItem.href })),
    ]);

    const offerCatalog = {
        "@type": "OfferCatalog",
        "name": "BrandBase Services",
        "itemListElement": NAVIGATION.map((item) => {
            const sectionServices =
                item.subItems && item.subItems.length > 0
                    ? item.subItems
                    : [{ name: item.name, href: item.href }];

            return {
                "@type": "OfferCatalog",
                "name": item.name,
                "url": toAbsoluteUrl(item.href),
                "itemListElement": sectionServices.map((service) => ({
                    "@type": "Service",
                    "name": service.name,
                    "url": toAbsoluteUrl(service.href),
                })),
            };
        }),
    };


    const teamMembers = masterConfig.about.team.map((member) => ({
        "@type": "Person",
        "name": member.name,
        "jobTitle": member.role,
        "description": member.description,
        "image": `${baseUrl}${member.image}`,
        "worksFor": {
            "@id": `${baseUrl}/#organization`
        }
    }));

    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebSite",
                "@id": `${baseUrl}/#website`,
                "url": baseUrl,
                "name": "BrandBase",
                "description": metadata.description,
                "inLanguage": "en-IN",
                "publisher": {
                    "@id": `${baseUrl}/#organization`
                },
                "copyrightHolder": {
                    "@id": `${baseUrl}/#organization`
                },
                "hasPart": [
                    ...navigationLinks.map((link, index) => ({
                        "@id": `${baseUrl}/#nav-${index + 1}`,
                    })),
                ],
            },
            {
                "@type": "WebPage",
                "@id": `${baseUrl}/#webpage`,
                "url": baseUrl,
                "name": metadata.title,
                "description": metadata.description,
                "isPartOf": {
                    "@id": `${baseUrl}/#website`,
                },
                "about": {
                    "@id": `${baseUrl}/#organization`,
                },
                "primaryImageOfPage": {
                    "@id": `${baseUrl}/#logo`
                }
            },
            {
                "@type": ["Organization", "ProfessionalService"],
                "@id": `${baseUrl}/#organization`,
                "name": "BrandBase",
                "url": baseUrl,
                "logo": {
                    "@type": "ImageObject",
                    "@id": `${baseUrl}/#logo`,
                    "url": `${baseUrl}/brand/logo.svg`,
                    "contentUrl": `${baseUrl}/brand/logo.svg`,
                    "caption": "BrandBase Logo"
                },
                "image": `${baseUrl}${metadata.openGraph.images?.[0]?.url || "/og-image.png"}`,
                "description": metadata.description,
                "areaServed": "Worldwide",
                "knowsAbout": metadata.keywords,
                "hasOfferCatalog": offerCatalog,
                "founder": teamMembers.filter(m => m.name === "Balkrishna"),
                "employee": teamMembers.filter(m => m.name !== "Balkrishna"),
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
                "priceRange": "₹",
                "sameAs": sameAs
            },
            ...navigationLinks.map((link, index) => ({
                "@type": "SiteNavigationElement",
                "@id": `${baseUrl}/#nav-${index + 1}`,
                "name": link.name,
                "url": toAbsoluteUrl(link.href),
            })),
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
        />
    );
}

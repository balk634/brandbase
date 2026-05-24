import { masterConfig } from "@/config/master";

type ServiceSchemaProps = {
  name: string;
  description: string;
  path: string;
  offers?: Array<{
    name: string;
    description: string;
    price?: number;
    priceCurrency?: string;
  }>;
};

export function ServiceSchema({ name, description, path, offers }: ServiceSchemaProps) {
  const baseUrl = masterConfig.metadata.baseUrl.replace(/\/+$/, "");
  const serviceUrl = `${baseUrl}${path.startsWith("/") ? path : `/${path}`}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${serviceUrl}#service`,
    "name": name,
    "description": description,
    "url": serviceUrl,
    "provider": {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      "name": "BrandBase",
      "url": baseUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/brand/logo.svg`
      }
    },
    "areaServed": "Worldwide",
    ...(offers && offers.length > 0 ? {
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": `${name} Plans`,
        "itemListElement": offers.map((offer) => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": offer.name,
            "description": offer.description
          },
          ...(offer.price ? {
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "price": offer.price,
              "priceCurrency": offer.priceCurrency || "INR",
              "unitText": "Month"
            }
          } : {})
        }))
      }
    } : {})
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
    />
  );
}

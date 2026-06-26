import { brandInfo } from "@/lib/data";
import { absoluteUrl, safeJsonLd } from "@/lib/seo";

export default function JsonLd() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: brandInfo.name,
    alternateName: brandInfo.shortName,
    url: brandInfo.url,
    logo: absoluteUrl("/logo.svg"),
    email: brandInfo.email,
    telephone: brandInfo.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: brandInfo.address,
      addressCountry: "CN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: brandInfo.phone,
      contactType: "sales",
      areaServed: ["North America", "Europe", "Australia", "Middle East", "Asia"],
      availableLanguage: ["English", "Chinese"],
    },
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: brandInfo.shortName,
    alternateName: brandInfo.name,
    url: brandInfo.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${brandInfo.url}/blog?search={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(websiteData) }}
      />
    </>
  );
}

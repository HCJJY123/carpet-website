import { brandInfo, faqSections } from "@/lib/data";
import { absoluteUrl, safeJsonLd } from "@/lib/seo";

export default function JsonLd() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${brandInfo.url}/#organization`,
    name: brandInfo.name,
    alternateName: brandInfo.shortName,
    url: brandInfo.url,
    logo: absoluteUrl("/logo.svg"),
    image: absoluteUrl("/images/og-cover.jpg"),
    email: brandInfo.email,
    telephone: brandInfo.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Cuihuangkou Town, Wuqing District",
      addressLocality: "Tianjin",
      postalCode: "301700",
      addressCountry: "CN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: brandInfo.phone,
      contactType: "sales",
      email: brandInfo.email,
      areaServed: ["North America", "Europe", "Australia", "Asia", "Middle East"],
      availableLanguage: ["English", "Chinese"],
    },
    sameAs: [brandInfo.url],
  };

  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${brandInfo.url}/#business`,
    name: brandInfo.name,
    alternateName: brandInfo.shortName,
    description:
      "Vishome Global Commercial Carpet Co., Ltd. is a Tianjin-based B2B manufacturer supplying carpet tiles, hotel broadloom, public-area carpet, and custom commercial flooring for export projects.",
    url: brandInfo.url,
    telephone: brandInfo.phone,
    email: brandInfo.email,
    logo: absoluteUrl("/logo.svg"),
    image: [absoluteUrl("/images/og-cover.jpg"), absoluteUrl("/images/hero-home.jpg")],
    priceRange: "$$",
    currenciesAccepted: "USD, EUR, CNY",
    paymentAccepted: "T/T, L/C",
    foundingDate: "2005",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Cuihuangkou Town, Wuqing District",
      addressLocality: "Tianjin",
      postalCode: "301700",
      addressCountry: "CN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "39.4826",
      longitude: "117.0440",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Australia" },
      { "@type": "Country", name: "India" },
      { "@type": "Country", name: "Germany" },
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "Bulgaria" },
      { "@type": "Country", name: "Philippines" },
      { "@type": "Country", name: "Malaysia" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Commercial Carpet Products",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Commercial Carpet Tiles", url: absoluteUrl("/products/carpet-tiles") } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Hotel Broadloom Carpet", url: absoluteUrl("/products/wall-to-wall") } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Public Area Carpet", url: absoluteUrl("/products/public-area") } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Custom Printed Carpet", url: absoluteUrl("/contact") } },
      ],
    },
    parentOrganization: {
      "@id": `${brandInfo.url}/#organization`,
    },
    sameAs: [brandInfo.url],
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${brandInfo.url}/#website`,
    name: brandInfo.shortName,
    alternateName: brandInfo.name,
    url: brandInfo.url,
    publisher: {
      "@id": `${brandInfo.url}/#organization`,
    },
    inLanguage: "en",
    potentialAction: {
      "@type": "SearchAction",
      target: `${brandInfo.url}/blog?search={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Products", item: absoluteUrl("/products") },
      { "@type": "ListItem", position: 3, name: "Projects", item: absoluteUrl("/projects") },
      { "@type": "ListItem", position: 4, name: "Blog", item: absoluteUrl("/blog") },
      { "@type": "ListItem", position: 5, name: "About Us", item: absoluteUrl("/about-us") },
      { "@type": "ListItem", position: 6, name: "FAQ", item: absoluteUrl("/faq") },
      { "@type": "ListItem", position: 7, name: "Contact", item: absoluteUrl("/contact") },
    ],
  };

  // Flatten all FAQs for FAQPage Schema (Critical for GEO/SEO)
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqSections.flatMap(section => 
      section.questions.map(q => ({
        "@type": "Question",
        "name": q.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": q.a
        }
      }))
    )
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(organizationData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(localBusinessData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(websiteData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqData) }} />
    </>
  );
}

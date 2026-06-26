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

  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${brandInfo.url}/#business`,
    name: brandInfo.name,
    alternateName: brandInfo.shortName,
    description:
      "Vishome Global Commercial Carpet Co., Ltd. is a B2B commercial carpet manufacturer in Tianjin, China, supplying carpet tiles, hotel broadloom, and custom flooring to 45+ countries.",
    url: brandInfo.url,
    telephone: brandInfo.phone,
    email: brandInfo.email,
    logo: absoluteUrl("/logo.svg"),
    image: absoluteUrl("/images/hero-home.jpg"),
    priceRange: "$$",
    currenciesAccepted: "USD, EUR, CNY",
    paymentAccepted: "T/T, L/C",
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
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Australia" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "India" },
      { "@type": "Country", name: "Germany" },
      { "@type": "Country", name: "Canada" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Commercial Carpet Products",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Commercial Carpet Tiles" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Hotel Broadloom Carpet" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Public Area Carpet" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Custom Printed Carpet" } },
      ],
    },
    sameAs: [
      brandInfo.url,
    ],
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(localBusinessData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(websiteData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbData) }}
      />
    </>
  );
}

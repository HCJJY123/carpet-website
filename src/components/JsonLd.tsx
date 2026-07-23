import { brandInfo } from "@/lib/data";
import { absoluteUrl, safeJsonLd } from "@/lib/seo";

export default function JsonLd() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${brandInfo.url}/#organization`,
    name: brandInfo.name,
    alternateName: [brandInfo.shortName, "Vishomecarpet"],
    url: brandInfo.url,
    logo: absoluteUrl("/logo.svg"),
    image: absoluteUrl("/images/og-cover.webp"),
    email: [brandInfo.email, brandInfo.backupEmail],
    telephone: brandInfo.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Cuihuangkou Town, Wuqing District",
      addressLocality: "Tianjin",
      postalCode: "301700",
      addressCountry: "CN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: brandInfo.phone,
        contactType: "sales",
        email: brandInfo.email,
        url: absoluteUrl("/contact"),
        areaServed: ["Philippines", "Malaysia", "Bulgaria", "Australia", "New Zealand", "South Africa", "United Arab Emirates"],
        availableLanguage: ["English", "Chinese"],
      },
      {
        "@type": "ContactPoint",
        contactType: "backup sales",
        email: brandInfo.backupEmail,
        url: absoluteUrl("/contact"),
        areaServed: ["Philippines", "Malaysia", "Bulgaria", "Australia", "New Zealand", "South Africa", "United Arab Emirates"],
        availableLanguage: ["English", "Chinese"],
      },
    ],
    knowsAbout: [
      "Commercial carpet tiles",
      "Hotel broadloom carpet",
      "Custom printed carpet",
      "Public area carpet",
      "Natural sisal carpet",
      "Commercial carpet project procurement",
    ],
  };

  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${brandInfo.url}/#business`,
    name: brandInfo.name,
    alternateName: [brandInfo.shortName, "Vishomecarpet"],
    description:
      "Vishome Global Commercial Carpet Co., Ltd. is a Tianjin-based B2B manufacturer supplying carpet tiles, hotel broadloom, public-area carpet, and custom commercial flooring for export projects.",
    url: brandInfo.url,
    telephone: brandInfo.phone,
    email: [brandInfo.email, brandInfo.backupEmail],
    logo: absoluteUrl("/logo.svg"),
    image: [absoluteUrl("/images/og-cover.webp"), absoluteUrl("/images/hero-home.webp")],
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
      { "@type": "Country", name: "Philippines" },
      { "@type": "Country", name: "Malaysia" },
      { "@type": "Country", name: "Bulgaria" },
      { "@type": "Country", name: "Australia" },
      { "@type": "Country", name: "New Zealand" },
      { "@type": "Country", name: "South Africa" },
      { "@type": "Country", name: "United Arab Emirates" },
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
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${brandInfo.url}/#website`,
    name: brandInfo.shortName,
    alternateName: ["Vishomecarpet", brandInfo.name],
    url: brandInfo.url,
    description:
      "Official website of VISHOME, a commercial carpet manufacturer supplying carpet tiles, hotel broadloom, public-area carpet, and custom flooring for global B2B projects.",
    publisher: {
      "@id": `${brandInfo.url}/#organization`,
    },
    inLanguage: "en",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(organizationData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(localBusinessData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(websiteData) }} />
    </>
  );
}

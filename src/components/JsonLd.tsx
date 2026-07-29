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
    email: brandInfo.email,
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
    ],
    knowsAbout: [
      "Commercial carpet tiles",
      "Office carpet tiles",
      "Modular commercial flooring",
      "Hotel broadloom carpet",
      "Hotel corridor carpet",
      "Custom printed carpet",
      "Public area carpet",
      "Natural sisal carpet",
      "Gold mining carpet mat",
      "Custom wool lobby rugs",
      "Commercial carpet project procurement",
    ],
    subjectOf: [
      { "@type": "CreativeWork", name: "AI-readable source map", url: absoluteUrl("/llms.txt") },
      { "@type": "CreativeWork", name: "Full AI source map", url: absoluteUrl("/llms-full.txt") },
      { "@type": "Dataset", name: "Structured AI source data", url: absoluteUrl("/ai-sources.json") },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "VISHOME Commercial Carpet Product Categories",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Commercial Carpet Tiles",
          url: absoluteUrl("/products/carpet-tiles"),
        },
        {
          "@type": "OfferCatalog",
          name: "Wall-to-Wall Hotel Carpet",
          url: absoluteUrl("/products/wall-to-wall"),
        },
        {
          "@type": "OfferCatalog",
          name: "Public Area Carpets",
          url: absoluteUrl("/products/public-area"),
        },
      ],
    },
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
    email: brandInfo.email,
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
    about: [
      "Commercial carpet tiles",
      "Hotel broadloom carpet",
      "Office carpet tile supplier",
      "Public area carpet",
      "Commercial carpet manufacturer in Tianjin, China",
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(organizationData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(localBusinessData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(websiteData) }} />
    </>
  );
}

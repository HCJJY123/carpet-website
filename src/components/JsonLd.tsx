import { brandInfo, productCategories, products } from "@/lib/data";

export default function JsonLd() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": ["Organization", "Manufacturer"],
    "@id": `${brandInfo.url}/#organization`,
    "name": brandInfo.name,
    "alternateName": ["Vishome Carpet", "Vishomecarpet"],
    "url": brandInfo.url,
    "logo": `${brandInfo.url}/logo.svg`,
    "image": `${brandInfo.url}/images/hero-home.jpg`,
    "description": "Vishome Global Commercial Carpet Co., Ltd. is a Tianjin-based commercial carpet manufacturer supplying carpet tiles, hotel carpets, wall-to-wall carpet rolls, public area carpets, and custom B2B flooring solutions.",
    "foundingLocation": {
      "@type": "Place",
      "address": brandInfo.address
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Cuihuangkou Town, Wuqing District",
      "addressLocality": "Tianjin",
      "postalCode": "301700",
      "addressCountry": "CN"
    },
    "email": brandInfo.email,
    "telephone": brandInfo.phone,
    "areaServed": ["North America", "Europe", "Australia", "Middle East", "Asia", "Africa"],
    "knowsAbout": [
      "Commercial carpet tiles",
      "Hotel carpet",
      "Wall-to-wall broadloom carpet",
      "Public area carpet",
      "Custom carpet manufacturing",
      "OEM and ODM carpet production",
      "B2B flooring projects"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": brandInfo.phone,
      "email": brandInfo.email,
      "contactType": "sales",
      "areaServed": ["North America", "Europe", "Australia", "Middle East"],
      "availableLanguage": ["English", "Chinese"]
    }
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${brandInfo.url}/#website`,
    "url": brandInfo.url,
    "name": "Vishome Carpet",
    "publisher": {
      "@id": `${brandInfo.url}/#organization`
    },
    "inLanguage": "en"
  };

  const itemListData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${brandInfo.url}/#product-categories`,
    "name": "Vishome Carpet Product Categories",
    "itemListElement": productCategories.map((category, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": category.name,
      "url": `${brandInfo.url}/products/${category.slug}`
    }))
  };

  const productCollectionData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${brandInfo.url}/products#collection`,
    "name": "Commercial Carpet Products",
    "url": `${brandInfo.url}/products`,
    "about": products.map((product) => ({
      "@type": "Product",
      "name": product.name,
      "category": product.category,
      "image": `${brandInfo.url}${product.image}`,
      "description": product.description,
      "brand": {
        "@type": "Brand",
        "name": "Vishome Carpet"
      },
      "manufacturer": {
        "@id": `${brandInfo.url}/#organization`
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productCollectionData) }}
      />
    </>
  );
}

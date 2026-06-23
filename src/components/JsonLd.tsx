import { products, faqItems, brandInfo } from "@/lib/data";

export default function JsonLd() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": brandInfo.name,
    "url": brandInfo.url,
    "logo": `${brandInfo.url}/logo.svg`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": brandInfo.phone,
      "email": brandInfo.email,
      "contactType": "sales",
      "areaServed": brandInfo.stats.markets,
      "availableLanguage": ["English", "Chinese"]
    }
  };

  const productData = products.map((product) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": `${brandInfo.url}${product.image}`,
    "brand": {
      "@type": "Brand",
      "name": brandInfo.name
    }
  }));

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      {productData.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
    </>
  );
}

import { products, faqItems } from "@/lib/data";

export default function JsonLd() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CarpetPro",
    "url": "https://carpet-website.vercel.app",
    "logo": "https://carpet-website.vercel.app/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+86-15222885400",
      "contactType": "customer service",
      "areaServed": "Worldwide",
      "availableLanguage": ["English", "Chinese"]
    },
    "sameAs": [
      "https://twitter.com/carpetpro",
      "https://www.linkedin.com/company/carpetpro"
    ]
  };

  const productData = products.map((product) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": product.image.startsWith("http") ? product.image : `https://carpet-website.vercel.app${product.image}`,
    "brand": {
      "@type": "Brand",
      "name": "CarpetPro"
    },
    "offers": {
      "@type": "AggregateOffer",
      "offerCount": "1",
      "lowPrice": "5.00",
      "highPrice": "50.00",
      "priceCurrency": "USD"
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

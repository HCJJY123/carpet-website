import { products, faqSections, brandInfo } from "@/lib/data";
import { absoluteUrl, safeJsonLd } from "@/lib/seo";

export default function JsonLd() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": brandInfo.name,
    "url": brandInfo.url,
    "logo": absoluteUrl("/logo.svg"),
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": brandInfo.phone,
      "contactType": "sales",
      "areaServed": "Worldwide",
      "availableLanguage": ["English", "Chinese"]
    }
  };

  const productData = products.map((product) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": absoluteUrl(product.image),
    "brand": {
      "@type": "Brand",
      "name": "Vishomecarpet"
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "3.50",
      "highPrice": "28.00",
      "priceCurrency": "USD"
    }
  }));

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
      {productData.map((data, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(data) }} />
      ))}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqData) }} />
    </>
  );
}

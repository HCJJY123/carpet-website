import { products, faqSections, brandInfo } from "@/lib/data";

export default function JsonLd() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": brandInfo.name,
    "url": brandInfo.url,
    "logo": `${brandInfo.url}/logo.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": brandInfo.phone,
      "contactType": "sales",
      "areaServed": ["North America", "Europe", "Australia", "Middle East"],
      "availableLanguage": ["English", "Chinese"]
    }
  };

  // Combine all questions from all sections for FAQ Schema
  const allFaqs = faqSections.flatMap(section => section.questions);

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allFaqs.map((item) => ({
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
    </>
  );
}

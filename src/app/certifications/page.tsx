import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { brandInfo } from "@/lib/data";
import { absoluteUrl, safeJsonLd } from "@/lib/seo";

const pagePath = "/certifications";
const documentTypes = ["Fire performance documents", "Antistatic or backing information", "Product technical data sheet", "Packing and quotation record", "Project-specific document set"];

export const metadata: Metadata = {
  title: "Commercial Carpet Certificates and Document Requests | Vishome Carpet",
  description: "Request construction-specific commercial carpet certificates, fire documents, technical data sheets and project document sets from Vishome Carpet.",
  alternates: { canonical: absoluteUrl(pagePath) },
};

export default function CertificationsPage() {
  const jsonLd = { "@context": "https://schema.org", "@type": "WebPage", url: absoluteUrl(pagePath), name: "Commercial Carpet Certificates and Document Requests", description: metadata.description, publisher: { "@id": `${brandInfo.url}/#organization` } };
  return (
    <main className="bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
      <PageHero eyebrow="Document Requests" title="Commercial Carpet Certificates and Technical Document Requests" description="Certification and test documents must match the exact product construction. Use this page to request current documents before platform submission or project approval." image="/images/about/quality-control-inspection.webp" imageAlt="Commercial carpet certificates and document review" />
      <section className="section-padding">
        <div className="container-fox rounded-md border border-border bg-white p-8 md:p-10">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-accent">Verification First</p>
          <h2 className="mt-4 text-3xl font-black text-primary">Do not reuse generic certificates for a different construction.</h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-muted">Public platforms, architects and project buyers may request certificates or test documents. {brandInfo.name} should confirm which documents are current and applicable to the exact product, backing, material and order specification.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {documentTypes.map((item) => <div key={item} className="rounded-sm border border-border bg-surface p-5 text-sm font-black text-primary">{item}</div>)}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact?source=certifications#quote-form" className="btn-fox-orange text-center">Request Current Documents</Link>
            <Link href="/resources/technical-library" className="btn-fox-outline text-center">Technical Library</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { brandInfo } from "@/lib/data";
import { absoluteUrl, safeJsonLd } from "@/lib/seo";

const pagePath = "/certifications";
const documentTypes = ["Fire performance documents", "Antistatic or backing information", "Product technical data sheet", "Packing and quotation record", "Project-specific document set"];
const reviewChecks = [
  { title: "Product identity", detail: "Match the report reference to the quoted fiber, construction, backing and approved specification." },
  { title: "Test method and result", detail: "Check the method, edition, measured result or classification and any stated limitations against the project requirement." },
  { title: "Tested arrangement", detail: "Review the specimen, underlay, substrate and other recorded conditions. Have differences from the proposed installation reviewed." },
  { title: "Issuer and applicability", detail: "Verify the issuer and document reference. Check any applicable validity or named-program listing conditions; do not assume every report has the same expiry period." },
];

export const metadata: Metadata = {
  title: "Commercial Carpet Certificates | VCARPETS",
  description: "Request construction-specific commercial carpet certificates, fire documents, technical data sheets and project document sets from VCARPETS.",
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
          <p className="mt-4 max-w-4xl text-sm leading-7 text-muted">Public platforms, architects and project buyers may request certificates or test documents. Ask {brandInfo.name} to confirm which records are available and applicable to the exact product, backing, material and order specification.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {documentTypes.map((item) => <div key={item} className="rounded-sm border border-border bg-surface p-5 text-sm font-black text-primary">{item}</div>)}
          </div>
          <div className="mt-8 border border-border bg-surface p-5">
            <h2 className="text-xl font-black text-primary">A test method is not a supplier-wide certification</h2>
            <p className="mt-3 text-sm leading-7 text-muted">ASTM E648 describes a floor-covering fire-test procedure. Its name does not prove that every carpet or installation meets a project requirement. A named certification program also needs evidence for the relevant product. This page is a document-request guide, not a public certificate register or confirmation of a specific product result.</p>
          </div>
          <h2 className="mt-8 text-2xl font-black text-primary">Check four things before technical approval</h2>
          <dl className="mt-5 grid gap-x-8 md:grid-cols-2">
            {reviewChecks.map((item) => (
              <div key={item.title} className="border-b border-border py-5">
                <dt className="text-lg font-black text-primary">{item.title}</dt>
                <dd className="mt-3 text-sm leading-7 text-muted">{item.detail}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-5 text-sm leading-7 text-muted">If a record is missing or its scope does not match, keep technical approval open and ask for clarification or an alternative. A quotation, color sample or generated application image is not a test result. The responsible project reviewer determines whether the evidence is acceptable.</p>
          <p className="mt-5 text-sm leading-7 text-muted">For hotel projects, use the <Link href="/blog/hotel-carpet-procurement-documents-checklist" className="font-bold text-primary underline">hotel-zone specification and evidence checklist</Link> to connect the area schedule, retained sample and technical submittal.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact?source=certifications#quote-form" className="btn-fox-orange text-center">Request Current Documents</Link>
            <Link href="/resources/technical-library" className="btn-fox-outline text-center">Technical Library</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

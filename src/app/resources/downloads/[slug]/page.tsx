import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { brandInfo } from "@/lib/data";
import {
  getTechnicalDocument,
  publicDocumentIssueDate,
  publicDocumentVersion,
  relatedProductsForDocument,
  technicalDocuments,
} from "@/lib/resource-data";
import { absoluteUrl, productPath, safeJsonLd } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

function fileSizeLabel(filePath: string) {
  try {
    const publicRelative = filePath.replace(/^\//, "");
    const bytes = fs.statSync(path.join(process.cwd(), "public", publicRelative)).size;
    if (bytes >= 1024 * 1024) return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
    return `${Math.round(bytes / 1024)} KB`;
  } catch {
    return "File size pending verification";
  }
}

export function generateStaticParams() {
  return technicalDocuments.map((document) => ({ slug: document.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const document = getTechnicalDocument(slug);
  if (!document) return { title: "Document Not Found" };
  const canonical = `/resources/downloads/${document.slug}`;

  return {
    title: `${document.title} | VISHOME`,
    description: document.description,
    alternates: { canonical: absoluteUrl(canonical) },
    openGraph: {
      title: `${document.title} | VISHOME`,
      description: document.description,
      url: absoluteUrl(canonical),
      type: "article",
    },
  };
}

export default async function DownloadDetailPage({ params }: Props) {
  const { slug } = await params;
  const document = getTechnicalDocument(slug);
  if (!document) notFound();

  const relatedProducts = relatedProductsForDocument(document);
  const pagePath = `/resources/downloads/${document.slug}`;
  const fileSize = fileSizeLabel(document.filePath);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DigitalDocument",
    "@id": `${absoluteUrl(pagePath)}#document`,
    name: document.title,
    description: document.description,
    url: absoluteUrl(pagePath),
    encodingFormat: "application/pdf",
    inLanguage: "en",
    dateModified: document.reviewDate,
    publisher: { "@id": `${brandInfo.url}/#organization` },
    isPartOf: { "@type": "WebPage", url: absoluteUrl("/resources/technical-library") },
    about: relatedProducts.map((product) => ({ "@type": "Product", name: product.name, url: absoluteUrl(productPath(product.id)) })),
  };

  return (
    <main className="bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
      <PageHero
        eyebrow={`${document.documentType} Download`}
        title={document.title}
        description={document.description}
        image="/images/about/quality-control-inspection.webp"
        imageAlt="Commercial carpet technical document review and quality control"
      />

      <section className="section-padding">
        <div className="container-fox grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="rounded-md border border-border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black text-primary">Document Details</h2>
            <dl className="mt-5 space-y-4 text-sm">
              {[
                ["Document type", document.documentType],
                ["Version", publicDocumentVersion(document)],
                ["Issue date", publicDocumentIssueDate(document)],
                ["Last reviewed", document.reviewDate],
                ["Format", document.fileFormat],
                ["Language", document.language],
                ["File size", fileSize],
              ].map(([label, value]) => (
                <div key={label} className="border-b border-border pb-3 last:border-b-0">
                  <dt className="text-[10px] font-black uppercase tracking-[0.18em] text-primary/45">{label}</dt>
                  <dd className="mt-1 font-bold leading-6 text-primary">{value}</dd>
                </div>
              ))}
            </dl>
            <a
              href={document.filePath}
              className="btn-fox-orange mt-6 block text-center"
              data-track-event={document.downloadEventName}
              data-document-type={document.documentType}
              data-document-slug={document.slug}
              data-item-name={document.title}
            >
              Download PDF
            </a>
          </aside>

          <div className="space-y-8">
            <section className="rounded-md border border-border bg-white p-7 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-accent">How to use this document</p>
              <h2 className="mt-3 text-2xl font-black text-primary">Use the PDF as an RFQ planning aid, not a final quotation.</h2>
              <p className="mt-4 text-sm leading-7 text-muted">
                This document helps buyers prepare a clearer specification discussion. Final product construction, performance documents, price, MOQ, packing, lead time and delivery terms must be confirmed in a written quotation from {brandInfo.name}.
              </p>
            </section>

            <section className="rounded-md border border-border bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-black text-primary">Related products</h2>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {relatedProducts.map((product) => (
                  <Link key={product.id} href={productPath(product.id)} className="rounded-sm border border-border p-4 transition hover:border-accent">
                    <h3 className="text-sm font-black text-primary">{product.name}</h3>
                    <p className="mt-2 text-xs leading-6 text-muted">{product.description}</p>
                  </Link>
                ))}
              </div>
            </section>

            <section className="rounded-md border border-border bg-surface p-7">
              <h2 className="text-2xl font-black text-primary">Need a construction-specific TDS?</h2>
              <p className="mt-4 text-sm leading-7 text-muted">
                Send the product type, area, destination, required standard and delivery target. The team can confirm which technical data sheet, sample route and quotation basis fit the project.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link href={`/contact?document=${encodeURIComponent(document.title)}#quote-form`} className="btn-fox-orange text-center">Request Matched Documents</Link>
                <Link href="/resources/technical-library" className="btn-fox-outline text-center">Back to Technical Library</Link>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}

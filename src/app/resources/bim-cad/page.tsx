import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { products } from "@/lib/data";
import { absoluteUrl, productPath, safeJsonLd } from "@/lib/seo";

const pagePath = "/resources/bim-cad";

const assetTypes = [
  "PDF pattern reference",
  "JPG or WebP texture reference",
  "Material specification JSON",
  "CAD pattern file where verified",
  "Revit material guidance after professional BIM preparation",
];

const priorityProducts = ["50x50-nylon-pp-office-carpet-tiles", "luxury-hotel-broadloom", "3d-printed-hotel-carpet", "public-area-heavy-duty", "custom-sculpted-wool-lobby-rug"]
  .map((id) => products.find((product) => product.id === id))
  .filter((product): product is (typeof products)[number] => Boolean(product));

export const metadata: Metadata = {
  title: "BIM CAD Carpet Resources | Vishome Carpet",
  description: "BIM and CAD resource readiness page for Vishome Carpet. Request verified carpet textures, pattern references and future BIM/CAD submission assets.",
  alternates: { canonical: absoluteUrl(pagePath) },
};

export default function BimCadPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: absoluteUrl(pagePath),
    name: "BIM CAD Carpet Resources",
    description: metadata.description,
    about: priorityProducts.map((product) => ({ "@type": "Product", name: product.name, url: absoluteUrl(productPath(product.id)) })),
  };

  return (
    <main className="bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
      <PageHero eyebrow="BIM / CAD Readiness" title="Commercial Carpet BIM and CAD Resource Requests" description="This page prepares verified digital asset requests without inventing BIM files. Revit or platform-specific models should be produced and checked by qualified BIM specialists before submission." image="/images/about/custom-design-support.webp" imageAlt="Commercial carpet pattern and CAD resource planning" />
      <section className="section-padding">
        <div className="container-fox grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-3xl font-black text-primary">Verified assets first, BIM models second.</h2>
            <p className="mt-4 text-sm leading-7 text-muted">Vishome Carpet can prepare product data and texture references for platform review. Full Revit, Archicad or IFC assets should not be published until created and verified against the exact product construction.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact?resource=bim-cad#quote-form" className="btn-fox-orange text-center">Request BIM/CAD Resources</Link>
              <Link href="/resources/technical-library" className="btn-fox-outline text-center">Technical Library</Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {assetTypes.map((asset) => <div key={asset} className="rounded-md border border-border bg-white p-5 shadow-sm"><p className="text-sm font-bold leading-7 text-primary">{asset}</p></div>)}
          </div>
        </div>
      </section>
      <section className="section-padding border-t border-border bg-surface">
        <div className="container-fox rounded-md border border-border bg-white p-8 md:p-10">
          <h2 className="text-3xl font-black text-primary">Priority products for future digital asset packs</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {priorityProducts.map((product) => (
              <Link key={product.id} href={productPath(product.id)} className="rounded-sm border border-border p-4 transition hover:border-accent">
                <h3 className="text-sm font-black text-primary">{product.name}</h3>
                <p className="mt-2 text-xs leading-6 text-muted">{product.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import { products, productCategories } from "@/lib/data";
import Link from "next/link";
import ProductImage from "@/components/ProductImage";
import TechnicalSourcePanel from "@/components/TechnicalSourcePanel";
import AnswerFirst from "@/components/AnswerFirst";
import { categoryBreadcrumbJsonLd, productItemListJsonLd, safeJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Public Area Carpet Supplier | VISHOME",
  description: "Source public area carpet for airports, exhibitions, corridors, custom wool lobby rugs, natural sisal carpets and gold mining mats with samples and project quote support.",
  alternates: { canonical: "/products/public-area" },
};
export default function CategoryPage() {
  const categoryId = "public-area";
  const currentCategory = productCategories.find((c) => c.id === categoryId);
  const categoryProducts = products.filter((p) => p.category === categoryId);
  const customRugId = "custom-sculpted-wool-lobby-rug";
  const jsonLd = productItemListJsonLd({
    name: "Public Area Commercial Carpet",
    description: "Heavy-duty public area carpet systems for airports, exhibition centers, corridors, custom wool lobby rugs, natural sisal carpets, gold mining mats, and high-traffic commercial projects.",
    url: "/products/public-area",
    items: categoryProducts,
  });
  const breadcrumbJsonLd = categoryBreadcrumbJsonLd(categoryId);

  return (
    <div className="bg-white min-h-screen font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbJsonLd) }} />
      <section className="bg-[#102A43] py-24 text-center">
        <div className="container-fox">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-widest">{currentCategory?.name || "Public Area Carpets"}</h1>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-sm font-bold uppercase tracking-widest">{currentCategory?.description || "Heavy-duty specialized flooring for public areas."}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/contact?product=Public%20Area%20Carpet#quote-form" className="btn-fox-orange">Request Project Quote</Link>
            <Link href="/request-sample-box?product=Public%20Area%20Carpet" className="inline-flex min-h-12 items-center justify-center rounded-sm border border-white/45 px-6 py-3 text-xs font-black uppercase tracking-[0.12em] text-white transition-colors hover:bg-white hover:text-primary">Request Samples</Link>
          </div>
        </div>
      </section>

      <AnswerFirst
        title="How Should Buyers Choose a Public-Area Carpet?"
        answer="Public-area carpet is not one interchangeable product type. Vishomecarpet's range includes heavy-duty interior carpet, natural sisal, sculpted wool lobby rugs, stair runners, and gold-recovery matting. Select by actual application, traffic, cleaning method, fire requirement, dimensions, edge treatment, and replacement plan. A hotel lobby rug specification should never be reused for mining recovery or stair installation."
        facts={[
          { label: "Applications", value: "Lobby, corridor, stair, natural-fiber and mining systems" },
          { label: "Construction", value: "Product-specific; confirm fiber, backing and edge finish" },
          { label: "Order Basis", value: "Piece, roll or square-meter quantity by product" },
          { label: "Specification Inputs", value: "Use, dimensions, traffic, cleaning, fire and delivery" },
        ]}
        moq={[
          { label: "Sample", value: "Material, wool, natural-fiber, binding or cut sample" },
          { label: "Trial Order", value: "Prototype piece, runner section, stock roll or trial area" },
          { label: "Project MOQ", value: "Varies by product from piece-based orders to 300 SQM" },
        ]}
        suitableFor={[
          "Buyers matching a specialist carpet to a defined public-area application",
          "Projects that need samples, dimensions and finish approval before production",
        ]}
        notSuitableFor={[
          "Treating decorative, stair, mining and general commercial carpet as equivalents",
          "Purchasing before installation and maintenance conditions are documented",
        ]}
        evidence="Each product page contains its own MOQ tiers, reference price, construction and technical details. Because this category covers unrelated applications, final suitability and compliance must be confirmed against the exact product rather than the category description."
        quoteHref="/contact?product=Public%20Area%20Carpet#quote-form"
        quoteLabel="Match a Product to My Application"
      />

      <TechnicalSourcePanel
        title="Public Area Carpet Specification Reference"
        summary="Public-area flooring should be matched to traffic, cleaning access, replacement strategy, fire-performance requirements, construction, site conditions, and phased delivery. Confirm every requirement against the quoted product."
        documents={[
          { label: "Public Area Carpet Specification Guide", href: "/downloads/public-area-carpet-specification-guide.pdf" },
        ]}
        sources={[
          { label: "Manufacturer Profile", href: "/commercial-carpet-manufacturer" },
          { label: "Factory & Production", href: "/factory" },
          { label: "Application Guides", href: "/projects" },
          { label: "Request a Quote", href: "/contact?product=Public%20Area%20Carpet#quote-form" },
        ]}
      />

      <section className="section-padding">
        <div className="container-fox">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {categoryProducts.map((p) => {
              const isCustomRug = p.id === customRugId;
              return (
              <Link
                key={p.id}
                href={`/products/${categoryId}/${p.id}`}
                className="group flex h-full flex-col rounded-lg border border-border bg-white p-6 transition-all duration-300 hover:border-accent hover:shadow-xl"
                data-track-event={isCustomRug ? "select_item" : undefined}
                data-item-id={isCustomRug ? "VHC-PA-SWR-001" : undefined}
                data-item-name={isCustomRug ? "Custom Sculpted Wool Lobby Rug" : undefined}
                data-item-category={isCustomRug ? "Public Area Carpets" : undefined}
                data-item-variant={isCustomRug ? "Sand Beige Concentric Square" : undefined}
                data-price={isCustomRug ? "500" : undefined}
                data-currency={isCustomRug ? "USD" : undefined}
              >
                <div className="aspect-square overflow-hidden mb-8 shadow-md border border-border">
                   <ProductImage src={p.image} alt={p.imageAlt || p.name} className="w-full h-full object-cover transition-transform group-hover:scale-110" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <h3 className="font-bold text-xl text-primary uppercase mb-6 h-14 leading-tight group-hover:text-accent transition-colors">{p.name}</h3>
                <p className="mb-6 text-sm leading-relaxed text-muted">{p.description}</p>
                {isCustomRug && (
                  <p className="mb-4 inline-flex border border-accent/30 px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-accent">
                    Decorative Area Rug
                  </p>
                )}
                <div className="mb-6 space-y-2 border-t border-border pt-5 text-[11px] uppercase">
                  <div className="flex justify-between gap-4">
                    <span className="text-muted">{isCustomRug ? "Starting Price" : "FOB Price"}</span>
                    <span className="text-right font-black text-primary">{p.fobPrice?.display}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-muted">Project MOQ</span>
                    <span className="text-right font-black text-primary">{p.moqTiers.project}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-muted">Availability</span>
                    <span className="text-right font-black text-primary">{isCustomRug ? "Made to Order" : "In Stock / Made to Order"}</span>
                  </div>
                </div>
                <div className="mt-auto flex min-h-11 items-center justify-between rounded-sm bg-primary px-4 py-3 text-[10px] font-black uppercase tracking-[0.12em] text-white transition-colors group-hover:bg-[#C8752A]">
                   <span>View Product & Pricing</span>
                   <span>→</span>
                </div>
              </Link>
              );
            })}
          </div>
          {categoryProducts.length === 0 && (
            <div className="text-center py-20 border-2 border-dashed border-border">
               <p className="text-muted italic uppercase tracking-widest">More collections are being added. Please contact us for the latest B2B catalogue.</p>
               <Link href="/contact" className="btn-fox-orange mt-8 inline-block">Request Full PDF Catalogue</Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

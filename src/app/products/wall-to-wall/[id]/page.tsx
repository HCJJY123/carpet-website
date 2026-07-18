import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products } from "@/lib/data";
import { absoluteUrl, productBreadcrumbJsonLd, productJsonLd, productPath, safeJsonLd } from "@/lib/seo";
import ProductGallery from "@/components/ProductGallery";
import { BuyerReasons, ProductConversionPanel } from "@/components/ProductConversion";
import RelatedCaseStudies from "@/components/RelatedCaseStudies";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const p = products.find((item) => item.id === id && item.category === "wall-to-wall");
  if (!p) return { title: "Product Not Found" };
  return {
    title: `${p.name} | VISHOME Commercial Carpet`,
    description: p.description,
    alternates: { canonical: absoluteUrl(productPath(p.id)) },
  };
}

export function generateStaticParams() {
  return products.filter((item) => item.category === "wall-to-wall").map((item) => ({ id: item.id }));
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const p = products.find((item) => item.id === id && item.category === "wall-to-wall");
  if (!p) notFound();

  return (
    <div className="bg-white min-h-screen font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(productJsonLd(p)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(productBreadcrumbJsonLd(p)) }} />

      <section className="bg-slate-50 py-24 border-b border-border">
        <div className="container-fox">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-8 sticky top-24">
              <ProductGallery mainImage={p.image} gallery={p.gallery} productName={p.name} />
            </div>
            <div className="space-y-12 py-4">
              <div>
                <span className="text-accent font-black tracking-[0.4em] text-[10px] uppercase mb-4 block">Premium Commercial Solution</span>
                <h1 className="text-4xl md:text-6xl font-black text-primary uppercase tracking-tight leading-[0.9] mb-8">{p.name}</h1>
                <p className="text-xl text-muted leading-relaxed italic font-medium">{p.description}</p>
              </div>
              <div className="grid grid-cols-2 gap-x-12 gap-y-10 border-y border-border py-12">
                <div className="space-y-1"><span className="text-[10px] font-black uppercase text-primary/30 tracking-widest block">Material</span><span className="text-primary font-bold">{p.spec.material}</span></div>
                <div className="space-y-1"><span className="text-[10px] font-black uppercase text-primary/30 tracking-widest block">Format</span><span className="text-primary font-bold">{p.spec.size}</span></div>
                <div className="space-y-1"><span className="text-[10px] font-black uppercase text-primary/30 tracking-widest block">MOQ</span><span className="text-accent font-bold">{p.moq}</span></div>
                <div className="space-y-1"><span className="text-[10px] font-black uppercase text-primary/30 tracking-widest block">Lead Time</span><span className="text-primary font-bold">{p.leadTime}</span></div>
              </div>
              <ProductConversionPanel product={{ name: p.name }} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-fox">
          <div className="grid lg:grid-cols-3 gap-20">
            <div className="lg:col-span-1"><h2 className="text-3xl font-black text-primary uppercase tracking-tight mb-8">Technical <br /><span className="text-accent">Specifications</span></h2><p className="text-muted text-base leading-relaxed italic">Engineered to meet the highest global commercial standards including ASTM E648 Fire Rating and Class 33 Heavy Traffic ratings.</p></div>
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-x-12 gap-y-8 bg-surface p-12 border border-border shadow-sm">
              {Object.entries(p.technicalSpecs).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center border-b border-border pb-4 last:border-0"><span className="text-[10px] font-black uppercase text-primary/40 tracking-widest">{key.replace(/([A-Z])/g, ' $1')}</span><span className="text-sm font-bold text-primary">{value}</span></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RelatedCaseStudies category={p.category} />
      <BuyerReasons />
    </div>
  );
}

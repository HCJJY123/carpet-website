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
  const p = products.find((item) => item.id === id);
  if (!p) return { title: "Product Not Found" };
  return {
    title: `${p.name} | Vishomecarpet Commercial Solutions`,
    description: p.description,
    alternates: { canonical: absoluteUrl(productPath(p.category, p.id)) },
    openGraph: {
      title: p.name,
      description: p.description,
      url: absoluteUrl(productPath(p.category, p.id)),
      images: [{ url: absoluteUrl(p.image), alt: p.name }],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const p = products.find((item) => item.id === id);
  if (!p) notFound();

  return (
    <div className="bg-white min-h-screen font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(productJsonLd(p)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(productBreadcrumbJsonLd(p)) }} />

      <section className="bg-slate-50 py-24 border-b border-border">
        <div className="container-fox">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Left: Enhanced E-commerce Gallery (1 Big + 3 Small) */}
            <div className="sticky top-24">
              <ProductGallery 
                mainImage={p.image} 
                gallery={p.gallery} 
                productName={p.name} 
              />
            </div>

            {/* Right: B2B Info Panel */}
            <div className="space-y-12 py-4">
              <div>
                <span className="text-accent font-black tracking-[0.4em] text-[10px] uppercase mb-4 block italic underline decoration-2 underline-offset-8">
                  Vishomecarpet Factory Direct
                </span>
                <h1 className="text-4xl md:text-6xl font-black text-primary uppercase tracking-tight leading-[0.9] mb-8">
                  {p.name}
                </h1>
                <p className="text-xl text-muted leading-relaxed italic font-medium">
                  {p.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-x-12 gap-y-10 border-y border-border py-12">
                <div className="space-y-1">
                  <span className="text-[10px] font-black uppercase text-primary/30 tracking-widest block">Material</span>
                  <span className="text-primary font-bold">{p.spec.material}</span>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-black uppercase text-primary/30 tracking-widest block">Format</span>
                  <span className="text-primary font-bold">{p.spec.size}</span>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-black uppercase text-primary/30 tracking-widest block">MOQ</span>
                  <span className="text-accent font-bold">{p.moq}</span>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-black uppercase text-primary/30 tracking-widest block">Lead Time</span>
                  <span className="text-primary font-bold">{p.leadTime}</span>
                </div>
              </div>

              <ProductConversionPanel product={{ name: p.name, category: p.category }} />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Detail Body */}
      <section className="py-24 bg-white">
        <div className="container-fox">
          <div className="max-w-4xl mx-auto prose prose-slate">
            <h2 className="text-4xl font-black text-primary tracking-tighter uppercase italic mb-10">
              Commercial <span className="text-accent">Application</span> & Project Performance
            </h2>
            <div className="space-y-8 text-lg text-slate-600 font-medium leading-relaxed italic">
              <p>{p.longDescription}</p>
            </div>

            {/* Additional Detail Images for SEO & Trust */}
            {p.gallery && p.gallery.length > 4 && (
              <div className="mt-16 grid grid-cols-1 gap-12">
                {p.gallery.slice(4).map((img, i) => (
                  <div key={i} className="relative aspect-video rounded-xl overflow-hidden border-8 border-slate-50 shadow-xl bg-white">
                    <img src={img} alt={`${p.name} project application`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Tech Specs Matrix */}
      <section className="section-padding bg-slate-50 border-t border-border">
        <div className="container-fox">
          <div className="grid lg:grid-cols-3 gap-20">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-black text-primary uppercase tracking-tight mb-8">Technical <br /><span className="text-accent">Specifications</span></h2>
              <p className="text-muted text-base leading-relaxed italic">
                Our hospitality broadloom carpets are engineered to meet ASTM E648 Class I fire ratings and provide superior acoustic comfort for 5-star hotel environments.
              </p>
            </div>
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-x-12 gap-y-8 bg-white p-12 border border-border shadow-sm">
              {Object.entries(p.technicalSpecs).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center border-b border-border pb-4 last:border-0">
                  <span className="text-[10px] font-black uppercase text-primary/40 tracking-widest">{key.replace(/([A-Z])/g, ' $1')}</span>
                  <span className="text-sm font-bold text-primary">{value}</span>
                </div>
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

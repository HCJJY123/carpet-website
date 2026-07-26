import { Metadata } from "next";
import Link from "next/link";
import { productCategories as categories, caseStudies, certifications, products } from "@/lib/data";
import { blogPosts } from "@/lib/blog-data";
import ProductImage from "@/components/ProductImage";
import { getWhatsAppBusinessUrl, whatsappBusinessMessages } from "@/lib/whatsapp";
import { productPath } from "@/lib/seo";
import HomeHeroCarousel from "@/components/HomeHeroCarousel";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.vishomecarpet.com" },
};

const homeCategoryImages: Record<string, string> = {
  "carpet-tiles": "/images/home/category-tiles.webp",
  "wall-to-wall": "/images/home/category-broadloom.webp",
  "public-area": "/images/home/category-public-area.webp",
};

export default function Home() {
  const whatsappUrl = getWhatsAppBusinessUrl(whatsappBusinessMessages.header);
  const featuredProduct = products.find((product) => product.id === "3d-printed-hotel-carpet");
  const categoryPriority = ["wall-to-wall", "public-area", "carpet-tiles"];
  const prioritizedCategories = categoryPriority
    .map((id) => categories.find((category) => category.id === id))
    .filter((category): category is (typeof categories)[number] => Boolean(category));
  const casePriority = ["case-5", "case-6", "case-12", "case-11"];
  const prioritizedCases = [
    ...casePriority.map((id) => caseStudies.find((item) => item.id === id)).filter((item): item is (typeof caseStudies)[number] => Boolean(item)),
    ...caseStudies.filter((item) => !casePriority.includes(item.id)),
  ];

  return (
    <div className="bg-white">
      <HomeHeroCarousel whatsappUrl={whatsappUrl} />

      <section className="bg-white border-b border-border">
        <div className="container-fox py-5">
          <div className="grid gap-3 md:grid-cols-4">
            {[
              "Factory-direct carpet manufacturer",
              "Commercial project quotation support",
              "Free sample box request available",
              "Custom design and technical data support",
            ].map((item) => (
              <div key={item} className="border border-border bg-surface px-4 py-3 text-[10px] font-black uppercase tracking-[0.16em] text-primary">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B Trust Bar - Market Focus */}
      <section className="bg-surface border-b border-border py-10">
        <div className="container-fox">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center md:gap-8">
            <p className="text-xs font-bold text-primary uppercase tracking-[0.2em]">
              Primary Markets: the Philippines / Malaysia / Bulgaria / Australia / New Zealand / South Africa / UAE
            </p>
            <div className="flex flex-wrap items-center gap-4 opacity-60 md:gap-8">
              {certifications.map((cert) => (
                <span key={cert.name} className="text-[10px] font-black text-primary uppercase tracking-widest">{cert.name}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories - Structured for Contractors */}
      <section className="section-padding bg-white">
        <div className="container-fox">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 uppercase tracking-tight">Project-Based Solutions</h2>
            <div className="w-24 h-1.5 bg-primary mx-auto mb-6"></div>
            <p className="text-muted max-w-2xl mx-auto uppercase text-xs font-bold tracking-widest">
              Bulk Supply for Flooring Distributors & Contractors
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3 md:gap-10">
            {prioritizedCategories.map((cat, index) => (
              <Link
                key={cat.id}
                href={`/products/${cat.id}`}
                className="group relative block bg-surface overflow-hidden border border-border hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <ProductImage
                    src={homeCategoryImages[cat.id] ?? cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/40 transition-colors"></div>
                  <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                    <span className="text-white/70 font-bold tracking-[0.2em] text-[10px] uppercase mb-2 block">Series 0{index + 1}</span>
                    <h3 className="text-2xl font-bold uppercase mb-4 leading-tight">{cat.name}</h3>
                    <div className="h-1 w-12 bg-white mb-6 group-hover:w-full transition-all duration-500"></div>
                    <p className="text-xs text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {featuredProduct && (
        <section className="border-y border-border bg-surface">
          <div className="container-fox py-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="mb-2 text-[10px] font-black uppercase tracking-[0.24em] text-accent">High-Intent Hospitality Product</p>
                <h2 className="mb-3 text-2xl font-black uppercase leading-tight text-primary md:text-3xl">
                  3D Printed Nylon Carpet for Hotel Projects
                </h2>
                <p className="max-w-3xl text-sm leading-relaxed text-muted">
                  Review project images, custom pattern capability, MOQ, technical construction, and factory-direct quotation support for guest rooms, corridors, and hospitality public areas.
                </p>
              </div>
              <Link
                href={productPath(featuredProduct.id)}
                className="inline-flex min-h-12 items-center justify-center bg-primary px-6 py-4 text-center text-xs font-black uppercase tracking-[0.16em] text-white transition-all hover:bg-black"
              >
                View Hotel Carpet Details
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Vishome Global Strength - B2B Data Matrix */}
      <section className="section-padding bg-white !pb-6 md:!pb-20">
        <div className="container-fox">
          <div className="grid items-center gap-10 mb-0 lg:grid-cols-2 lg:gap-20 md:mb-20">
            <div>
              <span className="text-primary font-black tracking-[0.3em] text-[10px] uppercase mb-4 block border-l-4 border-primary pl-4">
                Corporate Profile
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8 uppercase leading-tight">
                Tianjin Vishome Global Commercial Carpet Co. Ltd.
              </h2>
              <div className="prose prose-slate max-w-none">
                <p className="text-muted text-lg leading-relaxed mb-6 font-medium">
                  Vishome is a professional commercial carpet manufacturer integrating carpet research, development, production, and international trade. With a 50,000-square-meter factory, more than 900 skilled employees, and exports to over 45 countries and regions, we provide reliable carpet solutions for global distributors, contractors, hotels, offices, and commercial projects.
                </p>
                <p className="text-muted text-base leading-relaxed mb-10">
                  Our main products include commercial carpet tiles, hotel carpets, wall-to-wall carpet rolls, office carpet tiles, event carpets, stair runners, and customized rugs. Backed by a professional design and production team, we support custom sizes, colors, materials, patterns, and project-based flooring solutions for international B2B customers.
                </p>
              </div>
              <Link href="/factory" className="btn-fox-orange inline-block">
                View Full Factory Capability
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {[
                { label: "Factory Area", value: "50,000㎡", desc: "Production Facility" },
                { label: "Skilled Staff", value: "900+", desc: "Experienced Workers" },
                { label: "Export Markets", value: "45+", desc: "Countries & Regions" },
                { label: "Order Support", value: "OEM/ODM", desc: "Custom Solutions" }
              ].map((stat) => (
                <div key={stat.label} className="bg-surface p-8 border border-border hover:border-primary transition-all group">
                  <p className="text-xs font-bold text-muted uppercase tracking-widest mb-2">{stat.label}</p>
                  <p className="text-3xl font-black text-primary mb-1 group-hover:text-accent transition-colors">{stat.value}</p>
                  <p className="text-[10px] font-bold text-muted uppercase tracking-[0.2em]">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Case Studies - Anonymized for B2B Trust */}
      <section className="section-padding bg-white !pt-8 md:!pt-20">
        <div className="container-fox">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4 uppercase">Project Application References</h2>
              <p className="text-muted max-w-xl font-medium">
                Application-oriented commercial flooring references for hotel, office, retail, airport, and public-area procurement planning.
              </p>
            </div>
            <Link href="/projects" className="text-primary font-bold text-sm uppercase tracking-widest border-b-2 border-primary pb-2 hover:text-muted hover:border-muted transition-all">
              View All Reference Pages
            </Link>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {prioritizedCases.map((cs) => (
              <Link key={cs.id} href={`/projects/${cs.id}`} className="group flex flex-col">
                <div className="aspect-[4/3] overflow-hidden bg-surface mb-6">
                  <ProductImage
                    src={cs.id === "case-6" ? "/images/products/public-area/public-area-heavy-duty/01-main-public-area-heavy-duty-carpet.webp" : cs.image}
                    alt={cs.imageAlt ?? cs.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>
                <h3 className="font-bold text-primary text-base uppercase leading-tight mb-4 h-12 overflow-hidden">
                  {cs.title}
                </h3>
                <div className="mt-auto">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/50 group-hover:text-primary transition-colors">
                    Technical Overview →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Procurement Insights */}
      <section className="section-padding bg-surface border-t border-border">
        <div className="container-fox">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 uppercase">Procurement Insights</h2>
            <p className="text-muted max-w-2xl mx-auto uppercase text-[10px] font-bold tracking-widest">
              Technical Guides for International Buyers
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3 md:gap-10">
            {blogPosts.slice(0, 3).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-white border border-border p-2 hover:shadow-xl transition-all">
                <div className="aspect-video overflow-hidden mb-6">
                  <ProductImage src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-primary uppercase text-sm mb-4 leading-tight group-hover:text-primary-light">{post.title}</h3>
                  <div className="text-[9px] font-bold text-muted uppercase tracking-widest border-t border-border pt-4">
                    Expert Guide · {post.category}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Professional Intake */}
      <section className="bg-primary py-16 text-white md:py-24">
        <div className="container-fox text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 uppercase tracking-widest">Ready for Technical Assessment?</h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Contact our factory for project-based customization, bulk pricing, and international fire-rating documentation.
          </p>
          <Link href="/contact" className="inline-block rounded-sm bg-white px-8 py-5 text-sm font-bold uppercase tracking-[0.16em] text-primary shadow-2xl transition-all hover:bg-gray-100 md:px-16 md:py-6 md:tracking-[0.3em]">
            Contact Our Factory
          </Link>
        </div>
      </section>
    </div>
  );
}

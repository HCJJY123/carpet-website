import Link from "next/link";
import { productCategories as categories, caseStudies, certifications } from "@/lib/data";
import { blogPosts } from "@/lib/blog-data";
import ProductImage from "@/components/ProductImage";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section - B2B Manufacturer Style */}
      <section className="relative bg-primary overflow-hidden min-h-[650px] flex items-center">
        <div className="absolute inset-0 z-0">
          <ProductImage
            src="/images/hero-home.jpg"
            alt="Commercial carpet tiles manufacturer for international projects"
            className="w-full h-full object-cover"
          />
         {/* Professional Deep Blue Overlay */}
         <div className="absolute inset-0 bg-[#102A43]/85"></div>

          {/* Brand Watermark Decor */}
          <img
            src="/logo-mark.svg"
            alt=""
            className="absolute right-[-80px] bottom-[-60px] w-[400px] md:w-[550px] h-auto opacity-[0.07] pointer-events-none select-none"
          />
        </div>

        <div className="container-fox relative z-10 py-24">
          <div className="max-w-4xl">
            <span className="text-white/70 font-bold tracking-[0.3em] text-xs uppercase mb-6 block border-l-4 border-accent pl-4">
              Factory Direct Supply since 2005
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight uppercase tracking-tight">
              Commercial Carpet Tiles & <br/>Custom Hotel Carpet Manufacturer
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl opacity-90 leading-relaxed font-light">
              We supply high-performance commercial carpet tiles, wall-to-wall rolls, and custom rugs for contractors, distributors, hotels, and office projects in North America, Europe, Australia and the Middle East.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link href="/contact" className="bg-white text-primary font-bold px-10 py-5 rounded-sm hover:bg-gray-100 transition-all text-sm uppercase tracking-widest shadow-xl">
                Send Your Project Requirements
              </Link>
              <Link href="/products" className="border-2 border-white/30 text-white font-bold px-10 py-5 rounded-sm hover:bg-white/10 transition-all text-sm uppercase tracking-widest">
                Explore Collections
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* B2B Trust Bar - Market Focus */}
      <section className="bg-surface border-b border-border py-10">
        <div className="container-fox">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <p className="text-xs font-bold text-primary uppercase tracking-[0.2em]">
              Primary Markets: USA / UK / Canada / Australia / UAE / Saudi Arabia
            </p>
            <div className="flex flex-wrap items-center gap-8 opacity-60">
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
          <div className="grid md:grid-cols-3 gap-10">
            {categories.map((cat, index) => (
              <Link
                key={cat.id}
                href={`/products/${cat.id}`}
                className="group relative block bg-surface overflow-hidden border border-border hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <ProductImage
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
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

      {/* Vishome Global Strength - B2B Data Matrix */}
      <section className="section-padding bg-white">
        <div className="container-fox">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
            <div>
              <span className="text-primary font-black tracking-[0.3em] text-[10px] uppercase mb-4 block border-l-4 border-primary pl-4">
                Corporate Profile
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8 uppercase leading-tight">
                Vishome Global Commercial Carpet Co. Ltd.
              </h2>
              <div className="prose prose-slate max-w-none">
                <p className="text-muted text-lg leading-relaxed mb-6 font-medium">
                  Vishome is a professional commercial carpet manufacturer integrating carpet research, development, production, and international trade. With a 50,000-square-meter factory, more than 900 skilled employees, and exports to over 45 countries and regions, we provide reliable carpet solutions for global distributors, contractors, hotels, offices, and commercial projects.
                </p>
                <p className="text-muted text-base leading-relaxed mb-10">
                  Our main products include commercial carpet tiles, hotel carpets, wall-to-wall carpet rolls, office carpet tiles, event carpets, stair runners, and customized rugs. Backed by a professional design and production team, we support custom sizes, colors, materials, patterns, and project-based flooring solutions for international B2B customers.
                </p>
              </div>
              <Link href="/about" className="btn-fox-orange inline-block">
                View Full Factory Capability
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
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
      <section className="section-padding bg-white">
        <div className="container-fox">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4 uppercase">Project Case Studies</h2>
              <p className="text-muted max-w-xl font-medium">
                Proven experience in hotel renovations and commercial office fit-outs worldwide.
              </p>
            </div>
            <Link href="/cases" className="text-primary font-bold text-sm uppercase tracking-widest border-b-2 border-primary pb-2 hover:text-muted hover:border-muted transition-all">
              View All Global Cases
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="group flex flex-col">
                <div className="aspect-[4/3] overflow-hidden bg-surface mb-6">
                  <ProductImage
                    src={cs.image}
                    alt={cs.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <h3 className="font-bold text-primary text-base uppercase leading-tight mb-4 h-12 overflow-hidden">
                  {cs.title}
                </h3>
                <div className="mt-auto">
                  <Link href="/cases" className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/50 group-hover:text-primary transition-colors">
                    Technical Overview →
                  </Link>
                </div>
              </div>
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
          <div className="grid sm:grid-cols-3 gap-10">
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
      <section className="py-24 bg-primary text-white">
        <div className="container-fox text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 uppercase tracking-widest">Ready for Technical Assessment?</h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Contact our factory for project-based customization, bulk pricing, and international fire-rating documentation.
          </p>
          <Link href="/contact" className="bg-white text-primary font-bold px-16 py-6 rounded-sm hover:bg-gray-100 transition-all uppercase tracking-[0.3em] shadow-2xl inline-block text-sm">
            Contact Our Factory
          </Link>
        </div>
      </section>
    </div>
  );
}

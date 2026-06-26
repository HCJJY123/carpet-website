import Link from "next/link";
import { productCategories as categories, caseStudies, certifications } from "@/lib/data";
import { blogPosts } from "@/lib/blog-data";
import ProductImage from "@/components/ProductImage";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#102A43] overflow-hidden min-h-[650px] flex items-center">
        <div className="absolute inset-0 z-0">
          <ProductImage src="/images/hero-home.jpg" alt="Commercial carpet manufacturer" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="container-fox relative z-10 py-24">
          <div className="max-w-4xl">
            <span className="text-white/70 font-bold tracking-[0.3em] text-xs uppercase mb-6 block border-l-4 border-accent pl-4">Factory Direct since 2005</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight uppercase tracking-tight">Commercial Carpet Tiles & <br/>Custom Hotel Carpet Manufacturer</h1>
            <div className="flex flex-wrap gap-6"><Link href="/contact" className="bg-white text-primary font-bold px-10 py-5 rounded-sm hover:bg-gray-100 transition-all text-xs uppercase tracking-widest shadow-xl">Send Requirements</Link></div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding bg-surface">
        <div className="container-fox">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 uppercase">Project-Based Solutions</h2><div className="w-24 h-1.5 bg-primary mx-auto"></div></div>
          <div className="grid md:grid-cols-3 gap-10">
            {categories.map((cat, index) => (
              <Link key={cat.id} href={`/products/${cat.id}`} className="group relative block bg-white overflow-hidden border border-border hover:shadow-2xl transition-all duration-500">
                <div className="aspect-[4/5] overflow-hidden"><ProductImage src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" /></div>
                <div className="p-8"><h3 className="text-2xl font-bold uppercase">{cat.name}</h3></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT CASE STUDIES - FIXED VERSION */}
      <section className="section-padding bg-white border-t border-border">
        <div className="container-fox">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4 uppercase">Project Case Studies</h2>
              <p className="text-muted max-w-xl font-medium">Proven experience in hotel renovations and commercial office fit-outs worldwide.</p>
            </div>
            <Link href="/projects" className="text-primary font-bold text-sm uppercase tracking-widest border-b-2 border-primary pb-2 hover:text-muted hover:border-muted transition-all">View All Global Cases</Link>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="group flex flex-col">
                {/* 1. Image Link */}
                <Link href={`/projects/${cs.id}`} className="aspect-[4/3] overflow-hidden bg-surface mb-6 block shadow-lg">
                  <ProductImage
                    src={cs.image}
                    alt={cs.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                </Link>
                
                {/* 2. Title Link */}
                <Link href={`/projects/${cs.id}`} className="block">
                  <h3 className="font-bold text-primary text-xs uppercase leading-tight mb-4 h-10 overflow-hidden group-hover:text-accent transition-colors">
                    {cs.title}
                  </h3>
                </Link>
                
                {/* 3. Button Link */}
                <div className="mt-auto pt-4 border-t border-border">
                  <Link 
                    href={`/projects/${cs.id}`} 
                    className="text-[9px] font-black uppercase tracking-[0.2em] text-primary/50 group-hover:text-primary transition-all flex items-center gap-2"
                  >
                    Technical Overview <span className="text-accent">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="section-padding bg-surface">
        <div className="container-fox">
          <div className="text-center mb-16"><h2 className="text-3xl font-bold text-primary uppercase">Procurement Insights</h2></div>
          <div className="grid sm:grid-cols-3 gap-10">
            {blogPosts.slice(0, 3).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-white border border-border p-2 hover:shadow-xl transition-all">
                <div className="aspect-video overflow-hidden mb-6"><ProductImage src={post.image} alt={post.title} className="w-full h-full object-cover" /></div>
                <div className="p-4"><h3 className="font-bold text-primary uppercase text-sm mb-4 leading-tight">{post.title}</h3></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container-fox">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 uppercase tracking-widest">Ready for Technical Assessment?</h2>
          <Link href="/contact" className="bg-white text-primary font-bold px-16 py-6 rounded-sm hover:bg-gray-100 transition-all uppercase tracking-[0.3em] inline-block text-sm shadow-2xl">Contact Our Factory</Link>
        </div>
      </section>
    </div>
  );
}

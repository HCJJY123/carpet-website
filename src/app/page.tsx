import Link from "next/link";
import { productCategories as categories, caseStudies, blogPosts, certifications, solutions, processSteps } from "@/lib/data";
import ProductImage from "@/components/ProductImage";

export default function Home() {
  return (
    <>
      {/* Hero Section - Foxflor Style */}
      <section className="bg-primary-light py-24 md:py-32">
        <div className="container-fox text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight max-w-4xl mx-auto">
            15+ Years Experience in Commercial Carpet Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto opacity-90">
            From design and production to global delivery. High-performance carpet tiles and hotel broadloom trusted by 500+ global brands.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/products" className="btn-fox-orange">
              Get A Free Quotation
            </Link>
            <Link href="/cases" className="btn-fox-outline">
              View Our Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges - Foxflor Minimalist */}
      <section className="bg-white border-b border-border py-8">
        <div className="container-fox">
          <div className="flex flex-wrap items-center justify-between gap-8 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all">
            {certifications.map((cert) => (
              <div key={cert.name} className="text-center">
                <span className="text-sm font-bold text-primary">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Categories - Foxflor Grid */}
      <section className="section-padding bg-surface">
        <div className="container-fox">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4 uppercase">Our Collections</h2>
            <div className="w-20 h-1.5 bg-accent mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/products/${cat.slug}`}
                className="group relative block bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <ProductImage
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 border-t-4 border-transparent group-hover:border-accent transition-colors">
                  <h3 className="text-2xl font-bold text-primary mb-3">{cat.name}</h3>
                  <p className="text-muted text-sm mb-6 leading-relaxed">{cat.description}</p>
                  <span className="text-accent font-bold text-sm inline-flex items-center gap-2">
                    EXPLORE MORE <span className="text-xl">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Advantages - Foxflor 4-Column Grid */}
      <section className="section-padding bg-white">
        <div className="container-fox">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "CREATIVE DESIGN",
                desc: "Our professional design team focus on being highly innovative to meet your unique needs.",
                icon: "🎨",
              },
              {
                title: "CUSTOM PRODUCTION",
                desc: "State-of-the-art manufacturing facility in Tianjin Vishome factory with 15+ years experience.",
                icon: "🏭",
              },
              {
                title: "FAST DELIVERY",
                desc: "Optimized logistics and stock management ensuring your project stays on schedule.",
                icon: "🚚",
              },
              {
                title: "QUALITY CONTROL",
                desc: "Rigorous testing for fire rating, stain resistance, and durability at every stage.",
                icon: "🛡️",
              },
            ].map((item) => (
              <div key={item.title} className="p-8 border border-border rounded-lg hover:border-success/30 hover:shadow-md transition-all">
                <div className="text-4xl mb-6">{item.icon}</div>
                <h3 className="font-bold text-primary mb-3 tracking-wide">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects - Foxflor Case Grid */}
      <section className="section-padding bg-primary">
        <div className="container-fox">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 uppercase">Global Projects</h2>
              <p className="text-gray-400 max-w-xl">
                Supplying premium flooring solutions for luxury hotels, corporate offices, and commercial spaces worldwide.
              </p>
            </div>
            <Link href="/cases" className="btn-fox-outline whitespace-nowrap">
              All Projects
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="group bg-primary-light border border-white/5 overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <ProductImage
                    src={cs.image}
                    alt={cs.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs text-accent font-bold uppercase tracking-widest block mb-2">
                    {cs.category === "carpet-tiles" ? "Carpet Tiles" : "Broadloom"}
                  </span>
                  <h3 className="font-bold text-white text-lg group-hover:text-accent transition-colors">{cs.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us / Production - Foxflor Style */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container-fox">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8 uppercase leading-tight">
                One-stop carpet solution provider from China
              </h2>
              <div className="space-y-6">
                {[
                  "Factory direct pricing for global B2B supply",
                  "Professional OEM/ODM customization services",
                  "CRI Green Label Plus & ISO 9001 certified",
                  "Global logistics support to 40+ countries",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-4">
                    <span className="text-success text-xl font-bold">✓</span>
                    <p className="text-muted font-medium">{point}</p>
                  </div>
                ))}
              </div>
              <div className="mt-12">
                <Link href="/about" className="btn-fox-orange">
                  Learn More About Our Factory
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-accent/10 -rotate-3 rounded-2xl"></div>
              <ProductImage
                src="/images/blog-office-carpet.jpg"
                alt="Production Line"
                className="relative rounded-2xl shadow-2xl z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-accent">
        <div className="container-fox text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 uppercase tracking-wide">
            Ready to Start Your Commercial Project?
          </h2>
          <p className="text-white/80 mb-12 max-w-2xl mx-auto text-lg">
            Consult with our experts today and get a tailored flooring solution for your space.
          </p>
          <Link href="/contact" className="bg-white text-accent font-bold px-12 py-4 rounded-md hover:bg-gray-100 transition-all uppercase tracking-widest shadow-lg">
            Contact Us Now
          </Link>
        </div>
      </section>
    </>
  );
}

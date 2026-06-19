import Link from "next/link";
import { productCategories as categories, caseStudies, blogPosts, certifications, solutions, testimonials, processSteps } from "@/lib/data";
import ProductImage from "@/components/ProductImage";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary overflow-hidden min-h-[620px] flex items-center">
        <div className="absolute inset-0">
          <ProductImage src="/images/hero-home.jpg" alt="Commercial carpet flooring in a modern lobby" className="h-full w-full" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/65 to-primary/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 w-full">
          <div className="max-w-2xl">
            <span className="inline-block text-accent text-sm font-semibold uppercase tracking-widest mb-4">
              Since 2005 · Quality Flooring
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Premium Carpet Tiles &amp; Broadloom for Commercial Spaces
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
              Professional manufacturer of commercial carpet tiles and hotel broadloom carpets.
              Quality flooring solutions trusted by Hilton, Marriott, and Fortune 500 companies worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/products"
                className="bg-accent text-white font-medium px-8 py-3.5 rounded-lg hover:bg-accent-light transition-colors text-sm"
              >
                Explore Products
              </Link>
              <Link
                href="/contact"
                className="border border-white/30 text-white font-medium px-8 py-3.5 rounded-lg hover:bg-white/10 transition-colors text-sm"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Bar */}
      <section className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {certifications.map((cert) => (
              <div key={cert.name} className="text-center">
                <div className="text-sm font-semibold text-primary">{cert.name}</div>
                <div className="text-xs text-muted">{cert.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Product Lines</h2>
            <p className="text-muted max-w-2xl mx-auto">
              Two comprehensive product ranges covering every commercial flooring need
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/products/${cat.slug}`}
                className="group relative rounded-2xl overflow-hidden bg-gray-50 border border-border hover:border-accent/50 transition-all"
              >
                <div className="p-8 md:p-10">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                    {cat.subtitle}
                  </span>
                  <h3 className="text-2xl font-bold text-primary mt-1 mb-3 group-hover:text-accent transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-6">
                    {cat.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-accent">
                    View Products
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Factory Showroom */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
            <ProductImage src="/images/factory-showroom.jpg" alt="Carpet factory showroom with sample walls" className="h-80 md:h-[460px] rounded-2xl border border-border" />
            <div>
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">Factory Showroom</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-5">See materials, colors, and production capability in one place</h2>
              <p className="text-muted leading-relaxed mb-6">
                Our showroom connects sample selection with factory-direct manufacturing, helping designers,
                contractors, and purchasing teams compare textures, colors, and project-ready carpet systems faster.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-accent text-white font-medium px-6 py-3 rounded-lg hover:bg-accent-light transition-colors text-sm"
              >
                Request Samples
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose CarpetPro</h2>
            <p className="text-muted max-w-2xl mx-auto">
              We deliver more than just carpet - we deliver peace of mind
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                title: "Factory Direct",
                desc: "Own manufacturing facility with 15 years of export experience. Competitive pricing without middlemen.",
                icon: "🏭",
              },
              {
                title: "Quality Certified",
                desc: "ISO 9001, CE, CRI Green Label Plus certified. Rigorous quality control at every production stage.",
                icon: "✓",
              },
              {
                title: "Custom Solutions",
                desc: "Custom colors, patterns, and sizes available. Pantone matching and bespoke jacquard weaving.",
                icon: "🎨",
              },
              {
                title: "Global Shipping",
                desc: "Reliable logistics network shipping to 40+ countries. FOB Shanghai, CIF, DDP options available.",
                icon: "🌍",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-border hover:border-accent/30 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-xl mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Carpet Solutions Tailored to Your Project</h2>
            <p className="text-muted max-w-2xl mx-auto">
              With more than 15 years of experience in commercial carpet production and export, we have helped
              clients in 40+ countries with customized flooring solutions for diverse applications.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {solutions.map((sol) => (
              <div key={sol.name} className="group bg-surface rounded-xl p-5 border border-border hover:border-accent/50 hover:shadow-md transition-all">
                <span className="text-2xl block mb-3">{sol.icon}</span>
                <h3 className="font-semibold text-primary mb-1.5 text-sm">{sol.name}</h3>
                <p className="text-xs text-muted leading-relaxed">{sol.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">8 Steps to Complete Your Project</h2>
            <p className="text-muted max-w-2xl mx-auto">
              From initial consultation to final delivery, our streamlined process ensures quality at every stage.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div key={step.step} className="bg-white rounded-xl p-6 border border-border hover:shadow-lg transition-all relative">
                <span className="text-3xl font-bold text-accent/20 absolute top-3 right-4">{step.step}</span>
                <h3 className="font-semibold text-primary mb-2 relative">{step.title}</h3>
                <p className="text-sm text-muted leading-relaxed relative">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalogue */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">Product Catalogue</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-5">Compare carpet textures before your quote</h2>
              <p className="text-muted leading-relaxed mb-6">
                Choose from commercial carpet tiles, hotel broadloom, and custom color ranges. We can prepare
                sample boards, catalogue references, and project recommendations based on your space and budget.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-accent text-accent font-medium px-6 py-3 rounded-lg hover:bg-accent hover:text-white transition-colors text-sm"
              >
                Ask for Catalogue
              </Link>
            </div>
            <ProductImage src="/images/catalogue-cover.jpg" alt="Commercial carpet catalogue and sample swatches" className="h-80 md:h-[460px] rounded-2xl border border-border" />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Featured Projects</h2>
              <p className="text-muted max-w-xl">
                Real projects delivering quality flooring solutions worldwide
              </p>
            </div>
            <Link
              href="/cases"
              className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-light transition-colors"
            >
              View All Projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {caseStudies.slice(0, 4).map((cs) => (
              <div key={cs.id} className="group bg-surface rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all">
                <ProductImage src={cs.image} alt={cs.client} className="h-44" />
                <div className="p-5">
                  <span className="text-xs text-accent font-semibold uppercase">{cs.category === "carpet-tiles" ? "Carpet Tiles" : "Broadloom"}</span>
                  <h3 className="font-semibold text-primary mt-1 mb-2 group-hover:text-accent transition-colors">{cs.title}</h3>
                  <p className="text-sm text-muted line-clamp-2">{cs.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link
              href="/cases"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent"
            >
              View All Projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Blog */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Latest Insights</h2>
              <p className="text-muted max-w-xl">
                Industry knowledge and product guides from our flooring experts
              </p>
            </div>
            <Link
              href="/blog"
              className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-light transition-colors"
            >
              Read All Articles
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all"
              >
                <ProductImage src={post.image} alt={post.title} className="h-44" />
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-muted mb-2">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.category}</span>
                  </div>
                  <h3 className="font-semibold text-primary group-hover:text-accent transition-colors mb-2">{post.title}</h3>
                  <p className="text-sm text-muted line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent"
            >
              Read All Articles
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Happy Clients</h2>
            <p className="text-muted max-w-xl mx-auto">
              Check out the feedback from our contented clients who have experienced the CarpetPro advantage.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-surface rounded-xl p-6 border border-border relative">
                <svg className="w-8 h-8 text-accent/20 absolute top-4 left-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <div className="relative z-10">
                  <p className="text-sm text-muted leading-relaxed mb-4 italic">"{t.quote}"</p>
                  <div>
                    <div className="font-semibold text-primary text-sm">{t.name}</div>
                    <div className="text-xs text-muted">{t.role}, {t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto mb-8">
            Get in touch with our team for a free consultation and quote. We respond within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-accent text-white font-medium px-8 py-3.5 rounded-lg hover:bg-accent-light transition-colors text-sm"
            >
              Contact Us Now
            </Link>
            <Link
              href="/faq"
              className="border border-white/30 text-white font-medium px-8 py-3.5 rounded-lg hover:bg-white/10 transition-colors text-sm"
            >
              View FAQ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

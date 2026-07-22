import ProductImage from "@/components/ProductImage";
import { certifications } from "@/lib/data";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company Profile | VISHOME Commercial Carpet Manufacturer",
  description: "Company profile for Vishome Global Commercial Carpet Co., Ltd., a Tianjin commercial carpet manufacturer serving global B2B projects.",
  alternates: { canonical: "/about-us" },
  robots: { index: false, follow: true },
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Professional Page Header */}
      <section className="bg-primary-light py-24 text-white">
        <div className="container-fox">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 uppercase tracking-wider leading-tight">
              Company Profile
            </h1>
            <div className="w-16 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed opacity-90">
              Vishome Global Commercial Carpet Co. Ltd. is a premier commercial carpet manufacturer serving the global B2B infrastructure and hospitality markets.
            </p>
          </div>
        </div>
      </section>

      {/* Main Corporate Introduction - Left Text Right Image */}
      <section className="section-padding">
        <div className="container-fox">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-accent font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block">Our Identity</span>
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8 uppercase leading-tight">
                Vishome Global Commercial Carpet Co. Ltd.
              </h2>
              <div className="prose prose-slate max-w-none text-muted">
                <p className="mb-6 leading-relaxed text-lg">
                  Vishome is a professional commercial carpet manufacturer specializing in carpet research, development, production, and international trade. The company has built an experienced export team to serve global flooring distributors, contractors, hotels, offices, and commercial project clients.
                </p>
                <p className="mb-8 leading-relaxed">
                  Our factory covers an area of 50,000 square meters and employs more than 900 skilled workers, supporting stable production capacity and reliable order fulfillment for bulk commercial carpet projects.
                </p>
                <div className="grid grid-cols-2 gap-8 border-t border-border pt-8">
                  <div>
                    <h4 className="text-3xl font-black text-primary mb-1">50,000㎡</h4>
                    <p className="text-[10px] font-bold text-muted uppercase tracking-widest">Factory Area</p>
                  </div>
                  <div>
                    <h4 className="text-3xl font-black text-primary mb-1">900+</h4>
                    <p className="text-[10px] font-bold text-muted uppercase tracking-widest">Skilled Employees</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-4 border-2 border-primary/10 translate-x-4 translate-y-4"></div>
              <ProductImage
                src="/images/category-broadloom.webp"
                alt="Vishome Headquarters and Showroom"
                className="relative z-10 shadow-2xl rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="section-padding bg-surface border-y border-border">
        <div className="container-fox">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 uppercase">Advanced Production & QC</h2>
            <div className="w-12 h-1 bg-accent mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-12 border border-border shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-6 uppercase tracking-widest flex items-center gap-4">
                <span className="w-1.5 h-8 bg-accent"></span> Production Range
              </h3>
              <p className="text-muted leading-relaxed mb-8">
                With advanced production facilities and a mature quality control system, we are capable of supplying:
              </p>
              <ul className="space-y-4">
                {[
                  "Commercial Carpet Tiles (Standard 50x50cm)",
                  "Wall-to-Wall Carpet Rolls (4m width)",
                  "Luxury Hotel & Hospitality Carpet",
                  "Office and Corporate Flooring",
                  "Event & Exhibition Carpets",
                  "Bespoke Custom Carpet Solutions"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-bold text-primary uppercase tracking-wide">
                    <span className="text-accent">→</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-12 border border-border shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-6 uppercase tracking-widest flex items-center gap-4">
                <span className="w-1.5 h-8 bg-accent"></span> Global Service Support
              </h3>
              <p className="text-muted leading-relaxed mb-8">
                We have a professional design and technical support team to provide custom carpet design, material selection, and project-based solutions.
              </p>
              <div className="space-y-6">
                <div className="p-4 bg-surface border-l-4 border-primary">
                  <p className="text-xs font-bold text-primary uppercase mb-1">Export Capacity</p>
                  <p className="text-sm text-muted">45+ Countries and Regions served worldwide.</p>
                </div>
                <div className="p-4 bg-surface border-l-4 border-primary">
                  <p className="text-xs font-bold text-primary uppercase mb-1">Target Markets</p>
                  <p className="text-sm text-muted">North America, Europe, Australia, Middle East, Asia, and Africa.</p>
                </div>
                <div className="p-4 bg-surface border-l-4 border-primary">
                  <p className="text-xs font-bold text-primary uppercase mb-1">B2B Support</p>
                  <p className="text-sm text-muted">Dedicated support for Distributors, Contractors, and Interior Designers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Compliance */}
      <section className="py-20 bg-white">
        <div className="container-fox">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 uppercase">Certifications & Compliance</h2>
            <div className="w-12 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-muted max-w-2xl mx-auto text-xs font-bold uppercase tracking-[0.2em]">
              Our products meet international quality and safety standards for commercial flooring projects worldwide
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {certifications.map((cert) => (
              <div key={cert.name} className="text-center p-10 border border-border bg-surface rounded-sm grayscale hover:grayscale-0 transition-all group hover:border-accent hover:shadow-md">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent transition-colors">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <p className="text-sm font-black text-primary uppercase mb-2">{cert.name}</p>
                <p className="text-[10px] font-bold text-muted uppercase tracking-widest leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
            {/* Our Team & Expertise */}
      <section className="section-padding bg-[#F7F8FA] border-y border-border">
        <div className="container-fox">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 uppercase">Our Team & Expertise</h2>
            <div className="w-12 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-muted max-w-2xl mx-auto text-sm font-bold uppercase tracking-[0.2em] leading-relaxed">
              A dedicated team of professionals committed to delivering quality commercial carpet solutions for global projects
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all group">
              <div className="aspect-[4/3] bg-primary/5 overflow-hidden">
                <ProductImage src="/images/about/production-workshop.webp" alt="Production team at work" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <h4 className="text-[11px] font-black text-primary uppercase tracking-[0.2em] mb-3">Production & QC Team</h4>
                <p className="text-xs text-muted leading-relaxed">900+ skilled workers and experienced quality inspectors ensuring every batch meets international standards.</p>
              </div>
            </div>
            <div className="bg-white border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all group">
              <div className="aspect-[4/3] bg-primary/5 overflow-hidden">
                <ProductImage src="/images/about/custom-design-support.webp" alt="Design and R&D team" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <h4 className="text-[11px] font-black text-primary uppercase tracking-[0.2em] mb-3">R&D & Design Team</h4>
                <p className="text-xs text-muted leading-relaxed">Professional designers and material engineers developing custom carpet solutions for hotel, office, and commercial projects.</p>
              </div>
            </div>
            <div className="bg-white border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all group">
              <div className="aspect-[4/3] bg-primary/5 overflow-hidden">
                <ProductImage src="/images/about/global-export-container-loading.webp" alt="Export and sales team" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <h4 className="text-[11px] font-black text-primary uppercase tracking-[0.2em] mb-3">Export & Sales Team</h4>
                <p className="text-xs text-muted leading-relaxed">Experienced international trade professionals providing end-to-end support for B2B clients in 45+ countries.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

<section className="py-24 bg-primary text-white text-center">
        <div className="container-fox">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 uppercase tracking-widest">Connect with our Export Team</h2>
          <p className="text-gray-400 mb-12 max-w-xl mx-auto">Get technical documentation, samples, and project-based pricing within 24 hours.</p>
          <Link href="/contact" className="btn-fox-orange inline-block px-16 py-6 text-sm">
            Send Inquiry to Factory
          </Link>
        </div>
      </section>
    </div>
  );
}

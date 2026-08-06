import { Metadata } from "next";
import Link from "next/link";
import ProductImage from "@/components/ProductImage";
import FactoryCtaBackground from "@/components/FactoryCtaBackground";

export const metadata: Metadata = {
  title: "About Vishome Carpet Manufacturer | VISHOME",
  description: "Vishome Global Commercial Carpet Co., Ltd. is a professional commercial carpet manufacturer with a 50,000-square-meter factory, 900+ employees, and exports to over 45 countries and regions. We supply commercial carpet tiles, hotel carpets, wall-to-wall carpet rolls, office carpet tiles, event carpets, and custom carpet solutions for global B2B projects.",
  alternates: { canonical: "https://www.vishomecarpet.com/about-us" },
};

export default function AboutUsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Hero Banner */}
      <section className="relative flex min-h-[560px] items-center overflow-hidden md:h-[760px]">
        <div className="absolute inset-0 z-0">
          <ProductImage
            src="/images/about/about-us-hero-banner.webp"
            alt="Commercial carpet manufacturing factory interior"
            className="w-full h-full object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#0B2E4A]/45"></div>
        </div>
        <div className="container-fox relative z-10 text-white">
          <div className="max-w-[760px]">
            <p className="text-accent font-black tracking-[0.4em] text-[10px] uppercase mb-4">About Vishome Global</p>
            <h1 className="mb-6 text-4xl font-black uppercase leading-tight tracking-[0.06em] md:mb-8 md:text-6xl md:tracking-wider">
              About Vishome Global Commercial Carpet Co., Ltd.
            </h1>
            <p className="mb-8 text-base font-medium leading-relaxed text-gray-200 md:mb-12 md:text-xl">
              A professional commercial carpet manufacturer supplying carpet tiles, hotel carpets, wall-to-wall carpet rolls, office carpets, event carpets, and custom carpet solutions for global B2B projects.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap md:gap-6">
              <Link href="/contact" className="btn-fox-orange !px-12 !py-5">
                Request a Quote
              </Link>
              <Link href="/contact" className="btn-fox-outline !border-white !text-white hover:!bg-white hover:!text-primary !px-12 !py-5">
                Contact Our Factory
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Company Overview */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container-fox">
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-24">
            <div className="lg:w-1/2">
              <h2 className="text-sm font-black text-muted uppercase tracking-[0.4em] mb-4">Company Overview</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-8 uppercase leading-tight">
                A B2B Commercial Carpet Manufacturer for Global Projects
              </h3>
              <div className="text-muted space-y-6 text-lg leading-relaxed">
                <p>
                  Vishome Global Commercial Carpet Co., Ltd. is a professional commercial carpet manufacturer specializing in carpet research, development, production, and international trade. We provide reliable carpet solutions for flooring distributors, contractors, hotels, offices, commercial buildings, event companies, and project-based buyers worldwide.
                </p>
                <p>
                  Our product range includes commercial carpet tiles, hotel carpets, wall-to-wall carpet rolls, office carpet tiles, event and exhibition carpets, stair runners, corridor carpets, and customized rugs. With strong production capability and project-based customization support, we help global customers complete commercial flooring projects with stable quality, flexible specifications, and professional export service.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <ProductImage
                src="/images/about/factory-exterior.webp"
                alt="Modern commercial carpet factory exterior"
                className="rounded-[24px] shadow-xl w-full aspect-[4/3] object-cover border border-border"
              />
            </div>
          </div>
        </div>
      </section>

            {/* 3. Brand Story & Timeline */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container-fox">
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-24">
            <div className="lg:w-1/2">
              <h2 className="text-sm font-black text-muted uppercase tracking-[0.4em] mb-4">Our Story</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-8 uppercase leading-tight">
                From a Local Factory to a Global Carpet Manufacturer
              </h3>
              <div className="space-y-6">
                <div className="relative pl-12 pb-8 border-l-2 border-accent/30">
                  <span className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                    <span className="text-white text-[8px] font-black">2008</span>
                  </span>
                  <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-1">Foundation</h4>
                  <p className="text-sm text-muted leading-relaxed">Vishome was established in Tianjin, China, starting with a small production workshop focused on commercial carpet manufacturing.</p>
                </div>
                <div className="relative pl-12 pb-8 border-l-2 border-accent/30">
                  <span className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                    <span className="text-white text-[8px] font-black">2012</span>
                  </span>
                  <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-1">First Export</h4>
                  <p className="text-sm text-muted leading-relaxed">Exported the first container of commercial carpet tiles to Southeast Asia, marking the beginning of our international trade operations.</p>
                </div>
                <div className="relative pl-12 pb-8 border-l-2 border-accent/30">
                  <span className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                    <span className="text-white text-[8px] font-black">2016</span>
                  </span>
                  <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-1">Factory Expansion</h4>
                  <p className="text-sm text-muted leading-relaxed">Expanded to a 50,000㎡ factory facility, upgrading production lines to support bulk commercial carpet orders.</p>
                </div>
                <div className="relative pl-12 border-l-2 border-accent">
                  <span className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                    <span className="text-white text-[8px] font-black">Now</span>
                  </span>
                  <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-1">Global Reach</h4>
                  <p className="text-sm text-muted leading-relaxed">900+ employees, serving B2B customers in 45+ countries, with priority support for the Philippines, Malaysia, Bulgaria, Australia, New Zealand, South Africa, and the UAE.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <ProductImage
                src="/images/about/our-story-export-logistics.webp"
                alt="Export logistics loading of commercial carpets at Vishome factory"
                className="rounded-[24px] shadow-xl w-full aspect-[4/3] object-cover border border-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Key Facts */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="container-fox">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary uppercase tracking-tight">Our Manufacturing Strength in Numbers</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-8 lg:grid-cols-3">
            {[
              { num: "50,000㎡", label: "Factory Area" },
              { num: "900+", label: "Employees" },
              { num: "45+", label: "Countries Exported" },
              { num: "Commercial Tiles", label: "Main Product" },
              { num: "OEM / ODM", label: "Custom Support" },
              { num: "B2B Projects", label: "For Distributors" },
            ].map((fact, idx) => (
              <div key={idx} className="flex flex-col items-center rounded-xl border border-border bg-white p-5 text-center shadow-sm transition-all group hover:border-primary md:p-10">
                <p className="mb-3 text-2xl font-black text-primary transition-colors group-hover:text-accent md:mb-4 md:text-5xl">{fact.num}</p>
                <p className="text-xs font-bold text-muted uppercase tracking-[0.2em]">{fact.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. What We Manufacture */}
      <section className="section-padding bg-[#102A43] text-white">
        <div className="container-fox">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 uppercase">What We Manufacture</h2>
            <p className="text-gray-400 max-w-2xl mx-auto uppercase text-xs font-bold tracking-widest leading-relaxed">
              We focus on commercial and project-based carpet manufacturing for international B2B customers.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { t: "Commercial Carpet Tiles", d: "Modular carpet tiles for offices, hotels, commercial buildings, and public spaces." },
              { t: "Office Carpet Tiles", d: "Durable and flexible flooring solutions for office renovation and workplace interiors." },
              { t: "Hotel & Hospitality Carpet", d: "Custom hotel carpet solutions for rooms, corridors, lobbies, and hospitality projects." },
              { t: "Wall-to-Wall Carpet Rolls", d: "Commercial carpet rolls for large-area installation and project-based flooring supply." },
              { t: "Event & Exhibition Carpet", d: "Temporary and reusable carpet solutions for events, exhibitions, weddings, and stages." },
              { t: "Custom Area Rugs", d: "Custom size, color, material, and pattern rugs for project and interior design needs." },
              { t: "Stair Runner & Corridor Carpet", d: "Practical carpet solutions for hotel corridors, staircases, and commercial passageways." },
            ].map((prod, idx) => (
              <div key={idx} className="p-8 border border-white/10 rounded-lg hover:bg-white/10 transition-all flex flex-col h-full bg-white/5 backdrop-blur-sm">
                <h4 className="font-bold uppercase text-sm mb-4 tracking-widest leading-tight text-accent">{prod.t}</h4>
                <p className="text-xs text-gray-300 leading-relaxed">{prod.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Factory & Production Strength */}
      <section className="section-padding bg-[#F7F8FA] border-y border-border">
        <div className="container-fox">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-12 uppercase text-center tracking-tight">Factory & Production Strength</h2>
          <div className="grid items-start gap-10 mb-12 lg:grid-cols-2 lg:gap-16 md:mb-16">
            <div className="space-y-8">
              <ProductImage src="/images/about/production-workshop.webp" alt="Commercial carpet production workshop" className="rounded-xl shadow-lg w-full aspect-video object-cover" />
              <div className="prose prose-slate max-w-none text-muted">
                <p className="text-lg leading-relaxed font-medium">
                  Our factory covers an area of 50,000 square meters and employs more than 900 skilled workers. With organized production workshops, experienced technicians, and stable manufacturing processes, we support bulk orders, project-based production, and long-term supply for overseas distributors and contractors.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {[
                  "Bulk Order Production", "Stable Manufacturing Process", "Organized Warehouse",
                  "Export Packaging Support", "Long-Term Supply", "Project-Based Production"
                ].map((point) => (
                  <div key={point} className="p-6 bg-white border border-border shadow-sm group hover:border-primary transition-all">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">{point}</p>
                  </div>
                ))}
              </div>
              <ProductImage src="/images/about/carpet-tile-inventory-warehouse.webp" alt="Carpet tile inventory warehouse" className="rounded-xl shadow-lg w-full aspect-video object-cover" />
            </div>
          </div>
        </div>
      </section>

            {/* 7. Why Choose Vishome */}
      <section className="section-padding bg-[#102A43] text-white">
        <div className="container-fox">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 uppercase">Why Choose Vishome</h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-xs font-bold uppercase tracking-[0.3em] leading-relaxed">
              What sets us apart as a trusted commercial carpet manufacturer for global B2B partners
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { t: "Factory Direct Pricing", d: "No middlemen. You deal directly with the manufacturer, getting competitive pricing for bulk commercial carpet orders.", i: "01" },
              { t: "Custom Project Support", d: "Custom sizes, colors, patterns, logos, materials, and backing options for hotel, office, and commercial projects.", i: "02" },
              { t: "Stable Production Capacity", d: "50,000㎡ factory with 900+ skilled workers ensures reliable production for even the largest commercial orders.", i: "03" },
              { t: "Rigorous Quality Control", d: "Multi-stage inspection from raw material to finished product. ASTM E648, CRI Green Label, and CE certified.", i: "04" },
              { t: "Professional Export Service", d: "Experienced international trade team handling documentation, packaging, shipping, and customs clearance.", i: "05" },
              { t: "Long-Term Partnership", d: "We build lasting relationships with distributors and contractors through consistent quality and reliable service.", i: "06" },
            ].map((item, idx) => (
              <div key={idx} className="relative p-8 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all group">
                <span className="text-5xl font-black text-accent/20 absolute top-4 right-6 select-none group-hover:text-accent/30 transition-colors">{item.i}</span>
                <h4 className="font-bold uppercase text-xs mb-4 tracking-widest text-accent relative z-10">{item.t}</h4>
                <p className="text-xs text-gray-300 leading-relaxed relative z-10">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: Custom Project Support */}
      <section className="section-padding bg-white">
        <div className="container-fox">
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-20">
            <div className="lg:w-1/2">
              <ProductImage src="/images/about/custom-design-support.webp" alt="Custom carpet design and project support" className="rounded-2xl shadow-2xl w-full aspect-[4/3] object-cover" />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 uppercase tracking-tight">Custom Project Support</h2>
              <p className="text-muted text-lg mb-10 leading-relaxed font-medium">
                We support custom carpet solutions for hotels, offices, commercial spaces, events, exhibitions, corridors, staircases, and interior design projects.
              </p>
              <div className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-10 md:mb-12">
                {[
                  "Custom Size", "Custom Color", "Custom Pattern", "Custom Logo",
                  "Material Selection", "Backing Options", "Sample Development", "Bulk Production"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4 border-b border-border pb-4">
                    <span className="w-1.5 h-6 bg-accent"></span>
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-fox-orange !px-10">Send Your Requirements</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: Global Export Markets */}
      <section className="section-padding bg-[#F5F7FA] border-y border-border overflow-hidden">
        <div className="container-fox relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8 uppercase tracking-tight">Global Export Markets</h2>
              <p className="text-muted text-lg mb-10 leading-relaxed font-medium">
                Our carpets have been exported to more than 45 countries and regions. Current priority markets include Southeast Asia, Europe, Oceania, Southern Africa, and the Middle East.
              </p>
              <div className="p-6 bg-white border border-border rounded-lg shadow-sm">
                <p className="text-sm text-muted italic leading-relaxed text-center uppercase tracking-widest font-bold">
                  Philippines, Malaysia, Bulgaria, Australia, New Zealand, South Africa, UAE
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <ProductImage src="/images/about/global-export-container-loading.webp" alt="Carpet factory export loading and logistics" className="rounded-xl shadow-xl w-full aspect-[4/3] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 10. Quality Control */}
      <section className="section-padding bg-white">
        <div className="container-fox">
          <div className="flex flex-col lg:flex-row items-center gap-20 mb-20">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8 uppercase tracking-tight">Quality Control</h2>
              <p className="text-muted text-lg leading-relaxed mb-6 font-medium">
                Quality control is a key part of our manufacturing process. From material selection and production inspection to packaging and shipment, we focus on stable performance and project-ready delivery.
              </p>
            </div>
            <div className="lg:w-1/2">
              <ProductImage src="/images/about/quality-control-inspection.webp" alt="Commercial carpet quality control inspection" className="rounded-xl shadow-2xl w-full aspect-[4/3] object-cover" />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {[
              "Material Inspection", "Production Monitoring", "Size & Color Checking",
              "Backing Quality Control", "Packaging Inspection", "Export Shipment Support"
            ].map((qc) => (
              <div key={qc} className="p-8 bg-surface border border-border rounded-lg flex items-center gap-6 group hover:border-primary transition-all">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shrink-0">
                  <span className="text-white text-[10px] font-bold italic">QC</span>
                </div>
                <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-primary">{qc}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Who We Serve */}
      <section className="section-padding bg-[#F7F8FA] border-y border-border">
        <div className="container-fox">
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-24">
            <div className="lg:w-2/5">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 uppercase tracking-tight">Who We Serve</h2>
              <p className="text-muted text-lg leading-relaxed mb-12">
                We work with global B2B customers who need reliable commercial carpet supply, stable production capacity, and professional export support.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {[
                  "Flooring Distributors", "Commercial Contractors", "Hotel & Hospitality Projects",
                  "Office Renovation Projects", "Interior Design Companies", "Event & Exhibition Companies",
                  "Importers & Wholesalers", "Commercial Building Projects"
                ].map((group) => (
                  <div key={group} className="flex items-center gap-4 p-4 bg-white border border-border rounded shadow-sm hover:shadow-md transition-all">
                    <span className="w-1 h-1 bg-accent"></span>
                    <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">{group}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-3/5">
              <ProductImage src="/images/about/commercial-project-application.webp" alt="Commercial carpet tiles installed in office project" className="rounded-2xl shadow-xl border-8 border-white w-full aspect-[16/10] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 12. Final CTA */}
      <FactoryCtaBackground className="py-16 text-center md:py-24">
        <div className="container-fox relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase tracking-widest leading-tight">
            Looking for a Reliable <br />Commercial Carpet Manufacturer?
          </h2>
          <p className="text-gray-300 mb-16 max-w-3xl mx-auto text-lg md:text-xl font-light leading-relaxed">
            Send us your project requirements, including carpet type, size, material, color, quantity, and destination market. Our team will provide a suitable carpet solution and quotation for your project.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap md:gap-8">
            <Link href="/contact" className="rounded-sm bg-white px-8 py-5 text-xs font-black uppercase tracking-[0.16em] text-primary shadow-2xl transition-all hover:bg-gray-100 md:px-16 md:py-6 md:tracking-[0.4em]">
              Request a Quote
            </Link>
            <Link href="/contact" className="rounded-sm border-2 border-white/40 px-8 py-5 text-xs font-black uppercase tracking-[0.16em] text-white transition-all hover:bg-white/10 md:px-16 md:py-6 md:tracking-[0.4em]">
              Send Your Requirements
            </Link>
          </div>
        </div>
      </FactoryCtaBackground>
    </div>
  );
}

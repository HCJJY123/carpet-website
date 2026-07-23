import ProductImage from "@/components/ProductImage";
import Link from "next/link";

export const metadata = {
  title: "Carpet Manufacturing Factory | Vishome Global Commercial Carpet",
  description: "Explore the 50,000 sqm Vishome manufacturing facility. Premium production lines for commercial carpet tiles and hotel broadloom with 900+ skilled staff.",
  alternates: { canonical: "https://www.vishomecarpet.com/factory" },
};

export default function FactoryPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Factory Hero */}
      <section className="bg-primary-light py-24 text-white">
        <div className="container-fox text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 uppercase tracking-[0.2em]">Our Manufacturing Hub</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg opacity-90 uppercase tracking-widest font-bold">
            50,000㎡ Production Facility · Tianjin, China
          </p>
        </div>
      </section>

      {/* Production Infrastructure */}
      <section className="section-padding">
        <div className="container-fox">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square">
              <ProductImage src="/images/factory-showroom.webp" alt="Vishome high-tech production line" className="w-full h-full object-cover rounded shadow-2xl" priority sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className="absolute -bottom-8 -right-8 bg-primary p-10 text-white hidden md:block">
                <p className="text-4xl font-black mb-1">900+</p>
                <p className="text-[10px] font-bold uppercase tracking-widest">Skilled Craftsmen</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8 uppercase leading-tight">Advanced Production Facilities</h2>
              <p className="text-muted leading-relaxed mb-6 text-lg">
                Equipped with the latest tufting machines and jacquard looms, our Tianjin facility is capable of fulfilling complex commercial requirements with high precision. We integrate R&D and production under one roof to maintain stable quality control.
              </p>
              <div className="space-y-6">
                {[
                  { title: "High-Speed Tufting", desc: "Automated lines for consistent modular tile production." },
                  { title: "Precision Printing", desc: "State-of-the-art technology for intricate custom hotel patterns." },
                  { title: "Durable Backing Systems", desc: "Bitumen, PVC, and Eco-cushion application workshops." }
                ].map((item) => (
                  <div key={item.title} className="border-b border-border pb-6">
                    <h4 className="font-bold text-primary uppercase text-sm mb-2 tracking-widest">{item.title}</h4>
                    <p className="text-sm text-muted">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Export Capacity Matrix */}
      <section className="section-padding bg-surface border-y border-border">
        <div className="container-fox">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 uppercase">Global Export Capability</h2>
            <div className="w-16 h-1.5 bg-primary mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "45+ COUNTRIES", desc: "Priority support for the Philippines, Malaysia, Bulgaria, Australia, New Zealand, South Africa, and the UAE.", icon: "🌍" },
              { title: "EXPORT PACKAGING", desc: "Heavy-duty protection ensuring project safety during long-haul sea freight.", icon: "📦" },
              { title: "DDP SUPPORT", desc: "Dedicated logistics team for door-to-door delivery and customs support.", icon: "🚢" }
            ].map((cap) => (
              <div key={cap.title} className="bg-white p-10 text-center border border-border group hover:border-primary transition-all">
                <div className="text-5xl mb-6">{cap.icon}</div>
                <h3 className="font-black text-primary uppercase text-sm mb-4 tracking-widest">{cap.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QC & Testing */}
      <section className="section-padding bg-white">
        <div className="container-fox">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 uppercase">Quality Control</h2>
              <p className="text-muted leading-relaxed mb-8">
                Every batch undergoes rigorous technical testing before dispatch to ensure international compliance.
              </p>
              <Link href="/contact" className="btn-fox-outline inline-block">Request Test Reports</Link>
            </div>
            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-8">
              {[
                "ASTM E648 Fire Rating Test",
                "Color Fastness & Batch Consistency",
                "Indoor Air Quality (VOC) Testing",
                "Dimensional Stability for Tiles",
                "Tuft Bind & Wear Performance",
                "Stain Resistance Verification"
              ].map((test) => (
                <div key={test} className="flex items-center gap-4 p-5 bg-surface border border-border">
                  <span className="w-3 h-3 bg-primary"></span>
                  <span className="text-xs font-bold text-primary uppercase tracking-widest">{test}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Factory CTA */}
      <section className="py-20 bg-primary">
        <div className="container-fox flex flex-col md:flex-row items-center justify-between gap-8 text-white">
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-widest mb-4">Planning a Bulk Order?</h2>
            <p className="text-gray-400">Get a professional production schedule and factory pricing for your project.</p>
          </div>
          <Link href="/contact" className="bg-white text-primary font-bold px-12 py-5 uppercase tracking-[0.3em] text-xs hover:bg-gray-100 transition-all shadow-xl">
            Consult With Factory
          </Link>
        </div>
      </section>
    </div>
  );
}

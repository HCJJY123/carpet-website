import { Metadata } from "next";
import Link from "next/link";
import ProductImage from "@/components/ProductImage";
import { caseStudies } from "@/lib/data";

export const metadata: Metadata = {
  title: "Global Commercial Carpet Projects | Case Studies | VISHOME",
  description: "Excellence in hotel and office flooring across 45+ countries."
};

export default function ProjectsPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-[#102A43] py-24 text-center">
        <div className="container-fox">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-widest leading-tight">Project Case Studies</h1>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-xs uppercase font-bold tracking-widest">Proven Sourcing Solutions for Global B2B Projects</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fox">
          <div className="grid lg:grid-cols-2 gap-16">
            {caseStudies.map((cs) => (
              <Link key={cs.id} href={`/projects/${cs.id}`} className="group block border-b border-border pb-16">
                <div className="aspect-[16/10] overflow-hidden rounded-sm mb-10 shadow-xl relative">
                  <ProductImage src={cs.image} alt={cs.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute top-6 left-6 bg-primary px-4 py-2 text-[10px] font-black text-white uppercase tracking-widest">
                    {cs.category === "carpet-tiles" ? "Modular" : "Hospitality"}
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 uppercase tracking-tight group-hover:text-accent transition-colors">{cs.title}</h2>
                <p className="text-muted text-lg leading-relaxed mb-10 h-24 overflow-hidden">{cs.description}</p>
                <div className="flex items-center gap-4 text-xs font-black text-primary uppercase tracking-[0.2em]">
                   Request Solution Details <span className="text-accent">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

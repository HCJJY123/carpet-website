import { Metadata } from "next";
import Link from "next/link";
import ProductImage from "@/components/ProductImage";
import { caseStudies } from "@/lib/data";

export const metadata: Metadata = {
  title: "Global Commercial Carpet Projects | Project Case Studies | VISHOME",
  description: "Explore our project portfolio across 45+ countries. Supplying high-performance flooring to 500+ global commercial projects.",
};

export default function ProjectsPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-[#102A43] py-24 text-center">
        <div className="container-fox">
          <span className="text-accent font-black tracking-[0.4em] text-[10px] uppercase mb-4 block">Proven Excellence</span>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-widest leading-tight">Project Case Studies</h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fox">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="group">
                <Link href={`/projects/${cs.id}`} className="block overflow-hidden rounded-sm mb-6 shadow-xl relative aspect-[4/3]">
                  <ProductImage src={cs.image} alt={cs.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                </Link>
                
                <Link href={`/projects/${cs.id}`} className="block">
                  <h3 className="font-bold text-primary text-sm uppercase leading-tight mb-4 h-12 overflow-hidden group-hover:text-accent transition-colors">
                    {cs.title}
                  </h3>
                </Link>

                <div className="flex flex-col gap-6 pt-4 border-t border-border">
                  <Link 
                    href={`/projects/${cs.id}`} 
                    className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/50 group-hover:text-primary transition-all flex items-center gap-2"
                  >
                    Technical Overview <span className="text-accent">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

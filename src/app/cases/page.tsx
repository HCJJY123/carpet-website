import Link from "next/link";
import { caseStudies } from "@/lib/data";

export default function CasesPage() {
  return (
    <>
      <section className="bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Case Studies</h1>
          <p className="text-muted max-w-2xl">Real projects demonstrating our commitment to quality, service, and on-time delivery.</p>
        </div>
      </section>
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-8">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="group bg-surface rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all">
                <div className="h-48 bg-gradient-to-br from-primary/80 to-primary flex items-center justify-center">
                  <span className="text-white/60 text-lg font-medium">{cs.client}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-accent uppercase bg-accent/10 px-2 py-1 rounded">
                      {cs.category === "carpet-tiles" ? "Carpet Tiles" : "Broadloom"}
                    </span>
                    <span className="text-xs text-muted">{cs.location}</span>
                    <span className="text-xs text-muted">·</span>
                    <span className="text-xs text-muted">{cs.area}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{cs.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{cs.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

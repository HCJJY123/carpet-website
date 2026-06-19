import Link from "next/link";
import { certifications } from "@/lib/data";
import ProductImage from "@/components/ProductImage";

export default function AboutPage() {
  return (
    <>
      <section className="relative bg-primary overflow-hidden min-h-[420px] flex items-end">
        <div className="absolute inset-0">
          <ProductImage src="/images/about-hero.jpg" alt="Carpet showroom with commercial flooring displays" className="h-full w-full" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/55 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 w-full">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">About Us</h1>
          <p className="text-gray-200 max-w-2xl text-lg">A trusted manufacturer and exporter of premium commercial flooring solutions since 2005.</p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Your Trusted Flooring Partner</h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>Founded in 2005, CarpetPro has grown from a small manufacturing workshop into one of China's leading producers of commercial carpet tiles and broadloom carpets.</p>
                <p>With over 50,000 m² of production facilities and a team of 200+ skilled professionals, we serve clients in 40+ countries including hotel chains, commercial real estate developers, and government institutions.</p>
                <p>Our commitment to quality, innovation, and customer service has earned us long-term partnerships with global brands including Hilton, Marriott, IKEA, and WeWork.</p>
              </div>
            </div>
            <div className="relative min-h-[320px] rounded-2xl overflow-hidden border border-border bg-surface">
              <div className="absolute inset-0">
                <ProductImage src="/images/about-factory.jpg" alt="Carpet factory and showroom floor" className="h-full w-full" />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/85 to-transparent p-6 text-white">
                <div className="text-5xl font-bold mb-2">20+</div>
                <div className="text-sm text-white/80">Years of Excellence</div>
                <div className="text-5xl font-bold mt-6 mb-2">40+</div>
                <div className="text-sm text-white/80">Countries Exported To</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">Our Facility</h2>
          <ProductImage src="/images/about-quality-control.jpg" alt="Carpet quality control inspection" className="h-72 md:h-96 rounded-2xl border border-border mb-8" />
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { stat: "50,000 m²", label: "Production Area" },
              { stat: "200+", label: "Skilled Employees" },
              { stat: "8 Lines", label: "Production Lines" },
            ].map((f) => (
              <div key={f.label} className="bg-white rounded-xl p-6 text-center border border-border">
                <div className="text-3xl font-bold text-accent mb-1">{f.stat}</div>
                <div className="text-sm text-muted">{f.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">Certifications</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {certifications.map((cert) => (
              <div key={cert.name} className="bg-surface rounded-xl p-5 border border-border text-center">
                <div className="font-semibold text-primary mb-1">{cert.name}</div>
                <div className="text-xs text-muted">{cert.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-gray-300 max-w-xl mx-auto mb-6">Interested in working with us? We'd love to hear about your project.</p>
          <Link href="/contact" className="inline-block bg-accent text-white font-medium px-8 py-3.5 rounded-lg hover:bg-accent-light transition-colors text-sm">Contact Us</Link>
        </div>
      </section>
    </>
  );
}

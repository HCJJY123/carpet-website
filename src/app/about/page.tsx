import ProductImage from "@/components/ProductImage";
import { certifications } from "@/lib/data";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Page Header - Foxflor Style */}
      <section className="bg-primary-light py-24">
        <div className="container-fox text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-wider">About CarpetPro</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg opacity-90">
            A premier commercial flooring manufacturer committed to innovation, quality, and global excellence since 2005.
          </p>
        </div>
      </section>

      {/* Factory Strength - Foxflor Narrative */}
      <section className="section-padding">
        <div className="container-fox">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <span className="text-accent font-bold tracking-widest text-sm uppercase mb-4 block">Our Heritage</span>
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8 uppercase leading-tight">
                Tianjin Vishome Factory: Where Quality Meets Innovation
              </h2>
              <p className="text-muted leading-relaxed mb-6">
                Based in the industrial hub of Tianjin, our Vishome manufacturing facility spans over 20,000 square meters. With 15+ years of experience in the international market, we have evolved from a traditional workshop into a high-tech carpet production center.
              </p>
              <p className="text-muted leading-relaxed mb-8">
                We don't just sell carpets; we provide comprehensive flooring solutions. Our facility integrates the entire production chain, ensuring strict quality control from raw material sourcing to final packaging.
              </p>
              <div className="grid grid-cols-2 gap-8 border-t border-border pt-8">
                <div>
                  <h4 className="text-4xl font-bold text-accent mb-2">15+</h4>
                  <p className="text-xs font-bold text-primary uppercase tracking-widest">Years Experience</p>
                </div>
                <div>
                  <h4 className="text-4xl font-bold text-accent mb-2">40+</h4>
                  <p className="text-xs font-bold text-primary uppercase tracking-widest">Countries Reached</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/5 rounded-2xl rotate-2"></div>
                <ProductImage
                  src="/images/category-broadloom.jpg"
                  alt="Vishome Factory Overview"
                  className="relative rounded-lg shadow-2xl z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Details - 3D Design, Printing, Sewing */}
      <section className="section-padding bg-surface border-y border-border">
        <div className="container-fox">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 uppercase">Inside Our Facility</h2>
            <div className="w-16 h-1.5 bg-accent mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "3D Design Center",
                desc: "Our in-house design team utilizes advanced 3D modeling to visualize patterns and textures before production begins.",
                image: "/images/blog-design-trends.jpg"
              },
              {
                title: "Advanced Printing",
                desc: "Equipped with state-of-the-art digital and jacquard printing technology for precise color and intricate pattern reproduction.",
                image: "/images/blog-material-comparison.jpg"
              },
              {
                title: "Sewing & Finishing",
                desc: "Expert craftsmanship in our sewing workshop ensures durable backing and perfect edge finishing for every roll and tile.",
                image: "/images/blog-installation-maintenance.jpg"
              }
            ].map((workshop) => (
              <div key={workshop.title} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border">
                <div className="aspect-[16/10] overflow-hidden">
                  <ProductImage src={workshop.image} alt={workshop.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                </div>
                <div className="p-8">
                  <h3 className="font-bold text-xl text-primary mb-4 uppercase tracking-wide">{workshop.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{workshop.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-fox text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 uppercase tracking-wide">Professional B2B Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              "Free Sample Swatches",
              "Pantone Color Matching",
              "On-site Measurement",
              "Installation Guidance",
              "Custom Pattern Design",
              "Logistics Support",
              "Global DDP Delivery",
              "24/7 Technical Help"
            ].map((service) => (
              <div key={service} className="py-5 px-6 border border-border rounded shadow-sm hover:border-accent hover:text-accent transition-all duration-300 font-bold text-xs md:text-sm uppercase tracking-widest bg-white">
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications - Clean Layout */}
      <section className="py-16 bg-surface">
        <div className="container-fox">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
            {certifications.map((cert) => (
              <div key={cert.name} className="text-center group">
                <p className="text-sm font-bold text-primary mb-1 group-hover:text-accent transition-colors">{cert.name}</p>
                <p className="text-[10px] text-muted uppercase tracking-tighter">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary">
        <div className="container-fox text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-8 uppercase tracking-widest">
            Partner With CarpetPro Today
          </h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            Experience the advantage of factory-direct supply and professional flooring expertise.
          </p>
          <Link href="/contact" className="btn-fox-orange inline-block">
            Start Your Inquiry
          </Link>
        </div>
      </section>
    </div>
  );
}

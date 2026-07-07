"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ProductImage from "@/components/ProductImage";
import PageHero from "@/components/PageHero";
import { getWhatsAppBusinessUrl, whatsappBusinessMessages } from "@/lib/whatsapp";
import { trackLeadConversion } from "@/lib/tracking";

export default function ContactPage() {
  const router = useRouter();
  const whatsappUrl = getWhatsAppBusinessUrl(whatsappBusinessMessages.contact);
  const [state, setState] = useState({
    submitting: false,
    submitted: false,
    error: null as string | null
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState({ ...state, submitting: true });

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xlgkpkza", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        trackLeadConversion({
          formName: "contact_project_quote",
          product: String(formData.get("product") || ""),
          quantity: String(formData.get("quantity") || ""),
          country: String(formData.get("country") || ""),
        });
        setState({ submitting: false, submitted: true, error: null });
        form.reset();
        
        // 延迟跳转，确保客户看到成功提示
        setTimeout(() => {
          router.push('/thank-you');
        }, 1500);
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      setState({ submitting: false, submitted: false, error: "Oops! There was a problem with the submission. Please try again." });
    }
  }

  return (
    <div className="bg-white">
      <PageHero
        title="Start Your Procurement"
        eyebrow="Factory Direct Project Support"
        description="Request pricing, technical certificates, or professional sample matching for your commercial flooring project."
        image="/images/contact-hero.jpg"
        imageAlt="Commercial carpet procurement consultation background"
        objectPosition="center 42%"
      />

      <section className="section-padding">
        <div className="container-fox">
          <div className="grid gap-10 lg:grid-cols-3 lg:gap-16">
            {/* Form Column */}
            <div className="lg:col-span-2">
              {state.submitted ? (
                <div className="animate-in rounded-2xl border border-success/20 bg-success/5 p-8 text-center duration-500 zoom-in md:p-12">
                  <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">✓</div>
                  <h3 className="text-2xl font-bold text-primary mb-4 uppercase tracking-widest">Inquiry Received</h3>
                  <p className="text-muted text-lg font-medium">Thank you for choosing Vishome. Our technical sales team will review your requirements and provide a preliminary quote within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-border bg-surface p-5 shadow-sm md:space-y-8 md:p-12">
                  {state.error && <p className="text-red-600 font-bold text-center text-sm">{state.error}</p>}

                  <div className="grid gap-5 md:grid-cols-2 md:gap-8">
                    <div>
                      <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">Name *</label>
                      <input name="name" type="text" required className="w-full px-5 py-4 rounded-sm bg-white border border-border focus:border-primary focus:ring-1 focus:ring-primary/10 focus:outline-none transition-all" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">Email *</label>
                      <input name="email" type="email" required className="w-full px-5 py-4 rounded-sm bg-white border border-border focus:border-primary focus:ring-1 focus:ring-primary/10 focus:outline-none transition-all" placeholder="john@company.com" />
                    </div>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2 md:gap-8">
                    <div>
                      <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">WhatsApp</label>
                      <input name="whatsapp" type="text" className="w-full px-5 py-4 rounded-sm bg-white border border-border focus:border-primary focus:ring-1 focus:ring-primary/10 focus:outline-none transition-all" placeholder="+1 000 000 0000" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">Country / Region *</label>
                      <input name="country" type="text" required className="w-full px-5 py-4 rounded-sm bg-white border border-border focus:border-primary focus:ring-1 focus:ring-primary/10 focus:outline-none transition-all" placeholder="United States, UK, etc." />
                    </div>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2 md:gap-8">
                    <div>
                      <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">Product *</label>
                      <input name="product" type="text" required className="w-full px-5 py-4 rounded-sm bg-white border border-border focus:border-primary focus:outline-none transition-all" placeholder="Carpet tiles, hotel carpet, sisal carpet..." />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">Quantity</label>
                      <input name="quantity" type="text" className="w-full px-5 py-4 rounded-sm bg-white border border-border focus:border-primary focus:outline-none transition-all" placeholder="e.g. 500 SQM" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3">Message *</label>
                    <textarea name="message" rows={6} required className="w-full px-5 py-4 rounded-sm bg-white border border-border focus:border-primary focus:outline-none transition-all resize-none" placeholder="Tell us your project area, delivery country, timeline, design needs, or sample request..." />
                  </div>

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="btn-fox-orange w-full py-5 text-sm tracking-[0.16em] hover:shadow-2xl disabled:cursor-not-allowed disabled:opacity-50 md:py-6 md:text-base md:tracking-[0.4em]"
                  >
                    {state.submitting ? "SENDING INQUIRY..." : "REQUEST PROJECT QUOTE"}
                  </button>
                </form>
              )}
            </div>

            {/* Info Column */}
            <div className="space-y-8 md:space-y-12">
              <div>
                <h3 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-6">Headquarters</h3>
                <div className="space-y-4 text-muted">
                  <p className="flex items-start gap-4">
                    <span className="text-accent font-bold">A</span>
                    Cuihuangkou Town, Wuqing District, Tianjin 301700, China
                  </p>
                  <p className="flex items-start gap-4">
                    <span className="text-accent font-bold">P</span>
                    +86 152 2288 5400
                  </p>
                  <p className="flex items-start gap-4">
                    <span className="text-accent font-bold">E</span>
                    oilero@outlook.com
                  </p>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl bg-primary p-6 text-white shadow-xl md:p-8">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#25D366]/15" />
                <div className="relative">
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#25D366]/15 px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#25D366] ring-1 ring-[#25D366]/25">
                    <span className="h-2 w-2 rounded-full bg-[#25D366] animate-pulse" />
                    WhatsApp Business Online
                  </div>
                  <h3 className="font-bold text-xl mb-4 uppercase tracking-widest">Fast Project Quote</h3>
                  <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                    Send your area, carpet type, timeline, or floor plan via WhatsApp Business. Our sales team can reply with sample, TDS, and quotation guidance faster than email.
                  </p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-6 inline-flex w-full items-center justify-center gap-3 rounded-sm bg-[#25D366] px-4 py-4 text-[11px] font-black uppercase tracking-[0.12em] text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#1ebe5d] md:px-5 md:text-xs md:tracking-[0.2em]"
                    aria-label="Start WhatsApp Business chat with VISHOME"
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.353-.883-.788-1.48-1.766-1.653-2.063-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.128.571-.075 1.758-.717 2.009-1.412.25-.694.25-1.288.175-1.412-.075-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-2.578l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Chat on WhatsApp Business
                  </a>
                  <div className="border-t border-white/10 pt-5">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/45">Direct Phone / WhatsApp</p>
                    <div className="mt-2 text-2xl font-bold text-accent">+86 152 2288 5400</div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <ProductImage src="/images/samples-box.jpg" alt="Carpet Sample Box" className="rounded-lg shadow-md border border-border" />
                <p className="text-xs text-muted leading-relaxed uppercase tracking-wider font-semibold italic text-center">
                  Professional Sample Boxes shipped globally within 3-5 days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Map Section */}
      <section className="bg-surface border-y border-border">
        <div className="w-full h-[450px] relative grayscale hover:grayscale-0 transition-all duration-700">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12234.331707981507!2d117.38283627043328!3d39.46746244677708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35ed8422a57199c1%3A0xc399066f466b0d9e!2sCuihuangkou%20Town%2C%20Wuqing%20District%2C%20Tianjin!5e0!3m2!1sen!2scn!4v1719412345678!5m2!1sen!2scn" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Vishome Factory Location"
            className="opacity-80 hover:opacity-100 transition-opacity"
          ></iframe>
          <div className="absolute top-8 left-8 bg-primary/90 text-white p-6 shadow-2xl rounded-sm border-l-4 border-accent hidden md:block pointer-events-none">
            <h4 className="text-sm font-black uppercase tracking-[0.3em] mb-2">Manufacturing Hub</h4>
            <p className="text-[10px] text-gray-300 uppercase font-bold">Wuqing District, Tianjin, China</p>
          </div>
        </div>
      </section>
    </div>
  );
}

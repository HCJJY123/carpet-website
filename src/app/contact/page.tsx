import Image from "next/image";
import ProductImage from "@/components/ProductImage";
import PageHero from "@/components/PageHero";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { brandInfo } from "@/lib/data";
import { getWhatsAppBusinessUrl, whatsappBusinessMessages } from "@/lib/whatsapp";

interface ContactPageProps {
  searchParams: Promise<{ product?: string }>;
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { product } = await searchParams;
  const whatsappUrl = getWhatsAppBusinessUrl(whatsappBusinessMessages.contact, {
    placement: "contact_page_quote_card",
    product: product || "Commercial carpet project",
    intent: "contact_project_quote",
    pagePath: "/contact",
  });

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

      <section id="quote-form" className="section-padding scroll-mt-28">
        <div className="container-fox">
          <div className="grid gap-10 lg:grid-cols-3 lg:gap-16">
            {/* Form Column */}
            <div className="lg:col-span-2">
              <LeadCaptureForm
                formName="contact_project_quote"
                productDefault={product || ""}
                submitLabel="REQUEST PROJECT QUOTE"
                introText="Send your project area, carpet type, quantity, country, and target delivery date. We will reply with FOB price, sample options, technical data sheet, and production lead time."
              />
            </div>

            {/* Info Column */}
            <div className="space-y-8 md:space-y-12">
              <div>
                <h3 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-6">Headquarters</h3>
                <div className="space-y-4 text-muted">
                  <p className="flex items-start gap-4">
                    <span className="mt-0.5 h-5 w-5 shrink-0 text-accent">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </span>
                    Cuihuangkou Town, Wuqing District, Tianjin 301700, China
                  </p>
                  <p className="flex items-start gap-4">
                    <span className="mt-0.5 h-5 w-5 shrink-0 text-accent">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.353-.883-.788-1.48-1.766-1.653-2.063-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.128.571-.075 1.758-.717 2.009-1.412.25-.694.25-1.288.175-1.412-.075-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-2.578l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </span>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-whatsapp-placement="contact_page_address_block"
                      data-whatsapp-product={product || "Commercial carpet project"}
                      data-whatsapp-intent="contact_project_quote"
                      className="hover:text-primary transition-colors"
                    >
                      WhatsApp Business: {brandInfo.whatsapp}
                    </a>
                  </p>
                  <p className="flex items-start gap-4">
                    <span className="mt-0.5 h-5 w-5 shrink-0 text-accent">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <path d="m3 7 9 6 9-6" />
                      </svg>
                    </span>
                    <span className="flex flex-col gap-1">
                      <a href={`mailto:${brandInfo.email}`} className="hover:text-primary transition-colors">{brandInfo.email}</a>
                      <a href={`mailto:${brandInfo.backupEmail}`} className="hover:text-primary transition-colors">Backup: {brandInfo.backupEmail}</a>
                    </span>
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
                    Send your project area, carpet type, quantity, country, and target delivery date. Our sales team can reply with FOB price, sample options, technical data sheet, and lead time.
                  </p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-whatsapp-placement="contact_page_quote_card"
                    data-whatsapp-product={product || "Commercial carpet project"}
                    data-whatsapp-intent="contact_project_quote"
                    className="mb-6 inline-flex w-full items-center justify-center gap-3 rounded-sm bg-[#25D366] px-4 py-4 text-[11px] font-black uppercase tracking-[0.12em] text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#1ebe5d] md:px-5 md:text-xs md:tracking-[0.2em]"
                    aria-label="Start WhatsApp Business chat with VISHOME"
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.353-.883-.788-1.48-1.766-1.653-2.063-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.128.571-.075 1.758-.717 2.009-1.412.25-.694.25-1.288.175-1.412-.075-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-2.578l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp Project Support
                  </a>
                  <div className="border-t border-white/10 pt-5">
                    <p className="mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-white/45">WeChat & Form Inquiry</p>
                    <div className="flex items-center gap-4">
                      <Image
                        src="/images/contact/wechat-qr-code.jpg"
                        alt="Scan to add Vishomecarpet on WeChat"
                        width={76}
                        height={76}
                        className="h-[76px] w-[76px] flex-shrink-0 rounded-sm bg-white p-1 shadow-md"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-bold text-accent">Scan to Add on WeChat</p>
                        <p className="mt-1 text-xs leading-relaxed text-white/55">
                          Prefer not to chat now? Use the project form and leave your email or WhatsApp. We will reply with price, samples, MOQ, and lead time.
                        </p>
                      </div>
                    </div>
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

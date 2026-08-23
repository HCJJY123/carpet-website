import Image from "next/image";
import Link from "next/link";
import { brandInfo } from "@/lib/data";
import { getContactBridgeUrl } from "@/lib/whatsapp";

export default function Footer() {
  const footerWhatsAppUrl = getContactBridgeUrl(
    "Hello VISHOME, I would like to share my commercial carpet project details. Please help with price, MOQ, samples, lead time, and technical documents.",
    {
      placement: "footer_support",
      intent: "footer_project_inquiry",
      pagePath: "footer",
    }
  );

  return (
    <footer className="bg-[#102A43] text-white mt-auto">
      <div className="max-w-[1200px] mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-[1fr_1fr_1fr_1.3fr] xl:gap-12">
          {/* Logo & Intro - FIXED VERSION WITH REAL LOGO */}
          <div className="col-span-1 lg:col-span-1">
            <div className="mb-8 flex items-center gap-4">
              <Image
                src="/logo-footer.svg"
                alt="Vishome Logo"
                width={64}
                height={64}
                className="h-16 w-auto"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight leading-none text-white">VISHOME</span>
                <span className="mt-1.5 text-[10px] font-bold uppercase leading-none tracking-[0.16em] text-gray-400">Global Commercial Carpet</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 font-medium">
              Vishome Global Commercial Carpet Co., Ltd. is a B2B commercial carpet manufacturer supplying carpet tiles, hotel carpet, public-area carpet, samples and project quotation support since 2005.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="mb-8 text-sm font-bold uppercase tracking-[0.08em] text-[#627D98]">
              Collections
            </h3>
            <ul className="space-y-4">
              <li><Link href="/products/carpet-tiles" className="text-[15px] font-semibold text-gray-300 transition-colors hover:text-white">Commercial Carpet Tiles</Link></li>
              <li><Link href="/products/wall-to-wall" className="text-[15px] font-semibold text-gray-300 transition-colors hover:text-white">Wall-to-Wall Carpets</Link></li>
              <li><Link href="/products/public-area" className="text-[15px] font-semibold text-gray-300 transition-colors hover:text-white">Public Area Carpets</Link></li>
              <li><Link href="/products/public-area/natural-sisal-carpet" className="text-[15px] font-semibold text-gray-300 transition-colors hover:text-white">Natural Sisal Carpet</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-8 text-sm font-bold uppercase tracking-[0.08em] text-[#627D98]">
              Company
            </h3>
            <ul className="space-y-4">
              <li><Link href="/about-us" className="text-[15px] font-semibold text-gray-300 transition-colors hover:text-white">About Us</Link></li>
              <li><Link href="/commercial-carpet-manufacturer" className="text-[15px] font-semibold text-gray-300 transition-colors hover:text-white">Manufacturer</Link></li>
              <li><Link href="/solutions" className="text-[15px] font-semibold text-gray-300 transition-colors hover:text-white">Solutions</Link></li>
              <li><Link href="/markets" className="text-[15px] font-semibold text-gray-300 transition-colors hover:text-white">Global Markets</Link></li>
              <li><Link href="/solutions/hotel-carpet-manufacturer" className="text-[15px] font-semibold text-gray-300 transition-colors hover:text-white">Hotel Carpet Manufacturer</Link></li>
              <li><Link href="/projects" className="text-[15px] font-semibold text-gray-300 transition-colors hover:text-white">Case Studies</Link></li>
              <li><Link href="/blog" className="text-[15px] font-semibold text-gray-300 transition-colors hover:text-white">B2B Insights</Link></li>
              <li><Link href="/technical-documents" className="text-[15px] font-semibold text-gray-300 transition-colors hover:text-white">Technical Documents</Link></li>
              <li><Link href="/commercial-terms" className="text-[15px] font-semibold text-gray-300 transition-colors hover:text-white">Commercial Terms</Link></li>
              <li><Link href="/faq" className="text-[15px] font-semibold text-gray-300 transition-colors hover:text-white">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="mb-8 text-sm font-bold uppercase tracking-[0.08em] text-[#627D98]">
              Technical Support
            </h3>
            <ul className="space-y-6">
              <li className="flex flex-col gap-2">
                <span className="text-xs font-bold uppercase tracking-[0.08em] text-accent">Email Inquiry</span>
                <a
                  href={`mailto:${brandInfo.email}`}
                  className="inline-flex w-fit max-w-full items-center rounded-md border border-accent/50 bg-white/10 px-4 py-3 text-base font-black text-white shadow-md transition-all hover:-translate-y-0.5 hover:border-accent hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:text-lg"
                  aria-label={`Email the VISHOME sales team at ${brandInfo.email}`}
                >
                  <span className="break-all">{brandInfo.email}</span>
                </a>
              </li>
              <li className="flex flex-col gap-3">
                <span className="text-xs font-bold uppercase tracking-[0.08em] text-accent">Chat & Project Inquiry</span>
                <a
                  href={footerWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-whatsapp-placement="footer_support"
                  data-whatsapp-intent="footer_project_inquiry"
                  className="inline-flex items-center justify-center rounded-sm bg-[#25D366] px-4 py-3 text-[13px] font-bold uppercase tracking-[0.06em] text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#1ebe5d]"
                  aria-label="Send VISHOME your project details on WhatsApp"
                >
                  WhatsApp Project Support
                </a>
                <Link href="/contact" className="text-[13px] font-semibold tracking-[0.04em] text-gray-300 transition-colors hover:text-white">
                  Leave project details →
                </Link>
                <p className="text-xs leading-relaxed text-gray-500">
                  Send country, area, product type, and target delivery date for a faster quotation.
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-xs font-normal tracking-normal text-white/40">
              &copy; {new Date().getFullYear()} Vishome Global Commercial Carpet Co., Ltd.
            </p>
            <p className="mt-2 text-xs font-medium tracking-normal text-white/45">Established 2005</p>
          </div>
          <div className="flex gap-10 opacity-30">
             <span className="text-xs font-semibold uppercase tracking-[0.04em] text-white">Tianjin Factory Direct</span>
             <span className="text-xs font-semibold uppercase tracking-[0.04em] text-white">ASTM E648 Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

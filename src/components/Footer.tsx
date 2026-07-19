import Image from "next/image";
import Link from "next/link";
import { brandInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[#102A43] text-white mt-auto">
      <div className="max-w-[1200px] mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
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
                <span className="text-[8px] font-bold text-gray-400 tracking-[0.3em] uppercase leading-none mt-1.5">Global Commercial Carpet</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 font-medium">
              Vishome Global Commercial Carpet Co. Ltd. is a premier B2B manufacturer specializing in high-performance flooring solutions since 2005.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] mb-8 text-[#627D98]">
              Collections
            </h3>
            <ul className="space-y-4">
              <li><Link href="/products/carpet-tiles" className="text-sm font-bold text-gray-300 hover:text-white transition-colors uppercase tracking-widest">Commercial Carpet Tiles</Link></li>
              <li><Link href="/products/wall-to-wall" className="text-sm font-bold text-gray-300 hover:text-white transition-colors uppercase tracking-widest">Wall-to-Wall Carpets</Link></li>
              <li><Link href="/products/public-area" className="text-sm font-bold text-gray-300 hover:text-white transition-colors uppercase tracking-widest">Public Area Carpets</Link></li>
              <li><Link href="/natural-sisal-carpet" className="text-sm font-bold text-gray-300 hover:text-white transition-colors uppercase tracking-widest">Natural Sisal Carpet</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] mb-8 text-[#627D98]">
              Company
            </h3>
            <ul className="space-y-4">
              <li><Link href="/about-us" className="text-sm font-bold text-gray-300 hover:text-white transition-colors uppercase tracking-widest">About Us</Link></li>
              <li><Link href="/commercial-carpet-manufacturer" className="text-sm font-bold text-gray-300 hover:text-white transition-colors uppercase tracking-widest">Manufacturer</Link></li>
              <li><Link href="/solutions" className="text-sm font-bold text-gray-300 hover:text-white transition-colors uppercase tracking-widest">Solutions</Link></li>
              <li><Link href="/solutions/hotel-carpet-manufacturer" className="text-sm font-bold text-gray-300 hover:text-white transition-colors uppercase tracking-widest">Hotel Carpet Manufacturer</Link></li>
              <li><Link href="/projects" className="text-sm font-bold text-gray-300 hover:text-white transition-colors uppercase tracking-widest">Case Studies</Link></li>
              <li><Link href="/blog" className="text-sm font-bold text-gray-300 hover:text-white transition-colors uppercase tracking-widest">B2B Insights</Link></li>
              <li><Link href="/faq" className="text-sm font-bold text-gray-300 hover:text-white transition-colors uppercase tracking-widest">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] mb-8 text-[#627D98]">
              Technical Support
            </h3>
            <ul className="space-y-6">
              <li className="flex flex-col gap-1">
                <span className="text-[10px] font-black text-accent uppercase tracking-widest">Email Inquiry</span>
                <a href={`mailto:${brandInfo.email}`} className="text-sm font-bold text-gray-200 hover:text-white transition-colors">{brandInfo.email}</a>
                <a href={`mailto:${brandInfo.backupEmail}`} className="text-xs font-semibold text-gray-400 hover:text-white transition-colors">Backup: {brandInfo.backupEmail}</a>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-[10px] font-black text-accent uppercase tracking-widest">B2B Hotline</span>
                <a href="tel:+8615222885400" className="text-sm font-bold text-gray-200 hover:text-white transition-colors">+86 152 2288 5400</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">
            &copy; {new Date().getFullYear()} Vishome Global Commercial Carpet Co. Ltd.
          </p>
          <div className="flex gap-10 opacity-30">
             <span className="text-[10px] font-black text-white uppercase tracking-widest">Tianjin Factory Direct</span>
             <span className="text-[10px] font-black text-white uppercase tracking-widest">ASTM E648 Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

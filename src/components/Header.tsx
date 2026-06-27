"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { getWhatsAppBusinessUrl, whatsappBusinessMessages } from "@/lib/whatsapp";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/projects", label: "Projects" },
  { href: "/about-us", label: "About Us" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "CONTACT US" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const whatsappUrl = getWhatsAppBusinessUrl(whatsappBusinessMessages.header);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border shadow-sm">
      <div className="mx-auto max-w-[1480px] px-4 sm:px-6 xl:px-6">
        <div className="grid h-16 grid-cols-[1fr_auto] items-center md:h-20 xl:h-24 xl:grid-cols-[310px_minmax(620px,1fr)_390px]">
          <Link href="/" className="flex min-w-0 items-center gap-2 xl:-translate-x-8 2xl:-translate-x-12" onClick={() => setMenuOpen(false)}>
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-[#102A43] md:h-10 md:w-10">
              <span className="text-lg font-black italic text-white">V</span>
            </span>
            <div className="flex min-w-0 flex-col">
              <span className="truncate text-lg font-black leading-none tracking-tighter text-[#102A43] md:text-xl">VISHOME</span>
              <span className="mt-1 truncate text-[7px] font-bold uppercase leading-none tracking-[0.24em] text-[#627D98] md:text-[8px] md:tracking-[0.3em]">Global Commercial Carpet</span>
            </div>
          </Link>

          <nav className="hidden -translate-x-8 items-center justify-center xl:flex 2xl:-translate-x-6" aria-label="Primary navigation">
            <div className="flex items-center gap-2 rounded-full border border-border/80 bg-white/85 px-2 py-1.5 shadow-[0_10px_30px_rgba(16,42,67,0.06)] backdrop-blur">
              {navLinks.map((link) => {
                const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`whitespace-nowrap rounded-full px-4 py-2 text-[10.5px] font-bold uppercase tracking-[0.15em] transition-all ${
                      active
                        ? "bg-[#102A43] text-white shadow-sm"
                        : "text-[#102A43]/58 hover:bg-surface hover:text-[#102A43]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </nav>

          <div className="hidden translate-x-4 items-center justify-end gap-5 xl:flex 2xl:translate-x-6">
            <Link href="/contact" className="whitespace-nowrap bg-[#102A43] text-white text-[11px] font-black px-6 py-3 rounded-sm hover:bg-black transition-all uppercase tracking-widest shadow-lg">Get a Quote</Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex whitespace-nowrap items-center gap-2 rounded-sm border border-[#25D366]/35 bg-[#25D366] px-5 py-3 text-[10px] font-black uppercase tracking-[0.18em] text-white shadow-lg shadow-[#25D366]/20 transition-all hover:-translate-y-0.5 hover:bg-[#1ebe5d]"
              aria-label="Contact VISHOME on WhatsApp Business"
            >
              <WhatsAppIcon className="flex h-5 w-5 items-center justify-center rounded-full bg-white p-1 text-[#25D366]" />
              WhatsApp Business
            </a>
          </div>

          <div className="flex items-center justify-end gap-2 xl:hidden">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg"
              aria-label="Contact VISHOME on WhatsApp Business"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="flex h-10 w-10 items-center justify-center rounded-sm border border-border bg-white text-[#102A43] shadow-sm"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label="Toggle mobile navigation"
            >
              <span className="relative h-4 w-5">
                <span className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition-transform ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
                <span className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`absolute bottom-0 left-0 h-0.5 w-5 bg-current transition-transform ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`xl:hidden overflow-hidden border-t border-border bg-white transition-[max-height,opacity] duration-300 ${menuOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav className="container-fox py-4">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg border border-border bg-surface px-4 py-3 text-center text-[11px] font-black uppercase tracking-[0.16em] text-[#102A43]"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="btn-fox-orange text-center">
              Get a Quote
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#25D366] px-5 py-3 text-xs font-black uppercase tracking-[0.16em] text-white shadow-lg"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp Business
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <span className={className}>
      <svg viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.353-.883-.788-1.48-1.766-1.653-2.063-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.128.571-.075 1.758-.717 2.009-1.412.25-.694.25-1.288.175-1.412-.075-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-2.578l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </span>
  );
}

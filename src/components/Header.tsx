"use client";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/projects", label: "Projects" },
  { href: "/about-us", label: "About Us" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border shadow-sm">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-24">
          <Link href="/" className="flex items-center gap-2">
            <span className="w-10 h-10 bg-[#102A43] rounded-sm flex items-center justify-center"><span className="text-white text-lg font-black italic">V</span></span>
            <div className="flex flex-col"><span className="text-xl font-black text-[#102A43] tracking-tighter leading-none">VISHOME</span><span className="text-[8px] font-bold text-[#627D98] tracking-[0.3em] uppercase leading-none mt-1">Global Commercial Carpet</span></div>
          </Link>
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-[11px] font-black text-[#102A43]/60 hover:text-[#102A43] transition-colors uppercase tracking-widest">{link.label}</Link>
            ))}
            <Link href="/contact" className="bg-[#102A43] text-white text-[11px] font-black px-6 py-3 rounded-sm hover:bg-black transition-all uppercase tracking-widest ml-4 shadow-lg">Get a Quote</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

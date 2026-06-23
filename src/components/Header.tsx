"use client";

import Link from "next/link";
import { useState } from "react";
import { brandInfo } from "@/lib/data";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/cases", label: "Projects" },
  { href: "/about-us", label: "About Us" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border shadow-sm">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-24">
          <Link href="/" className="flex items-center gap-2">
            <span className="w-10 h-10 bg-[#102A43] rounded-sm flex items-center justify-center">
              <span className="text-white text-lg font-black italic">V</span>
            </span>
            <div className="flex flex-col">
              <span className="text-xl font-black text-[#102A43] tracking-tighter leading-none">
                VISHOME
              </span>
              <span className="text-[8px] font-bold text-[#627D98] tracking-[0.3em] uppercase leading-none mt-1">
                Global Commercial Carpet
              </span>
            </div>
          </Link>

          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] font-black text-[#102A43]/60 hover:text-[#102A43] transition-colors uppercase tracking-widest"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-[#102A43] text-white text-[11px] font-black px-6 py-3 rounded-sm hover:bg-[#243B53] transition-all uppercase tracking-widest ml-4 shadow-lg"
            >
              Get a Quote
            </Link>
          </nav>

          <button
            className="xl:hidden p-2 text-[#102A43]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="xl:hidden pb-10 border-t border-border animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex flex-col gap-1 pt-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-black text-[#102A43]/70 hover:text-[#102A43] py-3 px-4 rounded hover:bg-surface transition-all uppercase tracking-widest"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="bg-[#102A43] text-white text-sm font-black px-6 py-4 rounded-sm text-center mt-6 hover:bg-[#243B53] transition-all uppercase tracking-[0.2em]"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

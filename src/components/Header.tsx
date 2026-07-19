"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getWhatsAppBusinessUrl, whatsappBusinessMessages } from "@/lib/whatsapp";

type NavChild = {
  href: string;
  label: string;
};

type NavItem = {
  href: string;
  label: string;
  children?: NavChild[];
};

const navLinks: NavItem[] = [
  { href: "/", label: "Home" },
  {
    href: "/products",
    label: "Products",
    children: [
      { href: "/products/carpet-tiles", label: "Commercial Carpet Tiles" },
      { href: "/commercial-carpet-tiles", label: "Office Carpet Tile Projects" },
      { href: "/products/carpet-tiles/luxury-hotel-carpet-tile-50x50cm", label: "50x50 Carpet Tiles" },
      { href: "/products/carpet-tiles/nylon-office-carpet-tile", label: "Nylon Office Carpet Tiles" },
      { href: "/products/carpet-tiles/ecocore-pe-backing-carpet-tiles", label: "EcoCore PE Backing Tiles" },
      { href: "/products/wall-to-wall", label: "Wall-to-Wall Carpets" },
      { href: "/products/wall-to-wall/3d-printed-hotel-carpet", label: "Hotel Broadloom Carpet" },
      { href: "/products/public-area", label: "Public Area Carpets" },
      { href: "/products/public-area/natural-sisal-carpet", label: "Natural Sisal Carpet" },
    ],
  },
  {
    href: "/projects",
    label: "Projects",
    children: [
      { href: "/projects", label: "Project References" },
      { href: "/solutions", label: "Solutions Center" },
      { href: "/solutions/hotel-hospitality", label: "Hotel Flooring Solutions" },
      { href: "/solutions/office-carpet-tiles-supplier", label: "Office Carpet Tiles Supplier" },
      { href: "/solutions/hotel-carpet-manufacturer", label: "Hotel Carpet Manufacturer" },
      { href: "/carpet-tiles-50x50", label: "50x50 Carpet Tile Guide" },
      { href: "/hotel-carpet", label: "Hotel Carpet Applications" },
      { href: "/natural-sisal-carpet", label: "Natural Sisal Applications" },
    ],
  },
  {
    href: "/about-us",
    label: "About Us",
    children: [
      { href: "/about-us", label: "About Vishomecarpet" },
      { href: "/factory", label: "Factory Capability" },
      { href: "/commercial-carpet-manufacturer", label: "Carpet Manufacturer" },
      { href: "/request-sample-box", label: "Request Sample Box" },
      { href: "/contact", label: "Contact Sales Team" },
    ],
  },
  {
    href: "/blog",
    label: "Blog",
    children: [
      { href: "/blog", label: "Blog Center" },
      { href: "/blog/commercial-space-carpet-tiles-maintenance-cost-guide", label: "Carpet Tile Cost Guide" },
      { href: "/blog/axminster-vs-wilton-vs-tufted-hospitality-guide", label: "Hospitality Carpet Guide" },
      { href: "/blog/carpet-tile-specifications-high-traffic-durability-guide", label: "High-Traffic Spec Guide" },
      { href: "/blog/carpet-printing-technology-design-to-installation-guide", label: "Printed Carpet Guide" },
    ],
  },
  { href: "/faq", label: "FAQ" },
  {
    href: "/contact",
    label: "CONTACT US",
    children: [
      { href: "/contact", label: "Get Factory Quote" },
      { href: "/request-sample-box", label: "Request Sample Box" },
      { href: "/faq", label: "MOQ / Lead Time / Samples" },
    ],
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!menuOpen) setOpenSection(null);
  }, [menuOpen]);
  const whatsappUrl = getWhatsAppBusinessUrl(whatsappBusinessMessages.header, {
    placement: "header",
    intent: "project_support",
    pagePath: pathname,
  });
  const isActivePath = (href: string) => (href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`));
  const isActiveNav = (link: NavItem) => isActivePath(link.href) || Boolean(link.children?.some((child) => isActivePath(child.href)));

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

          <nav className="hidden -translate-x-16 items-center justify-center xl:flex 2xl:-translate-x-14" aria-label="Primary navigation">
            <div className="flex items-center gap-1.5 rounded-full border border-border/80 bg-white/85 px-2 py-1.5 shadow-[0_10px_30px_rgba(16,42,67,0.06)] backdrop-blur">
              {navLinks.map((link) => {
                const active = isActiveNav(link);
                const hasChildren = Boolean(link.children?.length);

                return (
                  <div key={link.href} className="group relative">
                    <Link
                      href={link.href}
                      aria-haspopup={hasChildren ? "menu" : undefined}
                      className={`flex items-center whitespace-nowrap rounded-full px-3.5 py-2 text-[10.5px] font-bold uppercase tracking-[0.15em] transition-all ${
                        active
                          ? "bg-[#102A43] text-white shadow-sm"
                          : "text-[#102A43]/58 hover:bg-surface hover:text-[#102A43]"
                      }`}
                    >
                      <span>{link.label}</span>
                      {hasChildren ? (
                        <span
                          className={`ml-2 h-1.5 w-1.5 rotate-45 border-b border-r transition-transform group-hover:rotate-[225deg] ${
                            active ? "border-white/80" : "border-[#102A43]/45"
                          }`}
                          aria-hidden="true"
                        />
                      ) : null}
                    </Link>

                    {hasChildren ? (
                      <div
                        className="invisible absolute left-1/2 top-full z-[70] mt-4 w-[310px] -translate-x-1/2 translate-y-1 bg-black py-3 opacity-0 shadow-[0_22px_55px_rgba(0,0,0,0.28)] transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100"
                        role="menu"
                      >
                        <span className="absolute -top-4 left-0 h-4 w-full" aria-hidden="true" />
                        <span className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 bg-black" aria-hidden="true" />
                        {link.children?.map((child) => {
                          const childActive = isActivePath(child.href);

                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`block px-9 py-3.5 text-[14px] font-medium leading-tight transition-colors ${
                                childActive ? "text-white" : "text-white/78 hover:bg-white/10 hover:text-white"
                              }`}
                              role="menuitem"
                            >
                              {child.label}
                            </Link>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </nav>

          <div className="hidden translate-x-4 items-center justify-end gap-5 xl:flex 2xl:translate-x-6">
            <Link href="/contact" className="whitespace-nowrap bg-[#102A43] text-white text-[11px] font-black px-6 py-3 rounded-sm hover:bg-black transition-all uppercase tracking-widest shadow-lg">Get Factory Quote</Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-whatsapp-placement="header"
              data-whatsapp-intent="project_support"
              className="group inline-flex whitespace-nowrap items-center gap-2 rounded-sm border border-[#25D366]/35 bg-[#25D366] px-5 py-3 text-[10px] font-black uppercase tracking-[0.18em] text-white shadow-lg shadow-[#25D366]/20 transition-all hover:-translate-y-0.5 hover:bg-[#1ebe5d]"
              aria-label="Contact VISHOME on WhatsApp Business"
            >
              <WhatsAppIcon className="flex h-5 w-5 items-center justify-center rounded-full bg-white p-1 text-[#25D366]" />
              WhatsApp Project Support
            </a>
          </div>

          <div className="flex items-center justify-end gap-2 xl:hidden">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-whatsapp-placement="mobile_header"
              data-whatsapp-intent="project_support"
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
        className={`xl:hidden border-t border-border bg-white overscroll-contain transition-[max-height,opacity] duration-300 ${
          menuOpen ? "max-h-[calc(100vh-4rem)] overflow-y-auto opacity-100" : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <nav className="container-fox py-4">
          <div className="grid gap-2">
            {navLinks.map((link) => {
              const sectionOpen = openSection === link.href;
              return (
                <div key={link.href} className="overflow-hidden rounded-lg border border-border bg-surface">
                  <div className="flex items-stretch">
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex flex-1 items-center px-4 py-3 text-[11px] font-black uppercase tracking-[0.16em] text-[#102A43]"
                    >
                      {link.label}
                    </Link>
                    {link.children?.length ? (
                      <button
                        type="button"
                        onClick={() => setOpenSection((current) => (current === link.href ? null : link.href))}
                        aria-expanded={sectionOpen}
                        aria-controls={`mobile-section-${link.href}`}
                        aria-label={`${sectionOpen ? "Collapse" : "Expand"} ${link.label} submenu`}
                        className="flex w-12 items-center justify-center border-l border-border/70 text-[#102A43]/60"
                      >
                        <span
                          className={`h-1.5 w-1.5 rotate-45 border-b border-r border-[#102A43]/60 transition-transform ${
                            sectionOpen ? "-translate-y-0.5 rotate-[225deg]" : ""
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                    ) : null}
                  </div>
                  {link.children?.length ? (
                    <div
                      id={`mobile-section-${link.href}`}
                      className={`grid overflow-hidden border-t border-border/70 bg-white transition-[grid-template-rows] duration-200 ${
                        sectionOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="min-h-0">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMenuOpen(false)}
                            className="block border-b border-border/60 px-5 py-2.5 text-[12px] font-semibold text-[#102A43]/70 last:border-b-0"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="btn-fox-orange text-center">
              Get Factory Quote
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#25D366] px-5 py-3 text-xs font-black uppercase tracking-[0.16em] text-white shadow-lg"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp Support
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

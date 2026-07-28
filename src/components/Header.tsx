"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { getWhatsAppBusinessUrl, whatsappBusinessMessages } from "@/lib/whatsapp";
import { getPathLocale, stripLocaleFromPath } from "@/lib/site-locales";

type NavChild = {
  href: string;
  label: string;
};

type NavItem = {
  href: string;
  label: string;
  children?: NavChild[];
};

type LanguageGroup = {
  code: string;
  name: string;
  links: NavChild[];
};

const languageGroups: LanguageGroup[] = [
  {
    code: "EN",
    name: "English",
    links: [{ href: "/?lang=en", label: "Main website" }],
  },
  {
    code: "RU",
    name: "Русский",
    links: [{ href: "/ru/hotelnyy-kovrolin", label: "Гостиничный ковролин" }],
  },
  {
    code: "JA",
    name: "日本語",
    links: [{ href: "/ja/custom-commercial-carpet", label: "業務用オーダーカーペット" }],
  },
  {
    code: "KO",
    name: "한국어",
    links: [{ href: "/ko/commercial-carpet-tile", label: "상업용 카펫 타일" }],
  },
  {
    code: "FR",
    name: "Français",
    links: [
      { href: "/fr/moquette-hotel-sur-mesure", label: "Moquette d'hôtel" },
      { href: "/fr/dalles-moquette-commerciales", label: "Dalles de moquette" },
      { href: "/fr/tapis-recuperation-or", label: "Tapis de récupération d'or" },
    ],
  },
  {
    code: "ES",
    name: "Español",
    links: [
      { href: "/es/alfombra-mineria-oro", label: "Alfombra para minería de oro" },
      { href: "/es/losetas-alfombra-comerciales", label: "Losetas de alfombra comerciales" },
    ],
  },
  {
    code: "AR",
    name: "العربية",
    links: [
      { href: "/ar/sajad-fanadi-mukhasas", label: "سجاد الفنادق المخصص" },
      { href: "/ar/balat-sajad-tijari", label: "بلاط السجاد التجاري" },
    ],
  },
  {
    code: "DE",
    name: "Deutsch",
    links: [{ href: "/de/hotel-teppichboden", label: "Hotel-Teppichboden" }],
  },
  {
    code: "PT",
    name: "Português",
    links: [{ href: "/pt/tapetes-personalizados-hotel", label: "Tapetes personalizados para hotel" }],
  },
];

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
      { href: "/products/public-area/gold-mining-carpet-mat", label: "Gold Mining Carpets" },
      { href: "/products/public-area/custom-sculpted-wool-lobby-rug", label: "Wool Carpets" },
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
      { href: "/contact#quote-form", label: "Get Factory Quote" },
      { href: "/contact#quote-form", label: "Request Sample Box" },
      { href: "/contact#quote-form", label: "MOQ / Lead Time / Samples" },
    ],
  },
];

const sectionsWithChildren = navLinks.filter((link) => link.children?.length).map((link) => link.href);

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [openSections, setOpenSections] = useState<Set<string>>(() => new Set(sectionsWithChildren));
  const pathname = usePathname();
  const navigationPathname = stripLocaleFromPath(pathname);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const timer = window.setTimeout(() => setOpenSections(new Set(sectionsWithChildren)), 0);
    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  useEffect(() => {
    const closeLanguageMenu = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest("[data-language-switcher]")) setLanguageOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLanguageOpen(false);
    };

    document.addEventListener("mousedown", closeLanguageMenu);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", closeLanguageMenu);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const whatsappUrl = getWhatsAppBusinessUrl(whatsappBusinessMessages.header, {
    placement: "header",
    intent: "project_support",
    pagePath: pathname,
  });
  const emailUrl = "mailto:sales@vishomecarpet.com?subject=VISHOME%20Commercial%20Carpet%20Project%20Inquiry";
  const isActivePath = (href: string) => (href === "/" ? navigationPathname === "/" : navigationPathname === href || navigationPathname.startsWith(`${href}/`));
  const isActiveNav = (link: NavItem) => isActivePath(link.href) || Boolean(link.children?.some((child) => isActivePath(child.href)));
  const routeLanguageCode = getPathLocale(pathname)?.toUpperCase();
  const currentLanguage = languageGroups.find((group) => group.code === routeLanguageCode) || languageGroups[0];

  const toggleLanguageMenu = () => {
    setLanguageOpen((open) => !open);
    setMenuOpen(false);
  };

  const closeMenus = () => {
    setLanguageOpen(false);
    setMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 bg-white/95 backdrop-blur border-b border-border shadow-sm ${languageOpen || menuOpen ? "z-[120]" : "z-50"}`}>
      <div className="mx-auto max-w-[1480px] px-4 sm:px-6 xl:px-6">
        <div className="grid h-16 grid-cols-[1fr_auto] items-center md:h-20 min-[1420px]:h-24 min-[1420px]:grid-cols-[250px_minmax(620px,1fr)_430px]">
          <div className="flex min-w-0 items-center gap-1.5 max-[359px]:gap-1 min-[1536px]:-translate-x-12">
            <Link href="/" className="flex min-w-0 items-center gap-1.5 max-[359px]:gap-1 sm:gap-2" onClick={closeMenus}>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-sm max-[359px]:h-7 max-[359px]:w-7 sm:h-9 sm:w-9 md:h-10 md:w-10">
                <Image
                  src="/logo-footer.svg"
                  alt=""
                  width={256}
                  height={256}
                  className="h-full w-full max-w-none scale-[1.422]"
                  priority
                />
              </span>
              <div className="flex min-w-0 flex-col">
                <span className="truncate text-base font-black leading-none tracking-tighter text-[#102A43] sm:text-lg md:text-xl">VISHOME</span>
                <span className="mt-1 whitespace-nowrap text-[7px] font-bold uppercase leading-none tracking-[0.02em] text-[#627D98] max-[359px]:text-[6px] max-[359px]:tracking-normal sm:text-[9px] sm:tracking-[0.1em] md:text-[10px] md:tracking-[0.12em]">Global Commercial Carpet</span>
              </div>
            </Link>

          </div>

          <nav className="hidden items-center justify-center min-[1420px]:flex min-[1536px]:translate-x-6 min-[1900px]:-translate-x-14" aria-label="Primary navigation">
            <div className="flex items-center gap-1 rounded-full border border-border/80 bg-white/85 px-2 py-1.5 shadow-[0_10px_30px_rgba(16,42,67,0.06)] backdrop-blur">
              {navLinks.map((link) => {
                const active = isActiveNav(link);
                const hasChildren = Boolean(link.children?.length);

                return (
                  <div key={link.href} className="group relative">
                    <Link
                      href={link.href}
                      aria-haspopup={hasChildren ? "menu" : undefined}
                      className={`flex items-center whitespace-nowrap rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.06em] transition-all ${
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
                              key={`${link.href}-${child.label}`}
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

          <div className="hidden items-center justify-end gap-3 min-[1420px]:flex min-[1536px]:translate-x-4 min-[1900px]:translate-x-6">
            <Link href="/contact#quote-form" className="whitespace-nowrap rounded-lg bg-[#C8752A] px-6 py-3 text-[13px] font-bold uppercase tracking-[0.08em] text-white shadow-[0_3px_10px_rgba(72,43,18,0.16)] transition-[transform,background-color,box-shadow] hover:-translate-y-0.5 hover:bg-[#AD6424] hover:shadow-[0_5px_14px_rgba(72,43,18,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8752A] focus-visible:ring-offset-2">Send Inquiry</Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-whatsapp-placement="header"
              data-whatsapp-intent="project_support"
              className="group inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg border border-[#25D366]/30 bg-white px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.06em] text-[#168a42] transition-colors hover:border-[#25D366]/55 hover:bg-[#25D366]/[0.06]"
              aria-label="Contact VISHOME on WhatsApp Business"
            >
              <WhatsAppIcon className="h-3.5 w-3.5" />
              WhatsApp
            </a>
            <a
              href={emailUrl}
              className="group inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg border border-[#102A43]/20 bg-white px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.06em] text-[#102A43] transition-colors hover:border-[#258CF4]/55 hover:bg-[#258CF4]/[0.05] hover:text-[#126DE2]"
              aria-label="Email VISHOME sales team at sales@vishomecarpet.com"
              title="Email sales@vishomecarpet.com"
            >
              <EmailIcon className="h-6 w-6 scale-90 transition-transform group-hover:scale-95" />
              Email
            </a>
            <div className="relative ml-2 shrink-0 min-[1900px]:invisible" data-language-switcher>
              <LanguageButton
                code={currentLanguage.code}
                name={currentLanguage.name}
                open={languageOpen}
                controls="desktop-language-menu"
                onClick={toggleLanguageMenu}
                variant="desktop"
              />
              <LanguageMenuPanel
                id="desktop-language-menu"
                open={languageOpen}
                pathname={pathname}
                onNavigate={closeMenus}
                variant="desktop"
              />
            </div>
          </div>

          <div className="flex items-center justify-end gap-1.5 max-[359px]:gap-1 min-[1420px]:hidden">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-whatsapp-placement="mobile_header"
              data-whatsapp-intent="project_support"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#25D366]/35 bg-white text-[#168a42] sm:h-9 sm:w-9"
              aria-label="Contact VISHOME on WhatsApp Business"
            >
              <WhatsAppIcon className="h-4 w-4" />
            </a>
            <a
              href={emailUrl}
              className="flex h-8 w-8 items-center justify-center transition-transform hover:scale-105 sm:h-9 sm:w-9"
              aria-label="Email VISHOME sales team at sales@vishomecarpet.com"
              title="Email sales@vishomecarpet.com"
            >
              <EmailIcon className="h-8 w-8 scale-90 sm:h-9 sm:w-9" />
            </a>
            <div className="relative" data-language-switcher>
              <LanguageButton
                code={currentLanguage.code}
                name={currentLanguage.name}
                open={languageOpen}
                controls="mobile-language-menu"
                onClick={toggleLanguageMenu}
                variant="compact"
              />
              <LanguageMenuPanel
                id="mobile-language-menu"
                open={languageOpen}
                pathname={pathname}
                onNavigate={closeMenus}
                variant="mobile"
              />
            </div>
            <button
              type="button"
              onClick={() => {
                setLanguageOpen(false);
                setMenuOpen((open) => !open);
              }}
              className="flex h-9 w-9 items-center justify-center rounded-sm border border-border bg-white text-[#102A43] shadow-sm sm:h-10 sm:w-10"
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
        className="absolute right-16 top-1/2 hidden -translate-y-1/2 min-[1900px]:block"
        data-language-switcher
      >
        <LanguageButton
          code={currentLanguage.code}
          name={currentLanguage.name}
          open={languageOpen}
          controls="wide-language-menu"
          onClick={toggleLanguageMenu}
          variant="desktop"
        />
        <LanguageMenuPanel
          id="wide-language-menu"
          open={languageOpen}
          pathname={pathname}
          onNavigate={closeMenus}
          variant="desktop"
        />
      </div>

      <div
        id="mobile-navigation"
        className={`absolute inset-x-0 top-full z-40 h-[calc(100dvh-4rem)] border-t border-border bg-white overscroll-contain transition-[opacity,visibility] duration-300 md:h-[calc(100dvh-5rem)] min-[1420px]:hidden ${
          menuOpen
            ? "visible overflow-y-auto opacity-100 [-webkit-overflow-scrolling:touch]"
            : "invisible pointer-events-none overflow-hidden opacity-0"
        }`}
      >
        <nav className="container-fox min-h-full pb-[calc(1rem+env(safe-area-inset-bottom))] pt-4">
          <div className="grid gap-2">
            {navLinks.map((link) => {
              const sectionOpen = openSections.has(link.href);
              return (
                <div key={link.href} className="overflow-hidden rounded-lg border border-border bg-surface">
                  <div className="flex items-stretch">
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex flex-1 items-center px-4 py-3 text-sm font-semibold uppercase tracking-[0.06em] text-[#102A43]"
                    >
                      {link.label}
                    </Link>
                    {link.children?.length ? (
                      <button
                        type="button"
                        onClick={() =>
                          setOpenSections((current) => {
                            const next = new Set(current);
                            if (next.has(link.href)) next.delete(link.href);
                            else next.add(link.href);
                            return next;
                          })
                        }
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
                            key={`${link.href}-${child.label}`}
                            href={child.href}
                            onClick={() => setMenuOpen(false)}
                            className="block border-b border-border/60 px-5 py-2.5 text-[13px] font-semibold text-[#102A43]/70 last:border-b-0"
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
            <Link href="/contact#quote-form" onClick={() => setMenuOpen(false)} className="btn-fox-orange text-center">
              Get Factory Quote
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#25D366]/35 bg-white px-5 py-3 text-[13px] font-semibold uppercase tracking-[0.06em] text-[#168a42]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Ask on WhatsApp
            </a>
            <a
              href={emailUrl}
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#102A43]/20 bg-white px-5 py-3 text-[13px] font-semibold uppercase tracking-[0.06em] text-[#102A43] sm:col-span-2"
            >
              <EmailIcon className="h-6 w-6 scale-90" />
              Email Sales Team
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

function LanguageButton({
  code,
  name,
  open,
  controls,
  onClick,
  variant,
}: {
  code: string;
  name: string;
  open: boolean;
  controls: string;
  onClick: () => void;
  variant: "compact" | "desktop";
}) {
  const chevron = (
    <span
      className={`h-1.5 w-1.5 rotate-45 border-b border-r border-current transition-transform ${open ? "rotate-[225deg]" : ""}`}
      aria-hidden="true"
    />
  );

  return (
    <button
      type="button"
      onClick={onClick}
      className={
        variant === "desktop"
          ? "notranslate flex h-9 w-12 shrink-0 flex-col items-center justify-center rounded-sm border border-[#c8963e]/45 bg-white text-[#102A43] shadow-sm transition-colors hover:border-[#c8963e] hover:text-[#9a6a16]"
          : "notranslate flex h-10 w-[52px] flex-col items-center justify-center rounded-sm border border-[#c8963e]/60 bg-white text-[#102A43] shadow-sm transition-colors hover:border-[#c8963e] hover:text-[#9a6a16] max-[359px]:w-12 sm:h-11 sm:w-[58px]"
      }
      translate="no"
      aria-expanded={open}
      aria-controls={controls}
      aria-haspopup="menu"
      aria-label={`Website language, current language ${name} (${code})`}
      title="Change website language"
    >
      {variant === "desktop" ? (
        <>
          <span className="text-[8px] font-bold leading-none text-[#9a6a16]">A/文</span>
          <span className="mt-1 flex items-center gap-1 text-[10px] font-bold leading-none">
            {code}
            {chevron}
          </span>
        </>
      ) : (
        <>
          <span className="text-[9px] font-bold uppercase text-[#9a6a16]">Language</span>
          <span className="mt-0.5 flex items-center gap-1 text-[11px] font-bold">
            {code}
            {chevron}
          </span>
        </>
      )}
    </button>
  );
}

function LanguageMenuPanel({
  id,
  open,
  pathname,
  onNavigate,
  variant,
}: {
  id: string;
  open: boolean;
  pathname: string;
  onNavigate: () => void;
  variant: "desktop" | "mobile";
}) {
  const placement =
    variant === "desktop"
      ? "absolute right-0 top-full mt-3 w-[680px]"
      : "fixed left-4 right-4 top-16 w-auto md:top-20";

  return (
    <div
      id={id}
      role="menu"
      aria-hidden={!open}
      hidden={!open}
      className={`notranslate ${placement} z-[90] max-h-[calc(100vh-6rem)] overflow-y-auto rounded-md border border-border bg-white p-2 shadow-[0_24px_60px_rgba(16,42,67,0.24)] transition-all duration-200 ${
        open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
      }`}
      translate="no"
    >
      <div className="grid sm:grid-cols-2">
        {languageGroups.map((group) => {
          const activeGroup = group.code === (pathname.split("/")[1]?.toUpperCase() || "EN");

          return (
            <section key={group.code} className="border-b border-border/80 px-4 py-3 sm:odd:border-r">
              <div className="flex items-baseline gap-2">
                <span className={`text-[10px] font-black ${activeGroup ? "text-[#d9480f]" : "text-[#c8963e]"}`}>{group.code}</span>
                <h2 className="text-sm font-black text-[#102A43]" dir="auto">{group.name}</h2>
              </div>
              <div className="mt-2 grid gap-1">
                {group.links.map((link) => {
                  const active = pathname === link.href;

                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      data-site-locale={group.code.toLowerCase()}
                      onClick={onNavigate}
                      className={`rounded-sm px-2 py-2 text-xs font-semibold leading-5 transition-colors ${
                        active ? "bg-[#102A43] text-white" : "text-[#627D98] hover:bg-surface hover:text-[#102A43]"
                      }`}
                      dir="auto"
                      role="menuitem"
                    >
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
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

function EmailIcon({ className }: { className?: string }) {
  const gradientId = useId().replace(/:/g, "");
  const shadowId = useId().replace(/:/g, "");

  return (
    <span className={`inline-flex shrink-0 ${className || ""}`}>
      <svg viewBox="0 0 36 36" width="100%" height="100%" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id={gradientId} x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
            <stop stopColor="#75D3FF" />
            <stop offset="0.48" stopColor="#2D98F7" />
            <stop offset="1" stopColor="#0872EB" />
          </linearGradient>
          <filter id={shadowId} x="3" y="7" width="30" height="23" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="1" stdDeviation="0.8" floodColor="#0753A9" floodOpacity="0.28" />
          </filter>
        </defs>
        <rect x="0.75" y="0.75" width="34.5" height="34.5" rx="8" fill={`url(#${gradientId})`} />
        <rect x="1.25" y="1.25" width="33.5" height="33.5" rx="7.5" stroke="white" strokeOpacity="0.38" />
        <g filter={`url(#${shadowId})`}>
          <rect x="5.75" y="9" width="24.5" height="18" rx="3.1" fill="white" />
          <path d="M7.4 10.9 18 18.75 28.6 10.9" fill="#EAF6FF" />
          <path d="m7.4 10.9 10.6 7.85 10.6-7.85" stroke="#3897EF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </span>
  );
}

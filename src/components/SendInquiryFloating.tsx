"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { products, productCategories } from "@/lib/data";
import { isLocalizedCampaignPath } from "@/lib/localized-paths";
import { getPathLocale, type SiteLocale } from "@/lib/site-locales";

const quoteLabels: Record<SiteLocale, string> = {
  en: "Request Quote",
  fr: "Devis",
  es: "Cotizar",
  ar: "طلب عرض",
  de: "Angebot",
  pt: "Cotação",
  ru: "Запрос цены",
  ja: "見積依頼",
  ko: "견적 요청",
};

export default function SendInquiryFloating() {
  const pathname = usePathname();

  if (pathname === "/contact" || pathname.startsWith("/contact/")) return null;
  if (isLocalizedCampaignPath(pathname)) return null;

  return <InquiryFloatingLink showOnMobile />;
}

function InquiryFloatingLink({ showOnMobile }: { showOnMobile: boolean }) {
  const pathname = usePathname();
  const [showMobileCta, setShowMobileCta] = useState(false);
  const locale = getPathLocale(pathname) ?? "en";
  const productId = pathname.match(/^\/products\/[^/]+\/([^/]+)$/)?.[1];
  const categoryId = pathname.match(/^\/products\/([^/]+)$/)?.[1];
  const product = productId ? products.find((item) => item.id === productId) : undefined;
  const category = categoryId ? productCategories.find((item) => item.id === categoryId) : undefined;
  const quoteProduct = product?.name || category?.name || "Commercial Carpet Project";
  const quoteHref = `/contact?product=${encodeURIComponent(quoteProduct)}&source=${encodeURIComponent(pathname)}#quote-form`;

  useEffect(() => {
    const updateVisibility = () => {
      const isDesktop = window.matchMedia("(min-width: 768px)").matches;
      setShowMobileCta(isDesktop || window.scrollY >= window.innerHeight);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);
  const mobileRevealClass = showOnMobile && showMobileCta
    ? "pointer-events-auto translate-y-0 opacity-100"
    : "pointer-events-none translate-y-5 opacity-0";

  return (
    <Link
      href={quoteHref}
      data-track-event="floating_request_quote_click"
      data-item-name={quoteProduct}
      data-item-category={product?.category || category?.id || "sitewide"}
      data-item-id={product?.id || category?.id || "sitewide"}
      className={`vishome-quote-float group fixed bottom-9 right-3 z-[99] flex h-[38px] min-w-[130px] items-center gap-2 rounded-full border border-[#C9A84C]/30 bg-[#C9A84C] px-2.5 text-[#102A43] shadow-[0_8px_32px_rgba(201,168,76,0.5)] transition-all duration-300 ease-out hover:scale-[1.06] hover:bg-[#E0BF63] hover:shadow-[0_12px_44px_rgba(201,168,76,0.62)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2 motion-reduce:transform-none sm:right-5 md:pointer-events-auto md:right-8 md:h-13 md:min-w-[176px] md:translate-y-0 md:px-4 md:opacity-100 ${mobileRevealClass}`}
      aria-label="Open project quote form"
      aria-hidden={!showMobileCta}
      tabIndex={showMobileCta ? undefined : -1}
    >
      <span className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-[#102A43] text-[#C9A84C] shadow-[0_5px_16px_rgba(16,42,67,0.22)] md:h-8 md:w-8">
        <svg
          viewBox="0 0 24 24"
          width="14"
          height="14"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="md:h-[17px] md:w-[17px]"
        >
          <path d="M4 4h16v12H8l-4 4V4Z" />
          <path d="M8 8h8" />
          <path d="M8 12h5" />
        </svg>
      </span>
      <span
        className="notranslate min-w-0 flex-1 whitespace-nowrap text-[8px] font-black uppercase leading-none tracking-[0.12em] md:text-[10px]"
        translate="no"
      >
        {quoteLabels[locale]}
      </span>
    </Link>
  );
}

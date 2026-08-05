"use client";

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

  if (isLocalizedCampaignPath(pathname)) return null;

  return <InquiryFloatingLink showOnMobile />;
}

function InquiryFloatingLink({ showOnMobile }: { showOnMobile: boolean }) {
  const pathname = usePathname();
  const locale = getPathLocale(pathname) ?? "en";
  const productId = pathname.match(/^\/products\/[^/]+\/([^/]+)$/)?.[1];
  const categoryId = pathname.match(/^\/products\/([^/]+)$/)?.[1];
  const product = productId ? products.find((item) => item.id === productId) : undefined;
  const category = categoryId ? productCategories.find((item) => item.id === categoryId) : undefined;
  const quoteProduct = product?.name || category?.name || "Commercial Carpet Project";
  const quoteHref = `/contact?product=${encodeURIComponent(quoteProduct)}&source=${encodeURIComponent(pathname)}#quote-form`;

  return (
    <Link
      href={quoteHref}
      data-track-event="floating_request_quote_click"
      data-item-name={quoteProduct}
      data-item-category={product?.category || category?.id || "sitewide"}
      data-item-id={product?.id || category?.id || "sitewide"}
      className={`group fixed right-4 top-[64vh] z-[99] h-12 w-[154px] items-center gap-2 rounded-lg border border-white/15 bg-[#C8752A] px-2.5 text-white shadow-[0_8px_22px_rgba(72,43,18,0.2)] transition-[transform,background-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-[#AD6424] hover:shadow-[0_10px_26px_rgba(72,43,18,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8752A] focus-visible:ring-offset-2 motion-reduce:transform-none md:right-6 md:top-[62vh] md:h-14 md:w-[176px] md:gap-3 md:px-3 ${showOnMobile ? "flex" : "hidden md:flex"}`}
      aria-label="Open project quote form"
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#C8752A] shadow-[inset_0_0_0_1px_rgba(200,117,42,0.12)] md:h-9 md:w-9">
        <svg
          viewBox="0 0 24 24"
          width="17"
          height="17"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4 4h16v12H8l-4 4V4Z" />
          <path d="M8 8h8" />
          <path d="M8 12h5" />
        </svg>
      </span>
      <span
        className="notranslate min-w-0 flex-1 whitespace-nowrap text-[10px] font-black uppercase leading-none tracking-[0.08em] md:text-[11px]"
        translate="no"
      >
        {quoteLabels[locale]}
      </span>
    </Link>
  );
}

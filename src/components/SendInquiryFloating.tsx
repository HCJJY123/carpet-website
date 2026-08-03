"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { brandInfo } from "@/lib/data";
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

  const pagesWithInlineForms = [
    "/contact",
    "/request-sample-box",
  ];

  if (pagesWithInlineForms.includes(pathname) || isLocalizedCampaignPath(pathname)) return null;

  if (pathname === "/") return <HomeInquiryFloating />;

  return <InquiryFloatingLink showOnMobile />;
}

function HomeInquiryFloating() {
  const [primaryInquiryVisible, setPrimaryInquiryVisible] = useState(true);

  useEffect(() => {
    const primaryInquiry = document.querySelector("[data-home-primary-inquiry]");
    if (!primaryInquiry) return;

    const observer = new IntersectionObserver(
      ([entry]) => setPrimaryInquiryVisible(entry.isIntersecting),
      { threshold: 0.05 }
    );
    observer.observe(primaryInquiry);

    return () => observer.disconnect();
  }, []);

  return <InquiryFloatingLink showOnMobile={!primaryInquiryVisible} />;
}

function InquiryFloatingLink({ showOnMobile }: { showOnMobile: boolean }) {
  const pathname = usePathname();
  const locale = getPathLocale(pathname) ?? "en";
  const emailHref = `mailto:${brandInfo.email}?subject=${encodeURIComponent("Project quote request from VishomeCarpet website")}&body=${encodeURIComponent("Hello Vishome team,\n\nPlease help quote this carpet project.\n\nProduct / application:\nEstimated area:\nDestination country:\nTarget delivery date:\n\nThank you.")}`;

  return (
    <div
      className={`fixed bottom-[max(1rem,env(safe-area-inset-bottom))] left-3 z-[99] items-center gap-2 md:bottom-36 md:left-auto md:right-8 ${showOnMobile ? "flex" : "hidden md:flex"}`}
      aria-label="Project inquiry shortcuts"
    >
      <Link
        href="/contact#quote-form"
        className="group flex h-12 w-[154px] items-center gap-2 rounded-lg border border-white/15 bg-[#C8752A] px-2.5 text-white shadow-[0_4px_14px_rgba(72,43,18,0.18)] transition-[transform,background-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-[#AD6424] hover:shadow-[0_6px_18px_rgba(72,43,18,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8752A] focus-visible:ring-offset-2 motion-reduce:transform-none md:h-14 md:w-[176px] md:gap-3 md:px-3"
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
      <a
        href={emailHref}
        data-email-placement="floating_email"
        className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#C8752A]/20 bg-white text-[#C8752A] shadow-[0_4px_14px_rgba(72,43,18,0.14)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#C8752A] hover:shadow-[0_6px_18px_rgba(72,43,18,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8752A] focus-visible:ring-offset-2 motion-reduce:transform-none md:h-14 md:w-14"
        aria-label={`Email the Vishome sales team at ${brandInfo.email}`}
      >
        <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      </a>
    </div>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isLocalizedCampaignPath } from "@/lib/localized-paths";

export default function SendInquiryFloating() {
  const pathname = usePathname();

  if (pathname === "/contact" || isLocalizedCampaignPath(pathname)) return null;

  return (
    <Link
      href="/contact#quote-form"
      className="group fixed bottom-[max(1rem,env(safe-area-inset-bottom))] left-4 z-[99] flex h-12 w-[148px] items-center gap-2 rounded-md border border-white/20 bg-[rgba(230,70,18,0.8)] px-2.5 text-white shadow-[0_10px_28px_rgba(230,70,18,0.3)] transition-[transform,background-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-[#cf3d0e] hover:shadow-[0_14px_34px_rgba(230,70,18,0.36)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e64612] focus-visible:ring-offset-2 motion-reduce:transform-none md:bottom-36 md:left-auto md:right-8 md:h-14 md:w-[210px] md:gap-3 md:px-3"
      aria-label="Send inquiry and submit project quote form"
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#e64612] shadow-[inset_0_0_0_1px_rgba(230,70,18,0.08)] md:h-9 md:w-9">
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
      <span className="min-w-0 flex-1">
        <span className="block whitespace-nowrap text-[10px] font-black uppercase leading-none tracking-[0.1em] md:text-[11px]">
          Send Inquiry
        </span>
        <span className="mt-1 block whitespace-nowrap text-[8px] font-bold uppercase leading-none tracking-[0.08em] text-white/85 md:text-[9px]">
          <span className="md:hidden">Get a Quote</span>
          <span className="hidden md:inline">Submit Quote Form</span>
        </span>
      </span>
      <svg
        viewBox="0 0 20 20"
        width="14"
        height="14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="hidden shrink-0 opacity-80 transition-transform duration-200 group-hover:translate-x-0.5 md:block"
        aria-hidden="true"
      >
        <path d="M4 10h11" />
        <path d="m11 6 4 4-4 4" />
      </svg>
    </Link>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SendInquiryFloating() {
  const pathname = usePathname();
  const href = pathname === "/contact" ? "#quote-form" : "/contact#quote-form";

  return (
    <Link
      href={href}
      className="group fixed bottom-5 left-4 right-24 z-[99] flex min-h-[64px] items-center gap-3 bg-[#e64612] px-4 py-3 text-white shadow-[0_18px_45px_rgba(230,70,18,0.34)] transition-all hover:-translate-y-1 hover:bg-[#c83a0d] md:bottom-32 md:left-auto md:right-8 md:w-[236px] md:px-5"
      style={{
        clipPath: "polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%, 14px 50%)",
      }}
      aria-label="Send inquiry and submit project quote form"
    >
      <span className="ml-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#e64612] shadow-[inset_0_0_0_1px_rgba(230,70,18,0.08)]">
        <svg
          viewBox="0 0 24 24"
          width="19"
          height="19"
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
      <span className="min-w-0">
        <span className="block text-[11px] font-black uppercase leading-none tracking-[0.16em]">Send Inquiry</span>
        <span className="mt-1.5 block text-[9px] font-bold uppercase leading-tight tracking-[0.12em] text-white/82">Submit Quote Form</span>
      </span>
    </Link>
  );
}

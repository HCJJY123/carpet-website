"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SendInquiryFloating() {
  const pathname = usePathname();
  const href = pathname === "/contact" ? "#quote-form" : "/contact#quote-form";

  return (
    <Link
      href={href}
      className="fixed bottom-5 left-4 right-24 z-[99] rounded-sm bg-[#d9480f] px-4 py-3 text-center text-white shadow-[0_18px_45px_rgba(217,72,15,0.34)] transition-all hover:-translate-y-1 hover:bg-[#b83a08] md:bottom-28 md:left-auto md:right-8 md:w-[210px] md:px-5 md:py-4"
      aria-label="Send inquiry and submit project quote form"
    >
      <span className="block text-[11px] font-black uppercase tracking-[0.16em]">Send Inquiry</span>
      <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.12em] text-white/78">Submit Quote Form</span>
    </Link>
  );
}

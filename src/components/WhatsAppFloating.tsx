"use client";

import { usePathname } from "next/navigation";
import { getWhatsAppBusinessUrl, whatsappBusinessMessages } from "@/lib/whatsapp";

export default function WhatsAppFloating() {
  const pathname = usePathname();
  const whatsappUrl = getWhatsAppBusinessUrl(whatsappBusinessMessages.floating, {
    placement: "floating_whatsapp",
    intent: "project_support",
    pagePath: pathname,
  });

  return (
    <div className="fixed bottom-5 right-4 z-[100] group md:bottom-8 md:right-8">
      <div className="pointer-events-none absolute bottom-2 right-[calc(100%+14px)] hidden w-[224px] rounded-2xl bg-[#102A43] px-4 py-3 text-right text-white opacity-0 shadow-2xl translate-x-2 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:block">
        <span className="absolute bottom-6 -right-2 h-4 w-4 rotate-45 bg-[#102A43]" aria-hidden="true" />
        <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#25D366]">
          WhatsApp Business
        </p>
        <p className="mt-1 text-xs font-semibold leading-relaxed text-white/85">
          Send one message to get price, sample options, MOQ, lead time, and TDS.
        </p>
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        data-whatsapp-placement="floating_whatsapp"
        data-whatsapp-intent="project_support"
        className="relative flex h-14 w-14 items-center justify-center rounded-[18px] bg-white shadow-[0_14px_36px_rgba(16,42,67,0.22)] ring-1 ring-[#25D366]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(37,211,102,0.34)] md:h-[74px] md:w-[74px] md:rounded-[24px]"
        aria-label="Contact VISHOME on WhatsApp Business"
      >
        <span className="absolute -right-1 -top-1 hidden rounded-full bg-[#102A43] px-2 py-1 text-[8px] font-black uppercase tracking-wider text-white shadow-lg sm:block">
          Business
        </span>
        <span className="absolute inset-1.5 rounded-[16px] bg-[#25D366]/12 md:inset-2 md:rounded-[20px]" />
        <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg md:h-14 md:w-14">
          <svg
            viewBox="0 0 24 24"
            width="28"
            height="28"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.353-.883-.788-1.48-1.766-1.653-2.063-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.128.571-.075 1.758-.717 2.009-1.412.25-.694.25-1.288.175-1.412-.075-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-2.578l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </span>
        <span className="absolute inset-0 rounded-[18px] bg-[#25D366] opacity-10 animate-ping md:rounded-[24px]" />
      </a>
    </div>
  );
}

"use client";

import { usePathname } from "next/navigation";
import { isLocalizedCampaignPath } from "@/lib/localized-paths";
import { getWhatsAppBusinessUrl, whatsappBusinessMessages } from "@/lib/whatsapp";

export default function WhatsAppFloating() {
  const pathname = usePathname();

  if (isLocalizedCampaignPath(pathname)) return null;

  const whatsappUrl = getWhatsAppBusinessUrl(whatsappBusinessMessages.floating, {
    placement: "floating_whatsapp",
    intent: "project_support",
    pagePath: pathname,
  });

  return (
    <div className="group fixed bottom-[104px] right-3 z-[98] sm:right-5 md:bottom-[112px] md:right-8">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        data-whatsapp-placement="floating_whatsapp"
        data-whatsapp-intent="project_support"
        className="vishome-wa-float relative flex h-12 min-w-[146px] items-center gap-2.5 rounded-full border border-[#25D366]/35 bg-white px-3.5 text-[#128C4A] shadow-[0_8px_30px_rgba(16,42,67,0.13)] transition-all duration-200 hover:scale-[1.06] hover:border-[#25D366]/60 hover:shadow-[0_12px_40px_rgba(37,211,102,0.26)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 motion-reduce:transform-none md:h-13 md:min-w-[156px] md:px-4"
        aria-label="Contact VISHOME on WhatsApp Business"
      >
        <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_5px_16px_rgba(37,211,102,0.32)]">
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.353-.883-.788-1.48-1.766-1.653-2.063-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.128.571-.075 1.758-.717 2.009-1.412.25-.694.25-1.288.175-1.412-.075-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-2.578l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </span>
        <span className="notranslate min-w-0 flex-1 whitespace-nowrap text-[10px] font-black uppercase leading-none tracking-[0.12em]" translate="no">
          WhatsApp
        </span>
      </a>
    </div>
  );
}

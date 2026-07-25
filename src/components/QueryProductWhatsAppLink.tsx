"use client";

import { Suspense, type ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import { getWhatsAppBusinessUrl } from "@/lib/whatsapp";

type QueryProductWhatsAppLinkProps = {
  message: string;
  placement: string;
  fallbackProduct: string;
  intent: string;
  pagePath: string;
  className: string;
  ariaLabel?: string;
  children: ReactNode;
};

function WhatsAppLink({
  message,
  placement,
  product,
  intent,
  pagePath,
  className,
  ariaLabel,
  children,
}: Omit<QueryProductWhatsAppLinkProps, "fallbackProduct"> & { product: string }) {
  const whatsappUrl = getWhatsAppBusinessUrl(message, {
    placement,
    product,
    intent,
    pagePath,
  });

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      data-whatsapp-placement={placement}
      data-whatsapp-product={product}
      data-whatsapp-intent={intent}
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}

function QueryProductWhatsAppLinkContent(props: QueryProductWhatsAppLinkProps) {
  const searchParams = useSearchParams();
  const product = searchParams.get("product")?.trim() || props.fallbackProduct;

  return <WhatsAppLink {...props} product={product} />;
}

export default function QueryProductWhatsAppLink(props: QueryProductWhatsAppLinkProps) {
  return (
    <Suspense fallback={<WhatsAppLink {...props} product={props.fallbackProduct} />}>
      <QueryProductWhatsAppLinkContent {...props} />
    </Suspense>
  );
}

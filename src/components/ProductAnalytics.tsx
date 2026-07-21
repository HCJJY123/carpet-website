"use client";

import { useEffect, type ReactNode } from "react";
import { trackAnalyticsEvent } from "@/lib/tracking";

type ProductPayload = {
  item_id: string;
  item_name: string;
  item_category: string;
  item_variant?: string;
  price?: number;
  price_low?: number;
  price_high?: number;
  currency?: string;
};

export function ProductViewEvent({ payload }: { payload: ProductPayload }) {
  useEffect(() => {
    trackAnalyticsEvent("view_item", payload);
  }, [payload]);

  return null;
}

export function ProductTrackedLink({
  href,
  children,
  className,
  event,
  payload,
  target,
  rel,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  event: string;
  payload: Record<string, unknown>;
  target?: string;
  rel?: string;
}) {
  return (
    <a
      href={href}
      className={className}
      target={target}
      rel={rel}
      onClick={() => trackAnalyticsEvent(event, payload)}
    >
      {children}
    </a>
  );
}

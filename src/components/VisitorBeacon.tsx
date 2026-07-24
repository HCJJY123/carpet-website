"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { getAttributionForEvent } from "@/lib/attribution";
import { syncClarityIdentity } from "@/lib/visitorIdentity";

const visitorBeaconUrl = process.env.NEXT_PUBLIC_VISITOR_BEACON_URL?.trim();

function getLandingPage() {
  if (typeof window === "undefined") return "";

  const key = "vh_landing_page";
  const current = `${window.location.pathname}${window.location.search}`;

  try {
    const existing = window.sessionStorage.getItem(key);
    if (existing) return existing;

    window.sessionStorage.setItem(key, current);
  } catch {
    return current;
  }

  return current;
}

function sendPayload(url: string, payload: Record<string, string | number>) {
  const blob = new Blob([JSON.stringify(payload)], { type: "text/plain" });

  if (navigator.sendBeacon?.(url, blob)) return;

  void fetch(url, {
    method: "POST",
    body: blob,
    mode: "cors",
    keepalive: true,
    headers: { "Content-Type": "text/plain" },
  }).catch(() => {});
}

export default function VisitorBeacon() {
  const pathname = usePathname();

  useEffect(() => {
    if (!visitorBeaconUrl || navigator.webdriver) return;

    const startedAt = Date.now();
    let sent = false;
    const identity = syncClarityIdentity(pathname);
    const clarityRetry = window.setTimeout(() => syncClarityIdentity(pathname), 1_500);

    function send(event: string) {
      if (sent || !visitorBeaconUrl) return;

      const duration = Math.max(1, Math.round((Date.now() - startedAt) / 1000));

      sent = true;
      sendPayload(visitorBeaconUrl, {
        visitor_id: identity.visitorId,
        session_id: identity.sessionId,
        visitor_label: identity.visitorLabel,
        event,
        site: window.location.hostname,
        path: pathname,
        query: window.location.search,
        ref: document.referrer,
        landing: getLandingPage(),
        dur: duration,
        lang: navigator.language || "",
        tz: Intl.DateTimeFormat().resolvedOptions().timeZone || "",
        screen: `${window.screen.width}x${window.screen.height}`,
        ...getAttributionForEvent(),
      });
    }

    function handleVisibilityChange() {
      if (document.visibilityState === "hidden") send("visibility_hidden");
    }

    function handlePageHide() {
      send("page_hide");
    }

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("pagehide", handlePageHide);

    return () => {
      send("route_change");
      window.clearTimeout(clarityRetry);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("pagehide", handlePageHide);
    };
  }, [pathname]);

  return null;
}

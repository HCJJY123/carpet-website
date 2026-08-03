"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import {
  getPathLocale,
  googleTranslateCookieName,
  isLocaleRoutingExcluded,
  isNativeLocalizedPath,
  isTranslatedSiteLocale,
  localeCookieMaxAge,
  localeCookieName,
  localizePath,
  sharedLocaleCookieDomain,
  translatedSiteLocales,
  type TranslatedSiteLocale,
  usesSharedLocaleCookieDomain,
} from "@/lib/site-locales";

type GoogleTranslateConstructor = new (
  options: {
    pageLanguage: string;
    includedLanguages: string;
    autoDisplay: boolean;
    multilanguagePage: boolean;
  },
  elementId: string
) => unknown;

declare global {
  interface Window {
    google?: {
      translate?: {
        TranslateElement?: GoogleTranslateConstructor;
      };
    };
    __vishomeGoogleTranslateInit?: () => void;
  }
}

const googleScriptId = "vishome-google-translate-script";
const googleContainerId = "vishome-google-translate";

function setClientCookie(name: string, value: string, maxAge: number) {
  const secure = window.location.protocol === "https:" ? ";Secure" : "";
  const baseCookie = `${name}=${value};path=/;max-age=${maxAge};SameSite=Lax${secure}`;

  if (usesSharedLocaleCookieDomain(window.location.hostname)) {
    // Remove the legacy host-only copy before writing the shared preference.
    document.cookie = `${name}=;path=/;max-age=0;SameSite=Lax${secure}`;
    document.cookie = `${baseCookie};domain=${sharedLocaleCookieDomain}`;
    return;
  }

  document.cookie = baseCookie;
}

function clearClientCookie(name: string) {
  const secure = window.location.protocol === "https:" ? ";Secure" : "";
  document.cookie = `${name}=;path=/;max-age=0;SameSite=Lax${secure}`;
  if (usesSharedLocaleCookieDomain(window.location.hostname)) {
    document.cookie = `${name}=;path=/;domain=${sharedLocaleCookieDomain};max-age=0;SameSite=Lax${secure}`;
  }
}

function persistLocalePreference(locale: TranslatedSiteLocale | "en") {
  clearClientCookie(localeCookieName);
  clearClientCookie(googleTranslateCookieName);

  if (locale === "en") return;

  setClientCookie(localeCookieName, locale, localeCookieMaxAge);
  setClientCookie(googleTranslateCookieName, `/en/${locale}`, localeCookieMaxAge);
}

function shouldLocalizeUrl(url: URL) {
  return url.origin === window.location.origin && !isLocaleRoutingExcluded(url.pathname);
}

function translatedHref(url: URL, locale: TranslatedSiteLocale) {
  if (url.searchParams.get("lang") === "en") return `${url.pathname}${url.search}${url.hash}`;
  url.pathname = localizePath(url.pathname, locale);
  return `${url.pathname}${url.search}${url.hash}`;
}

export default function LocaleExperience() {
  const pathname = usePathname();

  useEffect(() => {
    const locale = getPathLocale(pathname);
    if (!locale) {
      document.documentElement.lang = "en";
      document.documentElement.dir = "ltr";
      delete document.documentElement.dataset.siteLocale;
      clearClientCookie(localeCookieName);
      clearClientCookie(googleTranslateCookieName);
      const main = document.querySelector("main");
      main?.classList.remove("notranslate");
      main?.removeAttribute("translate");
      return;
    }

    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.dataset.siteLocale = locale;
    setClientCookie(localeCookieName, locale, localeCookieMaxAge);
    setClientCookie(googleTranslateCookieName, `/en/${locale}`, localeCookieMaxAge);

    const main = document.querySelector("main");
    const nativeLocalizedPage = isNativeLocalizedPath(pathname);
    if (nativeLocalizedPage) {
      main?.classList.add("notranslate");
      main?.setAttribute("translate", "no");
    } else {
      main?.classList.remove("notranslate");
      main?.removeAttribute("translate");
    }

    const rewriteLinks = (root: ParentNode = document) => {
      const anchors = [
        ...(root instanceof HTMLAnchorElement && root.matches("a[href]") ? [root] : []),
        ...root.querySelectorAll<HTMLAnchorElement>("a[href]"),
      ];

      anchors.forEach((anchor) => {
        const rawHref = anchor.getAttribute("href");
        if (!rawHref || rawHref.startsWith("#") || anchor.hasAttribute("download")) return;
        if (/^(mailto:|tel:|sms:|javascript:)/i.test(rawHref)) return;

        try {
          const url = new URL(rawHref, window.location.href);
          if (!shouldLocalizeUrl(url) || getPathLocale(url.pathname)) return;
          anchor.setAttribute("href", translatedHref(url, locale));
        } catch {
          // Ignore malformed third-party links.
        }
      });
    };

    rewriteLinks();
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof Element) rewriteLinks(node);
        });
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    const handleInternalNavigation = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const target = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>("a[href]") : null;
      if (!target || target.target === "_blank" || target.hasAttribute("download")) return;

      const rawHref = target.getAttribute("href");
      if (!rawHref || rawHref.startsWith("#") || /^(mailto:|tel:|sms:|javascript:)/i.test(rawHref)) return;

      try {
        const url = new URL(rawHref, window.location.href);
        if (!shouldLocalizeUrl(url)) return;

        const requestedLocale = target.dataset.siteLocale;
        const validRequestedLocale =
          requestedLocale === "en" || isTranslatedSiteLocale(requestedLocale)
            ? requestedLocale
            : null;
        const currentLocale = locale ?? "en";

        if (validRequestedLocale && validRequestedLocale !== currentLocale) {
          persistLocalePreference(validRequestedLocale);
        } else if (url.searchParams.get("lang") === "en") {
          persistLocalePreference("en");
        }

        if (url.pathname === window.location.pathname && url.search === window.location.search && url.hash) return;

        event.preventDefault();
        event.stopPropagation();
        window.location.assign(url.href);
      } catch {
        // Leave navigation untouched when a URL cannot be parsed.
      }
    };
    document.addEventListener("click", handleInternalNavigation, true);

    const initializeTranslate = () => {
      const TranslateElement = window.google?.translate?.TranslateElement;
      if (!TranslateElement) return;

      const container = document.getElementById(googleContainerId);
      if (!container || container.childElementCount > 0) return;

      new TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: translatedSiteLocales.join(","),
          autoDisplay: false,
          multilanguagePage: true,
        },
        googleContainerId
      );
    };

    window.__vishomeGoogleTranslateInit = initializeTranslate;
    if (window.google?.translate?.TranslateElement) {
      initializeTranslate();
    } else if (!document.getElementById(googleScriptId)) {
      const script = document.createElement("script");
      script.id = googleScriptId;
      script.src = "https://translate.google.com/translate_a/element.js?cb=__vishomeGoogleTranslateInit";
      script.async = true;
      script.referrerPolicy = "no-referrer-when-downgrade";
      document.head.appendChild(script);
    }

    return () => {
      observer.disconnect();
      document.removeEventListener("click", handleInternalNavigation, true);
    };
  }, [pathname]);

  return <div id={googleContainerId} className="hidden" aria-hidden="true" />;
}

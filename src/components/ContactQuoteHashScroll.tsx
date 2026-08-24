"use client";

import { useEffect } from "react";

function scrollToQuoteForm(behavior: ScrollBehavior = "auto") {
  if (typeof window === "undefined") return;
  if (window.location.hash !== "#quote-form") return;

  const header = document.querySelector("header");
  const headerHeight = header?.getBoundingClientRect().height ?? 0;
  const isMobile = window.matchMedia("(max-width: 767px)").matches;
  const desktopTarget = document.querySelector<HTMLElement>("[data-quote-section-anchor]");
  const mobileTarget = document.querySelector<HTMLElement>("[data-quote-form-anchor]");
  const target = isMobile ? mobileTarget ?? desktopTarget : desktopTarget ?? mobileTarget;

  if (!target) return;

  const mobileFieldOffset = isMobile ? 52 : 0;
  const top = window.scrollY + target.getBoundingClientRect().top - headerHeight + mobileFieldOffset;
  window.scrollTo({ top: Math.max(0, top), behavior });
}

export default function ContactQuoteHashScroll() {
  useEffect(() => {
    const run = (behavior: ScrollBehavior = "auto") => {
      window.requestAnimationFrame(() => scrollToQuoteForm(behavior));
      window.setTimeout(() => scrollToQuoteForm(behavior), 120);
      window.setTimeout(() => scrollToQuoteForm(behavior), 360);
    };

    run("auto");

    const handleHashChange = () => run("smooth");
    const handleClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest<HTMLAnchorElement>('a[href$="#quote-form"]');
      if (!anchor) return;

      const url = new URL(anchor.href, window.location.origin);
      if (url.origin !== window.location.origin || url.pathname !== window.location.pathname) return;

      event.preventDefault();
      if (window.location.hash !== "#quote-form") {
        window.history.pushState(null, "", `${window.location.pathname}${window.location.search}#quote-form`);
      }
      run("smooth");
    };

    window.addEventListener("hashchange", handleHashChange);
    document.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}

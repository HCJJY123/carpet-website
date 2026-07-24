import { NextRequest, NextResponse } from "next/server";
import {
  getPathLocale,
  googleTranslateCookieName,
  isLocaleRoutingExcluded,
  isNativeLocalizedPath,
  isTranslatedSiteLocale,
  localeCookieMaxAge,
  localeCookieName,
  stripLocaleFromPath,
} from "@/lib/site-locales";

function applyLocaleCookies(response: NextResponse, locale: string, secure: boolean) {
  const cookieOptions = {
    maxAge: localeCookieMaxAge,
    path: "/",
    sameSite: "lax" as const,
    secure,
  };

  response.cookies.set(localeCookieName, locale, cookieOptions);
  response.cookies.set(googleTranslateCookieName, `/en/${locale}`, cookieOptions);
  response.headers.set("Content-Language", locale);
  return response;
}

function clearLocaleCookies(response: NextResponse) {
  response.cookies.set(localeCookieName, "", { maxAge: 0, path: "/" });
  response.cookies.set(googleTranslateCookieName, "", { maxAge: 0, path: "/" });
  return response;
}

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  const pathname = url.pathname;

  if (isLocaleRoutingExcluded(pathname)) return NextResponse.next();

  if (url.searchParams.get("lang") === "en") {
    url.searchParams.delete("lang");
    return clearLocaleCookies(NextResponse.redirect(url));
  }

  const pathLocale = getPathLocale(pathname);
  const secure = request.nextUrl.protocol === "https:";

  if (pathLocale) {
    if (isNativeLocalizedPath(pathname)) {
      return applyLocaleCookies(NextResponse.next(), pathLocale, secure);
    }

    url.pathname = stripLocaleFromPath(pathname);
    const response = NextResponse.rewrite(url);
    response.headers.set("X-Robots-Tag", "noindex, follow");
    return applyLocaleCookies(response, pathLocale, secure);
  }

  const preferredLocale = request.cookies.get(localeCookieName)?.value;
  if (isTranslatedSiteLocale(preferredLocale)) {
    url.pathname = pathname === "/" ? `/${preferredLocale}` : `/${preferredLocale}${pathname}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|api).*)"],
};

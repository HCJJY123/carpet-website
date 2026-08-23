import { NextRequest, NextResponse } from "next/server";
import {
  getPathLocale,
  getCountryMarketContentLanguage,
  googleTranslateCookieName,
  isLocaleRoutingExcluded,
  isNativeLocalizedPath,
  localeCookieMaxAge,
  localeCookieName,
  sharedLocaleCookieDomain,
  stripLocaleFromPath,
  usesSharedLocaleCookieDomain,
} from "@/lib/site-locales";

function appendHostCookieDeletion(response: NextResponse, name: string, secure: boolean) {
  response.headers.append(
    "Set-Cookie",
    `${name}=; Path=/; Max-Age=0; SameSite=Lax${secure ? "; Secure" : ""}`,
  );
}

function setPersistentCookie(
  response: NextResponse,
  name: string,
  value: string,
  secure: boolean,
  hostname: string,
) {
  const cookieOptions = {
    maxAge: localeCookieMaxAge,
    path: "/",
    sameSite: "lax" as const,
    secure,
  };

  if (usesSharedLocaleCookieDomain(hostname)) {
    response.cookies.set(name, value, { ...cookieOptions, domain: sharedLocaleCookieDomain });
    return;
  }

  response.cookies.set(name, value, cookieOptions);
}

function clearPersistentCookie(response: NextResponse, name: string, secure: boolean, hostname: string) {
  if (usesSharedLocaleCookieDomain(hostname)) {
    response.cookies.set(name, "", {
      domain: sharedLocaleCookieDomain,
      maxAge: 0,
      path: "/",
      sameSite: "lax",
      secure,
    });
    return;
  }

  response.cookies.set(name, "", { maxAge: 0, path: "/", sameSite: "lax", secure });
}

function applyLocaleCookies(response: NextResponse, locale: string, secure: boolean, hostname: string) {
  setPersistentCookie(response, localeCookieName, locale, secure, hostname);
  setPersistentCookie(response, googleTranslateCookieName, `/en/${locale}`, secure, hostname);
  if (usesSharedLocaleCookieDomain(hostname)) {
    appendHostCookieDeletion(response, localeCookieName, secure);
    appendHostCookieDeletion(response, googleTranslateCookieName, secure);
  }
  response.headers.set("Content-Language", locale);
  return response;
}

function clearLocaleCookies(response: NextResponse, secure: boolean, hostname: string) {
  clearPersistentCookie(response, localeCookieName, secure, hostname);
  clearPersistentCookie(response, googleTranslateCookieName, secure, hostname);
  if (usesSharedLocaleCookieDomain(hostname)) {
    appendHostCookieDeletion(response, localeCookieName, secure);
    appendHostCookieDeletion(response, googleTranslateCookieName, secure);
  }
  return response;
}

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  const pathname = url.pathname;
  const secure = request.nextUrl.protocol === "https:";
  const hostname = request.nextUrl.hostname;

  if (isLocaleRoutingExcluded(pathname)) return NextResponse.next();

  if (url.searchParams.get("lang") === "en") {
    url.searchParams.delete("lang");
    return clearLocaleCookies(NextResponse.redirect(url), secure, hostname);
  }

  if (pathname === "/") {
    const response = NextResponse.next();
    response.headers.set("Content-Language", "en");
    return clearLocaleCookies(response, secure, hostname);
  }

  const pathLocale = getPathLocale(pathname);

  if (pathLocale) {
    if (isNativeLocalizedPath(pathname)) {
      return applyLocaleCookies(NextResponse.next(), pathLocale, secure, hostname);
    }

    url.pathname = stripLocaleFromPath(pathname);
    return clearLocaleCookies(NextResponse.redirect(url, 308), secure, hostname);
  }

  const countryMarketLanguage = getCountryMarketContentLanguage(pathname);
  if (countryMarketLanguage) {
    const response = NextResponse.next();
    response.headers.set("Content-Language", countryMarketLanguage);
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.[a-zA-Z0-9]+$).*)"],
};

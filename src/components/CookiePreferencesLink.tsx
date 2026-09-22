"use client";

import { openCookiePreferences } from "@/lib/consent";

export default function CookiePreferencesLink() {
  return (
    <button type="button" onClick={openCookiePreferences} className="text-left text-[15px] font-semibold text-gray-300 transition-colors hover:text-white">
      Cookie Preferences
    </button>
  );
}

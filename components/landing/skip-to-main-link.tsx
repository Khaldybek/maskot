"use client";

import { useMessages } from "@/components/locale-provider";

export function SkipToMainLink() {
  const t = useMessages();

  return (
    <a
      href="#main-content"
      className="pointer-events-none fixed left-4 top-4 z-[300] -translate-y-[220%] rounded-lg bg-[#DE2E06] px-4 py-3 text-sm font-semibold text-white shadow-lg opacity-0 transition focus:pointer-events-auto focus:translate-y-0 focus:opacity-100 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-white"
    >
      {t.a11y.skipToContent}
    </a>
  );
}

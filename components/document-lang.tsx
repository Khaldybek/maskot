"use client";

import { useLocale } from "@/components/locale-provider";
import { useEffect } from "react";

/** Синхронизирует <html lang> с локалью (ru / kk). */
export function DocumentLang() {
  const locale = useLocale();
  useEffect(() => {
    document.documentElement.lang = locale === "kz" ? "kk" : "ru";
  }, [locale]);
  return null;
}

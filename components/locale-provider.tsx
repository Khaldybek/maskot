"use client";

import type { Locale } from "@/lib/i18n/config";
import type { Messages } from "@/messages";
import {
  createContext,
  useContext,
  type ReactNode,
} from "react";

const LocaleContext = createContext<{
  locale: Locale;
  messages: Messages;
} | null>(null);

export function LocaleProvider({
  locale,
  messages,
  children,
}: {
  locale: Locale;
  messages: Messages;
  children: ReactNode;
}) {
  return (
    <LocaleContext.Provider value={{ locale, messages }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocaleContext() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocaleContext must be used within LocaleProvider");
  }
  return ctx;
}

export function useLocale(): Locale {
  return useLocaleContext().locale;
}

export function useMessages(): Messages {
  return useLocaleContext().messages;
}

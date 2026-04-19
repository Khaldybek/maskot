import type { Locale } from "./config";

/** Убирает префикс /ru или /kz из pathname. */
export function stripLocaleFromPathname(pathname: string): string {
  const parts = pathname.split("/").filter(Boolean);
  if (parts[0] === "ru" || parts[0] === "kz") {
    const rest = parts.slice(1);
    return rest.length ? `/${rest.join("/")}` : "/";
  }
  return pathname;
}

/** Собирает путь с локалью: `/` → `/ru`, `/contact` → `/ru/contact`. */
export function withLocale(locale: Locale, path: string): string {
  if (path === "/") return `/${locale}`;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${normalized}`;
}

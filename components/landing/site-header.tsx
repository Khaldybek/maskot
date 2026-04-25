"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";
import { Eye, Menu, X } from "lucide-react";
import { A11Y_PANEL_OPEN_EVENT } from "@/lib/a11y-prefs";
import { AlmatyTime } from "@/components/landing/almaty-time";
import { useLocale, useMessages } from "@/components/locale-provider";
import type { Locale } from "@/lib/i18n/config";
import { stripLocaleFromPathname, withLocale } from "@/lib/i18n/path";

const routes = [
  { path: "/", key: "home" as const },
  { path: "/about-almaty", key: "aboutAlmaty" as const },
  { path: "/news", key: "news" as const },
  { path: "/symbol", key: "symbol" as const },
  { path: "/brand", key: "brand" as const },
  { path: "/contact", key: "contact" as const },
];

function isActive(strippedPath: string, routePath: string) {
  if (routePath === "/") {
    return strippedPath === "/" || strippedPath === "";
  }
  return strippedPath === routePath;
}

function NavLink({
  href,
  label,
  active,
  onNavigate,
  className,
}: {
  href: string;
  label: string;
  active: boolean;
  onNavigate?: () => void;
  className?: string;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={`whitespace-nowrap rounded-full px-2.5 py-2 text-sm font-semibold transition-colors xl:px-3.5 xl:py-2.5 xl:text-base 2xl:px-4 2xl:text-[1.0625rem] ${
        active
          ? "bg-[#DE2E06] text-white"
          : "text-neutral-900 hover:text-[#DE2E06]"
      } ${className ?? ""}`}
    >
      {label}
    </Link>
  );
}

function LanguageSwitch({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const stripped = stripLocaleFromPathname(pathname);
  const suffix = stripped === "/" ? "" : stripped;
  const ruHref = withLocale("ru", suffix === "" ? "/" : suffix);
  const kzHref = withLocale("kz", suffix === "" ? "/" : suffix);

  const linkClass = (active: boolean) =>
    `relative z-10 min-w-[2.75rem] flex-1 rounded-full px-2.5 py-1.5 text-center text-sm font-semibold transition-colors duration-300 sm:min-w-[3rem] sm:px-3 sm:text-base ${
      active ? "text-white" : "text-[#DE2E06] hover:text-[#b82505]"
    }`;

  return (
    <div
      className="relative inline-flex rounded-full border border-[#DE2E06] p-0.5"
      role="group"
      aria-label="Тіл / Язык"
    >
      <span
        aria-hidden
        className={`pointer-events-none absolute inset-y-0.5 rounded-full bg-[#DE2E06] transition-[left,right] duration-300 ease-[cubic-bezier(0.33,1,0.68,1)] motion-reduce:transition-none ${
          locale === "kz" ? "left-1/2 right-0.5" : "left-0.5 right-1/2"
        }`}
      />
      <Link
        href={ruHref}
        scroll={false}
        className={linkClass(locale === "ru")}
        hrefLang="ru"
      >
        RU
      </Link>
      <Link
        href={kzHref}
        scroll={false}
        className={linkClass(locale === "kz")}
        hrefLang="kk"
      >
        KZ
      </Link>
    </div>
  );
}

type SiteHeaderProps = {
  weatherSlot: ReactNode;
  a11ySlot: ReactNode;
};

export function SiteHeader({ weatherSlot, a11ySlot }: SiteHeaderProps) {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useMessages();
  const stripped = stripLocaleFromPathname(pathname);
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white shadow-[0_1px_0_rgba(0,0,0,0.04)]">
      <div className="relative mx-auto flex min-h-[4rem] max-w-[1400px] items-center justify-between gap-2 px-4 py-2.5 sm:gap-3 sm:px-5 xl:min-h-[4.25rem] xl:gap-4 xl:px-8 xl:py-3">
        <div className="flex min-w-0 shrink-0 items-center gap-2.5 sm:gap-4">
          <Link
            href={withLocale(locale, "/")}
            className="shrink-0"
            aria-label={t.header.logoHome}
          >
            <Image
              src="/logo.svg"
              alt=""
              width={56}
              height={56}
              className="h-12 w-12 sm:h-14 sm:w-14"
              priority
            />
          </Link>
          <div className="flex min-w-0 flex-col justify-center gap-1 sm:gap-1.5">
            <div className="min-h-[1.375rem] sm:min-h-6">{weatherSlot}</div>
            <AlmatyTime />
          </div>
        </div>

        <nav
          className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 flex-nowrap items-center justify-center gap-1 lg:flex 2xl:gap-1.5"
          aria-label={t.header.mainNav}
        >
          {routes.map((item) => (
            <NavLink
              key={item.path}
              href={withLocale(locale, item.path)}
              label={t.nav[item.key]}
              active={isActive(stripped, item.path)}
            />
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          {a11ySlot}
          <LanguageSwitch locale={locale} />
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg p-2 text-neutral-800 lg:hidden"
            aria-expanded={open}
            aria-label={open ? t.header.closeMenu : t.header.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-neutral-200 bg-white px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label={t.header.mobileNav}>
            {routes.map((item) => (
              <NavLink
                key={item.path}
                href={withLocale(locale, item.path)}
                label={t.nav[item.key]}
                active={isActive(stripped, item.path)}
                onNavigate={() => setOpen(false)}
                className="flex w-full min-h-11 items-center justify-center sm:min-h-0 sm:inline-flex sm:w-auto sm:justify-start"
              />
            ))}
          </nav>
          <div className="mt-4 border-t border-neutral-100 pt-4">
            <button
              type="button"
              className="flex w-full min-h-11 items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-base font-semibold text-neutral-900 transition hover:bg-neutral-100"
              onClick={() => {
                window.dispatchEvent(new Event(A11Y_PANEL_OPEN_EVENT));
                setOpen(false);
              }}
            >
              <Eye className="size-5 shrink-0" aria-hidden />
              {t.a11y.panelTitle}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

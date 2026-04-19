"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale, useMessages } from "@/components/locale-provider";
import { withLocale } from "@/lib/i18n/path";
import {
  IconFacebook,
  IconInstagram,
  IconTiktok,
  IconYoutube,
} from "@/components/landing/social-footer-icons";

function telHref(phone: string) {
  const d = phone.replace(/\D/g, "");
  return d ? `tel:+${d}` : "#";
}

const socialClass =
  "flex size-10 items-center justify-center rounded-full bg-white text-[#333333] transition hover:bg-zinc-200";

export function SiteFooter() {
  const locale = useLocale();
  const t = useMessages();
  const year = new Date().getFullYear();

  const navItems = [
    { href: withLocale(locale, "/"), label: t.nav.home },
    { href: withLocale(locale, "/about-almaty"), label: t.nav.aboutAlmaty },
    { href: withLocale(locale, "/news"), label: t.nav.news },
    { href: withLocale(locale, "/symbol"), label: t.nav.symbol },
    { href: withLocale(locale, "/brand"), label: t.nav.brand },
    { href: withLocale(locale, "/contact"), label: t.nav.contact },
  ] as const;

  const social = [
    {
      href: "https://www.facebook.com/",
      label: t.footer.socialFacebook,
      Icon: IconFacebook,
    },
    {
      href: "https://www.instagram.com/",
      label: t.footer.socialInstagram,
      Icon: IconInstagram,
    },
    {
      href: "https://www.youtube.com/",
      label: t.footer.socialYoutube,
      Icon: IconYoutube,
    },
    {
      href: "https://www.tiktok.com/",
      label: t.footer.socialTiktok,
      Icon: IconTiktok,
    },
  ] as const;

  return (
    <footer className="overflow-x-clip bg-[#333333] text-white">
      <div className="mx-auto min-w-0 max-w-[1400px] px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div>
            <Link
              href={withLocale(locale, "/")}
              className="inline-flex items-center gap-3 outline-none focus-visible:ring-2 focus-visible:ring-[#DE2E06] focus-visible:ring-offset-2 focus-visible:ring-offset-[#333333]"
            >
              <Image
                src="/logo.svg"
                alt=""
                width={48}
                height={48}
                className="size-11 shrink-0 sm:size-12"
              />
              <span className="text-xl font-bold tracking-wide text-[#DE2E06] sm:text-2xl">
                {t.footer.brandWordmark}
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-zinc-300">
              {t.footer.slogan}
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-white">
              {t.footer.navTitle}
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-zinc-400">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-base font-bold text-white">
              {t.footer.contactTitle}
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-zinc-400">
              <li>
                <a
                  href={telHref(t.footer.phone)}
                  className="transition hover:text-white"
                >
                  {t.footer.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${t.footer.email}`}
                  className="transition hover:text-white"
                >
                  {t.footer.email}
                </a>
              </li>
              <li>{t.footer.location}</li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-bold text-white">
              {t.footer.socialTitle}
            </h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {social.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={socialClass}
                >
                  <Icon className="size-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-zinc-400 sm:text-sm">
          © {year} Almaty. {t.footer.rightsReserved}
        </p>
      </div>
    </footer>
  );
}

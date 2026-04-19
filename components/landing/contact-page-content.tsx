"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import {
  CONTACT_NEWCOMER_SLIDES,
  CONTACT_PAGE_HERO_IMAGE,
  CONTACT_PAGE_MAP_EMBED_SRC,
} from "@/lib/contact-page-assets";
import type { Messages } from "@/messages";
import {
  IconFacebook,
  IconInstagram,
  IconTiktok,
  IconYoutube,
} from "@/components/landing/social-footer-icons";

const accent = "#DE2E06";

type Props = {
  content: Messages["contactPage"];
};

function telHref(phone: string) {
  const d = phone.replace(/\D/g, "");
  return d ? `tel:+${d}` : "#";
}

function NewcomerTriplet({
  images,
  alts,
}: {
  images: readonly string[];
  alts: string[];
}) {
  return (
    <div className="relative flex min-h-[180px] items-center justify-center overflow-x-clip py-4 sm:min-h-[220px]">
      <div className="flex max-w-full items-center justify-center pl-4 sm:pl-6 sm:pl-8">
        {images.map((src, i) => (
          <div
            key={src}
            className={`relative size-[4.75rem] shrink-0 overflow-hidden rounded-full border-4 border-white shadow-lg sm:size-28 ${
              i === 0 ? "-mr-6 z-[1] sm:-mr-9"
              : i === 1 ? "z-[3] scale-105"
              : "-ml-6 z-[1] sm:-ml-9"
            }`}
          >
            <Image
              src={src}
              alt={alts[i] ?? ""}
              fill
              className="object-cover"
              sizes="120px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ContactPageContent({ content }: Props) {
  const [sent, setSent] = useState(false);

  const socialBrandIcons = [
    IconInstagram,
    IconFacebook,
    IconYoutube,
    IconTiktok,
  ] as const;

  return (
    <div className="min-w-0 bg-white pb-16 pt-2 sm:pb-20">
      <div className="mx-auto min-w-0 max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] shadow-[0_24px_60px_-12px_rgba(0,0,0,0.2)] sm:rounded-[2.25rem] lg:rounded-[2.5rem]">
          <div className="relative min-h-[280px] sm:min-h-[340px] lg:min-h-[380px]">
            <Image
              src={CONTACT_PAGE_HERO_IMAGE}
              alt={content.heroImageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1400px) 100vw, 1400px"
              priority
            />
            <div className="absolute inset-0 bg-black/55" aria-hidden />
            <div className="relative z-10 flex min-h-[280px] flex-col items-center justify-center px-4 py-14 text-center sm:min-h-[340px] sm:px-6 sm:py-16 lg:min-h-[380px]">
              <h1 className="max-w-3xl text-balance break-words text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
                {content.heroTitle}
              </h1>
              <p className="mt-4 max-w-2xl text-base text-white/95 sm:text-lg">
                {content.heroSubtitle}
              </p>
            </div>
          </div>
        </div>

        <ul className="relative z-10 -mt-10 grid grid-cols-1 gap-4 sm:-mt-14 sm:grid-cols-2 lg:-mt-16 lg:grid-cols-4 lg:gap-5">
          <li>
            <article className="h-full rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.1)] ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-800">
              <Phone
                className="size-8"
                style={{ color: accent }}
                strokeWidth={1.75}
                aria-hidden
              />
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-zinc-500">
                {content.cardPhoneLabel}
              </p>
              <div className="mt-2 space-y-1 font-bold text-neutral-900 dark:text-zinc-50">
                {content.phones.map((p) => (
                  <a
                    key={p}
                    href={telHref(p)}
                    className="block hover:underline"
                    style={{ color: "inherit" }}
                  >
                    {p}
                  </a>
                ))}
              </div>
            </article>
          </li>
          <li>
            <article className="h-full rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.1)] ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-800">
              <Mail
                className="size-8"
                style={{ color: accent }}
                strokeWidth={1.75}
                aria-hidden
              />
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-zinc-500">
                {content.cardEmailLabel}
              </p>
              <a
                href={`mailto:${content.email}`}
                className="mt-2 block font-bold hover:underline"
                style={{ color: accent }}
              >
                {content.email}
              </a>
            </article>
          </li>
          <li>
            <article className="h-full rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.1)] ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-800">
              <MapPin
                className="size-8"
                style={{ color: accent }}
                strokeWidth={1.75}
                aria-hidden
              />
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-zinc-500">
                {content.cardAddressLabel}
              </p>
              <div className="mt-2 font-bold text-neutral-900 dark:text-zinc-50">
                <a
                  href={content.addressMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                  style={{ color: accent }}
                >
                  {content.addressStreet}
                </a>
                <p className="mt-1 font-bold text-neutral-900 dark:text-zinc-50">
                  {content.addressCity}
                </p>
              </div>
            </article>
          </li>
          <li>
            <article className="h-full rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.1)] ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-800">
              <Clock
                className="size-8"
                style={{ color: accent }}
                strokeWidth={1.75}
                aria-hidden
              />
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-zinc-500">
                {content.cardHoursLabel}
              </p>
              <p className="mt-2 font-bold text-neutral-900 dark:text-zinc-50">
                {content.hours}
              </p>
            </article>
          </li>
        </ul>

        <div className="mt-16 grid min-w-0 grid-cols-1 gap-10 lg:mt-20 lg:grid-cols-2 lg:gap-14 lg:gap-x-16">
          <section className="min-w-0">
            <h2
              className="text-xl font-bold sm:text-2xl"
              style={{ color: accent }}
            >
              {content.socialSectionTitle}
            </h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {content.socialSectionSubtitle}
            </p>
            <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {content.socialCards.map((s, i) => {
                const BrandIcon = socialBrandIcons[i] ?? IconInstagram;
                return (
                  <li key={s.name}>
                    <div className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-md ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-800">
                      <div
                        className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-zinc-50 text-neutral-800 dark:bg-zinc-800 dark:text-zinc-100"
                        aria-hidden
                      >
                        <BrandIcon className="size-6" />
                      </div>
                      <div>
                        <p className="font-bold text-neutral-900 dark:text-zinc-50">
                          {s.name}
                        </p>
                        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                          {s.handle}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>

          <section className="min-w-0">
            <h2
              className="text-xl font-bold sm:text-2xl"
              style={{ color: accent }}
            >
              {content.formTitle}
            </h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {content.formSubtitle}
            </p>
            <form
              className="mt-8 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <input
                name="name"
                type="text"
                required
                placeholder={content.formNamePh}
                className="w-full rounded-2xl border px-4 py-3.5 text-neutral-900 outline-none transition placeholder:text-zinc-400 focus:ring-2 dark:bg-zinc-900 dark:text-zinc-50"
                style={{
                  borderColor: `${accent}55`,
                  backgroundColor: "rgba(222, 46, 6, 0.06)",
                }}
              />
              <input
                name="email"
                type="email"
                required
                placeholder={content.formEmailPh}
                className="w-full rounded-2xl border px-4 py-3.5 text-neutral-900 outline-none transition placeholder:text-zinc-400 focus:ring-2 dark:bg-zinc-900 dark:text-zinc-50"
                style={{
                  borderColor: `${accent}55`,
                  backgroundColor: "rgba(222, 46, 6, 0.06)",
                }}
              />
              <textarea
                name="message"
                rows={5}
                required
                placeholder={content.formMessagePh}
                className="w-full resize-y rounded-2xl border px-4 py-3.5 text-neutral-900 outline-none transition placeholder:text-zinc-400 focus:ring-2 dark:bg-zinc-900 dark:text-zinc-50"
                style={{
                  borderColor: `${accent}55`,
                  backgroundColor: "rgba(222, 46, 6, 0.06)",
                }}
              />
              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center rounded-full px-8 text-sm font-semibold text-white shadow-md transition hover:opacity-95"
                style={{ backgroundColor: accent }}
              >
                {content.formSubmit}
              </button>
              {sent && (
                <p className="text-sm text-emerald-700 dark:text-emerald-400">
                  {content.formSent}
                </p>
              )}
            </form>
          </section>
        </div>

        <section className="mt-20 text-center sm:mt-24 lg:mt-28">
          <h2
            className="text-2xl font-bold sm:text-3xl"
            style={{ color: accent }}
          >
            {content.mapTitle}
          </h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            {content.mapSubtitle}
          </p>
          <div className="mt-10 max-w-full overflow-hidden rounded-[2.5rem] shadow-lg ring-1 ring-zinc-200 sm:rounded-[3rem] dark:ring-zinc-700">
            <iframe
              title={content.mapEmbedTitle}
              src={CONTACT_PAGE_MAP_EMBED_SRC}
              className="aspect-video min-h-[220px] w-full border-0 sm:aspect-[16/10] sm:min-h-[320px] md:min-h-[360px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <p className="mt-4 text-sm">
            <Link
              href={content.addressMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:underline"
              style={{ color: accent }}
            >
              {content.addressStreet} — {content.addressCity}
            </Link>
          </p>
        </section>

        <section className="mt-20 overflow-x-clip sm:mt-24 lg:mt-28">
          <h2
            className="text-center text-2xl font-bold sm:text-3xl"
            style={{ color: accent }}
          >
            {content.newcomerTitle}
          </h2>

          <div className="relative mx-auto mt-14 max-w-5xl">
            <div
              className="absolute bottom-12 left-[1.125rem] top-12 w-0.5 md:left-1/2 md:-translate-x-1/2"
              style={{ backgroundColor: accent }}
              aria-hidden
            />

            <div className="space-y-16 md:space-y-24">
              {content.newcomerBlocks.map((block, blockIndex) => {
                const slides = CONTACT_NEWCOMER_SLIDES[blockIndex];
                const triplet = slides?.length ? (
                  <NewcomerTriplet images={slides} alts={block.slideAlts} />
                ) : null;

                return (
                  <div
                    key={block.title}
                    className="relative pl-10 md:pl-0"
                  >
                    <span
                      className="absolute left-0 top-8 size-4 rounded-full border-2 border-white shadow md:left-1/2 md:top-10 md:-ml-2"
                      style={{ backgroundColor: accent }}
                      aria-hidden
                    />

                    <div
                      className={`flex flex-col gap-8 lg:flex-row lg:items-center ${
                        blockIndex % 2 === 1 ? "lg:flex-row-reverse" : ""
                      }`}
                    >
                      <div
                        className={`order-2 min-w-0 flex-1 space-y-3 lg:order-none ${
                          blockIndex % 2 === 0
                            ? "lg:text-right lg:pr-4"
                            : "lg:pl-4 lg:text-left"
                        }`}
                      >
                        <h3 className="text-xl font-bold text-neutral-900 dark:text-zinc-50">
                          {block.title}
                        </h3>
                        <p className="text-base leading-relaxed text-neutral-800 dark:text-zinc-300">
                          {block.body}
                        </p>
                      </div>
                      <div className="order-1 min-w-0 flex-1 lg:order-none">
                        {triplet}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

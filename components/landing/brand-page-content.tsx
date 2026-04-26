import Image from "next/image";
import { Archivo_Black, Inter } from "next/font/google";
import type { LucideIcon } from "lucide-react";
import {
  Apple,
  Building2,
  Camera,
  Heart,
  Leaf,
  Map,
  Mountain,
  Network,
  Palette,
  Sparkles,
  Sun,
  Tent,
  Users,
} from "lucide-react";
import { ScrollReveal } from "@/components/landing/scroll-reveal";
import {
  BRAND_MASCOT_GRID_IMAGES,
  BRAND_MASCOT_ICON,
} from "@/lib/brand-bars-assets";
import { BRAND_PAGE_HERO_IMAGE } from "@/lib/brand-page-assets";
import type { Messages } from "@/messages";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
});

type Props = {
  content: Messages["brandPage"];
};

const ALMATY_BLUE = "#0062D2";
/** Акцент заголовков в шкале типографики (как в бренд-гайде) */
const BRAND_HEADING_BLUE = "#1e56cf";
const ICON_STROKE = "#7c5c2b";
const ICON_TILE_BG = "#fefce8";
/** Тёплый «черноватый» фон-маска под превью (паттерны, мерч, мокапы) */
const PATTERN_MASK_BG = "#e5ded4";

const ICONOGRAPHY_GLYPHS: LucideIcon[] = [
  Mountain,
  Apple,
  Sun,
  Leaf,
  Building2,
  Heart,
  Users,
  Map,
  Camera,
  Palette,
  Network,
  Sparkles,
];

export function BrandPageContent({ content }: Props) {
  return (
    <div className="min-w-0 bg-white pb-16 pt-2 sm:pb-20">
      <div className="mx-auto min-w-0 max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <ScrollReveal immediate>
        <div className="relative overflow-hidden rounded-[2rem] shadow-[0_24px_60px_-12px_rgba(0,0,0,0.2)] sm:rounded-[2.25rem] lg:rounded-[2.5rem] dark:shadow-[0_24px_60px_-12px_rgba(0,0,0,0.45)]">
          <div className="relative min-h-[300px] sm:min-h-[380px] lg:min-h-[420px]">
            <Image
              src={BRAND_PAGE_HERO_IMAGE}
              alt={content.heroImageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1400px) 100vw, 1400px"
              priority
            />
            <div
              className="absolute inset-0 bg-black/55"
              aria-hidden
            />
            <div className="relative z-10 flex min-h-[300px] flex-col items-center justify-center px-6 py-16 text-center sm:min-h-[380px] sm:px-10 lg:min-h-[420px] lg:px-14">
              <h1 className="max-w-4xl text-balance break-words text-2xl font-bold uppercase leading-tight tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
                {content.heroTitle}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/95 sm:text-lg">
                {content.heroSubtitle}
              </p>
            </div>
          </div>
        </div>
        </ScrollReveal>

        <ScrollReveal delayMs={40}>
        <section className="mx-auto mt-16 max-w-3xl sm:mt-20 lg:mt-24">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
            {content.identityTitle}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-800">
            {content.identityBody}
          </p>
        </section>
        </ScrollReveal>

        <ScrollReveal delayMs={85}>
        <section className="mt-16 flex flex-col gap-10 sm:mt-20 lg:mt-24 lg:flex-row lg:items-start lg:gap-14 xl:gap-20">
          <div className="order-1 w-full lg:order-none lg:max-w-[52%] lg:flex-1">
            <div className="rounded-[1.75rem] bg-zinc-50 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] ring-1 ring-zinc-100 sm:rounded-[2rem] sm:p-10">
              <div className="flex flex-col items-center">
                <div className="relative h-[154px] w-[148px] sm:h-[180px] sm:w-[172px]">
                  <Image
                    src="/logo.svg"
                    alt={content.logoLockupAlt}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <p
                  className="mt-4 text-2xl font-bold tracking-[0.2em] text-[#DE2E06] sm:text-3xl"
                  aria-hidden
                >
                  ALMATY
                </p>
              </div>

              <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-3">
                <li className="flex flex-col items-center text-center">
                  <div
                    className="flex size-[4.5rem] items-center justify-center rounded-2xl"
                    style={{ backgroundColor: ALMATY_BLUE }}
                  >
                    <Mountain
                      className="size-9 text-white"
                      strokeWidth={2}
                      aria-hidden
                    />
                  </div>
                  <span className="mt-2 text-[11px] font-semibold uppercase tracking-wide text-[#0062D2] sm:text-xs">
                    {content.iconLabelMountains}
                  </span>
                </li>
                <li className="flex flex-col items-center text-center">
                  <div className="flex size-[4.5rem] items-center justify-center rounded-2xl bg-[#DE2E06]">
                    <Apple
                      className="size-9 text-white"
                      strokeWidth={2}
                      aria-hidden
                    />
                  </div>
                  <span className="mt-2 text-[11px] font-semibold uppercase tracking-wide text-[#0062D2] sm:text-xs">
                    {content.iconLabelApple}
                  </span>
                </li>
                <li className="flex flex-col items-center text-center">
                  <div className="flex size-[4.5rem] items-center justify-center rounded-2xl bg-[#FACC4F]">
                    <Tent
                      className="size-9 text-amber-950"
                      strokeWidth={2}
                      aria-hidden
                    />
                  </div>
                  <span className="mt-2 text-[11px] font-semibold uppercase tracking-wide text-[#0062D2] sm:text-xs">
                    {content.iconLabelYurt}
                  </span>
                </li>
                <li className="flex flex-col items-center text-center">
                  <div
                    className="flex size-[4.5rem] items-center justify-center rounded-2xl"
                    style={{ backgroundColor: ALMATY_BLUE }}
                  >
                    <span className="text-lg font-bold tracking-tight text-white">
                      ALA
                    </span>
                  </div>
                  <span className="mt-2 text-[11px] font-semibold uppercase tracking-wide text-[#0062D2] sm:text-xs">
                    {content.iconLabelAla}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="order-2 min-w-0 flex-1 space-y-4 lg:order-none">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
              {content.logoConceptTitle}
            </h2>
            {content.logoConceptParagraphs.map((p, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-neutral-800"
              >
                {p}
              </p>
            ))}
          </div>
        </section>
        </ScrollReveal>

        <ScrollReveal delayMs={110}>
        <section
          className="mt-20 sm:mt-24 lg:mt-28"
          aria-labelledby="brand-mascot-heading"
        >
          <div className="flex flex-wrap items-end gap-3 sm:items-center sm:gap-4 md:gap-5">
            <h2
              id="brand-mascot-heading"
              className="text-3xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-4xl md:text-[2.25rem] lg:text-[2.5rem] lg:leading-[1.15]"
            >
              {content.mascotTitle}
            </h2>
            <div className="relative h-14 w-14 shrink-0 sm:h-16 sm:w-16 md:h-[4.5rem] md:w-[4.5rem]">
              <Image
                src={BRAND_MASCOT_ICON}
                alt={content.mascotIconAlt}
                fill
                className="object-contain"
                sizes="72px"
              />
            </div>
          </div>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-neutral-800 sm:mt-6 sm:text-xl sm:leading-[1.6] md:max-w-4xl md:text-[1.25rem] md:leading-[1.65]">
            {content.mascotIntro}
          </p>
          <ul className="mt-8 grid list-none grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4">
            {BRAND_MASCOT_GRID_IMAGES.map((src, i) => (
              <li
                key={src}
                className="relative aspect-[4/3] overflow-hidden rounded-xl"
              >
                <Image
                  src={src}
                  alt={content.mascotImageAlts[i] ?? ""}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-neutral-800 sm:mt-10 sm:text-xl sm:leading-[1.6] md:max-w-4xl md:text-[1.25rem] md:leading-[1.65]">
            {content.mascotOutro}
          </p>
        </section>
        </ScrollReveal>

        <ScrollReveal delayMs={130}>
        <section className="mt-20 sm:mt-24 lg:mt-28">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
            {content.paletteTitle}
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {content.colors.map((c) => (
              <li
                key={c.hex}
                className="overflow-hidden rounded-2xl border border-zinc-100 bg-white"
              >
                <div
                  className="h-28 w-full sm:h-32"
                  style={{ backgroundColor: c.hex }}
                />
                <div className="space-y-2 bg-white p-5 pt-4">
                  <p className="text-base font-bold text-neutral-900">
                    {c.name}
                  </p>
                  <p className="font-mono text-sm text-neutral-700">
                    <span className="text-neutral-500">
                      {content.colorHexLabel}:{" "}
                    </span>
                    {c.hex}
                  </p>
                  <p className="font-mono text-sm text-neutral-700">
                    <span className="text-neutral-500">
                      {content.colorRgbLabel}:{" "}
                    </span>
                    {c.rgb}
                  </p>
                  <p className="text-sm leading-snug text-neutral-600">
                    {c.role}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>
        </ScrollReveal>

        <ScrollReveal delayMs={175}>
        <section className="mt-20 sm:mt-24 lg:mt-28" aria-labelledby="color-pairings-heading">
          <h2
            id="color-pairings-heading"
            className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl"
          >
            {content.colorPairingsTitle}
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
            {content.colorPairings.map((pairing, index) => (
              <li
                key={`${pairing.title}-${index}`}
                className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-[0_4px_0_rgba(0,0,0,0.25)]"
              >
                <div className="flex h-40 sm:h-44">
                  {pairing.swatches.map((swatch, swatchIdx) => (
                    <div
                      key={`${swatch}-${swatchIdx}`}
                      className="h-full flex-1"
                      style={{ backgroundColor: swatch }}
                      aria-hidden
                    />
                  ))}
                </div>
                <div className="space-y-1.5 bg-white px-7 py-5">
                  <p
                    className={`text-[1.75rem] font-bold leading-none tracking-tight ${archivoBlack.className}`}
                    style={{ color: ALMATY_BLUE }}
                  >
                    {pairing.title}
                  </p>
                  <p className="text-[1.35rem] text-neutral-800">
                    {pairing.subtitle}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>
        </ScrollReveal>

        <ScrollReveal delayMs={220}>
        <section className="mt-20 sm:mt-24 lg:mt-28" aria-labelledby="typography-overview-heading">
          <h2
            id="typography-overview-heading"
            className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl"
          >
            {content.typographyOverviewTitle}
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
            <article className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-[0_4px_0_rgba(0,0,0,0.2)] sm:p-10">
              <p className="text-sm uppercase tracking-wide text-neutral-500">
                {content.typographyOverviewPrimaryBadge}
              </p>
              <p
                className={`mt-3 text-[length:clamp(2.5rem,6.5vw,4.25rem)] leading-[0.95] tracking-tight ${archivoBlack.className}`}
                style={{ color: ALMATY_BLUE }}
              >
                Archivo
                <br />
                Black
              </p>
              <p className="mt-5 max-w-[34ch] text-[1.85rem] leading-relaxed text-neutral-800">
                {content.typographyOverviewPrimaryDescription}
              </p>
              <p className={`mt-5 text-[1.55rem] leading-relaxed text-neutral-600 ${inter.className}`}>
                Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm
                <br />
                Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
                <br />
                0123456789
              </p>
            </article>

            <article className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-[0_4px_0_rgba(0,0,0,0.2)] sm:p-10">
              <p className="text-sm uppercase tracking-wide text-neutral-500">
                {content.typographyOverviewSecondaryBadge}
              </p>
              <p
                className={`mt-3 text-[length:clamp(2.5rem,6.2vw,4.1rem)] leading-none tracking-tight ${inter.className}`}
                style={{ color: ALMATY_BLUE }}
              >
                Inter
              </p>
              <p className={`mt-5 max-w-[34ch] text-[1.85rem] leading-relaxed text-neutral-800 ${inter.className}`}>
                {content.typographyOverviewSecondaryDescription}
              </p>
              <p className={`mt-5 text-[1.55rem] leading-relaxed text-neutral-600 ${inter.className}`}>
                Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm
                <br />
                Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
                <br />
                0123456789
              </p>
              <p className={`mt-5 text-[1.35rem] text-neutral-600 ${inter.className}`}>
                {content.typographyOverviewWeightsLabel}
              </p>
              <p className={`mt-1 text-[1.35rem] font-semibold text-neutral-700 ${inter.className}`}>
                {content.typographyOverviewWeights}
              </p>
            </article>
          </div>
        </section>
        </ScrollReveal>

        <ScrollReveal delayMs={265}>
        <section className="mt-20 sm:mt-24 lg:mt-28" aria-labelledby="typography-scale-heading">
          <h2
            id="typography-scale-heading"
            className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl"
          >
            {content.typographyScaleTitle}
          </h2>
          <div className="mt-10 flex flex-col gap-10 sm:gap-12">
            {content.typographyScaleRows.map((row, index) => {
              const meta = `${row.usage} / ${row.fontName} / ${row.size}`;
              const isArchivo = row.fontName === "Archivo Black";
              const fontClass = isArchivo
                ? archivoBlack.className
                : inter.className;
              const sizeClass = (() => {
                if (row.usage === "Display")
                  return "text-[length:clamp(2.25rem,11vw,6rem)] leading-[0.95] tracking-tight";
                if (row.usage === "Headline 1")
                  return "text-[length:clamp(1.75rem,6vw,4rem)] leading-[1.05] tracking-tight";
                if (row.usage === "Headline 2")
                  return "text-[length:clamp(1.375rem,4.5vw,3rem)] leading-tight tracking-tight";
                if (row.usage === "Headline 3")
                  return "text-[length:clamp(1.125rem,3vw,2rem)] leading-snug tracking-tight";
                if (row.usage === "Body") return "text-lg leading-relaxed";
                return "text-sm leading-relaxed";
              })();

              const colorStyle =
                row.tone === "brand"
                  ? { color: BRAND_HEADING_BLUE }
                  : row.tone === "body"
                    ? { color: "#171717" }
                    : { color: "#525252" };

              return (
                <div key={index} className="flex gap-4 sm:gap-5">
                  <div
                    className="w-1 shrink-0 self-stretch rounded-full sm:w-1.5"
                    style={{ backgroundColor: row.barColor }}
                    aria-hidden
                  />
                  <div className="min-w-0 flex-1 space-y-3">
                    <p
                      className={`text-xs text-neutral-500 sm:text-sm ${inter.className}`}
                    >
                      {meta}
                    </p>
                    <p
                      className={`${fontClass} ${sizeClass} break-words ${row.usage === "Display" ? "uppercase" : ""} ${row.underline ? "underline decoration-2 underline-offset-4" : ""}`}
                      style={colorStyle}
                    >
                      {row.sample}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        </ScrollReveal>

        <ScrollReveal delayMs={310}>
        <section
          className="mt-20 sm:mt-24 lg:mt-28"
          aria-labelledby="iconography-heading"
        >
          <h2
            id="iconography-heading"
            className="text-center text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl"
          >
            {content.iconographyTitle}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-base text-neutral-600">
            {content.iconographySubtitle}
          </p>
          <ul className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 md:grid-cols-4 lg:grid-cols-6">
            {content.iconographyIcons.map((item, i) => {
              const Icon = ICONOGRAPHY_GLYPHS[i];
              if (!Icon) return null;
              return (
                <li key={i} className="flex flex-col items-center text-center">
                  <div
                    className="flex size-[4.5rem] items-center justify-center rounded-2xl sm:size-[5.25rem]"
                    style={{ backgroundColor: ICON_TILE_BG }}
                  >
                    <Icon
                      className="size-6"
                      stroke={ICON_STROKE}
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    />
                  </div>
                  <span
                    className="mt-2.5 text-xs font-semibold sm:text-[13px]"
                    style={{ color: BRAND_HEADING_BLUE }}
                  >
                    {item.label}
                  </span>
                </li>
              );
            })}
          </ul>
        </section>
        </ScrollReveal>

        <ScrollReveal delayMs={355}>
        <section
          className="mt-16 border-t border-zinc-200 pt-14 sm:mt-20 sm:pt-16 lg:mt-24 lg:pt-20"
          aria-labelledby="icon-guidelines-heading"
        >
          <h2
            id="icon-guidelines-heading"
            className={`text-left text-2xl font-black uppercase tracking-[0.08em] sm:text-3xl ${archivoBlack.className}`}
            style={{ color: BRAND_HEADING_BLUE }}
          >
            {content.iconGuidelinesTitle}
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-7 text-left sm:grid-cols-3 sm:gap-8">
            {content.iconGuidelines.map((col, i) => (
              <li key={i}>
                <p
                  className={`text-xl font-bold leading-tight sm:text-2xl ${inter.className}`}
                  style={{ color: BRAND_HEADING_BLUE }}
                >
                  {col.title}
                </p>
                <p className={`mt-2 text-lg leading-relaxed text-neutral-600 ${inter.className}`}>
                  {col.description}
                </p>
              </li>
            ))}
          </ul>
        </section>
        </ScrollReveal>

        <ScrollReveal delayMs={400}>
        <section className="mt-20 sm:mt-24 lg:mt-28" aria-labelledby="patterns-heading">
          <h2
            id="patterns-heading"
            className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl"
          >
            {content.patternsTitle}
          </h2>
          <p className="mt-3 max-w-3xl text-base text-neutral-700">
            {content.patternsSubtitle}
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            <div
              className="relative aspect-square overflow-hidden rounded-3xl"
              style={{ backgroundColor: PATTERN_MASK_BG }}
            >
              <Image
                src="/conts/p1.png"
                alt={content.patternMountainLabel}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-28 bg-gradient-to-t from-black/50 to-transparent sm:h-32"
                aria-hidden
              />
              <p className="pointer-events-none absolute bottom-5 left-5 z-10 text-lg font-bold tracking-wide text-white sm:bottom-6 sm:left-6 sm:text-[1.75rem]">
                {content.patternMountainLabel}
                </p>
              </div>

            <div
              className="relative aspect-square overflow-hidden rounded-3xl"
              style={{ backgroundColor: PATTERN_MASK_BG }}
            >
              <Image
                src="/conts/p2.png"
                alt={content.patternAlaLabel}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-28 bg-gradient-to-t from-black/50 to-transparent sm:h-32"
                aria-hidden
              />
              <p className="pointer-events-none absolute bottom-5 left-5 z-10 text-lg font-bold tracking-wide text-white sm:bottom-6 sm:left-6 sm:text-[1.75rem]">
                {content.patternAlaLabel}
              </p>
            </div>
          </div>
        </section>
        </ScrollReveal>

        <ScrollReveal delayMs={445}>
        <section className="mt-20 sm:mt-24 lg:mt-28" aria-labelledby="merch-heading">
          <h2
            id="merch-heading"
            className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl"
          >
            {content.merchTitle}
          </h2>
          <p className="mt-3 max-w-3xl text-base text-neutral-700">
            {content.merchSubtitle}
          </p>

          <ul className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
            {content.merchItems.map((item, index) => (
              <li
                key={`${item.name}-${index}`}
                className="flex flex-col items-center gap-3"
              >
                <div
                  className="relative aspect-square w-full overflow-hidden rounded-3xl"
                  style={{ backgroundColor: PATTERN_MASK_BG }}
                >
                  <Image
                    src={item.imageSrc}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <p
                  className={`text-center text-sm font-bold uppercase tracking-[0.14em] sm:text-base ${inter.className}`}
                  style={{ color: BRAND_HEADING_BLUE }}
                >
                  {item.name}
                </p>
              </li>
            ))}
          </ul>
        </section>
        </ScrollReveal>

        <ScrollReveal delayMs={490}>
        <section className="mt-20 sm:mt-24 lg:mt-28" aria-labelledby="mockups-heading">
          <h2
            id="mockups-heading"
            className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl"
          >
            {content.mockupsTitle}
          </h2>
          <p className="mt-3 max-w-3xl text-base text-neutral-700">
            {content.mockupsSubtitle}
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {content.mockupItems.map((item, i) => (
              <li
                key={`${item.kind}-${i}`}
                className="overflow-hidden rounded-3xl"
              >
                <div
                  className="relative aspect-[16/10]"
                  style={{ backgroundColor: PATTERN_MASK_BG }}
                >
                  <Image
                    src={item.imageSrc}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </li>
            ))}
          </ul>
        </section>
        </ScrollReveal>
      </div>
    </div>
  );
}

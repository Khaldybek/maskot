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
const PATTERN_BLUE = "#0f62c9";

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

const MERCH_CARD_BG_BY_KIND: Record<string, string> = {
  bag: "linear-gradient(135deg,#f8fafc 0%,#e5e7eb 100%)",
  shirt: "linear-gradient(135deg,#f3f4f6 0%,#d4d4d8 100%)",
  cap: "linear-gradient(135deg,#f5f5f5 0%,#d4d4d4 100%)",
  mug: "linear-gradient(135deg,#f8fafc 0%,#e2e8f0 100%)",
  thermos: "linear-gradient(135deg,#f1f5f9 0%,#cbd5e1 100%)",
  case: "linear-gradient(135deg,#f8fafc 0%,#e5e7eb 100%)",
};

const MOCKUP_CARD_BG_BY_KIND: Record<string, string> = {
  metro: "linear-gradient(140deg,#1f2937 0%,#4b5563 45%,#111827 100%)",
  station: "linear-gradient(140deg,#d1d5db 0%,#9ca3af 55%,#6b7280 100%)",
  billboard: "linear-gradient(140deg,#0b1020 0%,#1e293b 55%,#334155 100%)",
  "bus-stop": "linear-gradient(140deg,#3f2b1e 0%,#7c4a2c 45%,#d97706 100%)",
};

export function BrandPageContent({ content }: Props) {
  return (
    <div className="min-w-0 bg-white pb-16 pt-2 sm:pb-20">
      <div className="mx-auto min-w-0 max-w-[1400px] px-4 sm:px-6 lg:px-8">
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

        <section className="mx-auto mt-16 max-w-3xl sm:mt-20 lg:mt-24">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
            {content.identityTitle}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-800">
            {content.identityBody}
          </p>
        </section>

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
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-[#0e5ab8]/30 bg-[#0f62c9]">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(135deg, #0f62c9 0 34px, #ffffff 34px 39px, #0f62c9 39px 74px), repeating-linear-gradient(45deg, transparent 0 70px, rgba(255,255,255,0.95) 70px 75px, transparent 75px 145px)",
                }}
                aria-hidden
              />
              <p className="absolute bottom-6 left-6 text-lg font-bold tracking-wide text-white/95 sm:text-[1.75rem]">
                {content.patternMountainLabel}
              </p>
            </div>

            <div className="relative aspect-square overflow-hidden rounded-3xl border border-[#0e5ab8]/30 bg-white">
              <div
                className="absolute inset-0"
                style={{
                  backgroundColor: PATTERN_BLUE,
                  backgroundImage:
                    "radial-gradient(circle at 0 0, #f3f4f6 0 41%, transparent 42%), radial-gradient(circle at 100% 100%, #f3f4f6 0 41%, transparent 42%), linear-gradient(90deg, #f3f4f6 0 26%, transparent 26% 38%, #f3f4f6 38% 64%, transparent 64% 76%, #f3f4f6 76% 100%)",
                  backgroundSize: "50% 50%, 50% 50%, 100% 100%",
                  backgroundPosition: "0 0, 100% 100%, 0 0",
                }}
                aria-hidden
              />
              <p className="absolute bottom-6 left-6 text-lg font-bold tracking-wide text-white/95 sm:text-[1.75rem]">
                {content.patternAlaLabel}
              </p>
            </div>
          </div>
        </section>

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

          <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {content.merchItems.map((item, index) => (
              <li key={`${item.name}-${index}`} className="text-center">
                <div
                  className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-zinc-200"
                  style={{
                    background:
                      MERCH_CARD_BG_BY_KIND[item.kind] ??
                      "linear-gradient(135deg,#f8fafc 0%,#e5e7eb 100%)",
                  }}
                >
                  {item.kind === "bag" || item.kind === "case" ? (
                    <div
                      className="absolute inset-0 opacity-90"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 0 0, #ffffff 0 38%, transparent 39%), radial-gradient(circle at 100% 100%, #ffffff 0 38%, transparent 39%), linear-gradient(90deg, transparent 0 8%, #ffffff 8% 19%, transparent 19% 32%, #ffffff 32% 43%, transparent 43% 56%, #ffffff 56% 67%, transparent 67% 80%, #ffffff 80% 91%, transparent 91% 100%)",
                        backgroundSize: "50% 50%, 50% 50%, 100% 100%",
                        backgroundPosition: "0 0, 100% 100%, 0 0",
                      }}
                      aria-hidden
                    />
                  ) : null}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="rounded-full bg-white/85 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-neutral-700">
                      {item.kind}
                    </span>
                  </div>
                </div>
                <p
                  className="mt-3 text-xl font-bold tracking-tight"
                  style={{ color: BRAND_HEADING_BLUE }}
                >
                  {item.name}
                </p>
              </li>
            ))}
          </ul>
        </section>

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
              <li key={`${item.kind}-${i}`} className="overflow-hidden rounded-3xl border border-zinc-200">
                <div
                  className="relative aspect-[16/10]"
                  style={{
                    background:
                      MOCKUP_CARD_BG_BY_KIND[item.kind] ??
                      "linear-gradient(140deg,#9ca3af 0%,#6b7280 100%)",
                  }}
                >
                  <div className="absolute inset-x-[10%] top-[16%] h-[62%] rounded-md bg-white/95 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                    <div className="absolute left-[6%] top-[10%] h-[34%] w-[42%] rounded-sm bg-[#f8fafc]">
                      <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,#de2e06_0_14%,transparent_15%),linear-gradient(135deg,#f8fafc_0%,#e2e8f0_100%)]" />
                    </div>
                    <div className="absolute right-[6%] top-[10%] h-[72%] w-[48%] rounded-sm bg-[linear-gradient(135deg,#de2e06_0%,#7f1d1d_100%)] opacity-75" />
                    <div className="absolute bottom-[10%] left-[6%] h-2 w-[28%] rounded bg-[#de2e06]/80" />
                    <div className="absolute bottom-[10%] left-[38%] h-2 w-[18%] rounded bg-[#0062d2]/70" />
                  </div>
                  {(item.kind === "metro" || item.kind === "station") && (
                    <div className="absolute inset-x-0 top-[6%] h-2 bg-black/20" aria-hidden />
                  )}
                  {item.kind === "billboard" && (
                    <div className="absolute inset-x-[12%] bottom-[8%] h-4 rounded bg-black/45" aria-hidden />
                  )}
                  {item.kind === "bus-stop" && (
                    <div className="absolute right-[7%] top-[8%] h-[84%] w-[2px] bg-white/45" aria-hidden />
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

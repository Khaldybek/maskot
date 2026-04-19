import Image from "next/image";
import { Archivo_Black, Inter } from "next/font/google";
import { Apple, Mountain, Tent } from "lucide-react";
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
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-zinc-50 sm:text-3xl">
            {content.identityTitle}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-800 dark:text-zinc-300">
            {content.identityBody}
          </p>
        </section>

        <section className="mt-16 flex flex-col gap-10 sm:mt-20 lg:mt-24 lg:flex-row lg:items-start lg:gap-14 xl:gap-20">
          <div className="order-1 w-full lg:order-none lg:max-w-[52%] lg:flex-1">
            <div className="rounded-[1.75rem] bg-zinc-50 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-800 sm:rounded-[2rem] sm:p-10">
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
                  <span className="mt-2 text-[11px] font-semibold uppercase tracking-wide text-[#0062D2] dark:text-sky-400 sm:text-xs">
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
                  <span className="mt-2 text-[11px] font-semibold uppercase tracking-wide text-[#0062D2] dark:text-sky-400 sm:text-xs">
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
                  <span className="mt-2 text-[11px] font-semibold uppercase tracking-wide text-[#0062D2] dark:text-sky-400 sm:text-xs">
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
                  <span className="mt-2 text-[11px] font-semibold uppercase tracking-wide text-[#0062D2] dark:text-sky-400 sm:text-xs">
                    {content.iconLabelAla}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="order-2 min-w-0 flex-1 space-y-4 lg:order-none">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-zinc-50 sm:text-3xl">
              {content.logoConceptTitle}
            </h2>
            {content.logoConceptParagraphs.map((p, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-neutral-800 dark:text-zinc-300"
              >
                {p}
              </p>
            ))}
          </div>
        </section>

        <section className="mt-20 sm:mt-24 lg:mt-28">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-zinc-50 sm:text-3xl">
            {content.paletteTitle}
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {content.colors.map((c) => (
              <li
                key={c.hex}
                className="overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-800"
              >
                <div
                  className="h-28 w-full sm:h-32"
                  style={{ backgroundColor: c.hex }}
                />
                <div className="space-y-2 p-5">
                  <p className="text-base font-bold text-neutral-900 dark:text-zinc-50">
                    {c.name}
                  </p>
                  <p className="font-mono text-sm text-neutral-700 dark:text-zinc-300">
                    <span className="text-neutral-500 dark:text-zinc-500">
                      {content.colorHexLabel}:{" "}
                    </span>
                    {c.hex}
                  </p>
                  <p className="font-mono text-sm text-neutral-700 dark:text-zinc-300">
                    <span className="text-neutral-500 dark:text-zinc-500">
                      {content.colorRgbLabel}:{" "}
                    </span>
                    {c.rgb}
                  </p>
                  <p className="text-sm leading-snug text-neutral-600 dark:text-zinc-400">
                    {c.role}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-20 sm:mt-24 lg:mt-28">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-zinc-50 sm:text-3xl">
            {content.typographyTitle}
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
            <div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-800 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                {content.typographyPrimaryBadge}
              </p>
              <p
                className={`mt-4 text-3xl sm:text-4xl ${archivoBlack.className}`}
                style={{ color: ALMATY_BLUE }}
              >
                Archivo Black
              </p>
              <p className="mt-4 text-sm leading-relaxed text-neutral-700 dark:text-zinc-300">
                {content.typographyPrimaryDescription}
              </p>
              <div className="mt-6 max-w-full overflow-x-auto rounded-lg">
                <p
                  className={`min-w-0 break-words text-xs leading-relaxed text-neutral-800 dark:text-zinc-300 sm:text-sm ${archivoBlack.className}`}
                >
                  {content.fontPreviewSample}
                </p>
              </div>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-800 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                {content.typographySecondaryBadge}
              </p>
              <p
                className={`mt-4 text-3xl font-bold sm:text-4xl ${inter.className}`}
                style={{ color: ALMATY_BLUE }}
              >
                Inter
              </p>
              <p className="mt-4 text-sm leading-relaxed text-neutral-700 dark:text-zinc-300">
                {content.typographySecondaryDescription}
              </p>
              <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">
                {content.typographySecondaryWeights}
              </p>
              <div className="mt-6 max-w-full overflow-x-auto rounded-lg">
                <p
                  className={`min-w-0 break-words text-xs font-normal leading-relaxed text-neutral-800 dark:text-zinc-300 sm:text-sm ${inter.className}`}
                >
                  {content.fontPreviewSample}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

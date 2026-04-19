"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

export type HeroSliderSlide = {
  title: string;
  description: string;
  alt: string;
};

type Props = {
  slides: HeroSliderSlide[];
  images: readonly string[];
  moreDetailsLabel: string;
  detailsHref: string;
  navAriaLabel: string;
  slideButtonAriaTemplate: string;
};

const INTERVAL_MS = 6000;

/**
 * Короткий нижний градиент: фото видно почти на всей высоте,
 * затем быстрый переход в тёмную зону для текста и точек — без отдельного «блока».
 */
const SLIDER_BOTTOM_GRADIENT =
  "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 48%, rgba(0,0,0,0.25) 58%, rgba(0,0,0,0.65) 72%, rgba(0,0,0,0.92) 88%, rgba(0,0,0,0.96) 100%)";

function ariaSlide(template: string, n: number, total: number) {
  return template.replaceAll("{n}", String(n)).replaceAll("{total}", String(total));
}

export function HeroSlider({
  slides,
  images,
  moreDetailsLabel,
  detailsHref,
  navAriaLabel,
  slideButtonAriaTemplate,
}: Props) {
  const [active, setActive] = useState(0);
  const count = slides.length;

  const go = useCallback(
    (i: number) => {
      setActive(((i % count) + count) % count);
    },
    [count],
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = window.setInterval(() => {
      setActive((a) => (a + 1) % count);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [count]);

  const current = slides[active];
  const src = images[active] ?? images[0];

  return (
    <div className="relative flex h-full min-h-[380px] min-w-0 flex-1 flex-col overflow-hidden rounded-[2rem] bg-zinc-300 shadow-xl sm:min-h-[420px] lg:min-h-0">
      <div className="relative h-full min-h-0 flex-1">
        <Image
          key={src}
          src={src}
          alt={current.alt}
          fill
          className="object-cover transition-opacity duration-500"
          sizes="(max-width: 1024px) 100vw, 40vw"
          priority={active === 0}
        />

        <div
          className="hero-slider-vignette pointer-events-none absolute inset-0"
          style={{ background: SLIDER_BOTTOM_GRADIENT }}
          aria-hidden
        />

        <div className="absolute inset-0 z-10 flex flex-col justify-end">
          <div className="px-5 pb-2 pt-8 sm:px-7 sm:pb-3 sm:pt-10 lg:px-8">
            <h2 className="text-balance break-words text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-[1.85rem] lg:leading-tight xl:text-4xl">
              {current.title}
            </h2>
            <p className="mt-2 max-w-md text-sm font-normal leading-relaxed text-white/95 sm:text-base">
              {current.description}
            </p>
            <Link
              href={detailsHref}
              className="mt-4 inline-flex w-fit items-center justify-center rounded-full border-2 border-[#DE2E06] bg-black/60 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-black/80 sm:mt-5 sm:px-7 sm:py-3 sm:text-base"
            >
              {moreDetailsLabel}
            </Link>
          </div>

          <div
            className="flex justify-center gap-2 px-4 pb-5 pt-3 sm:gap-2.5 sm:pb-6 sm:pt-4"
            role="tablist"
            aria-label={navAriaLabel}
          >
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={ariaSlide(slideButtonAriaTemplate, i + 1, count)}
                className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-full p-2 transition-opacity hover:opacity-90"
                onClick={() => go(i)}
              >
                <span
                  className={`block rounded-full transition-all duration-300 ease-out ${
                    i === active
                      ? "h-2 w-8 bg-white"
                      : "h-2 w-2 bg-white/40 hover:bg-white/60"
                  }`}
                  aria-hidden
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

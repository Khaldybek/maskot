"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  images: readonly string[];
  alts: string[];
  prevLabel: string;
  nextLabel: string;
  dotAriaTemplate: string;
};

const INTERVAL_MS = 4800;

const crossfadeClass =
  "transition-opacity duration-[800ms] ease-in-out motion-reduce:transition-none";

function ariaDot(template: string, index: number, total: number) {
  return template.replaceAll("{n}", String(index + 1)).replaceAll("{total}", String(total));
}

export function AboutAlmatyStorySlider({
  images,
  alts,
  prevLabel,
  nextLabel,
  dotAriaTemplate,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(false);
  const [hoverPaused, setHoverPaused] = useState(false);
  const [autoplayEpoch, setAutoplayEpoch] = useState(0);
  const count = images.length;
  const safe = count > 0 ? active % count : 0;

  const go = useCallback(
    (delta: number) => {
      setActive((a) => (a + delta + count) % count);
      setAutoplayEpoch((e) => e + 1);
    },
    [count],
  );

  const goTo = useCallback(
    (index: number) => {
      setActive(index);
      setAutoplayEpoch((e) => e + 1);
    },
    [],
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { root: null, threshold: 0.25 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (count <= 1 || !inView || hoverPaused) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(() => {
      setActive((a) => (a + 1) % count);
    }, INTERVAL_MS);

    return () => window.clearInterval(id);
  }, [count, inView, hoverPaused, autoplayEpoch]);

  if (count === 0) return null;

  return (
    <div
      ref={containerRef}
      className="relative min-w-0 w-full max-w-full"
      onMouseEnter={() => setHoverPaused(true)}
      onMouseLeave={() => setHoverPaused(false)}
      onFocusCapture={() => setHoverPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setHoverPaused(false);
        }
      }}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.75rem] bg-zinc-200 sm:aspect-[3/2] sm:rounded-[2rem] dark:bg-zinc-800">
        {images.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={alts[i] ?? ""}
            fill
            className={`object-cover ${crossfadeClass} ${
              i === safe ? "opacity-100" : "opacity-0"
            }`}
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={i === 0}
          />
        ))}
      </div>

      {count > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label={prevLabel}
            className="absolute left-1 top-1/2 z-10 flex min-h-11 min-w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition hover:bg-black/60 sm:left-3"
          >
            <ChevronLeft className="size-6" strokeWidth={2} />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label={nextLabel}
            className="absolute right-1 top-1/2 z-10 flex min-h-11 min-w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition hover:bg-black/60 sm:right-3"
          >
            <ChevronRight className="size-6" strokeWidth={2} />
          </button>
          <div
            className="absolute bottom-4 left-0 right-0 z-10 flex justify-center gap-2"
            role="tablist"
          >
            {images.map((_, k) => (
              <button
                key={k}
                type="button"
                role="tab"
                aria-selected={k === safe}
                aria-label={ariaDot(dotAriaTemplate, k, count)}
                onClick={() => goTo(k)}
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full p-0"
              >
                <span
                  className={`block h-2 rounded-full transition-all duration-500 ease-in-out motion-reduce:transition-none ${
                    k === safe
                      ? "w-6 bg-white"
                      : "w-2 bg-white/50 hover:bg-white/75"
                  }`}
                  aria-hidden
                />
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useState } from "react";

type Props = {
  images: readonly string[];
  alts: string[];
  prevLabel: string;
  nextLabel: string;
  dotAriaTemplate: string;
};

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
  const [active, setActive] = useState(0);
  const count = images.length;
  const safe = count > 0 ? active % count : 0;

  const go = useCallback(
    (delta: number) => {
      setActive((a) => (a + delta + count) % count);
    },
    [count],
  );

  if (count === 0) return null;

  return (
    <div className="relative min-w-0 w-full max-w-full">
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[1.75rem] bg-zinc-200 sm:rounded-[2rem] dark:bg-zinc-800">
        <Image
          key={images[safe]}
          src={images[safe]}
          alt={alts[safe] ?? ""}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority={false}
        />
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
                onClick={() => setActive(k)}
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full p-0"
              >
                <span
                  className={`block h-2 rounded-full transition-all ${
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

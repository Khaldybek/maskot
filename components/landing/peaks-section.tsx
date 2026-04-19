import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Info } from "lucide-react";
import type { Messages } from "@/messages";
import { PEAKS_CARD_IMAGES } from "@/lib/peaks-assets";

type Props = {
  peaks: Messages["peaks"];
  localePrefix: string;
};

export function PeaksSection({ peaks, localePrefix }: Props) {
  const seeAllHref = `${localePrefix}/news`;
  const cardHref = seeAllHref;

  return (
    <section className="overflow-x-clip bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto min-w-0 max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl lg:text-4xl lg:leading-tight dark:text-zinc-50">
              {peaks.title}
            </h2>
            <p className="mt-2 text-base text-neutral-600 dark:text-zinc-400">
              {peaks.subtitle}
            </p>
          </div>
          <Link
            href={seeAllHref}
            className="inline-flex shrink-0 items-center gap-0.5 self-end text-sm font-semibold text-[#DE2E06] transition hover:underline sm:self-start sm:pt-1"
          >
            <span>{peaks.seeAll}</span>
            <ChevronRight className="size-4" strokeWidth={2.25} aria-hidden />
          </Link>
        </div>

        <ul className="mt-8 grid gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {peaks.cards.map((card, index) => (
            <li key={card.title}>
              <article className="flex h-full flex-col">
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-zinc-200 dark:bg-zinc-800">
                  <Image
                    src={PEAKS_CARD_IMAGES[index] ?? PEAKS_CARD_IMAGES[0]}
                    alt={card.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"
                    aria-hidden
                  />
                  <p className="absolute bottom-4 left-4 right-4 text-base font-semibold leading-snug text-white drop-shadow-sm sm:bottom-5 sm:left-5 sm:right-5">
                    {card.imageLabel}
                  </p>
                </div>

                <div className="flex flex-1 flex-col pt-5 sm:pt-6">
                  <h3 className="text-lg font-bold text-[#DE2E06] sm:text-xl">
                    {card.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-800 dark:text-zinc-300 sm:text-[15px]">
                    {card.description}
                  </p>
                  <Link
                    href={cardHref}
                    className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-[#DE2E06] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#c72805]"
                  >
                    <Info className="size-4 shrink-0 text-white" strokeWidth={2} />
                    {peaks.moreDetails}
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

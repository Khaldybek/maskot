import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { Messages } from "@/messages";
import { NEWS_PREVIEW_IMAGES } from "@/lib/news-preview-assets";

type Props = {
  news: Messages["newsPreview"];
  localePrefix: string;
};

export function NewsPreviewSection({ news, localePrefix }: Props) {
  const newsHref = `${localePrefix}/news`;

  return (
    <section className="overflow-x-clip bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto min-w-0 max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl lg:leading-[1.1]">
              {news.title}
            </h2>
            <p className="mt-3 max-w-2xl text-lg leading-relaxed text-neutral-600 sm:text-xl">
              {news.subtitle}
            </p>
          </div>
          <Link
            href={newsHref}
            className="inline-flex shrink-0 items-center gap-0.5 self-end text-sm font-semibold text-[#DE2E06] transition hover:underline sm:self-start sm:pt-1"
          >
            <span>{news.seeAll}</span>
            <ChevronRight className="size-4" strokeWidth={2.25} aria-hidden />
          </Link>
        </div>

        <ul className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-6">
          {news.items.map((item, index) => (
            <li key={item.headline}>
              <Link
                href={newsHref}
                className="group block outline-none focus-visible:ring-2 focus-visible:ring-[#DE2E06] focus-visible:ring-offset-2"
              >
                <article>
                  <div className="relative aspect-[3/2] overflow-hidden rounded-[20px] bg-zinc-200 dark:bg-zinc-800">
                    <Image
                      src={NEWS_PREVIEW_IMAGES[index] ?? NEWS_PREVIEW_IMAGES[0]}
                      alt={item.alt}
                      fill
                      className="object-cover transition duration-300 ease-out group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <time
                    dateTime={
                      index === 0
                        ? "2026-04-12"
                        : index === 1
                          ? "2026-04-21"
                          : "2026-04-10"
                    }
                    className="mt-4 block text-sm font-normal text-zinc-500"
                  >
                    {item.date}
                  </time>
                  <h3 className="mt-2 text-base font-bold leading-snug text-neutral-900 transition group-hover:text-[#DE2E06] sm:text-[17px]">
                    {item.headline}
                  </h3>
                </article>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

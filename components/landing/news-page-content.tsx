"use client";

import Image from "next/image";
import { Calendar, ChevronRight, Search } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import type { Messages } from "@/messages";
import {
  NEWS_PAGE_ARTICLE_IMAGES,
  NEWS_PAGE_HERO_IMAGE,
  NEWS_PAGE_NEWSLETTER_BG,
} from "@/lib/news-page-assets";

type Props = {
  content: Messages["newsPage"];
};

const FEATURED_COUNT = 2;
const LOAD_STEP = 6;

export function NewsPageContent({ content }: Props) {
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");
  const [visibleAllCount, setVisibleAllCount] = useState(LOAD_STEP);
  const [email, setEmail] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return content.articles.filter((article) => {
      if (category !== "all" && article.categoryId !== category) return false;
      if (!q) return true;
      const hay = `${article.title} ${article.excerpt}`.toLowerCase();
      return hay.includes(q);
    });
  }, [content.articles, category, query]);

  useEffect(() => {
    queueMicrotask(() => setVisibleAllCount(LOAD_STEP));
  }, [category, query]);

  const featuredItems = filtered.slice(0, FEATURED_COUNT);
  const allNewsItems = filtered.slice(FEATURED_COUNT);
  const visibleAllNews = allNewsItems.slice(0, visibleAllCount);
  const canLoadMore = visibleAllCount < allNewsItems.length;

  const categoryLabel = (categoryId: string) =>
    content.categories.find((c) => c.id === categoryId)?.label ?? categoryId;

  const allNewsCountText = content.newsCountLabel.replace(
    "{n}",
    String(allNewsItems.length),
  );

  function articleImage(article: (typeof content.articles)[number]) {
    const imageIndex = content.articles.indexOf(article);
    return (
      NEWS_PAGE_ARTICLE_IMAGES[imageIndex] ?? NEWS_PAGE_ARTICLE_IMAGES[0]
    );
  }

  return (
    <div className="min-w-0 bg-white pb-16 pt-2 sm:pb-20">
      <div className="mx-auto min-w-0 max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_60px_-12px_rgba(0,0,0,0.22)] sm:rounded-[2.25rem] lg:rounded-[2.5rem] dark:bg-zinc-900 dark:shadow-[0_24px_60px_-12px_rgba(0,0,0,0.45)]">
          <div className="relative min-h-[300px] sm:min-h-[380px] lg:min-h-[420px]">
            <Image
              src={NEWS_PAGE_HERO_IMAGE}
              alt={content.heroImageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1400px) 100vw, 1400px"
              priority
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-black/78 via-black/48 to-black/18"
              aria-hidden
            />

            <div className="relative z-10 flex min-h-[300px] flex-col justify-end px-4 pb-8 pt-16 sm:min-h-[380px] sm:justify-center sm:px-10 sm:pb-10 sm:pt-12 lg:min-h-[420px] lg:px-14 lg:pb-12">
              <h1 className="max-w-3xl text-balance break-words text-2xl font-bold uppercase leading-tight tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
                {content.heroTitle}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/95 sm:text-lg">
                {content.heroSubtitle}
              </p>

              <div className="relative mt-8 max-w-xl">
                <Search
                  className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-zinc-400"
                  strokeWidth={2}
                  aria-hidden
                />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={content.searchPlaceholder}
                  aria-label={content.searchAriaLabel}
                  className="w-full rounded-full border-2 border-transparent bg-white py-3.5 pl-12 pr-5 text-base text-neutral-900 shadow-sm outline-none ring-0 placeholder:text-zinc-400 focus:border-[#DE2E06] focus:ring-4 focus:ring-[#DE2E06]/25 dark:bg-zinc-100"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="mt-8 flex flex-wrap justify-center gap-2 sm:mt-10 sm:justify-start"
          role="toolbar"
          aria-label={content.categoriesToolbarAria}
        >
          {content.categories.map((cat) => {
            const active = category === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setCategory(cat.id)}
                aria-pressed={active}
                className={`min-h-11 rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DE2E06] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-950 sm:min-h-0 ${
                  active
                    ? "bg-[#DE2E06] text-white shadow-sm"
                    : "border border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {filtered.length === 0 ? (
          <p className="mt-12 text-center text-base text-neutral-600 dark:text-zinc-400">
            {content.emptyFiltered}
          </p>
        ) : (
          <>
            <h2 className="mt-12 text-2xl font-bold tracking-tight text-neutral-900 dark:text-zinc-50 sm:text-3xl lg:mt-16">
              {content.featuredTitle}
            </h2>

            <ul className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
              {featuredItems.map((article) => (
                <li key={`${article.dateIso}-${article.title}`}>
                  <article className="group relative flex min-h-[300px] flex-col justify-end overflow-hidden rounded-[2rem] bg-zinc-200 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.15)] sm:min-h-[340px] dark:bg-zinc-800 dark:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.4)]">
                    <Image
                      src={articleImage(article)}
                      alt={article.imageAlt}
                      fill
                      className="object-cover transition duration-500 ease-out group-hover:scale-[1.04]"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10"
                      aria-hidden
                    />
                    <div className="relative z-10 flex flex-col p-6 sm:p-8">
                      <span className="w-fit rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-neutral-900 shadow-sm">
                        {categoryLabel(article.categoryId)}
                      </span>
                      <div className="mt-5 flex items-center gap-2 text-sm font-medium text-white/95">
                        <Calendar
                          className="size-4 shrink-0"
                          strokeWidth={2}
                          aria-hidden
                        />
                        <time dateTime={article.dateIso}>{article.date}</time>
                      </div>
                      <h3 className="mt-3 text-xl font-bold leading-snug text-white sm:text-2xl">
                        {article.title}
                      </h3>
                      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-white/92">
                        {article.excerpt}
                      </p>
                    </div>
                  </article>
                </li>
              ))}
            </ul>

            {allNewsItems.length > 0 && (
              <>
                <div className="mt-16 sm:mt-20">
                  <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-zinc-50 sm:text-3xl">
                    {content.allNewsTitle}
                  </h2>
                  <p className="mt-2 text-base text-zinc-500 dark:text-zinc-400">
                    {allNewsCountText}
                  </p>
                </div>

                <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                  {visibleAllNews.map((article) => (
                    <li key={`all-${article.dateIso}-${article.title}`}>
                      <article className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] ring-1 ring-zinc-100 transition hover:shadow-[0_16px_40px_-8px_rgba(0,0,0,0.12)] dark:bg-zinc-900 dark:ring-zinc-800">
                        <div className="relative aspect-[16/10] overflow-hidden bg-zinc-200 dark:bg-zinc-800">
                          <Image
                            src={articleImage(article)}
                            alt={article.imageAlt}
                            fill
                            className="object-cover transition duration-500 ease-out group-hover:scale-[1.05]"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-neutral-900 shadow-sm backdrop-blur-sm dark:bg-white/95">
                            {categoryLabel(article.categoryId)}
                          </span>
                        </div>
                        <div className="flex flex-1 flex-col p-5">
                          <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                            <Calendar
                              className="size-4 shrink-0"
                              strokeWidth={2}
                              aria-hidden
                            />
                            <time dateTime={article.dateIso}>
                              {article.date}
                            </time>
                          </div>
                          <h3 className="mt-3 text-lg font-bold leading-snug text-neutral-900 dark:text-zinc-50">
                            {article.title}
                          </h3>
                          <p className="mt-2 flex-1 line-clamp-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                            {article.excerpt}
                          </p>
                          <div className="mt-5 flex justify-end">
                            <a
                              href="#"
                              className="inline-flex items-center gap-1 text-sm font-semibold text-[#DE2E06] transition hover:underline"
                              onClick={(e) => e.preventDefault()}
                            >
                              {content.readMore}
                              <ChevronRight
                                className="size-4"
                                strokeWidth={2.5}
                                aria-hidden
                              />
                            </a>
                          </div>
                        </div>
                      </article>
                    </li>
                  ))}
                </ul>

                {canLoadMore && (
                  <div className="mt-10 flex justify-center sm:mt-12">
                    <button
                      type="button"
                      onClick={() =>
                        setVisibleAllCount((n) => n + LOAD_STEP)
                      }
                      className="rounded-full bg-[#DE2E06] px-10 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#c72805] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DE2E06] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-950"
                    >
                      {content.loadMore}
                    </button>
                  </div>
                )}
              </>
            )}
          </>
        )}
      </div>

      <div className="mx-auto mt-16 min-w-0 max-w-[1400px] px-4 sm:mt-20 sm:px-6 lg:px-8">
        <section className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.25rem]">
          <div className="relative min-h-[320px] sm:min-h-[360px]">
            <Image
              src={NEWS_PAGE_NEWSLETTER_BG}
              alt={content.newsletterImageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1400px) 100vw, 1400px"
            />
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"
              aria-hidden
            />
            <div className="relative z-10 flex min-h-[320px] flex-col items-center justify-center px-6 py-12 text-center sm:min-h-[360px] sm:px-10 sm:py-14">
              <h2 className="max-w-2xl text-2xl font-bold text-white sm:text-3xl">
                {content.newsletterTitle}
              </h2>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-white/90">
                {content.newsletterSubtitle}
              </p>
              <form
                className="mt-8 flex w-full max-w-lg flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-0"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <label className="sr-only" htmlFor="newsletter-email">
                  {content.newsletterEmailAria}
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  autoComplete="email"
                  placeholder={content.newsletterPlaceholder}
                  aria-label={content.newsletterEmailAria}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="min-h-12 flex-1 rounded-2xl border-0 bg-white px-4 py-3 text-neutral-900 shadow-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#DE2E06] sm:rounded-l-2xl sm:rounded-r-none sm:py-3.5"
                />
                <button
                  type="submit"
                  className="min-h-12 shrink-0 rounded-2xl bg-[#DE2E06] px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#c72805] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/50 sm:rounded-l-none sm:rounded-r-2xl"
                >
                  {content.newsletterSubmit}
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

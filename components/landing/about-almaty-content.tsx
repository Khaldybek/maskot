import Image from "next/image";
import { Calendar, MapPin, Mountain, Users } from "lucide-react";
import { AboutAlmatyStorySlider } from "@/components/landing/about-almaty-story-slider";
import {
  ABOUT_ALMATY_HERO_IMAGE,
  ABOUT_ALMATY_STORY_SLIDES,
} from "@/lib/about-almaty-assets";
import type { Messages } from "@/messages";

const icons = [MapPin, Users, Calendar, Mountain] as const;

type Props = {
  content: Messages["aboutAlmatyPage"];
};

export function AboutAlmatyContent({ content }: Props) {
  const blocks = [
    content.geography,
    content.population,
    content.history,
    content.nature,
  ] as const;

  return (
    <div className="min-w-0 bg-white pb-16 pt-2 sm:pb-20">
      <div className="mx-auto min-w-0 max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="relative min-h-[280px] overflow-hidden rounded-[2rem] sm:min-h-[360px] sm:rounded-[2.25rem] lg:min-h-[420px] lg:rounded-[2.5rem]">
            <Image
              src={ABOUT_ALMATY_HERO_IMAGE}
              alt={content.heroImageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1400px) 100vw, 1400px"
              priority
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/15"
              aria-hidden
            />

            <div className="relative z-10 flex min-h-[280px] flex-col justify-end px-4 pb-10 pt-16 sm:min-h-[360px] sm:justify-center sm:px-10 sm:pb-12 sm:pt-12 lg:min-h-[420px] lg:px-14 lg:pb-14">
              <h1 className="max-w-3xl text-balance break-words text-2xl font-bold uppercase leading-tight tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
                {content.heroTitle}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/95 sm:text-lg">
                {content.heroSubtitle}
              </p>
            </div>
          </div>

          <div className="relative z-20 -mt-14 px-0 sm:-mt-20 lg:-mt-24">
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
              {blocks.map((block, i) => {
                const Icon = icons[i];
                return (
                  <li key={block.title}>
                    <article className="h-full rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-800">
                      <div className="flex size-12 items-center justify-center rounded-full bg-rose-50 text-[#DE2E06] dark:bg-rose-950/50">
                        <Icon className="size-6" strokeWidth={1.75} aria-hidden />
                      </div>
                      <h2 className="mt-4 text-lg font-bold text-neutral-900 dark:text-zinc-50">
                        {block.title}
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-zinc-400">
                        {block.description}
                      </p>
                    </article>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-16 space-y-16 sm:mt-20 sm:space-y-20 lg:mt-24 lg:space-y-24">
          {content.storyBlocks.map((block, blockIndex) => {
            const slides = ABOUT_ALMATY_STORY_SLIDES[blockIndex];
            if (!slides?.length) return null;

            return (
              <section
                key={block.title}
                className={`flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12 xl:gap-16 ${
                  blockIndex % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="order-2 min-w-0 flex-1 space-y-4 lg:order-none">
                  <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-zinc-50 sm:text-3xl">
                    {block.title}
                  </h2>
                  {block.paragraphs.map((p, pi) => (
                    <p
                      key={pi}
                      className="text-base leading-relaxed text-neutral-700 dark:text-zinc-300"
                    >
                      {p}
                    </p>
                  ))}
                </div>
                <div className="order-1 w-full min-w-0 flex-1 lg:order-none lg:max-w-none">
                  <AboutAlmatyStorySlider
                    images={slides}
                    alts={block.slideAlts}
                    prevLabel={content.sliderPrev}
                    nextLabel={content.sliderNext}
                    dotAriaTemplate={content.sliderDotAria}
                  />
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}

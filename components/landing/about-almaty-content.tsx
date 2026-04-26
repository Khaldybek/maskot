import Image from "next/image";
import { Calendar, MapPin, Mountain, Users } from "lucide-react";
import { ScrollReveal } from "@/components/landing/scroll-reveal";
import { StoryBlocksWithSlider } from "@/components/landing/story-blocks-with-slider";
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
          <ScrollReveal immediate>
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
          </ScrollReveal>

          <ScrollReveal delayMs={60} className="relative z-20 -mt-14 px-0 sm:-mt-20 lg:-mt-24">
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
              {blocks.map((block, i) => {
                const Icon = icons[i];
                return (
                  <li
                    key={block.title}
                    className="flex min-w-0 justify-center"
                  >
                    <article className="flex aspect-square w-full max-w-[220px] flex-col rounded-2xl border border-zinc-100 bg-white p-5 shadow-[0_4px_14px_rgba(0,0,0,0.08),0_14px_44px_rgba(0,0,0,0.14)] sm:max-w-[240px] sm:p-6">
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-rose-50 text-[#DE2E06]">
                        <Icon className="size-6" strokeWidth={1.75} aria-hidden />
                      </div>
                      <h2 className="mt-4 text-lg font-bold text-neutral-900">
                        {block.title}
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                        {block.description}
                      </p>
                    </article>
                  </li>
                );
              })}
            </ul>
          </ScrollReveal>
        </div>

        <StoryBlocksWithSlider
          storyBlocks={content.storyBlocks}
          slideSets={ABOUT_ALMATY_STORY_SLIDES}
          sliderPrev={content.sliderPrev}
          sliderNext={content.sliderNext}
          sliderDotAria={content.sliderDotAria}
        />
      </div>
    </div>
  );
}

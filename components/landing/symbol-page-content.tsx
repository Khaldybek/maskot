import Image from "next/image";
import { ScrollReveal } from "@/components/landing/scroll-reveal";
import { StoryBlocksWithSlider } from "@/components/landing/story-blocks-with-slider";
import {
  SYMBOL_PAGE_MOUNTAIN_SPIRIT_IMAGE,
  SYMBOL_PAGE_STORY_SLIDES,
} from "@/lib/symbol-page-assets";
import type { Messages } from "@/messages";

type Props = {
  content: Messages["symbolPage"];
};

export function SymbolPageContent({ content }: Props) {
  return (
    <div className="min-w-0 bg-white pb-16 pt-2 sm:pb-20">
      <div className="mx-auto min-w-0 max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <ScrollReveal immediate className="w-full">
          <div className="relative mx-auto h-[300px] w-full max-w-4xl overflow-hidden rounded-[2rem] sm:h-[240px] sm:rounded-[2.25rem] md:h-[260px] lg:h-[380px] lg:max-w-5xl lg:rounded-[2.5rem]">
            <video
              className="absolute inset-0 z-0 h-full w-full object-cover"
              autoPlay
              muted
              playsInline
              loop
              preload="auto"
              disablePictureInPicture
              aria-label={content.heroImageAlt}
            >
              <source src="/video.mp4" type="video/mp4" />
            </video>
            <div
              className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-[min(28%,7rem)] bg-gradient-to-r from-black/35 to-transparent sm:w-[min(24%,6.5rem)]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-[min(28%,7rem)] bg-gradient-to-l from-black/35 to-transparent sm:w-[min(24%,6.5rem)]"
              aria-hidden
            />
          </div>
        </ScrollReveal>

        <StoryBlocksWithSlider
          storyBlocks={content.storyBlocks}
          slideSets={SYMBOL_PAGE_STORY_SLIDES}
          sliderPrev={content.sliderPrev}
          sliderNext={content.sliderNext}
          sliderDotAria={content.sliderDotAria}
        />

        <ScrollReveal delayMs={80}>
          <section
            className="mt-14 sm:mt-16 lg:mt-20"
            aria-labelledby="symbol-mountain-spirit-heading"
          >
            <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-10 xl:gap-14">
              <div className="relative order-1 min-h-[280px] overflow-hidden rounded-[1.5rem] bg-zinc-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] ring-1 ring-zinc-200/80 sm:min-h-[320px] sm:rounded-[2rem] lg:order-none lg:min-h-0">
                <Image
                  src={SYMBOL_PAGE_MOUNTAIN_SPIRIT_IMAGE}
                  alt={content.mountainSpiritImageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="order-2 flex min-w-0 flex-col justify-center space-y-4 sm:space-y-5 lg:order-none">
                <h2
                  id="symbol-mountain-spirit-heading"
                  className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl"
                >
                  {content.mountainSpiritTitle}
                </h2>
                {content.mountainSpiritParagraphs.map((p, i) => (
                  <p
                    key={i}
                    className="text-base leading-relaxed text-neutral-800 sm:text-[17px] sm:leading-[1.65]"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
}

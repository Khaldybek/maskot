import { StoryBlocksWithSlider } from "@/components/landing/story-blocks-with-slider";
import { SYMBOL_PAGE_STORY_SLIDES } from "@/lib/symbol-page-assets";
import type { Messages } from "@/messages";

type Props = {
  content: Messages["symbolPage"];
};

export function SymbolPageContent({ content }: Props) {
  return (
    <div className="min-w-0 bg-white pb-16 pt-2 sm:pb-20">
      <div className="mx-auto min-w-0 max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-video min-h-[200px] overflow-hidden rounded-[2rem] sm:min-h-[280px] sm:rounded-[2.25rem] lg:min-h-[320px] lg:rounded-[2.5rem]">
          <video
            className="absolute inset-0 z-0 h-full w-full object-cover"
            controls
            playsInline
            loop
            preload="auto"
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

        <StoryBlocksWithSlider
          storyBlocks={content.storyBlocks}
          slideSets={SYMBOL_PAGE_STORY_SLIDES}
          sliderPrev={content.sliderPrev}
          sliderNext={content.sliderNext}
          sliderDotAria={content.sliderDotAria}
        />
      </div>
    </div>
  );
}

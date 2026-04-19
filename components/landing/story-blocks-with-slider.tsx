import { AboutAlmatyStorySlider } from "@/components/landing/about-almaty-story-slider";

export type StoryBlockItem = {
  title: string;
  paragraphs: string[];
  slideAlts: string[];
};

type Props = {
  storyBlocks: StoryBlockItem[];
  slideSets: readonly (readonly string[])[];
  sliderPrev: string;
  sliderNext: string;
  sliderDotAria: string;
};

/** Общий зигзаг текста + слайдера для /about-almaty и /symbol */
export function StoryBlocksWithSlider({
  storyBlocks,
  slideSets,
  sliderPrev,
  sliderNext,
  sliderDotAria,
}: Props) {
  return (
    <div className="mt-16 space-y-16 sm:mt-20 sm:space-y-20 lg:mt-24 lg:space-y-24">
      {storyBlocks.map((block, blockIndex) => {
        const slides = slideSets[blockIndex];
        if (!slides?.length) return null;

        return (
          <section
            key={block.title}
            className={`flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12 xl:gap-16 ${
              blockIndex % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="order-2 min-w-0 flex-1 space-y-4 lg:order-none">
              <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
                {block.title}
              </h2>
              {block.paragraphs.map((p, pi) => (
                <p
                  key={pi}
                  className="text-base leading-relaxed text-neutral-700"
                >
                  {p}
                </p>
              ))}
            </div>
            <div className="order-1 w-full min-w-0 flex-1 lg:order-none lg:max-w-none">
              <AboutAlmatyStorySlider
                images={slides}
                alts={block.slideAlts}
                prevLabel={sliderPrev}
                nextLabel={sliderNext}
                dotAriaTemplate={sliderDotAria}
              />
            </div>
          </section>
        );
      })}
    </div>
  );
}

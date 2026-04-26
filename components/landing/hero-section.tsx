import Image from "next/image";
import Link from "next/link";
import type { Messages } from "@/messages";
import {
  HERO_BG_IMAGE,
  HERO_PICK_EVENTS_IMAGE,
  HERO_PICK_MUSEUMS_IMAGE,
  HERO_SLIDER_IMAGES,
} from "@/lib/hero-assets";
import { HeroSlider } from "@/components/landing/hero-slider";

type Props = {
  hero: Messages["hero"];
  localePrefix: string;
};

function telHref(display: string) {
  const digits = display.replace(/\D/g, "");
  return digits ? `tel:+${digits}` : "#";
}

export function HeroSection({ hero, localePrefix }: Props) {
  const detailsHref = `${localePrefix}/news`;
  const eventsHref = `${localePrefix}/news`;
  const museumsHref = `${localePrefix}/symbol`;

  return (
    <section className="relative overflow-x-clip px-3 py-5 sm:px-4 sm:py-8 lg:px-4 lg:py-10">
      <div className="relative mx-auto min-w-0 max-w-[1400px] overflow-hidden rounded-2xl border border-zinc-200/70 bg-zinc-100/80 shadow-sm ring-1 ring-zinc-200/40 sm:rounded-[2rem]">
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl sm:rounded-[2rem]"
          aria-hidden
        >
          {/* Размытый фон + radial mask: мягкие края без жёсткой границы */}
          <div
            className="absolute inset-0 scale-[1.06] [mask-image:radial-gradient(ellipse_100%_88%_at_50%_40%,#000_15%,#000_55%,transparent_90%)] [-webkit-mask-image:radial-gradient(ellipse_100%_88%_at_50%_40%,#000_15%,#000_55%,transparent_90%)] sm:scale-[1.08]"
          >
            <Image
              src={HERO_BG_IMAGE}
              alt=""
              fill
              className="object-cover blur-md saturate-[0.80] sm:blur-lg"
              sizes="100vw"
              priority
            />
          </div>
          <div className="absolute inset-0 rounded-2xl sm:rounded-[2rem]" />
        </div>

        <div className="relative z-10 grid gap-6 p-4 sm:gap-8 sm:p-6 md:grid-cols-5 md:items-stretch md:gap-8 md:p-8 lg:gap-12 lg:p-10">
          <div className="flex min-w-0 w-full max-w-full flex-col gap-5 sm:gap-6 md:col-span-3 md:gap-7 lg:min-h-0">
            <h1 className="text-balance break-words text-xl font-bold uppercase leading-[1.15] tracking-tight text-neutral-900 sm:text-2xl sm:leading-tight md:text-3xl lg:text-4xl xl:text-[2.65rem]">
              <span className="text-[#DE2E06]">{hero.titleHighlight}</span>{" "}
              <span className="text-neutral-900">{hero.titleRest}</span>
            </h1>

            <p className="max-w-xl text-[15px] leading-relaxed text-neutral-800 sm:text-base sm:leading-relaxed md:text-lg">
              {hero.subtitle}
            </p>

            {/* Один столбец flex: горячая линия и ряд карточек — общая ширина; карточки flex-1 basis-0 min-w-0, чтобы трек не разъезжался из-за min-content */}
            <div className="flex w-full min-w-0 max-w-full flex-col gap-y-3 sm:gap-y-4">
              <div className="w-full min-w-0 max-w-full overflow-hidden rounded-xl bg-[#DE2E06] p-3.5 text-left text-white shadow-sm sm:rounded-[1.25rem] sm:p-4 md:p-5">
                <p className="text-xs font-medium leading-snug opacity-95 sm:text-sm">
                  {hero.hotlineTitle}
                </p>
                <a
                  href={telHref(hero.hotlinePhone)}
                  className="mt-1.5 block w-full max-w-full break-words text-base font-bold tabular-nums tracking-wide hover:underline sm:mt-2 sm:text-lg md:text-xl"
                >
                  {hero.hotlinePhone}
                </a>
                <p className="mt-1.5 text-[11px] opacity-90 sm:mt-2 sm:text-xs md:text-sm">
                  {hero.hotlineHours}
                </p>
              </div>

              <h2 className="text-base font-semibold text-neutral-900 sm:text-lg md:text-xl">
                {hero.picksTitle}
              </h2>

              <div className="flex w-full min-w-0 max-w-full flex-col gap-2.5 sm:flex-row sm:gap-3 lg:gap-4">
                <Link
                  href={eventsHref}
                  className="group relative block aspect-[4/3] min-h-[132px] w-full min-w-0 overflow-hidden rounded-xl sm:min-h-[148px] sm:flex-1 sm:basis-0 sm:rounded-2xl md:min-h-0"
                >
                  <Image
                    src={HERO_PICK_EVENTS_IMAGE}
                    alt=""
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="(max-width: 1024px) 280px, 50vw"
                  />
                  <div className="hero-pick-vignette absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                  <span className="absolute bottom-2.5 left-2.5 right-2.5 text-xs font-semibold leading-tight text-white drop-shadow sm:bottom-3 sm:left-3 sm:right-3 sm:text-sm md:text-base">
                    {hero.pickEventsCaption}
                  </span>
                </Link>
                <Link
                  href={museumsHref}
                  className="group relative block aspect-[4/3] min-h-[132px] w-full min-w-0 overflow-hidden rounded-xl sm:min-h-[148px] sm:flex-1 sm:basis-0 sm:rounded-2xl md:min-h-0"
                >
                  <Image
                    src={HERO_PICK_MUSEUMS_IMAGE}
                    alt=""
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="(max-width: 1024px) 280px, 50vw"
                  />
                  <div className="hero-pick-vignette absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                  <span className="absolute bottom-2.5 left-2.5 right-2.5 text-xs font-semibold leading-tight text-white drop-shadow sm:bottom-3 sm:left-3 sm:right-3 sm:text-sm md:text-base">
                    {hero.pickMuseumsCaption}
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex min-h-0 min-w-0 flex-1 flex-col md:col-span-2 md:h-full md:min-h-0 lg:self-stretch">
            <div className="flex min-h-0 flex-1 flex-col md:h-full lg:h-full">
              <HeroSlider
                slides={hero.slider}
                images={HERO_SLIDER_IMAGES}
                moreDetailsLabel={hero.moreDetails}
                detailsHref={detailsHref}
                navAriaLabel={hero.sliderNavLabel}
                slideButtonAriaTemplate={hero.slideButtonAria}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

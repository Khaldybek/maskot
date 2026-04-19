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
    <section className="relative overflow-x-clip px-4 py-6 sm:py-8 lg:py-10">
      <div className="relative mx-auto min-w-0 max-w-[1400px] overflow-hidden rounded-[2rem] border border-zinc-200/70 bg-zinc-100/80 shadow-sm ring-1 ring-zinc-200/40">
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem]"
          aria-hidden
        >
          {/* Размытый фон + radial mask: мягкие края без жёсткой границы */}
          <div
            className="absolute inset-0 scale-[1.08] [mask-image:radial-gradient(ellipse_100%_85%_at_50%_38%,#000_18%,#000_52%,transparent_88%)] [-webkit-mask-image:radial-gradient(ellipse_100%_85%_at_50%_38%,#000_18%,#000_52%,transparent_88%)]"
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
          <div className="absolute inset-0 rounded-[2rem]" />
        </div>

        <div className="relative z-10 grid gap-8 p-6 sm:gap-10 sm:p-8 lg:grid-cols-5 lg:items-stretch lg:gap-12 lg:p-10">
          <div className="flex flex-col gap-6 lg:col-span-3 lg:gap-7 lg:min-h-0">
            <h1 className="text-balance break-words text-2xl font-bold uppercase leading-tight tracking-tight text-neutral-900 sm:text-3xl lg:text-4xl xl:text-[2.65rem]">
              <span className="text-[#DE2E06]">{hero.titleHighlight}</span>{" "}
              <span className="text-neutral-900">{hero.titleRest}</span>
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-neutral-800 sm:text-lg">
              {hero.subtitle}
            </p>

            <div className="rounded-[1.25rem] bg-[#DE2E06] p-5 text-white shadow-lg sm:p-6">
              <p className="text-sm font-medium leading-snug opacity-95">
                {hero.hotlineTitle}
              </p>
              <a
                href={telHref(hero.hotlinePhone)}
                className="mt-2 block w-fit text-xl font-bold tracking-wide hover:underline sm:text-2xl"
              >
                {hero.hotlinePhone}
              </a>
              <p className="mt-3 text-sm opacity-90">{hero.hotlineHours}</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-neutral-900 sm:text-xl">
                {hero.picksTitle}
              </h2>
              <div className="mt-4 flex gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory sm:gap-4 lg:grid lg:grid-cols-2 lg:gap-4 lg:overflow-visible lg:snap-none [&::-webkit-scrollbar]:hidden">
                <Link
                  href={eventsHref}
                  className="group relative aspect-[4/3] min-h-[140px] w-[min(100%,280px)] shrink-0 snap-center overflow-hidden rounded-2xl sm:min-h-[160px] lg:min-h-0 lg:w-auto"
                >
                  <Image
                    src={HERO_PICK_EVENTS_IMAGE}
                    alt=""
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="(max-width: 1024px) 280px, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                  <span className="absolute bottom-3 left-3 right-3 text-sm font-semibold leading-tight text-white drop-shadow sm:text-base">
                    {hero.pickEventsCaption}
                  </span>
                </Link>
                <Link
                  href={museumsHref}
                  className="group relative aspect-[4/3] min-h-[140px] w-[min(100%,280px)] shrink-0 snap-center overflow-hidden rounded-2xl sm:min-h-[160px] lg:min-h-0 lg:w-auto"
                >
                  <Image
                    src={HERO_PICK_MUSEUMS_IMAGE}
                    alt=""
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="(max-width: 1024px) 280px, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                  <span className="absolute bottom-3 left-3 right-3 text-sm font-semibold leading-tight text-white drop-shadow sm:text-base">
                    {hero.pickMuseumsCaption}
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex min-h-[380px] min-w-0 flex-1 flex-col self-stretch lg:col-span-2 lg:min-h-0">
            <div className="flex min-h-0 flex-1 flex-col">
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

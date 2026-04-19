import Image from "next/image";
import Link from "next/link";
import type { Messages } from "@/messages";
import { CTA_BACKGROUND_IMAGE } from "@/lib/cta-assets";

type Props = {
  cta: Messages["cta"];
  localePrefix: string;
};

export function CtaSection({ cta, localePrefix }: Props) {
  const symbolHref = `${localePrefix}/symbol`;

  return (
    <section className="overflow-x-clip bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto min-w-0 max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="relative min-h-[280px] overflow-hidden rounded-[2.5rem] sm:min-h-[320px] sm:rounded-[3rem] lg:min-h-[360px]">
          <Image
            src={CTA_BACKGROUND_IMAGE}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 1400px) 100vw, 1400px"
            priority={false}
          />
          {/* Тёмная маска для читаемости текста */}
          <div
            className="absolute inset-0 bg-black/60 sm:bg-black/55"
            aria-hidden
          />

          <div className="relative z-10 flex min-h-[280px] flex-col items-center justify-center px-4 py-14 text-center sm:min-h-[320px] sm:px-10 sm:py-16 lg:min-h-[360px] lg:py-20">
            <h2 className="max-w-4xl text-balance break-words text-xl font-bold leading-tight tracking-tight text-white sm:text-2xl md:text-3xl lg:text-4xl">
              {cta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base font-normal leading-relaxed text-white/95 sm:text-lg">
              {cta.description}
            </p>
            <Link
              href={symbolHref}
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-[#DE2E06] px-8 text-sm font-semibold text-white shadow-lg transition hover:bg-[#c72805] sm:px-10 sm:text-base"
            >
              {cta.button}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

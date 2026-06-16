import { CtaSection } from "@/components/landing/cta-section";
import { HeroSection } from "@/components/landing/hero-section";
import { NewsPreviewSection } from "@/components/landing/news-preview-section";
import { PeaksSection } from "@/components/landing/peaks-section";
import { ScrollReveal } from "@/components/landing/scroll-reveal";
import { getMessages } from "@/messages";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getMessages(locale);

  return (
    <>
      <ScrollReveal immediate>
        <HeroSection hero={t.hero} localePrefix={`/${locale}`} />
      </ScrollReveal>
      <PeaksSection peaks={t.peaks} localePrefix={`/${locale}`} />
      <NewsPreviewSection news={t.newsPreview} localePrefix={`/${locale}`} />
      <CtaSection cta={t.cta} localePrefix={`/${locale}`} />
    </>
  );
}

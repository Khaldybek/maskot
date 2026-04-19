import type { Metadata } from "next";
import { BrandPageContent } from "@/components/landing/brand-page-content";
import { getMessages } from "@/messages";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = getMessages(locale);
  return { title: t.subpages.brandTitle };
}

export default async function BrandPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getMessages(locale);

  return <BrandPageContent content={t.brandPage} />;
}

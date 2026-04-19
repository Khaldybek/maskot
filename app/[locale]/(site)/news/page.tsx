import type { Metadata } from "next";
import { NewsPageContent } from "@/components/landing/news-page-content";
import { getMessages } from "@/messages";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = getMessages(locale);
  return { title: t.subpages.newsTitle };
}

export default async function NewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getMessages(locale);

  return <NewsPageContent content={t.newsPage} />;
}

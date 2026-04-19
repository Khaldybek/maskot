import type { Metadata } from "next";
import { AboutAlmatyContent } from "@/components/landing/about-almaty-content";
import { getMessages } from "@/messages";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = getMessages(locale);
  return { title: t.subpages.aboutAlmatyTitle };
}

export default async function AboutAlmatyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const t = getMessages((await params).locale);

  return <AboutAlmatyContent content={t.aboutAlmatyPage} />;
}

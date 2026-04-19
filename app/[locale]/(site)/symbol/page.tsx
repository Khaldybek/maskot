import type { Metadata } from "next";
import { SymbolPageContent } from "@/components/landing/symbol-page-content";
import { getMessages } from "@/messages";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = getMessages(locale);
  return { title: t.subpages.symbolTitle };
}

export default async function SymbolPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getMessages(locale);

  return <SymbolPageContent content={t.symbolPage} />;
}

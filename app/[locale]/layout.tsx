import { DocumentLang } from "@/components/document-lang";
import { LocaleProvider } from "@/components/locale-provider";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getMessages } from "@/messages";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return [
    { locale: "ru" },
    { locale: "kz" },
    { locale: "en" },
  ] satisfies { locale: Locale }[];
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();

  const messages = getMessages(raw);

  return (
    <LocaleProvider locale={raw} messages={messages}>
      <DocumentLang />
      {children}
    </LocaleProvider>
  );
}

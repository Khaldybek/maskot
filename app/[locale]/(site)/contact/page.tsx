import type { Metadata } from "next";
import { ContactPageContent } from "@/components/landing/contact-page-content";
import { getMessages } from "@/messages";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = getMessages(locale);
  return { title: t.contact.title };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getMessages(locale);

  return <ContactPageContent content={t.contactPage} />;
}

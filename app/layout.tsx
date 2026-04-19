import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { A11Y_BOOTSTRAP_INLINE } from "@/lib/a11y-prefs";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Maskot — лендинг",
    template: "%s — Maskot",
  },
  description: "Многостраничный лендинг с адаптивной вёрсткой",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white">
        <Script id="a11y-bootstrap" strategy="beforeInteractive">
          {A11Y_BOOTSTRAP_INLINE}
        </Script>
        {children}
      </body>
    </html>
  );
}

import { Suspense } from "react";
import { A11ySettingsPanel } from "@/components/landing/a11y-settings-panel";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { SkipToMainLink } from "@/components/landing/skip-to-main-link";
import { NavWeather } from "@/components/landing/nav-weather";
import { NavWeatherFallback } from "@/components/landing/nav-weather-fallback";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SkipToMainLink />
      <SiteHeader
        weatherSlot={
          <Suspense fallback={<NavWeatherFallback />}>
            <NavWeather />
          </Suspense>
        }
        a11ySlot={<A11ySettingsPanel />}
      />
      <main
        id="main-content"
        tabIndex={-1}
        className="min-w-0 flex-1 overflow-x-clip bg-white"
      >
        {children}
      </main>
      <SiteFooter />
    </>
  );
}

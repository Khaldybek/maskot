"use client";

import { Clock } from "lucide-react";
import { useLocale } from "@/components/locale-provider";
import { useCallback, useEffect, useState } from "react";

const accent = "text-[#DE2E06]";

const TZ = "Asia/Almaty";

export function AlmatyTime() {
  const locale = useLocale();
  const intlLocale = locale === "kz" ? "kk-KZ" : "ru-KZ";

  const format = useCallback(
    (d: Date) =>
      new Intl.DateTimeFormat(intlLocale, {
        timeZone: TZ,
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(d),
    [intlLocale],
  );

  const [clock, setClock] = useState(() => new Date());

  useEffect(() => {
    const tick = () => setClock(new Date());
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const label = format(clock);

  return (
    <span className="inline-flex items-center gap-2.5">
      <Clock
        className={`size-5 shrink-0 ${accent}`}
        strokeWidth={2}
        aria-hidden
      />
      <time
        dateTime={clock.toISOString()}
        suppressHydrationWarning
        className={`text-base font-extrabold tabular-nums tracking-tight ${accent}`}
      >
        {label}
      </time>
    </span>
  );
}

"use client";

import { useLocale } from "@/components/locale-provider";
import { useCallback, useEffect, useState } from "react";

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

  const [time, setTime] = useState<string>(() => format(new Date()));

  useEffect(() => {
    const tick = () => setTime(format(new Date()));
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [format]);

  return (
    <time
      dateTime={time}
      suppressHydrationWarning
      className="text-base font-medium tabular-nums text-neutral-900"
    >
      {time}
    </time>
  );
}

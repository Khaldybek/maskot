import { createElement } from "react";
import { fetchAlmatyWeather, weatherIconForCode } from "@/lib/weather/open-meteo";
import { Sun } from "lucide-react";

const brand = "text-[#DE2E06]";

export async function NavWeather() {
  const result = await fetchAlmatyWeather().catch(() => null);
  if (!result) {
    return (
      <span className="inline-flex items-center gap-2.5">
        <Sun className="size-5 shrink-0 text-zinc-400" strokeWidth={1.75} aria-hidden />
        <span className="text-base font-extrabold tabular-nums tracking-tight text-zinc-400">
          —°C
        </span>
      </span>
    );
  }

  const { temperatureC, weatherCode } = result;
  const IconComponent = weatherIconForCode(weatherCode);
  const label =
    temperatureC > 0 ? `+${temperatureC}°C` : `${temperatureC}°C`;

  return (
    <span className="inline-flex items-center gap-2.5">
      {createElement(IconComponent, {
        className: `size-5 shrink-0 ${brand}`,
        strokeWidth: 2,
        "aria-hidden": true,
      })}
      <span
        className={`text-base font-extrabold tabular-nums tracking-tight ${brand}`}
      >
        {label}
      </span>
    </span>
  );
}

import type { LucideIcon } from "lucide-react";
import {
  Cloud,
  CloudFog,
  CloudLightning,
  CloudRain,
  CloudSun,
  Cloudy,
  Snowflake,
  Sun,
} from "lucide-react";

/** WMO Weather interpretation (Open-Meteo). */
export function weatherIconForCode(code: number): LucideIcon {
  if (code === 0) return Sun;
  if (code === 1 || code === 2) return CloudSun;
  if (code === 3) return Cloudy;
  if (code === 45 || code === 48) return CloudFog;
  if (code >= 51 && code <= 67) return CloudRain;
  if (code >= 71 && code <= 77) return Snowflake;
  if (code >= 80 && code <= 82) return CloudRain;
  if (code >= 85 && code <= 86) return Snowflake;
  if (code >= 95 && code <= 99) return CloudLightning;
  return Cloud;
}

export type AlmatyCurrentWeather = {
  temperatureC: number;
  weatherCode: number;
};

export async function fetchAlmatyWeather(): Promise<AlmatyCurrentWeather> {
  const url =
    "https://api.open-meteo.com/v1/forecast?latitude=43.222&longitude=76.8512&current=temperature_2m,weather_code&timezone=Asia%2FAlmaty";
  const res = await fetch(url, { next: { revalidate: 600 } });
  if (!res.ok) throw new Error("weather fetch failed");
  const data = (await res.json()) as {
    current: { temperature_2m: number; weather_code: number };
  };
  return {
    temperatureC: Math.round(data.current.temperature_2m),
    weatherCode: data.current.weather_code,
  };
}

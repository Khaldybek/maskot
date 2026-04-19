import { Sun } from "lucide-react";

export function NavWeatherFallback() {
  return (
    <>
      <Sun
        className="size-5 shrink-0 animate-pulse text-[#DE2E06]/40"
        strokeWidth={1.75}
        aria-hidden
      />
      <span className="text-base font-bold tabular-nums text-[#DE2E06]/40">…°C</span>
    </>
  );
}

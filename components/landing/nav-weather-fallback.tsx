import { Sun } from "lucide-react";

export function NavWeatherFallback() {
  return (
    <span className="inline-flex items-center gap-2.5">
      <Sun
        className="size-5 shrink-0 animate-pulse text-[#DE2E06]/40"
        strokeWidth={2}
        aria-hidden
      />
      <span className="text-base font-extrabold tabular-nums tracking-tight text-[#DE2E06]/40">
        …°C
      </span>
    </span>
  );
}

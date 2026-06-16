"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Задержка перед transition (лёгкий stagger между соседними блоками) */
  delayMs?: number;
  /**
   * Без скрытого начального состояния и без observer — для первого экрана,
   * чтобы не мигать до гидрации и не задерживать LCP.
   */
  immediate?: boolean;
};

export function ScrollReveal({
  children,
  className = "",
  delayMs = 0,
  immediate = false,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(immediate);

  useEffect(() => {
    if (immediate) return;

    const el = ref.current;
    if (!el) return;

    /* prefers-reduced-motion обрабатывается в globals.css для .reveal */

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { root: null, rootMargin: "0px 0px -4% 0px", threshold: 0.08 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [immediate]);

  const style: CSSProperties | undefined =
    delayMs > 0 ? { ["--reveal-delay" as string]: `${delayMs}ms` } : undefined;

  const revealClasses = immediate
    ? className.trim()
    : [
        "reveal",
        visible ? "reveal-visible" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ");

  return (
    <div ref={ref} className={revealClasses || undefined} style={style}>
      {children}
    </div>
  );
}

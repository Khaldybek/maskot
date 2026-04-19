"use client";

import { useMessages } from "@/components/locale-provider";
import {
  A11Y_PANEL_OPEN_EVENT,
  applyA11yPrefsToDocument,
  DEFAULT_A11Y_PREFS,
  loadA11yPrefs,
  persistA11yPrefs,
  type A11yPrefs,
  type FontSizePref,
  type SpacingPref,
} from "@/lib/a11y-prefs";
import { FocusTrap } from "focus-trap-react";
import { Accessibility, X } from "lucide-react";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";

function setBodyScrollLocked(locked: boolean) {
  if (typeof document === "undefined") return;
  document.body.style.overflow = locked ? "hidden" : "";
}

export function A11ySettingsPanel() {
  const t = useMessages();
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState<A11yPrefs>(DEFAULT_A11Y_PREFS);
  const [announce, setAnnounce] = useState("");
  const launcherRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const descId = useId();

  useEffect(() => {
    queueMicrotask(() => {
      const p = loadA11yPrefs();
      setPrefs(p);
      applyA11yPrefsToDocument(p);
    });
  }, []);

  useEffect(() => {
    const openFromMenu = () => setOpen(true);
    window.addEventListener(A11Y_PANEL_OPEN_EVENT, openFromMenu);
    return () => window.removeEventListener(A11Y_PANEL_OPEN_EVENT, openFromMenu);
  }, []);

  useEffect(() => {
    if (open) {
      queueMicrotask(() => setPrefs(loadA11yPrefs()));
      setBodyScrollLocked(true);
    } else {
      setBodyScrollLocked(false);
    }
    return () => setBodyScrollLocked(false);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const close = useCallback(() => {
    setOpen(false);
    queueMicrotask(() => launcherRef.current?.focus());
  }, []);

  const update = useCallback((next: A11yPrefs) => {
    setPrefs(next);
    persistA11yPrefs(next);
  }, []);

  function reset() {
    const next = { ...DEFAULT_A11Y_PREFS };
    setPrefs(next);
    persistA11yPrefs(next);
    setAnnounce(t.a11y.prefsReset);
    window.setTimeout(() => setAnnounce(""), 1500);
  }

  const panel =
    open &&
    typeof document !== "undefined" && (
      <div className="fixed inset-0 z-[200] flex items-end justify-center p-0 sm:items-center sm:p-4">
        <button
          type="button"
          className="absolute inset-0 bg-black/50"
          aria-label={t.a11y.panelClose}
          onClick={close}
        />
        <FocusTrap
          active
          focusTrapOptions={{
            initialFocus: "#a11y-dialog-close",
            delayInitialFocus: true,
            clickOutsideDeactivates: false,
            escapeDeactivates: false,
            fallbackFocus: "#a11y-dialog-close",
          }}
        >
          <div
            id="a11y-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descId}
            className="relative z-10 flex max-h-[min(92vh,720px)] w-full max-w-lg flex-col overflow-hidden rounded-t-2xl bg-white shadow-2xl sm:rounded-2xl dark:bg-zinc-900"
          >
            <div className="flex items-start justify-between gap-4 border-b border-zinc-200 px-5 py-4 dark:border-zinc-700">
              <div>
                <h2
                  id={titleId}
                  className="text-lg font-bold text-neutral-900 dark:text-zinc-50"
                >
                  {t.a11y.panelTitle}
                </h2>
                <p
                  id={descId}
                  className="mt-1 text-sm text-zinc-600 dark:text-zinc-400"
                >
                  {t.a11y.panelIntro}
                </p>
              </div>
              <button
                id="a11y-dialog-close"
                type="button"
                className="inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-lg text-neutral-700 transition hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800"
                onClick={close}
                aria-label={t.a11y.panelClose}
              >
                <X className="size-5" strokeWidth={2} aria-hidden />
              </button>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-4">
              <fieldset className="space-y-3 border-0 p-0">
                <legend className="text-sm font-semibold text-neutral-900 dark:text-zinc-50">
                  {t.a11y.fontSizeLabel}
                </legend>
                <div
                  className="flex flex-col gap-2 sm:flex-row sm:flex-wrap"
                  role="radiogroup"
                  aria-label={t.a11y.fontSizeLabel}
                >
                  {(
                    [
                      ["normal", t.a11y.fontNormal],
                      ["large", t.a11y.fontLarge],
                      ["xlarge", t.a11y.fontXLarge],
                    ] as const
                  ).map(([value, label]) => (
                    <label
                      key={value}
                      className={`flex min-h-11 flex-1 cursor-pointer items-center justify-center rounded-xl border px-3 py-2 text-center text-sm font-medium transition ${
                        prefs.fontSize === value
                          ? "border-[#DE2E06] bg-[#DE2E06]/10 text-[#DE2E06]"
                          : "border-zinc-200 bg-zinc-50 dark:border-zinc-600 dark:bg-zinc-800"
                      }`}
                    >
                      <input
                        type="radio"
                        name="a11y-font"
                        value={value}
                        className="sr-only"
                        checked={prefs.fontSize === value}
                        onChange={() =>
                          update({ ...prefs, fontSize: value as FontSizePref })
                        }
                      />
                      {label}
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset className="mt-6 space-y-3 border-0 p-0">
                <legend className="text-sm font-semibold text-neutral-900 dark:text-zinc-50">
                  {t.a11y.spacingLabel}
                </legend>
                <div
                  className="flex flex-col gap-2 sm:flex-row"
                  role="radiogroup"
                  aria-label={t.a11y.spacingLabel}
                >
                  {(
                    [
                      ["normal", t.a11y.spacingNormal],
                      ["relaxed", t.a11y.spacingRelaxed],
                    ] as const
                  ).map(([value, label]) => (
                    <label
                      key={value}
                      className={`flex min-h-11 flex-1 cursor-pointer items-center justify-center rounded-xl border px-3 py-2 text-center text-sm font-medium transition ${
                        prefs.spacing === value
                          ? "border-[#DE2E06] bg-[#DE2E06]/10 text-[#DE2E06]"
                          : "border-zinc-200 bg-zinc-50 dark:border-zinc-600 dark:bg-zinc-800"
                      }`}
                    >
                      <input
                        type="radio"
                        name="a11y-spacing"
                        value={value}
                        className="sr-only"
                        checked={prefs.spacing === value}
                        onChange={() =>
                          update({ ...prefs, spacing: value as SpacingPref })
                        }
                      />
                      {label}
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="mt-6 space-y-4 border-t border-zinc-100 pt-5 dark:border-zinc-800">
                <label className="flex cursor-pointer gap-3">
                  <input
                    type="checkbox"
                    className="mt-1 size-4 shrink-0 rounded border-zinc-300 text-[#DE2E06] focus:ring-[#DE2E06]"
                    checked={prefs.contrast}
                    onChange={(e) =>
                      update({ ...prefs, contrast: e.target.checked })
                    }
                  />
                  <span>
                    <span className="font-semibold text-neutral-900 dark:text-zinc-50">
                      {t.a11y.contrastLabel}
                    </span>
                    <span className="mt-0.5 block text-sm text-zinc-600 dark:text-zinc-400">
                      {t.a11y.contrastHint}
                    </span>
                  </span>
                </label>

                <label className="flex cursor-pointer gap-3">
                  <input
                    type="checkbox"
                    className="mt-1 size-4 shrink-0 rounded border-zinc-300 text-[#DE2E06] focus:ring-[#DE2E06]"
                    checked={prefs.underlineLinks}
                    onChange={(e) =>
                      update({ ...prefs, underlineLinks: e.target.checked })
                    }
                  />
                  <span>
                    <span className="font-semibold text-neutral-900 dark:text-zinc-50">
                      {t.a11y.underlineLabel}
                    </span>
                    <span className="mt-0.5 block text-sm text-zinc-600 dark:text-zinc-400">
                      {t.a11y.underlineHint}
                    </span>
                  </span>
                </label>

                <label className="flex cursor-pointer gap-3">
                  <input
                    type="checkbox"
                    className="mt-1 size-4 shrink-0 rounded border-zinc-300 text-[#DE2E06] focus:ring-[#DE2E06]"
                    checked={prefs.enhancedFocus}
                    onChange={(e) =>
                      update({ ...prefs, enhancedFocus: e.target.checked })
                    }
                  />
                  <span>
                    <span className="font-semibold text-neutral-900 dark:text-zinc-50">
                      {t.a11y.enhancedFocusLabel}
                    </span>
                    <span className="mt-0.5 block text-sm text-zinc-600 dark:text-zinc-400">
                      {t.a11y.enhancedFocusHint}
                    </span>
                  </span>
                </label>
              </div>

              <div className="mt-6 flex flex-wrap gap-3 border-t border-zinc-100 pt-5 dark:border-zinc-800">
                <button
                  type="button"
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-zinc-300 px-5 text-sm font-semibold text-neutral-800 transition hover:bg-zinc-50 dark:border-zinc-600 dark:text-zinc-100 dark:hover:bg-zinc-800"
                  onClick={reset}
                >
                  {t.a11y.resetLabel}
                </button>
              </div>
            </div>

            <p className="sr-only" role="status" aria-live="polite" aria-atomic>
              {announce}
            </p>
          </div>
        </FocusTrap>
      </div>
    );

  return (
    <>
      <button
        ref={launcherRef}
        type="button"
        className="inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-lg p-2 text-neutral-800 transition hover:bg-neutral-100 dark:text-zinc-200 dark:hover:bg-zinc-800"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-controls={open ? "a11y-dialog" : undefined}
        aria-label={t.a11y.panelOpen}
      >
        <Accessibility className="size-6" strokeWidth={2} aria-hidden />
      </button>
      {panel ? createPortal(panel, document.body) : null}
    </>
  );
}

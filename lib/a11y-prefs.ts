/** Событие для открытия панели из мобильного меню (без дублирования кнопки в шапке). */
export const A11Y_PANEL_OPEN_EVENT = "maskot-open-a11y-panel";

export const A11Y_PREFS_STORAGE_KEY = "maskot-a11y-prefs";
/** @deprecated миграция со старого только ч/б переключателя */
export const LEGACY_CONTRAST_STORAGE_KEY = "maskot-a11y-contrast";

export type FontSizePref = "normal" | "large" | "xlarge";
export type SpacingPref = "normal" | "relaxed";

export type A11yPrefs = {
  contrast: boolean;
  fontSize: FontSizePref;
  spacing: SpacingPref;
  underlineLinks: boolean;
  enhancedFocus: boolean;
};

export const DEFAULT_A11Y_PREFS: A11yPrefs = {
  contrast: false,
  fontSize: "normal",
  spacing: "normal",
  underlineLinks: false,
  enhancedFocus: false,
};

function mergePrefs(raw: unknown): A11yPrefs {
  if (!raw || typeof raw !== "object") return { ...DEFAULT_A11Y_PREFS };
  const o = raw as Record<string, unknown>;
  const fontSize =
    o.fontSize === "large" || o.fontSize === "xlarge" || o.fontSize === "normal"
      ? o.fontSize
      : DEFAULT_A11Y_PREFS.fontSize;
  const spacing =
    o.spacing === "relaxed" || o.spacing === "normal"
      ? o.spacing
      : DEFAULT_A11Y_PREFS.spacing;
  return {
    contrast: Boolean(o.contrast),
    fontSize,
    spacing,
    underlineLinks: Boolean(o.underlineLinks),
    enhancedFocus: Boolean(o.enhancedFocus),
  };
}

/** Синхронное применение атрибутов к `document.documentElement` (и для SSR-safe гидратации на клиенте). */
export function applyA11yPrefsToDocument(prefs: A11yPrefs): void {
  if (typeof document === "undefined") return;
  const root = document.documentElement;

  if (prefs.contrast) root.setAttribute("data-a11y-contrast", "true");
  else root.removeAttribute("data-a11y-contrast");

  if (prefs.fontSize === "normal") root.removeAttribute("data-a11y-font");
  else root.setAttribute("data-a11y-font", prefs.fontSize);

  if (prefs.spacing === "relaxed") root.setAttribute("data-a11y-spacing", "relaxed");
  else root.removeAttribute("data-a11y-spacing");

  if (prefs.underlineLinks) root.setAttribute("data-a11y-underline-links", "true");
  else root.removeAttribute("data-a11y-underline-links");

  if (prefs.enhancedFocus) root.setAttribute("data-a11y-enhanced-focus", "true");
  else root.removeAttribute("data-a11y-enhanced-focus");
}

export function loadA11yPrefs(): A11yPrefs {
  try {
    const raw = localStorage.getItem(A11Y_PREFS_STORAGE_KEY);
    if (raw) return mergePrefs(JSON.parse(raw));
    if (localStorage.getItem(LEGACY_CONTRAST_STORAGE_KEY) === "1") {
      return { ...DEFAULT_A11Y_PREFS, contrast: true };
    }
  } catch {
    /* ignore */
  }
  return { ...DEFAULT_A11Y_PREFS };
}

export function persistA11yPrefs(prefs: A11yPrefs): void {
  try {
    localStorage.setItem(A11Y_PREFS_STORAGE_KEY, JSON.stringify(prefs));
    localStorage.removeItem(LEGACY_CONTRAST_STORAGE_KEY);
  } catch {
    /* ignore */
  }
  applyA11yPrefsToDocument(prefs);
}

/**
 * Инлайн до гидратации React — уменьшает мигание при загрузке.
 * Должен совпадать по логике с {@link applyA11yPrefsToDocument}.
 */
export const A11Y_BOOTSTRAP_INLINE = `(function(){try{var d=document.documentElement;var k=${JSON.stringify(A11Y_PREFS_STORAGE_KEY)};var leg=${JSON.stringify(LEGACY_CONTRAST_STORAGE_KEY)};var raw=localStorage.getItem(k);if(raw){var p=JSON.parse(raw);if(p.contrast)d.setAttribute("data-a11y-contrast","true");else d.removeAttribute("data-a11y-contrast");if(p.fontSize==="large"||p.fontSize==="xlarge")d.setAttribute("data-a11y-font",p.fontSize);else d.removeAttribute("data-a11y-font");if(p.spacing==="relaxed")d.setAttribute("data-a11y-spacing","relaxed");else d.removeAttribute("data-a11y-spacing");if(p.underlineLinks)d.setAttribute("data-a11y-underline-links","true");else d.removeAttribute("data-a11y-underline-links");if(p.enhancedFocus)d.setAttribute("data-a11y-enhanced-focus","true");else d.removeAttribute("data-a11y-enhanced-focus");return}if(localStorage.getItem(leg)==="1")d.setAttribute("data-a11y-contrast","true")}catch(e){}})();`;

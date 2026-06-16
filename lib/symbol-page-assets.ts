/** Крупный кадр маскота с `public/bars` для блока «Горный дух» на странице «Символ» */
export const SYMBOL_PAGE_MOUNTAIN_SPIRIT_IMAGE = "/bars/fghn.png";

/** Слайды по блокам `symbolPage.storyBlocks` (длина массива = числу `slideAlts` в блоке) */
export const SYMBOL_PAGE_STORY_SLIDES: readonly (readonly string[])[] = [
  [
    "/ztau/1.jpg",
    "/ztau/2.jpg",
    "/ztau/3.jpg",
  ],
  ["/aport/img.png", "/aport/img_1.png"],
  ["/yurt/img.png", "/yurt/img_1.png", "/yurt/img_2.png"],
] as const;

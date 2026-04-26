/** Слайды по блокам `symbolPage.storyBlocks` (длина массива = числу `slideAlts` в блоке) */
export const SYMBOL_PAGE_STORY_SLIDES: readonly (readonly string[])[] = [
  [
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=80",
    "https://images.unsplash.com/photo-1441974231531-6221160919e3?w=900&q=80",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80",
  ],
  ["/aport/img.png", "/aport/img_1.png"],
  ["/yurt/img.png", "/yurt/img_1.png", "/yurt/img_2.png"],
] as const;

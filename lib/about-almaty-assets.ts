/** Hero «Об Алматы»: панорама города и гор */
export const ABOUT_ALMATY_HERO_IMAGE =
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80";

/** Слайды для зигзаг-блоков (порядок = storyBlocks в messages) */
export const ABOUT_ALMATY_STORY_SLIDES: readonly (readonly string[])[] = [
  /** «Сердце яблоневого края» / алма — первый кадр из макета */
  [
    "/almapple.png",
    "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=900&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=80",
  ],
  [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=900&q=80",
    "https://images.unsplash.com/photo-1441974231531-6221160919e3?w=900&q=80",
  ],
  /** «Уникальный ритм жизни» — первый кадр из макета */
  [
    "/cit.png",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80",
    "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=900&q=80",
  ],
] as const;

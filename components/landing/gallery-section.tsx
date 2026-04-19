import Image from "next/image";
import type { Messages } from "@/messages";

const shots = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80",
  "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=900&q=80",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80",
];

type Props = {
  gallery: Messages["gallery"];
};

export function GallerySection({ gallery }: Props) {
  return (
    <section
      id="gallery"
      className="scroll-mt-16 overflow-x-clip bg-white py-14 sm:py-20"
    >
      <div className="mx-auto min-w-0 max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
          {gallery.title}
        </h2>
        <p className="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-400">
          {gallery.hint}
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {shots.map((src, i) => (
            <figure
              key={src}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-zinc-200 dark:bg-zinc-800"
            >
              <Image
                src={src}
                alt={gallery.alts[i] ?? ""}
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

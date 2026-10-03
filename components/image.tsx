import { type StaticImageData, default as NextImage } from 'next/image';

export function Image({ src, alt }: { src: StaticImageData; alt: string }) {
  return (
    <NextImage
      className="mt-6 w-full rounded-xl border border-black/10 dark:border-white/10"
      alt={alt}
      src={src}
    />
  );
}

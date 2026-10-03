import { type StaticImageData, default as NextImage } from 'next/image';

export function Image({
  src,
  alt,
  narrow,
}: {
  src: StaticImageData;
  alt: string;
  /** Photos and other decorative images: centered at a modest width
   *  instead of dominating the column. */
  narrow?: boolean;
}) {
  return (
    <NextImage
      className={`mt-6 rounded-xl border border-black/10 dark:border-white/10 ${
        narrow ? 'mx-auto w-full max-w-lg' : 'w-full'
      }`}
      alt={alt}
      src={src}
    />
  );
}

export function Video({ src, title }: { src: string, title: string }) {
  return <iframe className="mt-6 aspect-video w-full rounded-xl border border-black/10 dark:border-white/10" src={src} title={title} frameBorder={0} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen></iframe>;
}
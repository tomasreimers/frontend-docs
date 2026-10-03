import Link from 'next/link';

/**
 * Apple-style masthead: huge tight headline, gray subhead, blue action link,
 * lots of whitespace. Typography-first — no canvas, no ornament.
 */
export function Masthead() {
  return (
    <section className="flex min-h-[75vh] flex-col items-center justify-center gap-3 px-6 py-16 text-center">
      <div className="bg-linear-to-b from-gray-900 to-gray-500 bg-clip-text pb-2 text-balance text-5xl font-bold tracking-tighter text-transparent md:text-7xl dark:from-white dark:to-gray-400">
        Frontend development
      </div>
      <div className="text-balance text-3xl font-semibold tracking-tight text-gray-400 md:text-5xl dark:text-gray-500">
        for backend developers.
      </div>
      <Link
        href="/html"
        className="mt-8 text-lg font-medium text-blue-600 hover:underline dark:text-blue-400"
      >
        Start reading <span aria-hidden>→</span>
      </Link>
    </section>
  );
}

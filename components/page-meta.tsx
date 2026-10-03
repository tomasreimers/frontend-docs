/**
 * A single quiet meta line rendered below the page title:
 *
 *   Tomas Reimers / 12 minute read
 *
 * (The chapter lives in the ChapterKicker above the title.)
 *
 * `readingTime` is passed from the page's own `metadata` export (populated by
 * plugins/word_count.mjs). We intentionally don't read it from the page map:
 * in dev, Nextra compiles page-map metadata without user remark plugins, so
 * the value would be missing there.
 */
export function PageMeta({ readingTime }: { readingTime?: number }) {
  return (
    <div className="mt-4 mb-12 flex items-center gap-2 overflow-hidden whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 contrast-more:text-gray-800 contrast-more:dark:text-gray-50">
      <a
        href="https://twitter.com/tomasreimers"
        target="_blank"
        className="font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-100 hover:dark:text-white contrast-more:font-bold contrast-more:text-current"
      >
        Tomas Reimers
      </a>
      {readingTime ? (
        <>
          <DecoDiamond />
          <span>{readingTime} minute read</span>
        </>
      ) : null}
    </div>
  );
}

function DecoDiamond() {
  return (
    <span aria-hidden className="deco-diamond">
      /
    </span>
  );
}

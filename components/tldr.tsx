export function TLDR({ content }: { content: string }) {
  return (
    <div className="mt-6 text-s bg-gray-100 dark:bg-neutral-900 p-4 ring-1 ring-inset ring-gray-300 dark:ring-neutral-700 contrast-more:ring-gray-900 contrast-more:dark:ring-gray-50 contrast-more:contrast-150 rounded-md">
      <div className="text-xs font-black text-gray-600 dark:text-neutral-400">
        TLDR
      </div>
      <div className="pt-2">{content}</div>
    </div>
  );
}

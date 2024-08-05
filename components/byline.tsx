import { default as Image } from 'next/image';

import Tomas from '../public/images/people/tomas.jpg';

export function ByLine() {
  return (
    <div className="mt-2 flex items-center border-b pb-2 border-neutral-200/70 contrast-more:border-neutral-400 dark:border-primary-100/10 contrast-more:dark:border-neutral-400">
      <Image
        className="w-8 rounded-full mr-2"
        alt="Tomas Reimers"
        src={Tomas}
      />
      <div>
        <div className="text-sm">Tomas Reimers</div>
        <div className="text-xs text-gray-500 dark:text-gray-400 contrast-more:text-gray-800 contrast-more:dark:text-gray-50">
          Author
        </div>
      </div>
    </div>
  );
}

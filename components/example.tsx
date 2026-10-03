'use client';

import { Sandpack } from '@codesandbox/sandpack-react';
import { useTheme } from 'nextra-theme-docs';

export function Example({
  files,
  template,
  console,
  visibleFiles,
  dependencies,
}: {
  template: 'static' | 'react';
  files: Record<string, string>;
  console?: boolean;
  visibleFiles?: string[];
  dependencies?: Record<string, string>;
}) {
  const theme = useTheme();

  return (
    <div className="mt-6 overflow-hidden rounded-xl border border-black/10 dark:border-white/10">
      <Sandpack
        options={{
          showConsole: console,
          visibleFiles,
        }}
        customSetup={{
          dependencies,
        }}
        files={files}
        template={template}
        theme={theme.resolvedTheme === 'dark' ? 'dark' : 'light'}
      />
    </div>
  );
}

import { useRouter } from 'next/router';
import { type DocsThemeConfig, useConfig } from 'nextra-theme-docs';
import React from 'react';

const config: DocsThemeConfig = {
  faviconGlyph: '📚',
  logo: (
    <>
      <span className="font-black">FRONTEND DOCS</span>
      <span className="font-black text-xs px-2 py-1 ml-2 rounded-md border text-gray-600 border-gray-300 dark:text-gray-400 dark:border-gray-700">
        DRAFT
      </span>
    </>
  ),
  docsRepositoryBase: 'https://github.com/tomasreimers/frontend-docs',
  footer: {
    component: null,
  },
  nextThemes: {
    defaultTheme: 'dark',
  },
  feedback: {
    content: <>Questions? Leave me feedback &rarr;</>,
  },
  editLink: {
    content: <>Opinions? Suggest an edit &rarr;</>,
  },
  toc: {
    extraContent: (
      <div className="mt-4 text-xs text-gray-500 dark:text-gray-400 contrast-more:text-gray-800 contrast-more:dark:text-gray-50">
        <p>
          Hi! My name is Tomas; I have been programming for the web for 15+
          years and developed reactive frontend frameworks at Facebook.
        </p>
        <p className="mt-2">
          This site is a ~20-page, front-to-back-readable guide on some of the
          knowledge, opinions, and intuition I've picked up along the way.
        </p>
        <p className="mt-2">
          This is still under development, so feel free to suggest edits or
          follow me on Twitter for updates.
        </p>
      </div>
    ),
  },
  project: {},
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();

    const url =
      'https://frontenddocs.com' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    return (
      <>
        <meta property="og:url" content={url} />
        <meta
          property="og:title"
          content={frontMatter.title || 'Frontend docs'}
        />
        <title>{frontMatter.title || 'Frontend docs'}</title>
        <meta
          property="og:description"
          content={
            frontMatter.description ||
            'A ~20-page, front-to-back-readable guide on writing frontend for experienced developers.'
          }
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@tomasreimers" />
        <meta
          property="og:image"
          content={`https://frontenddocs.com/api/og${asPath}image.png`}
        />
      </>
    );
  },
};

export default config;

import { useRouter } from 'next/router';
import { type DocsThemeConfig, useConfig } from 'nextra-theme-docs';
import React from 'react';

const config: DocsThemeConfig = {
  faviconGlyph: '📚',
  logo: (
    <>
      <span className="font-black">FRONTEND DOCS</span>
    </>
  ),
  docsRepositoryBase: 'https://github.com/tomasreimers/frontend-docs/tree/main',
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
      <div className="my-4 text-xs text-gray-500 dark:text-gray-400 contrast-more:text-gray-800 contrast-more:dark:text-gray-50">
        <p>
          This site is a ~20-page, front-to-back-readable guide for backend
          developers learning frontend development.
        </p>
      </div>
    ),
  },
  project: {},
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { title, frontMatter } = useConfig();

    const url =
      'https://frontenddocs.com' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title || 'Frontend docs'} />
        <title>{title || 'Frontend docs'}</title>
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
          content={`https://frontenddocs.com/api/og${asPath === '/' ? '/default/' : asPath}image.png`}
        />
      </>
    );
  },
};

export default config;

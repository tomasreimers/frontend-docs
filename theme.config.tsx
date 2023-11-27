import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  faviconGlyph: "📚", 
  logo: <>
    <span className="font-black">FRONTEND DOCS</span>
    <span className="font-black text-xs px-2 py-1 ml-2 rounded-md border text-gray-600 border-gray-300 dark:text-gray-400 dark:border-gray-700">
      DRAFT
    </span>
  </>,
  docsRepositoryBase: 'https://github.com/tomasreimers/clientside',
  footer: {
    component: null,
  },
  sidebar: {
    titleComponent({type, title, route}) {
      if (type === 'doc' && route === '#') {
        return <span className='text-gray-300 dark:text-neutral-600' title="Coming soon">{title}</span>
      }
      return <>{title}</>
    }
  },
  feedback: {
    content: <>Questions? Leave me feedback &rarr;</>
  },
  editLink: {
    text: <>Opinions? Suggest an edit &rarr;</>
  },
  toc: {
    /** Classes stolen directly from the sidebar. Note: if we ever update nextra, they might remove
     * these CSS classes
     */
    extraContent: <div className='mt-4 text-xs text-gray-500 dark:text-gray-400 contrast-more:text-gray-800 contrast-more:dark:text-gray-50'>
      <p>
        Hi! My name is Tomas; I have been programming for the web for 15+ years and developed reactive frontend frameworks at Facebook.
      </p>
      <p className='mt-2'>
        This site is a ~20-page, front-to-back-readable guide on some of the knowledge, opinions, and intuition I've picked up along the way.
      </p>
      <p className='mt-2'>
        Everything is still under development, so feel free to suggest edits or follow me on Twitter for updates.
      </p>
    </div>
  },
  project: {},
  search: {
    component: null
  },
  head: (<>
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:site" content="@tomasreimers"/>
  </>),
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Frontend docs',
      defaultTitle: "Frontend docs",
      description: "A ~20-page, front-to-back-readable guide to writing frontend for experienced developers."
    }
  }
}

export default config

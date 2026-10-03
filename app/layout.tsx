import '../styles.scss';

import { Inter } from 'next/font/google';
import Script from 'next/script';
import { Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import { Layout, Navbar } from 'nextra-theme-docs';

import { FadingChrome } from '../components/fading-chrome';

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  metadataBase: new URL('https://frontenddocs.com'),
  title: {
    template: '%s - Frontend Docs',
  },
  description:
    'A ~20-page, front-to-back-readable guide on writing frontend for experienced developers.',
  applicationName: 'Frontend Docs',
  generator: 'Next.js',
  appleWebApp: {
    title: 'Frontend Docs',
  },
  twitter: {
    site: 'https://frontenddocs.com',
  },
};

export default async function RootLayout({ children }) {
  const navbar = (
    <Navbar
      logo={<span className="site-logo">Frontend Docs</span>}
    />
  );
  const pageMap = await getPageMap();
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      {/* Default Nextra blue primary — the Apple-adjacent accent. */}
      <Head>
        {/* Static emoji favicon; Nextra's built-in `faviconGlyph` data URI is intentionally not used (it renders inconsistently in Chrome). */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <body className={inter.className}>
        <FadingChrome />
        <Layout
          navbar={navbar}
          feedback={{ content: 'Feedback' }}
          editLink="Edit this page"
          footer={null}
          docsRepositoryBase="https://github.com/tomasreimers/frontend-docs/tree/main"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={pageMap}
          nextThemes={{ defaultTheme: 'dark' }}
        >
          {children}
        </Layout>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-LJBHQ5RS43"
        />
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-LJBHQ5RS43');        
      `,
          }}
        />
      </body>
    </html>
  );
}

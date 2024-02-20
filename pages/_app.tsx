import '../styles.scss'

import { Inter } from 'next/font/google'
import Script from 'next/script';
 
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })
 
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <main className={inter.className}>
    <Component {...pageProps} />
    <Script strategy='afterInteractive' src="https://www.googletagmanager.com/gtag/js?id=G-LJBHQ5RS43" />
    <Script strategy='afterInteractive' dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-LJBHQ5RS43');        
      `}} />
  </main>;
}

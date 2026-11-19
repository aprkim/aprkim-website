import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ThemeToggle from '@/components/ThemeToggle';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const title = 'April Kim';
const description =
  'April Kim: a Korean immigrant mom who builds apps, writes bilingual picture books, and shares it all on YouTube, Threads and Substack. Open to brand partnerships, speaking and co-creation.';

export const metadata: Metadata = {
  metadataBase: new URL('https://aprkim.com'),
  title,
  description,
  keywords: [
    'April Kim',
    'bilingual picture books',
    'Korean immigrant mom',
    'vibecoding',
    'building in public',
    'brand partnerships',
  ],
  authors: [{ name: 'April Kim' }],
  openGraph: {
    title,
    description,
    url: 'https://aprkim.com',
    siteName: 'April Kim',
    locale: 'en_US',
    alternateLocale: ['ko_KR'],
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'April Kim smiling on the salt flats',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    creator: '@aprkim',
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon-32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: '#6B5A90',
};

/*
 * Runs before first paint so the page never flashes the wrong language.
 * Priority: #ko / #en in the URL, then the saved choice, then the browser
 * language (Korean browsers default to Korean), then English.
 * Also applies a saved light/dark choice from the theme switch.
 */
const langScript = `(function(){try{var r=document.documentElement,s=null;try{s=localStorage.getItem('aprkim-lang')}catch(e){}if(location.hash==='#ko')s='ko';if(location.hash==='#en')s='en';if(s!=='ko'&&s!=='en')s=(navigator.language||'').toLowerCase().indexOf('ko')===0?'ko':'en';r.setAttribute('data-lang',s);r.setAttribute('lang',s);var t=null;try{t=localStorage.getItem('aprkim-theme')}catch(e){}if(t==='light'||t==='dark')r.setAttribute('data-theme',t)}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: langScript }} />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body>
        {children}
        <ThemeToggle />
      </body>
    </html>
  );
}

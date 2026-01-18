import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'April Kim — Founder, Engineer, Designer',
  description:
    'I build things that matter. Founder, engineer, and designer focused on creating thoughtful products that serve real people.',
  keywords: [
    'April Kim',
    'founder',
    'engineer',
    'designer',
    'software engineering',
    'product design',
    'startup',
  ],
  authors: [{ name: 'April Kim' }],
  openGraph: {
    title: 'April Kim — Founder, Engineer, Designer',
    description:
      'I build things that matter. Founder, engineer, and designer focused on creating thoughtful products that serve real people.',
    url: 'https://aprkim.com',
    siteName: 'April Kim',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'April Kim — Founder, Engineer, Designer',
    description:
      'I build things that matter. Founder, engineer, and designer focused on creating thoughtful products that serve real people.',
    creator: '@aprkim',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

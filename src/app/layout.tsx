import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://app-agency-nine.vercel.app'),
  title: 'App Studio — Software, Web, Mobile & AI Development',
  description:
    'We design and build custom software, web applications, mobile products, SaaS platforms and AI-powered systems for modern businesses.',
  openGraph: {
    title: 'App Studio — Software, Web, Mobile & AI Development',
    description:
      'We design and build custom software, web applications, mobile products, SaaS platforms and AI-powered systems for modern businesses.',
    url: 'https://app-agency-nine.vercel.app',
    siteName: 'App Studio',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('food-app-theme')==='dark')document.documentElement.classList.add('dark')}catch(e){}`,
          }}
        />
      </head>
      <body className={`${jakarta.variable} landing min-h-screen antialiased`} suppressHydrationWarning>{children}</body>
    </html>
  );
}

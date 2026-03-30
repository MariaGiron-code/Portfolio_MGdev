'use client';

import { Geist, Geist_Mono } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import './globals.css';
import { Providers } from '@/components/Providers';
import { EmotionCacheProvider } from '@/components/EmotionCacheProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <title>María Girón - Full-Stack Developer</title>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <meta name="description" content="Portfolio de María Girón, Desarrolladora Full-Stack especializada en arquitectura de APIs y aplicaciones web escalables." />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <EmotionCacheProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange storageKey="portfolio-theme">
            <Providers>
              {children}
            </Providers>
          </ThemeProvider>
        </EmotionCacheProvider>
      </body>
    </html>
  );
}

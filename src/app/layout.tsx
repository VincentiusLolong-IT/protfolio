'use client';

import './globals.css';
import Link from 'next/link';
import FooterTabs from '@/components/footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"></link>
      </head>
      <body>
        <nav className="test">
            <Link href="/">Homepage</Link>
            <Link href="/one">Personal Project</Link>
            <Link href="#">Contact</Link>
        </nav>
        <main>{children}</main>
        <FooterTabs/>
      </body>
    </html>
  );
}
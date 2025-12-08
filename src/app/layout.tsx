'use client';

import './globals.css';
import Link from 'next/link';
import FooterTabs from '@/components/footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <head>
        <title>Vincent Tri Nugroho Kuswiharto Lolong | Software Engineer</title>
        <meta
          name="description"
          content="Hi, I'm Vincent — a Software Engineer experienced in building and maintaining large-scale websites and backend systems. IT is not just my job, it's my hobby!"
        />
        <meta
          name="keywords"
          content="Vincent, Software Engineer, Full Stack Developer, Backend Developer, Web Development, IT Specialist"
        />
        <meta name="author" content="Vincent Tri Nugroho Kuswiharto Lolong" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:title" content="Vincent Tri Nugroho Kuswiharto Lolong | Software Engineer" />
        <meta
          property="og:description"
          content="Software Engineer skilled in large-scale web and backend development. Passionate about IT and solving real-world problems with code."
        />
        <meta property="og:image" content="https://avatars.githubusercontent.com/u/157680673?v=4" />
        <meta property="og:type" content="website" />
        <link rel="publisher" href="https://www.linkedin.com/in/vincentius-lolong/" />
        <link rel="canonical" href="https://protfolio-vin.vercel.app/" />
        <meta name="robots" content="index, follow" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
          rel="stylesheet"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Vincent Tri Nugroho Kuswiharto Lolong",
              url: "https://protfolio-vin.vercel.app/",
              sameAs: [
                "https://www.linkedin.com/in/vincentius-lolong/"
              ]
            }),
          }}
        />
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
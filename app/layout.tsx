"use client"

import React, { useEffect } from 'react'
import './globals.css'
import { GeistSans } from 'geist/font/sans'
import '../i18n'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    const title = 'aidxn.cc';
    let index = 1;
    let forward = true;
    const interval = setInterval(() => {
      document.title = title.substring(0, index);
      if (forward) {
        index++;
        if (index > title.length) {
          forward = false;
          index = title.length - 1;
        }
      } else {
        index--;
        if (index < 1) {
          forward = true;
          index = 1;
        }
      }
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
      <html lang="en" className="dark">
        <head>
          <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="The Internet home of Aidan. Come on in!" />
          <meta name="keywords" content="blog, android, developer" />
          <meta name="robots" content="index, follow" />
          <meta name="language" content="English" />
          <meta name="author" content="aidxn.cc" />
        </head>
        <body className={`${GeistSans.className} bg-gray-900 text-gray-100`}>
          {children}
        </body>
      </html>
  );
}


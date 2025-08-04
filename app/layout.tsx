import React from 'react'
import { Metadata } from 'next'
import Head from 'next/head'
import './globals.css'
import { GeistSans } from 'geist/font/sans'
import AnimatedTitle from '../components/AnimatedTitle'
import I18nProvider from '../components/I18nProvider'

export const metadata: Metadata = {
  description: "The Internet home of Aidan. Come on in!",
  openGraph: {
    type: "website",
    url: "https://aidxn.cc",
    title: "aidxn.cc",
    description: "The Internet home of Aidan. Come on in!",
    siteName: "aidxn.cc",
    images: [
      {
        url: "https://aidxn.cc/android-icon-192x192.png",
        width: 192,
        height: 192,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <Head>
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
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="author" content="aidxn.cc" />
      </Head>
      <body className={`${GeistSans.className} bg-gray-900 text-gray-100`}>
        <AnimatedTitle />
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}


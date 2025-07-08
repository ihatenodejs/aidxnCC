"use client"

import {
  SiNextdotjs,
  SiLucide,
  SiVercel,
  SiSimpleicons,
  SiFontawesome,
  SiShadcnui,
  SiTailwindcss
} from "react-icons/si"
import Link from 'next/link'
import { useState, useEffect } from 'react'

export const footerMessages = [
  [
    "Built with Next.js",
    "https://nextjs.org",
    <SiNextdotjs key="nextjs" className="text-md mr-2" />
  ],
  [
    "Icons by Lucide",
    "https://lucide.dev/",
    <SiLucide key="lucide" className="text-md mr-2" />
  ],
  [
    "Icons by Simple Icons",
    "https://simpleicons.org/",
    <SiSimpleicons key="simpleicons" className="text-md mr-2" />
  ],
  [
    "Font by Vercel",
    "https://vercel.com/font",
    <SiVercel key="vercel" className="text-md mr-2" />
  ],
  [
    "Icons by Font Awesome",
    "https://fontawesome.com/",
    <SiFontawesome key="fontawesome" className="text-md mr-2" />
  ],
  [
    "Components by Shadcn",
    "https://ui.shadcn.com/",
    <SiShadcnui key="shadcn" className="text-md mr-2" />
  ],
  [
    "Styled with Tailwind",
    "https://tailwindcss.com/",
    <SiTailwindcss key="tailwind" className="text-md mr-2" />
  ]
]

export default function RandomFooterMsg() {
  const [randomIndex, setRandomIndex] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    setRandomIndex(Math.floor(Math.random() * footerMessages.length))
  }, [])

  if (!isMounted) {
    const [message, url, icon] = footerMessages[0]
    return (
      <Link href={String(url)} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors mb-2 sm:mb-0">
        <div className="flex items-center justify-center">
          {icon}
          {message}
        </div>
      </Link>
    )
  }

  const [message, url, icon] = footerMessages[randomIndex]

  return (
    <Link href={String(url)} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors mb-2 sm:mb-0">
      <div className="flex items-center justify-center">
        {icon}
        {message}
      </div>
    </Link>
  )
}

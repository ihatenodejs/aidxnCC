"use client"

import Link from 'next/link'
import { SiClaude } from 'react-icons/si'

export default function PageHeader() {
  return (
    <>
      <Link
        href="/ai"
        className="absolute top-4 left-4 text-gray-400 hover:text-gray-200 hover:underline transition-colors duration-200 z-10 px-2 py-1 text-sm sm:text-base"
      >
        ← Back to AI
      </Link>

      <div className="my-12 text-center">
        <div className="flex justify-center mb-6">
          <SiClaude size={60} />
        </div>
        <h1 className="text-4xl font-bold mb-2 text-gray-100 glow">Claude Code Usage</h1>
        <p className="text-gray-400">How much I use Claude Code!</p>
      </div>
    </>
  )
}


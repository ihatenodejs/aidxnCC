"use client"

import type React from "react"

interface ScrollTxtProps {
  text: string
  className?: string
  type?: 'artist' | 'track' | 'release'
}

const ScrollTxt: React.FC<ScrollTxtProps> = ({ text, className = "", type }) => {
  const getTypeClass = (type?: string) => {
    switch(type) {
      case 'artist':
        return 'text-white text-xs opacity-90 font-medium text-[8px]'
      case 'track':
        return 'text-white text-xs font-bold'
      case 'release':
        return 'text-white text-xs opacity-90 font-medium text-[8px]'
      default:
        return ''
    }
  }

  const textClass = getTypeClass(type)

  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="whitespace-nowrap inline-block">
        <span className={textClass}>{text}</span>
      </div>
    </div>
  )
}

export default ScrollTxt


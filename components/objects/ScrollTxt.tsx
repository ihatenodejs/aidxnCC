"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

interface ScrollTxtProps {
  text: string
  className?: string
}

const ScrollTxt: React.FC<ScrollTxtProps> = ({ text, className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const [shouldScroll, setShouldScroll] = useState(false)

  useEffect(() => {
    if (containerRef.current && textRef.current) {
      const containerWidth = containerRef.current.offsetWidth
      const textWidth = textRef.current.offsetWidth
      setShouldScroll(textWidth > containerWidth)
    }
  }, []) // Updated dependency array

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <div
        ref={textRef}
        className={`whitespace-nowrap inline-block ${shouldScroll ? "animate-marquee hover:pause" : ""}`}
      >
        {shouldScroll ? (
          <>
            <span>{text}</span>
            <span className="mx-4">&bull;</span>
            <span>{text}</span>
            <span className="mx-4">&bull;</span>
            <span>{text}</span>
          </>
        ) : (
          text
        )}
      </div>
    </div>
  )
}

export default ScrollTxt


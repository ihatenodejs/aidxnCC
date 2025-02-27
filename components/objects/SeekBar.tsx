"use client"

import * as React from "react"

interface SeekBarProps {
  duration: string
  startPos: number
}

export function SeekBar({ duration, startPos }: SeekBarProps) {
  const getDurationInSeconds = (timeStr: string) => {
    const parts = timeStr.split(":").map(Number)
    if (parts.length === 3) {
      return parts[0] * 3600 + parts[1] * 60 + parts[2]
    } else {
      return parts[0] * 60 + parts[1]
    }
  }

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const remainingSeconds = seconds % 60

    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`
    }
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
  }

  const totalSeconds = getDurationInSeconds(duration)
  const [currentSeconds] = React.useState(startPos)
  const progress = (currentSeconds / totalSeconds) * 100

  return (
    <div className="w-full max-w-3xl mx-auto pt-4">
      <div className="relative h-16 flex items-center">
        <div className="absolute left-0 -top-0.5 text-sm">{formatTime(currentSeconds)}</div>
        <div className="absolute right-0 -top-0.5 text-sm">{duration}</div>

        <div className="w-full h-1 bg-gray-200 rounded-full">
          <div className="h-full bg-primary rounded-full" style={{ width: `${progress}%` }} />
          <div
            className="absolute top-1/2 -translate-y-1/2 size-3 bg-white rounded-full shadow-lg"
            style={{ left: `${progress}%`, marginLeft: "-6px" }}
          />
        </div>
      </div>
    </div>
  )
}


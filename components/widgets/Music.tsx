"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Play, SkipBack, SkipForward } from "lucide-react"
import LoadingSpinner from "../objects/LoadingSpinner"
import { SeekBar } from "@/components/objects/SeekBar"

interface Song {
  albumArt: string
  name: string
  artist: string
  duration: string
  link?: string
}

interface Period {
  timePeriod: string
  songs: Song[]
}

export default function Home() {
  const [timePeriod, setTimePeriod] = useState("Early Summer 2024")
  const [songs, setSongs] = useState<Song[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [currentPosition, setCurrentPosition] = useState(0)

  useEffect(() => {
    setIsLoading(true)
    fetch("/data/music.json")
      .then((response) => response.json())
      .then((data: Period[]) => {
        const selectedPeriod = data.find((period) => period.timePeriod === timePeriod)
        const songsList = selectedPeriod ? selectedPeriod.songs : []
        setSongs(songsList)
        const newIndex = Math.floor(Math.random() * songsList.length)
        setCurrentIndex(newIndex)
        // Set initial random position for the selected song
        if (songsList.length > 0) {
          const durationInSeconds = parseDuration(songsList[newIndex]?.duration || "0:00")
          setCurrentPosition(Math.floor(Math.random() * durationInSeconds))
        }
        setIsLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching music data:", error)
        setIsLoading(false)
      })
  }, [timePeriod])

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % songs.length
      const durationInSeconds = parseDuration(songs[nextIndex].duration)
      setCurrentPosition(Math.floor(Math.random() * durationInSeconds))
      return nextIndex
    })
  }

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = (prevIndex - 1 + songs.length) % songs.length
      const durationInSeconds = parseDuration(songs[nextIndex].duration)
      setCurrentPosition(Math.floor(Math.random() * durationInSeconds))
      return nextIndex
    })
  }

  const parseDuration = (duration: string): number => {
    const [minutes, seconds] = duration.split(":").map(Number)
    return minutes * 60 + seconds
  }

  return (
    <div>
      <section id="music-carousel" className="mb-12">
        {isLoading && <LoadingSpinner />}

        {!isLoading && songs.length > 0 && (
          <div className="relative">
            <Image
              src={songs[currentIndex].albumArt || "/placeholder.svg"}
              alt={songs[currentIndex].name}
              width={300}
              height={300}
              className="mb-4 rounded-lg"
            />
            <h3 className="text-2xl font-bold text-gray-100">{songs[currentIndex].name}</h3>
            <p>{songs[currentIndex].artist}</p>
            <SeekBar
              key={`${currentIndex}-${currentPosition}`}
              startPos={currentPosition}
              duration={songs[currentIndex].duration}
            />
            <div className="flex justify-center pb-2">
              <button onClick={handlePrevious} className="mr-4 cursor-pointer">
                <SkipBack className="w-8 h-8" />
              </button>
              <button className="mr-4 cursor-pointer" onClick={() => window.open(songs[currentIndex]?.link, "_blank")}>
                <Play className="w-8 h-8" />
              </button>
              <button onClick={handleNext} className="cursor-pointer">
                <SkipForward className="w-8 h-8" />
              </button>
            </div>
          </div>
        )}

        <div className="flex flex-col items-center mt-4">
          <label htmlFor="timePeriod" className="font-bold uppercase text-sm pb-1">
            Time Period
          </label>
          <select
            id="timePeriod"
            value={timePeriod}
            onChange={(e) => setTimePeriod(e.target.value)}
            className="px-3 py-2 bg-gray-700 rounded-sm mb-2"
          >
            <option value="Early Summer 2024">Early Summer 2024</option>
          </select>
        </div>
      </section>
    </div>
  )
}


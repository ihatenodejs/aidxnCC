"use client"

import type React from "react"
import { useEffect, useState, useCallback, useRef } from "react"
import Image from "next/image"
import { Music, ExternalLink, Disc, User, Loader2, AlertCircle } from "lucide-react"
import Marquee from "react-fast-marquee"
import { Progress } from "@/components/ui/progress"
interface Track {
  track_name: string
  artist_name: string
  release_name?: string
  mbid?: string
}

const ScrollableText: React.FC<{ text: string; className?: string }> = ({ text, className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [shouldScroll, setShouldScroll] = useState(false)

  useEffect(() => {
    if (containerRef.current) {
      setShouldScroll(containerRef.current.scrollWidth > containerRef.current.clientWidth)
      console.log("[i] text width checked: ", containerRef.current.scrollWidth, containerRef.current.clientWidth)
    }
  }, [containerRef])

  if (shouldScroll) {
    console.log("✅ scrolling is active")
    return (
      <Marquee gradientWidth={20} speed={20} pauseOnHover={true}>
        <div className={className}>{text}</div>
        <span className="mx-4 text-gray-400">&bull;</span>
      </Marquee>
    )
  }

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <div className="whitespace-nowrap">{text}</div>
    </div>
  )
}

const NowPlaying: React.FC = () => {
  const [track, setTrack] = useState<Track | null>(null)
  const [coverArt, setCoverArt] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [loadingStatus, setLoadingStatus] = useState("Initializing")
  const [error, setError] = useState<string | null>(null)
  const [progress, setProgress] = useState(0)
  const [steps, setSteps] = useState(0)

  const updateProgress = useCallback((current: number, total: number, status: string) => {
    setProgress(current)
    setSteps(total)
    setLoadingStatus(status)
    console.log(`[${current}/${total}] ${status}`)
  }, [])

  const fetchAlbumArt = useCallback(async (artist: string, album?: string) => {
    if (!album) {
      updateProgress(0, 0, "No album found")
      setCoverArt(null)
      setLoading(false)
      return
    }
    try {
      updateProgress(2, 3, `Searching for album: ${artist} - ${album}`)
      const response = await fetch(
        `https://musicbrainz.org/ws/2/release/?query=artist:${encodeURIComponent(
          artist
        )}%20AND%20release:${encodeURIComponent(album)}&fmt=json`
      )
      if (!response.ok) {
        updateProgress(0, 0, `Album art fetch error: ${response.status}`)
        setError("Error fetching album art (see console for details)")
        setLoading(false)
        return
      }
      const data = await response.json()
      if (data.releases && data.releases.length > 0) {
        const mbid = data.releases[0].id
        updateProgress(3, 3, "Fetching cover art...")
        setTrack(prev => prev ? { ...prev, mbid: `${mbid || null}` } : { track_name: "", artist_name: "", release_name: undefined, mbid: `${mbid || null}` })
        const coverArtResponse = await fetch(`https://coverartarchive.org/release/${mbid}/front-250`)
        if (coverArtResponse.ok) {
          setCoverArt(coverArtResponse.url)
          setLoading(false)
        } else {
          updateProgress(0, 0, "Cover art not found")
          setCoverArt(null)
          setLoading(false)
        }
      } else {
        updateProgress(0, 0, "No releases found")
        setCoverArt(null)
        setLoading(false)
      }
    } catch (error) {
      updateProgress(0, 0, `Error: ${error}`)
      setCoverArt(null)
      setLoading(false)
    }
  }, [updateProgress])

  const fetchNowPlaying = useCallback(async () => {
    updateProgress(1, 3, "Fetching current listen...")
    try {
      const response = await fetch("https://api.listenbrainz.org/1/user/p0ntus/playing-now")
      const data = await response.json()

      if (data.payload.count > 0 && data.payload.listens[0].track_metadata) {
        const trackMetadata = data.payload.listens[0].track_metadata
        console.log("= TRACK METADATA =")
        if (trackMetadata.track_name) { console.log("🎵", trackMetadata.track_name) }
        if (trackMetadata.artist_name) { console.log("🎤", trackMetadata.artist_name) }
        if (trackMetadata.release_name) { console.log("💿", trackMetadata.release_name) }
        setTrack({
          track_name: trackMetadata.track_name,
          artist_name: trackMetadata.artist_name,
          release_name: trackMetadata.release_name,
          mbid: trackMetadata.mbid,
        })
        updateProgress(2, 3, "Finding album art...")
        await fetchAlbumArt(trackMetadata.artist_name, trackMetadata.release_name)
      } else {
        updateProgress(0, 0, "No track playing")
        setLoading(false)
      }
    } catch (error) {
      updateProgress(0, 0, `Error: ${error}`)
      setError("Error fetching now playing data")
      setLoading(false)
    }
  }, [fetchAlbumArt, updateProgress])

  useEffect(() => {
    fetchNowPlaying()
  }, [fetchNowPlaying])

  if (loading) {
    console.log("[LastPlayed] Loading state rendered")
    return (
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-200">Now Playing</h2>
        <Progress value={steps > 0 ? (progress * 100) / steps : 0} className="mb-4" />
        <div className="flex items-center justify-center space-x-2">
          <Loader2 className="animate-spin text-gray-200" size={24} />
          <p className="text-gray-200">
            {loadingStatus} {steps > 0 && `(${progress}/${steps})`}
          </p>
        </div>
      </div>
    )
  }

  if (error) {
    console.log("[LastPlayed] Error state rendered")
    return (
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-200">Now Playing</h2>
        <div className="flex items-center justify-center text-red-500">
          <AlertCircle className="text-red-500 mr-2" size={24} />
          <p>{error}</p>
        </div>
      </div>
    )
  }

  if (!track) {
    console.log("[LastPlayed] Hidden due to no track data")
    return null
  }

  console.log("[LastPlayed] Rendered track:", track.track_name)
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-4 text-gray-200">Now Playing</h2>
      <div className="now-playing flex items-center">
        {coverArt ? (
          <div className="relative w-26 h-26 md:w-40 md:h-40 rounded-lg mr-4 flex-shrink-0">
            <Image
              src={coverArt || ""}
              alt={track.track_name}
              fill
              sizes="96px"
              style={{ objectFit: "cover" }}
              className="rounded-lg"
            />
          </div>
        ) : (
          <div className="w-26 h-26 md:w-40 md:h-40 bg-gray-200 rounded-lg mr-4 flex items-center justify-center flex-shrink-0">
            <Music size={48} className="text-gray-400" />
          </div>
        )}
        <div className="flex-grow min-w-0 overflow-hidden">
          <div className="flex items-center space-x-2 font-bold text-lg mb-1">
            <Music size={16} className="text-gray-200 flex-shrink-0" />
            <ScrollableText text={track.track_name} className="text-gray-200" />
          </div>
          {track.release_name && (
            <div className="flex items-center space-x-2 mb-1">
              <Disc size={16} className="text-gray-300 flex-shrink-0" />
              <ScrollableText text={track.release_name} className="text-gray-300" />
            </div>
          )}
          <div className="flex items-center space-x-2 mb-2">
            <User size={16} className="text-gray-300 flex-shrink-0" />
            <ScrollableText text={track.artist_name} className="text-gray-300" />
          </div>
          <a
            href={track.mbid ? `https://musicbrainz.org/release/${track.mbid}` : `https://listenbrainz.org/user/p0ntus`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 flex items-center mt-1 hover:text-blue-300 transition-colors duration-200"
          >
            <ExternalLink size={16} className="mr-1 flex-shrink-0" />
            <span>View on MusicBrainz</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default NowPlaying
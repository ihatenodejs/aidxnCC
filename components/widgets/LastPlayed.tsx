"use client"

import type React from "react"
import { useEffect, useState, useCallback, useRef } from "react"
import Image from "next/image"
import { Music, ExternalLink, Disc, User, Loader2 } from "lucide-react"
import Marquee from "react-fast-marquee"

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

  const fetchAlbumArt = useCallback(async (artist: string, album?: string) => {
    if (!album) {
      console.log("[i] no album found")
      setCoverArt(null)
      setLoading(false)
      return
    }
    try {
      console.log("[i] fetching album art: ", artist, album)
      const response = await fetch(
        `https://musicbrainz.org/ws/2/release/?query=artist:${encodeURIComponent(
          artist
        )}%20AND%20release:${encodeURIComponent(album)}&fmt=json`
      )
      if (!response.ok) {
        console.log("[!] album art fetch error:", response.status)
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      if (data.releases && data.releases.length > 0) {
        const mbid = data.releases[0].id
        console.log("✅ mbid found:", mbid)
        setTrack(prev => prev ? { ...prev, mbid: `${mbid || null}` } : { track_name: "", artist_name: "", release_name: undefined, mbid: `${mbid || null}` })
        const coverArtResponse = await fetch(`https://coverartarchive.org/release/${mbid}/front-250`)
        if (coverArtResponse.ok) {
          console.log("✅ cover art found")
          setCoverArt(coverArtResponse.url)
        } else {
          console.log("[i] cover art not found!")
          setCoverArt(null)
        }
      } else {
        console.log("[i] no releases in data!")
        setCoverArt(null)
      }
    } catch (error) {
      console.log("[!] album art error", error)
      setCoverArt(null)
    } finally {
      setLoading(false)
      console.log("[i] album art done")
    }
  }, [])

  const fetchNowPlaying = useCallback(async () => {
    setLoadingStatus("Fetching now playing")
    console.log("[i] fetching now playing...")
    try {
      const response = await fetch("https://api.listenbrainz.org/1/user/p0ntus/playing-now", {
        headers: {
          Authorization: `Token ${process.env.NEXT_PUBLIC_LISTENBRAINZ_TOKEN}`,
        },
      })
      if (!response.ok) {
        console.log("[!] now playing error:", response.status)
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      const data = await response.json()
      if (data.payload.count > 0 && data.payload.listens[0].track_metadata) {
        const trackMetadata = data.payload.listens[0].track_metadata
        console.log("✅ track found: ", trackMetadata.track_name)
        console.log("[i] song details: ", trackMetadata.track_name, "-", trackMetadata.artist_name, "/", trackMetadata.release_name)
        setTrack({
          track_name: trackMetadata.track_name,
          artist_name: trackMetadata.artist_name,
          release_name: trackMetadata.release_name,
          mbid: trackMetadata.mbid,
        })
        setLoadingStatus("Fetching album art")
        await fetchAlbumArt(trackMetadata.artist_name, trackMetadata.release_name)
      } else {
        console.log("[i] no track playing")
        setLoadingStatus("No track playing")
        setLoading(false)
      }
    } catch (error) {
      console.log("[!] now playing error:", error)
      setError("Error fetching now playing data")
      setLoading(false)
    }
  }, [fetchAlbumArt])

  useEffect(() => {
    fetchNowPlaying()
  }, [fetchNowPlaying])

  if (loading) {
    return (
      <div className="max-w-md mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-200">Now Playing</h2>
        <div className="flex items-center justify-center space-x-2">
          <Loader2 className="animate-spin text-gray-200" size={24} />
          <p className="text-gray-200">{loadingStatus}</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-md mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-200">Now Playing</h2>
        <div className="flex items-center justify-center text-red-500">
          <p>{error}</p>
        </div>
      </div>
    )
  }

  if (!track) {
    return (
      <div className="max-w-md mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-200">Now Playing</h2>
        <div className="flex items-center justify-center text-gray-200">
          <p>No track playing</p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-md mx-auto mb-12">
      <h2 className="text-2xl font-bold mb-4 text-gray-200">Now Playing</h2>
      <div className="now-playing flex items-center border border-gray-300 rounded-lg p-4 bg-white/10 backdrop-filter backdrop-blur-lg shadow-lg">
        {coverArt ? (
          <div className="relative w-24 h-24 rounded-lg mr-4 flex-shrink-0">
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
          <div className="w-24 h-24 bg-gray-200 rounded-lg mr-4 flex items-center justify-center flex-shrink-0">
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
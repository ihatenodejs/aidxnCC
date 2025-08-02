"use client"

import type React from "react"
import { useEffect, useState, useCallback } from "react"
import Image from "next/image"
import { Loader2, AlertCircle } from "lucide-react"
import { PiMusicNotesFill } from "react-icons/pi";
import { FaBluetoothB } from "react-icons/fa6";
import { IoBatteryFullSharp } from "react-icons/io5"
import { IoIosPlay } from "react-icons/io"
import { TbDiscOff } from "react-icons/tb"
import { Progress } from "@/components/ui/progress"
import Link from "@/components/objects/Link"
import ScrollTxt from "@/components/objects/MusicText"

interface Track {
  track_name: string
  artist_name: string
  release_name?: string
  mbid?: string
}

const NowPlaying: React.FC = () => {
  const [track, setTrack] = useState<Track | null>(null)
  const [coverArt, setCoverArt] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [loadingStatus, setLoadingStatus] = useState("Initializing")
  const [error, setError] = useState<string | null>(null)
  const [progress, setProgress] = useState(0)
  const [steps, setSteps] = useState(0)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [volume, setVolume] = useState(25)
  const [screenOn, setScreenOn] = useState(true)

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
        const coverArtResponse = await fetch(`https://coverartarchive.org/release/${mbid}/front`)
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    })
  }

  const renderScreenContent = () => {
    if (loading) {
      return (
        <div className="flex flex-col items-center justify-center h-full">
          <Loader2 className="animate-spin text-white mb-4" size={32} />
          <div className="text-white text-xs text-center px-4">
            <div className="mb-2">{loadingStatus}</div>
            <Progress value={steps > 0 ? (progress * 100) / steps : 0} className="h-1" />
          </div>
        </div>
      )
    }

    if (error) {
      return (
        <div className="flex flex-col items-center justify-center h-full">
          <AlertCircle className="text-red-500 mb-4" size={32} />
          <div className="text-red-500 text-xs text-center px-4">{error}</div>
        </div>
      )
    }

    if (!track) {
      return (
        <div className="flex flex-col items-center justify-center h-full">
          <TbDiscOff className="text-gray-400 mb-4" size={32} />
          <div className="text-gray-400 text-xs text-center px-4">
            Nothing playing
          </div>
          <div className="text-gray-500 text-xs text-center px-4 mt-2">
            Check my <Link href="https://listenbrainz.org/user/p0ntus" target="_blank" rel="noopener noreferrer" className="text-blue-400">ListenBrainz</Link>
          </div>
        </div>
      )
    }

    // normal state
    const currentTrack = track!;
    return (
      <>
        <a
          href={currentTrack.mbid ? `https://musicbrainz.org/release/${currentTrack.mbid}` : `https://listenbrainz.org/user/p0ntus`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-b from-gray-700 to-gray-900 border-b border-gray-700 px-2 py-0 block" style={{background: 'linear-gradient(to bottom, #4b5563 0%, #374151 30%, #1f2937 70%, #111827 100%)'}}
        >
          <div className="text-center leading-none">
            <ScrollTxt text={currentTrack.artist_name.toUpperCase()} type="artist" className="-my-0.5" />
            <ScrollTxt text={currentTrack.track_name} type="track" className="-my-0.5" />
            {currentTrack.release_name && <ScrollTxt text={currentTrack.release_name} type="release" className="-mt-1.5 mb-0.5" />}
          </div>
        </a>
        {/* Album art */}
        <div className="relative w-full aspect-square">
          {coverArt ? (
            <Image
              src={coverArt}
              alt={currentTrack.track_name}
              fill
              style={{ objectFit: "cover" }}
            />
          ) : (
            <div className="w-full h-full bg-gray-700 flex items-center justify-center">
              <PiMusicNotesFill size={74} className="text-gray-400" />
            </div>
          )}
        </div>
        {/* Player controls and seekbar */}
        <div className="bg-gradient-to-b from-gray-700 to-gray-900 pb-2.5 flex flex-col items-center" style={{background: 'linear-gradient(to bottom, #4b5563 0%, #374151 30%, #1f2937 70%, #111827 100%)'}}>
          <div className="flex justify-center items-center gap-0 px-2">
          <button className="hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.9)] hover:filter hover:brightness-110 transition-all duration-200 p-1 rounded-full overflow-hidden">
            <svg width="38" height="34" viewBox="0 0 24 20" className="drop-shadow-sm">
              <defs>
                <linearGradient id="skipBackGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#f9fafb" />
                  <stop offset="49%" stopColor="#e5e7eb" />
                  <stop offset="51%" stopColor="#6b7280" />
                  <stop offset="100%" stopColor="#d1d5db" />
                </linearGradient>
              </defs>
              <rect x="2" y="4" width="2" height="12" fill="url(#skipBackGradient)" />
              <polygon points="12,4 6,10 12,16" fill="url(#skipBackGradient)" />
              <polygon points="20,4 12,10 20,16" fill="url(#skipBackGradient)" />
            </svg>
          </button>
          <div className="w-[1px] h-6 bg-gray-800 mx-0.5"></div>
          <button className="hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.9)] hover:filter hover:brightness-110 transition-all duration-200 p-1 rounded-full overflow-hidden">
            <svg width="38" height="38" viewBox="0 0 24 24" className="drop-shadow-sm">
              <defs>
                <linearGradient id="pauseGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#f9fafb" />
                  <stop offset="49%" stopColor="#e5e7eb" />
                  <stop offset="51%" stopColor="#6b7280" />
                  <stop offset="100%" stopColor="#d1d5db" />
                </linearGradient>
              </defs>
              <rect x="6" y="4" width="4" height="16" fill="url(#pauseGradient)" />
              <rect x="14" y="4" width="4" height="16" fill="url(#pauseGradient)" />
            </svg>
          </button>
          <div className="w-[1px] h-6 bg-gray-800 mx-1"></div>
          <button className="hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.9)] hover:filter hover:brightness-110 transition-all duration-200 p-1 rounded-full overflow-hidden">
            <svg width="38" height="34" viewBox="0 0 24 20" className="drop-shadow-sm">
              <defs>
                <linearGradient id="skipForwardGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#f9fafb" />
                  <stop offset="49%" stopColor="#e5e7eb" />
                  <stop offset="51%" stopColor="#6b7280" />
                  <stop offset="100%" stopColor="#d1d5db" />
                </linearGradient>
              </defs>
              <polygon points="2,4 9,10 2,16" fill="url(#skipForwardGradient)" />
              <polygon points="9,4 17,10 9,16" fill="url(#skipForwardGradient)" />
              <rect x="18" y="4" width="2" height="12" fill="url(#skipForwardGradient)" />
            </svg>
          </button>
          </div>
          <div className="relative w-full flex justify-center mt-1">
            <div className="w-38 h-2 bg-gray-800 rounded-full relative">
              <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-600 rounded-full" style={{width: `${volume}%`}} />
              <div
                className="absolute top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-500 rounded-full border border-gray-400 shadow-inner" style={{
                left: `calc(${volume}% - 8px)`,
                backgroundImage: 'radial-gradient(circle at 30% 30%, #f0f0f0 0%, #c0c0c0 60%, #808080 100%), repeating-conic-gradient(#f9fafb 0deg 45deg, #9ca3af 45deg 90deg)',
                backgroundBlendMode: 'overlay',
                boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.3), 0 1px 2px rgba(255,255,255,0.5)'
              }}></div>
              <input type="range" min="0" max="100" value={volume} onChange={(e) => setVolume(Number(e.target.value))} className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer" />
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className="flex justify-center items-center">
      <div className="relative w-52 h-95 bg-[#D4C29A] rounded-xs shadow-2xl border border-[#BFAF8A]">
        {/* Volume buttons */}
        <div className="absolute -left-[2.55px] top-8 rounded-l w-[1.75px] flex flex-col z-0">
          <div className="h-8 bg-[#BFAF8A] border-b border-[#A09070] rounded-l cursor-pointer" onClick={() => setVolume(v => Math.min(100, v + 5))}></div> {/* up */}
          <div className="h-12 bg-[#A09070] translate-x-[0.65px] -my-[0.85px]"></div> {/* play/pause */}
          <div className="h-8 bg-[#BFAF8A] border-t border-[#A09070] rounded-l cursor-pointer" onClick={() => setVolume(v => Math.max(0, v - 5))}></div> {/* down */}
        </div>
        {/* Top power button */}
        <div className="absolute right-1 -top-[3px] w-9 h-[3px] bg-[#BFAF8A] rounded-t-2xl cursor-pointer" onClick={() => setScreenOn(prev => !prev)}></div>
        {/* White bezel (fuses screen+home btn) */}
        <div className="absolute inset-2 bg-white rounded-sm overflow-hidden flex flex-col">
          {/* Virtual screen */}
        <div className="mx-2 mt-2 flex-1 bg-black overflow-hidden flex flex-col">
            {screenOn && (
              <div className="bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 border-b border-gray-700" style={{background: 'linear-gradient(to bottom, #4b5563 0%, #374151 30%, #1f2937 70%, #111827 100%)'}}>
                <div className="relative flex items-center pr-1 py-0.5">
                  <FaBluetoothB size={14} className="text-gray-400" />
                  <div className="absolute left-1/2 transform -translate-x-1/2 text-white text-xs font-medium">{formatTime(currentTime)}</div>
                  <div className="flex items-center gap-0.5 ml-auto ">
                    <IoIosPlay size={14} className="text-white" />
                    <IoBatteryFullSharp size={18} className="text-white" />
                  </div>
                </div>
              </div>
            )}
            {screenOn ? renderScreenContent() : (
              <div className="w-full h-full bg-black"></div>
            )}
            {/* Player controls and seekbar */}
            {screenOn && track && (
              <div className="bg-gradient-to-b from-gray-700 to-gray-900 pb-2.5 flex flex-col items-center" style={{background: 'linear-gradient(to bottom, #4b5563 0%, #374151 30%, #1f2937 70%, #111827 100%)'}}>
                <div className="flex justify-center items-center gap-0 px-2">
                <button className="hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.9)] hover:filter hover:brightness-110 transition-all duration-200 p-1 rounded-full overflow-hidden">
                  <svg width="38" height="34" viewBox="0 0 24 20" className="drop-shadow-sm">
                    <defs>
                      <linearGradient id="skipBackGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#f9fafb" />
                        <stop offset="49%" stopColor="#e5e7eb" />
                        <stop offset="51%" stopColor="#6b7280" />
                        <stop offset="100%" stopColor="#d1d5db" />
                      </linearGradient>
                    </defs>
                    <rect x="2" y="4" width="2" height="12" fill="url(#skipBackGradient)" />
                    <polygon points="12,4 6,10 12,16" fill="url(#skipBackGradient)" />
                    <polygon points="20,4 12,10 20,16" fill="url(#skipBackGradient)" />
                  </svg>
                </button>
                <div className="w-[1px] h-6 bg-gray-800 mx-0.5"></div>
                <button className="hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.9)] hover:filter hover:brightness-110 transition-all duration-200 p-1 rounded-full overflow-hidden">
                  <svg width="38" height="38" viewBox="0 0 24 24" className="drop-shadow-sm">
                    <defs>
                      <linearGradient id="pauseGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#f9fafb" />
                        <stop offset="49%" stopColor="#e5e7eb" />
                        <stop offset="51%" stopColor="#6b7280" />
                        <stop offset="100%" stopColor="#d1d5db" />
                      </linearGradient>
                    </defs>
                    <rect x="6" y="4" width="4" height="16" fill="url(#pauseGradient)" />
                    <rect x="14" y="4" width="4" height="16" fill="url(#pauseGradient)" />
                  </svg>
                </button>
                <div className="w-[1px] h-6 bg-gray-800 mx-1"></div>
                <button className="hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.9)] hover:filter hover:brightness-110 transition-all duration-200 p-1 rounded-full overflow-hidden">
                  <svg width="38" height="34" viewBox="0 0 24 20" className="drop-shadow-sm">
                    <defs>
                      <linearGradient id="skipForwardGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#f9fafb" />
                        <stop offset="49%" stopColor="#e5e7eb" />
                        <stop offset="51%" stopColor="#6b7280" />
                        <stop offset="100%" stopColor="#d1d5db" />
                      </linearGradient>
                    </defs>
                    <polygon points="2,4 9,10 2,16" fill="url(#skipForwardGradient)" />
                    <polygon points="9,4 17,10 9,16" fill="url(#skipForwardGradient)" />
                    <rect x="18" y="4" width="2" height="12" fill="url(#skipForwardGradient)" />
                  </svg>
                </button>
                </div>
                <div className="relative w-full flex justify-center mt-1">
                  <div className="w-38 h-2 bg-gray-800 rounded-full relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-600 rounded-full" style={{width: `${volume}%`}} />
                    <div
                      className="absolute top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-500 rounded-full border border-gray-400 shadow-inner" style={{
                      left: `calc(${volume}% - 8px)`,
                      backgroundImage: 'radial-gradient(circle at 30% 30%, #f0f0f0 0%, #c0c0c0 60%, #808080 100%), repeating-conic-gradient(#f9fafb 0deg 45deg, #9ca3af 45deg 90deg)',
                      backgroundBlendMode: 'overlay',
                      boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.3), 0 1px 2px rgba(255,255,255,0.5)'
                    }}></div>
                    <input type="range" min="0" max="100" value={volume} onChange={(e) => setVolume(Number(e.target.value))} className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer" />
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Home button */}
          <div className="flex justify-center py-2">
            <div className="w-8 h-8 bg-white rounded-full border border-gray-300 shadow flex items-center justify-center">
              <div className="w-4 h-4 border-1 border-[#D4C29A] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NowPlaying
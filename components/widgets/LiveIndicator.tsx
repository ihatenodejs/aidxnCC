"use client"

import { useEffect, useState } from "react"
import { connectSocket } from "@/lib/socket"

const LiveIndicator = () => {
  const [connected, setConnected] = useState(false)

  useEffect(() => {
    const socket = connectSocket()
    
    socket.on('connect', () => {
      setConnected(true)
    })

    socket.on('disconnect', () => {
      setConnected(false)
    })

    return () => {
      socket.off('connect')
      socket.off('disconnect')
    }
  }, [])

  return (
    <div className="flex items-center gap-1 bg-black bg-opacity-50 rounded-full px-2 py-1">
      <div className={`w-1 h-1 rounded-full ${connected ? "bg-red-400 animate-pulse" : "bg-gray-400"}`}></div>
      <div className="text-white text-xs">
        {connected ? "LIVE" : "Connecting..."}
      </div>
    </div>
  )
}

export default LiveIndicator
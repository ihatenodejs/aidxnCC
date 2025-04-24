import { NextResponse } from 'next/server'

export const runtime = 'edge';

export async function GET() {
  try {
    const response = await fetch("https://api.listenbrainz.org/1/user/p0ntus/playing-now", {
      headers: {
        Authorization: `Token ${process.env.LISTENBRAINZ_TOKEN}`,
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching now playing:', error)
    return NextResponse.json({ error: 'Failed to fetch now playing data' }, { status: 500 })
  }
} 
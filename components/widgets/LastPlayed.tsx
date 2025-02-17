"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLastfm } from '@fortawesome/free-brands-svg-icons'
import { faCompactDisc, faUser } from '@fortawesome/free-solid-svg-icons'

interface Track {
  name: string;
  artist: { '#text': string };
  album: { '#text': string };
  image: { '#text': string; size: string }[];
  url: string;
  '@attr'?: { nowplaying: string };
}

const LastPlayed: React.FC = () => {
  const [track, setTrack] = useState<Track | null>(null);
  const apiUrl = process.env.LASTFM_API_URL || 'https://lastfm-last-played.biancarosa.com.br/aidxn_/latest-song';

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setTrack(data.track))
      .catch(error => console.error('Error fetching now playing:', error));
  }, [apiUrl]);

  if (!track) {
    return (
      <div className="max-w-2xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-200">Last Played Song</h2>
        <div className="flex justify-center items-center border border-gray-300 rounded-lg p-4 max-w-md mt-8">
          <span className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status"></span>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mb-12">
      <h2 className="text-2xl font-bold mb-4 text-gray-200">Last Played Song</h2>
      <div className="now-playing flex items-center border border-gray-300 rounded-lg p-4 max-w-md mt-8 bg-white/10 backdrop-filter backdrop-blur-lg">
        <Image 
          src={track.image.find(img => img.size === 'large')?.['#text'] || '/placeholder.png'} 
          alt={track.name} 
          width={96} 
          height={96} 
          className="rounded-lg mr-4"
        />
        <div>
          <p className="font-bold">{track.name}</p>
          <p><FontAwesomeIcon icon={faCompactDisc} className="mr-1" /> {track.album['#text']}</p>
          <i><FontAwesomeIcon icon={faUser} className="mr-1" /> {track.artist['#text']}</i>
          <a href={track.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 flex items-center">
            <FontAwesomeIcon icon={faLastfm} className="mr-2" /> View on Last.fm
          </a>
        </div>
      </div>
    </div>
  );
};

export default LastPlayed;
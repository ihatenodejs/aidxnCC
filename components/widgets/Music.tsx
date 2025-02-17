"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Play, SkipBack, SkipForward } from 'lucide-react';
import LoadingSpinner from '../objects/LoadingSpinner';

interface Song {
  albumArt: string;
  name: string;
  artist: string;
  duration: string;
  link?: string;
}

interface Period {
  timePeriod: string;
  songs: Song[];
}

export default function Home() {
  const [timePeriod, setTimePeriod] = useState('Early Summer 2024');
  const [songs, setSongs] = useState<Song[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch('/data/music.json')
      .then(response => response.json())
      .then((data: Period[]) => {
        const selectedPeriod = data.find((period) => period.timePeriod === timePeriod);
        const songsList = selectedPeriod ? selectedPeriod.songs : [];
        setSongs(songsList);
        setCurrentIndex(Math.floor(Math.random() * songsList.length));
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching music data:', error);
        setIsLoading(false);
      });
  }, [timePeriod]);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % songs.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((currentIndex - 1 + songs.length) % songs.length);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <section id="music-carousel" className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-gray-200">Music By Time Period</h2>
        <div className="mb-4 pb-4">
          <label htmlFor="timePeriod" className="text-gray-300">Time Period:</label>
          <select
            id="timePeriod"
            value={timePeriod}
            onChange={(e) => setTimePeriod(e.target.value)}
            className="ml-2 p-2 bg-gray-700 text-gray-300 rounded-sm"
          >
            <option value="Early Summer 2024">Early Summer 2024</option>
          </select>
        </div>

        {isLoading && <LoadingSpinner />}

        {!isLoading && songs.length > 0 && (
          <div className="relative">
            <div className="text-center">
              <Image
                src={songs[currentIndex].albumArt}
                alt={songs[currentIndex].name}
                width={300}
                height={300}
                className="mx-auto mb-4 rounded-lg"
              />
              <h3 className="text-2xl font-bold text-gray-100">{songs[currentIndex].name}</h3>
              <p className="text-gray-300">{songs[currentIndex].artist}</p>
              <p className="text-gray-300">{songs[currentIndex].duration}</p>
              <div className="mt-4">
                <button onClick={handlePrevious} className="mr-4 text-gray-300">
                  <SkipBack className="w-8 h-8" />
                </button>
                <button className="mr-4 text-gray-300" onClick={() => window.open(songs[currentIndex]?.link, '_blank')}>
                  <Play className="w-8 h-8" />
                </button>
                <button onClick={handleNext} className="text-gray-300">
                  <SkipForward className="w-8 h-8" />
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}


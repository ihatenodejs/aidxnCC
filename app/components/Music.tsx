"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStepBackward, faStepForward, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const [timePeriod, setTimePeriod] = useState('2020s');
  interface Song {
    albumArt: string;
    name: string;
    artist: string;
    duration: string;
    link?: string;
  }
  const [songs, setSongs] = useState<Song[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch('/data/music.json')
      .then(response => response.json())
      .then(data => {
        interface Song {
          albumArt: string;
          name: string;
          artist: string;
          duration: string;
        }
        interface Period {
          timePeriod: string;
          songs: Song[];
        }
        const selectedPeriod = data.find((period: Period) => period.timePeriod === timePeriod);        const songsList = selectedPeriod ? selectedPeriod.songs : [];
        setSongs(songsList);
        setCurrentIndex(Math.floor(Math.random() * songsList.length));
      });
  }, [timePeriod]);

  useEffect(() => {
    const selectElement = document.getElementById('timePeriod');
    if (selectElement) {
      setTimePeriod((selectElement as HTMLSelectElement).value);
    }
  }, []);

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
            className="ml-2 p-2 bg-gray-700 text-gray-300 rounded"
          >
            <option value="Summer 2024">Summer 2024</option>
          </select>
        </div>

        {songs.length > 0 && (
          <div className="relative">
            <button onClick={handlePrevious} className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-300">
              <FontAwesomeIcon icon={faArrowLeft} size="2x" />
            </button>

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
                <button className="mr-4 text-gray-300">
                  <FontAwesomeIcon icon={faStepBackward} size="2x" />
                </button>
                <button className="mr-4 text-gray-300" onClick={() => window.open(songs[currentIndex]?.link, '_blank')}>
                  <FontAwesomeIcon icon={faPlay} size="2x" />
                </button>
                <button className="text-gray-300">
                  <FontAwesomeIcon icon={faStepForward} size="2x" />
                </button>
              </div>
            </div>

            <button onClick={handleNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-300">
              <FontAwesomeIcon icon={faArrowRight} size="2x" />
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
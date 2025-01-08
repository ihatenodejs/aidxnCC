import React from 'react';
import BackButton from '../../../BackButton';

const WhatWasGoingOnLateSummer2024: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <h1 className="text-4xl font-bold my-2 text-center text-gray-200" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}>
        What was going on during the start of summer 2024?
      </h1>
      <div className="px-6 pt-6">
        <p className="text-gray-300 mb-4">
          During Early Summer 2024, I was walking a ton in towns all across Massachusetts. During this time, I would listen to a <i>lot</i> of music. I regret not finding out about LastFM for so long... During this time, I was always happy, especially when I had music or a YouTube video playing. I would also call my friends often during this time.
        </p>
        <h2 className="text-2xl font-semibold mb-4 mt-12 text-gray-200">Context</h2>
        <p className="text-gray-300 mb-4">
          This summer was the one where I came back from my abusive treatment center. I was finally free from the place that had been holding me back for so long. So as you can imagine, I felt free as a bird.
        </p>
        <p className="text-gray-300 mb-4">
          With this chance to explore, being in so many different towns, I really had a good time and made good memories, which I will not be writing about.
        </p>
        <BackButton href="/music" />
      </div>
    </div>
  );
};

export default WhatWasGoingOnLateSummer2024;
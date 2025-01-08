import React from 'react';
import BackButton from '../../../objects/BackButton';

const WhatWasGoingOnLateSummer2024: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <h1 className="text-4xl font-bold my-2 text-center text-gray-200" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}>
        What was going on during the end of summer 2024?
      </h1>
      <div className="px-6 pt-6">
        <p className="text-gray-300 mb-4">
          During late summer 2024, my depression and the &quot;after effects&quot; of treatment really kicked in. I had quit going to my therapist as I didn&apos;t feel like they were doing much of anything for me. I am very happy to say that since I quit my therapist, I have been doing much better.
        </p>
        <p className="text-gray-300 mb-4">
          At this time, the baseball season was over, so I was walking around much less. I was still listening to a lot of music and I started getting into less depressed songs. I was also starting to get into more &quot;normal&quot; music, which was an interesting phase (which I believe I&apos;m still in).
        </p>
        <p className="text-gray-300 mb-4">
          A highlight of late summer 2024 was a vacation I took. This vacation has entire albums which remind me of it and I will always cherish those memories deeply.
        </p>
        <BackButton href="/music" />
      </div>
    </div>
  );
};

export default WhatWasGoingOnLateSummer2024;

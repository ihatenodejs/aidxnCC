import React from 'react';
import Link from 'next/link';

const MusicInfo: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto text-center text-gray-200">
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Late Summer 2024</h2>
        <div className="flex justify-center space-x-4">
          <Link href="/time-periods/late-summer-2024/what-was-going-on" legacyBehavior>
            <a className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
              WHAT WAS GOING ON
            </a>
          </Link>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Early Summer 2024</h2>
        <div className="flex justify-center space-x-4">
          <Link href="/time-periods/early-summer-2024/what-was-going-on" legacyBehavior>
            <a className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
              WHAT WAS GOING ON
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MusicInfo;
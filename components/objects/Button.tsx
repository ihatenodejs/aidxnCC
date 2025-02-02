import React from 'react';
import Link from 'next/link';

interface MusicInfoButtonProps {
  href: string;
  label: string;
}

const MusicInfoButton: React.FC<MusicInfoButtonProps> = ({ href, label }) => {
  return (
    <Link 
      href={href}
      className="inline-block bg-gray-800 text-white font-bold py-2 px-4 rounded shadow-md transition-all duration-300 ease-in-out hover:bg-gray-700 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
    >
      {label}
    </Link>
  );
};

export default MusicInfoButton;
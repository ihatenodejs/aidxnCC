import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

interface BackButtonProps {
  href: string;
  label?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ href, label = 'Back' }) => {
  return (
    <Link 
      href={href}
      className="inline-flex items-center px-4 py-2 mt-4 text-white bg-gray-800 rounded shadow-md transition-all duration-300 ease-in-out hover:bg-gray-700 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      aria-label={`Go back to ${label}`}
    >
      <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
      {label}
    </Link>
  );
};

export default BackButton;
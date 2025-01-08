import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const BackButton: React.FC<{ href: string }> = ({ href }) => {
  return (
    <Link href={href} legacyBehavior>
      <a className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 mt-4 rounded inline-flex items-center">
        <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
        Back
      </a>
    </Link>
  );
};

export default BackButton;
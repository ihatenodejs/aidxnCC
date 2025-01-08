"use client";

import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWordpressSimple } from '@fortawesome/free-brands-svg-icons';
import { faLink, faHouse, faUser, faPhone, faBars, faTimes, faTerminal, faMusic } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800">
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-gray-300 hover:text-white text-2xl">aidxn.cc</Link>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-300 focus:outline-none">
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-2xl" />
          </button>
        </div>
        <ul className={`flex-col md:flex-row md:flex space-x-0 md:space-x-3 absolute md:static bg-gray-800 md:bg-transparent w-full md:w-auto left-0 md:left-auto top-16 md:top-auto transition-all duration-300 ease-in-out ${isOpen ? 'flex' : 'hidden'}`}>
          <li><Link href="/" className="flex items-center text-gray-300 hover:text-white hover:bg-gray-700 rounded-md px-3 py-2 transition-all"><FontAwesomeIcon icon={faHouse} className="text-md mr-2" /> Home</Link></li>
          <li><Link href="/about" className="flex items-center text-gray-300 hover:text-white hover:bg-gray-700 rounded-md px-3 py-2 transition-all"><FontAwesomeIcon icon={faUser} className="text-md mr-2" /> About</Link></li>
          <li><Link href="/contact" className="flex items-center text-gray-300 hover:text-white hover:bg-gray-700 rounded-md px-3 py-2 transition-all"><FontAwesomeIcon icon={faPhone} className="text-md mr-2" /> Contact</Link></li>
          <li><Link href="/domains" className="flex items-center text-gray-300 hover:text-white hover:bg-gray-700 rounded-md px-3 py-2 transition-all"><FontAwesomeIcon icon={faLink} className="text-md mr-2" /> Domains</Link></li>
          <li><Link href="https://blog.aidxn.fun/" className="flex items-center text-gray-300 hover:text-white hover:bg-gray-700 rounded-md px-3 py-2 transition-all"><FontAwesomeIcon icon={faWordpressSimple} className="text-md mr-2" /> Blog</Link></li>
          <li><Link href="/music" className="flex items-center text-gray-300 hover:text-white hover:bg-gray-700 rounded-md px-3 py-2 transition-all"><FontAwesomeIcon icon={faMusic} className="text-md mr-2" /> Music by Time</Link></li>
          <li className="flex items-center">
            <Link href="https://tilde.club/~lxu" className="flex items-center text-gray-300 hover:text-white hover:bg-gray-700 rounded-md px-3 py-2 transition-all">
              <FontAwesomeIcon icon={faTerminal} className="text-md mr-2" /> Tilde
            </Link>
            <a href="https://tilde.wiki/Tildeverse" className="text-gray-300 hover:text-green-400 ml-1" target="_blank" rel="noopener noreferrer">
              <sup>what?</sup>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWordpressSimple } from '@fortawesome/free-brands-svg-icons';
import { faLink, faHouse, faUser, faPhone, faBars, faTimes, faTerminal, faMusic } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface NavItemProps {
  href: string;
  icon: IconDefinition;
  children: React.ReactNode;
}

const NavItem = ({ href, icon, children }: NavItemProps) => (
  <div className="nav-item">
    <Link href={href} className="flex items-center text-gray-300 hover:text-white hover:bg-gray-700 rounded-md px-3 py-2 transition-all duration-300">
      <FontAwesomeIcon icon={icon} className="text-md mr-2" />
      {children}
    </Link>
  </div>
);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-gray-800 shadow-lg">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-gray-300 hover:text-white text-2xl font-bold transition-all duration-300 hover:glow">
          aidxn.cc
        </Link>
        <button onClick={toggleMenu} className="md:hidden text-gray-300 focus:outline-none">
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-2xl" />
        </button>
        <ul className={`flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 absolute md:static bg-gray-800 md:bg-transparent w-full md:w-auto left-0 md:left-auto top-16 md:top-auto p-4 md:p-0 transition-all duration-300 ease-in-out ${isOpen ? 'flex' : 'hidden md:flex'}`}>
          <NavItem href="/" icon={faHouse}>Home</NavItem>
          <NavItem href="/about" icon={faUser}>About</NavItem>
          <NavItem href="/contact" icon={faPhone}>Contact</NavItem>
          <NavItem href="/domains" icon={faLink}>Domains</NavItem>
          <NavItem href="https://blog.aidxn.fun/" icon={faWordpressSimple}>Blog</NavItem>
          <NavItem href="/music" icon={faMusic}>Music by Time</NavItem>
          <div className="flex items-center">
            <NavItem href="https://tilde.club/~lxu" icon={faTerminal}>Tilde</NavItem>
            <a href="https://tilde.wiki/Tildeverse" className="text-gray-300 hover:text-green-400 ml-1 text-sm" target="_blank" rel="noopener noreferrer">
              <sup>what?</sup>
            </a>
          </div>
        </ul>
      </nav>
    </header>
  );
}


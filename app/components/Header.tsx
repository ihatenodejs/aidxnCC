"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { House, Link as LinkIcon, User, Phone, BookOpen, Rss, Music, SquareTerminal, X, Menu } from 'lucide-react';

interface NavItemProps {
  href: string;
  icon: React.ElementType;
  children: React.ReactNode;
}

const NavItem = ({ href, icon, children }: NavItemProps) => (
  <div className="nav-item">
    <Link href={href} className="flex items-center text-gray-300 hover:text-white hover:bg-gray-700 rounded-md px-3 py-2 transition-all duration-300">
      {React.createElement(icon, { className: "text-md mr-2", strokeWidth: 2.5, size: 20 })}
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
          {isOpen ? <X className="text-2xl" /> : <Menu className="text-2xl" />}
        </button>
        <ul className={`flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 absolute md:static bg-gray-800 md:bg-transparent w-full md:w-auto left-0 md:left-auto top-16 md:top-auto p-4 md:p-0 transition-all duration-300 ease-in-out ${isOpen ? 'flex' : 'hidden md:flex'}`}>
          <NavItem href="/" icon={House}>Home</NavItem>
          <NavItem href="/about" icon={User}>About</NavItem>
          <NavItem href="/contact" icon={Phone}>Contact</NavItem>
          <NavItem href="/domains" icon={LinkIcon}>Domains</NavItem>
          <NavItem href="/manifesto" icon={BookOpen}>Manifesto</NavItem>
          <NavItem href="https://blog.aidxn.fun/" icon={Rss}>Blog</NavItem>
          <NavItem href="/music" icon={Music}>Music by Time</NavItem>
          <div className="flex items-center">
            <NavItem href="https://tilde.club/~lxu" icon={SquareTerminal}>Tilde</NavItem>
            <a href="https://tilde.wiki/Tildeverse" className="text-gray-300 hover:text-green-400 ml-1 text-sm" target="_blank" rel="noopener noreferrer">
              <sup>what?</sup>
            </a>
          </div>
        </ul>
      </nav>
    </header>
  );
}


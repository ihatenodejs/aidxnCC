"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { House, Link as LinkIcon, User, Phone, BookOpen, Music, Rss, X, Menu } from 'lucide-react';

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
        <button onClick={toggleMenu} className="lg:hidden text-gray-300 focus:outline-hidden">
          {isOpen ? <X className="text-2xl" /> : <Menu className="text-2xl" />}
        </button>
        <ul className={`flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 absolute lg:static bg-gray-800 lg:bg-transparent w-full lg:w-auto left-0 lg:left-auto top-16 lg:top-auto p-4 lg:p-0 transition-all duration-300 ease-in-out ${isOpen ? 'flex' : 'hidden lg:flex'}`}>
          <NavItem href="/" icon={House}>Home</NavItem>
          <NavItem href="/about" icon={User}>About</NavItem>
          <NavItem href="/contact" icon={Phone}>Contact</NavItem>
          <NavItem href="/domains" icon={LinkIcon}>Domains</NavItem>
          <NavItem href="/manifesto" icon={BookOpen}>Manifesto</NavItem>
          <NavItem href="/music" icon={Music}>Music</NavItem>
          <NavItem href="https://disfunction.blog" icon={Rss}>Blog</NavItem>
        </ul>
      </nav>
    </header>
  );
}


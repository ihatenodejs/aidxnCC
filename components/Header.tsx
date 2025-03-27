"use client"

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { House, Link as LinkIcon, User, Phone, BookOpen, Music, Rss, X, Menu, Globe, ChevronDown } from 'lucide-react'
import { useTranslation } from 'react-i18next'

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

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const languages = [
    { code: 'en-US', name: 'English' },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
    if (e.key === 'Enter' || e.key === ' ') {
      setIsOpen(!isOpen);
    }
  };

  const buttonContent = (
    <>
      <Globe className="text-md mr-2" strokeWidth={2.5} size={20} />
      {languages.find(lang => lang.code === i18n.language)?.name || 'English'}
      {!isMobile && (
        <ChevronDown className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} strokeWidth={2.5} size={20} />
      )}
    </>
  );

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        className={`flex items-center text-gray-300 hover:text-white hover:bg-gray-700 rounded-md px-3 py-2 transition-all duration-300 ${isMobile ? 'w-full' : ''}`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {buttonContent}
      </button>
      {isOpen && (
        <div 
          className={`${
            isMobile 
              ? 'relative mt-1 w-full bg-gray-800 rounded-md shadow-lg' 
              : 'absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-50'
          }`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="language-menu"
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`block w-full text-left px-4 py-2 text-sm ${
                i18n.language === lang.code
                  ? 'text-white bg-gray-700'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
              role="menuitem"
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

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
          <div className="lg:hidden">
            <LanguageSelector />
          </div>
        </ul>
        <div className="hidden lg:block">
          <LanguageSelector />
        </div>
      </nav>
    </header>
  );
}


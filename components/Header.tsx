"use client"

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import {
  House,
  Link as LinkIcon,
  User,
  Phone,
  BookOpen,
  X,
  Menu,
  Globe,
  ChevronDown,
  ChevronRight,
  Brain,
  Smartphone
} from 'lucide-react'
import { SiClaude, SiGoogle } from 'react-icons/si'
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

interface DropdownNavItemProps {
  id: string;
  href: string;
  icon: React.ElementType;
  children: React.ReactNode;
  dropdownContent: React.ReactNode;
  isMobile?: boolean;
  isOpen?: boolean;
  onOpenChange?: (id: string | null) => void;
}

const DropdownNavItem = ({ id, href, icon, children, dropdownContent, isMobile = false, isOpen = false, onOpenChange }: DropdownNavItemProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onOpenChange?.(null);
      }
    };

    if (isMobile && isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isMobile, isOpen, onOpenChange]);

  const handleMouseEnter = () => {
    if (!isMobile) {
      onOpenChange?.(id);
    }
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    if (!isMobile) {
      const relatedTarget = e.relatedTarget as HTMLElement;
      if (relatedTarget && dropdownRef.current?.contains(relatedTarget)) {
        return;
      }
      onOpenChange?.(null);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    if (isMobile) {
      e.preventDefault();
      onOpenChange?.(isOpen ? null : id);
    }
  };

  return (
    <div 
      className="nav-item relative"
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link 
        href={href}
        onClick={isMobile ? handleClick : undefined}
        className="flex items-center text-gray-300 hover:text-white hover:bg-gray-700 rounded-md px-3 py-2 transition-all duration-300 w-full"
      >
        {React.createElement(icon, { className: "text-md mr-2", strokeWidth: 2.5, size: 20 })}
        <span className="flex-1">{children}</span>
        <ChevronDown className={`ml-2 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} strokeWidth={2.5} size={16} />
      </Link>
      {isOpen && (
        <>
          {/* Invisible bridge to handle gap */}
          {!isMobile && (
            <div className="absolute left-0 top-full w-full h-1 z-50" />
          )}
          <div 
            className={`${
              isMobile 
                ? 'relative mt-2 w-full bg-gray-700/50 rounded-md' 
                : 'absolute left-0 mt-1 z-50 flex'
            }`}
          >
            {dropdownContent}
          </div>
        </>
      )}
    </div>
  );
};

interface NestedDropdownItemProps {
  children: React.ReactNode;
  nestedContent: React.ReactNode;
  isMobile?: boolean;
}

const NestedDropdownItem = ({ children, nestedContent, isMobile = false }: NestedDropdownItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    if (!isMobile) {
      const relatedTarget = e.relatedTarget as HTMLElement;
      if (relatedTarget && itemRef.current?.contains(relatedTarget)) {
        return;
      }
      setIsOpen(false);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    if (isMobile) {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  if (isMobile) {
    return (
      <div 
        className="relative"
        ref={itemRef}
      >
        <button
          onClick={handleClick}
          className="flex items-center justify-between w-full text-left px-5 py-3 text-base text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-all duration-300"
        >
          <span className="flex items-center">
            <Smartphone className="mr-3" strokeWidth={2.5} size={18} />
            {children}
          </span>
          <ChevronRight className={`transform transition-transform duration-200 ${isOpen ? '-rotate-90' : ''}`} strokeWidth={2.5} size={18} />
        </button>
        {isOpen && (
          <div className="relative mt-2 ml-4 bg-gray-700/30 rounded-md">
            {nestedContent}
          </div>
        )}
      </div>
    );
  }

  return (
    <div 
      className="relative"
      ref={itemRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={handleClick}
        className="flex items-center justify-between w-full text-left px-5 py-3 text-base text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-all duration-300"
      >
        <span className="flex items-center">
          <Smartphone className="mr-3" strokeWidth={2.5} size={18} />
          {children}
        </span>
        <ChevronRight className={`transform transition-transform duration-200 ${isOpen ? 'rotate-0' : 'rotate-90'}`} strokeWidth={2.5} size={18} />
      </button>
      {isOpen && (
        <>
          {/* Invisible bridge to handle gap */}
          <div className="absolute left-full top-0 w-2 h-full z-50" />
          <div className="absolute left-full top-0 ml-2 w-64 bg-gray-800 rounded-lg shadow-xl border border-gray-700 z-50">
            {nestedContent}
          </div>
        </>
      )}
    </div>
  );
};

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

    if (isMobile) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isMobile]);

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    if (!isMobile) {
      const relatedTarget = e.relatedTarget as HTMLElement;
      if (relatedTarget && dropdownRef.current?.contains(relatedTarget)) {
        return;
      }
      setIsOpen(false);
    }
  };

  const handleClick = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
    if (e.key === 'Enter' || e.key === ' ') {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div 
      className="relative" 
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className={`flex items-center text-gray-300 hover:text-white hover:bg-gray-700 rounded-md px-3 py-2 transition-all duration-300 ${isMobile ? 'w-full' : ''}`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe className="text-md mr-2" strokeWidth={2.5} size={20} />
        <span className="flex-1">{languages.find(lang => lang.code === i18n.language)?.name || 'English'}</span>
        <ChevronDown className={`ml-2 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} strokeWidth={2.5} size={16} />
      </button>
      {isOpen && (
        <>
          {/* Invisible bridge to handle gap */}
          {!isMobile && (
            <div className="absolute right-0 top-full w-56 h-2 z-50" />
          )}
          <div
            className={`${
              isMobile
                ? 'relative mt-2 w-full bg-gray-700/50 rounded-md'
                : 'absolute right-0 mt-2 w-56 bg-gray-800 rounded-lg shadow-xl border border-gray-700 z-50'
            }`}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="language-menu"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`block w-full text-left px-5 py-3 text-base rounded-md ${
                  i18n.language === lang.code
                    ? 'text-white bg-gray-700'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                } transition-all duration-300`}
                role="menuitem"
              >
                {lang.name}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const aboutDropdownContent = (
    <>
      <div className="w-64 bg-gray-800 rounded-lg shadow-xl border border-gray-700">
        <Link href="/about" className="flex items-center px-5 py-3 text-base text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-all duration-300">
          <User className="mr-3" strokeWidth={2.5} size={18} />
          About Me
        </Link>
        <NestedDropdownItem 
          isMobile={isMobile}
          nestedContent={
            <>
              <Link href="/device/bonito" className="flex items-center px-5 py-3 text-base text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-all duration-300">
                <SiGoogle className="mr-3" size={18} />
                Pixel 3a XL (bonito)
              </Link>
              <Link href="/device/cheetah" className="flex items-center px-5 py-3 text-base text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-all duration-300">
                <SiGoogle className="mr-3" size={18} />
                Pixel 7 Pro (cheetah)
              </Link>
              <Link href="/device/komodo" className="flex items-center px-5 py-3 text-base text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-all duration-300">
                <SiGoogle className="mr-3" size={18} />
                Pixel 9 Pro (komodo)
              </Link>
            </>
          }
        >
          Devices
        </NestedDropdownItem>
      </div>
    </>
  );

  const aiDropdownContent = (
    <div className="w-64 bg-gray-800 rounded-lg shadow-xl border border-gray-700">
      <Link href="/ai" className="flex items-center px-5 py-3 text-base text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-all duration-300">
        <Brain className="mr-3" strokeWidth={2.5} size={18} />
        AI
      </Link>
      <Link href="/ai/claude" className="flex items-center px-5 py-3 text-base text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-all duration-300">
        <SiClaude className="mr-3" size={18} />
        Claude Usage
      </Link>
    </div>
  );

  return (
    <>
      <div 
        className={`fixed inset-0 z-30 pointer-events-none transition-all duration-300 ${
          activeDropdown && !isMobile 
            ? 'backdrop-blur-sm opacity-100' 
            : 'backdrop-blur-none opacity-0'
        }`} 
      />
      <header className="bg-gray-800 relative">
        {isOpen && (
          <div
            className="fixed inset-0 backdrop-blur-md z-40 lg:hidden"
            onClick={toggleMenu}
          />
        )}
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center relative z-50">
          <Link href="/" className="text-gray-300 hover:text-white text-2xl font-bold transition-all duration-300 hover:glow">
            aidxn.cc
          </Link>
          <button onClick={toggleMenu} className="lg:hidden text-gray-300 focus:outline-hidden">
            {isOpen ? <X className="text-2xl" /> : <Menu className="text-2xl" />}
          </button>
          <ul className={`flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 absolute lg:static bg-gray-800 lg:bg-transparent w-full lg:w-auto left-0 lg:left-auto top-full lg:top-auto p-4 lg:p-0 transition-all duration-300 ease-in-out z-50 ${isOpen ? 'flex' : 'hidden lg:flex'}`}>
            <NavItem href="/" icon={House}>Home</NavItem>
            <DropdownNavItem 
              id="about"
              href="/about"
              icon={User} 
              dropdownContent={aboutDropdownContent}
              isMobile={isMobile}
              isOpen={activeDropdown === 'about'}
              onOpenChange={setActiveDropdown}
            >
              About
            </DropdownNavItem>
            <DropdownNavItem 
              id="ai"
              href="/ai"
              icon={Brain} 
              dropdownContent={aiDropdownContent}
              isMobile={isMobile}
              isOpen={activeDropdown === 'ai'}
              onOpenChange={setActiveDropdown}
            >
              AI
            </DropdownNavItem>
            <NavItem href="/contact" icon={Phone}>Contact</NavItem>
            <NavItem href="/domains" icon={LinkIcon}>Domains</NavItem>
            <NavItem href="/manifesto" icon={BookOpen}>Manifesto</NavItem>
            <div className="lg:hidden">
              <LanguageSelector />
            </div>
          </ul>
          <div className="hidden lg:block">
            <LanguageSelector />
          </div>
        </nav>
      </header>
    </>
  );
}

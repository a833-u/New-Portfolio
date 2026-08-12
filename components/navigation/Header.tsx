'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from '@/components/ui/ThemeToggle';
import { Download, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { number: '01', name: 'Profile', href: '/profile' },
  { number: '02', name: 'Work', href: '/work' },
  { number: '03', name: 'Projects', href: '/projects' },
  { number: '04', name: 'Analytics', href: '/analytics' },
  { number: '05', name: 'Contact', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const [isLogoVisible, setIsLogoVisible] = useState(true);

  // Listen for preloader handoff events to keep logo hidden until preloader lands
  useEffect(() => {
    const handleHandoffStart = () => setIsLogoVisible(false);
    const handleHandoffComplete = () => setIsLogoVisible(true);

    window.addEventListener('preloaderHandoffStart', handleHandoffStart);
    window.addEventListener('preloaderHandoffComplete', handleHandoffComplete);

    return () => {
      window.removeEventListener('preloaderHandoffStart', handleHandoffStart);
      window.removeEventListener('preloaderHandoffComplete', handleHandoffComplete);
    };
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Close menu on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    if (mobileOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileOpen]);

  const handleCloseMenu = () => {
    setMobileOpen(false);
  };

  const handleToggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMobileOpen((prev) => !prev);
  };

  return (
    <header 
      ref={headerRef}
      className="sticky top-0 z-40 w-full bg-theme-main/90 backdrop-blur-md border-b border-theme-muted transition-colors duration-300 relative"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 h-16 flex items-center justify-between">
        {/* Brand / Target Navbar Logo with id for FLIP measuring */}
        <Link 
          id="navbar-brand-logo"
          href="/" 
          className={`group flex flex-col focus:outline-none active:scale-[0.98] transition-all duration-200 ${
            isLogoVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={handleCloseMenu}
        >
          <span id="navbar-logo-text" className="text-sm font-bold tracking-wider uppercase text-theme-main group-hover:text-theme-sage transition-colors duration-200 flex items-center gap-1.5 leading-none">
            Ansh Kansara
            <span className="w-1.5 h-1.5 rounded-full bg-theme-sage opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </span>
          <span className="text-[10px] font-mono tracking-widest text-theme-secondary uppercase mt-0.5">
            Data Analyst · Developer
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-2 text-xs font-medium tracking-wide">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative px-3.5 py-1.5 rounded-sm transition-all duration-200 ease-out active:scale-[0.96] flex items-center gap-1.5 ${
                  isActive
                    ? 'text-theme-sage font-bold bg-theme-sage/15 border-b-2 border-theme-sage shadow-xs'
                    : 'text-theme-secondary hover:text-theme-sage hover:bg-theme-sage/10 hover:-translate-y-0.5'
                }`}
              >
                <span className={`text-[10px] font-mono transition-colors ${
                  isActive ? 'text-theme-sage' : 'text-theme-secondary/60 group-hover:text-theme-sage'
                }`}>
                  {item.number}
                </span>
                <span>{item.name}</span>
                
                {/* Active & Hover Underline Expansion */}
                <span
                  className={`absolute bottom-0 left-2 right-2 h-[2px] bg-theme-sage rounded-full transition-all duration-200 ease-out ${
                    isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                  }`}
                />
              </Link>
            );
          })}

          <div className="h-4 w-[1px] bg-theme-muted mx-2" />

          {/* Desktop Resume Download Button — Border & Hover animation removed */}
          <a
            href="/resume/Ansh_Kansara_Resume.pdf"
            download="Ansh_Kansara_Resume.pdf"
            className="flex items-center gap-1.5 text-xs font-medium text-theme-main hover:text-theme-sage border-0 px-3 py-1.5 rounded-sm transition-colors duration-200"
          >
            <span>Resume</span>
            <Download className="w-3.5 h-3.5 text-theme-sage" />
          </a>

          {/* Borderless Animated Theme Toggle Button */}
          <ThemeToggle />
        </nav>

        {/* Mobile Navbar Controls */}
        <div className="flex md:hidden items-center space-x-3">
          <ThemeToggle />
          
          {/* Borderless Morphing 2-Line Hamburger Button in #a7ada3 */}
          <button
            onClick={handleToggleMenu}
            aria-label={mobileOpen ? 'Close Menu' : 'Open Menu'}
            className="relative flex items-center justify-center w-10 h-10 border-0 bg-transparent focus:outline-none cursor-pointer active:scale-90 transition-all duration-150 p-1"
          >
            <div className="w-6 h-5 relative flex flex-col justify-center items-center">
              <motion.span 
                animate={mobileOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
                transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1.0] }}
                className="w-6 h-[2.5px] bg-[#a7ada3] rounded-full absolute block origin-center shadow-xs"
              />
              <motion.span 
                animate={mobileOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
                transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1.0] }}
                className="w-6 h-[2.5px] bg-[#a7ada3] rounded-full absolute block origin-center shadow-xs"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Floating Mobile Dropdown Overlay with Solid Theme Background */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="md:hidden absolute top-full left-0 right-0 z-50 border-b border-theme-muted bg-theme-main shadow-2xl px-6 py-6 space-y-5 overflow-hidden transition-colors duration-300"
          >
            {/* Header bar inside mobile menu */}
            <div className="pb-3 border-b border-theme-muted">
              <span className="text-[11px] font-mono tracking-widest text-theme-sage uppercase flex items-center gap-2 font-semibold">
                <span className="w-2 h-2 rounded-full bg-theme-sage animate-pulse" />
                NAVIGATION DIRECTORY
              </span>
            </div>

            {/* Mobile Nav Links */}
            <nav className="flex flex-col space-y-2">
              {navItems.map((item, idx) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: idx * 0.04 }}
                  >
                    <Link
                      href={item.href}
                      onClick={handleCloseMenu}
                      className={`group flex items-center justify-between p-3.5 rounded-sm transition-all duration-200 active:scale-[0.98] ${
                        isActive 
                          ? 'bg-theme-sage/15 text-theme-sage font-semibold border-l-3 border-l-theme-sage pl-4' 
                          : 'text-theme-secondary hover:text-theme-main hover:bg-theme-muted/40'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono font-bold text-theme-sage/80 group-hover:text-theme-sage transition-colors">
                          {item.number}
                        </span>
                        <span className="text-sm font-medium tracking-wide">
                          {item.name}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        {isActive ? (
                          <span className="text-[11px] font-mono text-theme-sage font-bold flex items-center gap-1">
                            ACTIVE <span className="w-1.5 h-1.5 rounded-full bg-theme-sage" />
                          </span>
                        ) : (
                          <ArrowUpRight className="w-4 h-4 text-theme-secondary/40 group-hover:text-theme-main group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        )}
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Mobile Resume Quick Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.2 }}
              className="pt-2"
            >
              <a
                href="/resume/Ansh_Kansara_Resume.pdf"
                download="Ansh_Kansara_Resume.pdf"
                onClick={handleCloseMenu}
                className="flex items-center justify-center gap-2.5 w-full text-xs font-semibold text-[#F4F1EA] dark:text-[#171A17] bg-theme-sage hover:opacity-95 py-3 rounded-sm transition-all duration-200 active:scale-[0.98] shadow-sm"
              >
                <span>DOWNLOAD CURRICULUM VITAE</span>
                <Download className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

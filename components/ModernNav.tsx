"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

function ModernNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/projects', label: 'Projects', icon: '💼' },
    { path: '/skills', label: 'Skills', icon: '⚡' },
    { path: '/about', label: 'About', icon: '👤' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 group"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center group-hover:animate-rotate-3d transition-all duration-300">
              <span className="text-white font-bold text-xl">DT</span>
            </div>
            <span className="text-white font-semibold text-lg hidden sm:block hover-neon transition-all duration-300">
              Daniel Tadesse
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`relative group px-4 py-2 rounded-full transition-all duration-300 ${
                  isActive(item.path) 
                    ? 'text-cyan-400' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <span className="flex items-center space-x-2">
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.label}</span>
                </span>
                
                {/* Active indicator */}
                {isActive(item.path) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                )}
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <Link
            href="/getintouch"
            className="hidden md:block glass glass-hover px-6 py-2 text-cyan-400 border border-cyan-400/30 rounded-full hover:border-cyan-400 hover:text-white hover-glow transition-all duration-300"
          >
            Contact Me
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 glass glass-hover rounded-lg"
          >
            <div className="w-6 h-5 flex flex-col justify-center space-y-1">
              <div className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <div className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <div className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-64 mt-4' : 'max-h-0'}`}>
          <div className="flex flex-col space-y-2 py-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActive(item.path) 
                    ? 'bg-gradient-to-r from-cyan-400/20 to-purple-400/20 text-cyan-400' 
                    : 'text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
            <Link
              href="/getintouch"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-cyan-400 border border-cyan-400/30 hover:bg-cyan-400/10 hover:text-white transition-all duration-300"
            >
              <span>📧</span>
              <span>Contact Me</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default ModernNav;

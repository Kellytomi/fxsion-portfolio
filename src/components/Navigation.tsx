"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Inter, JetBrains_Mono } from 'next/font/google';

// Load Inter font with the black weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "900"], // Added 900 (Black) weight
});

// Load JetBrains Mono font for navbar
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
  weight: ["300", "400", "500"], // Added light (300) weight
});

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Work', href: '/projects' },
  { name: 'Testimonials', href: '/testimonials' },
];

export default function Navigation(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only prevent default for same-page navigation
    if (pathname === href) {
      e.preventDefault();
      
      // Smooth scroll to top for same page links
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
    
    // Close mobile menu if it's open
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 flex justify-center ${scrolled ? 'py-4' : 'py-5'}`}>
      <div className={`rounded-full transition-all duration-300 ${scrolled ? 'bg-white' : 'bg-white'} border border-gray-200/70 inline-flex w-auto min-w-[650px]`}>
        <div className="flex items-center justify-between h-16 w-full px-8">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/images/Fxsion.png" 
                alt="Fxsion Logo" 
                width={85} 
                height={24} 
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center space-x-10 mx-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative text-[12px] uppercase tracking-[0.15em] font-light transition-colors duration-300 ${jetBrainsMono.className} ${
                    pathname === item.href ? 'text-black' : 'text-gray-600 hover:text-black'
                  }`}
                  onClick={(e) => handleNavigation(e, item.href)}
                >
                  <span className="relative py-1">
                    {item.name}
                    {pathname === item.href && (
                      <motion.span
                        layoutId="underline"
                        className="absolute left-0 top-full -mt-0.5 block h-0.5 w-full bg-black"
                      />
                    )}
                  </span>
                </Link>
              ))}
            </div>
            
            <Link 
              href="/contact" 
              className={`bg-black hover:bg-black/90 text-white text-[12px] uppercase tracking-[0.15em] font-light py-[8px] px-7 rounded-full transition-all duration-300 flex items-center ${jetBrainsMono.className}`}
              onClick={(e) => handleNavigation(e, '/contact')}
            >
              <span>Work with us</span>
              <span className="ml-2">→</span>
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? (
                <XMarkIcon className="w-5 h-5" />
              ) : (
                <Bars3Icon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-4 right-4 md:hidden bg-white border border-gray-200/70 shadow-lg overflow-hidden mt-2 rounded-xl"
          >
            <div className="py-6 px-4">
              <div className={`flex flex-col space-y-5 ${jetBrainsMono.className}`}>
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-4 py-2.5 rounded-lg transition-colors duration-200 uppercase tracking-[0.15em] text-xs font-light ${
                      pathname === item.href
                        ? 'bg-black/5 text-black'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-black'
                    }`}
                    onClick={(e) => handleNavigation(e, item.href)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                <Link 
                  href="/contact" 
                  className="bg-black text-white text-center mx-4 mt-2 py-3 px-6 rounded-full uppercase tracking-[0.15em] text-xs font-light flex items-center justify-center"
                  onClick={(e) => handleNavigation(e, '/contact')}
                >
                  <span>Work with us</span>
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 
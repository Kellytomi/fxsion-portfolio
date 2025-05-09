"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/projects' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Contact', href: '/contact' },
];

export default function Navigation(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <nav className="fixed w-full z-50">
      <div className="glass-effect">
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center h-full">
              <Image 
                src="/images/Fxsion.png" 
                alt="Fxsion Logo" 
                width={150} 
                height={40} 
                className="object-contain mt-1"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative group ${
                    pathname === item.href ? 'text-primary font-medium' : 'text-muted'
                  }`}
                >
                  <span className="relative">
                    {item.name}
                    {pathname === item.href && (
                      <motion.span
                        layoutId="underline"
                        className="absolute left-0 top-full block h-0.5 w-full bg-black"
                      />
                    )}
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
              >
                {isOpen ? (
                  <XMarkIcon className="w-6 h-6" />
                ) : (
                  <Bars3Icon className="w-6 h-6" />
                )}
              </button>
            </div>
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
            className="md:hidden bg-white border-b border-gray-100 shadow-lg overflow-hidden"
          >
            <div className="container mx-auto py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-4 py-2 rounded-md ${
                      pathname === item.href
                        ? 'bg-primary/10 text-primary font-medium'
                        : 'text-muted hover:bg-gray-50'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                <Link 
                  href="/contact" 
                  className="btn btn-primary text-white text-center mx-4 mt-2"
                  onClick={() => setIsOpen(false)}
                >
                  Book a Discovery Call
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 
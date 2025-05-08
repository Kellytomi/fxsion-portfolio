"use client";

import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { usePathname, useSearchParams } from 'next/navigation';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // For detecting route changes
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  // Create spring animations for smoother cursor movement
  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Handle loading state during route changes
  useEffect(() => {
    setIsLoading(true);
    
    // Wait for page animations to finish (approximately)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200); // Adjust this timing based on your page transition animations
    
    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  useEffect(() => {
    // Skip on mobile or tablet as they don't need custom cursor
    if (window.matchMedia('(max-width: 1024px)').matches) {
      return;
    }
    
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    // Track when cursor is over interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('cursor-pointer') ||
        target.closest('.cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    
    // Track mouse down/up for click effect
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [cursorX, cursorY]);
  
  // Hide custom cursor on mobile/tablet
  if (typeof window !== 'undefined' && window.matchMedia('(max-width: 1024px)').matches) {
    return null;
  }

  return (
    <>
      {/* Main outer cursor */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="relative flex items-center justify-center"
          animate={{
            scale: isLoading ? 1.2 : isClicking ? 0.8 : isHovering ? 1.5 : 1,
            opacity: isLoading ? 0.7 : isHovering ? 0.5 : 0.8,
            rotate: isLoading ? 360 : 0,
          }}
          transition={{ 
            duration: isLoading ? 1 : isClicking ? 0.1 : 0.2,
            ease: isLoading ? "linear" : "easeInOut",
            rotate: {
              duration: 1.5,
              repeat: isLoading ? Infinity : 0,
              ease: "linear"
            }
          }}
        >
          <div 
            className={`absolute w-8 h-8 rounded-full border-2 ${
              isLoading
                ? 'border-secondary border-t-transparent' 
                : isHovering 
                  ? 'border-secondary' 
                  : 'border-primary'
            } -ml-4 -mt-4 transition-colors duration-300`}
          />
        </motion.div>
      </motion.div>

      {/* Smaller inner cursor */}
      <motion.div
        className="fixed top-0 left-0 z-[10000] pointer-events-none"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="relative flex items-center justify-center"
          animate={{
            scale: isLoading ? 0.6 : isClicking ? 1.5 : isHovering ? 0.5 : 1,
            opacity: isLoading ? [0.2, 1, 0.2] : 1,
          }}
          transition={{ 
            duration: isClicking ? 0.1 : 0.2,
            ease: "easeInOut",
            opacity: {
              duration: 1,
              repeat: isLoading ? Infinity : 0,
              ease: "easeInOut"
            }
          }}
        >
          <div 
            className={`absolute w-2 h-2 rounded-full -ml-1 -mt-1 ${
              isLoading
                ? 'bg-secondary'
                : isClicking 
                  ? 'bg-secondary' 
                  : isHovering 
                    ? 'bg-secondary' 
                    : 'bg-primary'
            } transition-colors duration-300`}
          />
        </motion.div>
      </motion.div>
      
      {/* Click ripple effect */}
      <AnimatePresence>
        {isClicking && !isLoading && (
          <motion.div
            className="fixed top-0 left-0 z-[9998] pointer-events-none"
            style={{
              x: cursorXSpring,
              y: cursorYSpring,
            }}
            initial={{ opacity: 0.5, scale: 0 }}
            animate={{ opacity: 0, scale: 1.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="absolute w-8 h-8 rounded-full border border-primary -ml-4 -mt-4" />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Loading animation rings */}
      <AnimatePresence>
        {isLoading && (
          <>
            <motion.div
              className="fixed top-0 left-0 z-[9997] pointer-events-none"
              style={{
                x: cursorXSpring,
                y: cursorYSpring,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: [0.1, 0.3, 0.1], scale: [0.8, 1.5, 0.8] }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="absolute w-12 h-12 rounded-full border border-primary/40 -ml-6 -mt-6" />
            </motion.div>
            
            <motion.div
              className="fixed top-0 left-0 z-[9996] pointer-events-none"
              style={{
                x: cursorXSpring,
                y: cursorYSpring,
              }}
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: [0.05, 0.2, 0.05], scale: [1, 2, 1] }}
              exit={{ opacity: 0, scale: 1 }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.2
              }}
            >
              <div className="absolute w-16 h-16 rounded-full border border-secondary/20 -ml-8 -mt-8" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
} 
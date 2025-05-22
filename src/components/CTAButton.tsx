"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  icon?: ReactNode;
  external?: boolean;
  trackingEvent?: string;
  disabled?: boolean;
}

export default function CTAButton({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  external = false,
  trackingEvent,
  disabled = false
}: CTAButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variantStyles = {
    primary: "bg-gradient-brand text-white hover:shadow-brand hover:scale-105 focus:ring-primary/50",
    secondary: "bg-secondary text-white hover:bg-secondary/90 hover:shadow-brand hover:scale-105 focus:ring-secondary/50",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white hover:scale-105 focus:ring-primary/50"
  };
  
  const sizeStyles = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 text-base rounded-lg",
    lg: "px-8 py-4 text-lg rounded-xl",
    xl: "px-10 py-5 text-xl rounded-xl"
  };

  const handleClick = () => {
    // Analytics tracking
    if (trackingEvent && typeof window !== 'undefined') {
      // Track conversion events
      try {
        // Google Analytics 4
        if ('gtag' in window) {
          (window as any).gtag('event', trackingEvent, {
            event_category: 'CTA',
            event_label: href,
            value: 1
          });
        }
        
        // Facebook Pixel
        if ('fbq' in window) {
          (window as any).fbq('track', 'Lead');
        }
      } catch (error) {
        console.warn('Analytics tracking failed:', error);
      }
    }
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const content = (
    <>
      {children}
      {icon && (
        <span className={`${size === 'sm' ? 'ml-1' : 'ml-2'} transition-transform duration-300 group-hover:translate-x-1`}>
          {icon}
        </span>
      )}
    </>
  );

  if (external) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${combinedClassName} group`}
        onClick={handleClick}
        whileHover={{ scale: disabled ? 1 : 1.05 }}
        whileTap={{ scale: disabled ? 1 : 0.95 }}
        aria-disabled={disabled}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
    >
      <Link
        href={href}
        className={`${combinedClassName} group`}
        onClick={handleClick}
        aria-disabled={disabled}
      >
        {content}
      </Link>
    </motion.div>
  );
} 
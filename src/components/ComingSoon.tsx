"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function ComingSoon() {
  // Set your launch date here - 15 days from now
  const calculateTargetDate = () => {
    const now = new Date();
    const targetDate = new Date(now);
    targetDate.setDate(targetDate.getDate() + 15); // Make sure this matches the days in LaunchWrapper
    return targetDate;
  };

  const [targetDate] = useState(calculateTargetDate());
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      } else {
        // Time's up - could redirect to the main page here
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
    };

    setTimeLeft(calculateTimeLeft());
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num: number) => {
    return num < 10 ? `0${num}` : num;
  };

  return (
    <div className="min-h-screen w-full bg-surface flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <motion.div 
        className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <div className="container max-w-4xl mx-auto px-6 py-16 relative z-10 text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-10"
        >
          <Image 
            src="/images/Fxsion.png" 
            alt="Fxsion Logo" 
            width={200} 
            height={80} 
            className="mx-auto"
          />
        </motion.div>
        
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
        >
          Something Amazing Is Coming
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-muted mb-12 max-w-2xl mx-auto"
        >
          We're putting the finishing touches on our new digital solutions agency website. Get ready to automate, integrate, and elevate your digital workflow.
        </motion.p>
        
        {/* Countdown timer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-5 md:gap-8 mb-12"
        >
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds }
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-white w-24 h-24 md:w-32 md:h-32 rounded-xl shadow-soft flex items-center justify-center mb-3">
                <span className="font-display text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary">
                  {formatNumber(item.value)}
                </span>
              </div>
              <span className="text-sm text-muted">{item.label}</span>
            </div>
          ))}
        </motion.div>
        
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-10"
        >
          <Link 
            href="/contact" 
            className="btn btn-primary text-white inline-flex items-center"
          >
            Book a Discovery Call
            <svg 
              className="w-4 h-4 ml-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
        
        {/* Contact information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-muted"
        >
          <p>For inquiries: <a href="mailto:hello@fxsion.com" className="text-primary hover:underline">hello@fxsion.com</a></p>
        </motion.div>
      </div>
    </div>
  );
} 
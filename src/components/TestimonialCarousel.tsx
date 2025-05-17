"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  id: number;
  clientName: string;
  clientRole: string;
  clientCompany: string;
  quote: string;
  logo: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    clientName: "Brooks Gammill",
    clientRole: "Co-Founder",
    clientCompany: "RecruitU",
    quote: "Their <b>versatility and expertise</b> are unmatched. Working with Fxsion has been incredible. They <b>quickly grasped our business model</b> and <b>vision</b>, transforming our landing page, creating pitch decks, and more.",
    logo: "/images/testimonials/recruitU.svg",
    avatar: "/images/testimonials/brooks.png"
  },
  {
    id: 2,
    clientName: "Sarah Chen",
    clientRole: "CEO",
    clientCompany: "Lightdash",
    quote: "The team at Fxsion <b>delivered exceptional results</b> for our platform redesign. Their ability to <b>understand our needs</b> and <b>exceed expectations</b> made them stand out from other agencies we've worked with.",
    logo: "/images/testimonials/lightdash.svg",
    avatar: "/images/testimonials/sarah.png"
  },
  {
    id: 3,
    clientName: "Michael Torres",
    clientRole: "CTO",
    clientCompany: "Seamless.AI",
    quote: "Working with Fxsion has been a game-changer for our technical implementation. Their <b>technical precision</b> and <b>innovative approach</b> helped us launch our AI solution ahead of schedule.",
    logo: "/images/testimonials/seamless.svg",
    avatar: "/images/testimonials/michael.png"
  },
  {
    id: 4,
    clientName: "Emily Rodriguez",
    clientRole: "Marketing Director",
    clientCompany: "Zazuu",
    quote: "Fxsion's team <b>transformed our digital presence</b> completely. Their <b>strategic insights</b> and <b>meticulous execution</b> resulted in a 40% increase in user engagement within just two months.",
    logo: "/images/testimonials/zazuu.svg",
    avatar: "/images/testimonials/emily.png"
  },
  {
    id: 5,
    clientName: "David Kim",
    clientRole: "Product Lead",
    clientCompany: "Droxy",
    quote: "What sets Fxsion apart is their <b>commitment to quality</b> and <b>attention to detail</b>. They didn't just build what we asked for—they enhanced our vision and delivered something even better.",
    logo: "/images/testimonials/droxy.svg",
    avatar: "/images/testimonials/david.png"
  }
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Function to handle moving to the next testimonial
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setProgress(0);
  };

  // Handle tab click
  const handleTabClick = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
    
    // Reset the interval when manually changing testimonial
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    startProgressInterval();
  };

  // Start the progress interval
  const startProgressInterval = () => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + (100 / (8000 / 100)); // Increase smoothly over 8 seconds
        } else {
          nextTestimonial();
          return 0;
        }
      });
    }, 100);
    
    intervalRef.current = interval;
    return interval;
  };

  // Set up the auto-rotation effect
  useEffect(() => {
    const interval = startProgressInterval();
    
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [currentIndex]);

  return (
    <div className="w-full py-24 overflow-hidden bg-white">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-sm uppercase tracking-[0.15em] text-gray-500 mb-4">TESTIMONIALS</h2>
        <h3 className="text-4xl md:text-5xl font-bold mb-16">HEAR IT FROM OUR PARTNERS</h3>
      </div>

      <div className="w-full max-w-5xl mx-auto relative px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={testimonials[currentIndex].id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl p-8 md:p-16 shadow-sm border border-dashed border-gray-300 min-h-[300px] flex flex-col items-center relative"
          >
            <div className="max-w-3xl mx-auto text-center">
              <Image 
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].clientName}
                width={80}
                height={80}
                className="rounded-full mb-8 mx-auto"
              />
              
              <Image 
                src={testimonials[currentIndex].logo}
                alt={testimonials[currentIndex].clientCompany}
                width={120}
                height={40}
                className="h-10 w-auto object-contain mx-auto mb-8"
              />
              
              <div className="text-lg md:text-xl text-gray-800 mb-8 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: testimonials[currentIndex].quote }}
              />
              
              <div className="flex flex-col items-center">
                <h4 className="text-lg font-semibold">{testimonials[currentIndex].clientName}</h4>
                <p className="text-gray-600">{testimonials[currentIndex].clientRole}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Testimonial Navigation */}
        <div className="flex justify-center mt-16 space-x-8 md:space-x-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="flex flex-col items-center"
            >
              <button
                onClick={() => handleTabClick(index)}
                className={`w-20 h-12 flex items-center justify-center transition-all duration-300 rounded-lg ${currentIndex === index ? 'bg-white shadow-sm' : 'bg-gray-100 opacity-60 hover:opacity-75'}`}
              >
                <Image 
                  src={testimonial.logo}
                  alt={testimonial.clientCompany}
                  width={80}
                  height={30}
                  className="h-6 w-auto object-contain"
                />
              </button>
              
              <div className="w-full h-0.5 bg-gray-200 mt-2 relative overflow-hidden">
                {currentIndex === index && (
                  <motion.div 
                    className="h-full bg-black absolute left-0 top-0"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.1, ease: "linear" }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 
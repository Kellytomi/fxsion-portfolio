"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
}

const testimonials: TestimonialProps[] = [
  {
    quote: "Working with Fxsion has been transformative for our business. Their automation solutions have saved us countless hours and significantly improved our workflow efficiency.",
    author: "Sarah Johnson",
    position: "Operations Director",
    company: "TechFlow Solutions"
  },
  {
    quote: "The team at Fxsion delivered a website that exceeded our expectations. Their attention to detail and focus on user experience has resulted in a 40% increase in our conversion rate.",
    author: "Michael Chen",
    position: "Marketing Manager",
    company: "Innovate Inc."
  },
  {
    quote: "Fxsion's document automation system has revolutionized our proposal process. What used to take days now takes hours, and our clients are impressed with the professional results.",
    author: "Alex Rodriguez",
    position: "CEO",
    company: "Rodriguez Consulting"
  }
];

export default function PremiumTestimonials(): JSX.Element {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Auto rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section ref={sectionRef} className="py-24 md:py-40 bg-highlight">
      <div className="container max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle mx-auto max-w-2xl">
            Don't just take our word for it — hear from the businesses we've helped transform.
          </p>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: activeIndex === index ? 1 : 0,
                y: activeIndex === index ? 0 : 20,
                position: activeIndex === index ? 'relative' : 'absolute',
                zIndex: activeIndex === index ? 10 : 0,
              }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              {activeIndex === index && (
                <div className="premium-card text-center p-12 md:p-16">
                  <div className="mb-10">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto opacity-20">
                      <path d="M14.4 24H7.2C7.2 17.376 12.576 12 19.2 12V16.8C15.216 16.8 12 20.016 12 24H14.4C15.72 24 16.8 25.08 16.8 26.4V33.6C16.8 34.92 15.72 36 14.4 36H7.2C5.88 36 4.8 34.92 4.8 33.6V26.4C4.8 25.08 5.88 24 7.2 24H14.4ZM36 24H28.8C28.8 17.376 34.176 12 40.8 12V16.8C36.816 16.8 33.6 20.016 33.6 24H36C37.32 24 38.4 25.08 38.4 26.4V33.6C38.4 34.92 37.32 36 36 36H28.8C27.48 36 26.4 34.92 26.4 33.6V26.4C26.4 25.08 27.48 24 28.8 24H36Z" fill="currentColor"/>
                    </svg>
                  </div>
                  
                  <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed mb-12">
                    {testimonial.quote}
                  </blockquote>
                  
                  <div>
                    <div className="font-bold text-primary text-lg">
                      {testimonial.author}
                    </div>
                    <div className="text-muted mt-1">
                      {testimonial.position}, {testimonial.company}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
          
          <div className="flex justify-center mt-10 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-primary scale-125' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Link 
            href="/contact" 
            className="bg-black hover:bg-black/90 text-white text-sm uppercase tracking-[0.15em] font-medium py-3 px-8 rounded-full transition-all duration-300"
          >
            <span>Let's Talk</span>
            <span className="ml-2">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 
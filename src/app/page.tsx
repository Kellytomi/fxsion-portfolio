"use client";

import Navigation from '@/components/Navigation';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import CountUp from '@/components/CountUp';
import PageSpacer from '@/components/PageSpacer';
import PremiumServices from '@/components/PremiumServices';
import PremiumTestimonials from '@/components/PremiumTestimonials';
import PremiumContact from '@/components/PremiumContact';
import PageAnimationWrapper from '@/components/PageAnimationWrapper';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import { JetBrains_Mono } from 'next/font/google';

// Load JetBrains Mono font for navbar and footer
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
  weight: ["300", "400", "500"],
});

export default function Home(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <PageAnimationWrapper>
      <main className="min-h-screen bg-surface overflow-hidden" ref={containerRef}>
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative min-h-[90vh] pt-24 md:pt-32 lg:pt-24 lg:flex lg:items-center">
          <motion.div 
            className="absolute inset-0 premium-grid-bg opacity-20"
            style={{ y }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface to-white" />
          
          <div className="container max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 relative">
            <div className="lg:grid lg:grid-cols-12 lg:gap-16 py-10 lg:py-16">
              {/* Left Text Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-6 pb-16 lg:pb-0"
              >
                <h1 className="font-inter text-[50px] sm:text-[60px] md:text-[70px] lg:text-[70px] font-black mb-12 tracking-tight leading-[1.05] uppercase">
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="block text-primary mb-2"
                  >
                    DIGITAL
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="block text-primary mb-2"
                  >
                    SOLUTIONS
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="block text-primary"
                  >
                    THAT WORK
                  </motion.span>
                </h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="text-xl text-muted mb-14 leading-relaxed max-w-xl"
                >
                  We build digital solutions that streamline your business 
                  operations and boost productivity.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="flex flex-col sm:flex-row gap-6 mb-16 lg:mb-0"
                >
                  <Link 
                    href="/contact" 
                    className="group bg-black hover:bg-black/90 text-white text-sm uppercase tracking-[0.15em] font-medium py-4 px-10 rounded-full transition-all duration-300 w-full sm:w-auto sm:min-w-[200px] text-center flex items-center justify-center"
                  >
                    <span>Work with us</span>
                    <span className="ml-2">→</span>
                  </Link>
                  <Link 
                    href="/projects"
                    className="group border border-gray-200 bg-transparent hover:bg-gray-50 text-primary text-sm uppercase tracking-[0.15em] font-medium py-4 px-10 rounded-full transition-all duration-300 w-full sm:w-auto sm:min-w-[200px] text-center"
                  >
                    See Our Work
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right Image Grid */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="hidden lg:flex lg:col-span-6 relative"
              >
                <div className="grid grid-cols-12 grid-rows-5 gap-4 w-full h-full">
                  <div className="col-span-7 row-span-3 bg-gray-100 rounded-xl overflow-hidden relative shadow-md">
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent"></div>
                    <div className="h-full w-full bg-gray-200 animate-pulse"></div>
                  </div>
                  <div className="col-span-5 row-span-2 bg-gray-100 rounded-xl overflow-hidden relative shadow-md">
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent"></div>
                    <div className="h-full w-full bg-gray-300 animate-pulse"></div>
                  </div>
                  <div className="col-span-5 row-span-3 bg-gray-100 rounded-xl overflow-hidden relative shadow-md">
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent"></div>
                    <div className="h-full w-full bg-gray-300 animate-pulse"></div>
                  </div>
                  <div className="col-span-7 row-span-2 bg-gray-100 rounded-xl overflow-hidden relative shadow-md">
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent"></div>
                    <div className="h-full w-full bg-gray-200 animate-pulse"></div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Clients Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="border-t border-gray-100 pt-20 mt-16 mb-24"
            >
              <div className="text-center mb-14">
                <p className="text-sm text-muted uppercase tracking-[0.15em]">Trusted by innovative businesses</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-12 items-center opacity-60">
                {/* Replace with your actual client logos */}
                <div className="flex justify-center">
                  <div className="h-6 w-24 bg-gray-300 rounded animate-pulse" />
                </div>
                <div className="flex justify-center">
                  <div className="h-6 w-28 bg-gray-300 rounded animate-pulse" />
                </div>
                <div className="flex justify-center">
                  <div className="h-6 w-20 bg-gray-300 rounded animate-pulse" />
                </div>
                <div className="flex justify-center">
                  <div className="h-6 w-32 bg-gray-300 rounded animate-pulse" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <PremiumServices />

        {/* Testimonials Section */}
        <TestimonialCarousel />
        
        {/* Contact Section */}
        <PremiumContact />
        
        {/* Footer */}
        <footer className="py-16 bg-white border-t border-gray-100">
          <div className="container max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
            <div className="flex flex-col md:flex-row justify-between items-center gap-12">
              <div>
                <Image
                  src="/images/Fxsion.png" 
                  alt="Fxsion Logo" 
                  width={120} 
                  height={30} 
                  className="object-contain"
                />
                <p className="text-sm text-muted mt-4">
                  © {new Date().getFullYear()} Fxsion. All rights reserved.
                </p>
              </div>
              
              <div className={`flex flex-wrap gap-16 justify-center md:justify-end ${jetBrainsMono.className}`}>
                <div>
                  <h4 className="font-medium mb-4">Navigation</h4>
                  <ul className="space-y-3 text-[12px] text-muted uppercase tracking-[0.15em] font-light">
                    <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                    <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
                    <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
                    <li><Link href="/projects" className="hover:text-primary transition-colors">Work</Link></li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-4">Contact</h4>
                  <ul className="space-y-3 text-[12px] text-muted uppercase tracking-[0.15em] font-light">
                    <li><Link href="/contact" className="hover:text-primary transition-colors">Let's Talk</Link></li>
                    <li><a href="mailto:contact@fxsion.dev" className="hover:text-primary transition-colors">contact@fxsion.dev</a></li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-4">Legal</h4>
                  <ul className="space-y-3 text-[12px] text-muted uppercase tracking-[0.15em] font-light">
                    <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                    <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </PageAnimationWrapper>
  );
}

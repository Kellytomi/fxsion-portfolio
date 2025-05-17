"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

export default function PremiumContact(): JSX.Element {
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={sectionRef} className="py-28 md:py-40 bg-primary text-white">
      <div className="container max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-10 tracking-tighter">
              Ready to join the winning side?
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-16 tracking-normal max-w-3xl mx-auto leading-relaxed">
              Get in touch. New spots open every month. Let's discuss how we can transform your digital workflow.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Link 
                href="/contact" 
                className="group bg-white text-primary text-sm uppercase tracking-[0.15em] font-medium py-3 px-8 rounded-full transition-all duration-300 hover:bg-white/90 hover:translate-y-[-2px] hover:shadow-lg"
              >
                <span>Let's Talk</span>
                <span className="ml-2">→</span>
              </Link>
              
              <Link 
                href="mailto:contact@fxsion.dev"
                className="group bg-transparent border border-white/30 text-white text-sm uppercase tracking-[0.15em] font-medium py-3 px-8 rounded-full transition-all duration-300 hover:bg-white/10 hover:translate-y-[-2px]"
              >
                Email Us
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col md:flex-row justify-center gap-16 md:gap-28 text-center text-white/70"
          >
            <div>
              <h3 className="font-display text-lg font-medium mb-3">Office Hours</h3>
              <p>Mon-Fri: 9am - 6pm EST</p>
            </div>
            
            <div>
              <h3 className="font-display text-lg font-medium mb-3">Email</h3>
              <a href="mailto:contact@fxsion.dev" className="hover:text-white transition-colors">
                contact@fxsion.dev
              </a>
            </div>
            
            <div>
              <h3 className="font-display text-lg font-medium mb-3">Follow Us</h3>
              <div className="flex justify-center gap-4">
                <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="hover:text-white transition-colors" aria-label="Twitter">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 
"use client";

import Navigation from '@/components/Navigation';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaXTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa6';

export default function Contact(): JSX.Element {
  return (
    <main className="min-h-screen bg-surface">
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="container max-w-6xl mx-auto">
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-center mb-16">
              If you would like 
              to chat you can
              reach me at:
            </h1>
          </motion.div>

          {/* Contact Card */}
          <div className="flex flex-col items-center">
            {/* Email Button */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-6"
            >
              <a 
                href="mailto:hello@fxsion.com" 
                className="inline-block bg-gray-100 hover:bg-gray-200 text-black px-8 py-4 rounded-full text-lg font-medium transition-all duration-300"
              >
                hello@fxsion.com
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-muted mb-16"
            >
              or message via
              <a 
                href="https://t.me/klvntmi" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center w-8 h-8 bg-gray-300 hover:bg-black text-gray-600 hover:text-white rounded-full ml-2 transition-all duration-300"
              >
                {FaTelegramPlane({ size: 16 })}
              </a>
            </motion.p>

            {/* Collaboration Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="w-full max-w-3xl"
            >
              <div className="bg-black text-white p-8 md:p-12 rounded-xl">
                <p className="text-xl md:text-2xl mb-10">
                  Let's collaborate! Whether it's a new project, a partnership, or 
                  just a question, I'd love to hear from you. Reach out, and let's 
                  create something amazing together!
                </p>

                <div className="flex items-center">
                  <div className="mr-4">
                    <Image 
                      src="/images/Fxsion.png" 
                      alt="Kelvin Odi" 
                      width={60} 
                      height={60} 
                      className="rounded-full object-cover bg-white p-1"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Kelvin Odi</h3>
                    <p className="text-gray-400">Founder, Fxsion</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex space-x-6 mt-16"
            >
              <SocialLink href="https://x.com/klvntmi" icon={FaXTwitter({ size: 18 })} label="X (Twitter)" />
              <SocialLink href="https://www.linkedin.com/in/etoma-etoto-odi-9ba176251/" icon={FaLinkedinIn({ size: 18 })} label="LinkedIn" />
              <SocialLink href="https://github.com/Kellytomi" icon={FaGithub({ size: 18 })} label="GitHub" />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink = ({ href, icon, label }: SocialLinkProps) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="p-3 bg-transparent hover:bg-black hover:text-white border border-gray-300 rounded-full transition-all duration-300"
      aria-label={label}
    >
      {icon}
    </a>
  );
}; 
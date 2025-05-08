"use client";

import Navigation from '@/components/Navigation';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import CountUp from '@/components/CountUp';
import PageSpacer from '@/components/PageSpacer';

export default function Home(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <main className="min-h-screen bg-surface overflow-hidden" ref={containerRef}>
      <Navigation />
      <PageSpacer />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 sm:pt-28 md:pt-20 lg:pt-0">
        <motion.div 
          className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"
          style={{ y }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface to-white/50" />
        
        <div className="container relative">
          <div className="flex flex-col lg:flex-row items-center gap-12 py-20">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-1 text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary mb-8"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="font-medium">Available for Projects</span>
              </motion.div>
              
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-center lg:text-left">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="block gradient-text mb-2"
                >
                  Transforming Ideas
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary/80"
                >
                  into Digital Reality
                </motion.span>
              </h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-lg sm:text-xl text-muted mb-8 max-w-xl mx-auto lg:mx-0 text-center lg:text-left"
              >
                Empowering businesses through intelligent automation, seamless integrations, 
                and cutting-edge digital solutions.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
              >
                <Link 
                  href="/projects" 
                  className="group btn btn-primary w-[80%] max-w-[280px] sm:w-auto text-center justify-center text-white"
                >
                  <span>Explore Projects</span>
                  <svg 
                    className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link 
                  href="/contact"
                  className="group btn btn-secondary w-[80%] max-w-[280px] sm:w-auto text-center justify-center hover:bg-primary/5"
                >
                  Let's Connect
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto lg:mx-0"
              >
                {[
                  { number: 150, suffix: '+', label: 'Projects' },
                  { number: 50, suffix: '+', label: 'Clients' },
                  { number: 99, suffix: '%', label: 'Success' },
                  { number: 24, suffix: '/7', label: 'Support' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                    className="text-center"
                  >
                    <div className="font-display text-2xl sm:text-3xl font-bold gradient-text mb-1">
                      <CountUp 
                        end={stat.number} 
                        suffix={stat.suffix}
                        duration={2.5}
                      />
                    </div>
                    <div className="text-sm text-muted">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex-1 relative w-full max-w-[500px] mx-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl filter blur-3xl opacity-40" />
              <motion.div
                className="relative"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, -1, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="relative">
                  {/* Background Effects */}
                  <motion.div
                    className="absolute -top-8 -left-8 w-32 h-32"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  >
                    <div className="w-full h-full bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full filter blur-xl" />
                  </motion.div>
                  <motion.div
                    className="absolute -bottom-12 -right-8 w-24 h-24"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, -5, 0]
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  >
                    <div className="w-full h-full bg-gradient-to-r from-secondary/10 to-primary/10 rounded-full filter blur-xl" />
                  </motion.div>

                  {/* Main Illustration */}
                  <div className="relative aspect-square">
                    <Image
                      src="/images/Home1.png"
                      alt="Digital Automation Illustration"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                      quality={100}
                      className="object-contain drop-shadow-2xl"
                      priority
                    />
                  </div>

                  {/* Overlay Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-white/0 via-primary/5 to-secondary/5 rounded-2xl z-20"
                    animate={{
                      opacity: [0, 0.5, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-0 right-0 mx-auto w-full flex flex-col items-center justify-center gap-2 text-center"
        >
          <span className="text-sm text-muted">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-muted"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6"
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-surface to-white" />
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="section-title mb-4">Our Expertise</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Delivering comprehensive digital solutions that drive growth and efficiency
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Workflow Automation',
                description: 'Streamline operations with intelligent automation using Zapier, Make, and custom integrations.',
                icon: '⚡',
                gradient: 'from-[#FF6B6B] to-[#4ECDC4]',
              },
              {
                title: 'Document Solutions',
                description: 'Transform document processes with smart automation and seamless CRM integration.',
                icon: '📄',
                gradient: 'from-[#A8E6CF] to-[#3D84A8]',
              },
              {
                title: 'Digital Development',
                description: 'Create powerful web and mobile applications using cutting-edge technologies.',
                icon: '💻',
                gradient: 'from-[#FFD93D] to-[#FF6B6B]',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="card p-8 group cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 transform transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                    <span className="text-3xl">{service.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary">
                    {service.title}
                  </h3>
                  <p className="text-muted">{service.description}</p>
                  
                  <div className="mt-6 flex items-center text-primary font-medium opacity-0 transform translate-y-2 transition-all group-hover:opacity-100 group-hover:translate-y-0">
                    Learn More
                    <svg 
                      className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-2" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
          >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"
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
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6 text-surface">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg sm:text-xl mb-8 text-surface/80 max-w-2xl mx-auto">
              Let's collaborate to create innovative solutions that drive your business forward.
              The future of digital transformation starts here.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/contact" 
                className="btn bg-surface text-primary hover:bg-surface/90 hover:shadow-xl hover:shadow-white/10 group"
              >
                Start Your Journey
                <svg 
                  className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
        >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
    </div>
      </section>
    </main>
  );
}

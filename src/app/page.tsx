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
      <section className="relative min-h-[85vh] flex items-center pt-20 sm:pt-24 md:pt-16 lg:pt-0">
        <motion.div 
          className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"
          style={{ y }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface to-white/50" />
        
        <div className="container relative">
          <div className="flex flex-col lg:flex-row items-center gap-10 py-16">
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
                <span className="font-medium">Digital Solutions Agency</span>
              </motion.div>
              
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-center lg:text-left">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="block gradient-text mb-2"
                >
                  Automate, Integrate, Elevate
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary/80"
                >
                  Your Digital Workflow
                </motion.span>
              </h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-lg sm:text-xl text-muted mb-8 max-w-xl mx-auto lg:mx-0 text-center lg:text-left"
              >
                Fxsion specializes in workflow automation, web & mobile development, 
                and proposal design solutions that streamline your business operations 
                and boost productivity.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
              >
                <Link 
                  href="/contact" 
                  className="group btn btn-primary w-[80%] max-w-[280px] sm:w-auto text-center justify-center text-white"
                >
                  <span>Book a Discovery Call</span>
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
                  href="/projects"
                  className="group btn w-[80%] max-w-[280px] sm:w-auto text-center justify-center bg-gray-400 hover:bg-gray-500 text-white"
                >
                  See Our Work
                </Link>
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
          className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-0 right-0 mx-auto w-full flex flex-col items-center justify-center gap-2 text-center mt-12 sm:mt-16 md:mt-0"
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
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-surface to-white" />
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="section-title mb-4">Our Services</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Comprehensive digital solutions that streamline your operations and drive business growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Workflow Automation',
                description: 'Streamline operations and eliminate manual tasks with intelligent automation using Zapier, Make.com, and custom integrations.',
                icon: '⚡',
                gradient: 'from-[#FF6B6B] to-[#4ECDC4]',
              },
              {
                title: 'Web Development',
                description: 'Create modern, responsive websites using Next.js, React, and Tailwind CSS that engage visitors and drive conversions.',
                icon: '💻',
                gradient: 'from-[#FFD93D] to-[#FF6B6B]',
              },
              {
                title: 'Mobile App Development',
                description: 'Build cross-platform mobile apps with Flutter that deliver seamless experiences on both iOS and Android devices.',
                icon: '📱',
                gradient: 'from-[#6246EA] to-[#E45858]',
              },
              {
                title: 'Proposal & Document Automation',
                description: 'Transform document workflows with PandaDoc, Zapier, and custom solutions that save time and improve win rates.',
                icon: '📄',
                gradient: 'from-[#A8E6CF] to-[#3D84A8]',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-soft p-8 transition-all duration-300 hover:shadow-xl group"
              >
                <div className={`h-14 w-14 flex items-center justify-center text-2xl mb-6 rounded-xl bg-gradient-to-r ${service.gradient} text-white transform transition-transform group-hover:scale-110`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 bg-surface relative">
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="section-title mb-4">Featured Projects</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Explore some of our most successful client projects and solutions
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'Yacht Zero',
                description: 'A modern platform revolutionizing the yacht charter industry with innovative booking solutions.',
                image: '/projects/yacht-zero.jpg',
                tags: ['Next.js', 'React', 'API Integration'],
              },
              {
                title: 'Enterprise Workflow Automation',
                description: 'Automated end-to-end business processes for a Fortune 500 company, resulting in 75% reduction in manual tasks.',
                image: '/projects/workflow-automation.jpg',
                tags: ['Zapier', 'Make.com', 'APIs'],
              },
              {
                title: 'Document Processing System',
                description: 'Built a sophisticated document automation system handling 10,000+ documents monthly for a legal firm.',
                image: '/projects/document-system.jpg',
                tags: ['PandaDoc', 'Document AI', 'Node.js'],
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group overflow-hidden rounded-xl shadow-soft hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
          <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                  <p className="text-muted text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-primary/5 rounded-full text-xs text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/projects"
              className="btn btn-secondary inline-flex items-center"
            >
              View All Projects
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white relative">
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="section-title mb-4">Client Testimonials</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              What our clients say about working with Fxsion
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "Working with Fxsion transformed our business processes. The automation solutions they implemented saved us countless hours and dramatically improved our efficiency.",
                name: "Sarah Johnson",
                role: "Operations Director, TechFlow Inc.",
                image: "/testimonials/testimonial-1.jpg",
              },
              {
                quote: "The team at Fxsion delivered beyond our expectations. Their expertise in both technical development and business process optimization is truly impressive.",
                name: "Michael Chen",
                role: "CEO, InnovateX",
                image: "/testimonials/testimonial-2.jpg",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-soft p-8 border border-gray-100"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-6 text-2xl text-primary">
                    <svg width="45" height="36" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.3 36C8.9 36 5.33333 34.4667 2.6 31.4C0.866667 29.1333 0 26.3333 0 23C0 16.6 3.4 10.9333 10.2 6C14.2 3.33333 19.3333 1.33333 25.6 0L28.7 7C23.5 8.2 19.5 9.86667 16.7 12C13.9 14.1333 12.5 16.4667 12.5 19C12.6333 19 12.9 19 13.3 19C16.7667 19 19.6 20.1333 21.8 22.4C24 24.6667 25.1 27.4667 25.1 30.8C25.1 32.8 24.3 34.4667 22.7 35.8C20.3667 35.9333 17.3 36 13.5 36H13.3ZM38.8 36C34.4 36 30.8333 34.4667 28.1 31.4C26.3667 29.1333 25.5 26.3333 25.5 23C25.5 16.6 28.9 10.9333 35.7 6C39.7 3.33333 44.8333 1.33333 51.1 0L54.2 7C49 8.2 45 9.86667 42.2 12C39.4 14.1333 38 16.4667 38 19C38.1333 19 38.4 19 38.8 19C42.2667 19 45.1 20.1333 47.3 22.4C49.5 24.6667 50.6 27.4667 50.6 30.8C50.6 32.8 49.8 34.4667 48.2 35.8C45.8667 35.9333 42.8 36 39 36H38.8Z" fill="currentColor" fillOpacity="0.1"/>
                    </svg>
                  </div>
                  <p className="text-muted mb-6 flex-grow italic">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-200 flex-shrink-0">
          <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-muted">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>


        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
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
              Let's Build Something Incredible Together
            </h2>
            <p className="text-lg sm:text-xl mb-8 text-surface/80 max-w-2xl mx-auto">
              Ready to transform your business with intelligent automation and cutting-edge 
              digital solutions? Get in touch today to start your journey.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/contact" 
                className="btn bg-surface text-primary hover:bg-surface/90 hover:shadow-xl hover:shadow-white/10 group"
              >
                Book a Discovery Call
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

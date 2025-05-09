"use client";

import Navigation from '@/components/Navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

export default function Services(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <main className="min-h-screen bg-surface overflow-hidden" ref={containerRef}>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-surface">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h1 className="section-title mb-6">Our Services</h1>
            <p className="text-xl text-muted">
              Comprehensive digital solutions to streamline your operations, enhance productivity, and drive business growth.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Workflow Automation */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <span className="inline-block text-4xl mb-4">⚡</span>
              <h2 className="text-3xl font-bold mb-6">Workflow Automation</h2>
              <p className="text-lg text-muted mb-6 leading-relaxed">
                Eliminate manual processes and streamline your operations with intelligent workflow automation. We connect your business systems to create seamless, efficient processes that save time and reduce errors.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p>Reduce manual data entry by up to 90%</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p>Seamlessly connect your CRM, marketing tools, and document systems</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p>Create custom workflows tailored to your specific business processes</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-3 py-1 bg-primary/10 rounded-full text-sm text-primary">Zapier</span>
                <span className="px-3 py-1 bg-primary/10 rounded-full text-sm text-primary">Make.com</span>
                <span className="px-3 py-1 bg-primary/10 rounded-full text-sm text-primary">API Integrations</span>
                <span className="px-3 py-1 bg-primary/10 rounded-full text-sm text-primary">Webhooks</span>
              </div>
              <Link href="/contact" className="btn btn-primary text-white">
                Discuss Your Automation Needs
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl filter blur-xl -z-10" />
              <div className="relative aspect-square">
                <Image
                  src="/services/workflow-automation.jpg"
                  alt="Workflow Automation"
                  fill
                  className="object-cover rounded-xl shadow-xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Web Development */}
      <section className="py-20 bg-surface">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="order-2 md:order-1"
            >
              <div className="relative aspect-square">
                <div className="absolute -inset-4 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-2xl filter blur-xl -z-10" />
                <Image
                  src="/services/web-development.jpg"
                  alt="Web Development"
                  fill
                  className="object-cover rounded-xl shadow-xl"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="order-1 md:order-2"
            >
              <span className="inline-block text-4xl mb-4">💻</span>
              <h2 className="text-3xl font-bold mb-6">Web Development</h2>
              <p className="text-lg text-muted mb-6 leading-relaxed">
                Create beautiful, responsive websites that engage visitors and drive conversions. Our web development solutions are built with modern technologies that ensure optimal performance, security, and scalability.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p>Fast, secure, and SEO-optimized websites</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p>Seamless integration with your existing systems</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p>Modern UI/UX design that converts visitors into customers</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-3 py-1 bg-primary/10 rounded-full text-sm text-primary">Next.js</span>
                <span className="px-3 py-1 bg-primary/10 rounded-full text-sm text-primary">React</span>
                <span className="px-3 py-1 bg-primary/10 rounded-full text-sm text-primary">TypeScript</span>
                <span className="px-3 py-1 bg-primary/10 rounded-full text-sm text-primary">Tailwind CSS</span>
              </div>
              <Link href="/contact" className="btn btn-primary text-white">
                Start Your Web Project
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Mobile App Development */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <span className="inline-block text-4xl mb-4">📱</span>
              <h2 className="text-3xl font-bold mb-6">Mobile App Development</h2>
              <p className="text-lg text-muted mb-6 leading-relaxed">
                Build cross-platform mobile applications that deliver seamless experiences on both iOS and Android. Our mobile apps are designed for performance, usability, and engagement, helping you reach your audience wherever they are.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p>Native-like performance on multiple platforms</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p>Offline capabilities and synchronization</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p>Integration with device features (camera, location, etc.)</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-3 py-1 bg-primary/10 rounded-full text-sm text-primary">Flutter</span>
                <span className="px-3 py-1 bg-primary/10 rounded-full text-sm text-primary">Firebase</span>
                <span className="px-3 py-1 bg-primary/10 rounded-full text-sm text-primary">RESTful APIs</span>
                <span className="px-3 py-1 bg-primary/10 rounded-full text-sm text-primary">Push Notifications</span>
              </div>
              <Link href="/contact" className="btn btn-primary text-white">
                Discuss Your Mobile App
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl filter blur-xl -z-10" />
              <div className="relative aspect-square">
                <Image
                  src="/services/mobile-development.jpg"
                  alt="Mobile App Development"
                  fill
                  className="object-cover rounded-xl shadow-xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Document Automation */}
      <section className="py-20 bg-surface">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="order-2 md:order-1"
            >
              <div className="relative aspect-square">
                <div className="absolute -inset-4 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-2xl filter blur-xl -z-10" />
                <Image
                  src="/services/document-automation.jpg"
                  alt="Document Automation"
                  fill
                  className="object-cover rounded-xl shadow-xl"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="order-1 md:order-2"
            >
              <span className="inline-block text-4xl mb-4">📄</span>
              <h2 className="text-3xl font-bold mb-6">Proposal & Document Automation</h2>
              <p className="text-lg text-muted mb-6 leading-relaxed">
                Transform your document workflows with automated proposal generation, e-signatures, and document processing. Our document automation solutions save time, reduce errors, and improve win rates for your sales team.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p>Generate professional proposals in minutes, not hours</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p>Streamline approval workflows and e-signatures</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p>Integrate with your CRM for seamless client data sync</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-3 py-1 bg-primary/10 rounded-full text-sm text-primary">PandaDoc</span>
                <span className="px-3 py-1 bg-primary/10 rounded-full text-sm text-primary">DocuSign</span>
                <span className="px-3 py-1 bg-primary/10 rounded-full text-sm text-primary">Zapier</span>
                <span className="px-3 py-1 bg-primary/10 rounded-full text-sm text-primary">CRM Integration</span>
              </div>
              <Link href="/contact" className="btn btn-primary text-white">
                Streamline Your Documents
              </Link>
            </motion.div>
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
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6 text-surface">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg sm:text-xl mb-8 text-surface/80">
              Let's discuss how our services can help streamline your operations, improve efficiency, and drive growth for your business.
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
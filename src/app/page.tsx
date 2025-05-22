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
    <main className="min-h-screen bg-gradient-hero overflow-hidden" ref={containerRef}>
      <Navigation />
      <PageSpacer />
      
      {/* Hero Section - Rebalanced Value Proposition */}
      <section className="relative min-h-[90vh] flex items-center pt-20 sm:pt-24 md:pt-16 lg:pt-0">
        <motion.div 
          className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"
          style={{ y }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface/90 to-white/50" />
        
        <div className="container relative">
          <div className="flex flex-col lg:flex-row items-center gap-12 py-16">
            {/* Content - Enhanced Value Proposition */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-1 text-center lg:text-left max-w-2xl"
            >
              {/* Trust Signal */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-brand/10 border border-primary/20 text-primary mb-6"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-success"></span>
                </span>
                <span className="font-medium text-sm">Full-Service Digital Solutions Agency</span>
              </motion.div>
              
              {/* Main Headline - Answers "What we do" */}
              <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-center lg:text-left"
              >
                <span className="block bg-gradient-brand bg-clip-text text-transparent mb-2">
                  We Build, Design & 
                </span>
                <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary">
                  Automate Your Success
                </span>
              </motion.h1>
              
              {/* Value Proposition - Clear benefit */}
              <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-xl sm:text-2xl text-text/80 font-medium mb-4 text-center lg:text-left"
                >
                From stunning websites to powerful mobile apps and streamlined workflows
              </motion.p>
              
              {/* Target Audience - Answers "Who it's for" */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-lg text-muted mb-8 text-center lg:text-left"
              >
                For ambitious businesses ready to scale with professional branding, cutting-edge development, and intelligent automation solutions.
              </motion.p>

              {/* Social Proof Numbers */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="grid grid-cols-3 gap-6 mb-8 text-center lg:text-left"
              >
                <div>
                  <div className="text-2xl font-bold text-primary">
                    <CountUp end={50} suffix="+" />
                  </div>
                  <div className="text-sm text-muted">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">
                    <CountUp end={95} suffix="%" />
                  </div>
                  <div className="text-sm text-muted">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">
                    <CountUp end={48} suffix="h" />
                  </div>
                  <div className="text-sm text-muted">Average Delivery</div>
                </div>
              </motion.div>
              
              {/* Primary CTA - Answers "What to do next" */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
              >
                <Link 
                  href="/contact" 
                  className="group btn btn-primary w-full sm:w-auto text-center justify-center text-white bg-gradient-brand hover:shadow-brand transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold"
                >
                  <span>Start Your Project</span>
                  <svg 
                    className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link 
                  href="/projects"
                  className="group btn w-full sm:w-auto text-center justify-center border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 px-6 py-3"
                >
                  View Our Portfolio
                </Link>
              </motion.div>

              {/* Urgency/Scarcity */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="text-sm text-muted mt-4 text-center lg:text-left"
              >
                💡 Free consultation & project quote • Flexible payment plans available
              </motion.p>
            </motion.div>

            {/* Enhanced Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex-1 relative w-full max-w-[500px] mx-auto lg:max-w-none"
            >
              <div className="absolute inset-0 bg-gradient-brand rounded-3xl filter blur-3xl opacity-20 animate-pulse-slow" />
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
                    <div className="w-full h-full bg-gradient-to-r from-accent/20 to-secondary/20 rounded-full filter blur-xl" />
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
                    <div className="w-full h-full bg-gradient-to-r from-primary/20 to-accent/20 rounded-full filter blur-xl" />
                  </motion.div>

                  {/* Main Illustration */}
                  <div className="relative aspect-square">
                    <Image
                      src="/images/Home1.png"
                      alt="Digital Solutions - Web Development, Mobile Apps, Branding & Automation"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                      quality={90}
                      className="object-contain drop-shadow-2xl"
                      priority
                    />
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-soft"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                      <span className="text-xs font-medium text-text">Live Projects</span>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute bottom-8 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-soft"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium text-text">🚀 Full-Service</span>
                    </div>
                  </motion.div>
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
          className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-0 right-0 mx-auto w-full flex flex-col items-center justify-center gap-2 text-center"
        >
          <span className="text-sm text-muted">Discover our full range of services</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-primary"
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

      {/* Services Overview Section - Improved Layout */}
      <section className="py-24 bg-white relative">
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="section-title mb-6 bg-gradient-brand bg-clip-text text-transparent">
              Everything You Need to Scale Your Business
            </h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              From concept to launch, we handle every aspect of your digital presence with expertise and creativity.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Our Approach */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="h-full"
            >
              <h3 className="text-2xl font-bold mb-8 text-text">What makes us different:</h3>
              <div className="space-y-4 mb-8">
                {[
                  { strength: "End-to-end digital solutions", benefit: "One team, complete vision" },
                  { strength: "Custom design & development", benefit: "Tailored to your brand" },
                  { strength: "Scalable architecture", benefit: "Grows with your business" },
                  { strength: "Performance optimization", benefit: "Fast, reliable, secure" },
                  { strength: "Ongoing support & maintenance", benefit: "Always up to date" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="group p-4 bg-green-50 border-l-4 border-success rounded-r-lg hover:bg-green-100 transition-colors duration-200"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-success mt-0.5 flex-shrink-0">✅</span>
                      <div className="flex-1 min-w-0">
                        <div className="text-text font-medium mb-1">{item.strength}</div>
                        <div className="text-sm text-success font-medium">{item.benefit}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Our Approach Summary Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="p-8 bg-gradient-to-r from-success to-accent text-white rounded-2xl shadow-brand"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold mb-3">
                    Your Success Partner
                  </div>
                  <div className="text-lg mb-2 opacity-95">One team handling everything seamlessly</div>
                  <div className="text-sm opacity-80 border-t border-white/20 pt-3 mt-3">
                    = Focus on growing while we handle the tech
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-full"
            >
              <h3 className="text-2xl font-bold mb-8 text-text">Results we deliver:</h3>
              <div className="space-y-4 mb-8">
                {[
                  { metric: "Increase in online presence", result: "300% average growth" },
                  { metric: "Faster time-to-market", result: "50% quicker launches" },
                  { metric: "Improved user engagement", result: "85% better retention" },
                  { metric: "Enhanced brand recognition", result: "Professional identity" },
                  { metric: "Streamlined operations", result: "Automated workflows" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="group p-4 bg-blue-50 border-l-4 border-primary rounded-r-lg hover:bg-blue-100 transition-colors duration-200"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-primary mt-0.5 flex-shrink-0">📈</span>
                      <div className="flex-1 min-w-0">
                        <div className="text-text font-medium mb-1">{item.metric}</div>
                        <div className="text-sm text-primary font-medium">{item.result}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Results Summary Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="p-8 bg-gradient-brand text-white rounded-2xl shadow-brand"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold mb-3">
                    Complete Digital Transformation
                  </div>
                  <div className="text-lg mb-2 opacity-95">From brand identity to automated workflows</div>
                  <div className="text-sm opacity-80 border-t border-white/20 pt-3 mt-3">
                    = Sustainable growth and competitive advantage
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center mt-16"
          >
            <p className="text-muted mb-6 text-lg">Ready to see what we can do for your business?</p>
            <Link
              href="/contact"
              className="btn bg-gradient-brand text-white hover:shadow-brand transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold"
            >
              Get Your Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section - Balanced */}
      <section className="py-24 bg-gradient-hero relative">
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="section-title mb-6">Our Core Services</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Comprehensive digital solutions designed to elevate your business to new heights
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Web Development',
                description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
                icon: '🌐',
                gradient: 'from-[#1a1b4b] to-[#4338ca]',
                stats: 'Responsive & Fast',
                roi: 'SEO Optimized'
              },
              {
                title: 'Mobile Development',
                description: 'Native and cross-platform mobile apps that deliver seamless experiences across iOS and Android devices.',
                icon: '📱',
                gradient: 'from-[#4338ca] to-[#06b6d4]',
                stats: 'iOS & Android',
                roi: 'Native Performance'
              },
              {
                title: 'Branding & Design',
                description: 'Complete brand identity development including logos, visual systems, and brand guidelines that make you stand out.',
                icon: '🎨',
                gradient: 'from-[#06b6d4] to-[#10b981]',
                stats: 'Brand Identity',
                roi: 'Professional Look'
              },
              {
                title: 'Workflow Automation',
                description: 'Intelligent automation solutions that streamline your operations and eliminate repetitive manual tasks.',
                icon: '⚡',
                gradient: 'from-[#10b981] to-[#1a1b4b]',
                stats: 'Save 20+ hrs/week',
                roi: '3x ROI Average'
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-soft hover:shadow-brand p-8 transition-all duration-300 group border border-gray-100"
              >
                <div className={`h-16 w-16 flex items-center justify-center text-3xl mb-6 rounded-2xl bg-gradient-to-r ${service.gradient} text-white transform transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-text">{service.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-6">{service.description}</p>
                
                {/* Stats */}
                <div className="space-y-2 pt-4 border-t border-gray-100">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted">Features:</span>
                    <span className="text-xs font-semibold text-success">{service.stats}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted">Benefit:</span>
                    <span className="text-xs font-semibold text-primary">{service.roi}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Service CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              href="/contact"
              className="btn bg-gradient-brand text-white hover:shadow-brand transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold"
            >
              Discuss Your Project Needs
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Showcase Section */}
      <section className="py-24 bg-white relative">
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="section-title mb-6">Featured Work</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Real projects, real results from businesses that trusted us with their digital transformation
            </p>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            {[
              { number: "50+", label: "Projects Completed", icon: "🚀" },
              { number: "100%", label: "Client Satisfaction", icon: "⭐" },
              { number: "24/7", label: "Support Available", icon: "🛠️" },
              { number: "30+", label: "Happy Clients", icon: "😊" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-gradient-hero border border-gray-100"
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-primary mb-1">
                  <CountUp end={parseInt(stat.number)} suffix={stat.number.replace(/[0-9]/g, '')} />
                </div>
                <div className="text-sm text-muted">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Project Showcase */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'E-Commerce Platform',
                result: 'Complete digital transformation',
                description: 'Full-stack e-commerce solution with custom branding, mobile app, and automated inventory management.',
                metrics: { type: 'Web + Mobile', delivery: '6 weeks', result: '300% sales increase' },
                tags: ['React', 'Mobile App', 'Branding', 'Automation'],
              },
              {
                title: 'SaaS Brand & Platform',
                result: 'From startup to market leader',
                description: 'Complete brand identity, responsive web platform, and automated customer onboarding system.',
                metrics: { type: 'Brand + Web', delivery: '8 weeks', result: '10x user growth' },
                tags: ['Brand Design', 'Next.js', 'Automation', 'UI/UX'],
              },
              {
                title: 'Healthcare Mobile App',
                result: 'Award-winning patient experience',
                description: 'Native mobile app with telemedicine features, custom branding, and integrated appointment automation.',
                metrics: { type: 'Mobile + Brand', delivery: '10 weeks', result: '95% user satisfaction' },
                tags: ['React Native', 'Healthcare', 'Design', 'Integration'],
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group overflow-hidden rounded-2xl shadow-soft hover:shadow-brand transition-all duration-300 bg-white border border-gray-100"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-bold text-xl mb-2 text-text">{project.title}</h3>
                    <div className="text-2xl">🎯</div>
                  </div>
                  
                  <div className="mb-4 p-4 bg-gradient-brand/5 rounded-lg border border-primary/10">
                    <div className="text-primary font-semibold mb-2">{project.result}</div>
                    <div className="text-sm text-text">{project.description}</div>
                  </div>

                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted">Type:</span>
                      <span className="font-medium text-text">{project.metrics.type}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted">Timeline:</span>
                      <span className="font-medium text-success">{project.metrics.delivery}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted">Impact:</span>
                      <span className="font-bold text-primary">{project.metrics.result}</span>
                    </div>
                </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-primary/5 rounded-full text-xs text-primary font-medium"
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
              className="btn bg-gradient-brand text-white hover:shadow-brand transform hover:scale-105 transition-all duration-300 px-8 py-3"
            >
              View Complete Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Enhanced */}
      <section className="py-24 bg-gradient-hero relative">
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="section-title mb-6">What Our Clients Say</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Real feedback from business owners who've transformed their operations with our solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote: "Fxsion delivered a complete digital transformation - from our brand identity to a stunning website and mobile app. The automation features alone have saved us countless hours every week.",
                name: "Sarah Johnson",
                role: "CEO, TechFlow Marketing",
                company: "Full-service marketing agency",
                result: "Complete rebrand + 40% revenue increase",
                rating: 5,
              },
              {
                quote: "Working with Fxsion was a game-changer. They didn't just build us an app - they created our entire digital presence and streamlined our operations. Professional, creative, and results-driven.",
                name: "Michael Chen",
                role: "Founder, InnovateX",
                company: "Healthcare technology startup",
                result: "Brand + platform + 300% user growth",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-soft hover:shadow-brand transition-all duration-300 p-8 border border-gray-100"
              >
                <div className="flex flex-col h-full">
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">⭐</span>
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="mb-6 text-2xl text-primary/20">
                    <svg width="32" height="24" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.3 36C8.9 36 5.33333 34.4667 2.6 31.4C0.866667 29.1333 0 26.3333 0 23C0 16.6 3.4 10.9333 10.2 6C14.2 3.33333 19.3333 1.33333 25.6 0L28.7 7C23.5 8.2 19.5 9.86667 16.7 12C13.9 14.1333 12.5 16.4667 12.5 19C12.6333 19 12.9 19 13.3 19C16.7667 19 19.6 20.1333 21.8 22.4C24 24.6667 25.1 27.4667 25.1 30.8C25.1 32.8 24.3 34.4667 22.7 35.8C20.3667 35.9333 17.3 36 13.5 36H13.3Z" fill="currentColor"/>
                    </svg>
                  </div>
                  
                  <p className="text-text mb-6 flex-grow leading-relaxed text-lg">{testimonial.quote}</p>
                  
                  {/* Results */}
                  <div className="mb-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <div className="text-sm text-muted mb-1">Project Impact:</div>
                    <div className="font-semibold text-primary">{testimonial.result}</div>
                    </div>

                  {/* Author */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-text">{testimonial.name}</h4>
                      <p className="text-sm text-muted">{testimonial.role}</p>
                      <p className="text-xs text-muted">{testimonial.company}</p>
                    </div>
                    <div className="text-4xl">💼</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section - Balanced */}
      <section className="py-24 bg-gradient-brand relative overflow-hidden">
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
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl sm:text-2xl mb-4 text-white/90">
              Join our growing family of successful businesses
            </p>
            <p className="text-lg mb-12 text-white/80">
              From concept to launch, we'll handle every aspect of your digital transformation
            </p>
            
            {/* Main CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <Link 
                href="/contact" 
                className="btn bg-white text-primary hover:bg-white/95 hover:shadow-xl transform hover:scale-105 transition-all duration-300 px-10 py-5 text-xl font-bold group"
              >
                Start Your Project Today
                <svg 
                  className="w-6 h-6 ml-3 transform transition-transform group-hover:translate-x-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80"
            >
              <div className="flex items-center gap-2">
                <span>✅</span>
                <span>Free consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✅</span>
                <span>Custom quote</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✅</span>
                <span>Flexible timelines</span>
              </div>
            </motion.div>

            {/* Urgency */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-yellow-300 mt-6 font-medium"
            >
              🚀 New projects starting soon - Secure your spot today
            </motion.p>
          </motion.div>
    </div>
      </section>
    </main>
  );
}

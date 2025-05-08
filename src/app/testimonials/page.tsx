"use client";

import Navigation from '@/components/Navigation';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import CountUp from '@/components/CountUp';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  project: string;
  industry?: string;
  logo?: string;
  results?: string[];
}

export default function Testimonials(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState<string>("All");
  
  const testimonials: Testimonial[] = [
    {
      name: 'Sarah Johnson',
      role: 'Operations Director',
      company: 'TechFlow Solutions',
      image: '/testimonials/sarah.jpg',
      quote: 'The workflow automation solution implemented by Kelvin has transformed our operations. We have seen a 40% increase in efficiency and significant time savings across departments.',
      project: 'Workflow Automation Suite',
      industry: 'Technology',
      logo: '/testimonials/logos/techflow.svg',
      results: [
        '40% increase in operational efficiency',
        'Reduced manual task time by 15 hours per week',
        'Seamless integration with existing systems'
      ]
    },
    {
      name: 'Michael Chen',
      role: 'CEO',
      company: 'Marine Ventures',
      image: '/testimonials/michael.jpg',
      quote: 'The yacht website project exceeded our expectations. The real-time data integration and elegant design have significantly improved our customer engagement.',
      project: 'Yacht Zero Website',
      industry: 'Luxury & Travel',
      logo: '/testimonials/logos/marine.svg',
      results: [
        '35% increase in online inquiries',
        'Integrated real-time availability system',
        'Mobile-responsive design with premium UX'
      ]
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Manager',
      company: 'Growth Dynamics',
      image: '/testimonials/emily.jpg',
      quote: 'The marketing asset automation system has streamlined our content creation process. We can now generate and distribute materials in a fraction of the time.',
      project: 'Marketing Asset Automation',
      industry: 'Marketing',
      logo: '/testimonials/logos/growth.svg',
      results: [
        'Reduced design turnaround time by 60%',
        'Consistent branding across all materials',
        'Integrated with CRM for targeted distribution'
      ]
    },
    {
      name: 'David Thompson',
      role: 'Founder',
      company: 'SubTrackr',
      image: '/testimonials/david.jpg',
      quote: 'Kelvin\'s expertise in Flutter development helped us create a robust subscription tracking app that our users love. The attention to detail and user experience is outstanding.',
      project: 'SubTrackr Mobile App',
      industry: 'Technology',
      logo: '/testimonials/logos/subtrackr.svg',
      results: [
        'Successfully launched on iOS and Android',
        '4.8/5 average user rating',
        'Intuitive UI with custom animations'
      ]
    },
    {
      name: 'Lisa Anderson',
      role: 'Sales Director',
      company: 'Global Solutions Inc.',
      image: '/testimonials/lisa.jpg',
      quote: 'The PandaDoc CRM integration has revolutionized our sales process. We can now generate and track proposals automatically, saving countless hours of manual work.',
      project: 'PandaDoc CRM Integration',
      industry: 'Professional Services',
      logo: '/testimonials/logos/global.svg',
      results: [
        'Reduced proposal creation time by 75%',
        'Increased proposal acceptance rate by 25%',
        'Complete visibility into document analytics'
      ]
    },
    {
      name: 'James Wilson',
      role: 'Creative Director',
      company: 'Design Studio Pro',
      image: '/testimonials/james.jpg',
      quote: 'The proposal templates and brand kit design have given our agency a professional edge. The automated workflow has made our client onboarding process seamless.',
      project: 'Agency Proposal Templates',
      industry: 'Creative',
      logo: '/testimonials/logos/designstudio.svg',
      results: [
        'Standardized client onboarding process',
        'Professional document templates with customization',
        'Automated follow-up sequences'
      ]
    },
  ];

  // Auto-rotate featured testimonial
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Manual navigation for featured testimonial
  const goToTestimonial = (index: number) => {
    setCurrentTestimonialIndex(index);
  };
  
  // Get unique industries for filter
  const industries = ["All", ...Array.from(new Set(testimonials.map(t => t.industry).filter(Boolean) as string[]))];
  
  // Apply industry filter
  const filteredTestimonials = activeFilter === "All" 
    ? testimonials 
    : testimonials.filter(t => t.industry === activeFilter);

  return (
    <main className="min-h-screen bg-surface overflow-hidden" ref={containerRef}>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <motion.div 
          className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"
          style={{ y }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface to-white/50" />
        
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary mb-6">
              <span className="text-sm font-medium">Client Success Stories</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
              Testimonials
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
              Real results from real clients. Discover how our solutions have transformed businesses across industries.
            </p>
          </motion.div>

          {/* Featured Testimonial Carousel */}
          <div className="max-w-5xl mx-auto mb-4 relative">
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden h-[400px] md:h-[350px]">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary z-10" />
              
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentTestimonialIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="grid md:grid-cols-2 h-full"
                >
                  <div className="relative h-40 md:h-full">
                    <Image
                      src={testimonials[currentTestimonialIndex].image}
                      alt={testimonials[currentTestimonialIndex].name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6 text-white">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                          <Image
                            src={testimonials[currentTestimonialIndex].image}
                            alt={testimonials[currentTestimonialIndex].name}
                            width={48}
                            height={48}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-bold">{testimonials[currentTestimonialIndex].name}</h3>
                          <p className="text-sm text-white/80">{testimonials[currentTestimonialIndex].role}, {testimonials[currentTestimonialIndex].company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8 md:p-10">
                    <div className="text-4xl text-primary mb-6">"</div>
                    <blockquote className="text-lg md:text-xl text-gray-700 italic mb-6 leading-relaxed">
                      {testimonials[currentTestimonialIndex].quote}
                    </blockquote>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-bold text-primary">{testimonials[currentTestimonialIndex].project}</div>
                        <div className="text-sm text-gray-500">{testimonials[currentTestimonialIndex].industry}</div>
                      </div>
                      <Link href="/projects" className="text-primary font-medium hover:underline">
                        View Project
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Carousel Navigation Dots - Now outside the carousel */}
            <div className="flex justify-center gap-2 mt-4 mb-12">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentTestimonialIndex === index ? 'bg-primary w-4' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Industry Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {industries.map((industry, index) => (
              <motion.button
                key={industry}
                onClick={() => setActiveFilter(industry)}
                className={`px-5 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
                  activeFilter === industry 
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md' 
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                {industry}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group flex flex-col"
              >
                {/* Profile Section */}
                <div className="flex items-center gap-4 p-6 border-b border-gray-100">
                  <div className="w-14 h-14 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={56}
                      height={56}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                    <p className="text-sm text-primary">{testimonial.role}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
                
                {/* Quote Section */}
                <div className="p-6 flex-grow">
                  <div className="flex items-start mb-4">
                    <div className="text-2xl text-primary">"</div>
                  </div>
                  <blockquote className="text-gray-700 mb-4 line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                    {testimonial.quote}
                  </blockquote>
                </div>
                
                {/* Project Details */}
                <div className="p-6 bg-gray-50 border-t border-gray-100">
                  <div className="flex justify-between items-center mb-3">
                    <div className="font-medium text-gray-800">{testimonial.project}</div>
                    <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {testimonial.industry}
                    </span>
                  </div>
                  
                  {testimonial.results && (
                    <div className="mt-4">
                      <p className="text-xs text-gray-500 mb-2">Key Results:</p>
                      <ul className="space-y-1">
                        {testimonial.results.map((result, i) => (
                          <li key={i} className="text-sm text-gray-700 flex items-start">
                            <svg className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        
        <div className="container relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Client Satisfaction by the Numbers
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Measurable results that demonstrate our commitment to delivering exceptional solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: 50, suffix: '+', label: 'Projects Completed', icon: '📊' },
              { number: 95, suffix: '%', label: 'Client Satisfaction', icon: '⭐' },
              { number: 40, suffix: '%', label: 'Average Efficiency Gain', icon: '⚡' },
              { number: 100, suffix: '%', label: 'On-time Delivery', icon: '🚀' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
              >
                <div className="text-2xl mb-3">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  <CountUp 
                    end={stat.number} 
                    suffix={stat.suffix} 
                    duration={2}
                  />
                </div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join these satisfied clients and experience the difference that strategic digital solutions can make.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact" 
                className="btn btn-primary"
              >
                Start Your Project
              </Link>
              <Link 
                href="/projects" 
                className="btn btn-secondary"
              >
                Explore Past Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 
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
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-8 tracking-tight">
              Client<br />Testimonials
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
              Real results from real clients. Discover how our solutions have transformed businesses across industries.
            </p>
          </motion.div>

          {/* Featured Testimonial Carousel */}
          <div className="max-w-5xl mx-auto mb-12 relative">
            <div className="relative bg-white rounded-3xl shadow-lg overflow-hidden">
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
                  <div className="relative h-60 md:h-full">
                    <Image
                      src={testimonials[currentTestimonialIndex].image}
                      alt={testimonials[currentTestimonialIndex].name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-8 text-white">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-lg">
                          <Image
                            src={testimonials[currentTestimonialIndex].image}
                            alt={testimonials[currentTestimonialIndex].name}
                            width={56}
                            height={56}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-bold text-xl">{testimonials[currentTestimonialIndex].name}</h3>
                          <p className="text-sm text-white/90">{testimonials[currentTestimonialIndex].role}, {testimonials[currentTestimonialIndex].company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="text-6xl text-black/10 mb-6 font-serif">"</div>
                    <blockquote className="text-lg md:text-xl text-gray-800 mb-8 leading-relaxed">
                      {testimonials[currentTestimonialIndex].quote}
                    </blockquote>
                    
                    <div className="flex items-center justify-between mt-auto">
                      <div>
                        <div className="font-bold text-primary">{testimonials[currentTestimonialIndex].project}</div>
                        <div className="text-sm text-gray-500">{testimonials[currentTestimonialIndex].industry}</div>
                      </div>
                      <Link 
                        href="/projects" 
                        className="group inline-flex items-center text-sm font-medium border-b border-primary text-primary hover:border-secondary transition-colors duration-300"
                      >
                        View Project
                        <svg className="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Carousel Navigation Dots */}
            <div className="flex justify-center gap-2 mt-6 mb-16">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentTestimonialIndex === index ? 'bg-black w-6' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Industry Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {industries.map((industry, index) => (
              <motion.button
                key={industry}
                onClick={() => setActiveFilter(industry)}
                className={`px-6 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
                  activeFilter === industry 
                    ? 'bg-black text-white shadow-md' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
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
      <section className="py-8 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group transform hover:-translate-y-1"
              >
                {/* Testimonial Card */}
                <div className="relative h-full p-6 group-hover:bg-gray-50 transition-colors duration-300">
                  <div className="h-full flex flex-col">
                    {/* Testimonial Quote */}
                    <div className="mb-6 flex-grow">
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {testimonial.quote.length > 150 ? `${testimonial.quote.substring(0, 150)}...` : testimonial.quote}
                      </p>
                    </div>
                    
                    {/* Profile Info */}
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-white shadow-md">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                        <p className="text-xs text-gray-500">{testimonial.role}</p>
                        <p className="text-xs text-primary">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Gradient Background on Hover */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        
        <div className="container relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
              Make informed decisions with Insights
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Our Insights dashboard surfaces all activity across our projects
              and shows you trends that enable better team scheduling and decision making.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/5 hover:border-white/20 transition-all duration-300 cursor-pointer"
            >
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-sm uppercase tracking-wider text-white/60">Bookings</h4>
                <svg className="w-5 h-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex items-baseline">
                <span className="font-display text-4xl font-bold">32%</span>
                <span className="ml-2 text-blue-400 text-sm flex items-center">
                  <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  4.3%
                </span>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-xs text-white/50">Increased bookings from previous quarter</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/5 hover:border-white/20 transition-all duration-300 cursor-pointer"
            >
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-sm uppercase tracking-wider text-white/60">Projects Completed</h4>
                <svg className="w-5 h-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                </svg>
              </div>
              <div className="flex items-baseline">
                <span className="font-display text-4xl font-bold">150</span>
                <span className="ml-2 text-green-400 text-sm">Total</span>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-xs text-white/50">Successfully delivered across 6 industries</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/5 hover:border-white/20 transition-all duration-300 cursor-pointer"
            >
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-sm uppercase tracking-wider text-white/60">Canceled</h4>
                <svg className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex items-baseline">
                <span className="font-display text-4xl font-bold">2%</span>
                <span className="ml-2 text-gray-400 text-sm flex items-center">
                  <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                  0.5%
                </span>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-xs text-white/50">Industry-low cancellation rate</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/5 hover:border-white/20 transition-all duration-300 cursor-pointer"
            >
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-sm uppercase tracking-wider text-white/60">Most Booked</h4>
                <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center">
                  <span className="text-yellow-400 font-bold">A</span>
                </div>
              </div>
              <div className="flex items-baseline">
                <span className="font-display text-4xl font-bold">321</span>
                <span className="ml-2 text-yellow-400 text-sm">Projects</span>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-xs text-white/50">Automation is our most requested service</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-display tracking-tight">
              Ready to Transform<br />Your Business?
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              Join these satisfied clients and experience the difference that strategic digital solutions can make.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link 
                href="/contact" 
                className="btn btn-primary text-white px-10 py-4"
              >
                Start Your Project
              </Link>
              <Link 
                href="/projects" 
                className="btn btn-secondary text-white px-10 py-4"
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
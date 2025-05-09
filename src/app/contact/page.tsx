"use client";

import Navigation from '@/components/Navigation';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaTelegramPlane, FaTwitter } from 'react-icons/fa';
import { FaXTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa6';

export default function Contact(): JSX.Element {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    service: 'workflow-automation'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Here would normally be code to submit to a backend
    // For now, just simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  // Pre-create icon elements to avoid JSX component issues
  const twitterIcon = FaXTwitter({ size: 18 });
  const linkedinIcon = FaLinkedinIn({ size: 18 });
  const githubIcon = FaGithub({ size: 18 });

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
            className="max-w-3xl mx-auto text-center mb-20"
          >
            <h1 className="section-title mb-6">Let's Build Something Incredible Together</h1>
            <p className="text-lg text-muted mb-0">
              Ready to transform your business with intelligent automation and custom digital solutions?
              Fill out the form below or schedule a discovery call.
            </p>
          </motion.div>

          {/* Contact Form & Info */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="bg-white p-8 rounded-xl shadow-soft"
            >
              {!isSubmitted ? (
                <form onSubmit={handleSubmit}>
                  <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-muted mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary transition"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-muted mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary transition"
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-muted mb-1">
                        Company (Optional)
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary transition"
                        placeholder="Your company"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-muted mb-1">
                        What service are you interested in?
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formState.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary transition"
                      >
                        <option value="workflow-automation">Workflow Automation</option>
                        <option value="web-development">Web Development</option>
                        <option value="mobile-app">Mobile App Development</option>
                        <option value="document-automation">Document Automation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-muted mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary transition"
                        placeholder="Tell us about your project"
                      ></textarea>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full btn btn-primary text-white flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
                  <p className="text-muted mb-6">
                    Your message has been received. We'll get back to you shortly!
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormState({
                        name: '',
                        email: '',
                        company: '',
                        message: '',
                        service: 'workflow-automation'
                      });
                    }}
                    className="btn btn-secondary"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </motion.div>
            
            {/* Contact Info & Calendar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <div className="bg-primary text-white p-8 rounded-xl shadow-soft mb-8">
                <h2 className="text-2xl font-bold mb-6">Schedule a Discovery Call</h2>
                <p className="mb-6">
                  Prefer to discuss your project in real-time? Schedule a complimentary 30-minute discovery call to explore how we can help transform your business.
                </p>
                <a 
                  href="https://calendly.com/fxsion/30min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn bg-white text-primary hover:bg-white/90 w-full justify-center"
                >
                  Book on Calendly
                </a>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-soft">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <a href="mailto:hello@fxsion.com" className="text-primary hover:underline">
                        hello@fxsion.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Location</h3>
                      <p className="text-muted">Remote based, serving clients worldwide</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-3">Connect On Social</h3>
                    <div className="flex space-x-4">
                      <a 
                        href="https://x.com/klvntmi" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 bg-primary/5 hover:bg-primary hover:text-white rounded-full transition-all duration-300"
                        aria-label="X (Twitter)"
                      >
                        {twitterIcon}
                      </a>
                      <a 
                        href="https://www.linkedin.com/in/etoma-etoto-odi-9ba176251/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 bg-primary/5 hover:bg-primary hover:text-white rounded-full transition-all duration-300"
                        aria-label="LinkedIn"
                      >
                        {linkedinIcon}
                      </a>
                      <a 
                        href="https://github.com/Kellytomi" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 bg-primary/5 hover:bg-primary hover:text-white rounded-full transition-all duration-300"
                        aria-label="GitHub"
                      >
                        {githubIcon}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted max-w-2xl mx-auto">
                Here are answers to some common questions about working with Fxsion
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  question: "What is your typical process for new projects?",
                  answer: "We start with a discovery call to understand your needs, followed by a proposal outlining scope, timeline, and budget. Once approved, we begin development with regular updates and feedback sessions throughout the process."
                },
                {
                  question: "How long does a typical project take?",
                  answer: "Project timelines vary based on complexity. Simple automation solutions may take 1-2 weeks, while comprehensive web or mobile applications typically require 2-3 months for development and testing."
                },
                {
                  question: "Do you offer ongoing support after project completion?",
                  answer: "Yes, we provide ongoing support and maintenance packages to ensure your solution continues to run smoothly and can evolve as your business needs change."
                },
                {
                  question: "What industries do you specialize in?",
                  answer: "We've worked with clients across various industries including real estate, finance, professional services, e-commerce, and education, but our solutions can be adapted to virtually any business need."
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-soft">
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-muted">{faq.answer}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 
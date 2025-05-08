"use client";

import Navigation from '@/components/Navigation';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { FaXTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa6';
import emailjs from '@emailjs/browser';
import { IconType } from 'react-icons';

interface ContactInfo {
  icon: IconType;
  title: string;
  value: string;
  description: string;
  link?: string;
}

interface SocialLink {
  icon: IconType;
  label: string;
  href: string;
  color: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: FaEnvelope,
    title: 'Email',
    value: 'hello@fxsion.com',
    description: 'Drop me a line anytime',
    link: 'mailto:hello@fxsion.com',
  },
  {
    icon: FaMapMarkerAlt,
    title: 'Location',
    value: 'Lagos, Nigeria',
    description: 'West Africa',
  },
  {
    icon: FaClock,
    title: 'Business Hours',
    value: 'Mon - Fri: 9am - 5pm',
    description: 'WAT (UTC+1)',
  },
];

const socialLinks: SocialLink[] = [
  {
    icon: FaXTwitter,
    label: 'Twitter',
    href: 'https://twitter.com/username',
    color: 'hover:bg-black',
  },
  {
    icon: FaLinkedinIn,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/username',
    color: 'hover:bg-[#0077B5]',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    href: 'https://github.com/username',
    color: 'hover:bg-[#333]',
  },
];

const ContactInfoCard = ({ info }: { info: ContactInfo }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative p-6 rounded-xl overflow-hidden backdrop-blur-lg border border-gray-200"
      style={{
        background: '#FFFFFF',
        boxShadow: '0 8px 32px rgba(45, 48, 71, 0.1)',
      }}
    >
      <div className="relative flex items-start gap-4">
        <div className="p-3 rounded-lg bg-white border border-gray-200 text-primary">
          {info.icon({ className: "w-6 h-6" })}
        </div>
        <div>
          <h3 className="text-lg font-syne font-semibold mb-1">{info.title}</h3>
          {info.link ? (
            <a
              href={info.link}
              className="text-primary hover:text-accent transition-colors duration-200"
            >
              {info.value}
            </a>
          ) : (
            <p className="text-primary/90">{info.value}</p>
          )}
          <p className="text-sm text-primary/60 mt-1">{info.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const SocialLink = ({ link }: { link: SocialLink }) => {
  return (
    <motion.a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-4 rounded-full bg-white border border-gray-200 hover:border-primary/20 group relative overflow-hidden transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative text-primary group-hover:text-accent transition-colors duration-300">
        {link.icon({ className: "w-5 h-5" })}
      </span>
    </motion.a>
  );
};

export default function Contact(): JSX.Element {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setStatusMessage('Please fill out all required fields');
      return;
    }
    
    try {
      setStatus('submitting');
      setStatusMessage('Sending your message...');
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };
      
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      );
      
      setStatus('success');
      setStatusMessage('Your message has been sent successfully!');
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      setTimeout(() => {
        setStatus('idle');
        setStatusMessage('');
      }, 5000);
      
    } catch (error) {
      setStatus('error');
      setStatusMessage('Failed to send message. Please try again later.');
      
      setTimeout(() => {
        setStatus('idle');
        setStatusMessage('');
      }, 5000);
    }
  };

  const formContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const formItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="min-h-screen bg-surface">
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="section-title mb-6">Get in Touch</h1>
            <p className="section-subtitle">
              Let's discuss how we can bring your digital transformation vision to life
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              variants={formContainerVariants}
              initial="hidden"
              animate="visible"
              className="relative"
            >
              <div className="card p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl" />
                <div className="relative">
                  <h2 className="display-text text-2xl mb-6">Send a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <motion.div variants={formItemVariants} className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                          Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                          required
                        />
                      </div>
                    </motion.div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-primary mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 resize-none"
                        required
                      />
                    </div>
                    {status !== 'idle' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`p-4 rounded-lg ${
                          status === 'success' ? 'bg-green-50 text-green-800' : 
                          status === 'error' ? 'bg-red-50 text-red-800' : 
                          'bg-blue-50 text-blue-800'
                        }`}
                      >
                        {statusMessage}
                      </motion.div>
                    )}
                    <motion.button
                      type="submit"
                      className="btn btn-primary w-full justify-center group"
                      disabled={status === 'submitting'}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      {status === 'submitting' ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          Send Message
                          <svg 
                            className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </span>
                      )}
                    </motion.button>
                  </form>
                </div>
              </div>
            </motion.div>

            {/* Contact Info */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {contactInfo.map((info) => (
                  <ContactInfoCard key={info.title} info={info} />
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-8"
              >
                <h3 className="text-lg font-syne font-semibold mb-4">Connect with Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((link) => (
                    <SocialLink key={link.label} link={link} />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 
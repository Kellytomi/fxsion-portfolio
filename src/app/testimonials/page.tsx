"use client";

import Navigation from '@/components/Navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Testimonials(): JSX.Element {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-soft-white to-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-6">
              Client Success Stories
            </h1>
            <p className="text-lg text-gray-600">
              Hear from businesses that have transformed their operations with our solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Operations Director',
                company: 'TechFlow Solutions',
                image: '/testimonials/sarah.jpg',
                quote: 'The workflow automation solution implemented by Kelvin has transformed our operations. We have seen a 40% increase in efficiency and significant time savings across departments.',
                project: 'Workflow Automation Suite',
              },
              {
                name: 'Michael Chen',
                role: 'CEO',
                company: 'Marine Ventures',
                image: '/testimonials/michael.jpg',
                quote: 'The yacht website project exceeded our expectations. The real-time data integration and elegant design have significantly improved our customer engagement.',
                project: 'Yacht Website Project',
              },
              {
                name: 'Emily Rodriguez',
                role: 'Marketing Manager',
                company: 'Growth Dynamics',
                image: '/testimonials/emily.jpg',
                quote: 'The marketing asset automation system has streamlined our content creation process. We can now generate and distribute materials in a fraction of the time.',
                project: 'Marketing Asset Automation',
              },
              {
                name: 'David Thompson',
                role: 'Founder',
                company: 'SubTrackr',
                image: '/testimonials/david.jpg',
                quote: 'Kelvin\'s expertise in Flutter development helped us create a robust subscription tracking app that our users love. The attention to detail and user experience is outstanding.',
                project: 'SubTrackr Mobile App',
              },
              {
                name: 'Lisa Anderson',
                role: 'Sales Director',
                company: 'Global Solutions Inc.',
                image: '/testimonials/lisa.jpg',
                quote: 'The PandaDoc CRM integration has revolutionized our sales process. We can now generate and track proposals automatically, saving countless hours of manual work.',
                project: 'PandaDoc CRM Integration',
              },
              {
                name: 'James Wilson',
                role: 'Creative Director',
                company: 'Design Studio Pro',
                image: '/testimonials/james.jpg',
                quote: 'The proposal templates and brand kit design have given our agency a professional edge. The automated workflow has made our client onboarding process seamless.',
                project: 'Agency Proposal Templates',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-soft-white p-8 rounded-xl"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-midnight">{testimonial.name}</h3>
                    <p className="text-gold">{testimonial.role}</p>
                    <p className="text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
                <blockquote className="text-gray-600 mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div className="text-sm text-midnight">
                  Project: {testimonial.project}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-midnight text-soft-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-4 gap-8 text-center"
          >
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '95%', label: 'Client Satisfaction' },
              { number: '40%', label: 'Average Efficiency Gain' },
              { number: '100%', label: 'On-time Delivery' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-gold mb-2">{stat.number}</div>
                <div className="text-soft-white">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
} 
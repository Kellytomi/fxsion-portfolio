"use client";

import Navigation from '@/components/Navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

export default function About(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);

  // Function to handle hover effects
  const handleCardHover = (element: HTMLElement, colors: string[], isEnter: boolean) => {
    if (isEnter) {
      // Extract colors from Tailwind classes
      const fromColor = colors[0].replace('from-', '');
      const toColor = colors[1].replace('to-', '');
      
      // Set hover colors based on the class names
      if (fromColor === 'teal-400') {
        element.style.setProperty('--card-gradient-from', 'rgb(45 212 191)');
        element.style.setProperty('--card-gradient-to', 'rgb(13 148 136)');
      } else if (fromColor === 'red-400') {
        element.style.setProperty('--card-gradient-from', 'rgb(248 113 113)');
        element.style.setProperty('--card-gradient-to', 'rgb(220 38 38)');
      } else if (fromColor === 'green-400') {
        element.style.setProperty('--card-gradient-from', 'rgb(74 222 128)');
        element.style.setProperty('--card-gradient-to', 'rgb(22 163 74)');
      }
    } else {
      // Reset to default colors - primary color from Tailwind config (#2D3047)
      element.style.setProperty('--card-gradient-from', '#2D3047CC'); // 80% opacity
      element.style.setProperty('--card-gradient-to', '#2D3047');
    }
  };

  return (
    <main className="min-h-screen bg-surface overflow-hidden" ref={containerRef}>
      <Navigation />
      
      {/* Hero Section - Agency Story */}
      <section className="pt-32 pb-24 bg-surface">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h1 className="section-title mb-6">Our Story</h1>
            <p className="text-xl text-muted mb-6 leading-relaxed">
              Fxsion was founded with a simple vision: to help businesses thrive in the digital age through intelligent automation and seamless digital experiences.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="relative rounded-2xl overflow-hidden"
            >
              <Image
                src="/profile-full.jpg"
                alt="Etoma-Etoto Kelvin Odi"
                width={600}
                height={700}
                className="object-cover w-full h-full rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl"></div>
              <div className="absolute bottom-8 left-8">
                <h3 className="text-2xl font-bold text-white mb-1">Etoma-Etoto Kelvin Odi</h3>
                <p className="text-white/80">Founder & Lead Developer</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold mb-6">The Fxsion Journey</h2>
              <p className="text-lg text-muted mb-6 leading-relaxed">
                After years of experience in workflow automation and software development, I noticed that many businesses struggle with disconnected systems, manual processes, and inefficient workflows.
              </p>
              <p className="text-lg text-muted mb-6 leading-relaxed">
                Fxsion was established to bridge these gaps. We specialize in creating seamless integrations between different platforms, automating repetitive tasks, and building custom digital solutions that solve real business problems.
              </p>
              <p className="text-lg text-muted mb-8 leading-relaxed">
                Today, we've helped dozens of clients transform their operations through smart automation and purpose-built digital solutions that drive efficiency and growth.
              </p>
              
              <Link href="/contact" className="btn btn-primary text-white">
                Let's Work Together
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Mission & Values */}
      <section className="py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="section-title mb-4">Mission & Values</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Client Success First',
                description: 'We measure our success by the success of our clients. Every solution we build is designed to deliver tangible business outcomes.',
                icon: '🏆',
                color: 'bg-gradient-to-br from-amber-400 to-amber-600',
              },
              {
                title: 'Innovative Simplicity',
                description: 'We believe in the power of simplicity. Our solutions are innovative yet intuitive, making complexity manageable.',
                icon: '💡',
                color: 'bg-gradient-to-br from-blue-400 to-blue-600',
              },
              {
                title: 'Continuous Improvement',
                description: 'Technology evolves, and so do we. We are committed to continuous learning and refining our craft to deliver the best solutions.',
                icon: '📈',
                color: 'bg-gradient-to-br from-green-400 to-green-600',
              },
              {
                title: 'Transparent Communication',
                description: 'We believe in clear, open communication throughout every project. No jargon, no hidden agendas – just honest collaboration.',
                icon: '🔄',
                color: 'bg-gradient-to-br from-purple-400 to-purple-600',
              },
              {
                title: 'Quality Craftsmanship',
                description: 'We take pride in our work and pay meticulous attention to detail. Every solution we build reflects our commitment to excellence.',
                icon: '⚒️',
                color: 'bg-gradient-to-br from-red-400 to-red-600',
              },
              {
                title: 'Long-term Partnerships',
                description: 'We don\'t just build and leave. We form lasting partnerships with our clients, providing ongoing support and growth strategies.',
                icon: '🤝',
                color: 'bg-gradient-to-br from-teal-400 to-teal-600',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-soft border border-gray-100 transition-all duration-300 hover:shadow-lg hover:border-primary/10"
              >
                <div className={`w-16 h-16 ${value.color} rounded-full flex items-center justify-center text-2xl mb-6 shadow-md`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-24 bg-surface">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="section-title mb-4">Our Team</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Meet the people behind Fxsion's innovative solutions
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Etoma-Etoto Kelvin Odi',
                role: 'Founder & Lead Developer',
                bio: 'Expert in workflow automation and integration solutions. Passionate about helping businesses achieve digital transformation.',
                image: '/profile-full.jpg'
              },
              {
                name: 'Jane Smith',
                role: 'UX/UI Designer',
                bio: 'Creates beautiful, user-centered designs that balance form and function. Expert in Figma and design systems.',
                image: '/team/designer.jpg'
              },
              {
                name: 'Alex Johnson',
                role: 'Full Stack Developer',
                bio: 'Specializes in React, Node.js, and database architecture. Loves solving complex technical challenges.',
                image: '/team/developer.jpg'
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-soft group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-80">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-muted">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Tech Stack Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="section-title mb-4">Our Tech Stack</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              The powerful tools and technologies we leverage to build exceptional solutions
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: 'Next.js', icon: '/skills/nextjs.svg' },
              { name: 'React', icon: '/skills/react.svg' },
              { name: 'TypeScript', icon: '/skills/typescript.svg' },
              { name: 'Node.js', icon: '/skills/nodejs.svg' },
              { name: 'Flutter', icon: '/skills/flutter.svg' },
              { name: 'Zapier', icon: '/skills/zapier.svg' },
              { name: 'Make.com', icon: '/skills/make.svg' },
              { name: 'Airtable', icon: '/skills/airtable.svg' },
              { name: 'Notion', icon: '/skills/notion.svg' },
              { name: 'PandaDoc', icon: '/skills/pandadoc.svg' },
              { name: 'DocuSign', icon: '/skills/docusign.svg' },
              { name: 'Figma', icon: '/skills/figma.svg' },
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white p-6 rounded-xl shadow-soft border border-gray-100 transition-all duration-300 hover:shadow-md hover:border-primary/10 flex flex-col items-center"
              >
                <div className="w-16 h-16 mb-4 bg-gray-50 rounded-full p-3 flex items-center justify-center">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-center font-medium">{tech.name}</h3>
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
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6 text-surface">
              Ready to Work Together?
            </h2>
            <p className="text-lg sm:text-xl mb-8 text-surface/80">
              Let's discuss how Fxsion can help transform your business with custom automation and digital solutions.
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
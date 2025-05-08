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
      
      {/* Hero Section - Split Design */}
      <section className="min-h-screen flex flex-col lg:flex-row">
        {/* Left panel - Photo & Visual */}
        <div className="w-full lg:w-1/2 relative h-[60vh] lg:h-screen bg-gradient-to-br from-primary/10 to-secondary/10">
          <motion.div 
            className="absolute inset-0 overflow-hidden"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Image
              src="/profile-full.jpg"
              alt="Etoma-Etoto Kelvin Odi"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 mix-blend-multiply" />
          </motion.div>
          
          <div className="absolute bottom-0 left-0 w-full p-8 pb-16 lg:pb-20 bg-gradient-to-t from-black/80 to-transparent text-white">
            <motion.h1 
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Etoma-Etoto Kelvin Odi
            </motion.h1>
            <motion.div 
              className="inline-flex items-center space-x-2 text-surface/80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <p className="text-lg">Available for new opportunities</p>
            </motion.div>
          </div>
        </div>
        
        {/* Right panel - Introduction */}
        <div className="w-full lg:w-1/2 bg-white relative">
          <div className="h-full flex items-center">
            <div className="p-8 md:p-12 lg:p-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-8 inline-block relative">
                  Digital Solutions Expert
                  <motion.span 
                    className="absolute -bottom-2 left-0 h-1 bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: "33%" }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  />
                </h2>
                
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  I'm the founder of Fxsion, specializing in workflow automation, document solutions, and digital development. With a passion for transforming businesses through technology, I help companies streamline operations and achieve their digital goals.
                </p>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  My expertise lies in connecting systems, automating workflows, and building custom digital solutions that solve real business problems.
                </p>
                
                <div className="flex flex-wrap gap-3 mb-10">
                  {[
                    { name: 'Workflow Automation', icon: '⚡' },
                    { name: 'Document Solutions', icon: '📄' },
                    { name: 'API Integrations', icon: '🔄' },
                    { name: 'Web Development', icon: '💻' }
                  ].map((skill, index) => (
                    <motion.span 
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + (index * 0.1), duration: 0.5 }}
                      className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium flex items-center gap-1.5"
                    >
                      <span>{skill.icon}</span>
                      <span>{skill.name}</span>
                    </motion.span>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href="/contact" className="btn btn-primary">
                      Contact Me
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href="/resume.pdf"
                      className="btn btn-secondary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Resume
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Experience Cards */}
      <section className="py-20 bg-surface">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-16 text-center">
              My Professional Journey
            </h2>
            
            <div className="relative space-y-0">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gray-200 hidden md:block" />
              
              {[
                {
                  years: '2020-Present',
                  title: 'Founder & Lead Developer',
                  company: 'Fxsion',
                  description: 'Leading a team of developers and automation specialists to deliver cutting-edge digital solutions for clients worldwide.',
                  achievements: ['Led 50+ client projects', 'Built custom automation solutions', 'Trained junior developers'],
                  color: 'from-primary/80 to-primary',
                  hoverColor: 'from-teal-400 to-teal-600',
                  icon: '🚀'
                },
                {
                  years: '2018-2020',
                  title: 'Senior Automation Consultant',
                  company: 'Previous Role',
                  description: 'Specialized in workflow automation and CRM integrations, helping businesses optimize their operations.',
                  achievements: ['Reduced manual tasks by 75%', 'Implemented enterprise solutions', 'Managed client relationships'],
                  color: 'from-primary/80 to-primary',
                  hoverColor: 'from-red-400 to-red-600',
                  icon: '⚙️'
                },
                {
                  years: '2016-2018',
                  title: 'Full Stack Developer',
                  company: 'Previous Role',
                  description: 'Developed web and mobile applications using modern technologies like Next.js and Flutter.',
                  achievements: ['Built responsive websites', 'Developed mobile applications', 'Frontend and backend expertise'],
                  color: 'from-primary/80 to-primary',
                  hoverColor: 'from-green-400 to-green-600',
                  icon: '💻'
                }
              ].map((experience, index) => (
                <div key={index} className="md:grid md:grid-cols-2 relative mb-16">
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/3 z-10 hidden md:block">
                    <div className="w-5 h-5 bg-white rounded-full border-4 border-primary shadow-md" />
                  </div>

                  {/* Left or right alignment based on index */}
                  <div className={`${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:col-start-2'}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-xl shadow-lg overflow-hidden h-full transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
                    >
                      {/* Date/Company header */}
                      <div 
                        className={`p-5 text-white relative overflow-hidden transition-all duration-500`}
                        style={{
                          background: 'linear-gradient(to right, var(--card-gradient-from, #2D3047CC), var(--card-gradient-to, #2D3047))'
                        } as React.CSSProperties}
                        onMouseEnter={(e) => handleCardHover(
                          e.currentTarget, 
                          experience.hoverColor.split(' '), 
                          true
                        )}
                        onMouseLeave={(e) => handleCardHover(
                          e.currentTarget, 
                          experience.hoverColor.split(' '), 
                          false
                        )}
                      >
                        <div className="absolute right-0 bottom-0 opacity-10 text-6xl">{experience.icon}</div>
                        <h3 className="text-2xl font-bold mb-1">{experience.years}</h3>
                        <p className="opacity-90 text-sm">{experience.company}</p>
                      </div>
                      
                      {/* Content */}
                      <div className="p-6">
                        <h4 className="text-xl font-bold text-primary mb-3">
                          {experience.title}
                        </h4>
                        <p className="text-gray-600 mb-4">
                          {experience.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {experience.achievements.map((achievement, i) => (
                            <span key={i} className="inline-flex items-center px-3 py-1 rounded bg-primary/5 text-primary/80 text-sm">
                              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              {achievement}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Skills & Values */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        
        <div className="container relative">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-10 inline-block relative">
                My Skills
                <motion.span 
                  className="absolute -bottom-2 left-0 h-1 bg-primary"
                  initial={{ width: 0 }}
                  whileInView={{ width: "25%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
              </h2>
              
              <div className="space-y-6">
                {[
                  { name: 'Workflow Automation', level: 95, icon: '⚡' },
                  { name: 'API Integrations', level: 90, icon: '🔄' },
                  { name: 'Document Solutions', level: 92, icon: '📄' },
                  { name: 'Web Development', level: 88, icon: '💻' },
                  { name: 'Project Management', level: 85, icon: '📊' },
                ].map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium flex items-center gap-2">
                        <span className="inline-block w-6 text-center">{skill.icon}</span>
                        {skill.name}
                      </span>
                      <span className="text-primary">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + (index * 0.1) }}
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* Core Values */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-10 inline-block relative">
                Core Values
                <motion.span 
                  className="absolute -bottom-2 left-0 h-1 bg-secondary"
                  initial={{ width: 0 }}
                  whileInView={{ width: "25%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
              </h2>
              
              <div className="space-y-8">
                {[
                  { 
                    title: 'Innovation', 
                    description: 'Constantly exploring new technologies and approaches to deliver better solutions.',
                    icon: '💡'
                  },
                  { 
                    title: 'Excellence', 
                    description: 'Committed to delivering high-quality work that exceeds expectations.',
                    icon: '⭐' 
                  },
                  { 
                    title: 'Collaboration', 
                    description: 'Working closely with clients to understand their needs and achieve their goals.',
                    icon: '🤝' 
                  },
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex gap-4 items-start p-4 rounded-lg hover:bg-gradient-to-r hover:from-primary/5 hover:to-transparent transition-all duration-300"
                  >
                    <div className="shrink-0 w-12 h-12 flex items-center justify-center text-2xl bg-primary/10 rounded-full">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-primary">
                        {value.title}
                      </h3>
                      <p className="text-gray-600">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you're looking to automate workflows, develop custom solutions, or transform your digital presence, I'm here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/contact" 
                  className="btn btn-primary"
                >
                  Start a Project
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/projects" 
                  className="btn btn-secondary"
                >
                  View My Work
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 
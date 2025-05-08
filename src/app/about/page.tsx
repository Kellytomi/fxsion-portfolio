"use client";

import Navigation from '@/components/Navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

export default function About(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <main className="min-h-screen bg-surface overflow-hidden" ref={containerRef}>
      <Navigation />
      
      {/* Hero Section - Split Design */}
      <section className="min-h-screen flex flex-col lg:flex-row">
        {/* Left panel - Photo & Visual */}
        <div className="w-full lg:w-1/2 relative h-[50vh] lg:h-screen bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/profile-full.jpg"
              alt="Etoma-Etoto Kelvin Odi"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 mix-blend-multiply" />
          </div>
          
          <div className="absolute bottom-0 left-0 w-full p-8 pb-16 lg:pb-20 bg-gradient-to-t from-black/80 to-transparent text-white">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
              Etoma-Etoto Kelvin Odi
            </h1>
            <div className="inline-flex items-center space-x-2 text-surface/80">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <p className="text-lg">Available for new opportunities</p>
            </div>
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
                  <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary"></span>
                </h2>
                
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  I'm the founder of Fxsion, specializing in workflow automation, document solutions, and digital development. With a passion for transforming businesses through technology, I help companies streamline operations and achieve their digital goals.
                </p>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  My expertise lies in connecting systems, automating workflows, and building custom digital solutions that solve real business problems.
                </p>
                
                <div className="flex flex-wrap gap-3 mb-10">
                  <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">Workflow Automation</span>
                  <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">Document Solutions</span>
                  <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">API Integrations</span>
                  <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">Web Development</span>
                </div>
                
                <div className="flex gap-4">
                  <Link href="/contact" className="btn btn-primary">
                    Contact Me
                  </Link>
                  <a
                    href="/resume.pdf"
                    className="btn btn-secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resume
                  </a>
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
            
            <div className="space-y-8">
              {[
                {
                  years: '2020-Present',
                  title: 'Founder & Lead Developer',
                  company: 'Fxsion',
                  description: 'Leading a team of developers and automation specialists to deliver cutting-edge digital solutions for clients worldwide.',
                  achievements: ['Led 50+ client projects', 'Built custom automation solutions', 'Trained junior developers'],
                  color: 'from-[#4ECDC4] to-[#556270]'
                },
                {
                  years: '2018-2020',
                  title: 'Senior Automation Consultant',
                  company: 'Previous Role',
                  description: 'Specialized in workflow automation and CRM integrations, helping businesses optimize their operations.',
                  achievements: ['Reduced manual tasks by 75%', 'Implemented enterprise solutions', 'Managed client relationships'],
                  color: 'from-[#FF6B6B] to-[#556270]'
                },
                {
                  years: '2016-2018',
                  title: 'Full Stack Developer',
                  company: 'Previous Role',
                  description: 'Developed web and mobile applications using modern technologies like Next.js and Flutter.',
                  achievements: ['Built responsive websites', 'Developed mobile applications', 'Frontend and backend expertise'],
                  color: 'from-[#A8E6CF] to-[#556270]'
                }
              ].map((experience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white to-primary/5 rounded-lg transform group-hover:scale-[1.01] transition-transform duration-300 shadow-lg" />
                  <div className="relative p-1">
                    <div className="grid md:grid-cols-5 gap-6 p-6 md:p-8 items-center">
                      {/* Left sidebar with years and company */}
                      <div className="md:col-span-1">
                        <div className={`h-full py-4 px-6 rounded-lg bg-gradient-to-br ${experience.color} text-white flex flex-col justify-center items-center text-center`}>
                          <span className="text-xl font-bold">{experience.years}</span>
                          <span className="text-xs mt-2 opacity-80">{experience.company}</span>
                        </div>
                      </div>
                      
                      {/* Main content */}
                      <div className="md:col-span-4">
                        <h3 className="text-xl font-bold text-primary mb-3">
                          {experience.title}
                        </h3>
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
                    </div>
                  </div>
                </motion.div>
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
                <span className="absolute -bottom-2 left-0 w-1/4 h-1 bg-primary"></span>
              </h2>
              
              <div className="space-y-6">
                {[
                  { name: 'Workflow Automation', level: 95 },
                  { name: 'API Integrations', level: 90 },
                  { name: 'Document Solutions', level: 92 },
                  { name: 'Web Development', level: 88 },
                  { name: 'Project Management', level: 85 },
                ].map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
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
                <span className="absolute -bottom-2 left-0 w-1/4 h-1 bg-secondary"></span>
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
                    className="flex gap-4 items-start p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
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
      
      {/* Statistics */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '150+', label: 'Projects Completed' },
              { number: '50+', label: 'Happy Clients' },
              { number: '5+', label: 'Years Experience' },
              { number: '24/7', label: 'Support' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-white/80">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
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
              Let's Build Something Amazing Together
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you're looking to automate workflows, develop custom solutions, or transform your digital presence, I'm here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact" 
                className="btn btn-primary"
              >
                Start a Project
              </Link>
              <Link 
                href="/projects" 
                className="btn btn-secondary"
              >
                View My Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 
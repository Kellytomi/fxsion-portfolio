"use client";

import Navigation from '@/components/Navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About(): JSX.Element {
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
            className="max-w-4xl mx-auto"
          >
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt="Etoma-Etoto Kelvin Odi"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-4">
                  About Me
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                  I'm Etoma-Etoto Kelvin Odi, founder of Fxsion and a passionate digital solutions expert.
                  With years of experience in workflow automation, document solutions, and digital development,
                  I help businesses streamline their operations and achieve their digital transformation goals.
                </p>
                <div className="flex gap-4">
                  <a
                    href="/resume.pdf"
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-display text-3xl font-bold text-midnight mb-12">
              Professional Journey
            </h2>
            <div className="space-y-12">
              {[
                {
                  title: 'Founder & Lead Developer',
                  company: 'Fxsion',
                  period: '2020 - Present',
                  description: 'Leading a team of developers and automation specialists to deliver cutting-edge digital solutions for clients worldwide.',
                },
                {
                  title: 'Senior Automation Consultant',
                  company: 'Previous Role',
                  period: '2018 - 2020',
                  description: 'Specialized in workflow automation and CRM integrations, helping businesses optimize their operations.',
                },
                {
                  title: 'Full Stack Developer',
                  company: 'Previous Role',
                  period: '2016 - 2018',
                  description: 'Developed web and mobile applications using modern technologies like Next.js and Flutter.',
                },
              ].map((experience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border-l-4 border-gold pl-6"
                >
                  <h3 className="text-xl font-bold text-midnight mb-1">
                    {experience.title}
                  </h3>
                  <p className="text-gold mb-2">
                    {experience.company} • {experience.period}
                  </p>
                  <p className="text-gray-600">
                    {experience.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-soft-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-display text-3xl font-bold text-midnight mb-12 text-center">
              My Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Innovation',
                  description: 'Constantly exploring new technologies and approaches to deliver better solutions.',
                  icon: '💡',
                },
                {
                  title: 'Excellence',
                  description: 'Committed to delivering high-quality work that exceeds expectations.',
                  icon: '⭐',
                },
                {
                  title: 'Collaboration',
                  description: 'Working closely with clients to understand their needs and achieve their goals.',
                  icon: '🤝',
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl bg-white hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-midnight mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 
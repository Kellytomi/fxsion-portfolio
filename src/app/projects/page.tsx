"use client";

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface Project {
  title: string;
  description: string;
  image: string;
  category: string[];
  technologies: string[];
  link?: string;
  previewUrl?: string;
}

interface PreviewModalProps {
  url: string;
  isOpen: boolean;
  onClose: () => void;
}

const PreviewModal = ({ url, isOpen, onClose }: PreviewModalProps) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-6xl h-[80vh] bg-white rounded-xl overflow-hidden"
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
      >
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <iframe
          src={url}
          className="w-full h-full border-0"
          title="Website Preview"
        />
      </motion.div>
    </motion.div>
  );
};

const projects: Project[] = [
  {
    title: 'Yacht Zero',
    description: 'A modern platform revolutionizing the yacht charter industry with innovative booking solutions.',
    image: '/projects/yacht-zero.jpg',
    category: ['Development', 'Integration'],
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'API Integration'],
    link: 'https://www.yachtzero.com',
    previewUrl: 'https://www.yachtzero.com',
  },
  {
    title: 'Enterprise Workflow Automation',
    description: 'Automated end-to-end business processes for a Fortune 500 company, resulting in 75% reduction in manual tasks.',
    image: '/projects/workflow-automation.jpg',
    category: ['Automation', 'Integration'],
    technologies: ['Zapier', 'Make.com', 'REST APIs'],
    link: '#',
  },
  {
    title: 'Document Processing System',
    description: 'Built a sophisticated document automation system handling 10,000+ documents monthly for a legal firm.',
    image: '/projects/document-system.jpg',
    category: ['Document Solutions', 'Automation'],
    technologies: ['PandaDoc', 'Document AI', 'Node.js'],
    link: '#',
  },
  {
    title: 'Mobile Sales Platform',
    description: 'Developed a cross-platform mobile application for field sales teams with offline capabilities.',
    image: '/projects/mobile-app.jpg',
    category: ['Development', 'Mobile'],
    technologies: ['Flutter', 'Firebase', 'REST APIs'],
    link: '#',
  },
  {
    title: 'CRM Integration Suite',
    description: 'Created a custom integration solution connecting multiple CRM systems with document automation.',
    image: '/projects/crm-integration.jpg',
    category: ['Integration', 'Document Solutions'],
    technologies: ['HubSpot', 'PandaDoc', 'Zapier'],
    link: '#',
  },
];

const categories = ['All', 'Automation', 'Integration', 'Development', 'Document Solutions', 'Mobile'];

export default function Projects(): JSX.Element {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category.includes(selectedCategory));

  return (
    <main className="min-h-screen bg-surface">
      <Navigation />
      
      <AnimatePresence>
        {previewUrl && (
          <PreviewModal
            url={previewUrl}
            isOpen={true}
            onClose={() => setPreviewUrl(null)}
          />
        )}
      </AnimatePresence>

      <section className="pt-32 pb-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="section-title">Featured Projects</h1>
            <p className="section-subtitle">
              Explore some of my recent work and successful implementations
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-surface shadow-soft'
                    : 'bg-white text-primary hover:bg-primary/5'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="card overflow-hidden group"
                  onHoverStart={() => setHoveredProject(index)}
                  onHoverEnd={() => setHoveredProject(null)}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="p-8 relative">
                    <motion.div
                      animate={{
                        y: hoveredProject === index ? -20 : 0,
                        opacity: hoveredProject === index ? 0 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-2xl font-bold text-primary mb-2">{project.title}</h3>
                      <p className="text-muted mb-4">{project.description}</p>
                    </motion.div>

                    <motion.div
                      className="absolute inset-x-8 bottom-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: hoveredProject === index ? 1 : 0,
                        y: hoveredProject === index ? 0 : 20,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-primary/5 rounded-full text-sm text-primary"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        {project.previewUrl && (
                          <button
                            onClick={() => setPreviewUrl(project.previewUrl || null)}
                            className="btn btn-secondary flex-1 justify-center"
                          >
                            Preview
                          </button>
                        )}
                        {project.link && (
                          <Link
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary flex-1 justify-center"
                          >
                            Visit Site
                          </Link>
                        )}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="font-display text-4xl font-bold mb-6 text-surface">
              Have a Project in Mind?
            </h2>
            <p className="text-lg mb-8 text-surface/80 max-w-2xl mx-auto">
              Let's collaborate to create something amazing together. 
              I'm always excited to take on new challenges and help businesses grow.
            </p>
            <Link href="/contact" className="btn bg-surface text-primary hover:bg-surface/90">
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 
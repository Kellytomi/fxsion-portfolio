"use client";

import Navigation from '@/components/Navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Skill {
  name: string;
  level: number;
  color?: string;
}

interface SkillCategory {
  category: string;
  description: string;
  skills: Skill[];
  icon: string;
}

export default function Skills(): JSX.Element {
  const skillCategories: SkillCategory[] = [
    {
      category: 'Automation & Integration',
      description: 'Expertise in connecting and automating business systems',
      icon: '⚡',
      skills: [
        { name: 'Zapier', level: 95, color: '#FF4F00' },
        { name: 'Make.com', level: 90, color: '#00B6CB' },
        { name: 'Airtable', level: 85, color: '#2D7FF9' },
        { name: 'Notion API', level: 88, color: '#000000' },
        { name: 'REST APIs', level: 92, color: '#61AFFE' },
      ],
    },
    {
      category: 'Development',
      description: 'Modern web and application development technologies',
      icon: '💻',
      skills: [
        { name: 'Next.js', level: 90, color: '#000000' },
        { name: 'React', level: 88, color: '#61DAFB' },
        { name: 'TypeScript', level: 85, color: '#3178C6' },
        { name: 'Node.js', level: 82, color: '#339933' },
        { name: 'Flutter', level: 75, color: '#02569B' },
      ],
    },
    {
      category: 'Document Solutions',
      description: 'Document automation and management expertise',
      icon: '📄',
      skills: [
        { name: 'PandaDoc', level: 95, color: '#569AF6' },
        { name: 'DocuSign', level: 85, color: '#FDB52B' },
        { name: 'Document AI', level: 80, color: '#4285F4' },
        { name: 'PDF Automation', level: 90, color: '#FF0000' },
      ],
    },
    {
      category: 'Design & Branding',
      description: 'Creating beautiful and functional user experiences',
      icon: '🎨',
      skills: [
        { name: 'Figma', level: 85, color: '#F24E1E' },
        { name: 'UI/UX Design', level: 80, color: '#FF3366' },
        { name: 'Brand Design', level: 85, color: '#9B51E0' },
        { name: 'Design Systems', level: 88, color: '#0ACF83' },
      ],
    },
  ];

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
            <h1 className="section-title">Skills & Expertise</h1>
            <p className="section-subtitle">
              Combining technical prowess with creative problem-solving to deliver exceptional digital solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="card p-8 relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl group-hover:opacity-100 opacity-0 transition-opacity duration-300" />
                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl">{category.icon}</span>
                    <div>
                      <h2 className="text-2xl font-bold text-primary mb-1">
                        {category.category}
                      </h2>
                      <p className="text-muted">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium text-primary">{skill.name}</span>
                          <span className="text-muted">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-surface rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                            className="h-full rounded-full"
                            style={{ 
                              backgroundColor: skill.color,
                              boxShadow: `0 0 20px ${skill.color}20`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
              Let's Put These Skills to Work
            </h2>
            <p className="text-lg mb-8 text-surface/80 max-w-2xl mx-auto">
              Looking for a technical partner who can bring your ideas to life?
              Let's discuss how my expertise can help achieve your goals.
            </p>
            <Link href="/contact" className="btn bg-surface text-primary hover:bg-surface/90">
              Discuss Your Project
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 
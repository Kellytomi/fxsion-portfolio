"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

interface ServiceProps {
  number: string;
  title: string;
  description: string;
  link: string;
  icon?: string;
}

const services: ServiceProps[] = [
  {
    number: "01",
    title: "Workflow Automation",
    description: "Streamline your operations with custom automation solutions that eliminate manual tasks and boost productivity.",
    link: "/services#workflow-automation",
    icon: "⚡️"
  },
  {
    number: "02",
    title: "Web & Mobile Development",
    description: "Create stunning, responsive digital experiences that engage your audience and convert visitors into customers.",
    link: "/services#web-mobile",
    icon: "💻"
  },
  {
    number: "03",
    title: "Document Automation",
    description: "Transform your proposal process with custom-designed automated documents that impress clients and close deals faster.",
    link: "/services#document-automation",
    icon: "📄"
  },
  {
    number: "04",
    title: "Digital Strategy",
    description: "Develop a comprehensive digital roadmap to optimize your business processes and maximize your technology investments.",
    link: "/services#digital-strategy",
    icon: "🔍"
  }
];

export default function PremiumServices(): JSX.Element {
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-surface">
      <div className="container max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="section-title">Our Core Services</h2>
          <p className="section-subtitle mx-auto max-w-2xl">
            We help businesses automate workflows, build digital products, and create impactful experiences that drive growth.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={childVariants}
              className="premium-card group hover:translate-y-[-8px] p-10"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-6">
                  <span className="text-3xl">{service.icon}</span>
                  <div className="text-3xl font-display font-bold text-primary/20">
                    {service.number}
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
                  {service.title}
                </h3>
                <p className="text-muted mb-8 flex-grow text-lg leading-relaxed">
                  {service.description}
                </p>
                <Link 
                  href={service.link}
                  className="inline-flex items-center text-sm font-medium text-primary group-hover:translate-x-1 transition-transform duration-300"
                >
                  Learn more
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 md:mt-24 text-center"
        >
          <Link 
            href="/services" 
            className="bg-black hover:bg-black/90 text-white text-sm uppercase tracking-[0.15em] font-medium py-3 px-8 rounded-full transition-all duration-300"
          >
            <span>View All Services</span>
            <span className="ml-2">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 
"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionTransitionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function SectionTransition({ 
  children, 
  delay = 0,
  className = "" 
}: SectionTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1],
        delay: delay
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
} 
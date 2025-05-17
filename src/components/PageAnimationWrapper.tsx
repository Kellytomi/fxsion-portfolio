"use client";

import { ReactNode } from 'react';
import { AnimatePresence } from 'framer-motion';
import PageTransition from './PageTransition';

interface PageAnimationWrapperProps {
  children: ReactNode;
}

export default function PageAnimationWrapper({ children }: PageAnimationWrapperProps) {
  return (
    <AnimatePresence mode="wait">
      <PageTransition>
        {children}
      </PageTransition>
    </AnimatePresence>
  );
} 
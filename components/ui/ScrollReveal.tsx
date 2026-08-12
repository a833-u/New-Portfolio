'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function ScrollReveal({ children, className = '', delay = 0 }: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.5,
        delay: delay * 0.08,
        ease: [0.25, 0.1, 0.25, 1.0],
      }}
      className={className}
      suppressHydrationWarning
    >
      {children}
    </motion.div>
  );
}

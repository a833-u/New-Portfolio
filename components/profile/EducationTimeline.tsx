'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { personalDetails } from '@/data/portfolioData';

export default function EducationTimeline() {
  return (
    <div className="space-y-4 py-4">
      <h3 className="text-xs font-mono tracking-widest text-theme-secondary uppercase">
        Education Background
      </h3>
      <div className="relative pl-4 sm:pl-6 ml-1 space-y-6">
        {/* Animated Vertical Line */}
        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-theme-muted">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="w-full bg-theme-sage"
          />
        </div>

        {personalDetails.education.map((item) => (
          <div key={item.degree} className="relative space-y-1">
            <span className="absolute -left-[21px] sm:-left-[29px] top-1.5 w-2.5 h-2.5 rounded-full bg-theme-sage border-2 border-theme-main transition-transform duration-200 hover:scale-125" />
            <div className="text-xs font-mono font-bold text-theme-sage">
              {item.year}
            </div>
            <div className="text-base font-semibold text-theme-main">
              {item.degree}
            </div>
            <div className="text-xs text-theme-secondary">
              {item.institution} · <span className="font-mono text-theme-main">CGPA: {item.cgpa}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

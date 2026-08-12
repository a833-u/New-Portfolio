'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { personalDetails } from '@/data/portfolioData';
import { Briefcase, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CareerProgressionTimeline() {
  const exp = personalDetails.experience[0];

  const progressionSteps = [
    { label: 'INTERN', date: 'DEC 2024', status: 'Started internship learning React & SQL integration' },
    { label: 'FRONTEND DEVELOPER', date: 'MID 2025', status: 'Expanded to building D3 visualizations & API handling' },
    { label: 'FULL-TIME', date: 'JUN 2026', status: 'Converted full-time leading client reporting & data tables' }
  ];

  return (
    <div className="space-y-10 py-6">
      {/* Experience Header */}
      <div className="p-6 bg-theme-surface border border-theme-muted rounded-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-theme-muted pb-4">
          <div>
            <div className="text-xs font-mono font-semibold text-theme-sage">
              {exp.period}
            </div>
            <h3 className="text-xl font-bold text-theme-main flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-theme-sage" />
              {exp.company}
            </h3>
          </div>
          <div className="text-right sm:text-right">
            <span className="text-xs font-mono px-2.5 py-1 bg-theme-soft text-theme-sage font-semibold rounded-sm">
              {exp.role} ({exp.progression})
            </span>
            <div className="text-xs text-theme-secondary font-mono pt-1">
              {exp.location}
            </div>
          </div>
        </div>

        <p className="text-sm text-theme-main leading-relaxed">
          {exp.summary}
        </p>

        {/* Bullet points */}
        <div className="space-y-2 pt-2">
          <span className="text-[11px] font-mono tracking-widest text-theme-secondary uppercase">
            Core Responsibilities & Deliverables
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
            {exp.responsibilities.map((resp, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-theme-secondary">
                <CheckCircle2 className="w-3.5 h-3.5 text-theme-sage shrink-0 mt-0.5" />
                <span>{resp}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animated Career Progression Line */}
      <div className="space-y-4">
        <h4 className="text-xs font-mono tracking-widest text-theme-secondary uppercase">
          Career Progression Path
        </h4>

        <div className="p-6 bg-theme-surface border border-theme-muted rounded-sm space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {progressionSteps.map((step, idx) => (
              <div key={step.label} className="relative space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-theme-sage border-2 border-theme-main shrink-0" />
                  <span className="text-xs font-mono font-bold text-theme-sage">
                    {step.date}
                  </span>
                </div>
                <div className="text-sm font-bold text-theme-main">
                  {step.label}
                </div>
                <p className="text-xs text-theme-secondary leading-relaxed">
                  {step.status}
                </p>
                {idx < progressionSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1.5 left-full w-full -ml-3 text-theme-sage/40">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Animated line */}
          <div className="w-full h-1 bg-theme-muted relative overflow-hidden rounded-full">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="h-full bg-theme-sage"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

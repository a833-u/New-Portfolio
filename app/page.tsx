'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { personalDetails, homeMetrics, storyItems } from '@/data/portfolioData';
import MetricCounter from '@/components/ui/MetricCounter';
import StatusIndicator from '@/components/ui/StatusIndicator';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  const [hoveredStory, setHoveredStory] = useState<string | null>(null);

  // Staggered reveal animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-16 sm:space-y-20"
    >
      {/* Hero Header & Core Statement */}
      <section className="space-y-6">
        <motion.div variants={itemVariants} className="space-y-2 border-b border-theme-muted pb-4">
          <div className="text-xs font-mono font-bold tracking-widest text-theme-sage uppercase">
            {personalDetails.name} · {personalDetails.title}
          </div>
          <div className="text-xs font-mono text-theme-secondary uppercase">
            {personalDetails.location}
          </div>
        </motion.div>

        {/* Headline Statement */}
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-theme-main leading-[1.15]"
        >
          I turn raw data into decisions and complex interfaces into simple experiences.
        </motion.h1>

        {/* Small Summary Paragraph */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-theme-secondary leading-relaxed max-w-3xl pt-2"
        >
          IT graduate with nearly 1.5 years of professional experience combining frontend development with data gathering, cleaning, preprocessing, analysis, visualization, and reporting. I work with React.js, Python, SQL, Power BI, Excel, D3.js, and databases to turn complex information into clear and useful experiences.
        </motion.p>
      </section>

      {/* Typography Professional Metrics */}
      <ScrollReveal className="space-y-6 border-t border-theme-muted pt-10">
        <span className="text-[11px] font-mono tracking-widest text-theme-secondary uppercase">
          Key Performance Indicators
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {homeMetrics.map((m) => (
            <MetricCounter
              key={m.id}
              numberStr={m.number}
              targetValue={m.value}
              suffix={m.suffix}
              decimals={m.decimals}
              label={m.label}
              description={m.description}
            />
          ))}
        </div>
      </ScrollReveal>

      {/* SELECT A STORY Interactive Preview Navigation */}
      <ScrollReveal className="space-y-6 border-t border-theme-muted pt-10">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-mono tracking-widest text-theme-sage uppercase font-semibold">
            Interactive Navigation
          </span>
          <span className="text-xs font-mono text-theme-secondary">
            Select a Case File
          </span>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-theme-main">
          SELECT A STORY
        </h2>

        <div className="space-y-3">
          {storyItems.map((item) => (
            <Link
              key={item.number}
              href={item.href}
              onMouseEnter={() => setHoveredStory(item.number)}
              onMouseLeave={() => setHoveredStory(null)}
              className="group block p-4 bg-theme-surface/80 hover:bg-theme-surface border border-theme-muted hover:border-theme-sage rounded-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-xs font-mono font-bold text-theme-sage transition-transform duration-200 group-hover:translate-x-1">
                    {item.number}
                  </span>
                  <span className="text-base font-bold tracking-wide text-theme-main group-hover:text-theme-sage transition-colors duration-200">
                    {item.title}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-theme-secondary group-hover:text-theme-sage group-hover:translate-x-1 transition-all duration-200" />
              </div>

              {/* Reveal description on hover or focus */}
              <div
                className={`text-xs text-theme-secondary pt-2 border-t border-theme-muted/40 mt-2 transition-all duration-200 ${
                  hoveredStory === item.number ? 'opacity-100 max-h-20' : 'opacity-70 max-h-12'
                }`}
              >
                {item.description}
              </div>
            </Link>
          ))}
        </div>
      </ScrollReveal>

      {/* CURRENTLY FOCUSED ON */}
      <ScrollReveal className="space-y-4 border-t border-theme-muted pt-10">
        <span className="text-[11px] font-mono tracking-widest text-theme-secondary uppercase">
          Technical Focus Areas
        </span>

        <h2 className="text-xl font-bold text-theme-main">
          CURRENTLY FOCUSED ON
        </h2>

        <div className="p-6 bg-theme-surface/80 border border-theme-muted rounded-sm space-y-4 text-xs font-mono">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-theme-muted pb-3 gap-1">
            <span className="text-theme-sage font-bold">Data Analytics</span>
            <span className="text-theme-main">SQL · Python · Power BI · Excel</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-theme-muted pb-3 gap-1">
            <span className="text-theme-apricot font-bold">Data Visualization</span>
            <span className="text-theme-main">D3.js · Matplotlib · Seaborn</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <span className="text-theme-sage font-bold">Frontend Engineering</span>
            <span className="text-theme-main">React.js · JavaScript · HTML · CSS</span>
          </div>
        </div>
      </ScrollReveal>

      {/* CURRENT STATUS */}
      <ScrollReveal className="border-t border-theme-muted pt-8">
        <StatusIndicator />
      </ScrollReveal>
    </motion.div>
  );
}

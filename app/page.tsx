'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { personalDetails, homeMetrics, storyItems } from '@/data/portfolioData';
import MetricCounter from '@/components/ui/MetricCounter';
import StatusIndicator from '@/components/ui/StatusIndicator';
import ScrollReveal from '@/components/ui/ScrollReveal';
import HeroAnalyticsVisual from '@/components/hero/HeroAnalyticsVisual';
import StarBorder from '@/components/ui/StarBorder';
import { ArrowRight, BarChart3, FileCode, CheckCircle2 } from 'lucide-react';

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
      className="space-y-14 sm:space-y-20"
    >
      {/* ==========================================
          HERO SECTION — DATA ANALYST POSITIONING
         ========================================== */}
      <section className="space-y-8">
        {/* Top Identity Tag */}
        <motion.div variants={itemVariants} className="space-y-2 border-b border-theme-muted pb-4">
          <div className="text-xs font-mono font-bold tracking-widest text-theme-sage uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-theme-sage animate-pulse" />
            {personalDetails.name} · {personalDetails.title}
          </div>
          <div className="text-xs font-mono text-theme-secondary uppercase">
            {personalDetails.secondaryPositioning} · {personalDetails.location}
          </div>
        </motion.div>

        {/* Hero Grid: Main Headline + Hero Analytics Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Headline & CTAs (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-theme-main leading-[1.12] font-sans"
            >
              Data Analyst turning raw data into business decisions.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-theme-secondary leading-relaxed font-sans"
            >
              Specializing in <strong className="text-theme-main font-semibold">SQL, PostgreSQL, Python, data cleaning, exploratory analysis, and Power BI dashboards</strong>. Powered by 1.5 years of professional software development experience at Nilesh IT Solution creating data-driven tools and interactive reporting interfaces.
            </motion.p>

            {/* Three-Tier CTA Strategy */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 pt-2">
              {/* PRIMARY CTA: Explore Analytics Work with React Bits StarBorder */}
              <StarBorder href="/analytics" speed="5s" thickness={1}>
                <BarChart3 className="w-4 h-4 shrink-0" />
                <span>Explore Analytics Work</span>
                <ArrowRight className="w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform" />
              </StarBorder>

              {/* SECONDARY CTA: View All Projects (UNTOUCHED SECONDARY BUTTON) */}
              <Link
                href="/projects"
                className="px-4 py-3 rounded-lg text-xs font-mono font-bold uppercase tracking-wider bg-theme-surface border border-theme-muted text-theme-main hover:border-theme-sage transition-all flex items-center gap-2 cursor-pointer"
              >
                <FileCode className="w-4 h-4 shrink-0 text-theme-sage" />
                <span>View All Projects</span>
              </Link>

              {/* TERTIARY CTA: Contact Me */}
              <Link
                href="/contact"
                className="px-4 py-3 rounded-lg text-xs font-mono font-medium text-theme-secondary hover:text-theme-main transition-colors cursor-pointer"
              >
                Contact Me →
              </Link>
            </motion.div>

            {/* Verified Capabilities Badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2 pt-1 text-[11px] font-mono text-theme-secondary">
              <span className="px-2.5 py-1 rounded bg-theme-surface border border-theme-muted text-theme-sage font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" /> PostgreSQL & SQL
              </span>
              <span className="px-2.5 py-1 rounded bg-theme-surface border border-theme-muted">
                Python (Pandas / NumPy)
              </span>
              <span className="px-2.5 py-1 rounded bg-theme-surface border border-theme-muted">
                Power BI & Data Viz
              </span>
              <span className="px-2.5 py-1 rounded bg-theme-surface border border-theme-muted">
                Interactive Web Products
              </span>
            </motion.div>
          </div>

          {/* Right Hero Analytics Visual Card (5 Cols) */}
          <motion.div variants={itemVariants} className="lg:col-span-5">
            <HeroAnalyticsVisual />
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          KEY PERFORMANCE INDICATORS (ANALYTICS)
         ========================================== */}
      <ScrollReveal className="space-y-6 border-t border-theme-muted pt-10">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-mono tracking-widest text-theme-secondary uppercase">
            // KEY PERFORMANCE INDICATORS & ANALYTICS OUTPUTS
          </span>
          <span className="text-xs font-mono text-theme-sage font-bold">
            100% VALIDATED METRICS
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* ==========================================
          FLAGSHIP ANALYTICS CASE STUDY PREVIEW
         ========================================== */}
      <ScrollReveal className="space-y-6 border-t border-theme-muted pt-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="text-xs font-mono font-bold text-[#FF7A18] uppercase">
              // FLAGSHIP ANALYTICS PRODUCT
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-theme-main font-sans">
              Business Performance Analytics (PostgreSQL & SQL)
            </h2>
          </div>
          <Link
            href="/analytics"
            className="text-xs font-mono font-bold text-[#FF7A18] hover:underline flex items-center gap-1 shrink-0"
          >
            Open Interactive BI Hub →
          </Link>
        </div>

        {/* Flagship Product Showcase Card */}
        <div className="p-6 bg-[#071A2B] border border-[#102F45] rounded-xl text-[#F5F7FA] space-y-4 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#102F45] pb-3 text-xs font-mono">
            <span className="px-2.5 py-1 rounded bg-[#FF7A18] text-[#071A2B] font-bold">
              POSTGRESQL CASE STUDY
            </span>
            <span className="text-[#9FB0BF]">
              99,970 Transactions · Jan 2024 – Jun 2026
            </span>
          </div>

          <div className="space-y-2">
            <p className="text-sm text-[#9FB0BF] leading-relaxed">
              Analyzed 99,970 transaction records across 30 consecutive months. Formulated 11 production SQL queries evaluating revenue drivers (₹3.37B), net profitability (31.41% margin), target hit rates (6.28%), discount margins, and an 80-salesperson performance matrix.
            </p>
          </div>

          {/* Workflow Stepper Line */}
          <div className="flex flex-wrap items-center gap-1.5 pt-2 text-[10px] font-mono">
            <span className="px-2 py-0.5 rounded bg-[#102F45] text-[#FF7A18] font-bold">Raw Data</span>
            <span className="text-[#9FB0BF]">→</span>
            <span className="px-2 py-0.5 rounded bg-[#102F45] text-[#F5F7FA]">Cleaning</span>
            <span className="text-[#9FB0BF]">→</span>
            <span className="px-2 py-0.5 rounded bg-[#102F45] text-[#F5F7FA]">PostgreSQL</span>
            <span className="text-[#9FB0BF]">→</span>
            <span className="px-2 py-0.5 rounded bg-[#102F45] text-[#35D07F] font-bold">SQL Analysis</span>
            <span className="text-[#9FB0BF]">→</span>
            <span className="px-2 py-0.5 rounded bg-[#102F45] text-[#FF7A18] font-bold">BI Dashboard</span>
            <span className="text-[#9FB0BF]">→</span>
            <span className="px-2 py-0.5 rounded bg-[#102F45] text-[#35D07F]">Insights</span>
          </div>

          <div className="pt-2">
            <StarBorder href="/analytics" speed="5s" thickness={1}>
              <span>Launch BI Dashboard & SQL Explorer</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </StarBorder>
          </div>
        </div>
      </ScrollReveal>

      {/* ==========================================
          INTERACTIVE DIRECTORY & STORY CARDS
         ========================================== */}
      <ScrollReveal className="space-y-6 border-t border-theme-muted pt-10">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-mono tracking-widest text-theme-sage uppercase font-semibold">
            NAVIGATION DIRECTORY
          </span>
          <span className="text-xs font-mono text-theme-secondary">
            Select a Case File
          </span>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-theme-main">
          PORTFOLIO DIRECTORY
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

      {/* ==========================================
          TECHNICAL FOCUS AREAS
         ========================================== */}
      <ScrollReveal className="space-y-4 border-t border-theme-muted pt-10">
        <span className="text-[11px] font-mono tracking-widest text-theme-secondary uppercase">
          Technical Focus Areas
        </span>

        <h2 className="text-xl font-bold text-theme-main">
          PRIMARY SKILLS & TECHNICAL FOUNDATION
        </h2>

        <div className="p-6 bg-theme-surface/80 border border-theme-muted rounded-sm space-y-4 text-xs font-mono">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-theme-muted pb-3 gap-1">
            <span className="text-[#FF7A18] font-bold">Data Analytics & BI (Primary)</span>
            <span className="text-theme-main font-semibold">SQL · PostgreSQL · Python · Pandas · NumPy · Power BI · Excel</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-theme-muted pb-3 gap-1">
            <span className="text-[#35D07F] font-bold">Data Visualization</span>
            <span className="text-theme-main">Power BI · D3.js · Matplotlib · Seaborn · Custom Charts</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <span className="text-theme-sage font-bold">Software Development (Superpower)</span>
            <span className="text-theme-main">React.js · Next.js · TypeScript · JavaScript · HTML · CSS</span>
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

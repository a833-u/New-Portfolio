'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { personalDetails } from '@/data/portfolioData';
import PersonalDataGrid from '@/components/profile/PersonalDataGrid';
import EducationTimeline from '@/components/profile/EducationTimeline';
import DataToInterfacePipeline from '@/components/profile/DataToInterfacePipeline';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Award, FileText } from 'lucide-react';

export default function ProfilePage() {
  const cert = personalDetails.certification[0];

  return (
    <div className="space-y-12">
      {/* Header Title & Subtitle */}
      <section className="space-y-2 border-b border-theme-muted pb-6">
        <div className="text-xs font-mono font-bold tracking-widest text-theme-sage uppercase">
          Analytical Bio & Background
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-theme-main">
          PROFILE
        </h1>
        <p className="text-sm text-theme-secondary font-mono">
          A closer look at the person behind the data.
        </p>
      </section>

      {/* Profile Editorial Photo & Introduction */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Asymmetric Editorial Photo with scale reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] w-full rounded-sm overflow-hidden border border-theme-muted bg-theme-surface shadow-sm">
            <Image
              src="/images/profile.jpg"
              alt="Ansh Kansara Profile"
              fill
              priority
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
          <div className="pt-2 text-[11px] font-mono text-theme-secondary flex items-center justify-between">
            <span>Ansh Kansara</span>
            <span>Vadodara, GJ, India</span>
          </div>
        </motion.div>

        {/* Introduction Narrative */}
        <div className="lg:col-span-7 space-y-6">
          <ScrollReveal className="space-y-3">
            <span className="text-[11px] font-mono tracking-widest text-theme-sage uppercase font-semibold">
              Professional Overview
            </span>
            <p className="text-sm sm:text-base text-theme-main leading-relaxed">
              {personalDetails.bio}
            </p>
          </ScrollReveal>

          {/* Mission & Vision */}
          <ScrollReveal className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 bg-theme-surface border border-theme-muted rounded-sm space-y-1.5 hover:border-theme-sage transition-colors duration-200">
              <span className="text-[11px] font-mono font-bold text-theme-sage uppercase">
                MISSION
              </span>
              <p className="text-xs text-theme-secondary leading-relaxed">
                {personalDetails.mission}
              </p>
            </div>

            <div className="p-4 bg-theme-surface border border-theme-muted rounded-sm space-y-1.5 hover:border-theme-apricot transition-colors duration-200">
              <span className="text-[11px] font-mono font-bold text-theme-apricot uppercase">
                VISION
              </span>
              <p className="text-xs text-theme-secondary leading-relaxed">
                {personalDetails.vision}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Personal Data Grid */}
      <ScrollReveal className="space-y-4">
        <h2 className="text-xs font-mono tracking-widest text-theme-secondary uppercase">
          Key Personal Data Points
        </h2>
        <PersonalDataGrid />
      </ScrollReveal>

      {/* Signature DATA → INTERFACE Pipeline Section */}
      <ScrollReveal>
        <DataToInterfacePipeline />
      </ScrollReveal>

      {/* Education Timeline */}
      <ScrollReveal className="space-y-4">
        <EducationTimeline />
      </ScrollReveal>

      {/* Professional Certification (Deloitte) */}
      <ScrollReveal className="space-y-4 pt-4 border-t border-theme-muted">
        <h2 className="text-xs font-mono tracking-widest text-theme-secondary uppercase">
          Verified Certification
        </h2>

        <div className="p-6 bg-theme-surface border border-theme-muted rounded-sm space-y-3 hover:border-theme-sage transition-colors duration-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-theme-muted pb-3">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-theme-sage" />
              <div>
                <h3 className="text-base font-bold text-theme-main">
                  {cert.title}
                </h3>
                <span className="text-xs font-mono text-theme-secondary">
                  {cert.issuer}
                </span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs font-mono text-theme-sage font-semibold">
                {cert.date}
              </span>
            </div>
          </div>

          <p className="text-xs text-theme-secondary leading-relaxed">
            {cert.description}
          </p>

          {cert.pdfUrl && (
            <div className="pt-2">
              <a
                href={cert.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-theme-sage hover:underline border border-theme-muted px-3 py-1.5 rounded-sm bg-theme-muted/30 hover:border-theme-sage transition-all duration-200 hover:-translate-y-0.5"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View Official Deloitte Certificate PDF →</span>
              </a>
            </div>
          )}
        </div>
      </ScrollReveal>

      {/* Key Achievements & Strengths */}
      <ScrollReveal className="space-y-4 pt-4 border-t border-theme-muted">
        <h2 className="text-xs font-mono tracking-widest text-theme-secondary uppercase">
          Professional Strengths & Achievements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-theme-surface border border-theme-muted rounded-sm space-y-2 hover:border-theme-sage transition-colors duration-200">
            <span className="text-xs font-mono font-bold text-theme-sage">
              Full-Time Conversion
            </span>
            <p className="text-xs text-theme-secondary leading-relaxed">
              Converted from intern to full-time developer at Nilesh IT Solution (Jun 2026) — demonstrating consistent data reporting quality, leadership initiative, and client communication.
            </p>
          </div>

          <div className="p-4 bg-theme-surface border border-theme-muted rounded-sm space-y-2 hover:border-theme-apricot transition-colors duration-200">
            <span className="text-xs font-mono font-bold text-theme-apricot">
              Academic Excellence
            </span>
            <p className="text-xs text-theme-secondary leading-relaxed">
              Ranked in top 10% of class through self-study in SQL, Python, data analytics, and visualization tools. B.Tech CGPA: 7.34, Diploma CGPA: 7.79.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}

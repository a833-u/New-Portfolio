'use client';

import React, { useState } from 'react';
import { caseStudies } from '@/data/portfolioData';
import CaseStudyDetail from '@/components/case-studies/CaseStudyDetail';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Check, ArrowRight, BarChart3, Database } from 'lucide-react';
import Link from 'next/link';

export default function ProjectsPage() {
  const [selectedId, setSelectedId] = useState<string>(caseStudies[0].id);

  const activeStudy = caseStudies.find((c) => c.id === selectedId) || caseStudies[0];

  return (
    <div className="space-y-10">
      {/* Header Title */}
      <section className="space-y-2 border-b border-theme-muted pb-6">
        <div className="text-xs font-mono font-bold tracking-widest text-theme-sage uppercase flex items-center gap-2">
          <Database className="w-4 h-4" />
          // DATA ANALYTICS & SOFTWARE CASE STUDIES
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-theme-main font-sans">
          PROJECT CASE STUDIES
        </h1>
        <p className="text-sm text-theme-secondary font-mono">
          Explore data analytics, SQL queries, PostgreSQL databases, and data-driven applications.
        </p>
      </section>

      {/* Direct Banner to Flagship BI Hub */}
      <div className="p-4 bg-theme-surface border border-theme-muted rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-theme-main">
        <div className="space-y-1">
          <div className="text-xs font-mono font-bold text-theme-sage flex items-center gap-1.5 uppercase">
            <BarChart3 className="w-4 h-4" />
            Flagship Analytics Hub
          </div>
          <p className="text-xs text-theme-secondary">
            Interactive Business Performance Analytics & Customer RFM dashboards with 100% validated SQL results.
          </p>
        </div>
        <Link
          href="/analytics"
          className="px-4 py-2 rounded-sm bg-theme-sage text-[#F4F1EA] dark:text-[#171A17] font-mono text-xs font-bold hover:opacity-90 transition-all flex items-center gap-1.5 shrink-0 self-start sm:self-auto"
        >
          <span>Open Analytics Hub</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Case Study Switcher / Navigation */}
      <ScrollReveal className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-mono tracking-widest text-theme-secondary uppercase">
            Select Case File To Inspect
          </span>
          <span className="text-xs font-mono text-theme-sage">
            3 Primary Case Studies Available
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {caseStudies.map((study) => {
            const isSelected = study.id === selectedId;
            return (
              <button
                key={study.id}
                onClick={() => setSelectedId(study.id)}
                className={`group p-4 text-left border rounded-sm transition-all duration-200 focus:outline-none flex flex-col justify-between space-y-3 cursor-pointer ${
                  isSelected
                    ? 'bg-theme-soft border-theme-sage text-theme-main shadow-xs'
                    : 'bg-theme-surface/80 hover:bg-theme-surface border-theme-muted text-theme-secondary hover:text-theme-main hover:border-theme-sage hover:-translate-y-0.5'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-theme-sage transition-transform duration-200 group-hover:translate-x-0.5">
                    {study.number}
                  </span>
                  {isSelected ? (
                    <Check className="w-4 h-4 text-theme-sage" />
                  ) : (
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200 text-theme-sage" />
                  )}
                </div>

                <div className="text-sm font-bold text-theme-main line-clamp-2 transition-colors duration-200 group-hover:text-theme-sage">
                  {study.title}
                </div>

                <div className="text-[11px] font-mono text-theme-secondary flex items-center justify-between border-t border-theme-muted/50 pt-2">
                  <span>{study.type}</span>
                  <span className="h-[1px] w-0 group-hover:w-8 bg-theme-sage transition-all duration-200" />
                </div>
              </button>
            );
          })}
        </div>
      </ScrollReveal>

      {/* Active Case Study File */}
      <section className="pt-2">
        <CaseStudyDetail study={activeStudy} />
      </section>
    </div>
  );
}

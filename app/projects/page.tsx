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
        <div className="text-xs font-mono font-bold tracking-widest text-[#FF7A18] uppercase flex items-center gap-2">
          <Database className="w-4 h-4" />
          // DATA ANALYTICS & SOFTWARE CASE STUDIES
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-theme-main font-sans">
          PROJECT CASE STUDIES
        </h1>
        <p className="text-sm text-theme-secondary font-mono">
          Explore data analytics, SQL queries, PostgreSQL databases, and data-driven applications.
        </p>
      </section>

      {/* Quick Direct Banner to Flagship BI Hub */}
      <div className="p-4 bg-[#071A2B] border border-[#102F45] rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[#F5F7FA]">
        <div className="space-y-1">
          <div className="text-xs font-mono font-bold text-[#FF7A18] flex items-center gap-1.5">
            <BarChart3 className="w-4 h-4" />
            FLAGSHIP ANALYTICS HUB
          </div>
          <p className="text-xs text-[#9FB0BF]">
            Interactive Business Performance Analytics & Customer RFM dashboards with 100% validated SQL results.
          </p>
        </div>
        <Link
          href="/analytics"
          className="px-4 py-2 rounded-lg bg-[#FF7A18] text-[#071A2B] font-mono text-xs font-bold hover:bg-[#FF7A18]/90 transition-all flex items-center gap-1.5 shrink-0 self-start sm:self-auto"
        >
          <span>Open Analytics Hub</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Case Study Switcher / Navigation */}
      <ScrollReveal className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-mono tracking-widest text-theme-secondary uppercase">
            // SELECT CASE STUDY TO INSPECT
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
                className={`group p-4 text-left border rounded-xl transition-all duration-200 focus:outline-none flex flex-col justify-between space-y-3 cursor-pointer ${
                  isSelected
                    ? 'bg-[#071A2B] border-[#FF7A18] text-[#F5F7FA] shadow-md ring-2 ring-[#FF7A18]/30'
                    : 'bg-theme-surface/80 hover:bg-theme-surface border-theme-muted text-theme-secondary hover:text-theme-main hover:border-theme-sage'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-mono font-bold ${isSelected ? 'text-[#FF7A18]' : 'text-theme-sage'}`}>
                    CASE {study.number}
                  </span>
                  {isSelected ? (
                    <Check className="w-4 h-4 text-[#FF7A18]" />
                  ) : (
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200 text-theme-sage" />
                  )}
                </div>

                <div className="text-sm font-bold line-clamp-2 transition-colors duration-200">
                  {study.title}
                </div>

                <div className="text-[11px] font-mono flex items-center justify-between pt-1 border-t border-current/10">
                  <span className={isSelected ? 'text-[#9FB0BF]' : 'text-theme-secondary'}>{study.type}</span>
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

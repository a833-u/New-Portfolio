'use client';

import React, { useState } from 'react';
import { caseStudies } from '@/data/portfolioData';
import CaseStudyDetail from '@/components/case-studies/CaseStudyDetail';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Check, ArrowRight } from 'lucide-react';

export default function ProjectsPage() {
  const [selectedId, setSelectedId] = useState<string>(caseStudies[0].id);

  const activeStudy = caseStudies.find((c) => c.id === selectedId) || caseStudies[0];

  return (
    <div className="space-y-10">
      {/* Header Title */}
      <section className="space-y-2 border-b border-theme-muted pb-6">
        <div className="text-xs font-mono font-bold tracking-widest text-theme-sage uppercase">
          Analytical Case Files
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-theme-main">
          CASE STUDIES
        </h1>
        <p className="text-sm text-theme-secondary font-mono">
          Selected work, explained through the lens of data.
        </p>
      </section>

      {/* Case Study Switcher / Navigation */}
      <ScrollReveal className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-mono tracking-widest text-theme-secondary uppercase">
            Select Case File To Inspect
          </span>
          <span className="text-xs font-mono text-theme-sage">
            3 Research Studies Available
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {caseStudies.map((study) => {
            const isSelected = study.id === selectedId;
            return (
              <button
                key={study.id}
                onClick={() => setSelectedId(study.id)}
                className={`group p-4 text-left border rounded-sm transition-all duration-200 focus:outline-none flex flex-col justify-between space-y-3 ${
                  isSelected
                    ? 'bg-theme-soft border-theme-sage text-theme-main shadow-sm'
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

                <div className="text-[11px] font-mono text-theme-secondary flex items-center justify-between">
                  <span>{study.type}</span>
                  <span className="h-[1px] w-0 group-hover:w-8 bg-theme-sage transition-all duration-200" />
                </div>
              </button>
            );
          })}
        </div>
      </ScrollReveal>

      {/* Active Case Study File */}
      <section className="pt-4">
        <CaseStudyDetail study={activeStudy} />
      </section>
    </div>
  );
}

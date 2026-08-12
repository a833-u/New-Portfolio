import React from 'react';
import WorkflowStepper from '@/components/analytics/WorkflowStepper';
import ToolboxGroup from '@/components/analytics/ToolboxGroup';
import TechRelationshipGraph from '@/components/analytics/TechRelationshipGraph';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function AnalyticsPage() {
  return (
    <div className="space-y-12">
      {/* Header Title */}
      <section className="space-y-2 border-b border-theme-muted pb-6">
        <div className="text-xs font-mono font-bold tracking-widest text-theme-sage uppercase">
          Analytical Methodology
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-theme-main">
          HOW I ANALYZE
        </h1>
        <p className="text-sm text-theme-secondary font-mono">
          My approach to turning information into insight.
        </p>
      </section>

      {/* 7-Stage Interactive Workflow Stepper */}
      <ScrollReveal className="space-y-4">
        <div className="space-y-1">
          <span className="text-[11px] font-mono tracking-widest text-theme-sage uppercase font-semibold">
            7-Stage Analytical Pipeline
          </span>
          <h2 className="text-xl font-bold text-theme-main">
            End-to-End Data Workflow
          </h2>
          <p className="text-xs text-theme-secondary">
            Click through each stage to explore tools, methodologies, and analytical actions.
          </p>
        </div>
        <WorkflowStepper />
      </ScrollReveal>

      {/* Grouped Toolbox */}
      <ScrollReveal>
        <ToolboxGroup />
      </ScrollReveal>

      {/* Interactive Technology Relationship Graph */}
      <ScrollReveal>
        <TechRelationshipGraph />
      </ScrollReveal>
    </div>
  );
}

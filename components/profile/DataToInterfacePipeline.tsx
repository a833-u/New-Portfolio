'use client';

import React from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';

const pipelineSteps = [
  {
    stage: 'DATA',
    tools: 'Python · SQL · PostgreSQL',
    action: 'Data Gathering & Schema Exploration'
  },
  {
    stage: 'ANALYSIS',
    tools: 'Pandas · NumPy · Aggregation',
    action: 'Cleaning, Validation & Metrics'
  },
  {
    stage: 'VISUALIZATION',
    tools: 'Power BI · D3.js · Seaborn',
    action: 'Chart Prototyping & Visual Encoding'
  },
  {
    stage: 'INTERFACE',
    tools: 'React.js · JavaScript · Dashboards',
    action: 'Interactive Frontends & UX Design'
  },
  {
    stage: 'DECISION',
    tools: 'Clear · Actionable Insights',
    action: 'Strategic Business Recommendations'
  }
];

export default function DataToInterfacePipeline() {
  return (
    <div className="space-y-6 py-6 border-y border-theme-muted my-10">
      <div className="space-y-1">
        <span className="text-[11px] font-mono tracking-widest text-theme-apricot uppercase font-semibold">
          Signature Positioning
        </span>
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-theme-main">
          DATA → INTERFACE
        </h3>
        <p className="text-base sm:text-lg font-medium text-theme-sage italic pt-1">
          &quot;I don&apos;t just analyze data. I know how to turn it into an interface people can actually use.&quot;
        </p>
      </div>

      {/* Pipeline Diagram */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 pt-4">
        {pipelineSteps.map((step, idx) => (
          <React.Fragment key={step.stage}>
            <div className="p-4 bg-theme-surface border border-theme-muted rounded-sm space-y-2 flex flex-col justify-between hover:border-theme-sage transition-colors duration-200">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-theme-sage tracking-wider">
                  0{idx + 1}.
                </span>
                <span className="text-xs font-bold font-mono tracking-wider text-theme-main">
                  {step.stage}
                </span>
              </div>
              <div className="text-[11px] text-theme-secondary font-mono">
                {step.tools}
              </div>
              <div className="text-xs text-theme-main font-medium border-t border-theme-muted/50 pt-2">
                {step.action}
              </div>
            </div>

            {idx < pipelineSteps.length - 1 && (
              <div className="hidden md:flex items-center justify-center text-theme-sage">
                <ArrowRight className="w-4 h-4 opacity-60" />
              </div>
            )}

            {idx < pipelineSteps.length - 1 && (
              <div className="flex md:hidden items-center justify-center text-theme-sage py-1">
                <ArrowDown className="w-4 h-4 opacity-60" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

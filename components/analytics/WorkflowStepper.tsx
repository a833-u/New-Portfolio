'use client';

import React, { useState } from 'react';
import { workflowSteps } from '@/data/portfolioData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function WorkflowStepper() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="space-y-8 py-6">
      {/* Horizontal Flow Stepper Bar */}
      <div className="overflow-x-auto pb-4">
        <div className="flex items-center space-x-2 min-w-max">
          {workflowSteps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <React.Fragment key={step.number}>
                <button
                  onClick={() => setActiveStep(idx)}
                  className={`flex items-center space-x-2 px-3 py-2 border rounded-sm transition-colors text-xs font-mono focus:outline-none ${
                    isActive
                      ? 'bg-theme-sage text-theme-main font-bold border-theme-sage shadow-sm'
                      : 'bg-theme-surface text-theme-secondary hover:text-theme-main border-theme-muted'
                  }`}
                >
                  <span className={isActive ? 'text-theme-main' : 'text-theme-sage'}>
                    {step.number}
                  </span>
                  <span>{step.name}</span>
                </button>

                {idx < workflowSteps.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 text-theme-muted shrink-0" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Active Step Details Panel */}
      <div className="p-6 bg-theme-surface border border-theme-muted rounded-sm space-y-4 transition-all duration-200">
        <div className="flex items-center justify-between border-b border-theme-muted pb-3">
          <div className="flex items-center gap-2">
            <span className="text-sm font-mono font-bold text-theme-sage">
              STAGE {workflowSteps[activeStep].number}
            </span>
            <span className="text-lg font-bold text-theme-main">
              {workflowSteps[activeStep].name}
            </span>
          </div>
          <span className="text-xs font-mono text-theme-secondary">
            Step {activeStep + 1} of 7
          </span>
        </div>

        <p className="text-sm text-theme-main leading-relaxed">
          {workflowSteps[activeStep].description}
        </p>

        {/* Tools associated */}
        <div className="space-y-2 pt-2 border-t border-theme-muted/50">
          <span className="text-[11px] font-mono tracking-widest text-theme-secondary uppercase">
            Primary Tools & Methodologies
          </span>
          <div className="flex flex-wrap gap-2">
            {workflowSteps[activeStep].tools.map((tool) => (
              <span
                key={tool}
                className="text-xs font-mono px-2.5 py-1 bg-theme-muted text-theme-main border border-theme-muted rounded-sm flex items-center gap-1.5"
              >
                <CheckCircle2 className="w-3 h-3 text-theme-sage" />
                <span>{tool}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

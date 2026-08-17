'use client';

import React from 'react';
import { CaseStudy } from '@/types/portfolio';
import SQLExpander from './SQLExpander';
import { ShoppingBehaviorChart, PropVistaChart } from '@/components/data-visualizations/MinimalCharts';
import { Calendar, Tag, CheckCircle } from 'lucide-react';

interface CaseStudyDetailProps {
  study: CaseStudy;
}

export default function CaseStudyDetail({ study }: CaseStudyDetailProps) {
  return (
    <div className="space-y-8 p-6 sm:p-8 bg-theme-surface border border-theme-muted rounded-sm transition-colors duration-200">
      {/* Header & Meta */}
      <div className="space-y-3 border-b border-theme-muted pb-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-mono font-bold text-theme-sage tracking-wider">
            CASE FILE NO. {study.number}
          </span>
          <div className="flex items-center gap-1.5 text-xs font-mono text-theme-secondary">
            <Calendar className="w-3.5 h-3.5 text-theme-sage" />
            <span>{study.date}</span>
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-theme-main">
          {study.title}
        </h2>

        <div className="text-xs font-mono text-theme-secondary uppercase">
          {study.type}
        </div>

        {/* Tools Tags */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {study.tools.map((tool) => (
            <span
              key={tool}
              className="text-[11px] font-mono px-2 py-0.5 bg-theme-muted text-theme-main border border-theme-muted rounded-sm"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Analytical Question */}
      <div className="p-4 bg-theme-muted/40 border-l-2 border-theme-sage rounded-sm space-y-1">
        <span className="text-[10px] font-mono tracking-widest text-theme-sage uppercase font-semibold">
          Core Research Question
        </span>
        <p className="text-sm font-semibold text-theme-main italic">
          &quot;{study.question}&quot;
        </p>
      </div>

      {/* Data Workflow Summary Grid */}
      <div className="space-y-3">
        <h3 className="text-xs font-mono tracking-widest text-theme-secondary uppercase">
          Data Lifecycle & Cleaning Summary
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
          <div className="p-3 bg-theme-main/5 border border-theme-muted rounded-sm space-y-1.5">
            <span className="text-theme-sage font-bold block">DATA CLEANING ACTIONS</span>
            <div className="space-y-1 text-theme-secondary text-[11px]">
              <div><strong className="text-theme-main">Missing Values:</strong> {study.cleaningSteps.missingValues}</div>
              <div><strong className="text-theme-main">Duplicates:</strong> {study.cleaningSteps.duplicates}</div>
              <div><strong className="text-theme-main">Inconsistencies:</strong> {study.cleaningSteps.inconsistencies}</div>
              <div><strong className="text-theme-main">Data Types:</strong> {study.cleaningSteps.dataTypes}</div>
            </div>
          </div>

          <div className="p-3 bg-theme-main/5 border border-theme-muted rounded-sm space-y-1.5">
            <span className="text-theme-apricot font-bold block">DATA PIPELINE STEPS</span>
            <div className="space-y-1 text-theme-secondary text-[11px]">
              <div><strong className="text-theme-main">Gathering:</strong> {study.dataSummary.gathering}</div>
              <div><strong className="text-theme-main">Validation:</strong> {study.dataSummary.validation}</div>
              <div><strong className="text-theme-main">Analysis:</strong> {study.dataSummary.analysis}</div>
            </div>
          </div>
        </div>
      </div>

      {/* SQL Query Section if available */}
      {study.sqlQuery && (
        <div className="space-y-2">
          <h3 className="text-xs font-mono tracking-widest text-theme-secondary uppercase">
            SQL Query Implementation
          </h3>
          <SQLExpander sqlQuery={study.sqlQuery} />
        </div>
      )}

      {/* Custom Publication Visualization or Analytics Link */}
      <div className="space-y-2">
        <h3 className="text-xs font-mono tracking-widest text-theme-secondary uppercase">
          Analytical Data Visualization & Interactive Product
        </h3>
        {study.id === 'business-performance-analytics' && (
          <div className="p-6 bg-[#071A2B] border border-[#102F45] rounded-lg text-center space-y-4 shadow-xl text-[#F5F7FA]">
            <div className="space-y-1">
              <span className="text-xs font-mono text-[#FF7A18] uppercase tracking-widest font-bold">
                // COMPLETE BI PRODUCT AVAILABLE
              </span>
              <h4 className="text-xl font-bold text-[#F5F7FA]">
                Business Performance Analytics Dashboard
              </h4>
              <p className="text-xs text-[#9FB0BF] max-w-xl mx-auto font-mono">
                Explore the complete 11-query SQL Explorer, 80-salesperson interactive performance matrix, discount margin degradation curves, and dynamic BI dashboard.
              </p>
            </div>

            <a
              href="/analytics"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF7A18] hover:bg-[#FF9A3D] text-[#071A2B] font-mono font-bold text-xs uppercase tracking-wider rounded-lg transition-all shadow-lg cursor-pointer"
            >
              <span>VIEW INTERACTIVE DASHBOARD & SQL EXPLORER →</span>
            </a>
          </div>
        )}
        {study.id === 'customer-shopping-behavior' && (
          <div className="space-y-4">
            <div className="p-6 bg-[#041C1E] border border-[#10353B] rounded-lg text-center space-y-4 shadow-xl text-[#F0FDFA]">
              <div className="space-y-1">
                <span className="text-xs font-mono text-[#00E5A3] uppercase tracking-widest font-bold">
                  // COMPLETE CUSTOMER ANALYTICS & RFM PRODUCT AVAILABLE
                </span>
                <h4 className="text-xl font-bold text-[#F0FDFA]">
                  Customer Shopping Behavior Analytics & Dashboard
                </h4>
                <p className="text-xs text-[#8EAAB0] max-w-xl mx-auto font-mono">
                  Explore 8-query SQL RFM customer segmentation, subscription LTV multipliers, Pareto revenue concentration models, and interactive BI reporting.
                </p>
              </div>

              <a
                href="/shopping-behavior"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#00E5A3] hover:bg-[#34D399] text-[#041C1E] font-mono font-bold text-xs uppercase tracking-wider rounded-lg transition-all shadow-lg cursor-pointer"
              >
                <span>VIEW CUSTOMER DASHBOARD & SQL EXPLORER →</span>
              </a>
            </div>
            <ShoppingBehaviorChart />
          </div>
        )}
        {study.id === 'propvista' && <PropVistaChart />}
      </div>

      {/* Key Results & Summary */}
      <div className="space-y-3 pt-2 border-t border-theme-muted">
        <h3 className="text-xs font-mono tracking-widest text-theme-secondary uppercase">
          Key Insights & Impact
        </h3>
        <div className="space-y-2">
          {study.results.map((res, i) => (
            <div key={i} className="flex items-start gap-2 text-xs">
              <CheckCircle className="w-4 h-4 text-theme-sage shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-theme-main font-mono">{res.label}:</span>{' '}
                <span className="text-theme-secondary">{res.value}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-theme-main leading-relaxed font-sans pt-2 border-t border-theme-muted/40">
          <strong>Result Summary:</strong> {study.resultSummary}
        </p>
      </div>
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import { Database, Filter, CheckCircle2, Server, Terminal, BarChart2, PieChart, Lightbulb } from 'lucide-react';

const pipelineStages = [
  {
    step: '01',
    title: 'Raw Dataset',
    icon: Database,
    desc: '99,970 multi-channel retail sales records spanning 2024-01-01 to 2026-06-30.',
    details: 'Contains transaction ID, dates, customer segments, product categories, unit prices, discounts, sales targets, and payment channels.'
  },
  {
    step: '02',
    title: 'Python Cleaning',
    icon: Filter,
    desc: 'Standardized inconsistent capitalization and normalized categorical strings.',
    details: 'Used Pandas & NumPy to standardize variations like "accessories" vs "Accessories" and "office supplies" vs "Office Supplies".'
  },
  {
    step: '03',
    title: 'Data Validation',
    icon: CheckCircle2,
    desc: 'Verified row counts, duplicate order checks, and financial field reconciliation.',
    details: 'Confirmed 0 duplicate order IDs across 99,970 rows. Reconciled revenue = gross_sales - discount_amount.'
  },
  {
    step: '04',
    title: 'PostgreSQL DB',
    icon: Server,
    desc: 'Loaded clean dataset into PostgreSQL database: business_performance.',
    details: 'Schema defined in public.sales_transactions with indexed customer_id, category, region, and salesperson_id.'
  },
  {
    step: '05',
    title: 'SQL Analysis',
    icon: Terminal,
    desc: 'Wrote 11 production SQL queries with aggregations and window functions.',
    details: 'Ran group-by aggregations, monthly time series truncations, target hit-rate counts, and salesperson ranking CTEs.'
  },
  {
    step: '06',
    title: 'Business KPIs',
    icon: BarChart2,
    desc: 'Calculated executive financial metrics and margin benchmarks.',
    details: 'Verified ₹3.37B total revenue, ₹1.06B net profit, 31.41% profit margin, and ₹33.69K average order value.'
  },
  {
    step: '07',
    title: 'BI Dashboard',
    icon: PieChart,
    desc: 'Built an interactive dark-themed BI executive reporting dashboard.',
    details: 'Integrated multi-select filters, 30-month trend charts, discount impact curves, and 80-salesperson tables.'
  },
  {
    step: '08',
    title: 'Insights & Strategy',
    icon: Lightbulb,
    desc: 'Translated analytical findings into 5 actionable business recommendations.',
    details: 'Identified target risk (6.28% hit rate), discount margin erosion (34.7% to 19.9%), and Office Supplies margin lead (35.2%).'
  }
];

export default function VisualDataPipeline() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="space-y-6 bg-[#071A2B] border border-[#102F45] rounded-xl p-6 sm:p-8">
      <div className="space-y-1">
        <span className="text-xs font-mono text-[#FF7A18] uppercase tracking-widest font-semibold">
          // END-TO-END METHODOLOGY PIPELINE
        </span>
        <h2 className="text-xl sm:text-2xl font-bold text-[#F5F7FA]">
          8-Stage Analytical Architecture
        </h2>
        <p className="text-xs sm:text-sm text-[#9FB0BF]">
          Click any stage in the flow below to inspect tools, validation steps, and analytical transformations.
        </p>
      </div>

      {/* Horizontal Pipeline Steps */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 pt-2">
        {pipelineStages.map((stage, idx) => {
          const Icon = stage.icon;
          const isActive = idx === activeStep;
          return (
            <button
              key={stage.step}
              onClick={() => setActiveStep(idx)}
              className={`p-3 rounded-lg border text-left transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                isActive
                  ? 'bg-[#102F45] border-[#FF7A18] text-[#F5F7FA] shadow-lg scale-[1.02]'
                  : 'bg-[#0B2438] border-[#102F45] text-[#9FB0BF] hover:border-[#FF7A18]/50 hover:text-[#F5F7FA]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-[#FF7A18]' : 'text-[#9FB0BF]'}`}>
                  {stage.step}
                </span>
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#FF7A18]' : 'text-[#9FB0BF]'}`} />
              </div>

              <div>
                <div className="text-xs font-bold leading-tight font-sans text-[#F5F7FA]">
                  {stage.title}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Stage Explanation Box */}
      <div className="p-4 sm:p-6 bg-[#0B2438] border border-[#102F45] rounded-lg space-y-2">
        <div className="flex items-center gap-2 text-xs font-mono text-[#FF7A18]">
          <span>STAGE {pipelineStages[activeStep].step} DETAIL:</span>
          <span className="font-bold uppercase text-[#F5F7FA]">{pipelineStages[activeStep].title}</span>
        </div>
        <p className="text-sm font-semibold text-[#F5F7FA]">
          {pipelineStages[activeStep].desc}
        </p>
        <p className="text-xs text-[#9FB0BF] leading-relaxed font-mono">
          {pipelineStages[activeStep].details}
        </p>
      </div>
    </section>
  );
}

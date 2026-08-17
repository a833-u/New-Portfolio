'use client';

import React, { useState } from 'react';
import { Database, Filter, CheckCircle2, Server, Terminal, BarChart2, PieChart, Lightbulb } from 'lucide-react';

const rfmPipelineStages = [
  {
    step: '01',
    title: 'Multi-Channel Extraction',
    icon: Database,
    desc: '3,900 customer transaction histories across retail touchpoints.',
    details: 'Extracted customer IDs, demographics, purchase amounts, item categories, review ratings, subscription status, and shipping methods.'
  },
  {
    step: '02',
    title: 'Data Sanitization',
    icon: Filter,
    desc: 'Imputed null demographic values and cleaned category naming anomalies.',
    details: 'Used Pandas & NumPy to sanitize customer age gaps, normalize payment method strings, and resolve missing review scores.'
  },
  {
    step: '03',
    title: 'Demographic Validation',
    icon: CheckCircle2,
    desc: 'Validated total spend against primary accounting ledgers.',
    details: 'Verified 100% data completeness ($233,900 gross spend across 3,900 orders) with zero duplicate transaction keys.'
  },
  {
    step: '04',
    title: 'PostgreSQL Relational DB',
    icon: Server,
    desc: 'Loaded customer profiles into PostgreSQL database: customer_analytics.',
    details: 'Defined indexed schema in public.shopping_transactions with foreign key references to customer profiles.'
  },
  {
    step: '05',
    title: 'SQL RFM Modeling',
    icon: Terminal,
    desc: 'Executed PostgreSQL NTILE window functions for RFM segmentation.',
    details: 'Bucketed recency, frequency, and monetary values to isolate Champions (Top 15%) from At-Risk customers.'
  },
  {
    step: '06',
    title: 'LTV Uplift Metrics',
    icon: BarChart2,
    desc: 'Calculated subscription and review rating LTV multipliers.',
    details: 'Discovered subscribers spend 19.3% more per order ($68.00 vs $57.00) and place 2x more repeat orders.'
  },
  {
    step: '07',
    title: 'Interactive BI Dashboard',
    icon: PieChart,
    desc: 'Built an executive customer segmentation BI reporting dashboard.',
    details: 'Integrated multi-select category filters, customer search tables, RFM matrix cards, and subscription LTV charts.'
  },
  {
    step: '08',
    title: 'Retention Strategy',
    icon: Lightbulb,
    desc: 'Formulated 5 data-backed customer retention strategies.',
    details: 'Recommended VIP Champions loyalty program, dynamic win-back automation for 741 at-risk buyers, and checkout subscription incentives.'
  }
];

export default function RFMPipeline() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="space-y-6 bg-[#071A2B] border border-[#102F45] rounded-xl p-6 sm:p-8">
      <div className="space-y-1">
        <span className="text-xs font-mono text-[#FF7A18] uppercase tracking-widest font-semibold">
          // RFM & CUSTOMER ANALYTICS PIPELINE
        </span>
        <h2 className="text-xl sm:text-2xl font-bold text-[#F5F7FA]">
          8-Stage Customer Intelligence Lifecycle
        </h2>
        <p className="text-xs sm:text-sm text-[#9FB0BF]">
          Click any stage in the flow below to inspect RFM segmentation algorithms, database schemas, and retention frameworks.
        </p>
      </div>

      {/* Horizontal Pipeline Steps */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 pt-2">
        {rfmPipelineStages.map((stage, idx) => {
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
          <span>STAGE {rfmPipelineStages[activeStep].step} DETAIL:</span>
          <span className="font-bold uppercase text-[#F5F7FA]">{rfmPipelineStages[activeStep].title}</span>
        </div>
        <p className="text-sm font-semibold text-[#F5F7FA]">
          {rfmPipelineStages[activeStep].desc}
        </p>
        <p className="text-xs text-[#9FB0BF] leading-relaxed font-mono">
          {rfmPipelineStages[activeStep].details}
        </p>
      </div>
    </section>
  );
}

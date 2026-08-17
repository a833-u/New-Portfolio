'use client';

import React from 'react';
import { Database, FileSpreadsheet, LineChart, ShieldCheck, ArrowRight } from 'lucide-react';
import { overallKPIs } from '@/data/analyticsData';
import { formatCurrency, formatNumber } from '@/services/analyticsService';

interface CaseStudyHeroProps {
  onSwitchToDashboard: () => void;
}

export default function CaseStudyHero({ onSwitchToDashboard }: CaseStudyHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#071A2B] border border-[#102F45] rounded-xl p-6 sm:p-8 md:p-10 shadow-2xl text-[#F5F7FA] space-y-8">
      {/* Background Subtle Gradient Accent */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-[#FF7A18]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Meta Badges */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#102F45] pb-6">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
          <span className="px-2.5 py-1 rounded bg-[#102F45] text-[#FF7A18] font-bold border border-[#FF7A18]/30 flex items-center gap-1.5">
            <Database className="w-3.5 h-3.5" />
            99,970 TRANSACTIONS
          </span>
          <span className="px-2 py-1 rounded bg-[#0B2438] text-[#9FB0BF] border border-[#102F45]">
            POSTGRESQL
          </span>
          <span className="px-2 py-1 rounded bg-[#0B2438] text-[#9FB0BF] border border-[#102F45]">
            SQL ANALYSIS
          </span>
          <span className="px-2 py-1 rounded bg-[#0B2438] text-[#9FB0BF] border border-[#102F45]">
            POWER BI / BI
          </span>
          <span className="px-2 py-1 rounded bg-[#0B2438] text-[#9FB0BF] border border-[#102F45]">
            PYTHON
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-[#35D07F]">
          <ShieldCheck className="w-4 h-4" />
          <span>100% SQL VALIDATED DATASET</span>
        </div>
      </div>

      {/* Title & Description */}
      <div className="space-y-4 max-w-4xl">
        <span className="text-xs font-mono font-semibold text-[#FF7A18] uppercase tracking-widest">
          // END-TO-END DATA ANALYTICS & BI CASE STUDY
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F5F7FA] leading-tight">
          Business Performance Analytics
        </h1>
        <p className="text-sm sm:text-base text-[#9FB0BF] leading-relaxed font-sans">
          An end-to-end sales and profitability intelligence project analyzing <strong className="text-[#F5F7FA]">99,970 sales transactions</strong> across 30 months (Jan 2024 – Jun 2026). Demonstrates data cleaning in Python, relational modeling in PostgreSQL, advanced SQL query execution, transaction target hit-rate analysis, and interactive executive reporting.
        </p>
      </div>

      {/* Verified Top KPI Highlights */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 pt-2">
        <div className="p-3.5 bg-[#0B2438] border border-[#102F45] rounded-lg space-y-1">
          <div className="text-[11px] font-mono text-[#9FB0BF] uppercase">REVENUE</div>
          <div className="text-lg font-bold text-[#FF7A18] font-mono">₹3.37B</div>
          <div className="text-[10px] text-[#9FB0BF]">₹3,368.3M Exact</div>
        </div>

        <div className="p-3.5 bg-[#0B2438] border border-[#102F45] rounded-lg space-y-1">
          <div className="text-[11px] font-mono text-[#9FB0BF] uppercase">PROFIT</div>
          <div className="text-lg font-bold text-[#35D07F] font-mono">₹1.06B</div>
          <div className="text-[10px] text-[#9FB0BF]">₹1,057.9M Exact</div>
        </div>

        <div className="p-3.5 bg-[#0B2438] border border-[#102F45] rounded-lg space-y-1">
          <div className="text-[11px] font-mono text-[#9FB0BF] uppercase">MARGIN</div>
          <div className="text-lg font-bold text-[#F5F7FA] font-mono">31.41%</div>
          <div className="text-[10px] text-[#9FB0BF]">Overall Retention</div>
        </div>

        <div className="p-3.5 bg-[#0B2438] border border-[#102F45] rounded-lg space-y-1">
          <div className="text-[11px] font-mono text-[#9FB0BF] uppercase">ORDERS</div>
          <div className="text-lg font-bold text-[#F5F7FA] font-mono">99,970</div>
          <div className="text-[10px] text-[#9FB0BF]">0 Duplicates</div>
        </div>

        <div className="p-3.5 bg-[#0B2438] border border-[#102F45] rounded-lg space-y-1">
          <div className="text-[11px] font-mono text-[#9FB0BF] uppercase">QUANTITY</div>
          <div className="text-lg font-bold text-[#F5F7FA] font-mono">339.2K</div>
          <div className="text-[10px] text-[#9FB0BF]">339,217 Units</div>
        </div>

        <div className="p-3.5 bg-[#0B2438] border border-[#102F45] rounded-lg space-y-1">
          <div className="text-[11px] font-mono text-[#9FB0BF] uppercase">AVG ORDER</div>
          <div className="text-lg font-bold text-[#FF9A3D] font-mono">₹33.69K</div>
          <div className="text-[10px] text-[#9FB0BF]">Mean Value</div>
        </div>
      </div>

      {/* Prominent CTA to Launch Dashboard */}
      <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#102F45]">
        <div className="text-xs font-mono text-[#9FB0BF] flex items-center gap-2">
          <FileSpreadsheet className="w-4 h-4 text-[#FF7A18]" />
          <span>PostgreSQL Table: <code className="text-[#F5F7FA]">public.sales_transactions</code> (30 Months)</span>
        </div>

        <button
          onClick={onSwitchToDashboard}
          className="w-full sm:w-auto px-6 py-3 bg-[#FF7A18] hover:bg-[#FF9A3D] text-[#071A2B] font-bold text-xs font-mono uppercase tracking-wider rounded-lg transition-all shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
        >
          <span>VIEW INTERACTIVE BI DASHBOARD</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}

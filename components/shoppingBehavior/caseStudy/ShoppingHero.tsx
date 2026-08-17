'use client';

import React from 'react';
import { ShoppingBag, Users, ShieldCheck, ArrowRight, Award, DollarSign, Percent } from 'lucide-react';
import { shoppingKPIs } from '@/data/shoppingBehaviorData';
import { formatUSD } from '@/services/shoppingBehaviorService';

interface ShoppingHeroProps {
  onSwitchToDashboard: () => void;
}

export default function ShoppingHero({ onSwitchToDashboard }: ShoppingHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#071A2B] border border-[#102F45] rounded-xl p-6 sm:p-8 md:p-10 shadow-2xl text-[#F5F7FA] space-y-8">
      {/* Background Subtle Gradient Accent */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-[#FF7A18]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Meta Badges */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#102F45] pb-6">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
          <span className="px-2.5 py-1 rounded bg-[#102F45] text-[#FF7A18] font-bold border border-[#FF7A18]/30 flex items-center gap-1.5">
            <ShoppingBag className="w-3.5 h-3.5" />
            3,900 CUSTOMER TRANSACTIONS
          </span>
          <span className="px-2 py-1 rounded bg-[#0B2438] text-[#9FB0BF] border border-[#102F45]">
            RFM SEGMENTATION
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
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-[#35D07F]">
          <ShieldCheck className="w-4 h-4" />
          <span>100% SQL VALIDATED DATASET</span>
        </div>
      </div>

      {/* Title & Description */}
      <div className="space-y-4 max-w-4xl">
        <span className="text-xs font-mono font-semibold text-[#FF7A18] uppercase tracking-widest">
          // END-TO-END CUSTOMER ANALYTICS & RFM CASE STUDY
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F5F7FA] leading-tight">
          Customer Shopping Behavior Analysis
        </h1>
        <p className="text-sm sm:text-base text-[#9FB0BF] leading-relaxed font-sans">
          An end-to-end retail customer behavior and RFM segmentation project analyzing <strong className="text-[#F5F7FA]">3,900 customer purchasing profiles</strong> ($233.9K total sales). Demonstrates recency, frequency, monetary (RFM) modeling in SQL, subscription membership LTV uplift evaluation, category basket analysis, and executive strategy reporting.
        </p>
      </div>

      {/* Verified Top KPI Highlights */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 pt-2">
        <div className="p-3.5 bg-[#0B2438] border border-[#102F45] rounded-lg space-y-1">
          <div className="text-[11px] font-mono text-[#9FB0BF] uppercase">TOTAL SPEND</div>
          <div className="text-lg font-bold text-[#FF7A18] font-mono">$233.9K</div>
          <div className="text-[10px] text-[#9FB0BF]">$233,900 Exact</div>
        </div>

        <div className="p-3.5 bg-[#0B2438] border border-[#102F45] rounded-lg space-y-1">
          <div className="text-[11px] font-mono text-[#9FB0BF] uppercase">CUSTOMERS</div>
          <div className="text-lg font-bold text-[#F5F7FA] font-mono">3,900</div>
          <div className="text-[10px] text-[#9FB0BF]">Unique Profiles</div>
        </div>

        <div className="p-3.5 bg-[#0B2438] border border-[#102F45] rounded-lg space-y-1">
          <div className="text-[11px] font-mono text-[#9FB0BF] uppercase">VIP REVENUE %</div>
          <div className="text-lg font-bold text-[#35D07F] font-mono">54.0%</div>
          <div className="text-[10px] text-[#9FB0BF]">Top 15% Champions</div>
        </div>

        <div className="p-3.5 bg-[#0B2438] border border-[#102F45] rounded-lg space-y-1">
          <div className="text-[11px] font-mono text-[#9FB0BF] uppercase">AVG ORDER</div>
          <div className="text-lg font-bold text-[#FF9A3D] font-mono">$59.97</div>
          <div className="text-[10px] text-[#9FB0BF]">Mean Basket</div>
        </div>

        <div className="p-3.5 bg-[#0B2438] border border-[#102F45] rounded-lg space-y-1">
          <div className="text-[11px] font-mono text-[#9FB0BF] uppercase">SUBSCRIBERS</div>
          <div className="text-lg font-bold text-[#F5F7FA] font-mono">27.0%</div>
          <div className="text-[10px] text-[#9FB0BF]">1,053 Members</div>
        </div>

        <div className="p-3.5 bg-[#0B2438] border border-[#102F45] rounded-lg space-y-1">
          <div className="text-[11px] font-mono text-[#9FB0BF] uppercase">AVG RATING</div>
          <div className="text-lg font-bold text-[#FFC857] font-mono">3.75 / 5</div>
          <div className="text-[10px] text-[#9FB0BF]">Review Score</div>
        </div>
      </div>

      {/* Prominent CTA to Launch Dashboard */}
      <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#102F45]">
        <div className="text-xs font-mono text-[#9FB0BF] flex items-center gap-2">
          <Users className="w-4 h-4 text-[#FF7A18]" />
          <span>PostgreSQL Table: <code className="text-[#F5F7FA]">public.shopping_transactions</code></span>
        </div>

        <button
          onClick={onSwitchToDashboard}
          className="w-full sm:w-auto px-6 py-3 bg-[#FF7A18] hover:bg-[#FF9A3D] text-[#071A2B] font-bold text-xs font-mono uppercase tracking-wider rounded-lg transition-all shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
        >
          <span>VIEW INTERACTIVE SHOPPING DASHBOARD</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}

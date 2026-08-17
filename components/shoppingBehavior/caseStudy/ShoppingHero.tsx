'use client';

import React from 'react';
import { ShoppingBag, Users, ShieldCheck, ArrowRight, Award, DollarSign, Percent } from 'lucide-react';

interface ShoppingHeroProps {
  onSwitchToDashboard: () => void;
}

export default function ShoppingHero({ onSwitchToDashboard }: ShoppingHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#041C1E] border border-[#10353B] rounded-xl p-6 sm:p-8 md:p-10 shadow-2xl text-[#F0FDFA] space-y-8">
      {/* Background Subtle Mint Gradient Accent */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-[#00E5A3]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Meta Badges */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#10353B] pb-6">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
          <span className="px-2.5 py-1 rounded bg-[#10353B] text-[#00E5A3] font-bold border border-[#00E5A3]/40 flex items-center gap-1.5">
            <ShoppingBag className="w-3.5 h-3.5" />
            3,900 CUSTOMER TRANSACTIONS
          </span>
          <span className="px-2 py-1 rounded bg-[#0B282C] text-[#8EAAB0] border border-[#10353B]">
            RFM SEGMENTATION
          </span>
          <span className="px-2 py-1 rounded bg-[#0B282C] text-[#8EAAB0] border border-[#10353B]">
            POSTGRESQL
          </span>
          <span className="px-2 py-1 rounded bg-[#0B282C] text-[#8EAAB0] border border-[#10353B]">
            SQL ANALYSIS
          </span>
          <span className="px-2 py-1 rounded bg-[#0B282C] text-[#8EAAB0] border border-[#10353B]">
            POWER BI / BI
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-[#00E5A3]">
          <ShieldCheck className="w-4 h-4" />
          <span>100% SQL VALIDATED DATASET</span>
        </div>
      </div>

      {/* Title & Description */}
      <div className="space-y-4 max-w-4xl">
        <span className="text-xs font-mono font-semibold text-[#00E5A3] uppercase tracking-widest">
          // END-TO-END CUSTOMER ANALYTICS & RFM CASE STUDY
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F0FDFA] leading-tight">
          Customer Shopping Behavior Analysis
        </h1>
        <p className="text-sm sm:text-base text-[#8EAAB0] leading-relaxed font-sans">
          An end-to-end retail customer behavior and RFM segmentation project analyzing <strong className="text-[#F0FDFA]">3,900 customer purchasing profiles</strong> ($233.9K total sales). Demonstrates recency, frequency, monetary (RFM) modeling in SQL, subscription membership LTV uplift evaluation, category basket analysis, and executive strategy reporting.
        </p>
      </div>

      {/* Verified Top KPI Highlights */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 pt-2">
        <div className="p-3.5 bg-[#0B282C] border border-[#10353B] rounded-lg space-y-1">
          <div className="text-[11px] font-mono text-[#8EAAB0] uppercase">TOTAL SPEND</div>
          <div className="text-lg font-bold text-[#00E5A3] font-mono">$233.9K</div>
          <div className="text-[10px] text-[#8EAAB0]">$233,900 Exact</div>
        </div>

        <div className="p-3.5 bg-[#0B282C] border border-[#10353B] rounded-lg space-y-1">
          <div className="text-[11px] font-mono text-[#8EAAB0] uppercase">CUSTOMERS</div>
          <div className="text-lg font-bold text-[#F0FDFA] font-mono">3,900</div>
          <div className="text-[10px] text-[#8EAAB0]">Unique Profiles</div>
        </div>

        <div className="p-3.5 bg-[#0B282C] border border-[#10353B] rounded-lg space-y-1">
          <div className="text-[11px] font-mono text-[#8EAAB0] uppercase">VIP REVENUE %</div>
          <div className="text-lg font-bold text-[#38BDF8] font-mono">54.0%</div>
          <div className="text-[10px] text-[#8EAAB0]">Top 15% Champions</div>
        </div>

        <div className="p-3.5 bg-[#0B282C] border border-[#10353B] rounded-lg space-y-1">
          <div className="text-[11px] font-mono text-[#8EAAB0] uppercase">AVG ORDER</div>
          <div className="text-lg font-bold text-[#00E5A3] font-mono">$59.97</div>
          <div className="text-[10px] text-[#8EAAB0]">Mean Basket</div>
        </div>

        <div className="p-3.5 bg-[#0B282C] border border-[#10353B] rounded-lg space-y-1">
          <div className="text-[11px] font-mono text-[#8EAAB0] uppercase">SUBSCRIBERS</div>
          <div className="text-lg font-bold text-[#F0FDFA] font-mono">27.0%</div>
          <div className="text-[10px] text-[#8EAAB0]">1,053 Members</div>
        </div>

        <div className="p-3.5 bg-[#0B282C] border border-[#10353B] rounded-lg space-y-1">
          <div className="text-[11px] font-mono text-[#8EAAB0] uppercase">AVG RATING</div>
          <div className="text-lg font-bold text-[#F59E0B] font-mono">3.75 / 5</div>
          <div className="text-[10px] text-[#8EAAB0]">Review Score</div>
        </div>
      </div>

      {/* Prominent CTA to Launch Dashboard */}
      <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#10353B]">
        <div className="text-xs font-mono text-[#8EAAB0] flex items-center gap-2">
          <Users className="w-4 h-4 text-[#00E5A3]" />
          <span>PostgreSQL Table: <code className="text-[#F0FDFA]">public.shopping_transactions</code></span>
        </div>

        <button
          onClick={onSwitchToDashboard}
          className="w-full sm:w-auto px-6 py-3 bg-[#00E5A3] hover:bg-[#34D399] text-[#041C1E] font-bold text-xs font-mono uppercase tracking-wider rounded-lg transition-all shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
        >
          <span>VIEW INTERACTIVE SHOPPING DASHBOARD</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}

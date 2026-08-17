'use client';

import React from 'react';
import { Database, BarChart3, TrendingUp, CheckCircle2, Terminal } from 'lucide-react';
import Link from 'next/link';

export default function HeroAnalyticsVisual() {
  return (
    <div className="relative overflow-hidden bg-[#071A2B] border border-[#102F45] rounded-xl p-5 sm:p-6 shadow-2xl text-[#F5F7FA] space-y-4">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-72 h-72 bg-[#FF7A18]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Status Bar */}
      <div className="flex items-center justify-between border-b border-[#102F45] pb-3 font-mono text-[11px]">
        <div className="flex items-center gap-2 text-[#FF7A18]">
          <Database className="w-3.5 h-3.5" />
          <span className="font-bold uppercase tracking-wider">// POSTGRESQL ANALYTICS ENGINE</span>
        </div>
        <span className="px-2 py-0.5 rounded bg-[#35D07F]/15 border border-[#35D07F]/30 text-[#35D07F] font-bold">
          LIVE DATASET
        </span>
      </div>

      {/* Mini KPI Highlights Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
        <div className="p-2.5 bg-[#0B2438] border border-[#102F45] rounded-lg space-y-0.5">
          <div className="text-[10px] font-mono text-[#9FB0BF] uppercase">Transactions</div>
          <div className="text-sm font-extrabold text-[#F5F7FA] font-mono">99,970</div>
        </div>
        <div className="p-2.5 bg-[#0B2438] border border-[#102F45] rounded-lg space-y-0.5">
          <div className="text-[10px] font-mono text-[#9FB0BF] uppercase">Revenue</div>
          <div className="text-sm font-extrabold text-[#FF7A18] font-mono">₹3.37B</div>
        </div>
        <div className="p-2.5 bg-[#0B2438] border border-[#102F45] rounded-lg space-y-0.5 col-span-2 sm:col-span-1">
          <div className="text-[10px] font-mono text-[#9FB0BF] uppercase">Profit Margin</div>
          <div className="text-sm font-extrabold text-[#35D07F] font-mono">31.41%</div>
        </div>
      </div>

      {/* SQL Snippet Preview Box */}
      <div className="p-3 bg-[#04121E] border border-[#102F45] rounded-lg space-y-1.5 font-mono text-[11px]">
        <div className="flex items-center justify-between text-[#9FB0BF] text-[10px]">
          <span className="flex items-center gap-1.5">
            <Terminal className="w-3 h-3 text-[#FF7A18]" />
            sales_analytics_query.sql
          </span>
          <span className="text-[#35D07F]">11 SQL QUERIES</span>
        </div>
        <pre className="text-[#9FB0BF] leading-relaxed overflow-x-auto custom-scrollbar text-[10.5px]">
          <code>
            <span className="text-[#FF7A18]">SELECT</span> category, <span className="text-[#35D07F]">COUNT</span>(*) <span className="text-[#FF7A18]">AS</span> total_orders,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#35D07F]">SUM</span>(revenue) <span className="text-[#FF7A18]">AS</span> total_revenue<br />
            <span className="text-[#FF7A18]">FROM</span> sales_transactions <span className="text-[#FF7A18]">GROUP BY</span> category;
          </code>
        </pre>
      </div>

      {/* Direct CTA link to Analytics */}
      <div className="pt-1 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#9FB0BF]">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#35D07F]" />
          <span>100% Validated Analytics Outputs</span>
        </div>
        <Link
          href="/analytics"
          className="text-xs font-mono font-bold text-[#FF7A18] hover:underline flex items-center gap-1"
        >
          Explore BI Hub →
        </Link>
      </div>
    </div>
  );
}

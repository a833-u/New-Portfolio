'use client';

import React from 'react';
import { Database, BarChart3, TrendingUp, CheckCircle2, Terminal } from 'lucide-react';
import Link from 'next/link';

export default function HeroAnalyticsVisual() {
  return (
    <div className="relative overflow-hidden bg-theme-surface border border-theme-muted rounded-xl p-5 sm:p-6 shadow-sm text-theme-main space-y-4">
      {/* Header Status Bar */}
      <div className="flex items-center justify-between border-b border-theme-muted pb-3 font-mono text-[11px]">
        <div className="flex items-center gap-2 text-theme-sage">
          <Database className="w-3.5 h-3.5" />
          <span className="font-bold uppercase tracking-wider">// POSTGRESQL ANALYTICS ENGINE</span>
        </div>
        <span className="px-2 py-0.5 rounded bg-theme-sage/15 border border-theme-sage/30 text-theme-sage font-bold">
          LIVE DATASET
        </span>
      </div>

      {/* Mini KPI Highlights Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
        <div className="p-2.5 bg-theme-soft border border-theme-muted rounded-lg space-y-0.5">
          <div className="text-[10px] font-mono text-theme-secondary uppercase">Transactions</div>
          <div className="text-sm font-extrabold text-theme-main font-mono">99,970</div>
        </div>
        <div className="p-2.5 bg-theme-soft border border-theme-muted rounded-lg space-y-0.5">
          <div className="text-[10px] font-mono text-theme-secondary uppercase">Revenue</div>
          <div className="text-sm font-extrabold text-theme-sage font-mono">₹3.37B</div>
        </div>
        <div className="p-2.5 bg-theme-soft border border-theme-muted rounded-lg space-y-0.5 col-span-2 sm:col-span-1">
          <div className="text-[10px] font-mono text-theme-secondary uppercase">Profit Margin</div>
          <div className="text-sm font-extrabold text-theme-apricot font-mono">31.41%</div>
        </div>
      </div>

      {/* SQL Snippet Preview Box */}
      <div className="p-3 bg-theme-soft/90 border border-theme-muted rounded-lg space-y-1.5 font-mono text-[11px]">
        <div className="flex items-center justify-between text-theme-secondary text-[10px]">
          <span className="flex items-center gap-1.5">
            <Terminal className="w-3 h-3 text-theme-sage" />
            sales_analytics_query.sql
          </span>
          <span className="text-theme-sage font-bold">11 SQL QUERIES</span>
        </div>
        <pre className="text-theme-secondary leading-relaxed overflow-x-auto custom-scrollbar text-[10.5px]">
          <code>
            <span className="text-theme-sage font-bold">SELECT</span> category, <span className="text-theme-apricot font-bold">COUNT</span>(*) <span className="text-theme-sage font-bold">AS</span> total_orders,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-theme-apricot font-bold">SUM</span>(revenue) <span className="text-theme-sage font-bold">AS</span> total_revenue<br />
            <span className="text-theme-sage font-bold">FROM</span> sales_transactions <span className="text-theme-sage font-bold">GROUP BY</span> category;
          </code>
        </pre>
      </div>

      {/* Direct CTA link to Analytics */}
      <div className="pt-1 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-[11px] font-mono text-theme-secondary">
          <CheckCircle2 className="w-3.5 h-3.5 text-theme-sage" />
          <span>100% Validated Analytics Outputs</span>
        </div>
        <Link
          href="/analytics"
          className="text-xs font-mono font-bold text-theme-sage hover:underline flex items-center gap-1"
        >
          Explore BI Hub →
        </Link>
      </div>
    </div>
  );
}

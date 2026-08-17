'use client';

import React from 'react';
import { Lightbulb, TrendingUp, AlertTriangle, PieChart, ShieldAlert } from 'lucide-react';
import { executiveInsightsData } from '@/data/analyticsData';

export default function ExecutiveInsightsSection() {
  return (
    <section className="space-y-6 bg-[#071A2B] border border-[#102F45] rounded-xl p-6 sm:p-8">
      <div className="space-y-1 border-b border-[#102F45] pb-4">
        <div className="flex items-center gap-2 text-xs font-mono text-[#FF7A18]">
          <Lightbulb className="w-4 h-4" />
          <span>SQL-DERIVED EXECUTIVE INSIGHTS</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-[#F5F7FA]">
          Key Business Findings & Data Insights
        </h2>
        <p className="text-xs sm:text-sm text-[#9FB0BF]">
          Executive summary derived directly from the PostgreSQL 99,970 transaction analysis.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {executiveInsightsData.map(insight => {
          const isCritical = insight.impactLevel === 'Critical';
          return (
            <div
              key={insight.id}
              className="p-5 bg-[#0B2438] border border-[#102F45] hover:border-[#FF7A18]/50 rounded-xl space-y-3 transition-all flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF7A18] font-bold">
                    // {insight.category}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold border ${
                      isCritical
                        ? 'bg-[#FF5C5C]/20 text-[#FF5C5C] border-[#FF5C5C]/30'
                        : 'bg-[#FF7A18]/20 text-[#FF7A18] border-[#FF7A18]/30'
                    }`}
                  >
                    {insight.impactLevel} Impact
                  </span>
                </div>

                <h3 className="text-sm font-bold text-[#F5F7FA] leading-snug">
                  {insight.title}
                </h3>

                <div className="p-2.5 bg-[#071A2B] border border-[#102F45] rounded-lg text-xs font-mono font-bold text-[#35D07F]">
                  {insight.metric}
                </div>

                <p className="text-xs text-[#9FB0BF] leading-relaxed">
                  {insight.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

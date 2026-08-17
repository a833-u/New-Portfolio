'use client';

import React from 'react';
import { Lightbulb, Target } from 'lucide-react';
import { shoppingExecutiveInsights, shoppingRecommendations } from '@/data/shoppingBehaviorData';

export function ShoppingInsights() {
  return (
    <section className="space-y-6 bg-[#041C1E] border border-[#10353B] rounded-xl p-6 sm:p-8">
      <div className="space-y-1 border-b border-[#10353B] pb-4">
        <div className="flex items-center gap-2 text-xs font-mono text-[#00E5A3]">
          <Lightbulb className="w-4 h-4" />
          <span>CUSTOMER BEHAVIOR INSIGHTS</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-[#F0FDFA]">
          Key Findings & Behavioral Patterns
        </h2>
        <p className="text-xs sm:text-sm text-[#8EAAB0]">
          Derived directly from 3,900 customer order histories and PostgreSQL RFM segmentation modeling.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {shoppingExecutiveInsights.map(insight => {
          const isCritical = insight.impactLevel === 'Critical';
          return (
            <div
              key={insight.id}
              className="p-5 bg-[#0B282C] border border-[#10353B] hover:border-[#00E5A3]/50 rounded-xl space-y-3 transition-all flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#00E5A3] font-bold">
                    // {insight.category}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold border ${
                      isCritical
                        ? 'bg-[#FF5C5C]/20 text-[#FF5C5C] border-[#FF5C5C]/30'
                        : 'bg-[#00E5A3]/20 text-[#00E5A3] border-[#00E5A3]/30'
                    }`}
                  >
                    {insight.impactLevel} Impact
                  </span>
                </div>

                <h3 className="text-sm font-bold text-[#F0FDFA] leading-snug">
                  {insight.title}
                </h3>

                <div className="p-2.5 bg-[#041C1E] border border-[#10353B] rounded-lg text-xs font-mono font-bold text-[#00E5A3]">
                  {insight.metric}
                </div>

                <p className="text-xs text-[#8EAAB0] leading-relaxed">
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

export function ShoppingRecommendations() {
  return (
    <section className="space-y-6 bg-[#041C1E] border border-[#10353B] rounded-xl p-6 sm:p-8">
      <div className="space-y-1 border-b border-[#10353B] pb-4">
        <div className="flex items-center gap-2 text-xs font-mono text-[#00E5A3]">
          <Target className="w-4 h-4" />
          <span>ACTIONABLE RETENTION STRATEGY</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-[#F0FDFA]">
          Strategic Customer Growth Recommendations
        </h2>
        <p className="text-xs sm:text-sm text-[#8EAAB0]">
          5 concrete, data-backed operational actions for customer lifecycle optimization.
        </p>
      </div>

      <div className="space-y-4">
        {shoppingRecommendations.map(rec => (
          <div
            key={rec.id}
            className="p-5 bg-[#0B282C] border border-[#10353B] rounded-xl space-y-3 hover:border-[#00E5A3]/40 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#10353B] pb-3">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded bg-[#00E5A3] text-[#041C1E] text-xs font-mono font-bold flex items-center justify-center shrink-0">
                  0{rec.id}
                </span>
                <h3 className="text-base font-bold text-[#F0FDFA]">
                  {rec.title}
                </h3>
              </div>

              <span
                className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase self-start sm:self-auto border ${
                  rec.priority === 'Immediate'
                    ? 'bg-[#FF5C5C]/20 text-[#FF5C5C] border-[#FF5C5C]/30'
                    : rec.priority === 'High'
                    ? 'bg-[#00E5A3]/20 text-[#00E5A3] border-[#00E5A3]/30'
                    : 'bg-[#38BDF8]/20 text-[#38BDF8] border-[#38BDF8]/30'
                }`}
              >
                {rec.priority} Priority
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono pt-1">
              <div className="p-3 bg-[#041C1E] border border-[#10353B] rounded-lg space-y-1">
                <span className="text-[#F59E0B] font-semibold block text-[11px]">DATA FINDING:</span>
                <p className="text-[#8EAAB0] leading-relaxed font-sans">{rec.finding}</p>
              </div>

              <div className="p-3 bg-[#041C1E] border border-[#10353B] rounded-lg space-y-1">
                <span className="text-[#00E5A3] font-semibold block text-[11px]">STRATEGIC ACTION & RATIONALE:</span>
                <p className="text-[#F0FDFA] leading-relaxed font-sans">{rec.businessRationale}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

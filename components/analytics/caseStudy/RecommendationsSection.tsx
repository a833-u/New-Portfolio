'use client';

import React from 'react';
import { Target, AlertCircle, ArrowUpRight } from 'lucide-react';
import { strategicRecommendationsData } from '@/data/analyticsData';

export default function RecommendationsSection() {
  return (
    <section className="space-y-6 bg-[#071A2B] border border-[#102F45] rounded-xl p-6 sm:p-8">
      <div className="space-y-1 border-b border-[#102F45] pb-4">
        <div className="flex items-center gap-2 text-xs font-mono text-[#35D07F]">
          <Target className="w-4 h-4" />
          <span>ACTIONABLE BUSINESS STRATEGY</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-[#F5F7FA]">
          Strategic Business Recommendations
        </h2>
        <p className="text-xs sm:text-sm text-[#9FB0BF]">
          5 concrete, data-backed operational actions for management derived directly from analytical findings.
        </p>
      </div>

      <div className="space-y-4">
        {strategicRecommendationsData.map(rec => (
          <div
            key={rec.id}
            className="p-5 bg-[#0B2438] border border-[#102F45] rounded-xl space-y-3 hover:border-[#35D07F]/40 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#102F45] pb-3">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded bg-[#FF7A18] text-[#071A2B] text-xs font-mono font-bold flex items-center justify-center shrink-0">
                  0{rec.id}
                </span>
                <h3 className="text-base font-bold text-[#F5F7FA]">
                  {rec.title}
                </h3>
              </div>

              <span
                className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase self-start sm:self-auto border ${
                  rec.priority === 'Immediate'
                    ? 'bg-[#FF5C5C]/20 text-[#FF5C5C] border-[#FF5C5C]/30'
                    : rec.priority === 'High'
                    ? 'bg-[#FF7A18]/20 text-[#FF7A18] border-[#FF7A18]/30'
                    : 'bg-[#35D07F]/20 text-[#35D07F] border-[#35D07F]/30'
                }`}
              >
                {rec.priority} Priority
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono pt-1">
              <div className="p-3 bg-[#071A2B] border border-[#102F45] rounded-lg space-y-1">
                <span className="text-[#FFC857] font-semibold block text-[11px]">DATA FINDING:</span>
                <p className="text-[#9FB0BF] leading-relaxed font-sans">{rec.finding}</p>
              </div>

              <div className="p-3 bg-[#071A2B] border border-[#102F45] rounded-lg space-y-1">
                <span className="text-[#35D07F] font-semibold block text-[11px]">STRATEGIC ACTION & RATIONALE:</span>
                <p className="text-[#F5F7FA] leading-relaxed font-sans">{rec.businessRationale}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

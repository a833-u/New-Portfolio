'use client';

import React from 'react';
import { Award, Zap } from 'lucide-react';
import { categoryPerformanceData } from '@/data/analyticsData';
import { formatCurrency, formatNumber } from '@/services/analyticsService';

export default function CategoryPerformanceChart() {
  const maxRev = Math.max(...categoryPerformanceData.map(c => c.revenue));

  return (
    <div className="bg-[#102F45] border border-[#102F45] rounded-xl p-5 space-y-5 shadow-lg text-[#F5F7FA]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#0B2438] pb-3">
        <div>
          <span className="text-[10px] font-mono text-[#FF7A18] uppercase tracking-widest font-bold">
            // CATEGORY SALES & PROFITABILITY
          </span>
          <h2 className="text-lg font-bold text-[#F5F7FA]">
            Revenue by Product Category & Margin Highlights
          </h2>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-[#35D07F]">
          <Award className="w-4 h-4 text-[#FFC857]" />
          <span>Office Supplies Margin Leader (35.24%)</span>
        </div>
      </div>

      {/* Modern Horizontal Bar Chart */}
      <div className="space-y-4">
        {categoryPerformanceData.map((cat, idx) => {
          const revPct = (cat.revenue / maxRev) * 100;
          const isHighestMargin = cat.isMarginLeader;
          const isHighestRevenue = cat.isRevenueLeader;

          return (
            <div key={cat.category} className="space-y-1.5">
              <div className="flex flex-wrap items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#F5F7FA]">{cat.category}</span>
                  {isHighestRevenue && (
                    <span className="px-1.5 py-0.5 rounded text-[9px] bg-[#FF7A18] text-[#071A2B] font-bold">
                      REVENUE LEADER
                    </span>
                  )}
                  {isHighestMargin && (
                    <span className="px-1.5 py-0.5 rounded text-[9px] bg-[#35D07F] text-[#071A2B] font-bold">
                      HIGHEST MARGIN (35.24%)
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-4 text-[11px]">
                  <span className="text-[#9FB0BF]">{formatNumber(cat.orders)} Orders</span>
                  <span className="text-[#35D07F] font-bold">{cat.profitMarginPct.toFixed(2)}% Margin</span>
                  <span className="font-bold text-[#FF7A18]">{formatCurrency(cat.revenue)}</span>
                </div>
              </div>

              {/* Progress Bar Container */}
              <div className="w-full h-3 bg-[#0B2438] rounded-full overflow-hidden relative">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    isHighestMargin
                      ? 'bg-gradient-to-r from-[#FF7A18] to-[#35D07F]'
                      : 'bg-[#FF7A18]'
                  }`}
                  style={{ width: `${revPct}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Analytical Callout Banner */}
      <div className="p-3.5 bg-[#0B2438] border border-[#35D07F]/40 rounded-lg text-xs font-mono text-[#F5F7FA] flex items-start gap-3">
        <Zap className="w-4 h-4 text-[#35D07F] shrink-0 mt-0.5" />
        <div>
          <span className="text-[#35D07F] font-bold">KEY CATEGORY INSIGHT: </span>
          <span>Office Supplies generates lower top-line revenue (₹158.4M) but retains the portfolio’s highest profit margin at <strong>35.24%</strong> (compared to Appliances at 28.00%). Protecting and expanding high-margin accessories and supplies boosts net portfolio profit.</span>
        </div>
      </div>
    </div>
  );
}

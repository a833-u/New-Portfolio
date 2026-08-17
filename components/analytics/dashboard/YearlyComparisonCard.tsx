'use client';

import React from 'react';
import { Calendar, AlertCircle } from 'lucide-react';
import { yearlyPerformanceData } from '@/data/analyticsData';
import { formatCurrency, formatNumber } from '@/services/analyticsService';

export default function YearlyComparisonCard() {
  return (
    <div className="bg-[#102F45] border border-[#102F45] rounded-xl p-5 space-y-4 shadow-lg text-[#F5F7FA]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#0B2438] pb-3">
        <div>
          <span className="text-[10px] font-mono text-[#FF7A18] uppercase tracking-widest font-bold">
            // ANNUAL COMPARISON
          </span>
          <h2 className="text-lg font-bold text-[#F5F7FA]">
            Yearly Sales & Profitability Breakdown
          </h2>
        </div>

        <div className="flex items-center gap-1.5 text-xs font-mono text-[#FFC857] bg-[#FFC857]/10 px-2.5 py-1 rounded border border-[#FFC857]/30">
          <AlertCircle className="w-3.5 h-3.5" />
          <span>Note: 2026 contains Jan–Jun (6 Months YTD)</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {yearlyPerformanceData.map(y => (
          <div
            key={y.year}
            className={`p-4 rounded-xl border space-y-2.5 transition-all ${
              y.isYTD
                ? 'bg-[#071A2B] border-[#FF7A18] shadow-md'
                : 'bg-[#0B2438] border-[#102F45]'
            }`}
          >
            <div className="flex items-center justify-between border-b border-[#102F45] pb-2">
              <span className="text-sm font-bold font-mono text-[#F5F7FA]">
                {y.periodLabel}
              </span>
              {y.isYTD && (
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#FF7A18] text-[#071A2B] font-bold">
                  YTD 6M
                </span>
              )}
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <div>
                <span className="text-[10px] text-[#9FB0BF] block">REVENUE</span>
                <span className="font-bold text-[#FF7A18]">{formatCurrency(y.revenue)}</span>
              </div>
              <div>
                <span className="text-[10px] text-[#9FB0BF] block">PROFIT</span>
                <span className="font-bold text-[#35D07F]">{formatCurrency(y.profit)}</span>
              </div>
              <div>
                <span className="text-[10px] text-[#9FB0BF] block">MARGIN</span>
                <span className="font-bold text-[#F5F7FA]">{y.profitMarginPct.toFixed(2)}%</span>
              </div>
              <div>
                <span className="text-[10px] text-[#9FB0BF] block">ORDERS</span>
                <span className="font-bold text-[#9FB0BF]">{formatNumber(y.orders)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

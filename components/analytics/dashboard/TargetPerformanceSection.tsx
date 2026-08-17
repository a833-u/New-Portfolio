'use client';

import React from 'react';
import { Target, AlertTriangle } from 'lucide-react';
import { targetPerformanceData } from '@/data/analyticsData';
import { formatNumber } from '@/services/analyticsService';

export default function TargetPerformanceSection() {
  return (
    <div className="bg-[#102F45] border border-[#102F45] rounded-xl p-5 space-y-5 shadow-lg text-[#F5F7FA]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#0B2438] pb-3">
        <div>
          <span className="text-[10px] font-mono text-[#FF5C5C] uppercase tracking-widest font-bold flex items-center gap-1">
            <AlertTriangle className="w-3 h-3" />
            // CRITICAL BUSINESS FINDING
          </span>
          <h2 className="text-lg font-bold text-[#F5F7FA]">
            Sales Target Performance Analysis (Transaction-Level)
          </h2>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-[#FF5C5C] bg-[#FF5C5C]/10 px-3 py-1 rounded border border-[#FF5C5C]/30">
          <Target className="w-4 h-4" />
          <span>Overall Hit Rate: 6.28%</span>
        </div>
      </div>

      {/* Overview Stat Callouts */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="p-4 bg-[#0B2438] border border-[#102F45] rounded-lg">
          <span className="text-[10px] font-mono text-[#9FB0BF] uppercase">TRANSACTIONS ANALYZED</span>
          <div className="text-xl font-bold font-mono text-[#F5F7FA] mt-1">
            {formatNumber(targetPerformanceData.totalTransactions)}
          </div>
          <span className="text-[10px] text-[#9FB0BF] font-mono">100% Evaluated</span>
        </div>

        <div className="p-4 bg-[#0B2438] border border-[#102F45] rounded-lg">
          <span className="text-[10px] font-mono text-[#9FB0BF] uppercase">MET TARGET (GROSS &gt;= TARGET)</span>
          <div className="text-xl font-bold font-mono text-[#35D07F] mt-1">
            {formatNumber(targetPerformanceData.metTargetCount)}
          </div>
          <span className="text-[10px] text-[#35D07F] font-mono">6.28% Hit Rate</span>
        </div>

        <div className="p-4 bg-[#0B2438] border border-[#102F45] rounded-lg">
          <span className="text-[10px] font-mono text-[#9FB0BF] uppercase">BELOW TARGET</span>
          <div className="text-xl font-bold font-mono text-[#FF5C5C] mt-1">
            {formatNumber(targetPerformanceData.belowTargetCount)}
          </div>
          <span className="text-[10px] text-[#FF5C5C] font-mono">93.72% Miss Rate</span>
        </div>
      </div>

      {/* Target Level Bands Breakdown */}
      <div className="space-y-3">
        <div className="text-xs font-mono text-[#9FB0BF] uppercase tracking-wider">
          TARGET BAND HIT RATE BREAKDOWN
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5">
          {targetPerformanceData.bands.map(band => (
            <div key={band.targetLabel} className="p-3 bg-[#0B2438] border border-[#102F45] rounded-lg space-y-1.5 text-center">
              <div className="text-xs font-bold font-mono text-[#F5F7FA]">{band.targetLabel}</div>
              <div className="text-lg font-extrabold font-mono text-[#FF7A18]">{band.hitRatePct.toFixed(2)}%</div>
              <div className="text-[10px] text-[#9FB0BF] font-mono">{formatNumber(band.transactions)} Orders</div>
            </div>
          ))}
        </div>
      </div>

      {/* Analytical Interpretation Callout */}
      <div className="p-3.5 bg-[#0B2438] border border-[#FF5C5C]/40 rounded-lg text-xs font-mono text-[#F5F7FA]">
        <span className="text-[#FF5C5C] font-bold">ANALYTICAL INTERPRETATION: </span>
        <span>Higher sales targets are associated with substantially lower transaction-level target hit rates in this dataset (falling from 10.97% at ₹80K to 1.94% at ₹300K). This indicates that transaction target thresholds require recalibration relative to actual order sizes.</span>
      </div>
    </div>
  );
}

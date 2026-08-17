'use client';

import React from 'react';
import { Users, Globe } from 'lucide-react';
import { segmentPerformanceData, regionalPerformanceData } from '@/data/analyticsData';
import { formatCurrency, formatNumber } from '@/services/analyticsService';

export default function SegmentRegionGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Customer Segment Breakdown */}
      <div className="bg-[#102F45] border border-[#102F45] rounded-xl p-5 space-y-4 shadow-lg text-[#F5F7FA]">
        <div className="flex items-center justify-between border-b border-[#0B2438] pb-3">
          <div>
            <span className="text-[10px] font-mono text-[#FF7A18] uppercase tracking-widest font-bold">
              // CUSTOMER PROFILING
            </span>
            <h2 className="text-base font-bold text-[#F5F7FA]">
              Customer Segment Performance
            </h2>
          </div>
          <Users className="w-4 h-4 text-[#FF7A18]" />
        </div>

        <div className="space-y-2.5">
          {segmentPerformanceData.map(seg => (
            <div key={seg.segment} className="p-3 bg-[#0B2438] border border-[#102F45] rounded-lg space-y-1">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-[#F5F7FA]">{seg.segment}</span>
                <span className="text-[#FF7A18] font-bold">{formatCurrency(seg.revenue)}</span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-[11px] font-mono text-[#9FB0BF] pt-1">
                <div>Orders: <strong className="text-[#F5F7FA]">{formatNumber(seg.orders)}</strong></div>
                <div>Margin: <strong className="text-[#35D07F]">{seg.profitMarginPct.toFixed(2)}%</strong></div>
                <div>AOV: <strong className="text-[#FF9A3D]">₹{(seg.avgOrderValue / 1000).toFixed(1)}K</strong></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Regional Performance Matrix */}
      <div className="bg-[#102F45] border border-[#102F45] rounded-xl p-5 space-y-4 shadow-lg text-[#F5F7FA]">
        <div className="flex items-center justify-between border-b border-[#0B2438] pb-3">
          <div>
            <span className="text-[10px] font-mono text-[#FF7A18] uppercase tracking-widest font-bold">
              // TERRITORY METRICS
            </span>
            <h2 className="text-base font-bold text-[#F5F7FA]">
              Regional Sales Distribution
            </h2>
          </div>
          <Globe className="w-4 h-4 text-[#35D07F]" />
        </div>

        <div className="space-y-2.5">
          {regionalPerformanceData.map(reg => (
            <div key={reg.region} className="p-3 bg-[#0B2438] border border-[#102F45] rounded-lg space-y-1">
              <div className="flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#F5F7FA]">{reg.region} Region</span>
                  {reg.region === 'West' && (
                    <span className="px-1.5 py-0.5 rounded text-[9px] bg-[#FF7A18] text-[#071A2B] font-bold">
                      TOP REVENUE
                    </span>
                  )}
                </div>
                <span className="text-[#FF7A18] font-bold">{formatCurrency(reg.revenue)}</span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-[11px] font-mono text-[#9FB0BF] pt-1">
                <div>Orders: <strong className="text-[#F5F7FA]">{formatNumber(reg.orders)}</strong></div>
                <div>Units: <strong className="text-[#F5F7FA]">{formatNumber(reg.quantity)}</strong></div>
                <div>Margin: <strong className="text-[#35D07F]">{reg.profitMarginPct.toFixed(2)}%</strong></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

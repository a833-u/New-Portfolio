'use client';

import React from 'react';
import { Package, TrendingUp, TrendingDown } from 'lucide-react';
import { topProductsByRevenue, bottomProductsByRevenue } from '@/data/analyticsData';
import { formatCurrency, formatNumber } from '@/services/analyticsService';

export default function ProductPerformanceSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Top Revenue Products */}
      <div className="bg-[#102F45] border border-[#102F45] rounded-xl p-5 space-y-4 shadow-lg text-[#F5F7FA]">
        <div className="flex items-center justify-between border-b border-[#0B2438] pb-3">
          <div>
            <span className="text-[10px] font-mono text-[#35D07F] uppercase tracking-widest font-bold">
              // REVENUE LEADERS
            </span>
            <h2 className="text-base font-bold text-[#F5F7FA]">
              Top Revenue Generating Products
            </h2>
          </div>
          <TrendingUp className="w-4 h-4 text-[#35D07F]" />
        </div>

        <div className="space-y-2">
          {topProductsByRevenue.map((p, idx) => (
            <div key={p.id} className="p-3 bg-[#0B2438] border border-[#102F45] rounded-lg space-y-1">
              <div className="flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded bg-[#FF7A18] text-[#071A2B] font-bold text-[10px] flex items-center justify-center">
                    0{idx + 1}
                  </span>
                  <span className="font-bold text-[#F5F7FA]">{p.id} — {p.name}</span>
                </div>
                <span className="text-[#FF7A18] font-bold">{formatCurrency(p.revenue)}</span>
              </div>

              <div className="flex justify-between text-[11px] font-mono text-[#9FB0BF]">
                <span>Profit: <strong className="text-[#35D07F]">{formatCurrency(p.profit)}</strong></span>
                <span>Margin: <strong className="text-[#F5F7FA]">{p.profitMarginPct.toFixed(2)}%</strong></span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Revenue Products */}
      <div className="bg-[#102F45] border border-[#102F45] rounded-xl p-5 space-y-4 shadow-lg text-[#F5F7FA]">
        <div className="flex items-center justify-between border-b border-[#0B2438] pb-3">
          <div>
            <span className="text-[10px] font-mono text-[#FF5C5C] uppercase tracking-widest font-bold">
              // LOW REVENUE ITEMS
            </span>
            <h2 className="text-base font-bold text-[#F5F7FA]">
              Lowest Revenue Generating Products
            </h2>
          </div>
          <TrendingDown className="w-4 h-4 text-[#FF5C5C]" />
        </div>

        <div className="space-y-2">
          {bottomProductsByRevenue.map((p, idx) => (
            <div key={p.id} className="p-3 bg-[#0B2438] border border-[#102F45] rounded-lg space-y-1">
              <div className="flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded bg-[#102F45] text-[#9FB0BF] font-bold text-[10px] flex items-center justify-center">
                    0{idx + 1}
                  </span>
                  <span className="font-bold text-[#F5F7FA]">{p.id} — {p.name}</span>
                </div>
                <span className="text-[#FF5C5C] font-bold">{formatCurrency(p.revenue)}</span>
              </div>

              <div className="flex justify-between text-[11px] font-mono text-[#9FB0BF]">
                <span>Profit: <strong className="text-[#35D07F]">{formatCurrency(p.profit)}</strong></span>
                <span>Margin: <strong className="text-[#F5F7FA]">{p.profitMarginPct.toFixed(2)}%</strong></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

'use client';

import React from 'react';
import { TrendingDown, CreditCard, Info } from 'lucide-react';
import { discountPerformanceData, paymentPerformanceData } from '@/data/analyticsData';
import { formatCurrency, formatNumber } from '@/services/analyticsService';

export function DiscountMarginAnalysis() {
  return (
    <div className="bg-[#102F45] border border-[#102F45] rounded-xl p-5 space-y-4 shadow-lg text-[#F5F7FA]">
      <div className="flex items-center justify-between border-b border-[#0B2438] pb-3">
        <div>
          <span className="text-[10px] font-mono text-[#FF7A18] uppercase tracking-widest font-bold">
            // DISCOUNTING IMPACT
          </span>
          <h2 className="text-base font-bold text-[#F5F7FA]">
            Discount Band vs Profitability Margin
          </h2>
        </div>
        <TrendingDown className="w-4 h-4 text-[#FF5C5C]" />
      </div>

      <div className="space-y-3">
        {discountPerformanceData.map(band => (
          <div key={band.band} className="p-3 bg-[#0B2438] border border-[#102F45] rounded-lg space-y-1.5">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="font-bold text-[#F5F7FA]">Discount Band: {band.band}</span>
              <span className={`font-bold ${band.profitMarginPct < 25 ? 'text-[#FF5C5C]' : 'text-[#35D07F]'}`}>
                {band.profitMarginPct.toFixed(2)}% Margin
              </span>
            </div>

            <div className="w-full h-2 bg-[#071A2B] rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full ${
                  band.profitMarginPct < 25 ? 'bg-[#FF5C5C]' : 'bg-[#FF7A18]'
                }`}
                style={{ width: `${(band.profitMarginPct / 40) * 100}%` }}
              />
            </div>

            <div className="flex justify-between text-[10px] font-mono text-[#9FB0BF] pt-0.5">
              <span>{formatNumber(band.orders)} Orders</span>
              <span>{band.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PaymentMethodBreakdown() {
  return (
    <div className="bg-[#102F45] border border-[#102F45] rounded-xl p-5 space-y-4 shadow-lg text-[#F5F7FA]">
      <div className="flex items-center justify-between border-b border-[#0B2438] pb-3">
        <div>
          <span className="text-[10px] font-mono text-[#FF7A18] uppercase tracking-widest font-bold">
            // PAYMENT CHANNELS
          </span>
          <h2 className="text-base font-bold text-[#F5F7FA]">
            Payment Method Distribution
          </h2>
        </div>
        <CreditCard className="w-4 h-4 text-[#35D07F]" />
      </div>

      <div className="space-y-2">
        {paymentPerformanceData.map(pm => (
          <div key={pm.method} className="p-3 bg-[#0B2438] border border-[#102F45] rounded-lg space-y-1">
            <div className="flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="font-bold text-[#F5F7FA]">{pm.displayMethod}</span>
                {pm.rawMethod === 'Unkown' && (
                  <span className="px-1.5 py-0.5 rounded text-[9px] bg-[#FFC857]/20 text-[#FFC857] border border-[#FFC857]/30">
                    Mapped from &quot;Unkown&quot;
                  </span>
                )}
              </div>
              <span className="text-[#FF7A18] font-bold">{formatCurrency(pm.revenue)}</span>
            </div>

            <div className="flex justify-between text-[11px] font-mono text-[#9FB0BF]">
              <span>{formatNumber(pm.transactions)} Transactions</span>
              <span>Margin: <strong className="text-[#35D07F]">{pm.profitMarginPct.toFixed(2)}%</strong></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

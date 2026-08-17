'use client';

import React from 'react';
import { DollarSign, TrendingUp, Percent, ShoppingCart, Package, Target } from 'lucide-react';
import { KPIMetrics } from '@/types/analytics';
import { formatCurrency, formatNumber } from '@/services/analyticsService';

interface KPISummaryGridProps {
  metrics: KPIMetrics;
}

export default function KPISummaryGrid({ metrics }: KPISummaryGridProps) {
  const cards = [
    {
      title: 'TOTAL REVENUE',
      value: formatCurrency(metrics.totalRevenue),
      subtext: `₹${(metrics.totalRevenue / 1000000000).toFixed(3)}B Total`,
      icon: DollarSign,
      accentColor: 'border-l-4 border-l-[#FF7A18]',
      badgeColor: 'text-[#FF7A18] bg-[#FF7A18]/10'
    },
    {
      title: 'TOTAL PROFIT',
      value: formatCurrency(metrics.totalProfit),
      subtext: `₹${(metrics.totalProfit / 1000000000).toFixed(3)}B Net`,
      icon: TrendingUp,
      accentColor: 'border-l-4 border-l-[#35D07F]',
      badgeColor: 'text-[#35D07F] bg-[#35D07F]/10'
    },
    {
      title: 'PROFIT MARGIN',
      value: `${metrics.profitMarginPct.toFixed(2)}%`,
      subtext: 'Overall Portfolio Retention',
      icon: Percent,
      accentColor: 'border-l-4 border-l-[#F5F7FA]',
      badgeColor: 'text-[#F5F7FA] bg-[#102F45]'
    },
    {
      title: 'TOTAL ORDERS',
      value: formatNumber(metrics.totalTransactions),
      subtext: '99,970 Validated Rows',
      icon: ShoppingCart,
      accentColor: 'border-l-4 border-l-[#FF9A3D]',
      badgeColor: 'text-[#FF9A3D] bg-[#FF9A3D]/10'
    },
    {
      title: 'TOTAL QUANTITY',
      value: formatNumber(metrics.totalQuantity),
      subtext: '339,217 Units Sold',
      icon: Package,
      accentColor: 'border-l-4 border-l-[#9FB0BF]',
      badgeColor: 'text-[#9FB0BF] bg-[#102F45]'
    },
    {
      title: 'AVG ORDER VALUE',
      value: `₹${(metrics.averageOrderValue / 1000).toFixed(2)}K`,
      subtext: `₹${metrics.averageOrderValue.toFixed(2)} Mean`,
      icon: Target,
      accentColor: 'border-l-4 border-l-[#FF7A18]',
      badgeColor: 'text-[#FF7A18] bg-[#FF7A18]/10'
    }
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
      {cards.map((card, idx) => {
        const Icon = card.icon;
        return (
          <div
            key={idx}
            className={`p-4 bg-[#102F45] border border-[#102F45] hover:border-[#FF7A18]/40 rounded-xl space-y-2 transition-all shadow-md ${card.accentColor}`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-[#9FB0BF] uppercase tracking-wider font-bold">
                {card.title}
              </span>
              <div className={`p-1.5 rounded-lg ${card.badgeColor}`}>
                <Icon className="w-3.5 h-3.5" />
              </div>
            </div>

            <div className="text-xl sm:text-2xl font-extrabold font-mono text-[#F5F7FA]">
              {card.value}
            </div>

            <div className="text-[10px] text-[#9FB0BF] font-mono">
              {card.subtext}
            </div>
          </div>
        );
      })}
    </div>
  );
}

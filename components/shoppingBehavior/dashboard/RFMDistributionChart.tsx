'use client';

import React from 'react';
import { Award, Zap, Tag } from 'lucide-react';
import { rfmSegmentationData, shoppingCategoryData, subscriptionImpactData } from '@/data/shoppingBehaviorData';
import { formatUSD } from '@/services/shoppingBehaviorService';

export function RFMDistributionChart() {
  return (
    <div className="bg-[#102F45] border border-[#102F45] rounded-xl p-5 space-y-4 shadow-lg text-[#F5F7FA]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#0B2438] pb-3">
        <div>
          <span className="text-[10px] font-mono text-[#FF7A18] uppercase tracking-widest font-bold">
            // RFM CUSTOMER SEGMENTATION
          </span>
          <h2 className="text-lg font-bold text-[#F5F7FA]">
            Recency, Frequency & Monetary Value Matrix
          </h2>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-[#35D07F]">
          <Award className="w-4 h-4 text-[#FFC857]" />
          <span>Champions Drive 54% Revenue</span>
        </div>
      </div>

      <div className="space-y-3">
        {rfmSegmentationData.map(rfm => (
          <div key={rfm.segment} className="p-4 bg-[#0B2438] border border-[#102F45] rounded-lg space-y-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="font-bold text-[#F5F7FA]">{rfm.segment}</span>
                <span className="text-[#9FB0BF]">({rfm.customerCount} Customers · {rfm.customerPct}%)</span>
              </div>
              <span className="text-[#FF7A18] font-bold">{formatUSD(rfm.totalRevenue)}</span>
            </div>

            <div className="w-full h-2.5 bg-[#071A2B] rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full ${
                  rfm.segment.includes('Champions')
                    ? 'bg-gradient-to-r from-[#FF7A18] to-[#35D07F]'
                    : 'bg-[#FF7A18]'
                }`}
                style={{ width: `${rfm.customerPct * 2.5}%` }}
              />
            </div>

            <div className="grid grid-cols-3 gap-2 text-[11px] font-mono text-[#9FB0BF] pt-1 border-t border-[#102F45]/60">
              <div>Avg Spend: <strong className="text-[#35D07F]">${rfm.avgSpend.toFixed(2)}</strong></div>
              <div>Avg Orders: <strong className="text-[#F5F7FA]">{rfm.avgFrequency}</strong></div>
              <div>Recency: <strong className="text-[#FF9A3D]">{rfm.avgRecencyDays} Days</strong></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CategorySubscriptionGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Category Performance */}
      <div className="bg-[#102F45] border border-[#102F45] rounded-xl p-5 space-y-4 shadow-lg text-[#F5F7FA]">
        <div className="flex items-center justify-between border-b border-[#0B2438] pb-3">
          <div>
            <span className="text-[10px] font-mono text-[#FF7A18] uppercase tracking-widest font-bold">
              // CATEGORY BREAKDOWN
            </span>
            <h2 className="text-base font-bold text-[#F5F7FA]">
              Retail Category Revenue & Ratings
            </h2>
          </div>
          <Zap className="w-4 h-4 text-[#FF7A18]" />
        </div>

        <div className="space-y-2.5">
          {shoppingCategoryData.map(cat => (
            <div key={cat.category} className="p-3 bg-[#0B2438] border border-[#102F45] rounded-lg space-y-1">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-[#F5F7FA]">{cat.category} ({cat.popularItem})</span>
                <span className="text-[#FF7A18] font-bold">{formatUSD(cat.totalRevenue)}</span>
              </div>

              <div className="flex justify-between text-[11px] font-mono text-[#9FB0BF]">
                <span>{cat.itemsPurchased.toLocaleString()} Items</span>
                <span>Avg Price: <strong className="text-[#F5F7FA]">${cat.avgPrice.toFixed(2)}</strong></span>
                <span>Rating: <strong className="text-[#FFC857]">{cat.avgRating} ★</strong></span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subscription Impact */}
      <div className="bg-[#102F45] border border-[#102F45] rounded-xl p-5 space-y-4 shadow-lg text-[#F5F7FA]">
        <div className="flex items-center justify-between border-b border-[#0B2438] pb-3">
          <div>
            <span className="text-[10px] font-mono text-[#35D07F] uppercase tracking-widest font-bold">
              // MEMBERSHIP UPLIFT
            </span>
            <h2 className="text-base font-bold text-[#F5F7FA]">
              Subscription Membership LTV Comparison
            </h2>
          </div>
          <Tag className="w-4 h-4 text-[#35D07F]" />
        </div>

        <div className="space-y-3">
          {subscriptionImpactData.map(sub => (
            <div key={sub.status} className="p-4 bg-[#0B2438] border border-[#102F45] rounded-lg space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-[#F5F7FA]">{sub.status} ({sub.customerCount} Customers)</span>
                <span className="text-[#35D07F] font-bold">{formatUSD(sub.totalRevenue)}</span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono text-[#9FB0BF] pt-1">
                <div>Avg Order Spend: <strong className="text-[#FF7A18]">${sub.avgSpend.toFixed(2)}</strong></div>
                <div>Avg Orders / Year: <strong className="text-[#35D07F]">{sub.avgOrders}</strong></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

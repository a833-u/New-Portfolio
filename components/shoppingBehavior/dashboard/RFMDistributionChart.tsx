'use client';

import React from 'react';
import { Award, Zap, Tag } from 'lucide-react';
import { rfmSegmentationData, shoppingCategoryData, subscriptionImpactData } from '@/data/shoppingBehaviorData';
import { formatUSD } from '@/services/shoppingBehaviorService';

export function RFMDistributionChart() {
  return (
    <div className="bg-[#10353B] border border-[#10353B] rounded-xl p-5 space-y-4 shadow-lg text-[#F0FDFA]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#0B282C] pb-3">
        <div>
          <span className="text-[10px] font-mono text-[#00E5A3] uppercase tracking-widest font-bold">
            // RFM CUSTOMER SEGMENTATION
          </span>
          <h2 className="text-lg font-bold text-[#F0FDFA]">
            Recency, Frequency & Monetary Value Matrix
          </h2>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-[#00E5A3]">
          <Award className="w-4 h-4 text-[#F59E0B]" />
          <span>Champions Drive 54% Revenue</span>
        </div>
      </div>

      <div className="space-y-3">
        {rfmSegmentationData.map(rfm => (
          <div key={rfm.segment} className="p-4 bg-[#0B282C] border border-[#10353B] rounded-lg space-y-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="font-bold text-[#F0FDFA]">{rfm.segment}</span>
                <span className="text-[#8EAAB0]">({rfm.customerCount} Customers · {rfm.customerPct}%)</span>
              </div>
              <span className="text-[#00E5A3] font-bold">{formatUSD(rfm.totalRevenue)}</span>
            </div>

            <div className="w-full h-2.5 bg-[#041C1E] rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full ${
                  rfm.segment.includes('Champions')
                    ? 'bg-gradient-to-r from-[#00E5A3] to-[#38BDF8]'
                    : 'bg-[#00E5A3]'
                }`}
                style={{ width: `${rfm.customerPct * 2.5}%` }}
              />
            </div>

            <div className="grid grid-cols-3 gap-2 text-[11px] font-mono text-[#8EAAB0] pt-1 border-t border-[#10353B]/60">
              <div>Avg Spend: <strong className="text-[#00E5A3]">${rfm.avgSpend.toFixed(2)}</strong></div>
              <div>Avg Orders: <strong className="text-[#F0FDFA]">{rfm.avgFrequency}</strong></div>
              <div>Recency: <strong className="text-[#38BDF8]">{rfm.avgRecencyDays} Days</strong></div>
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
      <div className="bg-[#10353B] border border-[#10353B] rounded-xl p-5 space-y-4 shadow-lg text-[#F0FDFA]">
        <div className="flex items-center justify-between border-b border-[#0B282C] pb-3">
          <div>
            <span className="text-[10px] font-mono text-[#00E5A3] uppercase tracking-widest font-bold">
              // CATEGORY BREAKDOWN
            </span>
            <h2 className="text-base font-bold text-[#F0FDFA]">
              Retail Category Revenue & Ratings
            </h2>
          </div>
          <Zap className="w-4 h-4 text-[#00E5A3]" />
        </div>

        <div className="space-y-2.5">
          {shoppingCategoryData.map(cat => (
            <div key={cat.category} className="p-3 bg-[#0B282C] border border-[#10353B] rounded-lg space-y-1">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-[#F0FDFA]">{cat.category} ({cat.popularItem})</span>
                <span className="text-[#00E5A3] font-bold">{formatUSD(cat.totalRevenue)}</span>
              </div>

              <div className="flex justify-between text-[11px] font-mono text-[#8EAAB0]">
                <span>{cat.itemsPurchased.toLocaleString()} Items</span>
                <span>Avg Price: <strong className="text-[#F0FDFA]">${cat.avgPrice.toFixed(2)}</strong></span>
                <span>Rating: <strong className="text-[#F59E0B]">{cat.avgRating} ★</strong></span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subscription Impact */}
      <div className="bg-[#10353B] border border-[#10353B] rounded-xl p-5 space-y-4 shadow-lg text-[#F0FDFA]">
        <div className="flex items-center justify-between border-b border-[#0B282C] pb-3">
          <div>
            <span className="text-[10px] font-mono text-[#38BDF8] uppercase tracking-widest font-bold">
              // MEMBERSHIP UPLIFT
            </span>
            <h2 className="text-base font-bold text-[#F0FDFA]">
              Subscription Membership LTV Comparison
            </h2>
          </div>
          <Tag className="w-4 h-4 text-[#38BDF8]" />
        </div>

        <div className="space-y-3">
          {subscriptionImpactData.map(sub => (
            <div key={sub.status} className="p-4 bg-[#0B282C] border border-[#10353B] rounded-lg space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-[#F0FDFA]">{sub.status} ({sub.customerCount} Customers)</span>
                <span className="text-[#38BDF8] font-bold">{formatUSD(sub.totalRevenue)}</span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono text-[#8EAAB0] pt-1">
                <div>Avg Order Spend: <strong className="text-[#00E5A3]">${sub.avgSpend.toFixed(2)}</strong></div>
                <div>Avg Orders / Year: <strong className="text-[#38BDF8]">{sub.avgOrders}</strong></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

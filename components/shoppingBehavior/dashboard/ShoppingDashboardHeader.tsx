'use client';

import React from 'react';
import { ArrowLeft, Users, RefreshCw, ShoppingBag, DollarSign, Award, Star, Tag } from 'lucide-react';
import { ShoppingFilterState, ShoppingKPIMetrics } from '@/types/shoppingBehavior';
import { formatUSD } from '@/services/shoppingBehaviorService';

interface ShoppingDashboardHeaderProps {
  filters: ShoppingFilterState;
  setFilters: React.Dispatch<React.SetStateAction<ShoppingFilterState>>;
  onSwitchToCaseStudy: () => void;
}

export function ShoppingDashboardHeader({ filters, setFilters, onSwitchToCaseStudy }: ShoppingDashboardHeaderProps) {
  const isFiltered =
    filters.category !== 'All' ||
    filters.subscription !== 'All' ||
    filters.rfmSegment !== 'All' ||
    filters.gender !== 'All' ||
    filters.search !== '';

  const handleReset = () => {
    setFilters({
      category: 'All',
      subscription: 'All',
      rfmSegment: 'All',
      gender: 'All',
      search: ''
    });
  };

  return (
    <div className="space-y-4 bg-[#041C1E] border border-[#10353B] rounded-xl p-6 shadow-xl text-[#F0FDFA]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#10353B] pb-4">
        <div>
          <button
            onClick={onSwitchToCaseStudy}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#00E5A3] hover:text-[#34D399] transition-colors mb-2 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>← Back to Case Study & SQL Explorer</span>
          </button>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#F0FDFA]">
            Customer Shopping Behavior Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-[#8EAAB0] font-mono">
            RFM segmentation, subscription membership uplift, and customer category preferences (3,900 Profiles)
          </p>
        </div>

        <div className="flex items-center gap-3 self-start sm:self-auto font-mono text-xs">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0B282C] border border-[#10353B] text-[#00E5A3]">
            <span className="w-2 h-2 rounded-full bg-[#00E5A3] animate-pulse" />
            <span>SQL RFM Validated</span>
          </div>

          {isFiltered && (
            <button
              onClick={handleReset}
              className="px-3 py-1.5 bg-[#00E5A3]/20 hover:bg-[#00E5A3] text-[#00E5A3] hover:text-[#041C1E] border border-[#00E5A3]/40 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer text-xs font-mono"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>
      </div>

      {/* Global Interactive Filter Selectors */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
        {/* Category Filter */}
        <div className="space-y-1">
          <label className="text-[10px] font-mono text-[#8EAAB0] uppercase tracking-wider block">
            PRODUCT CATEGORY
          </label>
          <select
            value={filters.category}
            onChange={e => setFilters(prev => ({ ...prev, category: e.target.value }))}
            className="w-full px-3 py-2 bg-[#0B282C] border border-[#10353B] focus:border-[#00E5A3] rounded-lg text-xs font-mono text-[#F0FDFA] outline-none transition-colors"
          >
            <option value="All">All Categories (4)</option>
            <option value="Clothing">Clothing</option>
            <option value="Accessories">Accessories</option>
            <option value="Footwear">Footwear</option>
            <option value="Outerwear">Outerwear</option>
          </select>
        </div>

        {/* Subscription Filter */}
        <div className="space-y-1">
          <label className="text-[10px] font-mono text-[#8EAAB0] uppercase tracking-wider block">
            SUBSCRIPTION STATUS
          </label>
          <select
            value={filters.subscription}
            onChange={e => setFilters(prev => ({ ...prev, subscription: e.target.value }))}
            className="w-full px-3 py-2 bg-[#0B282C] border border-[#10353B] focus:border-[#00E5A3] rounded-lg text-xs font-mono text-[#F0FDFA] outline-none transition-colors"
          >
            <option value="All">All Membership Statuses</option>
            <option value="Subscribed">Subscribed (1,053)</option>
            <option value="Non-Subscribed">Non-Subscribed (2,847)</option>
          </select>
        </div>

        {/* RFM Segment Filter */}
        <div className="space-y-1">
          <label className="text-[10px] font-mono text-[#8EAAB0] uppercase tracking-wider block">
            RFM SEGMENT
          </label>
          <select
            value={filters.rfmSegment}
            onChange={e => setFilters(prev => ({ ...prev, rfmSegment: e.target.value }))}
            className="w-full px-3 py-2 bg-[#0B282C] border border-[#10353B] focus:border-[#00E5A3] rounded-lg text-xs font-mono text-[#F0FDFA] outline-none transition-colors"
          >
            <option value="All">All RFM Segments</option>
            <option value="Champions">Champions (Top 15%)</option>
            <option value="Loyal">Loyal Customers</option>
            <option value="Potential">Potential Loyalists</option>
            <option value="Risk">At Risk / Lapsed</option>
          </select>
        </div>

        {/* Gender Filter */}
        <div className="space-y-1">
          <label className="text-[10px] font-mono text-[#8EAAB0] uppercase tracking-wider block">
            GENDER
          </label>
          <select
            value={filters.gender}
            onChange={e => setFilters(prev => ({ ...prev, gender: e.target.value }))}
            className="w-full px-3 py-2 bg-[#0B282C] border border-[#10353B] focus:border-[#00E5A3] rounded-lg text-xs font-mono text-[#F0FDFA] outline-none transition-colors"
          >
            <option value="All">All Genders</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export function ShoppingKPIGrid({ metrics }: { metrics: ShoppingKPIMetrics }) {
  const cards = [
    {
      title: 'TOTAL SPEND',
      value: formatUSD(metrics.totalRevenue),
      subtext: '$233.9K Total Revenue',
      icon: DollarSign,
      accentColor: 'border-l-4 border-l-[#00E5A3]',
      badgeColor: 'text-[#00E5A3] bg-[#00E5A3]/10'
    },
    {
      title: 'TOTAL CUSTOMERS',
      value: metrics.totalCustomers.toLocaleString(),
      subtext: '3,900 Profiles Analyzed',
      icon: Users,
      accentColor: 'border-l-4 border-l-[#F0FDFA]',
      badgeColor: 'text-[#F0FDFA] bg-[#10353B]'
    },
    {
      title: 'VIP REVENUE SHARE',
      value: `${metrics.vipRevenueSharePct.toFixed(1)}%`,
      subtext: 'Top 15% Champions Share',
      icon: Award,
      accentColor: 'border-l-4 border-l-[#38BDF8]',
      badgeColor: 'text-[#38BDF8] bg-[#38BDF8]/10'
    },
    {
      title: 'AVG BASKET SIZE',
      value: `$${metrics.avgOrderAmount.toFixed(2)}`,
      subtext: 'Mean Spend Per Order',
      icon: ShoppingBag,
      accentColor: 'border-l-4 border-l-[#00E5A3]',
      badgeColor: 'text-[#00E5A3] bg-[#00E5A3]/10'
    },
    {
      title: 'SUBSCRIBERS RATE',
      value: `${metrics.subscriberPct.toFixed(1)}%`,
      subtext: '1,053 Subscribed Members',
      icon: Tag,
      accentColor: 'border-l-4 border-l-[#8EAAB0]',
      badgeColor: 'text-[#8EAAB0] bg-[#10353B]'
    },
    {
      title: 'AVG REVIEW SCORE',
      value: `${metrics.avgReviewRating.toFixed(2)} / 5`,
      subtext: 'Customer Satisfaction',
      icon: Star,
      accentColor: 'border-l-4 border-l-[#F59E0B]',
      badgeColor: 'text-[#F59E0B] bg-[#F59E0B]/10'
    }
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
      {cards.map((card, idx) => {
        const Icon = card.icon;
        return (
          <div
            key={idx}
            className={`p-4 bg-[#10353B] border border-[#10353B] hover:border-[#00E5A3]/40 rounded-xl space-y-2 transition-all shadow-md ${card.accentColor}`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-[#8EAAB0] uppercase tracking-wider font-bold">
                {card.title}
              </span>
              <div className={`p-1.5 rounded-lg ${card.badgeColor}`}>
                <Icon className="w-3.5 h-3.5" />
              </div>
            </div>

            <div className="text-xl sm:text-2xl font-extrabold font-mono text-[#F0FDFA]">
              {card.value}
            </div>

            <div className="text-[10px] text-[#8EAAB0] font-mono">
              {card.subtext}
            </div>
          </div>
        );
      })}
    </div>
  );
}

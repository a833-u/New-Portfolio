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
    <div className="space-y-4 bg-[#071A2B] border border-[#102F45] rounded-xl p-6 shadow-xl text-[#F5F7FA]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#102F45] pb-4">
        <div>
          <button
            onClick={onSwitchToCaseStudy}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#FF7A18] hover:text-[#FF9A3D] transition-colors mb-2 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>← Back to Case Study & SQL Explorer</span>
          </button>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#F5F7FA]">
            Customer Shopping Behavior Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-[#9FB0BF] font-mono">
            RFM segmentation, subscription membership uplift, and customer category preferences (3,900 Profiles)
          </p>
        </div>

        <div className="flex items-center gap-3 self-start sm:self-auto font-mono text-xs">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0B2438] border border-[#102F45] text-[#35D07F]">
            <span className="w-2 h-2 rounded-full bg-[#35D07F] animate-pulse" />
            <span>SQL RFM Validated</span>
          </div>

          {isFiltered && (
            <button
              onClick={handleReset}
              className="px-3 py-1.5 bg-[#FF7A18]/20 hover:bg-[#FF7A18] text-[#FF7A18] hover:text-[#071A2B] border border-[#FF7A18]/40 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer text-xs font-mono"
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
          <label className="text-[10px] font-mono text-[#9FB0BF] uppercase tracking-wider block">
            PRODUCT CATEGORY
          </label>
          <select
            value={filters.category}
            onChange={e => setFilters(prev => ({ ...prev, category: e.target.value }))}
            className="w-full px-3 py-2 bg-[#0B2438] border border-[#102F45] focus:border-[#FF7A18] rounded-lg text-xs font-mono text-[#F5F7FA] outline-none transition-colors"
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
          <label className="text-[10px] font-mono text-[#9FB0BF] uppercase tracking-wider block">
            SUBSCRIPTION STATUS
          </label>
          <select
            value={filters.subscription}
            onChange={e => setFilters(prev => ({ ...prev, subscription: e.target.value }))}
            className="w-full px-3 py-2 bg-[#0B2438] border border-[#102F45] focus:border-[#FF7A18] rounded-lg text-xs font-mono text-[#F5F7FA] outline-none transition-colors"
          >
            <option value="All">All Membership Statuses</option>
            <option value="Subscribed">Subscribed (1,053)</option>
            <option value="Non-Subscribed">Non-Subscribed (2,847)</option>
          </select>
        </div>

        {/* RFM Segment Filter */}
        <div className="space-y-1">
          <label className="text-[10px] font-mono text-[#9FB0BF] uppercase tracking-wider block">
            RFM SEGMENT
          </label>
          <select
            value={filters.rfmSegment}
            onChange={e => setFilters(prev => ({ ...prev, rfmSegment: e.target.value }))}
            className="w-full px-3 py-2 bg-[#0B2438] border border-[#102F45] focus:border-[#FF7A18] rounded-lg text-xs font-mono text-[#F5F7FA] outline-none transition-colors"
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
          <label className="text-[10px] font-mono text-[#9FB0BF] uppercase tracking-wider block">
            GENDER
          </label>
          <select
            value={filters.gender}
            onChange={e => setFilters(prev => ({ ...prev, gender: e.target.value }))}
            className="w-full px-3 py-2 bg-[#0B2438] border border-[#102F45] focus:border-[#FF7A18] rounded-lg text-xs font-mono text-[#F5F7FA] outline-none transition-colors"
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
      accentColor: 'border-l-4 border-l-[#FF7A18]',
      badgeColor: 'text-[#FF7A18] bg-[#FF7A18]/10'
    },
    {
      title: 'TOTAL CUSTOMERS',
      value: metrics.totalCustomers.toLocaleString(),
      subtext: '3,900 Profiles Analyzed',
      icon: Users,
      accentColor: 'border-l-4 border-l-[#F5F7FA]',
      badgeColor: 'text-[#F5F7FA] bg-[#102F45]'
    },
    {
      title: 'VIP REVENUE SHARE',
      value: `${metrics.vipRevenueSharePct.toFixed(1)}%`,
      subtext: 'Top 15% Champions Share',
      icon: Award,
      accentColor: 'border-l-4 border-l-[#35D07F]',
      badgeColor: 'text-[#35D07F] bg-[#35D07F]/10'
    },
    {
      title: 'AVG BASKET SIZE',
      value: `$${metrics.avgOrderAmount.toFixed(2)}`,
      subtext: 'Mean Spend Per Order',
      icon: ShoppingBag,
      accentColor: 'border-l-4 border-l-[#FF9A3D]',
      badgeColor: 'text-[#FF9A3D] bg-[#FF9A3D]/10'
    },
    {
      title: 'SUBSCRIBERS RATE',
      value: `${metrics.subscriberPct.toFixed(1)}%`,
      subtext: '1,053 Subscribed Members',
      icon: Tag,
      accentColor: 'border-l-4 border-l-[#9FB0BF]',
      badgeColor: 'text-[#9FB0BF] bg-[#102F45]'
    },
    {
      title: 'AVG REVIEW SCORE',
      value: `${metrics.avgReviewRating.toFixed(2)} / 5`,
      subtext: 'Customer Satisfaction',
      icon: Star,
      accentColor: 'border-l-4 border-l-[#FFC857]',
      badgeColor: 'text-[#FFC857] bg-[#FFC857]/10'
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

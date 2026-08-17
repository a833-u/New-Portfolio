'use client';

import React from 'react';
import { ArrowLeft, Filter, RefreshCw, Layers } from 'lucide-react';
import { FilterState } from '@/types/analytics';

interface DashboardHeaderProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  onSwitchToCaseStudy: () => void;
}

export default function DashboardHeader({ filters, setFilters, onSwitchToCaseStudy }: DashboardHeaderProps) {
  const isFiltered = 
    filters.region !== 'All' || 
    filters.category !== 'All' || 
    filters.customerSegment !== 'All' || 
    filters.paymentMethod !== 'All' || 
    filters.targetStatus !== 'All' || 
    filters.salespersonSearch !== '';

  const handleReset = () => {
    setFilters({
      region: 'All',
      category: 'All',
      customerSegment: 'All',
      paymentMethod: 'All',
      targetStatus: 'All',
      salespersonSearch: ''
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
            Interactive BI Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-[#9FB0BF] font-mono">
            Sales, profitability and target performance overview (PostgreSQL 99,970 Dataset)
          </p>
        </div>

        <div className="flex items-center gap-3 self-start sm:self-auto font-mono text-xs">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0B2438] border border-[#102F45] text-[#35D07F]">
            <span className="w-2 h-2 rounded-full bg-[#35D07F] animate-pulse" />
            <span>SQL Validated Dataset</span>
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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 pt-1">
        {/* Region Filter */}
        <div className="space-y-1">
          <label className="text-[10px] font-mono text-[#9FB0BF] uppercase tracking-wider block">
            REGION
          </label>
          <select
            value={filters.region}
            onChange={e => setFilters(prev => ({ ...prev, region: e.target.value }))}
            className="w-full px-3 py-2 bg-[#0B2438] border border-[#102F45] focus:border-[#FF7A18] rounded-lg text-xs font-mono text-[#F5F7FA] outline-none transition-colors"
          >
            <option value="All">All Regions (4)</option>
            <option value="West">West Territory</option>
            <option value="North">North Territory</option>
            <option value="South">South Territory</option>
            <option value="East">East Territory</option>
          </select>
        </div>

        {/* Category Filter */}
        <div className="space-y-1">
          <label className="text-[10px] font-mono text-[#9FB0BF] uppercase tracking-wider block">
            CATEGORY
          </label>
          <select
            value={filters.category}
            onChange={e => setFilters(prev => ({ ...prev, category: e.target.value }))}
            className="w-full px-3 py-2 bg-[#0B2438] border border-[#102F45] focus:border-[#FF7A18] rounded-lg text-xs font-mono text-[#F5F7FA] outline-none transition-colors"
          >
            <option value="All">All Categories (5)</option>
            <option value="Electronics">Electronics</option>
            <option value="Furniture">Furniture</option>
            <option value="Appliances">Appliances</option>
            <option value="Accessories">Accessories</option>
            <option value="Office Supplies">Office Supplies</option>
          </select>
        </div>

        {/* Customer Segment Filter */}
        <div className="space-y-1">
          <label className="text-[10px] font-mono text-[#9FB0BF] uppercase tracking-wider block">
            CUSTOMER SEGMENT
          </label>
          <select
            value={filters.customerSegment}
            onChange={e => setFilters(prev => ({ ...prev, customerSegment: e.target.value }))}
            className="w-full px-3 py-2 bg-[#0B2438] border border-[#102F45] focus:border-[#FF7A18] rounded-lg text-xs font-mono text-[#F5F7FA] outline-none transition-colors"
          >
            <option value="All">All Segments (4)</option>
            <option value="Consumer">Consumer</option>
            <option value="Corporate">Corporate</option>
            <option value="Small Business">Small Business</option>
            <option value="Enterprise">Enterprise</option>
          </select>
        </div>

        {/* Payment Method Filter */}
        <div className="space-y-1">
          <label className="text-[10px] font-mono text-[#9FB0BF] uppercase tracking-wider block">
            PAYMENT METHOD
          </label>
          <select
            value={filters.paymentMethod}
            onChange={e => setFilters(prev => ({ ...prev, paymentMethod: e.target.value }))}
            className="w-full px-3 py-2 bg-[#0B2438] border border-[#102F45] focus:border-[#FF7A18] rounded-lg text-xs font-mono text-[#F5F7FA] outline-none transition-colors"
          >
            <option value="All">All Payment Channels</option>
            <option value="Credit Card">Credit Card</option>
            <option value="UPI">UPI</option>
            <option value="Bank Transfer">Bank Transfer</option>
            <option value="Debit Card">Debit Card</option>
            <option value="Cash">Cash</option>
            <option value="Unkown">Unknown</option>
          </select>
        </div>

        {/* Target Status Filter */}
        <div className="space-y-1">
          <label className="text-[10px] font-mono text-[#9FB0BF] uppercase tracking-wider block">
            TARGET STATUS
          </label>
          <select
            value={filters.targetStatus}
            onChange={e => setFilters(prev => ({ ...prev, targetStatus: e.target.value }))}
            className="w-full px-3 py-2 bg-[#0B2438] border border-[#102F45] focus:border-[#FF7A18] rounded-lg text-xs font-mono text-[#F5F7FA] outline-none transition-colors"
          >
            <option value="All">All Target Statuses</option>
            <option value="Met Target">Met Target (6,278)</option>
            <option value="Below Target">Below Target (93,692)</option>
          </select>
        </div>
      </div>
    </div>
  );
}

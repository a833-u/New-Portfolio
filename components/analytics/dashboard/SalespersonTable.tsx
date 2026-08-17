'use client';

import React, { useState, useMemo } from 'react';
import { Search, ChevronLeft, ChevronRight, ArrowUpDown, Award, Users } from 'lucide-react';
import { allSalespeopleData } from '@/data/analyticsData';
import { filterSalespeople, formatCurrency, formatNumber } from '@/services/analyticsService';
import { FilterState, SalespersonRecord } from '@/types/analytics';

interface SalespersonTableProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
}

export default function SalespersonTable({ filters, setFilters }: SalespersonTableProps) {
  const [sortBy, setSortBy] = useState<'revenue' | 'profit' | 'profitMarginPct' | 'targetAchievementPct'>('revenue');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  // Filter and Sort all 80 salespeople
  const filteredSalespeople = useMemo(() => {
    return filterSalespeople(allSalespeopleData, filters, sortBy, sortOrder);
  }, [filters, sortBy, sortOrder]);

  const totalPages = Math.max(1, Math.ceil(filteredSalespeople.length / pageSize));
  const pageIndex = Math.min(currentPage, totalPages);

  const paginatedSalespeople = useMemo(() => {
    const start = (pageIndex - 1) * pageSize;
    return filteredSalespeople.slice(start, start + pageSize);
  }, [filteredSalespeople, pageIndex, pageSize]);

  const handleSort = (field: 'revenue' | 'profit' | 'profitMarginPct' | 'targetAchievementPct') => {
    if (sortBy === field) {
      setSortOrder(prev => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortBy(field);
      setSortOrder('desc');
    }
    setCurrentPage(1);
  };

  return (
    <div className="bg-[#102F45] border border-[#102F45] rounded-xl p-5 space-y-4 shadow-lg text-[#F5F7FA]">
      {/* Table Header & Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#0B2438] pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono text-[#FF7A18] uppercase tracking-widest font-bold">
              // SALES FORCE ANALYTICS
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#FF7A18]/20 text-[#FF7A18] border border-[#FF7A18]/30">
              ALL 80 SALESPEOPLE
            </span>
          </div>
          <h2 className="text-lg font-bold text-[#F5F7FA] mt-0.5">
            Salesperson Performance Table
          </h2>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-[#9FB0BF] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search all 80 salespeople..."
            value={filters.salespersonSearch}
            onChange={e => {
              setFilters(prev => ({ ...prev, salespersonSearch: e.target.value }));
              setCurrentPage(1);
            }}
            className="w-full pl-9 pr-3 py-2 bg-[#0B2438] border border-[#102F45] focus:border-[#FF7A18] rounded-lg text-xs font-mono text-[#F5F7FA] outline-none transition-colors"
          />
        </div>
      </div>

      {/* Responsive Table Container */}
      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full text-left text-xs font-mono">
          <thead>
            <tr className="border-b border-[#0B2438] text-[#9FB0BF]">
              <th className="pb-3 pr-3 font-semibold">ID / NAME</th>
              <th className="pb-3 pr-3 font-semibold">REGION</th>
              <th className="pb-3 pr-3 font-semibold">CLASSIFICATION</th>
              <th
                onClick={() => handleSort('revenue')}
                className="pb-3 pr-3 font-semibold cursor-pointer text-[#FF7A18] hover:underline select-none"
              >
                <div className="flex items-center gap-1">
                  <span>REVENUE</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th
                onClick={() => handleSort('profit')}
                className="pb-3 pr-3 font-semibold cursor-pointer text-[#35D07F] hover:underline select-none"
              >
                <div className="flex items-center gap-1">
                  <span>PROFIT</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th
                onClick={() => handleSort('profitMarginPct')}
                className="pb-3 pr-3 font-semibold cursor-pointer text-[#F5F7FA] hover:underline select-none"
              >
                <div className="flex items-center gap-1">
                  <span>MARGIN %</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th
                onClick={() => handleSort('targetAchievementPct')}
                className="pb-3 pr-3 font-semibold cursor-pointer text-[#FF9A3D] hover:underline select-none"
              >
                <div className="flex items-center gap-1">
                  <span>TARGET %</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-[#0B2438]">
            {paginatedSalespeople.map(sp => {
              let badgeColor = 'bg-[#35D07F]/20 text-[#35D07F] border-[#35D07F]/30';
              if (sp.performanceClass === 'High Sales / Low Efficiency') {
                badgeColor = 'bg-[#FF9A3D]/20 text-[#FF9A3D] border-[#FF9A3D]/30';
              } else if (sp.performanceClass === 'Efficient / Growth Opportunity') {
                badgeColor = 'bg-[#FFC857]/20 text-[#FFC857] border-[#FFC857]/30';
              } else if (sp.performanceClass === 'Needs Attention') {
                badgeColor = 'bg-[#FF5C5C]/20 text-[#FF5C5C] border-[#FF5C5C]/30';
              }

              return (
                <tr key={sp.id} className="hover:bg-[#0B2438]/60 transition-colors">
                  <td className="py-3 pr-3 font-semibold text-[#F5F7FA] whitespace-nowrap">
                    <div className="text-xs">{sp.name}</div>
                    <div className="text-[10px] text-[#9FB0BF]">{sp.id}</div>
                  </td>
                  <td className="py-3 pr-3 text-[#9FB0BF] whitespace-nowrap">{sp.region}</td>
                  <td className="py-3 pr-3 whitespace-nowrap">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono border ${badgeColor}`}>
                      {sp.performanceClass}
                    </span>
                  </td>
                  <td className="py-3 pr-3 font-bold text-[#FF7A18] whitespace-nowrap">{formatCurrency(sp.revenue)}</td>
                  <td className="py-3 pr-3 font-bold text-[#35D07F] whitespace-nowrap">{formatCurrency(sp.profit)}</td>
                  <td className="py-3 pr-3 font-bold text-[#F5F7FA] whitespace-nowrap">{sp.profitMarginPct.toFixed(2)}%</td>
                  <td className="py-3 pr-3 font-bold text-[#FF9A3D] whitespace-nowrap">{sp.targetAchievementPct.toFixed(1)}%</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#0B2438] pt-3 text-xs font-mono text-[#9FB0BF]">
        <div>
          Showing <strong className="text-[#F5F7FA]">{paginatedSalespeople.length}</strong> of{' '}
          <strong className="text-[#F5F7FA]">{filteredSalespeople.length}</strong> salespeople (Page {pageIndex} of {totalPages})
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
            disabled={pageIndex === 1}
            className="p-1.5 rounded bg-[#0B2438] border border-[#102F45] disabled:opacity-30 hover:border-[#FF7A18] text-[#F5F7FA] transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {Array.from({ length: totalPages }).map((_, i) => {
            const pageNum = i + 1;
            return (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`w-7 h-7 rounded text-xs font-mono font-bold transition-all cursor-pointer ${
                  pageNum === pageIndex
                    ? 'bg-[#FF7A18] text-[#071A2B]'
                    : 'bg-[#0B2438] text-[#9FB0BF] hover:text-[#F5F7FA]'
                }`}
              >
                {pageNum}
              </button>
            );
          })}

          <button
            onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
            disabled={pageIndex === totalPages}
            className="p-1.5 rounded bg-[#0B2438] border border-[#102F45] disabled:opacity-30 hover:border-[#FF7A18] text-[#F5F7FA] transition-colors cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

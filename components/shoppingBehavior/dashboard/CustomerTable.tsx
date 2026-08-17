'use client';

import React, { useState, useMemo } from 'react';
import { Search, ChevronLeft, ChevronRight, ArrowUpDown } from 'lucide-react';
import { customerDataset } from '@/data/shoppingBehaviorData';
import { filterCustomers } from '@/services/shoppingBehaviorService';
import { CustomerRecord, ShoppingFilterState } from '@/types/shoppingBehavior';

interface CustomerTableProps {
  filters: ShoppingFilterState;
  setFilters: React.Dispatch<React.SetStateAction<ShoppingFilterState>>;
}

export default function CustomerTable({ filters, setFilters }: CustomerTableProps) {
  const [sortBy, setSortBy] = useState<'purchaseAmount' | 'previousPurchases' | 'reviewRating' | 'age'>('purchaseAmount');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const filteredCustomers = useMemo(() => {
    return filterCustomers(customerDataset, filters, sortBy, sortOrder);
  }, [filters, sortBy, sortOrder]);

  const totalPages = Math.max(1, Math.ceil(filteredCustomers.length / pageSize));
  const pageIndex = Math.min(currentPage, totalPages);

  const paginatedCustomers = useMemo(() => {
    const start = (pageIndex - 1) * pageSize;
    return filteredCustomers.slice(start, start + pageSize);
  }, [filteredCustomers, pageIndex, pageSize]);

  const handleSort = (field: 'purchaseAmount' | 'previousPurchases' | 'reviewRating' | 'age') => {
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
      {/* Header & Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#0B2438] pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono text-[#FF7A18] uppercase tracking-widest font-bold">
              // CUSTOMER DATABASE EXPLORER
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#FF7A18]/20 text-[#FF7A18] border border-[#FF7A18]/30">
              RFM PROFILES
            </span>
          </div>
          <h2 className="text-lg font-bold text-[#F5F7FA] mt-0.5">
            Customer Transaction & Segment Table
          </h2>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-[#9FB0BF] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search customer ID, category..."
            value={filters.search}
            onChange={e => {
              setFilters(prev => ({ ...prev, search: e.target.value }));
              setCurrentPage(1);
            }}
            className="w-full pl-9 pr-3 py-2 bg-[#0B2438] border border-[#102F45] focus:border-[#FF7A18] rounded-lg text-xs font-mono text-[#F5F7FA] outline-none transition-colors"
          />
        </div>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full text-left text-xs font-mono">
          <thead>
            <tr className="border-b border-[#0B2438] text-[#9FB0BF]">
              <th className="pb-3 pr-3 font-semibold">CUSTOMER ID</th>
              <th className="pb-3 pr-3 font-semibold">CATEGORY / ITEM</th>
              <th className="pb-3 pr-3 font-semibold">RFM SEGMENT</th>
              <th
                onClick={() => handleSort('purchaseAmount')}
                className="pb-3 pr-3 font-semibold cursor-pointer text-[#FF7A18] hover:underline select-none"
              >
                <div className="flex items-center gap-1">
                  <span>AMOUNT ($)</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th
                onClick={() => handleSort('previousPurchases')}
                className="pb-3 pr-3 font-semibold cursor-pointer text-[#35D07F] hover:underline select-none"
              >
                <div className="flex items-center gap-1">
                  <span>ORDERS</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th
                onClick={() => handleSort('reviewRating')}
                className="pb-3 pr-3 font-semibold cursor-pointer text-[#FFC857] hover:underline select-none"
              >
                <div className="flex items-center gap-1">
                  <span>RATING</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="pb-3 pr-3 font-semibold">SUBSCRIBED</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-[#0B2438]">
            {paginatedCustomers.map(c => {
              let rfmBadge = 'bg-[#35D07F]/20 text-[#35D07F] border-[#35D07F]/30';
              if (c.rfmSegment === 'Champions') {
                rfmBadge = 'bg-[#FF7A18]/20 text-[#FF7A18] border-[#FF7A18]/30 font-bold';
              } else if (c.rfmSegment === 'Potential Loyalists') {
                rfmBadge = 'bg-[#FFC857]/20 text-[#FFC857] border-[#FFC857]/30';
              } else if (c.rfmSegment === 'At Risk') {
                rfmBadge = 'bg-[#FF5C5C]/20 text-[#FF5C5C] border-[#FF5C5C]/30';
              }

              return (
                <tr key={c.id} className="hover:bg-[#0B2438]/60 transition-colors">
                  <td className="py-3 pr-3 font-semibold text-[#F5F7FA] whitespace-nowrap">
                    <div>{c.id}</div>
                    <div className="text-[10px] text-[#9FB0BF]">{c.gender}, {c.age} yrs · {c.location}</div>
                  </td>
                  <td className="py-3 pr-3 text-[#F5F7FA] whitespace-nowrap">
                    <div>{c.itemPurchased}</div>
                    <div className="text-[10px] text-[#9FB0BF]">{c.category} ({c.size}, {c.color})</div>
                  </td>
                  <td className="py-3 pr-3 whitespace-nowrap">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono border ${rfmBadge}`}>
                      {c.rfmSegment}
                    </span>
                  </td>
                  <td className="py-3 pr-3 font-bold text-[#FF7A18] whitespace-nowrap">${c.purchaseAmount.toFixed(2)}</td>
                  <td className="py-3 pr-3 font-bold text-[#35D07F] whitespace-nowrap">{c.previousPurchases}</td>
                  <td className="py-3 pr-3 font-bold text-[#FFC857] whitespace-nowrap">{c.reviewRating} ★</td>
                  <td className="py-3 pr-3 whitespace-nowrap">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono ${c.subscriptionStatus === 'Yes' ? 'bg-[#35D07F]/20 text-[#35D07F]' : 'bg-[#102F45] text-[#9FB0BF]'}`}>
                      {c.subscriptionStatus === 'Yes' ? 'Subscribed' : 'Standard'}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#0B2438] pt-3 text-xs font-mono text-[#9FB0BF]">
        <div>
          Showing <strong className="text-[#F5F7FA]">{paginatedCustomers.length}</strong> of{' '}
          <strong className="text-[#F5F7FA]">{filteredCustomers.length}</strong> customers (Page {pageIndex} of {totalPages})
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

'use client';

import React from 'react';
import { ShieldCheck, CheckCircle, AlertTriangle, FileCode } from 'lucide-react';
import { dataQualitySummary } from '@/data/analyticsData';

export default function DataQualityLogCard() {
  return (
    <section className="space-y-6 bg-[#071A2B] border border-[#102F45] rounded-xl p-6 sm:p-8">
      <div className="space-y-1 border-b border-[#102F45] pb-4">
        <div className="flex items-center gap-2 text-xs font-mono text-[#35D07F]">
          <ShieldCheck className="w-4 h-4" />
          <span>DATA VALIDATION & QUALITY AUDIT</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-[#F5F7FA]">
          Data Cleaning & Preprocessing Log
        </h2>
        <p className="text-xs sm:text-sm text-[#9FB0BF]">
          Comprehensive audit log documenting cleaning steps, category standardization, and payment channel string normalization.
        </p>
      </div>

      {/* 4 Summary Audit Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-4 bg-[#0B2438] border border-[#102F45] rounded-lg">
          <div className="text-xs font-mono text-[#9FB0BF] uppercase">TOTAL ROWS</div>
          <div className="text-xl font-bold text-[#F5F7FA] font-mono mt-1">
            {dataQualitySummary.totalRows.toLocaleString()}
          </div>
          <div className="text-[10px] text-[#35D07F] mt-1 font-mono">100% Verified</div>
        </div>

        <div className="p-4 bg-[#0B2438] border border-[#102F45] rounded-lg">
          <div className="text-xs font-mono text-[#9FB0BF] uppercase">UNIQUE ORDERS</div>
          <div className="text-xl font-bold text-[#F5F7FA] font-mono mt-1">
            {dataQualitySummary.uniqueOrders.toLocaleString()}
          </div>
          <div className="text-[10px] text-[#35D07F] mt-1 font-mono">0 Duplicate Keys</div>
        </div>

        <div className="p-4 bg-[#0B2438] border border-[#102F45] rounded-lg">
          <div className="text-xs font-mono text-[#9FB0BF] uppercase">FIRST ORDER</div>
          <div className="text-xl font-bold text-[#FF7A18] font-mono mt-1">
            {dataQualitySummary.firstOrderDate}
          </div>
          <div className="text-[10px] text-[#9FB0BF] mt-1 font-mono">Jan 1, 2024</div>
        </div>

        <div className="p-4 bg-[#0B2438] border border-[#102F45] rounded-lg">
          <div className="text-xs font-mono text-[#9FB0BF] uppercase">LAST ORDER</div>
          <div className="text-xl font-bold text-[#FF7A18] font-mono mt-1">
            {dataQualitySummary.lastOrderDate}
          </div>
          <div className="text-[10px] text-[#FFC857] mt-1 font-mono">Jun 30, 2026 (YTD 6M)</div>
        </div>
      </div>

      {/* Standardization Logs Table */}
      <div className="space-y-3">
        <div className="text-xs font-mono text-[#FF7A18] uppercase tracking-wider font-semibold">
          // STANDARDIZATION & AUDIT TRANSFORMATIONS
        </div>

        <div className="space-y-2">
          {dataQualitySummary.standardizationLogs.map((log, i) => (
            <div key={i} className="p-4 bg-[#0B2438] border border-[#102F45] rounded-lg space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#102F45] pb-2">
                <div className="flex items-center gap-2">
                  <FileCode className="w-4 h-4 text-[#FF7A18]" />
                  <span className="text-xs font-bold font-mono text-[#F5F7FA]">{log.issue}</span>
                </div>
                <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-[#35D07F]/20 text-[#35D07F] border border-[#35D07F]/30 self-start sm:self-auto">
                  {log.status}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono pt-1">
                <div>
                  <span className="text-[#9FB0BF] text-[11px] block mb-1">Source Dataset Variations:</span>
                  <div className="p-2 bg-[#071A2B] border border-[#102F45] rounded text-[#FFC857] text-[11px] break-all">
                    {log.rawExamples.join(', ')}
                  </div>
                </div>

                <div>
                  <span className="text-[#9FB0BF] text-[11px] block mb-1">Analytics Transformation:</span>
                  <div className="p-2 bg-[#071A2B] border border-[#102F45] rounded text-[#F5F7FA] text-[11px]">
                    {log.transformation}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

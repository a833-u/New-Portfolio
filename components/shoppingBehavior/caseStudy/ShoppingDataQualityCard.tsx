'use client';

import React from 'react';
import { ShieldCheck, FileCode } from 'lucide-react';

export default function ShoppingDataQualityCard() {
  return (
    <section className="space-y-6 bg-[#071A2B] border border-[#102F45] rounded-xl p-6 sm:p-8">
      <div className="space-y-1 border-b border-[#102F45] pb-4">
        <div className="flex items-center gap-2 text-xs font-mono text-[#35D07F]">
          <ShieldCheck className="w-4 h-4" />
          <span>DATA VALIDATION & QUALITY AUDIT</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-[#F5F7FA]">
          Customer Data Sanitization & Verification
        </h2>
        <p className="text-xs sm:text-sm text-[#9FB0BF]">
          Audit log documenting customer RFM normalization, demographic data cleaning, and review score validation.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-4 bg-[#0B2438] border border-[#102F45] rounded-lg">
          <div className="text-xs font-mono text-[#9FB0BF] uppercase">TOTAL CUSTOMERS</div>
          <div className="text-xl font-bold text-[#F5F7FA] font-mono mt-1">3,900</div>
          <div className="text-[10px] text-[#35D07F] mt-1 font-mono">100% Verified</div>
        </div>

        <div className="p-4 bg-[#0B2438] border border-[#102F45] rounded-lg">
          <div className="text-xs font-mono text-[#9FB0BF] uppercase">TOTAL SPEND</div>
          <div className="text-xl font-bold text-[#FF7A18] font-mono mt-1">$233.9K</div>
          <div className="text-[10px] text-[#35D07F] mt-1 font-mono">Ledger Reconciled</div>
        </div>

        <div className="p-4 bg-[#0B2438] border border-[#102F45] rounded-lg">
          <div className="text-xs font-mono text-[#9FB0BF] uppercase">RFM QUARTILES</div>
          <div className="text-xl font-bold text-[#F5F7FA] font-mono mt-1">4 Tiers</div>
          <div className="text-[10px] text-[#FF7A18] mt-1 font-mono">NTILE(4) Model</div>
        </div>

        <div className="p-4 bg-[#0B2438] border border-[#102F45] rounded-lg">
          <div className="text-xs font-mono text-[#9FB0BF] uppercase">SUBSCRIBER RATE</div>
          <div className="text-xl font-bold text-[#35D07F] font-mono mt-1">27.0%</div>
          <div className="text-[10px] text-[#9FB0BF] mt-1 font-mono">1,053 Members</div>
        </div>
      </div>
    </section>
  );
}

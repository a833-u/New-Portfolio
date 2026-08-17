'use client';

import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function ShoppingDataQualityCard() {
  return (
    <section className="space-y-6 bg-[#041C1E] border border-[#10353B] rounded-xl p-6 sm:p-8">
      <div className="space-y-1 border-b border-[#10353B] pb-4">
        <div className="flex items-center gap-2 text-xs font-mono text-[#00E5A3]">
          <ShieldCheck className="w-4 h-4" />
          <span>DATA VALIDATION & QUALITY AUDIT</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-[#F0FDFA]">
          Customer Data Sanitization & Verification
        </h2>
        <p className="text-xs sm:text-sm text-[#8EAAB0]">
          Audit log documenting customer RFM normalization, demographic data cleaning, and review score validation.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-4 bg-[#0B282C] border border-[#10353B] rounded-lg">
          <div className="text-xs font-mono text-[#8EAAB0] uppercase">TOTAL CUSTOMERS</div>
          <div className="text-xl font-bold text-[#F0FDFA] font-mono mt-1">3,900</div>
          <div className="text-[10px] text-[#00E5A3] mt-1 font-mono">100% Verified</div>
        </div>

        <div className="p-4 bg-[#0B282C] border border-[#10353B] rounded-lg">
          <div className="text-xs font-mono text-[#8EAAB0] uppercase">TOTAL SPEND</div>
          <div className="text-xl font-bold text-[#00E5A3] font-mono mt-1">$233.9K</div>
          <div className="text-[10px] text-[#00E5A3] mt-1 font-mono">Ledger Reconciled</div>
        </div>

        <div className="p-4 bg-[#0B282C] border border-[#10353B] rounded-lg">
          <div className="text-xs font-mono text-[#8EAAB0] uppercase">RFM QUARTILES</div>
          <div className="text-xl font-bold text-[#F0FDFA] font-mono mt-1">4 Tiers</div>
          <div className="text-[10px] text-[#38BDF8] mt-1 font-mono">NTILE(4) Model</div>
        </div>

        <div className="p-4 bg-[#0B282C] border border-[#10353B] rounded-lg">
          <div className="text-xs font-mono text-[#8EAAB0] uppercase">SUBSCRIBER RATE</div>
          <div className="text-xl font-bold text-[#00E5A3] font-mono mt-1">27.0%</div>
          <div className="text-[10px] text-[#8EAAB0] mt-1 font-mono">1,053 Members</div>
        </div>
      </div>
    </section>
  );
}

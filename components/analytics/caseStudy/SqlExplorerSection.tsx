'use client';

import React, { useState } from 'react';
import { Terminal, Copy, Check, ChevronRight, Play, Database } from 'lucide-react';
import { sqlQueryExplorerLibrary } from '@/data/analyticsData';

export default function SqlExplorerSection() {
  const [activeQueryId, setActiveQueryId] = useState(sqlQueryExplorerLibrary[0].id);
  const [copied, setCopied] = useState(false);

  const activeQuery = sqlQueryExplorerLibrary.find(q => q.id === activeQueryId) || sqlQueryExplorerLibrary[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeQuery.sqlCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="sql-explorer-section" className="space-y-6 bg-[#071A2B] border border-[#102F45] rounded-xl p-6 sm:p-8">
      {/* Section Header */}
      <div className="space-y-1 border-b border-[#102F45] pb-4">
        <div className="flex items-center gap-2 text-xs font-mono text-[#FF7A18]">
          <Terminal className="w-4 h-4" />
          <span>PRODUCTION SQL QUERY EXPLORER</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-[#F5F7FA]">
          Interactive SQL Analysis Notebook (11 Queries)
        </h2>
        <p className="text-xs sm:text-sm text-[#9FB0BF]">
          Select any query from the sidebar below to inspect the exact SQL code, business questions, and verified output tables.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Sidebar Query Selector (3 Cols on Large Desktop) */}
        <div className="lg:col-span-4 space-y-1.5 max-h-[540px] overflow-y-auto pr-1 custom-scrollbar">
          <div className="text-[11px] font-mono text-[#9FB0BF] uppercase tracking-wider px-2 pb-1">
            // SELECT QUERY (11 PROD QUERIES)
          </div>
          {sqlQueryExplorerLibrary.map(query => {
            const isSelected = query.id === activeQueryId;
            return (
              <button
                key={query.id}
                onClick={() => setActiveQueryId(query.id)}
                className={`w-full text-left p-3 rounded-lg border transition-all text-xs font-mono flex items-center justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-[#102F45] border-[#FF7A18] text-[#F5F7FA] font-bold shadow-md'
                    : 'bg-[#0B2438] border-[#102F45] text-[#9FB0BF] hover:border-[#FF7A18]/50 hover:text-[#F5F7FA]'
                }`}
              >
                <div className="flex items-center gap-2 overflow-hidden">
                  <span className={`px-1.5 py-0.5 rounded text-[10px] ${isSelected ? 'bg-[#FF7A18] text-[#071A2B]' : 'bg-[#071A2B] text-[#FF7A18]'}`}>
                    {query.queryNumber}
                  </span>
                  <span className="truncate">{query.title}</span>
                </div>
                <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-[#FF7A18]' : 'opacity-0'}`} />
              </button>
            );
          })}
        </div>

        {/* Query Viewer & Results (8 Cols) */}
        <div className="lg:col-span-8 space-y-4">
          {/* Query Header */}
          <div className="p-4 bg-[#0B2438] border border-[#102F45] rounded-lg space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-mono text-[#FF7A18] font-bold">
                QUERY {activeQuery.queryNumber} — {activeQuery.title.toUpperCase()}
              </span>
              <button
                onClick={handleCopy}
                className="px-3 py-1 bg-[#102F45] hover:bg-[#FF7A18] text-[#F5F7FA] hover:text-[#071A2B] rounded text-xs font-mono transition-colors flex items-center gap-1.5 cursor-pointer border border-[#FF7A18]/30"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[#35D07F]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'COPIED!' : 'COPY SQL'}</span>
              </button>
            </div>

            <div className="text-sm font-semibold text-[#F5F7FA] font-sans">
              <span className="text-[#9FB0BF] font-mono text-xs">BUSINESS QUESTION: </span>
              {activeQuery.businessQuestion}
            </div>
            <p className="text-xs text-[#9FB0BF] font-mono">
              {activeQuery.explanation}
            </p>
          </div>

          {/* Syntax Highlighted SQL Block */}
          <div className="relative bg-[#051320] border border-[#102F45] rounded-lg p-4 font-mono text-xs overflow-x-auto">
            <div className="flex items-center justify-between text-[10px] text-[#9FB0BF] border-b border-[#102F45] pb-2 mb-3">
              <span className="flex items-center gap-1.5">
                <Database className="w-3 h-3 text-[#FF7A18]" />
                <span>PostgreSQL Dialect · public.sales_transactions</span>
              </span>
              <span className="text-[#35D07F]">Syntax Verified</span>
            </div>

            <pre className="text-[#F5F7FA] leading-relaxed whitespace-pre font-mono">
              <code>{activeQuery.sqlCode}</code>
            </pre>
          </div>

          {/* Query Output Result Table Preview */}
          <div className="p-4 bg-[#0B2438] border border-[#102F45] rounded-lg space-y-3">
            <div className="flex items-center justify-between text-xs font-mono border-b border-[#102F45] pb-2">
              <span className="text-[#35D07F] font-bold flex items-center gap-1.5">
                <Play className="w-3 h-3 fill-current" />
                <span>QUERY RESULT OUTPUT PREVIEW</span>
              </span>
              <span className="text-[#9FB0BF] text-[11px]">{activeQuery.expectedOutput}</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="border-b border-[#102F45] text-[#FF7A18]">
                    {activeQuery.resultHeaders.map((head, idx) => (
                      <th key={idx} className="pb-2 pr-4 font-semibold uppercase">{head}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#102F45]/50">
                  {activeQuery.resultRows.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-[#102F45]/40 text-[#F5F7FA]">
                      {row.map((cell, cIdx) => (
                        <th key={cIdx} className="py-2 pr-4 font-normal whitespace-nowrap">{cell}</th>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

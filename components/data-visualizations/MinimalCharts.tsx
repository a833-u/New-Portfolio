'use client';

import React from 'react';

export function ShoppingBehaviorChart() {
  return (
    <div className="p-5 bg-theme-surface border border-theme-muted rounded-sm space-y-4">
      <div className="flex items-center justify-between border-b border-theme-muted pb-2">
        <span className="text-xs font-mono font-bold text-theme-main">
          CUSTOMER REVENUE & SEGMENTATION (RFM)
        </span>
        <span className="text-[10px] font-mono text-theme-sage uppercase">
          Analytical Publication Style
        </span>
      </div>

      {/* SVG Line Chart for Revenue Trend */}
      <div className="space-y-1">
        <div className="text-[11px] font-mono text-theme-secondary">
          Monthly Revenue Run-Rate & VIP Contribution
        </div>
        <svg viewBox="0 0 500 140" className="w-full h-36 overflow-visible">
          {/* Subtle grid lines */}
          <line x1="40" y1="20" x2="480" y2="20" stroke="currentColor" strokeDasharray="3,3" className="text-theme-muted" />
          <line x1="40" y1="60" x2="480" y2="60" stroke="currentColor" strokeDasharray="3,3" className="text-theme-muted" />
          <line x1="40" y1="100" x2="480" y2="100" stroke="currentColor" strokeDasharray="3,3" className="text-theme-muted" />

          {/* Y Axis Labels */}
          <text x="30" y="24" fill="currentColor" fontSize="9" fontFamily="monospace" textAnchor="end" className="fill-theme-secondary">$100k</text>
          <text x="30" y="64" fill="currentColor" fontSize="9" fontFamily="monospace" textAnchor="end" className="fill-theme-secondary">$60k</text>
          <text x="30" y="104" fill="currentColor" fontSize="9" fontFamily="monospace" textAnchor="end" className="fill-theme-secondary">$20k</text>

          {/* Area fill */}
          <polygon 
            points="50,110 110,85 170,95 230,50 290,40 350,30 410,25 470,18 470,110 50,110" 
            className="fill-theme-sage/10" 
          />

          {/* Line path */}
          <polyline 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            points="50,110 110,85 170,95 230,50 290,40 350,30 410,25 470,18" 
            className="stroke-theme-sage" 
          />

          {/* Apricot highlight path for VIP segment shift */}
          <polyline 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray="4,4" 
            points="230,50 290,40 350,30 410,25 470,18" 
            className="stroke-theme-apricot" 
          />

          {/* Data Points */}
          {[[50,110], [110,85], [170,95], [230,50], [290,40], [350,30], [410,25], [470,18]].map(([x,y], i) => (
            <circle 
              key={i} 
              cx={x} 
              cy={y} 
              r="3.5" 
              className={i >= 3 ? "fill-theme-apricot stroke-theme-surface" : "fill-theme-sage stroke-theme-surface"} 
              strokeWidth="1.5"
            />
          ))}

          {/* X Axis labels */}
          <text x="50" y="128" fill="currentColor" fontSize="9" fontFamily="monospace" textAnchor="middle" className="fill-theme-secondary">Q1</text>
          <text x="170" y="128" fill="currentColor" fontSize="9" fontFamily="monospace" textAnchor="middle" className="fill-theme-secondary">Q2</text>
          <text x="290" y="128" fill="currentColor" fontSize="9" fontFamily="monospace" textAnchor="middle" className="fill-theme-secondary">Q3</text>
          <text x="410" y="128" fill="currentColor" fontSize="9" fontFamily="monospace" textAnchor="middle" className="fill-theme-secondary">Q4</text>
        </svg>
      </div>

      {/* Legend & Summary */}
      <div className="flex flex-wrap items-center justify-between text-xs font-mono pt-2 border-t border-theme-muted/50 gap-2">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-theme-sage" />
            <span className="text-theme-secondary">General Customers</span>
          </span>
          <span className="inline-flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-theme-apricot" />
            <span className="text-theme-main font-semibold">VIP Segment (54% Rev)</span>
          </span>
        </div>
        <span className="text-theme-sage font-bold">RFM Segmentation Output</span>
      </div>
    </div>
  );
}

export function PropVistaChart() {
  return (
    <div className="p-5 bg-theme-surface border border-theme-muted rounded-sm space-y-4">
      <div className="flex items-center justify-between border-b border-theme-muted pb-2">
        <span className="text-xs font-mono font-bold text-theme-main">
          PROPVISTA SEARCH ACCURACY & QUERY TIMELINE
        </span>
        <span className="text-[10px] font-mono text-theme-sage uppercase">
          Performance Optimization
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Metric 1 Bar comparison */}
        <div className="space-y-2 p-3 bg-theme-muted/40 border border-theme-muted rounded-sm">
          <span className="text-[11px] font-mono text-theme-secondary block">
            Search Precision Accuracy
          </span>
          <div className="space-y-1.5">
            <div>
              <div className="flex justify-between text-[11px] font-mono text-theme-secondary mb-0.5">
                <span>Before Optimization</span>
                <span>65%</span>
              </div>
              <div className="w-full bg-theme-muted h-2 rounded-full overflow-hidden">
                <div className="bg-theme-secondary h-full w-[65%]" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-[11px] font-mono font-bold text-theme-sage mb-0.5">
                <span>After SQL Re-indexing</span>
                <span>100% (+35%)</span>
              </div>
              <div className="w-full bg-theme-muted h-2 rounded-full overflow-hidden">
                <div className="bg-theme-sage h-full w-[100%]" />
              </div>
            </div>
          </div>
        </div>

        {/* Metric 2 Time reduction */}
        <div className="space-y-2 p-3 bg-theme-muted/40 border border-theme-muted rounded-sm">
          <span className="text-[11px] font-mono text-theme-secondary block">
            Navigation Time Per Session
          </span>
          <div className="space-y-1.5">
            <div>
              <div className="flex justify-between text-[11px] font-mono text-theme-secondary mb-0.5">
                <span>Legacy Navigation</span>
                <span>45s</span>
              </div>
              <div className="w-full bg-theme-muted h-2 rounded-full overflow-hidden">
                <div className="bg-theme-apricot/80 h-full w-[85%]" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-[11px] font-mono font-bold text-theme-apricot mb-0.5">
                <span>Optimized Interface</span>
                <span>25s (-20s)</span>
              </div>
              <div className="w-full bg-theme-muted h-2 rounded-full overflow-hidden">
                <div className="bg-theme-apricot h-full w-[47%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

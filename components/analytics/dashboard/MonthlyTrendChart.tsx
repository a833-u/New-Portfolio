'use client';

import React, { useState } from 'react';
import { monthlyTrendData } from '@/data/analyticsData';
import { MonthlyTrendPoint } from '@/types/analytics';
import { formatCurrency } from '@/services/analyticsService';

export default function MonthlyTrendChart() {
  const [hoveredPoint, setHoveredPoint] = useState<MonthlyTrendPoint | null>(null);

  // SVG Chart bounds
  const width = 800;
  const height = 260;
  const paddingLeft = 60;
  const paddingRight = 20;
  const paddingTop = 20;
  const paddingBottom = 40;

  const chartWidth = width - paddingLeft - paddingRight;
  const chartHeight = height - paddingTop - paddingBottom;

  const maxVal = 120000000; // 120M
  const minVal = 0;

  // Compute X and Y positions for 30 points
  const points = monthlyTrendData.map((d, i) => {
    const x = paddingLeft + (i / (monthlyTrendData.length - 1)) * chartWidth;
    const revY = paddingTop + chartHeight - ((d.revenue - minVal) / (maxVal - minVal)) * chartHeight;
    const profY = paddingTop + chartHeight - ((d.profit - minVal) / (maxVal - minVal)) * chartHeight;
    return { ...d, x, revY, profY };
  });

  // Construct SVG Area and Line paths for Revenue
  const revPath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.revY}`).join(' ');
  const revAreaPath = `${revPath} L ${points[points.length - 1].x} ${height - paddingBottom} L ${points[0].x} ${height - paddingBottom} Z`;

  // Construct SVG Line path for Profit
  const profPath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.profY}`).join(' ');

  return (
    <div className="bg-[#102F45] border border-[#102F45] rounded-xl p-5 space-y-4 shadow-lg text-[#F5F7FA]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#0B2438] pb-3">
        <div>
          <span className="text-[10px] font-mono text-[#FF7A18] uppercase tracking-widest font-bold">
            // TIME SERIES TREND (JAN 2024 – JUN 2026)
          </span>
          <h2 className="text-lg font-bold text-[#F5F7FA]">
            Monthly Revenue & Profit Trajectory
          </h2>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-[#FF7A18]" />
            <span>Revenue (Dominant)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-[#35D07F]" />
            <span>Profit</span>
          </div>
        </div>
      </div>

      {/* SVG Chart Container */}
      <div className="relative w-full overflow-x-auto">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto min-w-[600px] select-none">
          {/* Y Axis Grid Lines & Labels */}
          {[0, 30, 60, 90, 120].map(val => {
            const y = paddingTop + chartHeight - ((val * 1000000 - minVal) / (maxVal - minVal)) * chartHeight;
            return (
              <g key={val}>
                <line x1={paddingLeft} y1={y} x2={width - paddingRight} y2={y} stroke="#0B2438" strokeWidth="1" strokeDasharray="3 3" />
                <text x={paddingLeft - 8} y={y + 3} textAnchor="end" fill="#9FB0BF" fontSize="9" className="font-mono">
                  ₹{val}M
                </text>
              </g>
            );
          })}

          {/* Revenue Area Fill */}
          <path d={revAreaPath} fill="url(#revGrad)" opacity="0.25" />

          {/* Gradient Definitions */}
          <defs>
            <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FF7A18" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FF7A18" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Revenue Line Path */}
          <path d={revPath} fill="none" stroke="#FF7A18" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

          {/* Profit Line Path */}
          <path d={profPath} fill="none" stroke="#35D07F" strokeWidth="2" strokeDasharray="4 2" strokeLinecap="round" strokeLinejoin="round" />

          {/* Interactive Interactive Data Points & Vertical Guide */}
          {points.map((p, i) => (
            <g key={i}>
              {/* Invisible Hover Receiver Target */}
              <rect
                x={p.x - 12}
                y={paddingTop}
                width={24}
                height={chartHeight}
                fill="transparent"
                onMouseEnter={() => setHoveredPoint(p)}
                onMouseLeave={() => setHoveredPoint(null)}
                className="cursor-pointer"
              />

              {/* Data Dots */}
              <circle cx={p.x} cy={p.revY} r="3" fill="#FF7A18" />
              <circle cx={p.x} cy={p.profY} r="2.5" fill="#35D07F" />

              {/* X Axis Month Label Every 3 Months */}
              {i % 3 === 0 && (
                <text x={p.x} y={height - 12} textAnchor="middle" fill="#9FB0BF" fontSize="9" className="font-mono">
                  {p.monthName.split(' ')[0]} {p.monthName.split(' ')[1].slice(2)}
                </text>
              )}
            </g>
          ))}

          {/* Hover Crosshair & Tooltip Overlay */}
          {hoveredPoint && (
            <g pointerEvents="none">
              <line x1={hoveredPoint.x} y1={paddingTop} x2={hoveredPoint.x} y2={height - paddingBottom} stroke="#F5F7FA" strokeWidth="1" strokeDasharray="2 2" />
              <circle cx={hoveredPoint.x} cy={hoveredPoint.revY} r="5" fill="#FF7A18" stroke="#071A2B" strokeWidth="2" />
              <circle cx={hoveredPoint.x} cy={hoveredPoint.profY} r="4" fill="#35D07F" stroke="#071A2B" strokeWidth="2" />
            </g>
          )}
        </svg>

        {/* Hover Tooltip Box */}
        {hoveredPoint && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-[#071A2B] border border-[#FF7A18] rounded-lg p-3 shadow-2xl font-mono text-xs space-y-1 text-[#F5F7FA] z-20 pointer-events-none">
            <div className="text-[#FF7A18] font-bold border-b border-[#102F45] pb-1">
              {hoveredPoint.monthName} ({hoveredPoint.orders.toLocaleString()} Orders)
            </div>
            <div className="flex justify-between gap-6 pt-1">
              <span className="text-[#9FB0BF]">Revenue:</span>
              <span className="font-bold text-[#FF7A18]">{formatCurrency(hoveredPoint.revenue)}</span>
            </div>
            <div className="flex justify-between gap-6">
              <span className="text-[#9FB0BF]">Profit:</span>
              <span className="font-bold text-[#35D07F]">{formatCurrency(hoveredPoint.profit)}</span>
            </div>
            <div className="flex justify-between gap-6 text-[11px] border-t border-[#102F45] pt-1">
              <span className="text-[#9FB0BF]">Margin:</span>
              <span className="font-bold text-[#F5F7FA]">{hoveredPoint.profitMarginPct.toFixed(2)}%</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

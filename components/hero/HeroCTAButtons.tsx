'use client';

import React from 'react';
import Link from 'next/link';

export default function HeroCTAButtons() {
  return (
    <div className="flex flex-wrap items-center gap-3 pt-2">
      {/* ==========================================
          PRIMARY CTA: EXPLORE ANALYTICS WORK
         ========================================== */}
      <Link
        href="/analytics"
        className="group relative inline-flex items-center gap-2.5 px-5 py-3 rounded-xl font-mono text-xs font-bold uppercase tracking-wider bg-[#D96B1A] dark:bg-[#EA7928] text-[#FFFFFF] dark:text-[#0A131C] shadow-md hover:bg-[#C55C10] dark:hover:bg-[#FF8833] transition-all duration-300 ease-out active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D96B1A] cursor-pointer"
      >
        {/* Minimal Analytical Trend Line Icon (Left) */}
        <svg
          className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Axis / Grid Baseline */}
          <line x1="2" y1="17" x2="18" y2="17" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.4" />
          
          {/* Analytical Trend Line Path */}
          <path
            d="M 3 14 L 7 10 L 12 12 L 17 5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-all duration-300"
          />
          
          {/* Data Points (Reveal & Highlight on Hover) */}
          <circle cx="3" cy="14" r="1.5" fill="currentColor" />
          <circle cx="7" cy="10" r="1.5" fill="currentColor" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
          <circle
            cx="17"
            cy="5"
            r="2"
            fill="currentColor"
            className="transition-transform duration-300 group-hover:scale-125"
          />
        </svg>

        <span>EXPLORE ANALYTICS WORK</span>

        {/* Upward Analytical Indicator Arrow (Right) */}
        <svg
          className="w-3.5 h-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 4 12 L 12 4 M 12 4 H 6 M 12 4 V 10"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>

      {/* ==========================================
          SECONDARY CTA: VIEW ALL PROJECTS
         ========================================== */}
      <Link
        href="/projects"
        className="group relative inline-flex items-center gap-2.5 px-4.5 py-3 rounded-xl font-mono text-xs font-bold uppercase tracking-wider bg-theme-surface border border-theme-muted text-theme-main hover:border-theme-sage hover:bg-theme-surface/90 transition-all duration-300 ease-out active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme-sage cursor-pointer"
      >
        {/* Minimalist 2x2 Grid Dataset Icon (Left) */}
        <svg
          className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:scale-105"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Cell 1: Top-Left (Filled default) */}
          <rect x="2.5" y="2.5" width="5.5" height="5.5" rx="1" className="fill-theme-sage stroke-theme-sage" strokeWidth="1" />
          
          {/* Cell 2: Top-Right (Outline default -> Fills on Hover) */}
          <rect
            x="10"
            y="2.5"
            width="5.5"
            height="5.5"
            rx="1"
            className="stroke-theme-secondary group-hover:fill-theme-sage group-hover:stroke-theme-sage transition-all duration-300"
            strokeWidth="1.2"
            fill="none"
          />
          
          {/* Cell 3: Bottom-Left (Outline default) */}
          <rect x="2.5" y="10" width="5.5" height="5.5" rx="1" className="stroke-theme-secondary" strokeWidth="1.2" fill="none" />
          
          {/* Cell 4: Bottom-Right (Filled default) */}
          <rect x="10" y="10" width="5.5" height="5.5" rx="1" className="fill-theme-sage stroke-theme-sage" strokeWidth="1" />
        </svg>

        <span>VIEW ALL PROJECTS</span>
      </Link>

      {/* TERTIARY LINK: Contact Me */}
      <Link
        href="/contact"
        className="px-3 py-3 font-mono text-xs font-medium text-theme-secondary hover:text-theme-main transition-colors duration-200 cursor-pointer"
      >
        Contact Me →
      </Link>
    </div>
  );
}

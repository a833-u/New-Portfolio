'use client';

import React from 'react';

export default function StatusIndicator() {
  return (
    <div className="flex items-center gap-3 p-4 bg-theme-surface border border-theme-muted rounded-sm transition-colors duration-200">
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-theme-sage opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-theme-sage"></span>
      </span>
      <div>
        <div className="text-xs font-mono tracking-widest text-theme-sage uppercase font-medium">
          Available For Opportunities
        </div>
        <div className="text-xs text-theme-secondary">
          Data Analyst · Frontend Developer · Data-focused Software Roles
        </div>
      </div>
    </div>
  );
}

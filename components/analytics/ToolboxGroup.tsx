import React from 'react';
import { toolboxCategories } from '@/data/portfolioData';

export default function ToolboxGroup() {
  return (
    <div className="space-y-6 py-6">
      <div className="space-y-1">
        <span className="text-[11px] font-mono tracking-widest text-theme-sage uppercase font-semibold">
          Technical Capabilities
        </span>
        <h3 className="text-xl font-bold text-theme-main">
          Grouped Technology Matrix
        </h3>
        <p className="text-xs text-theme-secondary">
          No arbitrary percentages or progress bars — structured strictly by technical domain.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {toolboxCategories.map((cat) => (
          <div
            key={cat.category}
            className="p-4 bg-theme-surface border border-theme-muted rounded-sm space-y-3 hover:border-theme-sage transition-colors duration-200"
          >
            <div className="text-xs font-mono font-bold tracking-wider text-theme-sage border-b border-theme-muted pb-2">
              {cat.category}
            </div>

            <div className="flex flex-wrap gap-1.5">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-mono px-2 py-1 bg-theme-muted/60 text-theme-main border border-theme-muted rounded-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

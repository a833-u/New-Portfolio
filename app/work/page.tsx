import React from 'react';
import CareerProgressionTimeline from '@/components/experience/CareerProgressionTimeline';
import { personalDetails } from '@/data/portfolioData';

export default function WorkPage() {
  return (
    <div className="space-y-12">
      {/* Header Title */}
      <section className="space-y-2 border-b border-theme-muted pb-6">
        <div className="text-xs font-mono font-bold tracking-widest text-theme-sage uppercase">
          Professional History
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-theme-main">
          EXPERIENCE
        </h1>
        <p className="text-sm text-theme-secondary font-mono">
          The work behind the projects.
        </p>
      </section>

      {/* Main Experience Component */}
      <section>
        <CareerProgressionTimeline />
      </section>
    </div>
  );
}

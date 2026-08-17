'use client';

import React, { useState, useMemo } from 'react';
import { BookOpen, BarChart3, Cpu } from 'lucide-react';
import WorkflowStepper from '@/components/analytics/WorkflowStepper';
import TechRelationshipGraph from '@/components/analytics/TechRelationshipGraph';
import ScrollReveal from '@/components/ui/ScrollReveal';

// Case Study Components
import ShoppingHero from '@/components/shoppingBehavior/caseStudy/ShoppingHero';
import RFMPipeline from '@/components/shoppingBehavior/caseStudy/RFMPipeline';
import ShoppingDataQualityCard from '@/components/shoppingBehavior/caseStudy/ShoppingDataQualityCard';
import ShoppingSqlExplorer from '@/components/shoppingBehavior/caseStudy/ShoppingSqlExplorer';
import { ShoppingInsights, ShoppingRecommendations } from '@/components/shoppingBehavior/caseStudy/ShoppingInsights';

// BI Dashboard Components
import { ShoppingDashboardHeader, ShoppingKPIGrid } from '@/components/shoppingBehavior/dashboard/ShoppingDashboardHeader';
import { RFMDistributionChart, CategorySubscriptionGrid } from '@/components/shoppingBehavior/dashboard/RFMDistributionChart';
import CustomerTable from '@/components/shoppingBehavior/dashboard/CustomerTable';

// Services & Types
import { ShoppingFilterState } from '@/types/shoppingBehavior';
import { getFilteredShoppingKPIs } from '@/services/shoppingBehaviorService';

export default function ShoppingBehaviorPage() {
  const [activeTab, setActiveTab] = useState<'case-study' | 'dashboard' | 'methodology'>('case-study');

  const [filters, setFilters] = useState<ShoppingFilterState>({
    category: 'All',
    subscription: 'All',
    rfmSegment: 'All',
    gender: 'All',
    search: ''
  });

  const filteredKPIs = useMemo(() => {
    return getFilteredShoppingKPIs(filters);
  }, [filters]);

  return (
    <div className="space-y-8">
      {/* Primary Navigation Tab Switcher */}
      <section className="space-y-4 border-b border-theme-muted pb-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <div className="text-xs font-mono font-bold tracking-widest text-[#00E5A3] uppercase">
              // CUSTOMER ANALYTICS & RFM PRODUCT
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-theme-main font-sans">
              CUSTOMER SHOPPING BEHAVIOR ANALYSIS
            </h1>
          </div>

          {/* Navigation Mode Switcher Carousel Slider */}
          <div className="w-full md:w-auto overflow-x-auto custom-scrollbar pb-1 md:pb-0">
            <div className="flex items-center gap-1.5 p-1.5 bg-[#041C1E] border border-[#10353B] rounded-xl min-w-max">
              <button
                onClick={() => setActiveTab('case-study')}
                className={`px-3.5 py-2 rounded-lg text-xs font-mono transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
                  activeTab === 'case-study'
                    ? 'bg-[#00E5A3] text-[#041C1E] font-bold shadow-md'
                    : 'text-[#8EAAB0] hover:text-[#F0FDFA]'
                }`}
              >
                <BookOpen className="w-4 h-4 shrink-0" />
                <span>Full Case Study & SQL Explorer</span>
              </button>

              <button
                onClick={() => setActiveTab('dashboard')}
                className={`px-3.5 py-2 rounded-lg text-xs font-mono transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
                  activeTab === 'dashboard'
                    ? 'bg-[#00E5A3] text-[#041C1E] font-bold shadow-md'
                    : 'text-[#8EAAB0] hover:text-[#F0FDFA]'
                }`}
              >
                <BarChart3 className="w-4 h-4 shrink-0" />
                <span>Interactive BI Dashboard</span>
              </button>

              <button
                onClick={() => setActiveTab('methodology')}
                className={`px-3.5 py-2 rounded-lg text-xs font-mono transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
                  activeTab === 'methodology'
                    ? 'bg-[#00E5A3] text-[#041C1E] font-bold shadow-md'
                    : 'text-[#8EAAB0] hover:text-[#F0FDFA]'
                }`}
              >
                <Cpu className="w-4 h-4 shrink-0" />
                <span>Analytical Workflow</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* VIEW 1: FULL CASE STUDY & SQL EXPLORER */}
      {activeTab === 'case-study' && (
        <div className="space-y-10">
          <ShoppingHero onSwitchToDashboard={() => setActiveTab('dashboard')} />
          <RFMPipeline />
          <ShoppingDataQualityCard />
          <ShoppingSqlExplorer />
          <ShoppingInsights />
          <ShoppingRecommendations />
        </div>
      )}

      {/* VIEW 2: INTERACTIVE BI DASHBOARD */}
      {activeTab === 'dashboard' && (
        <div className="space-y-6">
          <ShoppingDashboardHeader
            filters={filters}
            setFilters={setFilters}
            onSwitchToCaseStudy={() => setActiveTab('case-study')}
          />
          <ShoppingKPIGrid metrics={filteredKPIs} />
          <RFMDistributionChart />
          <CategorySubscriptionGrid />
          <CustomerTable filters={filters} setFilters={setFilters} />
        </div>
      )}

      {/* VIEW 3: ANALYTICAL WORKFLOW */}
      {activeTab === 'methodology' && (
        <div className="space-y-10 pt-2">
          <section className="space-y-2 border-b border-theme-muted pb-4">
            <h2 className="text-xl font-bold tracking-tight text-theme-main">
              RFM ANALYTICAL PIPELINE & METHODOLOGY
            </h2>
            <p className="text-xs text-theme-secondary font-mono">
              8-stage customer intelligence lifecycle, technical tools, and architecture.
            </p>
          </section>

          <RFMPipeline />

          <ScrollReveal className="space-y-4">
            <WorkflowStepper />
          </ScrollReveal>

          <ScrollReveal>
            <TechRelationshipGraph />
          </ScrollReveal>
        </div>
      )}
    </div>
  );
}

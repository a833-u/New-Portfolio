'use client';

import React, { useState, useMemo } from 'react';
import WorkflowStepper from '@/components/analytics/WorkflowStepper';
import ToolboxGroup from '@/components/analytics/ToolboxGroup';
import TechRelationshipGraph from '@/components/analytics/TechRelationshipGraph';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { BookOpen, BarChart3, Cpu, Sparkles } from 'lucide-react';

// Case Study Components
import CaseStudyHero from '@/components/analytics/caseStudy/CaseStudyHero';
import VisualDataPipeline from '@/components/analytics/caseStudy/VisualDataPipeline';
import DataQualityLogCard from '@/components/analytics/caseStudy/DataQualityLogCard';
import SqlExplorerSection from '@/components/analytics/caseStudy/SqlExplorerSection';
import ExecutiveInsightsSection from '@/components/analytics/caseStudy/ExecutiveInsightsSection';
import RecommendationsSection from '@/components/analytics/caseStudy/RecommendationsSection';

// BI Dashboard Components
import DashboardHeader from '@/components/analytics/dashboard/DashboardHeader';
import KPISummaryGrid from '@/components/analytics/dashboard/KPISummaryGrid';
import MonthlyTrendChart from '@/components/analytics/dashboard/MonthlyTrendChart';
import YearlyComparisonCard from '@/components/analytics/dashboard/YearlyComparisonCard';
import CategoryPerformanceChart from '@/components/analytics/dashboard/CategoryPerformanceChart';
import SegmentRegionGrid from '@/components/analytics/dashboard/SegmentRegionGrid';
import TargetPerformanceSection from '@/components/analytics/dashboard/TargetPerformanceSection';
import { DiscountMarginAnalysis, PaymentMethodBreakdown } from '@/components/analytics/dashboard/DiscountMarginAnalysis';
import SalespersonTable from '@/components/analytics/dashboard/SalespersonTable';
import ProductPerformanceSection from '@/components/analytics/dashboard/ProductPerformanceSection';

// Data & Services
import { FilterState } from '@/types/analytics';
import { getFilteredKPIs } from '@/services/analyticsService';

export default function AnalyticsPage() {
  const [activeTab, setActiveTab] = useState<'case-study' | 'dashboard' | 'methodology'>('case-study');

  const [filters, setFilters] = useState<FilterState>({
    region: 'All',
    category: 'All',
    customerSegment: 'All',
    paymentMethod: 'All',
    targetStatus: 'All',
    salespersonSearch: ''
  });

  const filteredKPIs = useMemo(() => {
    return getFilteredKPIs(filters);
  }, [filters]);

  return (
    <div className="space-y-8">
      {/* Top Primary Tab Switcher Header */}
      <section className="space-y-4 border-b border-theme-muted pb-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="text-xs font-mono font-bold tracking-widest text-theme-sage uppercase">
              // DATA ANALYTICS & BI PRODUCT
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-theme-main font-sans">
              BUSINESS PERFORMANCE ANALYTICS
            </h1>
          </div>

          {/* Navigation Mode Switcher */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#071A2B] border border-[#102F45] rounded-lg">
            <button
              onClick={() => setActiveTab('case-study')}
              className={`px-3 py-1.5 rounded text-xs font-mono transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'case-study'
                  ? 'bg-[#FF7A18] text-[#071A2B] font-bold shadow-md'
                  : 'text-[#9FB0BF] hover:text-[#F5F7FA]'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Full Case Study & SQL Explorer</span>
            </button>

            <button
              onClick={() => setActiveTab('dashboard')}
              className={`px-3 py-1.5 rounded text-xs font-mono transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'dashboard'
                  ? 'bg-[#FF7A18] text-[#071A2B] font-bold shadow-md'
                  : 'text-[#9FB0BF] hover:text-[#F5F7FA]'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Interactive BI Dashboard</span>
            </button>

            <button
              onClick={() => setActiveTab('methodology')}
              className={`px-3 py-1.5 rounded text-xs font-mono transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'methodology'
                  ? 'bg-[#FF7A18] text-[#071A2B] font-bold shadow-md'
                  : 'text-[#9FB0BF] hover:text-[#F5F7FA]'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>Analytical Workflow</span>
            </button>
          </div>
        </div>
      </section>

      {/* VIEW 1: FULL CASE STUDY & SQL EXPLORER */}
      {activeTab === 'case-study' && (
        <div className="space-y-10">
          <CaseStudyHero onSwitchToDashboard={() => setActiveTab('dashboard')} />
          <VisualDataPipeline />
          <DataQualityLogCard />
          <SqlExplorerSection />
          <ExecutiveInsightsSection />
          <RecommendationsSection />
        </div>
      )}

      {/* VIEW 2: INTERACTIVE BI DASHBOARD */}
      {activeTab === 'dashboard' && (
        <div className="space-y-6">
          <DashboardHeader
            filters={filters}
            setFilters={setFilters}
            onSwitchToCaseStudy={() => setActiveTab('case-study')}
          />
          <KPISummaryGrid metrics={filteredKPIs} />
          <MonthlyTrendChart />
          <YearlyComparisonCard />
          <CategoryPerformanceChart />
          <SegmentRegionGrid />
          <TargetPerformanceSection />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <DiscountMarginAnalysis />
            <PaymentMethodBreakdown />
          </div>

          <SalespersonTable filters={filters} setFilters={setFilters} />
          <ProductPerformanceSection />
        </div>
      )}

      {/* VIEW 3: ANALYTICAL METHODOLOGY & TECH GRAPH (100% PRESERVED) */}
      {activeTab === 'methodology' && (
        <div className="space-y-12 pt-2">
          <section className="space-y-2 border-b border-theme-muted pb-4">
            <h2 className="text-xl font-bold tracking-tight text-theme-main">
              HOW I ANALYZE DATA
            </h2>
            <p className="text-xs text-theme-secondary font-mono">
              My 7-stage analytical pipeline, tools, and technical relationship graph.
            </p>
          </section>

          <ScrollReveal className="space-y-4">
            <WorkflowStepper />
          </ScrollReveal>

          <ScrollReveal>
            <ToolboxGroup />
          </ScrollReveal>

          <ScrollReveal>
            <TechRelationshipGraph />
          </ScrollReveal>
        </div>
      )}
    </div>
  );
}

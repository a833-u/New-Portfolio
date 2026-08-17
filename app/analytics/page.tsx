'use client';

import React, { useState, useMemo } from 'react';
import WorkflowStepper from '@/components/analytics/WorkflowStepper';
import ToolboxGroup from '@/components/analytics/ToolboxGroup';
import TechRelationshipGraph from '@/components/analytics/TechRelationshipGraph';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { BookOpen, BarChart3, Cpu, CheckCircle2, ChevronRight, Layers, LayoutGrid } from 'lucide-react';

// ==========================================
// 1. BUSINESS PERFORMANCE ANALYTICS IMPORTS
// ==========================================
import CaseStudyHero from '@/components/analytics/caseStudy/CaseStudyHero';
import VisualDataPipeline from '@/components/analytics/caseStudy/VisualDataPipeline';
import DataQualityLogCard from '@/components/analytics/caseStudy/DataQualityLogCard';
import SqlExplorerSection from '@/components/analytics/caseStudy/SqlExplorerSection';
import ExecutiveInsightsSection from '@/components/analytics/caseStudy/ExecutiveInsightsSection';
import RecommendationsSection from '@/components/analytics/caseStudy/RecommendationsSection';

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

import { FilterState } from '@/types/analytics';
import { getFilteredKPIs } from '@/services/analyticsService';

// ==========================================
// 2. CUSTOMER SHOPPING BEHAVIOR IMPORTS
// ==========================================
import ShoppingHero from '@/components/shoppingBehavior/caseStudy/ShoppingHero';
import RFMPipeline from '@/components/shoppingBehavior/caseStudy/RFMPipeline';
import ShoppingDataQualityCard from '@/components/shoppingBehavior/caseStudy/ShoppingDataQualityCard';
import ShoppingSqlExplorer from '@/components/shoppingBehavior/caseStudy/ShoppingSqlExplorer';
import { ShoppingInsights, ShoppingRecommendations } from '@/components/shoppingBehavior/caseStudy/ShoppingInsights';

import { ShoppingDashboardHeader, ShoppingKPIGrid } from '@/components/shoppingBehavior/dashboard/ShoppingDashboardHeader';
import { RFMDistributionChart, CategorySubscriptionGrid } from '@/components/shoppingBehavior/dashboard/RFMDistributionChart';
import CustomerTable from '@/components/shoppingBehavior/dashboard/CustomerTable';

import { ShoppingFilterState } from '@/types/shoppingBehavior';
import { getFilteredShoppingKPIs } from '@/services/shoppingBehaviorService';

export default function AnalyticsPage() {
  // Main Project Selector: 'business-sales' | 'customer-rfm'
  const [selectedProject, setSelectedProject] = useState<'business-sales' | 'customer-rfm'>('business-sales');

  // Sub-view Tab Switcher for active project
  const [activeTab, setActiveTab] = useState<'case-study' | 'dashboard' | 'methodology'>('case-study');

  // Filters for Business Performance Analytics
  const [businessFilters, setBusinessFilters] = useState<FilterState>({
    region: 'All',
    category: 'All',
    customerSegment: 'All',
    paymentMethod: 'All',
    targetStatus: 'All',
    salespersonSearch: ''
  });

  const businessKPIs = useMemo(() => {
    return getFilteredKPIs(businessFilters);
  }, [businessFilters]);

  // Filters for Customer Shopping Behavior
  const [shoppingFilters, setShoppingFilters] = useState<ShoppingFilterState>({
    category: 'All',
    subscription: 'All',
    rfmSegment: 'All',
    gender: 'All',
    search: ''
  });

  const shoppingKPIs = useMemo(() => {
    return getFilteredShoppingKPIs(shoppingFilters);
  }, [shoppingFilters]);

  return (
    <div className="space-y-8 sm:space-y-10">
      {/* ==========================================
          ANALYTICS SHOWCASE HEADER & PROJECT SELECTOR
         ========================================== */}
      <section className="space-y-6 border-b border-theme-muted pb-6">
        <div className="space-y-2">
          <div className="text-xs font-mono font-bold tracking-widest text-theme-sage uppercase">
            // ENTERPRISE DATA ANALYTICS & BI PRODUCTS
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-theme-main font-sans">
            Business Intelligence & Analytics Hub
          </h1>
          <p className="text-xs sm:text-sm text-theme-secondary max-w-3xl leading-relaxed">
            Select an analytics project below to inspect interactive PostgreSQL dashboards, SQL explorers, data quality audits, and strategic executive recommendations.
          </p>
        </div>

        {/* Side-by-Side Interactive Project Selector Cards Grid / Mobile Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {/* PROJECT CARD 1: Business Performance Analytics */}
          <button
            onClick={() => setSelectedProject('business-sales')}
            className={`p-5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between space-y-4 shadow-lg ${
              selectedProject === 'business-sales'
                ? 'bg-[#071A2B] border-[#FF7A18] text-[#F5F7FA] ring-2 ring-[#FF7A18]/40 scale-[1.005]'
                : 'bg-theme-surface border-theme-muted text-theme-main hover:border-theme-sage'
            }`}
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded ${
                  selectedProject === 'business-sales'
                    ? 'bg-[#FF7A18] text-[#071A2B]'
                    : 'bg-theme-muted text-theme-sage'
                }`}>
                  PROJECT 01 · ENTERPRISE SALES
                </span>
                {selectedProject === 'business-sales' && (
                  <span className="text-xs font-mono text-[#FF7A18] font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" /> ACTIVE VIEW
                  </span>
                )}
              </div>

              <h2 className="text-lg sm:text-xl font-extrabold tracking-tight leading-snug">
                Business Performance Analytics
              </h2>

              <p className={`text-xs leading-relaxed ${selectedProject === 'business-sales' ? 'text-[#9FB0BF]' : 'text-theme-secondary'}`}>
                99,970 transaction-level sales analysis (Jan 2024 – Jun 2026), profitability trends, target hit rates, and 80-salesperson performance matrix.
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-current/10">
              <div className="flex flex-wrap gap-1.5 text-[10px] sm:text-[11px] font-mono">
                <span className="px-2 py-0.5 rounded bg-black/20 font-bold text-[#FF7A18]">₹3.37B Revenue</span>
                <span className="px-2 py-0.5 rounded bg-black/20 text-[#35D07F]">31.41% Margin</span>
                <span className="px-2 py-0.5 rounded bg-black/20 text-[#F5F7FA]">11 SQL Queries</span>
                <span className="px-2 py-0.5 rounded bg-black/20 text-[#9FB0BF]">80 Reps</span>
              </div>
            </div>
          </button>

          {/* PROJECT CARD 2: Customer Shopping Behavior Analysis */}
          <button
            onClick={() => setSelectedProject('customer-rfm')}
            className={`p-5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between space-y-4 shadow-lg ${
              selectedProject === 'customer-rfm'
                ? 'bg-[#041C1E] border-[#00E5A3] text-[#F0FDFA] ring-2 ring-[#00E5A3]/40 scale-[1.005]'
                : 'bg-theme-surface border-theme-muted text-theme-main hover:border-theme-sage'
            }`}
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded ${
                  selectedProject === 'customer-rfm'
                    ? 'bg-[#00E5A3] text-[#041C1E]'
                    : 'bg-theme-muted text-theme-sage'
                }`}>
                  PROJECT 02 · CUSTOMER RFM
                </span>
                {selectedProject === 'customer-rfm' && (
                  <span className="text-xs font-mono text-[#00E5A3] font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" /> ACTIVE VIEW
                  </span>
                )}
              </div>

              <h2 className="text-lg sm:text-xl font-extrabold tracking-tight leading-snug">
                Customer Shopping Behavior Analysis
              </h2>

              <p className={`text-xs leading-relaxed ${selectedProject === 'customer-rfm' ? 'text-[#8EAAB0]' : 'text-theme-secondary'}`}>
                3,900 customer purchasing profiles, PostgreSQL NTILE RFM quartiles, VIP Pareto contribution (54% spend), and subscription LTV multipliers.
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-current/10">
              <div className="flex flex-wrap gap-1.5 text-[10px] sm:text-[11px] font-mono">
                <span className="px-2 py-0.5 rounded bg-black/20 font-bold text-[#00E5A3]">$233.9K Spend</span>
                <span className="px-2 py-0.5 rounded bg-black/20 text-[#38BDF8]">54% VIP Share</span>
                <span className="px-2 py-0.5 rounded bg-black/20 text-[#F0FDFA]">8 SQL Queries</span>
                <span className="px-2 py-0.5 rounded bg-black/20 text-[#8EAAB0]">RFM Model</span>
              </div>
            </div>
          </button>
        </div>

        {/* View Mode Tabs Header (Same width, 3 tabs for BOTH projects, mobile horizontal slider) */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pt-2">
          <div className="text-xs font-mono font-bold text-theme-main uppercase flex flex-wrap items-center gap-2">
            <span className="text-theme-secondary">// SELECTED PROJECT VIEW:</span>
            <span className={`px-2.5 py-1 rounded font-bold transition-colors ${
              selectedProject === 'business-sales'
                ? 'bg-[#FF7A18]/15 text-[#FF7A18] border border-[#FF7A18]/30'
                : 'bg-[#00E5A3]/15 text-[#00E5A3] border border-[#00E5A3]/30'
            }`}>
              {selectedProject === 'business-sales' ? '01 · Business Performance Analytics' : '02 · Customer Shopping Behavior'}
            </span>
          </div>

          {/* Sub-view Tab Container Slider / Carousel (Fixed Width & Identical 3 Tabs for Both Projects) */}
          <div className="w-full md:w-auto overflow-x-auto custom-scrollbar pb-1 md:pb-0">
            <div className="flex items-center gap-1.5 p-1.5 bg-theme-surface border border-theme-muted rounded-xl min-w-max">
              <button
                onClick={() => setActiveTab('case-study')}
                className={`px-3.5 py-2 rounded-lg text-xs font-mono transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
                  activeTab === 'case-study'
                    ? selectedProject === 'business-sales'
                      ? 'bg-[#FF7A18] text-[#071A2B] font-bold shadow-md'
                      : 'bg-[#00E5A3] text-[#041C1E] font-bold shadow-md'
                    : 'text-theme-secondary hover:text-theme-main hover:bg-theme-muted/50'
                }`}
              >
                <BookOpen className="w-4 h-4 shrink-0" />
                <span>Full Case Study & SQL Explorer</span>
              </button>

              <button
                onClick={() => setActiveTab('dashboard')}
                className={`px-3.5 py-2 rounded-lg text-xs font-mono transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
                  activeTab === 'dashboard'
                    ? selectedProject === 'business-sales'
                      ? 'bg-[#FF7A18] text-[#071A2B] font-bold shadow-md'
                      : 'bg-[#00E5A3] text-[#041C1E] font-bold shadow-md'
                    : 'text-theme-secondary hover:text-theme-main hover:bg-theme-muted/50'
                }`}
              >
                <BarChart3 className="w-4 h-4 shrink-0" />
                <span>Interactive BI Dashboard</span>
              </button>

              <button
                onClick={() => setActiveTab('methodology')}
                className={`px-3.5 py-2 rounded-lg text-xs font-mono transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
                  activeTab === 'methodology'
                    ? selectedProject === 'business-sales'
                      ? 'bg-[#FF7A18] text-[#071A2B] font-bold shadow-md'
                      : 'bg-[#00E5A3] text-[#041C1E] font-bold shadow-md'
                    : 'text-theme-secondary hover:text-theme-main hover:bg-theme-muted/50'
                }`}
              >
                <Cpu className="w-4 h-4 shrink-0" />
                <span>Analytical Workflow</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          PROJECT 01: BUSINESS PERFORMANCE ANALYTICS
         ========================================== */}
      {selectedProject === 'business-sales' && (
        <>
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

          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              <DashboardHeader
                filters={businessFilters}
                setFilters={setBusinessFilters}
                onSwitchToCaseStudy={() => setActiveTab('case-study')}
              />
              <KPISummaryGrid metrics={businessKPIs} />
              <MonthlyTrendChart />
              <YearlyComparisonCard />
              <CategoryPerformanceChart />
              <SegmentRegionGrid />
              <TargetPerformanceSection />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <DiscountMarginAnalysis />
                <PaymentMethodBreakdown />
              </div>

              <SalespersonTable filters={businessFilters} setFilters={setBusinessFilters} />
              <ProductPerformanceSection />
            </div>
          )}

          {activeTab === 'methodology' && (
            <div className="space-y-12 pt-2">
              <section className="space-y-2 border-b border-theme-muted pb-4">
                <h2 className="text-xl font-bold tracking-tight text-theme-main">
                  HOW I ANALYZE DATA (BUSINESS PERFORMANCE ANALYTICS)
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
        </>
      )}

      {/* ==========================================
          PROJECT 02: CUSTOMER SHOPPING BEHAVIOR
         ========================================== */}
      {selectedProject === 'customer-rfm' && (
        <>
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

          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              <ShoppingDashboardHeader
                filters={shoppingFilters}
                setFilters={setShoppingFilters}
                onSwitchToCaseStudy={() => setActiveTab('case-study')}
              />
              <ShoppingKPIGrid metrics={shoppingKPIs} />
              <RFMDistributionChart />
              <CategorySubscriptionGrid />
              <CustomerTable filters={shoppingFilters} setFilters={setShoppingFilters} />
            </div>
          )}

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
        </>
      )}
    </div>
  );
}

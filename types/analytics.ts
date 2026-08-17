export interface KPIMetrics {
  totalTransactions: number;
  totalQuantity: number;
  totalRevenue: number;
  totalProfit: number;
  profitMarginPct: number;
  averageOrderValue: number;
  targetHitRatePct: number;
  metTargetCount: number;
  belowTargetCount: number;
}

export interface MonthlyTrendPoint {
  month: string;
  year: number;
  monthName: string;
  orders: number;
  revenue: number;
  profit: number;
  profitMarginPct: number;
  avgOrderValue: number;
}

export interface YearlyPerformance {
  year: string;
  isYTD?: boolean;
  periodLabel: string;
  orders: number;
  quantity: number;
  revenue: number;
  profit: number;
  profitMarginPct: number;
}

export interface CategoryPerformance {
  category: string;
  rawCategory?: string;
  orders: number;
  revenue: number;
  profit: number;
  profitMarginPct: number;
  avgOrderValue: number;
  isMarginLeader?: boolean;
  isRevenueLeader?: boolean;
}

export interface SegmentPerformance {
  segment: string;
  orders: number;
  revenue: number;
  profit: number;
  profitMarginPct: number;
  avgOrderValue: number;
}

export interface RegionalPerformance {
  region: string;
  orders: number;
  quantity: number;
  revenue: number;
  profit: number;
  profitMarginPct: number;
}

export interface TargetPerformanceBand {
  targetAmount: number;
  targetLabel: string;
  transactions: number;
  hitRatePct: number;
}

export interface TargetPerformanceOverall {
  totalTransactions: number;
  metTargetCount: number;
  belowTargetCount: number;
  hitRatePct: number;
  bands: TargetPerformanceBand[];
  note: string;
}

export interface DiscountBandPerformance {
  band: string;
  orders: number;
  profitMarginPct: number;
  avgRevenue: number;
  avgProfit: number;
  description: string;
}

export interface PaymentPerformance {
  method: string;
  displayMethod: string;
  rawMethod?: string;
  transactions: number;
  revenue: number;
  profit: number;
  profitMarginPct: number;
  avgOrderValue: number;
}

export type SalespersonPerformanceTag = 
  | 'High Performer'
  | 'High Sales / Low Efficiency'
  | 'Efficient / Growth Opportunity'
  | 'Needs Attention';

export interface SalespersonRecord {
  id: string;
  name: string;
  region: string;
  orders: number;
  revenue: number;
  profit: number;
  profitMarginPct: number;
  salesTarget: number;
  targetAchievementPct: number;
  targetGap: number;
  avgOrderValue: number;
  performanceClass: SalespersonPerformanceTag;
}

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  revenue: number;
  profit: number;
  profitMarginPct: number;
  orders: number;
  quantity: number;
}

export interface SqlQueryItem {
  id: string;
  queryNumber: string;
  title: string;
  businessQuestion: string;
  sqlCode: string;
  explanation: string;
  expectedOutput: string;
  resultHeaders: string[];
  resultRows: (string | number)[][];
}

export interface ExecutiveInsight {
  id: string;
  category: string;
  title: string;
  metric: string;
  description: string;
  impactLevel: 'High' | 'Critical' | 'Medium';
}

export interface StrategicRecommendation {
  id: number;
  title: string;
  action: string;
  finding: string;
  businessRationale: string;
  priority: 'Immediate' | 'High' | 'Medium';
}

export interface FilterState {
  region: string;
  category: string;
  customerSegment: string;
  paymentMethod: string;
  targetStatus: string;
  salespersonSearch: string;
}

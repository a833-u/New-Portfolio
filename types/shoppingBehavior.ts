export interface ShoppingKPIMetrics {
  totalCustomers: number;
  totalRevenue: number;
  avgOrderAmount: number;
  vipRevenueSharePct: number;
  subscriberPct: number;
  avgReviewRating: number;
  championsCount: number;
  atRiskCount: number;
}

export interface RFMSegmentPerformance {
  segment: string;
  customerCount: number;
  customerPct: number;
  totalRevenue: number;
  avgSpend: number;
  avgFrequency: number;
  avgRecencyDays: number;
  description: string;
}

export interface ShoppingCategoryPerformance {
  category: string;
  itemsPurchased: number;
  totalRevenue: number;
  avgPrice: number;
  avgRating: number;
  popularItem: string;
}

export interface SubscriptionImpact {
  status: 'Subscribed' | 'Non-Subscribed';
  customerCount: number;
  totalRevenue: number;
  avgSpend: number;
  avgOrders: number;
  discountUsagePct: number;
}

export interface CustomerRecord {
  id: string;
  age: number;
  gender: string;
  category: string;
  itemPurchased: string;
  purchaseAmount: number;
  location: string;
  size: string;
  color: string;
  season: string;
  reviewRating: number;
  subscriptionStatus: 'Yes' | 'No';
  shippingType: string;
  discountApplied: 'Yes' | 'No';
  promoCodeUsed: 'Yes' | 'No';
  previousPurchases: number;
  paymentMethod: string;
  frequencyOfPurchases: string;
  rfmSegment: 'Champions' | 'Loyal Customers' | 'Potential Loyalists' | 'At Risk';
}

export interface ShoppingSqlQueryItem {
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

export interface ShoppingExecutiveInsight {
  id: string;
  category: string;
  title: string;
  metric: string;
  description: string;
  impactLevel: 'High' | 'Critical' | 'Medium';
}

export interface ShoppingRecommendation {
  id: number;
  title: string;
  action: string;
  finding: string;
  businessRationale: string;
  priority: 'Immediate' | 'High' | 'Medium';
}

export interface ShoppingFilterState {
  category: string;
  subscription: string;
  rfmSegment: string;
  gender: string;
  search: string;
}

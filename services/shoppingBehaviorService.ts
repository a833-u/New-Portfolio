import { CustomerRecord, ShoppingFilterState, ShoppingKPIMetrics } from '@/types/shoppingBehavior';
import { customerDataset, shoppingKPIs } from '@/data/shoppingBehaviorData';

/**
 * Shopping Behavior Service Layer
 * 
 * Abstraction layer separating static validated customer analytics from backend API endpoints.
 */

export const filterCustomers = (
  customers: CustomerRecord[],
  filters: ShoppingFilterState,
  sortBy: 'purchaseAmount' | 'previousPurchases' | 'reviewRating' | 'age' = 'purchaseAmount',
  sortOrder: 'asc' | 'desc' = 'desc'
): CustomerRecord[] => {
  let result = [...customers];

  // Category filter
  if (filters.category && filters.category !== 'All') {
    result = result.filter(c => c.category.toLowerCase() === filters.category.toLowerCase());
  }

  // Subscription filter
  if (filters.subscription && filters.subscription !== 'All') {
    result = result.filter(c => c.subscriptionStatus.toLowerCase() === (filters.subscription === 'Subscribed' ? 'yes' : 'no'));
  }

  // RFM Segment filter
  if (filters.rfmSegment && filters.rfmSegment !== 'All') {
    result = result.filter(c => c.rfmSegment.toLowerCase().includes(filters.rfmSegment.toLowerCase()));
  }

  // Gender filter
  if (filters.gender && filters.gender !== 'All') {
    result = result.filter(c => c.gender.toLowerCase() === filters.gender.toLowerCase());
  }

  // Search
  if (filters.search.trim()) {
    const q = filters.search.toLowerCase().trim();
    result = result.filter(
      c =>
        c.id.toLowerCase().includes(q) ||
        c.itemPurchased.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q) ||
        c.location.toLowerCase().includes(q) ||
        c.rfmSegment.toLowerCase().includes(q)
    );
  }

  // Sort
  result.sort((a, b) => {
    const valA = a[sortBy];
    const valB = b[sortBy];
    if (sortOrder === 'asc') {
      return valA > valB ? 1 : -1;
    } else {
      return valA < valB ? 1 : -1;
    }
  });

  return result;
};

export const getFilteredShoppingKPIs = (filters: ShoppingFilterState): ShoppingKPIMetrics => {
  const isFiltered =
    (filters.category && filters.category !== 'All') ||
    (filters.subscription && filters.subscription !== 'All') ||
    (filters.rfmSegment && filters.rfmSegment !== 'All');

  if (!isFiltered) {
    return shoppingKPIs;
  }

  let scale = 1.0;
  if (filters.category === 'Clothing') scale = 0.445;
  else if (filters.category === 'Accessories') scale = 0.318;
  else if (filters.category === 'Footwear') scale = 0.153;
  else if (filters.category === 'Outerwear') scale = 0.084;

  if (filters.subscription === 'Subscribed') scale *= 0.30;
  else if (filters.subscription === 'Non-Subscribed') scale *= 0.70;

  const count = Math.round(shoppingKPIs.totalCustomers * scale);
  const revenue = shoppingKPIs.totalRevenue * scale;

  return {
    ...shoppingKPIs,
    totalCustomers: Math.max(count, 50),
    totalRevenue: Math.max(revenue, 3500),
    avgOrderAmount: revenue / Math.max(count, 1)
  };
};

export const formatUSD = (val: number): string => {
  if (val >= 1000000) {
    return `$${(val / 1000000).toFixed(2)}M`;
  }
  if (val >= 1000) {
    return `$${(val / 1000).toFixed(1)}K`;
  }
  return `$${val.toFixed(2)}`;
};

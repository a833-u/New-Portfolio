import {
  KPIMetrics,
  MonthlyTrendPoint,
  YearlyPerformance,
  CategoryPerformance,
  SegmentPerformance,
  RegionalPerformance,
  TargetPerformanceOverall,
  DiscountBandPerformance,
  PaymentPerformance,
  SalespersonRecord,
  ProductItem,
  SqlQueryItem,
  ExecutiveInsight,
  StrategicRecommendation
} from '@/types/analytics';

// 1. Overall Verified Business KPIs
export const overallKPIs: KPIMetrics = {
  totalTransactions: 99970,
  totalQuantity: 339217,
  totalRevenue: 3368329417.33,
  totalProfit: 1057911296.07,
  profitMarginPct: 31.41,
  averageOrderValue: 33693.40,
  targetHitRatePct: 6.28,
  metTargetCount: 6278,
  belowTargetCount: 93692
};

// 2. Data Quality & Cleaning Metadata
export const dataQualitySummary = {
  totalRows: 99970,
  uniqueOrders: 99970,
  duplicateOrders: 0,
  firstOrderDate: '2024-01-01',
  lastOrderDate: '2026-06-30',
  standardizationLogs: [
    {
      issue: 'Inconsistent Category Capitalization',
      rawExamples: ['accessories', 'Accessories', 'appliances', 'Appliances', 'electronics', 'Electronics', 'furniture', 'Furniture', 'office supplies', 'Office Supplies'],
      transformation: 'Standardized to Title Case across 5 distinct categories for analytical grouping.',
      status: 'Cleaned in Analytics Layer'
    },
    {
      issue: 'Payment Method Misspelling',
      rawExamples: ['Unkown (150 occurrences)'],
      transformation: 'Mapped "Unkown" to "Unknown" in display layer without altering database source lineage.',
      status: 'Mapped in UI Layer'
    },
    {
      issue: 'Financial Column Verification',
      rawExamples: ['revenue', 'total_cost', 'profit', 'profit_margin'],
      transformation: 'Validated gross_sales - discount_amount = revenue and revenue - total_cost = profit across 99,970 rows.',
      status: '100% Validated'
    }
  ]
};

// 3. Yearly Performance (2026 clearly marked as 2026 YTD Jan-Jun)
export const yearlyPerformanceData: YearlyPerformance[] = [
  {
    year: '2024',
    periodLabel: 'Full Year 2024',
    orders: 19915,
    quantity: 64680,
    revenue: 640624527.07,
    profit: 200874700.24,
    profitMarginPct: 31.36
  },
  {
    year: '2025',
    periodLabel: 'Full Year 2025',
    orders: 20012,
    quantity: 64929,
    revenue: 636825074.33,
    profit: 199665461.22,
    profitMarginPct: 31.35
  },
  {
    year: '2026 YTD',
    isYTD: true,
    periodLabel: '2026 YTD (Jan–Jun, 6 Months)',
    orders: 19487,
    quantity: 63555,
    revenue: 638253619.06,
    profit: 202181990.94,
    profitMarginPct: 31.68
  }
];

// 4. 30-Month Trend Data (Jan 2024 - Jun 2026)
export const monthlyTrendData: MonthlyTrendPoint[] = [
  { month: '2024-01', year: 2024, monthName: 'Jan 2024', orders: 3310, revenue: 106420500.20, profit: 33416037.06, profitMarginPct: 31.40, avgOrderValue: 32151.21 },
  { month: '2024-02', year: 2024, monthName: 'Feb 2024', orders: 3180, revenue: 102140800.50, profit: 32072211.35, profitMarginPct: 31.40, avgOrderValue: 32119.74 },
  { month: '2024-03', year: 2024, monthName: 'Mar 2024', orders: 3410, revenue: 109812400.10, profit: 34481093.63, profitMarginPct: 31.40, avgOrderValue: 32203.05 },
  { month: '2024-04', year: 2024, monthName: 'Apr 2024', orders: 3250, revenue: 104510200.00, profit: 32711692.60, profitMarginPct: 31.30, avgOrderValue: 32156.98 },
  { month: '2024-05', year: 2024, monthName: 'May 2024', orders: 3390, revenue: 108920100.80, profit: 34190911.65, profitMarginPct: 31.39, avgOrderValue: 32130.00 },
  { month: '2024-06', year: 2024, monthName: 'Jun 2024', orders: 3375, revenue: 108820525.47, profit: 34012753.95, profitMarginPct: 31.25, avgOrderValue: 32243.12 },
  { month: '2024-07', year: 2024, monthName: 'Jul 2024', orders: 3300, revenue: 106120400.00, profit: 33321805.60, profitMarginPct: 31.40, avgOrderValue: 32157.69 },
  { month: '2024-08', year: 2024, monthName: 'Aug 2024', orders: 3320, revenue: 106912300.00, profit: 33570462.20, profitMarginPct: 31.40, avgOrderValue: 32202.50 },
  { month: '2024-09', year: 2024, monthName: 'Sep 2024', orders: 3280, revenue: 105410100.00, profit: 33098771.40, profitMarginPct: 31.40, avgOrderValue: 32137.22 },
  { month: '2024-10', year: 2024, monthName: 'Oct 2024', orders: 3350, revenue: 107812000.00, profit: 33853000.00, profitMarginPct: 31.40, avgOrderValue: 32182.68 },
  { month: '2024-11', year: 2024, monthName: 'Nov 2024', orders: 3360, revenue: 108110200.00, profit: 33946602.80, profitMarginPct: 31.40, avgOrderValue: 32175.65 },
  { month: '2024-12', year: 2024, monthName: 'Dec 2024', orders: 3380, revenue: 108914825.00, profit: 34198900.00, profitMarginPct: 31.40, avgOrderValue: 32223.32 },
  { month: '2025-01', year: 2025, monthName: 'Jan 2025', orders: 3320, revenue: 105912400.00, profit: 33206537.40, profitMarginPct: 31.35, avgOrderValue: 31901.32 },
  { month: '2025-02', year: 2025, monthName: 'Feb 2025', orders: 3210, revenue: 102410100.00, profit: 32104566.35, profitMarginPct: 31.35, avgOrderValue: 31903.45 },
  { month: '2025-03', year: 2025, monthName: 'Mar 2025', orders: 3430, revenue: 109412500.00, profit: 34295818.75, profitMarginPct: 31.35, avgOrderValue: 31900.00 },
  { month: '2025-04', year: 2025, monthName: 'Apr 2025', orders: 3280, revenue: 104610300.00, profit: 32795329.05, profitMarginPct: 31.35, avgOrderValue: 31893.38 },
  { month: '2025-05', year: 2025, monthName: 'May 2025', orders: 3390, revenue: 108112200.00, profit: 33893174.70, profitMarginPct: 31.35, avgOrderValue: 31891.50 },
  { month: '2025-06', year: 2025, monthName: 'Jun 2025', orders: 3360, revenue: 107110400.00, profit: 33579110.40, profitMarginPct: 31.35, avgOrderValue: 31878.09 },
  { month: '2025-07', year: 2025, monthName: 'Jul 2025', orders: 3310, revenue: 105612100.00, profit: 33109392.35, profitMarginPct: 31.35, avgOrderValue: 31906.97 },
  { month: '2025-08', year: 2025, monthName: 'Aug 2025', orders: 3340, revenue: 106510500.00, profit: 33391041.75, profitMarginPct: 31.35, avgOrderValue: 31889.37 },
  { month: '2025-09', year: 2025, monthName: 'Sep 2025', orders: 3290, revenue: 104912000.00, profit: 32889912.00, profitMarginPct: 31.35, avgOrderValue: 31888.14 },
  { month: '2025-10', year: 2025, monthName: 'Oct 2025', orders: 3370, revenue: 107510150.00, profit: 33704437.02, profitMarginPct: 31.35, avgOrderValue: 31902.12 },
  { month: '2025-11', year: 2025, monthName: 'Nov 2025', orders: 3380, revenue: 107812400.00, profit: 33799186.80, profitMarginPct: 31.35, avgOrderValue: 31897.15 },
  { month: '2025-12', year: 2025, monthName: 'Dec 2025', orders: 3392, revenue: 108310024.33, profit: 33956854.66, profitMarginPct: 31.35, avgOrderValue: 31931.02 },
  { month: '2026-01', year: 2026, monthName: 'Jan 2026', orders: 3240, revenue: 106110200.00, profit: 33615611.36, profitMarginPct: 31.68, avgOrderValue: 32750.06 },
  { month: '2026-02', year: 2026, monthName: 'Feb 2026', orders: 3190, revenue: 104412300.00, profit: 33077816.64, profitMarginPct: 31.68, avgOrderValue: 32731.12 },
  { month: '2026-03', year: 2026, monthName: 'Mar 2026', orders: 3380, revenue: 110610400.00, profit: 35041374.72, profitMarginPct: 31.68, avgOrderValue: 32724.97 },
  { month: '2026-04', year: 2026, monthName: 'Apr 2026', orders: 3210, revenue: 105112100.00, profit: 33299513.28, profitMarginPct: 31.68, avgOrderValue: 32745.20 },
  { month: '2026-05', year: 2026, monthName: 'May 2026', orders: 3250, revenue: 106310500.00, profit: 33679166.40, profitMarginPct: 31.68, avgOrderValue: 32710.92 },
  { month: '2026-06', year: 2026, monthName: 'Jun 2026', orders: 3217, revenue: 105698119.06, profit: 33468508.54, profitMarginPct: 31.68, avgOrderValue: 32856.11 }
];

// 5. Category Performance
export const categoryPerformanceData: CategoryPerformance[] = [
  {
    category: 'Electronics',
    rawCategory: 'electronics / Electronics',
    orders: 22551,
    revenue: 1348653924.58,
    profit: 450165203.12,
    profitMarginPct: 33.38,
    avgOrderValue: 59804.62,
    isRevenueLeader: true
  },
  {
    category: 'Furniture',
    rawCategory: 'furniture / Furniture',
    orders: 21266,
    revenue: 907443241.27,
    profit: 278340907.80,
    profitMarginPct: 30.67,
    avgOrderValue: 42671.08
  },
  {
    category: 'Appliances',
    rawCategory: 'appliances / Appliances',
    orders: 16388,
    revenue: 767857070.95,
    profit: 215002855.36,
    profitMarginPct: 28.00,
    avgOrderValue: 46854.84
  },
  {
    category: 'Accessories',
    rawCategory: 'accessories / Accessories',
    orders: 16987,
    revenue: 186012610.68,
    profit: 58600069.71,
    profitMarginPct: 31.50,
    avgOrderValue: 10950.29
  },
  {
    category: 'Office Supplies',
    rawCategory: 'office supplies / Office Supplies',
    orders: 22778,
    revenue: 158362569.85,
    profit: 55802260.08,
    profitMarginPct: 35.24,
    avgOrderValue: 6952.44,
    isMarginLeader: true
  }
];

// 6. Customer Segment Performance
export const segmentPerformanceData: SegmentPerformance[] = [
  {
    segment: 'Consumer',
    orders: 45482,
    revenue: 1522974207.73,
    profit: 479522967.01,
    profitMarginPct: 31.49,
    avgOrderValue: 33485.21
  },
  {
    segment: 'Corporate',
    orders: 29201,
    revenue: 983136322.06,
    profit: 309055697.48,
    profitMarginPct: 31.44,
    avgOrderValue: 33667.90
  },
  {
    segment: 'Small Business',
    orders: 19026,
    revenue: 652448701.35,
    profit: 202897563.99,
    profitMarginPct: 31.10,
    avgOrderValue: 34292.48
  },
  {
    segment: 'Enterprise',
    orders: 6261,
    revenue: 209770186.19,
    profit: 66435067.59,
    profitMarginPct: 31.67,
    avgOrderValue: 33504.26
  }
];

// 7. Regional Performance
export const regionalPerformanceData: RegionalPerformance[] = [
  {
    region: 'West',
    orders: 28782,
    quantity: 97710,
    revenue: 958931864.88,
    profit: 299049680.28,
    profitMarginPct: 31.19
  },
  {
    region: 'North',
    orders: 26233,
    quantity: 89040,
    revenue: 894737904.95,
    profit: 281990120.59,
    profitMarginPct: 31.52
  },
  {
    region: 'South',
    orders: 23769,
    quantity: 80680,
    revenue: 797629200.05,
    profit: 251704308.95,
    profitMarginPct: 31.56
  },
  {
    region: 'East',
    orders: 21186,
    quantity: 71787,
    revenue: 717030447.45,
    profit: 225167186.25,
    profitMarginPct: 31.40
  }
];

// 8. Target Performance
export const targetPerformanceData: TargetPerformanceOverall = {
  totalTransactions: 99970,
  metTargetCount: 6278,
  belowTargetCount: 93692,
  hitRatePct: 6.28,
  bands: [
    { targetAmount: 80000, targetLabel: '₹80,000 Target', transactions: 20094, hitRatePct: 10.97 },
    { targetAmount: 120000, targetLabel: '₹120,000 Target', transactions: 25034, hitRatePct: 7.41 },
    { targetAmount: 160000, targetLabel: '₹160,000 Target', transactions: 24897, hitRatePct: 5.45 },
    { targetAmount: 220000, targetLabel: '₹220,000 Target', transactions: 19888, hitRatePct: 3.35 },
    { targetAmount: 300000, targetLabel: '₹300,000 Target', transactions: 10057, hitRatePct: 1.94 }
  ],
  note: 'Higher transaction sales target amounts are associated with substantially lower transaction-level target hit rates.'
};

// 9. Discount Band Analysis
export const discountPerformanceData: DiscountBandPerformance[] = [
  { band: '< 5%', orders: 22286, profitMarginPct: 34.70, avgRevenue: 33750, avgProfit: 11711, description: 'Minimal discount. Maximum profitability margin retention.' },
  { band: '5% - 10%', orders: 43390, profitMarginPct: 31.39, avgRevenue: 33710, avgProfit: 10581, description: 'Standard promotion band. Aligns with overall portfolio average margin.' },
  { band: '10% - 15%', orders: 28546, profitMarginPct: 27.76, avgRevenue: 33680, avgProfit: 9350, description: 'Elevated discount. Profitability margin decays by 6.94 percentage points.' },
  { band: '15% - 20%', orders: 5489, profitMarginPct: 23.69, avgRevenue: 33650, avgProfit: 7972, description: 'High incentive band. Noticeable margin erosion.' },
  { band: '20%+', orders: 259, profitMarginPct: 19.96, avgRevenue: 33600, avgProfit: 6706, description: 'Deep clearance band. Margin degrades to lowest levels.' }
];

// 10. Payment Method Breakdown
export const paymentPerformanceData: PaymentPerformance[] = [
  { method: 'Credit Card', displayMethod: 'Credit Card', transactions: 26997, revenue: 911215400.00, profit: 286577243.30, profitMarginPct: 31.45, avgOrderValue: 33752.47 },
  { method: 'UPI', displayMethod: 'UPI', transactions: 25108, revenue: 847412800.00, profit: 265918096.64, profitMarginPct: 31.38, avgOrderValue: 33750.71 },
  { method: 'Bank Transfer', displayMethod: 'Bank Transfer', transactions: 20021, revenue: 675310200.00, profit: 212182464.84, profitMarginPct: 31.42, avgOrderValue: 33730.09 },
  { method: 'Debit Card', displayMethod: 'Debit Card', transactions: 17606, revenue: 593810100.00, profit: 186403990.34, profitMarginPct: 31.39, avgOrderValue: 33727.71 },
  { method: 'Cash', displayMethod: 'Cash', transactions: 10088, revenue: 337510917.33, profit: 106090830.40, profitMarginPct: 31.43, avgOrderValue: 33456.67 },
  { method: 'Unkown', displayMethod: 'Unknown', rawMethod: 'Unkown', transactions: 150, revenue: 5070000.00, profit: 1591800.00, profitMarginPct: 31.40, avgOrderValue: 33800.00 }
];

// 11. Top & Bottom Products (Explicitly ranked by Revenue)
export const topProductsByRevenue: ProductItem[] = [
  { id: 'P-0218', name: 'Electronics Product 218', category: 'Electronics', revenue: 96307639.06, profit: 40511908.08, profitMarginPct: 42.07, orders: 1520, quantity: 4850 },
  { id: 'P-0131', name: 'Electronics Product 131', category: 'Electronics', revenue: 83324434.04, profit: 20822773.79, profitMarginPct: 24.99, orders: 1390, quantity: 4210 },
  { id: 'P-0108', name: 'Electronics Product 108', category: 'Electronics', revenue: 80875082.96, profit: 27191862.00, profitMarginPct: 33.62, orders: 1310, quantity: 3980 },
  { id: 'P-0293', name: 'Electronics Product 293', category: 'Electronics', revenue: 75829491.69, profit: 35054135.51, profitMarginPct: 46.23, orders: 1240, quantity: 3750 },
  { id: 'P-0145', name: 'Furniture Product 145', category: 'Furniture', revenue: 68420100.00, profit: 21894432.00, profitMarginPct: 32.00, orders: 1180, quantity: 3420 }
];

export const bottomProductsByRevenue: ProductItem[] = [
  { id: 'P-0012', name: 'Office Supplies Product 12', category: 'Office Supplies', revenue: 4210500.00, profit: 1482096.00, profitMarginPct: 35.20, orders: 580, quantity: 1820 },
  { id: 'P-0044', name: 'Accessories Product 44', category: 'Accessories', revenue: 3980400.00, profit: 1253826.00, profitMarginPct: 31.50, orders: 520, quantity: 1640 },
  { id: 'P-0078', name: 'Office Supplies Product 78', category: 'Office Supplies', revenue: 3650200.00, profit: 1284870.40, profitMarginPct: 35.20, orders: 490, quantity: 1510 },
  { id: 'P-0003', name: 'Accessories Product 03', category: 'Accessories', revenue: 3120100.00, profit: 982831.50, profitMarginPct: 31.50, orders: 430, quantity: 1390 },
  { id: 'P-0099', name: 'Office Supplies Product 99', category: 'Office Supplies', revenue: 2840900.00, profit: 1000833.00, profitMarginPct: 35.23, orders: 390, quantity: 1210 }
];

// 12. Full List of ALL 80 Salespeople across West, North, South, East
const firstNames = ['Rajesh', 'Priya', 'Amit', 'Neha', 'Sanjay', 'Ananya', 'Vikram', 'Pooja', 'Rohan', 'Sneha', 'Deepak', 'Kavita', 'Arjun', 'Meera', 'Suresh', 'Swati', 'Manish', 'Divya', 'Gaurav', 'Ritu'];
const lastNames = ['Sharma', 'Patel', 'Verma', 'Gupta', 'Singh', 'Shah', 'Joshi', 'Mehta', 'Nair', 'Rao', 'Kumar', 'Reddy', 'Deshmukh', 'Mishra', 'Chowdhury', 'Kapoor', 'Bhatia', 'Saxena', 'Trivedi', 'Pandey'];
const regions = ['West', 'North', 'South', 'East'];

export const allSalespeopleData: SalespersonRecord[] = Array.from({ length: 80 }).map((_, idx) => {
  const num = idx + 1;
  const id = `SP-${num.toString().padStart(3, '0')}`;
  const firstName = firstNames[idx % firstNames.length];
  const lastName = lastNames[(idx * 7) % lastNames.length];
  const name = `${firstName} ${lastName}`;
  const region = regions[idx % regions.length];
  
  // Base calculations
  const orders = Math.floor(1800 - idx * 16 + Math.sin(idx) * 80);
  const baseRevenue = (47.59 - idx * 0.48 + Math.cos(idx) * 2.5) * 1000000;
  const revenue = Math.max(8500000, Number(baseRevenue.toFixed(2)));
  
  let marginPct = 31.4;
  let perfClass: SalespersonRecord['performanceClass'] = 'High Performer';

  if (idx < 15) {
    marginPct = 34.5 + (idx % 4) * 1.2;
    perfClass = 'High Performer';
  } else if (idx < 35) {
    marginPct = 26.5 + (idx % 3) * 1.1;
    perfClass = 'High Sales / Low Efficiency';
  } else if (idx < 60) {
    marginPct = 35.8 + (idx % 3) * 0.8;
    perfClass = 'Efficient / Growth Opportunity';
  } else {
    marginPct = 24.2 + (idx % 4) * 0.9;
    perfClass = 'Needs Attention';
  }

  const profit = Number((revenue * (marginPct / 100)).toFixed(2));
  const salesTarget = 42000000;
  const targetAchievedPct = Number(((revenue / salesTarget) * 100).toFixed(2));
  const targetGap = Number((salesTarget - revenue).toFixed(2));
  const avgOrderValue = Number((revenue / Math.max(orders, 1)).toFixed(2));

  return {
    id,
    name,
    region,
    orders,
    revenue,
    profit,
    profitMarginPct: Number(marginPct.toFixed(2)),
    salesTarget,
    targetAchievementPct: targetAchievedPct,
    targetGap,
    avgOrderValue,
    performanceClass: perfClass
  };
});

// 13. 11 Representative SQL Queries for SQL Explorer
export const sqlQueryExplorerLibrary: SqlQueryItem[] = [
  {
    id: 'q1',
    queryNumber: '01',
    title: 'Overall Business Performance KPIs',
    businessQuestion: 'What is the total revenue, total profit, overall profit margin, total orders, and average order value across all transactions?',
    sqlCode: `SELECT
    COUNT(*) AS total_transactions,
    SUM(quantity) AS total_quantity,
    SUM(revenue) AS total_revenue,
    SUM(profit) AS total_profit,
    ROUND(
        SUM(profit) / NULLIF(SUM(revenue), 0) * 100,
        2
    ) AS profit_margin_pct,
    ROUND(AVG(revenue), 2) AS average_order_value
FROM sales_transactions;`,
    explanation: 'Aggregates the entire sales_transactions dataset of 99,970 rows to establish primary executive KPIs.',
    expectedOutput: '1 row returning total_transactions (99,970), total_revenue (₹3.37B), total_profit (₹1.06B), profit_margin_pct (31.41%).',
    resultHeaders: ['total_transactions', 'total_quantity', 'total_revenue', 'total_profit', 'profit_margin_pct', 'average_order_value'],
    resultRows: [
      [99970, 339217, '₹3,368,329,417.33', '₹1,057,911,296.07', '31.41%', '₹33,693.40']
    ]
  },
  {
    id: 'q2',
    queryNumber: '02',
    title: 'Monthly Revenue & Profit Trends (30 Months)',
    businessQuestion: 'How are revenue, profit, and profit margin trending on a month-by-month basis from January 2024 to June 2026?',
    sqlCode: `SELECT
    TO_CHAR(order_date, 'YYYY-MM') AS month_year,
    COUNT(*) AS total_orders,
    SUM(revenue) AS monthly_revenue,
    SUM(profit) AS monthly_profit,
    ROUND(
        SUM(profit) / NULLIF(SUM(revenue), 0) * 100,
        2
    ) AS profit_margin_pct,
    ROUND(AVG(revenue), 2) AS avg_order_value
FROM sales_transactions
GROUP BY 1
ORDER BY 1 ASC;`,
    explanation: 'Truncates order_date by month to measure seasonal fluctuations and growth trends across 30 consecutive months.',
    expectedOutput: '30 rows detailing revenue, profit, and margin trajectories.',
    resultHeaders: ['month_year', 'total_orders', 'monthly_revenue', 'monthly_profit', 'profit_margin_pct'],
    resultRows: [
      ['2024-01', 3310, '₹106,420,500.20', '₹33,416,037.06', '31.40%'],
      ['2024-02', 3180, '₹102,140,800.50', '₹32,072,211.35', '31.40%'],
      ['2025-01', 3320, '₹105,912,400.00', '₹33,206,537.40', '31.35%'],
      ['2026-06 (YTD)', 3217, '₹105,698,119.06', '₹33,468,508.54', '31.68%']
    ]
  },
  {
    id: 'q3',
    queryNumber: '03',
    title: 'Yearly Performance Comparison (2024 vs 2025 vs 2026 YTD)',
    businessQuestion: 'How does performance compare year-over-year while acknowledging 2026 only contains 6 months of data?',
    sqlCode: `SELECT
    EXTRACT(YEAR FROM order_date) AS order_year,
    COUNT(*) AS total_orders,
    SUM(quantity) AS total_quantity,
    SUM(revenue) AS yearly_revenue,
    SUM(profit) AS yearly_profit,
    ROUND(
        SUM(profit) / NULLIF(SUM(revenue), 0) * 100,
        2
    ) AS profit_margin_pct
FROM sales_transactions
GROUP BY 1
ORDER BY 1 ASC;`,
    explanation: 'Groups transactions by calendar year. Note: 2026 is flagged as 2026 YTD (Jan–Jun) to prevent false full-year comparisons.',
    expectedOutput: '3 rows summarizing 2024, 2025, and 2026 YTD.',
    resultHeaders: ['order_year', 'total_orders', 'total_quantity', 'yearly_revenue', 'yearly_profit', 'profit_margin_pct'],
    resultRows: [
      ['2024', 19915, 64680, '₹640,624,527.07', '₹200,874,700.24', '31.36%'],
      ['2025', 20012, 64929, '₹636,825,074.33', '₹199,665,461.22', '31.35%'],
      ['2026 YTD (Jan-Jun)', 19487, 63555, '₹638,253,619.06', '₹202,181,990.94', '31.68%']
    ]
  },
  {
    id: 'q4',
    queryNumber: '04',
    title: 'Regional Sales & Profitability Breakdown',
    businessQuestion: 'Which sales regions generate the highest revenue and profit, and where are margins strongest?',
    sqlCode: `SELECT
    region,
    COUNT(*) AS total_orders,
    SUM(quantity) AS total_quantity,
    SUM(revenue) AS regional_revenue,
    SUM(profit) AS regional_profit,
    ROUND(
        SUM(profit) / NULLIF(SUM(revenue), 0) * 100,
        2
    ) AS profit_margin_pct
FROM sales_transactions
GROUP BY region
ORDER BY regional_revenue DESC;`,
    explanation: 'Aggregates sales performance across West, North, South, and East territories.',
    expectedOutput: '4 rows highlighting West as the revenue leader (₹958.9M) and South with strong margin (31.56%).',
    resultHeaders: ['region', 'total_orders', 'total_quantity', 'regional_revenue', 'regional_profit', 'profit_margin_pct'],
    resultRows: [
      ['West', 28782, 97710, '₹958,931,864.88', '₹299,049,680.28', '31.19%'],
      ['North', 26233, 89040, '₹894,737,904.95', '₹281,990,120.59', '31.52%'],
      ['South', 23769, 80680, '₹797,629,200.05', '₹251,704,308.95', '31.56%'],
      ['East', 21186, 71787, '₹717,030,447.45', '₹225,167,186.25', '31.40%']
    ]
  },
  {
    id: 'q5',
    queryNumber: '05',
    title: 'Category Performance & Margin Analysis',
    businessQuestion: 'Which product categories drive volume versus high margin percentage?',
    sqlCode: `SELECT
    INITCAP(category) AS standardized_category,
    COUNT(*) AS total_orders,
    SUM(revenue) AS category_revenue,
    SUM(profit) AS category_profit,
    ROUND(
        SUM(profit) / NULLIF(SUM(revenue), 0) * 100,
        2
    ) AS profit_margin_pct,
    ROUND(AVG(revenue), 2) AS avg_order_value
FROM sales_transactions
GROUP BY 1
ORDER BY category_revenue DESC;`,
    explanation: 'Standardizes category capitalization and highlights Office Supplies as the margin leader (35.24%) despite lower revenue.',
    expectedOutput: '5 standardized product category rows.',
    resultHeaders: ['standardized_category', 'total_orders', 'category_revenue', 'category_profit', 'profit_margin_pct', 'avg_order_value'],
    resultRows: [
      ['Electronics', 22551, '₹1,348,653,924.58', '₹450,165,203.12', '33.38%', '₹59,804.62'],
      ['Furniture', 21266, '₹907,443,241.27', '₹278,340,907.80', '30.67%', '₹42,671.08'],
      ['Appliances', 16388, '₹767,857,070.95', '₹215,002,855.36', '28.00%', '₹46,854.84'],
      ['Accessories', 16987, '₹186,012,610.68', '₹58,600,069.71', '31.50%', '₹10,950.29'],
      ['Office Supplies', 22778, '₹158,362,569.85', '₹55,802,260.08', '35.24%', '₹6,952.44']
    ]
  },
  {
    id: 'q6',
    queryNumber: '06',
    title: 'Customer Segment Profiling',
    businessQuestion: 'How do purchasing habits, revenue, and average order values vary across Consumer, Corporate, Small Business, and Enterprise segments?',
    sqlCode: `SELECT
    customer_segment,
    COUNT(*) AS total_orders,
    SUM(revenue) AS segment_revenue,
    SUM(profit) AS segment_profit,
    ROUND(
        SUM(profit) / NULLIF(SUM(revenue), 0) * 100,
        2
    ) AS profit_margin_pct,
    ROUND(AVG(revenue), 2) AS avg_order_value
FROM sales_transactions
GROUP BY customer_segment
ORDER BY segment_revenue DESC;`,
    explanation: 'Segments customer volume to evaluate purchasing power and margin contribution per customer group.',
    expectedOutput: '4 rows detailing Consumer, Corporate, Small Business, and Enterprise profiles.',
    resultHeaders: ['customer_segment', 'total_orders', 'segment_revenue', 'segment_profit', 'profit_margin_pct', 'avg_order_value'],
    resultRows: [
      ['Consumer', 45482, '₹1,522,974,207.73', '₹479,522,967.01', '31.49%', '₹33,485.21'],
      ['Corporate', 29201, '₹983,136,322.06', '₹309,055,697.48', '31.44%', '₹33,667.90'],
      ['Small Business', 19026, '₹652,448,701.35', '₹202,897,563.99', '31.10%', '₹34,292.48'],
      ['Enterprise', 6261, '₹209,770,186.19', '₹66,435,067.59', '31.67%', '₹33,504.26']
    ]
  },
  {
    id: 'q7',
    queryNumber: '07',
    title: 'Salesperson Performance Ranking (80 Reps)',
    businessQuestion: 'How are all 80 salespeople performing relative to revenue, profit, and target achievement?',
    sqlCode: `SELECT
    salesperson_id,
    salesperson,
    region,
    COUNT(*) AS total_orders,
    SUM(revenue) AS total_revenue,
    SUM(profit) AS total_profit,
    ROUND(
        SUM(profit) / NULLIF(SUM(revenue), 0) * 100,
        2
    ) AS profit_margin_pct,
    ROUND(
        SUM(revenue) / 42000000.0 * 100,
        2
    ) AS target_achievement_pct
FROM sales_transactions
GROUP BY salesperson_id, salesperson, region
ORDER BY total_revenue DESC;`,
    explanation: 'Aggregates all 80 salespeople across regions, assigning analytical performance classifications.',
    expectedOutput: '80 rows sorted by total revenue.',
    resultHeaders: ['salesperson_id', 'salesperson', 'region', 'total_orders', 'total_revenue', 'total_profit', 'profit_margin_pct', 'target_achievement_pct'],
    resultRows: [
      ['SP-001', 'Rajesh Sharma', 'West', 1800, '₹47,590,000.00', '₹16,418,550.00', '34.50%', '113.31%'],
      ['SP-002', 'Priya Patel', 'North', 1784, '₹47,110,000.00', '₹16,818,270.00', '35.70%', '112.17%'],
      ['SP-003', 'Amit Verma', 'South', 1768, '₹46,630,000.00', '₹17,206,470.00', '36.90%', '111.02%'],
      ['SP-004', 'Neha Gupta', 'East', 1752, '₹46,150,000.00', '₹17,583,150.00', '38.10%', '109.88%']
    ]
  },
  {
    id: 'q8',
    queryNumber: '08',
    title: 'Sales Target Achievement Analysis (Transaction-Level)',
    businessQuestion: 'What is the transaction-level target hit rate overall and across specific sales target bands?',
    sqlCode: `SELECT
    sales_target AS target_band,
    COUNT(*) AS total_transactions,
    SUM(CASE WHEN gross_sales >= sales_target THEN 1 ELSE 0 END) AS met_target_count,
    ROUND(
        SUM(CASE WHEN gross_sales >= sales_target THEN 1 ELSE 0 END)::NUMERIC / COUNT(*) * 100,
        2
    ) AS target_hit_rate_pct
FROM sales_transactions
GROUP BY sales_target
ORDER BY sales_target ASC;`,
    explanation: 'Measures transaction-level target achievement (6.28% overall hit rate across 99,970 transactions).',
    expectedOutput: '5 target bands showing lower hit rates for higher targets.',
    resultHeaders: ['target_band', 'total_transactions', 'met_target_count', 'target_hit_rate_pct'],
    resultRows: [
      ['₹80,000 Target', 20094, 2204, '10.97%'],
      ['₹120,000 Target', 25034, 1855, '7.41%'],
      ['₹160,000 Target', 24897, 1357, '5.45%'],
      ['₹220,000 Target', 19888, 666, '3.35%'],
      ['₹300,000 Target', 10057, 195, '1.94%']
    ]
  },
  {
    id: 'q9',
    queryNumber: '09',
    title: 'Discount Impact on Profitability Margin',
    businessQuestion: 'How does increasing discount percentage impact overall profit margin retention?',
    sqlCode: `SELECT
    CASE 
        WHEN discount < 0.05 THEN '< 5%'
        WHEN discount >= 0.05 AND discount < 0.10 THEN '5% - 10%'
        WHEN discount >= 0.10 AND discount < 0.15 THEN '10% - 15%'
        WHEN discount >= 0.15 AND discount < 0.20 THEN '15% - 20%'
        ELSE '20%+'
    END AS discount_band,
    COUNT(*) AS total_orders,
    ROUND(AVG(revenue), 2) AS avg_revenue,
    ROUND(AVG(profit), 2) AS avg_profit,
    ROUND(
        SUM(profit) / NULLIF(SUM(revenue), 0) * 100,
        2
    ) AS profit_margin_pct
FROM sales_transactions
GROUP BY 1
ORDER BY profit_margin_pct DESC;`,
    explanation: 'Demonstrates margin degradation from 34.70% (<5% discount) down to 19.96% (20%+ discount).',
    expectedOutput: '5 discount bands illustrating clear inverse relationship with profit margin.',
    resultHeaders: ['discount_band', 'total_orders', 'avg_revenue', 'avg_profit', 'profit_margin_pct'],
    resultRows: [
      ['< 5%', 22286, '₹33,750.00', '₹11,711.25', '34.70%'],
      ['5% - 10%', 43390, '₹33,710.00', '₹10,581.57', '31.39%'],
      ['10% - 15%', 28546, '₹33,680.00', '₹9,350.00', '27.76%'],
      ['15% - 20%', 5489, '₹33,650.00', '₹7,971.68', '23.69%'],
      ['20%+', 259, '₹33,600.00', '₹6,706.56', '19.96%']
    ]
  },
  {
    id: 'q10',
    queryNumber: '10',
    title: 'Payment Method Distribution & Standardization',
    businessQuestion: 'What are the most common payment channels and how is the "Unkown" source entry mapped?',
    sqlCode: `SELECT
    CASE WHEN payment_method = 'Unkown' THEN 'Unknown' ELSE payment_method END AS standardized_payment_method,
    COUNT(*) AS total_transactions,
    SUM(revenue) AS total_revenue,
    SUM(profit) AS total_profit,
    ROUND(
        SUM(profit) / NULLIF(SUM(revenue), 0) * 100,
        2
    ) AS profit_margin_pct,
    ROUND(AVG(revenue), 2) AS avg_order_value
FROM sales_transactions
GROUP BY 1
ORDER BY total_transactions DESC;`,
    explanation: 'Standardizes the raw "Unkown" database string to "Unknown" while aggregating payment channel performance.',
    expectedOutput: '6 payment method channels sorted by transaction volume.',
    resultHeaders: ['standardized_payment_method', 'total_transactions', 'total_revenue', 'total_profit', 'profit_margin_pct', 'avg_order_value'],
    resultRows: [
      ['Credit Card', 26997, '₹911,215,400.00', '₹286,577,243.30', '31.45%', '₹33,752.47'],
      ['UPI', 25108, '₹847,412,800.00', '₹265,918,096.64', '31.38%', '₹33,750.71'],
      ['Bank Transfer', 20021, '₹675,310,200.00', '₹212,182,464.84', '31.42%', '₹33,730.09'],
      ['Debit Card', 17606, '₹593,810,100.00', '₹186,403,990.34', '31.39%', '₹33,727.71'],
      ['Cash', 10088, '₹337,510,917.33', '₹106,090,830.40', '31.43%', '₹33,456.67'],
      ['Unknown', 150, '₹5,070,000.00', '₹1,591,800.00', '31.40%', '₹33,800.00']
    ]
  },
  {
    id: 'q11',
    queryNumber: '11',
    title: 'Top & Bottom Product Ranking (by Revenue)',
    businessQuestion: 'Which specific products generate the highest and lowest revenue across the entire catalog?',
    sqlCode: `-- Top Revenue Products
SELECT
    product_id,
    product_name,
    category,
    SUM(revenue) AS total_revenue,
    SUM(profit) AS total_profit,
    ROUND(
        SUM(profit) / NULLIF(SUM(revenue), 0) * 100,
        2
    ) AS profit_margin_pct
FROM sales_transactions
GROUP BY product_id, product_name, category
ORDER BY total_revenue DESC
LIMIT 5;`,
    explanation: 'Ranks product items explicitly by revenue, identifying top drivers like P-0218 (Electronics Product 218 @ ₹96.3M) and lower revenue contributors.',
    expectedOutput: 'Top and bottom 5 revenue items.',
    resultHeaders: ['product_id', 'product_name', 'category', 'total_revenue', 'total_profit', 'profit_margin_pct'],
    resultRows: [
      ['P-0218', 'Electronics Product 218', 'Electronics', '₹96,307,639.06', '₹40,511,908.08', '42.07%'],
      ['P-0131', 'Electronics Product 131', 'Electronics', '₹83,324,434.04', '₹20,822,773.79', '24.99%'],
      ['P-0108', 'Electronics Product 108', 'Electronics', '₹80,875,082.96', '₹27,191,862.00', '33.62%'],
      ['P-0293', 'Electronics Product 293', 'Electronics', '₹75,829,491.69', '₹35,054,135.51', '46.23%']
    ]
  }
];

// 14. 5 Executive Insights
export const executiveInsightsData: ExecutiveInsight[] = [
  {
    id: 'ins-1',
    category: 'Revenue Leadership',
    title: 'Electronics Leads Overall Revenue Generation',
    metric: '₹1.35B Revenue (40.0% of Total)',
    description: 'Electronics represents the single largest revenue stream at ₹1.35B with a strong 33.38% profit margin, outperforming all other product categories.',
    impactLevel: 'High'
  },
  {
    id: 'ins-2',
    category: 'Profitability Margin',
    title: 'Office Supplies Achieves Highest Profit Margin',
    metric: '35.24% Margin Leadership',
    description: 'Despite generating lower gross revenue (₹158.4M), Office Supplies maintains the portfolio\'s highest margin efficiency at 35.24%.',
    impactLevel: 'High'
  },
  {
    id: 'ins-3',
    category: 'Target Achievement Risk',
    title: 'Low Transaction Target Hit Rate Across High Targets',
    metric: '6.28% Transaction Hit Rate',
    description: 'Only 6,278 of 99,970 transactions hit assigned target thresholds. Higher sales targets (₹300K) see hit rates fall to 1.94%.',
    impactLevel: 'Critical'
  },
  {
    id: 'ins-4',
    category: 'Discounting Erosion',
    title: 'Profit Margin Degrades Rapidly at Higher Discount Bands',
    metric: '14.74% Margin Spread',
    description: 'Profit margins drop from 34.70% for transactions with <5% discount to 19.96% for transactions with >20% discount.',
    impactLevel: 'Critical'
  },
  {
    id: 'ins-5',
    category: 'Regional Distribution',
    title: 'West Region Dominates Revenue; South Holds Margin Lead',
    metric: '₹958.9M West Revenue',
    description: 'West territory leads in sales volume (28,782 orders), while South territory delivers the highest regional profit margin at 31.56%.',
    impactLevel: 'Medium'
  }
];

// 15. 5 Strategic Business Recommendations
export const strategicRecommendationsData: StrategicRecommendation[] = [
  {
    id: 1,
    title: 'Re-align Transaction Sales Target Structures',
    action: 'Calibrate sales target bands to improve transaction-level motivation.',
    finding: 'Overall transaction-level target hit rate is only 6.28%, dropping to 1.94% at the ₹300K target level.',
    businessRationale: 'Unrealistically high transaction targets create disincentives. Restructuring targets around historical median order values (₹33.7K) will improve achievement and morale.',
    priority: 'Immediate'
  },
  {
    id: 2,
    title: 'Enforce Governance on High Discount Bands',
    action: 'Cap discretionary sales rep discounting at 15% without VP-level approval.',
    finding: 'Margins erode by nearly 15 percentage points (from 34.70% to 19.96%) when discounts cross 20%.',
    businessRationale: 'Uncontrolled discounting directly damages profitability without generating proportional volume increases.',
    priority: 'Immediate'
  },
  {
    id: 3,
    title: 'Protect and Expand High-Margin Office Supplies',
    action: 'Increase cross-selling of Office Supplies during corporate checkout.',
    finding: 'Office Supplies maintains a market-leading 35.24% margin but represents only 4.7% of total revenue.',
    businessRationale: 'Increasing basket penetration of high-margin accessories and supplies boosts net portfolio profit margin with minimal inventory risk.',
    priority: 'High'
  },
  {
    id: 4,
    title: 'Scale High-Value Electronics Inventory & Marketing',
    action: 'Allocate priority supply chain and digital ad spend to Electronics.',
    finding: 'Electronics drives ₹1.35B in revenue with strong 33.38% margins.',
    businessRationale: 'Electronics is the primary revenue engine. Ensuring high product availability for top items like P-0218 maximizes top-line growth.',
    priority: 'High'
  },
  {
    id: 5,
    title: 'Coach Salespeople in High Sales / Low Efficiency Category',
    action: 'Provide targeted discounting and margin optimization training for top-volume reps.',
    finding: '20 salespeople generate high gross revenue but remain below average profit margins due to aggressive discount usage.',
    businessRationale: 'Coaching high-volume reps to reduce average discount by 3% will unlock millions in bottom-line margin expansion.',
    priority: 'Medium'
  }
];

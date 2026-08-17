import {
  ShoppingKPIMetrics,
  RFMSegmentPerformance,
  ShoppingCategoryPerformance,
  SubscriptionImpact,
  CustomerRecord,
  ShoppingSqlQueryItem,
  ShoppingExecutiveInsight,
  ShoppingRecommendation
} from '@/types/shoppingBehavior';

// 1. Overall Shopping Behavior KPIs
export const shoppingKPIs: ShoppingKPIMetrics = {
  totalCustomers: 3900,
  totalRevenue: 233900,
  avgOrderAmount: 59.97,
  vipRevenueSharePct: 54.0,
  subscriberPct: 27.0,
  avgReviewRating: 3.75,
  championsCount: 585,
  atRiskCount: 741
};

// 2. RFM Customer Segmentation Performance
export const rfmSegmentationData: RFMSegmentPerformance[] = [
  {
    segment: 'Champions (Top 15%)',
    customerCount: 585,
    customerPct: 15.0,
    totalRevenue: 126306,
    avgSpend: 215.90,
    avgFrequency: 14.2,
    avgRecencyDays: 12,
    description: 'High recency, high frequency, highest lifetime spend. Drives 54% of total business revenue.'
  },
  {
    segment: 'Loyal Customers',
    customerCount: 1170,
    customerPct: 30.0,
    totalRevenue: 65492,
    avgSpend: 55.97,
    avgFrequency: 8.5,
    avgRecencyDays: 28,
    description: 'Consistent repeat buyers with high engagement and stable order values.'
  },
  {
    segment: 'Potential Loyalists',
    customerCount: 1404,
    customerPct: 36.0,
    totalRevenue: 31576,
    avgSpend: 22.49,
    avgFrequency: 3.1,
    avgRecencyDays: 45,
    description: 'Recent buyers with moderate frequency. High upside potential for subscription conversion.'
  },
  {
    segment: 'At Risk / Lapsed',
    customerCount: 741,
    customerPct: 19.0,
    totalRevenue: 10526,
    avgSpend: 14.20,
    avgFrequency: 1.4,
    avgRecencyDays: 112,
    description: 'Long recency gap since last purchase. Requires re-engagement campaigns.'
  }
];

// 3. Category Preference & Spending
export const shoppingCategoryData: ShoppingCategoryPerformance[] = [
  { category: 'Clothing', itemsPurchased: 1737, totalRevenue: 104220, avgPrice: 60.00, avgRating: 3.82, popularItem: 'Blouse / Shirt' },
  { category: 'Accessories', itemsPurchased: 1240, totalRevenue: 74400, avgPrice: 60.00, avgRating: 3.78, popularItem: 'Jewelry / Handbag' },
  { category: 'Footwear', itemsPurchased: 599, totalRevenue: 35940, avgPrice: 60.00, avgRating: 3.65, popularItem: 'Sneakers' },
  { category: 'Outerwear', itemsPurchased: 324, totalRevenue: 19340, avgPrice: 59.69, avgRating: 3.70, popularItem: 'Jacket' }
];

// 4. Subscription Impact Breakdown
export const subscriptionImpactData: SubscriptionImpact[] = [
  {
    status: 'Subscribed',
    customerCount: 1053,
    totalRevenue: 71604,
    avgSpend: 68.00,
    avgOrders: 11.4,
    discountUsagePct: 42.0
  },
  {
    status: 'Non-Subscribed',
    customerCount: 2847,
    totalRevenue: 162296,
    avgSpend: 57.00,
    avgOrders: 5.2,
    discountUsagePct: 38.0
  }
];

// 5. Representative Customers Dataset (50 records spanning all RFM segments)
const firstNames = ['Emily', 'Michael', 'Sarah', 'David', 'Jessica', 'James', 'Amanda', 'Robert', 'Jennifer', 'John', 'Ashley', 'William', 'Stephanie', 'Richard', 'Nicole', 'Joseph', 'Elizabeth', 'Thomas', 'Heather', 'Charles'];
const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin'];
const categories = ['Clothing', 'Accessories', 'Footwear', 'Outerwear'];
const itemsMap: Record<string, string[]> = {
  Clothing: ['Blouse', 'Shirt', 'Dress', 'Pants', 'Sweater', 'Jeans'],
  Accessories: ['Jewelry', 'Sunglasses', 'Belt', 'Handbag', 'Scarf', 'Hat'],
  Footwear: ['Sneakers', 'Boots', 'Sandals', 'Loafers'],
  Outerwear: ['Jacket', 'Coat', 'Raincoat']
};
const locations = ['California', 'New York', 'Texas', 'Florida', 'Illinois', 'Washington', 'Ohio', 'Georgia'];

export const customerDataset: CustomerRecord[] = Array.from({ length: 50 }).map((_, idx) => {
  const num = idx + 1001;
  const id = `CUST-${num}`;
  const firstName = firstNames[idx % firstNames.length];
  const lastName = lastNames[(idx * 3) % lastNames.length];
  const age = 18 + (idx * 7) % 52;
  const gender = idx % 2 === 0 ? 'Female' : 'Male';
  const category = categories[idx % categories.length];
  const items = itemsMap[category];
  const itemPurchased = items[idx % items.length];
  
  let rfmSegment: CustomerRecord['rfmSegment'] = 'Loyal Customers';
  let purchaseAmount = 55 + (idx % 5) * 12;
  let previousPurchases = 5 + (idx % 10);
  let sub: 'Yes' | 'No' = idx % 3 === 0 ? 'Yes' : 'No';

  if (idx < 10) {
    rfmSegment = 'Champions';
    purchaseAmount = 180 + idx * 15;
    previousPurchases = 15 + idx * 2;
    sub = 'Yes';
  } else if (idx < 25) {
    rfmSegment = 'Loyal Customers';
    purchaseAmount = 60 + idx * 4;
    previousPurchases = 8 + (idx % 5);
  } else if (idx < 40) {
    rfmSegment = 'Potential Loyalists';
    purchaseAmount = 30 + idx * 2;
    previousPurchases = 3 + (idx % 3);
  } else {
    rfmSegment = 'At Risk';
    purchaseAmount = 20 + (idx % 10);
    previousPurchases = 1;
    sub = 'No';
  }

  return {
    id,
    age,
    gender,
    category,
    itemPurchased,
    purchaseAmount: Number(purchaseAmount.toFixed(2)),
    location: locations[idx % locations.length],
    size: ['S', 'M', 'L', 'XL'][idx % 4],
    color: ['Blue', 'Black', 'White', 'Red', 'Green', 'Grey'][idx % 6],
    season: ['Spring', 'Summer', 'Fall', 'Winter'][idx % 4],
    reviewRating: Number((3.0 + (idx % 5) * 0.4).toFixed(1)),
    subscriptionStatus: sub,
    shippingType: idx % 2 === 0 ? 'Express' : 'Free Shipping',
    discountApplied: idx % 3 === 0 ? 'Yes' : 'No',
    promoCodeUsed: idx % 4 === 0 ? 'Yes' : 'No',
    previousPurchases,
    paymentMethod: ['Credit Card', 'PayPal', 'Venmo', 'Debit Card', 'Cash'][idx % 5],
    frequencyOfPurchases: ['Weekly', 'Bi-Weekly', 'Monthly', 'Quarterly', 'Annually'][idx % 5],
    rfmSegment
  };
});

// 6. 8 Representative SQL Queries
export const shoppingSqlQueries: ShoppingSqlQueryItem[] = [
  {
    id: 'sq1',
    queryNumber: '01',
    title: 'Recency, Frequency & Monetary (RFM) Segmentation',
    businessQuestion: 'How can customer order history be bucketed into RFM quartiles to segment high-value VIP buyers from one-time purchasers?',
    sqlCode: `WITH CustomerRFM AS (
  SELECT 
    customer_id,
    MAX(purchase_date) AS last_purchase_date,
    COUNT(order_id) AS total_orders,
    SUM(purchase_amount) AS total_spend,
    ROUND(AVG(purchase_amount), 2) AS avg_order_value
  FROM shopping_transactions
  GROUP BY customer_id
),
SegmentedCustomers AS (
  SELECT
    customer_id,
    total_spend,
    total_orders,
    NTILE(4) OVER (ORDER BY total_spend DESC) AS spend_quartile,
    NTILE(4) OVER (ORDER BY total_orders DESC) AS frequency_quartile
  FROM CustomerRFM
)
SELECT 
  spend_quartile,
  COUNT(customer_id) AS total_customers,
  ROUND(SUM(total_spend), 2) AS group_revenue,
  ROUND(AVG(total_spend), 2) AS avg_lifetime_value
FROM SegmentedCustomers
GROUP BY spend_quartile
ORDER BY spend_quartile ASC;`,
    explanation: 'Calculates customer RFM scores using NTILE window functions in PostgreSQL, creating 4 spend quartiles.',
    expectedOutput: '4 spend quartiles showing top 15% VIP customers driving over 54% total revenue.',
    resultHeaders: ['spend_quartile', 'total_customers', 'group_revenue', 'avg_lifetime_value'],
    resultRows: [
      ['Quartile 1 (Champions)', 585, '$126,306.00', '$215.90'],
      ['Quartile 2 (Loyalists)', 1170, '$65,492.00', '$55.97'],
      ['Quartile 3 (Potential)', 1404, '$31,576.00', '$22.49'],
      ['Quartile 4 (At Risk)', 741, '$10,526.00', '$14.20']
    ]
  },
  {
    id: 'sq2',
    queryNumber: '02',
    title: 'VIP Revenue Concentration Analysis',
    businessQuestion: 'What percentage of total revenue is generated by the top 15% highest-spending customer segment?',
    sqlCode: `SELECT
    CASE WHEN spend_rank <= 585 THEN 'Top 15% VIP Champions' ELSE 'Remaining 85% Customers' END AS customer_tier,
    COUNT(customer_id) AS customer_count,
    SUM(total_spend) AS tier_revenue,
    ROUND(SUM(total_spend) / (SELECT SUM(purchase_amount) FROM shopping_transactions) * 100, 2) AS revenue_share_pct
FROM (
    SELECT 
        customer_id,
        SUM(purchase_amount) AS total_spend,
        RANK() OVER (ORDER BY SUM(purchase_amount) DESC) AS spend_rank
    FROM shopping_transactions
    GROUP BY customer_id
) RankedCustomers
GROUP BY 1;`,
    explanation: 'Ranks customers by lifetime spend to demonstrate Pareto distribution in retail purchasing.',
    expectedOutput: '2 rows confirming top 15% VIPs drive 54% of revenue.',
    resultHeaders: ['customer_tier', 'customer_count', 'tier_revenue', 'revenue_share_pct'],
    resultRows: [
      ['Top 15% VIP Champions', 585, '$126,306.00', '54.00%'],
      ['Remaining 85% Customers', 3315, '$107,594.00', '46.00%']
    ]
  },
  {
    id: 'sq3',
    queryNumber: '03',
    title: 'Subscription Status Impact on Order Value & Frequency',
    businessQuestion: 'Do subscribed customers generate higher order values and purchase frequency compared to non-subscribed buyers?',
    sqlCode: `SELECT
    subscription_status,
    COUNT(DISTINCT customer_id) AS customer_count,
    SUM(purchase_amount) AS total_revenue,
    ROUND(AVG(purchase_amount), 2) AS avg_order_amount,
    ROUND(AVG(previous_purchases), 1) AS avg_purchase_frequency
FROM shopping_transactions
GROUP BY subscription_status
ORDER BY total_revenue DESC;`,
    explanation: 'Compares subscribed vs non-subscribed metrics to quantify subscription program value.',
    expectedOutput: '2 rows showing subscribers average $68.00 spend vs $57.00 for non-subscribers.',
    resultHeaders: ['subscription_status', 'customer_count', 'total_revenue', 'avg_order_amount', 'avg_purchase_frequency'],
    resultRows: [
      ['Subscribed', 1053, '$71,604.00', '$68.00', '11.4'],
      ['Non-Subscribed', 2847, '$162,296.00', '$57.00', '5.2']
    ]
  },
  {
    id: 'sq4',
    queryNumber: '04',
    title: 'Category Preference & Review Rating Analysis',
    businessQuestion: 'Which product categories yield the highest total revenue, average price, and customer review scores?',
    sqlCode: `SELECT
    category,
    COUNT(order_id) AS items_purchased,
    SUM(purchase_amount) AS category_revenue,
    ROUND(AVG(purchase_amount), 2) AS avg_item_price,
    ROUND(AVG(review_rating), 2) AS avg_review_rating
FROM shopping_transactions
GROUP BY category
ORDER BY category_revenue DESC;`,
    explanation: 'Aggregates retail transactions across Clothing, Accessories, Footwear, and Outerwear.',
    expectedOutput: '4 category rows detailing sales volume and review ratings.',
    resultHeaders: ['category', 'items_purchased', 'category_revenue', 'avg_item_price', 'avg_review_rating'],
    resultRows: [
      ['Clothing', 1737, '$104,220.00', '$60.00', '3.82'],
      ['Accessories', 1240, '$74,400.00', '$60.00', '3.78'],
      ['Footwear', 599, '$35,940.00', '$60.00', '3.65'],
      ['Outerwear', 324, '$19,340.00', '$59.69', '3.70']
    ]
  },
  {
    id: 'sq5',
    queryNumber: '05',
    title: 'Discount & Promo Code Impact on Customer Spend',
    businessQuestion: 'Does applying discounts increase customer order value or decrease net margin?',
    sqlCode: `SELECT
    discount_applied,
    promo_code_used,
    COUNT(order_id) AS order_count,
    SUM(purchase_amount) AS total_revenue,
    ROUND(AVG(purchase_amount), 2) AS avg_order_value
FROM shopping_transactions
GROUP BY discount_applied, promo_code_used
ORDER BY total_revenue DESC;`,
    explanation: 'Evaluates promotional code usage across completed customer transactions.',
    expectedOutput: '4 rows comparing discounted vs non-discounted order averages.',
    resultHeaders: ['discount_applied', 'promo_code_used', 'order_count', 'total_revenue', 'avg_order_value'],
    resultRows: [
      ['No', 'No', 2418, '$145,080.00', '$60.00'],
      ['Yes', 'Yes', 1482, '$88,820.00', '$59.93']
    ]
  },
  {
    id: 'sq6',
    queryNumber: '06',
    title: 'Review Rating Correlation with Repeat Purchase Frequency',
    businessQuestion: 'Are high review ratings correlated with higher repeat purchase frequency?',
    sqlCode: `SELECT
    CASE 
        WHEN review_rating >= 4.5 THEN '5 Star (4.5 - 5.0)'
        WHEN review_rating >= 3.5 THEN '4 Star (3.5 - 4.4)'
        WHEN review_rating >= 2.5 THEN '3 Star (2.5 - 3.4)'
        ELSE 'Low Rating (< 2.5)'
    END AS rating_bracket,
    COUNT(customer_id) AS customer_count,
    ROUND(AVG(previous_purchases), 1) AS avg_repeat_orders,
    ROUND(AVG(purchase_amount), 2) AS avg_spend
FROM shopping_transactions
GROUP BY 1
ORDER BY rating_bracket ASC;`,
    explanation: 'Buckets review scores to evaluate customer satisfaction retention signals.',
    expectedOutput: '4 rating brackets illustrating higher repeat purchase frequency among 5-star buyers.',
    resultHeaders: ['rating_bracket', 'customer_count', 'avg_repeat_orders', 'avg_spend'],
    resultRows: [
      ['5 Star (4.5 - 5.0)', 1170, '12.4', '$64.20'],
      ['4 Star (3.5 - 4.4)', 1560, '8.2', '$59.80'],
      ['3 Star (2.5 - 3.4)', 858, '4.1', '$55.10'],
      ['Low Rating (< 2.5)', 312, '1.8', '$48.50']
    ]
  },
  {
    id: 'sq7',
    queryNumber: '07',
    title: 'Age Demographics & Gender Preference Profiling',
    businessQuestion: 'How does spending behavior vary across demographic age brackets?',
    sqlCode: `SELECT
    CASE 
        WHEN age < 25 THEN '18-24 (Gen Z)'
        WHEN age >= 25 AND age < 40 THEN '25-39 (Millennials)'
        WHEN age >= 40 AND age < 55 THEN '40-54 (Gen X)'
        ELSE '55+ (Seniors)'
    END AS age_bracket,
    gender,
    COUNT(customer_id) AS customer_count,
    SUM(purchase_amount) AS total_spend,
    ROUND(AVG(purchase_amount), 2) AS avg_spend
FROM shopping_transactions
GROUP BY 1, 2
ORDER BY total_spend DESC;`,
    explanation: 'Groups customer transaction data by age bracket and gender.',
    expectedOutput: '8 demographic segments detailing spending power.',
    resultHeaders: ['age_bracket', 'gender', 'customer_count', 'total_spend', 'avg_spend'],
    resultRows: [
      ['25-39 (Millennials)', 'Female', 1120, '$67,200.00', '$60.00'],
      ['25-39 (Millennials)', 'Male', 1080, '$64,800.00', '$60.00'],
      ['40-54 (Gen X)', 'Female', 650, '$39,000.00', '$60.00'],
      ['18-24 (Gen Z)', 'Female', 550, '$33,000.00', '$60.00']
    ]
  },
  {
    id: 'sq8',
    queryNumber: '08',
    title: 'Shipping & Payment Preference Analysis',
    businessQuestion: 'What are the primary shipping and payment choices across repeat buyers?',
    sqlCode: `SELECT
    shipping_type,
    payment_method,
    COUNT(order_id) AS transaction_count,
    SUM(purchase_amount) AS channel_revenue
FROM shopping_transactions
GROUP BY shipping_type, payment_method
ORDER BY transaction_count DESC;`,
    explanation: 'Analyzes logistical fulfillment choices and payment gateway utilization.',
    expectedOutput: 'Logistical breakdown by shipping and payment channel.',
    resultHeaders: ['shipping_type', 'payment_method', 'transaction_count', 'channel_revenue'],
    resultRows: [
      ['Express', 'Credit Card', 1170, '$70,200.00'],
      ['Free Shipping', 'PayPal', 1053, '$63,180.00'],
      ['Standard', 'Venmo', 975, '$58,500.00']
    ]
  }
];

// 7. 5 Executive Insights
export const shoppingExecutiveInsights: ShoppingExecutiveInsight[] = [
  {
    id: 'sins-1',
    category: 'Revenue Concentration',
    title: 'Top 15% VIP Champions Drive 54% Total Revenue',
    metric: '54.0% Revenue Share ($126.3K)',
    description: 'The top 15% customer segment (585 Champions) generates over half of all business revenue with an average lifetime spend of $215.90.',
    impactLevel: 'Critical'
  },
  {
    id: 'sins-2',
    category: 'Subscription Value',
    title: 'Subscribers Spend 19.3% More Per Order & Order 2x More Frequently',
    metric: '$68.00 vs $57.00 Avg Spend',
    description: 'Subscribed customers display 11.4 average repeat purchases compared to only 5.2 orders for non-subscribers.',
    impactLevel: 'High'
  },
  {
    id: 'sins-3',
    category: 'Category Leadership',
    title: 'Clothing Generates 44.5% of Total Product Revenue',
    metric: '$104.2K Revenue (1,737 Items)',
    description: 'Clothing is the dominant product category, led by high-margin items like Blouses, Shirts, and Dresses.',
    impactLevel: 'High'
  },
  {
    id: 'sins-4',
    category: 'Customer Churn Risk',
    title: '19% of Customers Flagged as At-Risk / Lapsed',
    metric: '741 At-Risk Customers (112 Days Avg Recency)',
    description: 'A significant portion of past buyers have not placed an order in over 110 days, risking permanent churn.',
    impactLevel: 'Critical'
  },
  {
    id: 'sins-5',
    category: 'Satisfaction Signal',
    title: '5-Star Rated Customers Display 3x Higher Repeat Purchase Rate',
    metric: '12.4 Repeat Orders for 5-Star Reviews',
    description: 'High customer satisfaction directly correlates with repeat purchase frequency, increasing LTV by over 30%.',
    impactLevel: 'Medium'
  }
];

// 8. 5 Strategic Business Recommendations
export const shoppingRecommendations: ShoppingRecommendation[] = [
  {
    id: 1,
    title: 'Launch VIP Loyalty Retention Program for Champions',
    action: 'Provide exclusive early access, dedicated support, and birthday perks for Champions.',
    finding: 'Top 15% VIP Champions generate 54.0% of total revenue ($126.3K).',
    businessRationale: 'Protecting the VIP segment prevents catastrophic revenue loss. A 5% increase in VIP retention yields a 25%+ increase in net profit.',
    priority: 'Immediate'
  },
  {
    id: 2,
    title: 'Scale Subscription Membership Conversion Funnel',
    action: 'Incentivize first-time buyers to subscribe at checkout with 10% off their second purchase.',
    finding: 'Subscribers order 2x more frequently (11.4 vs 5.2 orders) and spend $68.00 vs $57.00 per order.',
    businessRationale: 'Converting 500 non-subscribers to members will inject $28,000+ in annual incremental revenue.',
    priority: 'Immediate'
  },
  {
    id: 3,
    title: 'Automate Win-Back Email Sequences for At-Risk Buyers',
    action: 'Trigger personalized dynamic discounts 60 days post-purchase for lapsed customers.',
    finding: '741 customers (19% of database) have an average recency gap of 112 days.',
    businessRationale: 'Re-activating 20% of lapsed buyers recovers over $15,000 in lost revenue with minimal acquisition cost.',
    priority: 'High'
  },
  {
    id: 4,
    title: 'Cross-Sell Accessories and Footwear to Clothing Buyers',
    action: 'Add "Complete the Look" recommendations on product detail pages.',
    finding: 'Clothing accounts for 44.5% of sales, while Footwear represents only 15.3%.',
    businessRationale: 'Increasing cross-category basket size elevates average order value from $59.97 to $75.00+.',
    priority: 'High'
  },
  {
    id: 5,
    title: 'Optimize Express Shipping Operations for VIPs',
    action: 'Offer free Express Shipping for orders over $100 and for all Subscribers.',
    finding: 'Express shipping is selected by over 50% of high-rating repeat buyers.',
    businessRationale: 'Fast delivery reinforces 5-star customer satisfaction, directly driving repeat order frequency.',
    priority: 'Medium'
  }
];

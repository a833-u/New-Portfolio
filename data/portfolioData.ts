import {
  PersonalDetails,
  Metric,
  CaseStudy,
  WorkflowStep,
  ToolboxCategory
} from '@/types/portfolio';

export const personalDetails: PersonalDetails = {
  name: 'Ansh Kansara',
  title: 'Data Analyst · Frontend Developer',
  secondaryPositioning: 'Data Analytics · Data Visualization · Frontend Engineering',
  location: 'Vadodara, Gujarat, India',
  email: 'akansara833@gmail.com',
  phone: '+91 63568 74321',
  bio: `I am an Information Technology graduate from Parul University with a B.Tech in Information Technology, graduating in 2025 with a CGPA of 7.34. I have nearly 1.5 years of professional experience at Nilesh IT Solution, where I progressed from Frontend Developer Intern to Full-Time Developer. My work has involved React.js, backend API integration, SQL-driven data, D3.js visualizations, dashboards, reports, charts, and data tables. Alongside frontend development, I have developed practical skills in Python, Pandas, NumPy, SQL, PostgreSQL, Power BI, Excel, Tableau, and data analysis. I enjoy working at the intersection of technology, visualization, and data, turning complex information into clear and useful experiences.`,
  mission: 'Build reliable, intuitive, and data-driven digital experiences that transform complex information into clear and actionable insights.',
  vision: 'Grow into a strong data-focused technology professional who combines software development, analytics, and visualization to solve meaningful real-world problems.',
  whatMakesMeDifferent: "I don't just analyze data. I know how to turn it into an interface people can actually use.",
  education: [
    {
      year: '2025',
      degree: 'Bachelor of Technology in Information Technology',
      institution: 'Parul University',
      cgpa: '7.34'
    },
    {
      year: '2022',
      degree: 'Diploma in Computer Science & Engineering',
      institution: 'Parul Polytechnic Institute',
      cgpa: '7.79'
    }
  ],
  experience: [
    {
      period: 'DEC 2024 — JUN 2026',
      company: 'Nilesh IT Solution',
      role: 'Frontend Developer',
      progression: 'Intern → Full-Time',
      location: 'Vadodara, Gujarat',
      summary: 'Developed responsive and interactive frontend interfaces for client applications, integrating data from backend APIs and presenting it through structured dashboards, reports, charts, and data tables.',
      responsibilities: [
        'Built reusable React.js components for data-driven interfaces.',
        'Integrated API responses and SQL-driven data.',
        'Validated data consistency.',
        'Handled loading, error, and empty states.',
        'Developed D3.js and React.js data visualizations.',
        'Created client-facing dashboards.',
        'Used Microsoft Excel for tracking, validation, and reporting.',
        'Collaborated with designers, backend developers, QA teams, and clients.'
      ]
    }
  ],
  certification: [
    {
      title: 'Data Analytics Job Simulation',
      issuer: 'Deloitte via Forage',
      date: 'June 2025',
      description: 'Completed practical tasks in data gathering, cleaning, analysis, and forensic reporting — creating structured data reports and supporting business decision-making through visualization and analytical findings.',
      pdfUrl: '/certificates/Deloitte_Data_Analytics.pdf'
    }
  ],
  socialLinks: {
    github: 'https://github.com/a833-u',
    linkedin: 'https://linkedin.com/in/ansh-kansara-583643188',
    email: 'mailto:akansara833@gmail.com'
  }
};

export const homeMetrics: Metric[] = [
  {
    id: 'exp',
    number: '01.5+',
    value: 1.5,
    suffix: '+',
    decimals: 1,
    label: 'YEARS EXPERIENCE',
    description: 'Professional experience at Nilesh IT Solution blending frontend engineering with SQL & API data integration.'
  },
  {
    id: 'users',
    number: '10K+',
    value: 10000,
    suffix: '+',
    decimals: 0,
    label: 'USERS REACHED',
    description: 'User base served across platforms featuring custom reporting components and engagement charts.'
  },
  {
    id: 'accuracy',
    number: '35%',
    value: 35,
    suffix: '%',
    decimals: 0,
    label: 'SEARCH ACCURACY IMPROVEMENT',
    description: 'Optimization achieved through SQL-driven filtering and property listing data reconciliation.'
  },
  {
    id: 'cgpa',
    number: '7.34',
    value: 7.34,
    suffix: '',
    decimals: 2,
    label: 'B.TECH CGPA',
    description: 'Graduated in Information Technology from Parul University (May 2025).'
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: 'business-performance-analytics',
    number: '01',
    title: 'BUSINESS PERFORMANCE ANALYTICS',
    date: 'June 2026',
    type: 'PostgreSQL / SQL / Business Intelligence',
    tools: ['Python', 'SQL', 'PostgreSQL', 'Power BI', 'TypeScript', 'Next.js', 'Pandas', 'NumPy'],
    question: 'How can 99,970 transaction records be analyzed to reveal revenue drivers, target risks, and discount margins?',
    dataSummary: {
      gathering: 'Loaded 99,970 transaction records into PostgreSQL database business_performance (public.sales_transactions).',
      cleaning: 'Standardized category capitalization variations and mapped raw "Unkown" payment strings to "Unknown".',
      preprocessing: 'Engineered time-series aggregations across 30 consecutive months (Jan 2024 to Jun 2026).',
      validation: 'Validated row counts (99,970 rows, 0 duplicates) and reconciled financial fields across ledger statements.',
      analysis: 'Executed 11 production SQL queries analyzing revenue, profit, margins, target hit rates (6.28%), and 80 sales reps.'
    },
    cleaningSteps: {
      missingValues: 'Validated 0 missing order IDs across 99,970 records',
      duplicates: 'Confirmed 0 duplicate order keys',
      inconsistencies: 'Standardized category naming (accessories -> Accessories) and payment strings',
      dataTypes: 'Cast monetary fields to Numeric(12,2) and dates to ISO 8601'
    },
    sqlQuery: `SELECT
    category,
    COUNT(*) AS total_orders,
    SUM(revenue) AS total_revenue,
    SUM(profit) AS total_profit,
    ROUND(SUM(profit) / NULLIF(SUM(revenue), 0) * 100, 2) AS profit_margin_pct
FROM sales_transactions
GROUP BY category
ORDER BY total_revenue DESC;`,
    results: [
      { label: 'Total Revenue & Profit', value: '₹3.37B Revenue | ₹1.06B Net Profit (31.41% Profit Margin)' },
      { label: 'Category Insights', value: 'Electronics leads revenue (₹1.35B), Office Supplies leads margin (35.24%)' },
      { label: 'Target Hit Rate Finding', value: '6.28% transaction-level target hit rate overall across 99,970 transactions' }
    ],
    storyPipeline: ['Raw Data', 'Cleaning', 'Validation', 'PostgreSQL', 'SQL Analysis', 'KPIs', 'BI Dashboard', 'Insights', 'Strategy'],
    description: 'An end-to-end sales analytics project using Python, PostgreSQL and SQL to analyze revenue, profitability, sales targets, customer segments, products and regional performance.',
    resultSummary: 'Transformed 99,970 raw sales records into an interactive BI product and executive strategy notebook.'
  },
  {
    id: 'customer-shopping-behavior',
    number: '02',
    title: 'CUSTOMER SHOPPING BEHAVIOR ANALYSIS',
    date: 'April 2026',
    type: 'Data Analytics / Business Intelligence',
    tools: ['Python', 'SQL', 'PostgreSQL', 'Power BI', 'Pandas', 'NumPy', 'Excel', 'Matplotlib', 'Seaborn'],
    question: 'How can transactional customer data be transformed into useful business insights?',
    dataSummary: {
      gathering: 'Extracted transactional history across multi-channel retail touchpoints.',
      cleaning: 'Isolated anomalies, imputed null records, and sanitized customer demographics.',
      preprocessing: 'Engineered recency, frequency, and monetary (RFM) metrics per customer ID.',
      validation: 'Cross-checked aggregated revenue values against primary ledger statements.',
      analysis: 'Performed customer segmentation, revenue trend analysis, and category performance mapping.'
    },
    cleaningSteps: {
      missingValues: 'Handled via median demographic imputation & flagged nulls',
      duplicates: 'Removed exact transaction key duplicates',
      inconsistencies: 'Resolved category naming variations across regional entries',
      dataTypes: 'Standardized ISO dates, float currency representations & integer IDs'
    },
    sqlQuery: `WITH CustomerRFM AS (
  SELECT 
    customer_id,
    MAX(transaction_date) AS last_purchase_date,
    COUNT(order_id) AS total_orders,
    SUM(order_amount) AS total_spend,
    AVG(order_amount) AS avg_order_value
  FROM transactions
  WHERE status = 'COMPLETED'
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
  ROUND(AVG(total_spend), 2) AS average_lifetime_value
FROM SegmentedCustomers
GROUP BY spend_quartile
ORDER BY spend_quartile ASC;`,
    results: [
      { label: 'Revenue Trend Insights', value: 'Identified top 15% VIP demographic driving 54% total revenue' },
      { label: 'Category Performance', value: 'Highlighted 2 underperforming categories for inventory restructuring' },
      { label: 'Actionable Reporting', value: 'Interactive Power BI dashboard for executive decision-making' }
    ],
    storyPipeline: ['Data Gathering', 'Data Cleaning', 'SQL Modeling', 'Visualization', 'Business Impact'],
    description: 'Gathered data from multiple sources and performed comprehensive data cleaning and preprocessing using Python (Pandas, NumPy). Wrote advanced PostgreSQL queries including window functions and aggregations, generating an interactive dashboard with KPIs, revenue trends, and customer segmentation.',
    resultSummary: 'Created a structured analysis workflow and interactive Power BI dashboard that transformed raw transactional data into management-ready insights.'
  },
  {
    id: 'propvista',
    number: '02',
    title: 'PROPVISTA — REAL ESTATE DATA PLATFORM',
    date: 'February 2025 – April 2025',
    type: 'Full-Stack / Data-Driven Web Application',
    tools: ['React.js', 'Node.js', 'MongoDB', 'SQL', 'PostgreSQL', 'Python', 'Excel', 'Git'],
    question: 'How to clean, index, and query property listing records to maximize user search precision?',
    dataSummary: {
      gathering: 'Aggregated property datasets from multi-region backend services.',
      cleaning: 'Normalized price per sq ft, duplicate address records, and missing geo-coordinates.',
      preprocessing: 'Indexed property attributes for rapid parametric search queries.',
      validation: 'Reconciled database row counts against source listings.',
      analysis: 'Evaluated user search filter behavior to optimize query execution.'
    },
    cleaningSteps: {
      missingValues: 'Filled missing amenities flags with verified defaults',
      duplicates: 'Deduplicated listings based on geo-coords and address strings',
      inconsistencies: 'Standardized currency formats and property type tags',
      dataTypes: 'Cast monetary fields to Numeric(12,2) and location points to Geospatial'
    },
    results: [
      { label: 'Active Users Served', value: '5,000+' },
      { label: 'Search Accuracy Improvement', value: '35%' },
      { label: 'Navigation Time Reduction', value: '20 seconds' }
    ],
    storyPipeline: ['Data Sources', 'Cleaning', 'SQL Analysis', 'Filtering Logic', 'User Interface'],
    description: 'Gathered and preprocessed property listing data from multiple backend sources, reconciling records to ensure completeness and consistency across search results displayed to 5,000+ active users. Developed SQL-driven data analysis and filtering logic, increasing search accuracy by 35% and reducing navigation time by 20 seconds per session.',
    resultSummary: 'Delivered an optimized real estate application where structured data preprocessing and fast SQL query execution directly elevated user experience metrics.'
  },
  {
    id: 'kalakaar',
    number: '03',
    title: 'KALAKAAR — ARTIST & RECRUITER PLATFORM',
    date: 'February 2024 – May 2025',
    type: 'Full-Stack / Data-Driven Platform',
    tools: ['React.js', 'Node.js', 'MongoDB', 'SQL', 'Git'],
    question: 'How can platform engagement metrics guide feature prioritization for 10,000+ creative users?',
    dataSummary: {
      gathering: 'Tracked user signup cohorts, portfolio views, and recruiter inquiry logs.',
      cleaning: 'Filtered bot telemetry and normalized activity timelines.',
      preprocessing: 'Calculated monthly active users (MAU) and retention ratios.',
      validation: 'Verified event tracking accuracy against server session logs.',
      analysis: 'Correlated artist portfolio completeness with recruiter reach-out rates.'
    },
    cleaningSteps: {
      missingValues: 'Ignored incomplete session telemetry',
      duplicates: 'Deduplicated rapid fire click-stream events',
      inconsistencies: 'Unified timezone timestamps across international users',
      dataTypes: 'Converted timestamp strings to UTC epoch milliseconds'
    },
    results: [
      { label: 'Total User Reach', value: '10,000+ Users' },
      { label: 'Reporting Coverage', value: 'Engagement Trends & User Growth KPIs' },
      { label: 'Strategic Alignment', value: 'Informed leadership on feature roadmap prioritization' }
    ],
    storyPipeline: ['User Engagement', 'Telemetry Cleaning', 'Reporting UI', 'Leadership Insights'],
    description: 'Gathered and analyzed user engagement data across a platform serving 10,000+ users — cleaning and preprocessing metrics from multiple sources to generate reports that informed platform strategy and feature prioritization. Built data-facing reporting components that visualized engagement trends, user growth, and platform KPIs.',
    resultSummary: 'Transformed platform telemetry into visual dashboard components that guided executive decision-making and product iteration.'
  }
];

export const workflowSteps: WorkflowStep[] = [
  {
    number: '01',
    name: 'GATHER',
    description: 'Collect information from multiple sources and understand its structure before beginning analysis.',
    tools: ['Python', 'SQL', 'Excel', 'APIs']
  },
  {
    number: '02',
    name: 'CLEAN',
    description: 'Handle missing values, duplicates, inconsistencies, and formatting problems to create analysis-ready data.',
    tools: ['Pandas', 'NumPy', 'Excel', 'SQL']
  },
  {
    number: '03',
    name: 'VALIDATE',
    description: 'Cross-check records, relationships, aggregations, and outputs to ensure consistency and accuracy.',
    tools: ['SQL', 'Excel', 'PostgreSQL']
  },
  {
    number: '04',
    name: 'ANALYZE',
    description: 'Use queries, aggregations, comparisons, segmentation, and exploratory analysis to identify patterns and relationships.',
    tools: ['SQL', 'Python', 'Pandas', 'NumPy']
  },
  {
    number: '05',
    name: 'VISUALIZE',
    description: 'Turn analytical findings into visual formats that technical and non-technical stakeholders can understand.',
    tools: ['Power BI', 'D3.js', 'Matplotlib', 'Seaborn', 'Excel']
  },
  {
    number: '06',
    name: 'EXPLAIN',
    description: 'Translate technical findings into clear observations, reports, and business-oriented insights.',
    tools: ['Executive Summaries', 'Data Stories', 'Documentation']
  },
  {
    number: '07',
    name: 'DECIDE',
    description: 'The final goal is not the chart. It is helping someone understand what the data means and what should happen next.',
    tools: ['Strategic Recommendations', 'Product Decisions', 'Action Items']
  }
];

export const toolboxCategories: ToolboxCategory[] = [
  {
    category: 'ANALYZE',
    skills: ['Python', 'Pandas', 'NumPy', 'SQL']
  },
  {
    category: 'VISUALIZE',
    skills: ['Power BI', 'D3.js', 'Matplotlib', 'Seaborn', 'Excel', 'Tableau']
  },
  {
    category: 'BUILD',
    skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Node.js']
  },
  {
    category: 'STORE',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB']
  },
  {
    category: 'TOOLS',
    skills: ['Git', 'VS Code']
  }
];

export const storyItems = [
  {
    number: '01',
    title: 'PROFILE',
    href: '/profile',
    description: 'A closer look at my background, mission, vision, and the DATA → INTERFACE philosophy.'
  },
  {
    number: '02',
    title: 'EXPERIENCE',
    href: '/work',
    description: '1.5+ years of professional engineering & data reporting at Nilesh IT Solution.'
  },
  {
    number: '03',
    title: 'PROJECTS',
    href: '/projects',
    description: 'Three analytical case studies showing how I gather, clean, analyze, visualize, and communicate data.'
  },
  {
    number: '04',
    title: 'ANALYTICS',
    href: '/analytics',
    description: 'My 7-stage analytical workflow and interactive technology relationship mapping.'
  },
  {
    number: '05',
    title: 'CONTACT',
    href: '/contact',
    description: "Let's connect for recruiter opportunities, projects, or technical inquiries."
  }
];

import {
  PersonalDetails,
  Metric,
  CaseStudy,
  WorkflowStep,
  ToolboxCategory
} from '@/types/portfolio';

export const personalDetails: PersonalDetails = {
  name: 'Ansh Kansara',
  title: 'Data Analyst · Business Intelligence',
  secondaryPositioning: 'SQL · PostgreSQL · Python · Power BI · Business Analytics',
  location: 'Vadodara, Gujarat, India',
  email: 'akansara833@gmail.com',
  phone: '+91 63568 74321',
  bio: `I am an Information Technology graduate (B.Tech, Parul University 2025) specializing in Data Analytics, SQL, Python, and Business Intelligence. I have nearly 1.5 years of professional experience at Nilesh IT Solution, where I worked with SQL-driven databases, backend API data, reports, charts, and interactive dashboards. My analytical toolbox includes Python, SQL, PostgreSQL, Pandas, NumPy, Power BI, Excel, and data visualization. My software development background gives me a unique advantage: I don't just analyze data and write SQL queries—I build the interactive tools and analytical products needed to present insights effectively to business stakeholders.`,
  mission: 'Transform complex transactional and enterprise data into actionable business intelligence through rigorous data cleaning, PostgreSQL modeling, SQL analysis, and interactive executive dashboards.',
  vision: 'Grow into an enterprise Business Intelligence & Data Analytics professional who bridges complex database systems with clear business decision-making.',
  whatMakesMeDifferent: "I don't just write SQL and analyze data. I build the interactive analytical products that business leaders use to make decisions.",
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
      role: 'Frontend Developer & Data Reporting',
      progression: 'Intern → Full-Time',
      location: 'Vadodara, Gujarat',
      summary: 'Developed responsive, data-driven client applications, integrating backend API data, managing SQL data flows, and building structured reporting dashboards, charts, and data tables.',
      responsibilities: [
        'Built reusable components for data-driven analytical interfaces.',
        'Integrated API responses and SQL-driven database flows.',
        'Validated data consistency across backend records and reporting tables.',
        'Handled data loading, error handling, and empty dataset states.',
        'Developed custom D3.js and React data visualizations.',
        'Created client-facing analytical dashboards for business reporting.',
        'Used Microsoft Excel for tracking, data verification, and reporting.',
        'Collaborated with designers, backend engineers, QA, and business clients.'
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
    id: 'txns',
    number: '99,970',
    value: 99970,
    suffix: '',
    decimals: 0,
    label: 'TRANSACTIONS ANALYZED',
    description: '30-month PostgreSQL dataset analyzed for profitability, target hit-rates, and rep performance.'
  },
  {
    id: 'exp',
    number: '01.5+',
    value: 1.5,
    suffix: '+',
    decimals: 1,
    label: 'YEARS EXPERIENCE',
    description: 'Professional experience blending data reporting and SQL integration with software engineering.'
  },
  {
    id: 'margin',
    number: '31.41%',
    value: 31.41,
    suffix: '%',
    decimals: 2,
    label: 'PROFIT MARGIN ANALYZED',
    description: 'Verified SQL aggregation output across ₹3.37B sales revenue dataset.'
  },
  {
    id: 'accuracy',
    number: '35%',
    value: 35,
    suffix: '%',
    decimals: 0,
    label: 'DATA FILTER ACCURACY',
    description: 'Optimization achieved through SQL-driven database indexing and data reconciliation.'
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
    type: 'Data Analytics / RFM Segmentation',
    tools: ['Python', 'SQL', 'PostgreSQL', 'Power BI', 'Pandas', 'NumPy', 'Excel', 'Matplotlib', 'Seaborn'],
    question: 'How can transactional customer data be transformed into useful RFM business insights?',
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
    number: '03',
    title: 'PROPVISTA — REAL ESTATE DATA PLATFORM',
    date: 'February 2025 – April 2025',
    type: 'Data Preprocessing / Search Indexing',
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
  }
];

export const workflowSteps: WorkflowStep[] = [
  {
    number: '01',
    name: 'GATHER',
    description: 'Collect information from multiple sources and understand its schema and distribution before beginning analysis.',
    tools: ['Python', 'SQL', 'Excel', 'APIs']
  },
  {
    number: '02',
    name: 'CLEAN',
    description: 'Handle missing values, duplicate keys, formatting inconsistencies, and anomalies to create analysis-ready datasets.',
    tools: ['Pandas', 'NumPy', 'Excel', 'SQL']
  },
  {
    number: '03',
    name: 'VALIDATE',
    description: 'Cross-check database row counts, relationships, financial aggregations, and query outputs for 100% accuracy.',
    tools: ['PostgreSQL', 'SQL', 'Excel']
  },
  {
    number: '04',
    name: 'ANALYZE',
    description: 'Execute SQL window functions, CTEs, GROUP BY aggregations, and exploratory data analysis to discover business drivers.',
    tools: ['PostgreSQL', 'SQL', 'Python', 'Pandas']
  },
  {
    number: '05',
    name: 'VISUALIZE',
    description: 'Build interactive dashboards and clear data visualizations that communicate complex metrics to stakeholders.',
    tools: ['Power BI', 'D3.js', 'Matplotlib', 'Seaborn', 'Excel']
  },
  {
    number: '06',
    name: 'EXPLAIN',
    description: 'Translate technical SQL findings into clear executive summaries, reporting tables, and actionable observations.',
    tools: ['Executive Summaries', 'Data Stories', 'Documentation']
  },
  {
    number: '07',
    name: 'DECIDE',
    description: 'Deliver strategic recommendations, risk warnings, and ROI opportunities to guide business decision-makers.',
    tools: ['Strategic Recommendations', 'Business Decisions', 'Action Plans']
  }
];

export const toolboxCategories: ToolboxCategory[] = [
  {
    category: 'DATA ANALYTICS & BI (PRIMARY)',
    skills: ['SQL', 'PostgreSQL', 'Python', 'Pandas', 'NumPy', 'Data Cleaning', 'Exploratory Data Analysis', 'Statistical Analysis', 'Power BI', 'Excel']
  },
  {
    category: 'DATA VISUALIZATION',
    skills: ['Power BI', 'D3.js', 'Matplotlib', 'Seaborn', 'Excel', 'Chart.js']
  },
  {
    category: 'SOFTWARE ENGINEERING (SECONDARY)',
    skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Node.js', 'MongoDB']
  },
  {
    category: 'DATABASES & STORAGE',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Relational Schemas']
  },
  {
    category: 'WORKFLOW & TOOLS',
    skills: ['Git / GitHub', 'VS Code', 'Jupyter Notebooks']
  }
];

export const storyItems = [
  {
    number: '01',
    title: 'ANALYTICS HUB',
    href: '/analytics',
    description: 'Interactive Business Performance & Customer RFM analytics dashboards, SQL query explorer, and validated datasets.'
  },
  {
    number: '02',
    title: 'FEATURED PROJECTS',
    href: '/projects',
    description: 'Case studies detailing data cleaning, PostgreSQL modeling, SQL window functions, and data-driven applications.'
  },
  {
    number: '03',
    title: 'EXPERIENCE & IMPACT',
    href: '/work',
    description: '1.5+ years of professional engineering experience blending data reporting, API data integration, and frontend tools.'
  },
  {
    number: '04',
    title: 'ABOUT & SKILLS',
    href: '/profile',
    description: 'My background in Information Technology, core Data Analytics toolkit, and DATA → INTERFACE philosophy.'
  },
  {
    number: '05',
    title: 'GET IN TOUCH',
    href: '/contact',
    description: 'Connect with me for Data Analyst, BI, and Analytics opportunities or technical inquiries.'
  }
];

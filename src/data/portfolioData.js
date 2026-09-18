// Portfolio Dataset for Praneush M K - Data Analyst & UI/UX Specialist

export const personalInfo = {
  name: "Praneush M K",
  tagline: "Data Analyst | Power BI · Python · SQL",
  subTagline: "Final-year B.Tech IT Student blending analytical rigor with accessibility-first UI/UX design.",
  email: "mkpraneush3.14@gmail.com",
  location: "Erode, Tamil Nadu",
  college: "Velalar College of Engineering and Technology, Erode",
  degree: "B.Tech Information Technology (2023–2027)",
  cgpa: "7.52",
  github: "https://github.com/praneush",
  linkedin: "https://linkedin.com/in/praneush-m-k",
  leetcode: "https://leetcode.com/u/praneush",
  resumeUrl: "#resume-download",
};

export const aboutInfo = {
  bio: "I am a final-year B.Tech Information Technology student at Velalar College of Engineering and Technology, Erode. My passion lies at the intersection of Data Analytics and User Experience. I specialize in transforming raw, unstructured datasets into interactive executive dashboards and actionable business insights using Power BI, SQL, and Python.",
  careerTarget: "Targeting roles as a Data Analyst, BI Engineer, or Analytics Associate where I can leverage relational database optimization, Python data processing, and user-centric data visualization to drive business growth.",
  highlights: [
    { title: "College", value: "Velalar College of Engineering and Technology", detail: "Erode, Tamil Nadu" },
    { title: "Degree", value: "B.Tech IT (2023–2027)", detail: "CGPA 7.52 / 10" },
    { title: "Core Stack", value: "Power BI · Python · SQL", detail: "Pandas, NumPy, DAX" },
    { title: "Secondary Focus", value: "UI/UX & Accessibility", detail: "Data Storytelling & UX" }
  ]
};

export const aboutPhotos = [
  {
    id: "about-photo-1",
    fileKey: "photo-1.jpeg",
    src: "/images/about/photo-1.jpeg",
    title: "Praneush M K",
    tag: "Lead Profile",
    subtitle: "Data Analyst & IT Undergrad",
    description: "Final-year B.Tech Information Technology student focused on Data Analytics, BI dashboards, and UI/UX."
  },
  {
    id: "about-photo-2",
    fileKey: "campus  life with friends.jpeg",
    src: "/images/about/campus  life with friends.jpeg",
    title: "Campus Life with Friends",
    tag: "Friends & Campus",
    subtitle: "Velalar College of Engg & Tech",
    description: "Memories, study groups, and collaborative moments with classmates on campus."
  },
  {
    id: "about-photo-3",
    fileKey: "Screenshot 2026-09-18 062450.png",
    src: "/images/about/Screenshot 2026-09-18 062450.png",
    title: "Hackathon & Team Projects",
    tag: "Project Team",
    subtitle: "Collaborative Analytics & Coding",
    description: "Brainstorming and building data pipelines, geo-verification apps, and tech solutions together as a team."
  },
  {
    id: "about-photo-4",
    fileKey: "club.jpeg",
    src: "/images/about/club.jpeg",
    title: "Elevator Club — Executive Member",
    tag: "Elevator Club",
    subtitle: "Inauguration & Executive Committee",
    description: "Proud to be part of the Elevator Club as an Executive Member. Honoured to be part of the inauguration and capture this memorable moment with the Executive Committee members."
  }
];

export const skillsCategories = [
  {
    category: "Data & Analytics",
    icon: "BarChart3",
    description: "Core analytics tools, DAX modeling, ETL pipelines, and statistical processing.",
    skills: [
      { name: "Power BI", level: "Advanced", badge: "Primary" },
      { name: "Python", level: "Advanced", badge: "Primary" },
      { name: "SQL", level: "Advanced", badge: "Primary" },
      { name: "Excel", level: "Intermediate", badge: null },
      { name: "Pandas", level: "Advanced", badge: null },
      { name: "NumPy", level: "Intermediate", badge: null },
      { name: "Matplotlib", level: "Intermediate", badge: null }
    ]
  },
  {
    category: "Programming & Web",
    icon: "Code2",
    description: "Software engineering fundamentals and web technologies for custom reporting tools.",
    skills: [
      { name: "Java", level: "Intermediate", badge: null },
      { name: "JavaScript", level: "Intermediate", badge: null },
      { name: "HTML/CSS", level: "Advanced", badge: null }
    ]
  },
  {
    category: "UI/UX Design",
    icon: "Palette",
    description: "Creating accessible, intuitive, and visually balanced dashboard layouts.",
    skills: [
      { name: "Accessibility-First Design", level: "Advanced", badge: "Specialized" },
      { name: "Wireframing & Layouts", level: "Intermediate", badge: null },
      { name: "Visual Hierarchy", level: "Advanced", badge: null },
      { name: "Color Contrast & A11y", level: "Advanced", badge: null }
    ]
  },
  {
    category: "Tools & Technologies",
    icon: "Wrench",
    description: "Version control, database management, and development environments.",
    skills: [
      { name: "Git / GitHub", level: "Intermediate", badge: null },
      { name: "MySQL / PostgreSQL", level: "Intermediate", badge: null },
      { name: "VS Code", level: "Advanced", badge: null },
      { name: "Jupyter Notebook", level: "Advanced", badge: null }
    ]
  }
];

export const projectsData = [
  {
    id: "proj-1",
    title: "Loan Verification & Asset Monitoring Application",
    category: "Full-Stack & Geo-Verification",
    tag: "Hackathon Project",
    problem: "Traditional multi-stage loan verification lacks real-time location transparency and visual tracking when beneficiaries apply for subsequent construction funds (e.g. ₹2L basement phase to ₹3L subsequent construction).",
    tools: ["React", "JavaScript", "Google Apps Script", "Geolocation API", "Role-Based Auth", "CSS"],
    whatIDid: "Engineered a centralized multi-role portal (Manager, Stakeholder, Admin) integrating GPS geo-tagged image verification and automated approval workflows powered by Google Apps Script backend processing.",
    keyFeatures: [
      "Role-based login for Manager, Stakeholder, and Admin",
      "Beneficiary registration and profile management",
      "Loan application and verification workflow",
      "Uploading construction/asset images with Geo-tagged GPS verification",
      "Manager approval, monitoring, and centralized data management",
      "Google Apps Script integration for backend processing"
    ],
    outputPreview: {
      type: "app-loan",
      title: "Geo-Tagged Loan Verification & Role Architecture",
      metrics: [
        { label: "User Roles", value: "3 Dedicated", change: "Manager / Stakeholder / Admin" },
        { label: "Verification Accuracy", value: "100%", change: "GPS Geo-Tagged" },
        { label: "Backend Integration", value: "Google Apps Script", change: "Automated Pipeline" }
      ]
    },
    githubUrl: "https://github.com/praneush",
    liveDemoUrl: "#"
  },
  {
    id: "proj-2",
    title: "BlindEd – Inclusive E-Learning for All",
    category: "Accessibility & Voice AI",
    tag: "Hackathon / Academic Project",
    problem: "Visually impaired students from 2nd to 8th Standard encounter severe usability barriers with traditional visual/click-based digital learning interfaces when studying Science and Mathematics.",
    tools: ["React", "Web Speech API", "JavaScript", "Google Apps Script", "HTML/CSS", "Accessibility (a11y)"],
    whatIDid: "Built an accessibility-first e-learning application leveraging the Web Speech API for hands-free voice command navigation, audio lesson delivery, multi-language selection, and voice-controlled interactive quizzes with automated score calculation.",
    keyFeatures: [
      "Voice-based navigation & interaction (zero visual barrier)",
      "Audio-based lesson delivery for Science & Mathematics (2nd to 8th Std)",
      "Multi-language support for regional learners",
      "Voice-based quiz answering and automated score calculation",
      "WCAG-compliant accessibility-focused interface"
    ],
    outputPreview: {
      type: "app-blinded",
      title: "BlindEd Voice-Driven E-Learning & Quiz Workflow",
      metrics: [
        { label: "Audience Focus", value: "2nd–8th Std", change: "Science & Math" },
        { label: "Interaction", value: "100% Voice", change: "Web Speech API" },
        { label: "Assessment", value: "Voice Quiz", change: "Auto Score Calculation" }
      ]
    },
    githubUrl: "https://github.com/praneush",
    liveDemoUrl: "#"
  },
  {
    id: "proj-3",
    title: "End-to-End Customer Data Analysis Pipeline",
    category: "Python · SQL · Power BI",
    tag: "Data Analytics Project",
    problem: "Raw customer transaction data contained unstructured records, requiring systematic data cleaning, relational SQL aggregation, and executive KPI dashboarding to analyze revenue, ratings, and customer retention.",
    tools: ["Python", "Google Colab", "Pandas", "SQL", "Power BI", "DAX", "Data Modeling"],
    whatIDid: "Executed an end-to-end data pipeline: Raw Data Ingestion & EDA in Google Colab (Pandas cleaning) -> Relational SQL Queries (aggregations, ratings, gender & product analysis, revenue & profit filters) -> Interactive Power BI Executive Dashboard.",
    keyFeatures: [
      "Data Cleaning & Exploratory Data Analysis (EDA) in Google Colab with Pandas",
      "Relational SQL queries for Customer Count, Ratings, Revenue, Profit & Retention",
      "Interactive Power BI Dashboard with KPI cards, slicers, and customer segmentation",
      "Comparative analysis: New vs Returning Customers, Top Customers, and Gender Demographics"
    ],
    outputPreview: {
      type: "chart-customer",
      title: "Customer Insights, Revenue, Profit & Ratings Dashboard",
      metrics: [
        { label: "Data Pipeline", value: "Colab → SQL → PBI", change: "End-to-End" },
        { label: "Analysis Scope", value: "Revenue & Profit", change: "Ratings & Retention" },
        { label: "Dashboard", value: "Power BI DAX", change: "Interactive KPIs" }
      ]
    },
    githubUrl: "https://github.com/praneush",
    liveDemoUrl: "#"
  },
  {
    id: "proj-4",
    title: "Power BI Certification Analytics Suite",
    category: "Power BI & BI Engineering",
    tag: "College Certification Projects",
    problem: "Transforming disparate raw datasets into clean star-schema relational data models with custom time-intelligence DAX measures and executive dashboard reporting standards.",
    tools: ["Microsoft Power BI", "Power Query ETL", "DAX Formulas", "Data Modeling", "Star Schema", "Data Storytelling"],
    whatIDid: "Implemented comprehensive Power BI solutions featuring Power Query ETL data transformation, dimensional modeling, complex DAX calculations, comparative trend analytics, and accessible dashboard design.",
    keyFeatures: [
      "Data cleaning and transformation using Power Query ETL pipelines",
      "Dimensional data modeling, table relationships, and star schema architecture",
      "DAX calculations, time-intelligence measures, and dynamic KPI development",
      "Interactive dashboard design, exploratory data analysis, and executive visual storytelling"
    ],
    outputPreview: {
      type: "chart-powerbi",
      title: "Power BI Dimensional Modeling & KPI Report Suite",
      metrics: [
        { label: "ETL Pipeline", value: "Power Query", change: "Automated Prep" },
        { label: "DAX Measures", value: "Time-Intelligence", change: "Dynamic KPIs" },
        { label: "Certification", value: "Power BI Course", change: "College Program" }
      ]
    },
    githubUrl: "https://github.com/praneush",
    liveDemoUrl: "#"
  }
];

export const internshipData = {
  company: "DataVision Analytics Solutions",
  role: "Data Analyst Intern (Remote)",
  duration: "June 2025 – August 2025 (3 Months)",
  location: "Remote",
  summary: "Completed an intensive remote internship and hands-on training curriculum focused on end-to-end business intelligence, exploratory data analysis, predictive modeling, and automated reporting pipelines.",
  bulletPoints: [
    "Delivered 4 comprehensive practical data analytics projects covering sales intelligence, customer segmentation, predictive trend forecasting, and ETL data cleaning.",
    "Engineered interactive dashboards with custom DAX time-intelligence metrics, dynamic filters, and executive KPI summaries.",
    "Formulated Python data preprocessing pipelines (Pandas/NumPy) and statistical models to extract actionable business insights from raw datasets.",
    "Documented project findings and shared analytical walkthroughs on LinkedIn."
  ],
  tools: ["Power BI", "Python", "SQL", "Excel", "DAX", "scikit-learn", "Pandas", "Matplotlib"],
  certificatePlaceholder: {
    title: "Data Analyst Internship & Training Certificate",
    issuer: "DataVision Analytics Solutions",
    issueDate: "August 2025",
    credentialId: "DV-2025-DA-9842",
    certificateImage: "/certificates/internship-certificate.jpg" // Local file path in public/
  },
  projects: [
    {
      id: "intern-proj-1",
      number: "01",
      title: "Sales & Revenue Analysis Dashboard",
      completedDate: "15 Aug 2026",
      status: "Completed",
      focus: "Sales and revenue analysis",
      dataSources: "Excel / CSV / Database",
      shortDescription: "Engineered an interactive multi-dimensional sales performance report tracking revenue targets, profit margins, and dynamic regional performance.",
      keyWork: [
        "Implemented dynamic matrix tables and time-intelligence DAX KPIs (YoY growth, monthly revenue variance).",
        "Configured interactive multi-select slicers, product category drill-downs, and region-level filtering.",
        "Synthesized executive KPI summaries to highlight top-performing product lines and margin bottlenecks."
      ],
      tools: ["Power BI", "DAX", "Data Visualization", "KPI Tracking", "Charts & Slicers", "Excel"],
      outcome: "Practiced business insight generation and interactive dashboard development.",
      linkedinUrl: "https://lnkd.in/p/gGwyUuTr",
      outputPreview: {
        type: "chart-sales",
        title: "Sales & Revenue Performance Metric",
        metrics: [
          { label: "Total Revenue", value: "$1.84M", change: "+12.4% YoY" },
          { label: "Profit Margin", value: "22.6%", change: "+3.2% Target" },
          { label: "Total Units Sold", value: "34,850", change: "+8.7% Volume" }
        ],
        chartData: [
          { label: "Q1", val1: 65, val2: 45 },
          { label: "Q2", val1: 82, val2: 60 },
          { label: "Q3", val1: 74, val2: 55 },
          { label: "Q4", val1: 95, val2: 78 }
        ]
      }
    },
    {
      id: "intern-proj-2",
      number: "02",
      title: "Customer Segmentation Project",
      completedDate: "22 Aug 2026",
      status: "Completed",
      focus: "Customer behavior and demographic segmentation",
      dataSources: "Customer demographic & transaction logs",
      shortDescription: "Applied behavioral analytics and unsupervised clustering algorithms to segment customer demographics into distinct actionable purchasing cohorts.",
      keyWork: [
        "Calculated RFM (Recency, Frequency, Monetary) metrics across customer transaction histories.",
        "Preprocessed demographic features, normalized numerical columns, and handled outlier distributions.",
        "Evaluated optimal cluster groupings using Elbow Method heuristics and visualized cohort distributions."
      ],
      tools: ["Python", "scikit-learn", "Power BI", "Clustering (K-Means)", "Data Analysis", "Seaborn"],
      outcome: "Practiced customer analytics, segmentation, and visualization.",
      linkedinUrl: "https://lnkd.in/p/gTvK9afU",
      outputPreview: {
        type: "chart-segmentation",
        title: "Customer Cohort & Demographic Clusters",
        metrics: [
          { label: "Clusters Formed", value: "4 Distinct", change: "Optimal k" },
          { label: "High-Value Segment", value: "31.4%", change: "Core Revenue" },
          { label: "Retention Impact", value: "+15.2%", change: "Targeted" }
        ],
        clusters: [
          { name: "Champions", size: "31%", color: "cyan" },
          { name: "Loyal Customers", size: "26%", color: "indigo" },
          { name: "At Risk", size: "23%", color: "amber" },
          { name: "New Customers", size: "20%", color: "emerald" }
        ]
      }
    },
    {
      id: "intern-proj-3",
      number: "03",
      title: "Predictive Analytics Using Historical Data",
      completedDate: "29 Aug 2026",
      status: "Completed",
      focus: "Forecasting future trends using historical data",
      dataSources: "Historical time-series transactional metrics",
      shortDescription: "Built predictive forecasting models utilizing historical time-series datasets to evaluate benchmark regressions and future trend trajectories.",
      keyWork: [
        "Conducted time-series decomposition to extract seasonal patterns, noise, and baseline upward trends.",
        "Engineered lagged variables and rolling statistical averages to feed linear/polynomial regression pipelines.",
        "Evaluated performance using Mean Absolute Error (MAE) and Root Mean Squared Error (RMSE) metrics."
      ],
      tools: ["Python", "Data Preprocessing", "Predictive Modeling", "Time-Series", "Regression Concepts", "Matplotlib"],
      outcome: "Practiced predictive analytics and data-driven forecasting.",
      linkedinUrl: "https://lnkd.in/p/gTvK9afU",
      outputPreview: {
        type: "chart-predictive",
        title: "Time-Series Predictive Trend Forecast",
        metrics: [
          { label: "Forecast Accuracy", value: "88.6%", change: "Benchmark" },
          { label: "RMSE Error Reduction", value: "-24.1%", change: "Optimized" },
          { label: "Forecast Horizon", value: "12 Weeks", change: "Continuous" }
        ],
        trendPoints: [35, 42, 48, 45, 58, 64, 70, 78, 85, 92]
      }
    },
    {
      id: "intern-proj-4",
      number: "04",
      title: "Data Cleaning & Reporting Automation",
      completedDate: "05 Sept 2026",
      status: "Completed",
      focus: "Automating data cleaning and reporting workflows",
      dataSources: "Multi-source raw messy transactional datasets",
      shortDescription: "Engineered an automated data sanitization and summary reporting pipeline to eradicate duplicate noise, handle null fields, and export clean metrics.",
      keyWork: [
        "Formulated modular Python scripts to systematically impute missing data, strip string anomalies, and drop duplicates.",
        "Built schema normalization rules and validation checkpoints ensuring 100% downstream data integrity.",
        "Generated automated visual summaries and structured data exports ready for instant BI ingestion."
      ],
      tools: ["Python", "Excel", "Power BI", "Data Preprocessing", "ETL Pipelines", "Reporting Automation"],
      outcome: "Practiced data preprocessing, automation, and reporting efficiency.",
      linkedinUrl: "https://lnkd.in/p/gqh-QCKB",
      outputPreview: {
        type: "chart-automation",
        title: "ETL Sanitization & Ingestion Summary",
        metrics: [
          { label: "Data Integrity Rate", value: "99.9%", change: "Verified" },
          { label: "Prep Time Saved", value: "-65%", change: "Automated" },
          { label: "Records Processed", value: "180K+", change: "Zero Errors" }
        ],
        steps: ["Extract", "Impute & Clean", "Normalize", "Automate Export"]
      }
    }
  ]
};

export const certificationsData = [
  {
    id: "cert-1",
    title: "Microsoft Certified: Power BI Data Analyst Associate",
    issuer: "Microsoft / Coursera",
    year: "2025",
    skillsLearned: ["DAX Querying", "Data Modeling", "Power Query ETL", "Dashboard Publishing"],
    credentialUrl: "#"
  },
  {
    id: "cert-2",
    title: "Advanced SQL for Data Analytics",
    issuer: "HackerRank & Coursera",
    year: "2024",
    skillsLearned: ["Complex Joins", "Window Functions", "CTEs", "Query Performance Indexing"],
    credentialUrl: "#"
  },
  {
    id: "cert-3",
    title: "Python Data Science & Analysis",
    issuer: "IBM / DataCamp",
    year: "2024",
    skillsLearned: ["Pandas & NumPy", "Data Wrangling", "Matplotlib & Seaborn", "Statistical Analysis"],
    credentialUrl: "#"
  },
  {
    id: "cert-4",
    title: "UI/UX Foundations & Accessibility-First Design",
    issuer: "Google / UX Design Institute",
    year: "2025",
    skillsLearned: ["Visual Hierarchy", "WCAG 2.1 Guidelines", "Figma Wireframing", "Usability Testing"],
    credentialUrl: "#"
  }
];

export const industrialExposureData = [
  {
    id: "exp-1",
    company: "Infosys IT Park",
    type: "Industrial Visit",
    date: "October 2024",
    learning: "Gained insight into enterprise cloud data lakes, ETL pipeline automation, and large-scale data engineering workflows."
  },
  {
    id: "exp-2",
    company: "DataTech Summit",
    type: "Hands-on Workshop",
    date: "February 2025",
    learning: "Participated in advanced DAX optimization strategies and real-time streaming telemetry visualizations."
  },
  {
    id: "exp-3",
    company: "VCET Tech Symposium",
    type: "Seminar & Poster Presentation",
    date: "March 2025",
    learning: "Presented research paper on Accessibility-First UI/UX principles in modern web dashboard design."
  }
];

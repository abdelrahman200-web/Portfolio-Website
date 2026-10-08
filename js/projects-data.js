// ==============================================================================
// Abdelrahman Saeed - Verified Portfolio Project Data (2026)
// Sources: Abdelrahman_Saeed_CV_Final.pdf & projects.html
// Strict adherence: No fabricated claims, metrics, or technologies.
// ==============================================================================

const projectsData = [
  {
    id: "logan-travel-agent",
    title: "Multi-Format AI Agent & Hybrid RAG System",
    category: "ai-agents",
    featured: true,
    badge: "Enterprise Production",
    badgeType: "production",
    shortDescription: "End-to-end intelligent document agent automating complex multi-format analysis, Arabic spreadsheet reasoning, and executive reporting.",
    role: "AI Engineer (Freelancer)",
    client: "Logan Travel",
    period: "Jun 2026 – Aug 2026",
    github: "https://github.com/abdelrahman200-web",
    demo: null,
    metrics: [
      { label: "Report Generation Time", value: "30-45 min → ~5 min (~85% reduction)" },
      { label: "Spreadsheet Scope", value: "24+ sheets (Sales, Accounting, Inventory)" },
      { label: "Query Routing", value: "Zero-shot Dynamic JSON dispatch" }
    ],
    technologies: [
      "Hybrid RAG", "BM25", "ChromaDB", "Sentence Transformers", "Cohere Rerank",
      "Qwen3", "Gemini 2.5 Flash", "Unstructured", "Pandas", "Python", "Reciprocal Rank Fusion (RRF)"
    ],
    story: {
      problem: "Logan Travel managers spent 30 to 45 minutes manually synthesizing critical business reports across disparate documents (PDF, DOCX, CSV, TXT) and massive Arabic Excel workbooks featuring irregular tables, merged cells, and over 24 interdependent sheets spanning accounting, sales, inventory, and staff rosters.",
      approach: "Engineered a dual-pipeline AI agent capable of dynamic query triage: conversational or unstructured document questions are routed to a state-of-the-art Hybrid RAG engine, while analytical questions targeting tabular spreadsheets trigger an automated Arabic Excel parsing pipeline that synthesizes validated JSON queries and executes pandas aggregations.",
      architecture: [
        "1. Ingestion: 'Unstructured' parsing layer handles multi-format inputs (PDF, DOCX, CSV, TXT, Excel).",
        "2. Arabic Excel Engine: Custom table reconstruction normalizes merged cells and hierarchical headers across 24+ sheets.",
        "3. Dynamic Query Router: LLM classifies queries, emitting schema-validated JSON to select either the tabular execution path or semantic search path.",
        "4. Hybrid Retrieval: Dense vector search (Chroma + Sentence Transformers) runs in parallel with sparse lexical search (BM25).",
        "5. Fusion & Reranking: Reciprocal Rank Fusion (RRF) merges top candidates, followed by Cohere Rerank to filter top-k contexts for Qwen3 & Gemini 2.5 Flash.",
        "6. Verification: Output formatting with citation verification for management review."
      ],
      implementation: "Built entirely with Python. Leveraged ChromaDB for vector persistence, implemented reciprocal rank fusion algorithms to bridge exact Arabic keywords with semantic embeddings, and wrapped the system into a validated production reporting pipeline.",
      results: "Cut executive report generation turnaround from 30–45 minutes down to ~5 minutes (~85% time reduction). Delivered accurate, production-grade summaries reviewed and accepted by executive management."
    }
  },
  {
    id: "smart-stock-erp",
    title: "Smart Stock ERP — GRU Deep Learning Forecasting & Enterprise Backend",
    category: "ml-dl",
    featured: true,
    badge: "Graduation Project (Grade A)",
    badgeType: "academic",
    shortDescription: "30-day autoregressive revenue forecasting engine coupled with a full-scale transactional ERP backend featuring row-level stock locks.",
    role: "Lead Deep Learning & Backend Engineer",
    client: "Al-Ahram Canadian University Capstone",
    period: "Graduation Project – 2026",
    github: "https://github.com/abdelrahman200-web",
    demo: null,
    metrics: [
      { label: "Graduation Evaluation", value: "Grade A Distinction" },
      { label: "Forecast Horizon", value: "30-Day Multi-step Ahead" },
      { label: "Accuracy Guardrail", value: "Automated MAPE Retraining Trigger" }
    ],
    technologies: [
      "GRU Neural Networks", "TensorFlow / Keras", "Python", "Node.js / Express",
      "MySQL", "JWT RBAC", "Row Locking", "RESTful APIs", "Time Series"
    ],
    story: {
      problem: "Traditional ERP systems track inventory reactively without predictive intelligence, leading to stockouts or bloated carrying costs. In parallel, standard web forecasting demos lack transactional safety and production backend integration.",
      approach: "Architected a two-tier solution: (1) A deep learning recurrent model (Gated Recurrent Unit - GRU) trained on historical transaction records to forecast upcoming 30-day revenue trends with automated drift detection, and (2) an enterprise-grade ERP backend managing core supply chain operations with ACID consistency.",
      architecture: [
        "1. Data Pipeline: Extracted raw sales invoices from MySQL, aggregated daily sales sequences, engineered calendar seasonality features (day-of-week, month, event flags), and applied log-scaling normalization.",
        "2. Predictive Model: Sliding 30-day window GRU neural network with multi-step autoregressive forecasting built in TensorFlow/Keras.",
        "3. MLOps Guardrail: Early-stopping retraining pipeline with automated Mean Absolute Percentage Error (MAPE) monitoring that flags unreliable predictions and re-trains models on new data batches.",
        "4. Application Backend: Node.js/Express REST API exposing inference endpoints secured by JWT role-based access control.",
        "5. Transactional Integrity: Built entire ERP modules (purchasing, inbound/outbound inventory, invoicing, employee permissions) utilizing MySQL row locking to prevent race conditions during concurrent stock updates."
      ],
      implementation: "Orchestrated end-to-end data extraction, model training, evaluation, REST API inference serving, and database transaction locking. Fully tested for race conditions under concurrent client requests.",
      results: "Earned Grade A honors. Successfully unified a deep learning time-series model with real-world enterprise ERP workflows, ensuring reliable forecasts alongside bulletproof inventory data integrity."
    }
  },
  {
    id: "orange-ai-automation",
    title: "Enterprise Agentic Automation & UiPath REFramework",
    category: "automation",
    featured: true,
    badge: "Enterprise Automation",
    badgeType: "enterprise",
    shortDescription: "UiPath Studio Web AI Agents integrating LLMs with memory, context, and enterprise Dispatcher/Performer robotic process automations.",
    role: "AI Automation Intern",
    client: "Orange Egypt",
    period: "Sep 2026 – Oct 2026",
    github: "https://github.com/abdelrahman200-web",
    demo: null,
    metrics: [
      { label: "Manual Effort Reduction", value: "Up to 85% on automated processes" },
      { label: "Channels Automated", value: "Email, WhatsApp, Web & Desktop UI" },
      { label: "Architecture", value: "Enterprise REFramework Dispatcher / Performer" }
    ],
    technologies: [
      "UiPath Studio Web", "Agentic AI", "LLM Tool Calling", "UiPath REFramework",
      "Orchestrator Queues & Assets", "OCR Automation", "Google Sheets", "PDF Extraction"
    ],
    story: {
      problem: "Enterprise departments handle repetitive high-volume manual operations across unstructured emails, WhatsApp communications, PDFs, and internal spreadsheets, resulting in processing delays, human errors, and high operational costs.",
      approach: "Built intelligent end-to-end automations combining traditional deterministic RPA (UiPath Robotic Enterprise Framework) with modern Agentic AI, connecting LLMs to runtime tools, transactional queues, and enterprise communication channels.",
      architecture: [
        "1. Agentic AI Layer: Configured AI Agents in UiPath Studio Web integrating LLMs with tool execution, conversation memory, and contextual reasoning.",
        "2. Multi-Channel Triggers: Deployed agents responsive to incoming inbound customer & operational inquiries via Email and WhatsApp.",
        "3. Enterprise REFramework: Built robust Dispatcher (queue feeder) and Performer (transaction processor) state machines with configuration management, asset lookup, and structured logging.",
        "4. Document & UI Extraction: Orchestrated automated ingestion across PDFs, Excel, Google Sheets, and desktop/browser interfaces.",
        "5. Exception Handling: Strict separation between Business Rule Exceptions (flagged for review) and System Exceptions (retry policies with transaction rollback)."
      ],
      implementation: "Implemented enterprise standard practices in UiPath Orchestrator, managing queues, credentials, and assets securely while pairing them with generative capabilities for unstructured content understanding.",
      results: "Delivered scalable, fault-tolerant robotic process automation coupled with AI reasoning, drastically cutting turnaround times and eliminating manual data entry across multi-format documents."
    }
  },
  {
    id: "whatsapp-service-bot",
    title: "Production WhatsApp Customer Service Bot & Admin Engine",
    category: "backend",
    featured: true,
    badge: "Deployed to Production",
    badgeType: "production",
    shortDescription: "Full-stack WhatsApp automation with Meta Business API, Flask RESTful engine, and zero-code dynamic admin management portal.",
    role: "Freelance Bot & Web Developer",
    client: "Commercial Client",
    period: "Nov 2024 – Mar 2025",
    github: "https://github.com/abdelrahman200-web/chatBot",
    demo: null,
    metrics: [
      { label: "Response Latency", value: "Reduced by 40%" },
      { label: "Daily Interactions", value: "120+ customer sessions/day" },
      { label: "Codebase Changes Needed", value: "Zero (No-code admin panel)" }
    ],
    technologies: [
      "Python", "Flask", "Meta Business API", "SQLite",
      "RESTful APIs", "Railway", "JavaScript", "HTML5 / CSS3"
    ],
    story: {
      problem: "Support staff struggled with slow response times answering repetitive inquiries on WhatsApp, while non-technical operators were unable to update canned responses, categories, or links without requesting code deployments from engineers.",
      approach: "Engineered an automated WhatsApp chatbot integrated directly with Meta's official Cloud API, powered by a Flask REST backend and complemented by an intuitive web management dashboard enabling staff to update FAQs, categories, and routing rules dynamically.",
      architecture: [
        "1. Webhook Engine: Flask REST server receives encrypted webhooks from Meta's WhatsApp Business API, validating incoming signatures.",
        "2. Dialog State Machine: Traverses user queries, resolves matching categories, and returns structured interactive WhatsApp message payloads.",
        "3. No-Code Management Dashboard: Secure admin interface allowing non-technical managers to create, edit, or disable support categories and resolution links in real-time.",
        "4. Data Persistence: SQLite database maintaining state, category schemas, and audit logs of inbound inquiries.",
        "5. Cloud Deployment: Hosted in production on Railway with automated health checks, environment variables, and zero downtime."
      ],
      implementation: "Owned full lifecycle from initial API handshake with Meta Developer Portal to frontend interface, backend routing, database schema design, and production deployment on Railway.",
      results: "Decreased customer service response latency by 40%, sustained 120 daily customer interactions seamlessly, and eliminated developer reliance for day-to-day content updates."
    }
  },
  {
    id: "brain-tumor-dl",
    title: "Brain Tumor Classification with Deep Learning & Transfer Learning",
    category: "ml-dl",
    featured: true,
    badge: "Computer Vision / DL",
    badgeType: "academic",
    shortDescription: "Medical MRI diagnostic pipeline classifying Glioma vs. Meningioma using Custom CNNs, ResNet50, and VGG16 with transfer learning.",
    role: "Deep Learning Engineer",
    client: "Research / Personal Project",
    period: "2025",
    github: "https://github.com/abdelrahman200-web/brain-tumor-classification",
    demo: null,
    metrics: [
      { label: "Architectures Benchmarked", value: "Custom CNN, ResNet50, VGG16" },
      { label: "Validation Strategy", value: "Confusion Matrix, F1-Score, Recall" },
      { label: "Data Pipeline", value: "Intensive Data Augmentation & Normalization" }
    ],
    technologies: [
      "TensorFlow", "Keras", "Python", "ResNet50", "VGG16",
      "Custom CNN", "Scikit-Learn", "NumPy", "Matplotlib", "Seaborn"
    ],
    story: {
      problem: "Distinguishing between Brain Glioma and Brain Meningioma from MRI scans is clinically critical but challenging due to subtle edge variations, differing tumor densities, and limited labelled medical datasets.",
      approach: "Conducted an exploratory image analysis of MRI scans (examining pixel distributions, aspect ratios, and tumor boundary artifacts), applied targeted medical image augmentations, and built a comparative benchmark between a custom multi-layer CNN and deep pre-trained backbones (ResNet50, VGG16) fine-tuned via transfer learning.",
      architecture: [
        "1. Image Preprocessing: Size standardization, pixel intensity normalization, and artifact filtering.",
        "2. Data Amplification: Applied rotation, zooming, horizontal flipping, and shear transforms to prevent overfitting on scarce positive samples.",
        "3. Architecture Exploration: Implemented a bespoke baseline CNN alongside pre-trained ResNet50 and VGG16 feature extractors with custom dense classification heads.",
        "4. Fine-Tuning Strategy: Frozen convolutional base initial training followed by selective unfreezing of top convolutional blocks with reduced learning rates.",
        "5. Clinical Metrics: Evaluated models on Precision, Recall (minimizing false negatives in clinical detection), F1-Score, and ROC-AUC curves."
      ],
      implementation: "Engineered using TensorFlow/Keras with modular data loaders and visualized training curves to pinpoint overfitting and identify optimal transfer learning checkpoints.",
      results: "Delivered a thoroughly evaluated medical diagnostic benchmark highlighting the trade-offs between custom lightweight CNNs and transfer learning with ResNet50/VGG16 on neuroimaging classification."
    }
  },
  {
    id: "cardiovascular-disease-ml",
    title: "Cardiovascular Disease Predictive Diagnostic Pipeline",
    category: "ml-dl",
    featured: true,
    badge: "Healthcare ML",
    badgeType: "academic",
    shortDescription: "Comprehensive machine learning classification pipeline predicting cardiovascular disease from patient examinations and lifestyle features.",
    role: "Machine Learning Engineer",
    client: "Medical Dataset Investigation",
    period: "2025",
    github: "https://github.com/abdelrahman200-web/CardioML-Classifier-AI-model",
    demo: null,
    metrics: [
      { label: "Core Model", value: "XGBoost & Scikit-Learn Classifiers" },
      { label: "Pipeline Scope", value: "Feature Scaling, Outlier Handling, EDA" },
      { label: "Visualization", value: "Plotly, Seaborn & Matplotlib Dashboards" }
    ],
    technologies: [
      "Python", "XGBoost", "Scikit-Learn", "Pandas",
      "Plotly", "Seaborn", "Matplotlib", "NumPy"
    ],
    story: {
      problem: "Cardiovascular conditions frequently develop without overt symptoms. Accurate early risk detection requires synthesizing diverse signals: patient demographics, clinical measurements (blood pressure, cholesterol, glucose), and subjective lifestyle factors (smoking, alcohol, physical activity).",
      approach: "Engineered an end-to-end tabular machine learning pipeline featuring rigorous exploratory data analysis, physiological outlier removal, multi-model benchmarking with cross-validation, and hyperparameter tuning with XGBoost.",
      architecture: [
        "1. Data Cleaning: Detected and handled physiological anomalies (e.g., erratic blood pressure readings) and standardized continuous vitals.",
        "2. Exploratory Analytics: Interactive Plotly and Seaborn visualizations evaluating feature correlations against disease presence.",
        "3. Pipeline Transformation: Standardized numerical variables and encoded categorical lifestyle factors with Scikit-Learn transformers.",
        "4. Model Benchmarking: Trained and evaluated multiple classifiers, prioritizing XGBoost for superior gradient boosting performance on non-linear clinical patterns.",
        "5. Diagnostic Evaluation: Assessed ROC-AUC, Precision-Recall trade-offs, and confusion matrices to balance sensitivity and specificity."
      ],
      implementation: "Built modular Python pipelines adhering to clean code conventions for reproducible data transformation and model training.",
      results: "Achieved robust classification performance with explainable feature importance confirming systolic blood pressure and age as dominant risk predictors."
    }
  },
  {
    id: "heart-disease-streamlit",
    title: "Heart Disease Prediction Web App (Streamlit & ML)",
    category: "ml-dl",
    featured: false,
    badge: "Interactive ML App",
    badgeType: "academic",
    shortDescription: "Interactive risk assessment web application powered by Scikit-Learn classifiers, UCI clinical data, and real-time Plotly charts.",
    role: "ML & App Developer",
    client: "Open Source Project",
    period: "2025",
    github: "https://github.com/abdelrahman200-web/Heart-Disease-Prediction-Web-App",
    demo: null,
    metrics: [
      { label: "Dataset", value: "UCI Heart Disease Repository" },
      { label: "Interface", value: "Streamlit Real-Time Dashboard" },
      { label: "Logging", value: "Automated CSV Audit Trail" }
    ],
    technologies: [
      "Python", "Scikit-Learn", "Streamlit", "Pandas",
      "Plotly", "Pickle", "ucimlrepo", "Seaborn"
    ],
    story: {
      problem: "Predictive models developed in static Jupyter Notebooks remain inaccessible to clinicians and patients who need intuitive, instant risk assessments without touching code.",
      approach: "Trained Random Forest and Logistic Regression classifiers on the UCI Heart Disease dataset, serialized the pipeline with Pickle, and created an interactive Streamlit web dashboard allowing instant parameter tuning and risk feedback.",
      architecture: [
        "1. Ingestion: Automated fetch of UCI heart disease data using ucimlrepo.",
        "2. Modeling: Preprocessing pipeline with Scikit-learn, training Random Forest and Logistic Regression.",
        "3. Web App: Interactive UI with slider inputs for age, cholesterol, resting blood pressure, and ECG results.",
        "4. Real-time Inference: Instant probability calculation with visual risk meter.",
        "5. Audit Logging: Automatic logging of predictions and clinical inputs to CSV records for subsequent review."
      ],
      implementation: "Clean Python application with responsive Streamlit UI and interactive Plotly visualization components.",
      results: "Delivered a lightweight, practical diagnostic tool demonstrating how ML models can be packaged into functional user-facing web tools."
    }
  },
  {
    id: "ecommerce-sales-forecasting",
    title: "E-Commerce Sales Prediction & Regression Pipeline",
    category: "ml-dl",
    featured: false,
    badge: "Time-Series Regression",
    badgeType: "academic",
    shortDescription: "Predictive sales forecasting pipeline analyzing 500K commercial transactions using XGBoost regression and feature engineering.",
    role: "Data & ML Engineer",
    client: "Retail Analytics",
    period: "2025",
    github: "https://github.com/abdelrahman200-web/time-series-prediction-sales-forecasting-",
    demo: null,
    metrics: [
      { label: "Transaction Scale", value: "500,000+ Transactions" },
      { label: "Features Engineered", value: "Temporal, Customer RFM, Product Metrics" },
      { label: "Core Model", value: "XGBoost Regressor & Scikit-Learn" }
    ],
    technologies: [
      "Python", "XGBoost", "Scikit-Learn", "Pandas",
      "NumPy", "Matplotlib", "Seaborn", "Jupyter"
    ],
    story: {
      problem: "E-commerce retailers face volatile revenue swings. Accurate forecasting requires deriving meaningful predictive features from unstructured high-velocity sales logs.",
      approach: "Conducted deep exploratory data analysis on a UK retail dataset with 500,000 transactions, built feature extraction routines capturing purchasing frequencies and seasonality, and trained XGBoost regression models to predict revenue trends.",
      architecture: [
        "1. Data Cleaning: Filtered cancellations, negative quantities, and unverified transactional rows.",
        "2. Feature Engineering: Created time lags, rolling average revenue, country indicators, and product velocity indices.",
        "3. Model Architecture: Benchmarked Linear Regression, Random Forest, and XGBoost with hyperparameter tuning.",
        "4. Evaluation: Evaluated via RMSE and MAE across historical test holdouts."
      ],
      implementation: "Modular Python notebooks and reusable data processing scripts.",
      results: "Demonstrated accurate forecasting of total sales volume and isolated key seasonal revenue spikes."
    }
  },
  {
    id: "ecommerce-bigdata-analysis",
    title: "Large-Scale E-Commerce Analytics (500M Records)",
    category: "ml-dl",
    featured: false,
    badge: "Big Data Analytics",
    badgeType: "academic",
    shortDescription: "In-depth behavioral analysis and business intelligence pipeline uncovering customer journeys across 500 million transactions.",
    role: "Data Analyst / Python Engineer",
    client: "Retail Dataset Exploration",
    period: "2025",
    github: "https://github.com/abdelrahman200-web/E-commerce-data-analysis",
    demo: null,
    metrics: [
      { label: "Data Volume", value: "500 Million Records" },
      { label: "Analytical Focus", value: "Funnel Analysis, Sales Trends, Cohorts" },
      { label: "Visualization", value: "Plotly, Matplotlib, Seaborn" }
    ],
    technologies: [
      "Python", "Pandas", "NumPy", "Plotly",
      "Seaborn", "Matplotlib", "Jupyter Notebook"
    ],
    story: {
      problem: "Analyzing massive datasets with half a billion records demands memory-efficient processing, chunking strategies, and rigorous aggregation to reveal consumer behavioral patterns.",
      approach: "Engineered scalable data cleaning and extraction routines in Python to process millions of transactions, uncovering retention rates, drop-off funnels, and high-margin product categories.",
      architecture: [
        "1. Memory Optimization: Downcasted data types and chunked processing to handle massive memory footprints.",
        "2. Customer Segmentation: Clustered buyer behaviors based on visit-to-purchase ratios and cart abandonment.",
        "3. Trend Visualization: Generated executive dashboards in Plotly highlighting time-of-day traffic and category seasonality."
      ],
      implementation: "Iterative analytical notebooks structured for enterprise business intelligence.",
      results: "Produced actionable retail intelligence laying the structural data foundation for future predictive recommendation engines."
    }
  },
  {
    id: "cryptography-engine",
    title: "Cryptographic Algorithm Suite From Scratch",
    category: "software",
    featured: false,
    badge: "Computer Science Foundation",
    badgeType: "academic",
    shortDescription: "Pure Python implementation from mathematical first principles of AES, DES, RC4, RSA, and SHA-1/2/3 hash functions.",
    role: "Systems & Security Developer",
    client: "Computer Science University Capstone",
    period: "2024",
    github: "https://github.com/abdelrahman200-web/encryption-system",
    demo: null,
    metrics: [
      { label: "Symmetric Ciphers", value: "AES, DES, RC4" },
      { label: "Asymmetric Ciphers", value: "RSA (Key Generation, Modular Arithmetic)" },
      { label: "Hashing Suite", value: "MD5, SHA-1, SHA-2, SHA-3" }
    ],
    technologies: [
      "Python", "AES", "DES", "RC4", "RSA",
      "MD5", "SHA-1", "SHA-2", "SHA-3", "Bitwise Math"
    ],
    story: {
      problem: "Most software developers treat cryptography as a black box library, missing core algorithmic mechanics, bitwise transformations, and mathematical foundations.",
      approach: "Implemented standard symmetric ciphers, asymmetric key-exchange protocols, and modern hashing algorithms entirely from scratch in Python without high-level crypto libraries.",
      architecture: [
        "1. Block Ciphers: Implemented substitution-permutation networks, S-Boxes, and key scheduling for AES and DES.",
        "2. Stream Ciphers: Implemented RC4 PRGA and KSA state permutations.",
        "3. Asymmetric Math: Implemented prime generation, modular inverse, and totient arithmetic for RSA encryption/decryption.",
        "4. Cryptographic Hashing: Constructed bitwise padding, message schedules, and compression functions for MD5, SHA-1, SHA-256, and SHA-3 Keccak."
      ],
      implementation: "Interactive CLI/GUI in Python allowing real-time algorithm selection and byte-level inspection.",
      results: "Deepened mastery of low-level algorithms, bit manipulation, and secure data handling principles."
    }
  },
  {
    id: "image-processing-system",
    title: "Computer Vision & Image Processing Core Algorithms",
    category: "software",
    featured: false,
    badge: "Computer Vision",
    badgeType: "academic",
    shortDescription: "Manual implementation of core spatial filters, noise reduction, and morphological operations with Tkinter interface.",
    role: "Computer Vision Developer",
    client: "University Course Project",
    period: "2024",
    github: "https://github.com/abdelrahman200-web/Image-Processing-Project-University-Course-",
    demo: null,
    metrics: [
      { label: "Algorithms Implemented", value: "Spatial Filtering, Morphological Ops, Noise Handling" },
      { label: "GUI", value: "Interactive Tkinter Visualizer" },
      { label: "Core Library", value: "NumPy & OpenCV" }
    ],
    technologies: [
      "Python", "OpenCV", "NumPy", "Tkinter", "Convolution Kernels"
    ],
    story: {
      problem: "Understanding computer vision requires grasping the matrix math behind 2D convolution, histogram equalization, and morphological structuring elements.",
      approach: "Engineered algorithms from scratch with NumPy arrays and built an interactive Tkinter GUI demonstrating before-and-after visual results in real-time.",
      architecture: [
        "1. Spatial Filtering: Gaussian blur, Sobel edge detectors, Laplacian sharpening.",
        "2. Morphological Operations: Dilation, erosion, opening, and closing transforms.",
        "3. Intensity Adjustments: Histogram equalization and thresholding filters."
      ],
      implementation: "Python with desktop UI for rapid visual experimentation.",
      results: "Built a solid mathematical foundation directly bridging to modern deep learning convolutional neural networks."
    }
  },
  {
    id: "web-scraping-automation",
    title: "Automated Web Scraping & Data Extraction Pipeline",
    category: "automation",
    featured: false,
    badge: "Data Pipeline",
    badgeType: "academic",
    shortDescription: "Resilient automated data scraper built with Python, BeautifulSoup, and Selenium exporting clean structured data to databases.",
    role: "Automation Developer",
    client: "Data Extraction Suite",
    period: "2024",
    github: "https://github.com/abdelrahman200-web",
    demo: null,
    metrics: [
      { label: "Target Scope", value: "Multi-page dynamic web sources" },
      { label: "Export Formats", value: "Relational SQL & Clean CSV" },
      { label: "Resilience", value: "Headless browser automation with retry logic" }
    ],
    technologies: [
      "Python", "Selenium", "BeautifulSoup", "Pandas", "SQLite"
    ],
    story: {
      problem: "Manual web data collection is slow and prone to breaking when handling dynamic JavaScript-rendered pages and paginated records.",
      approach: "Constructed an automated extraction pipeline pairing fast DOM parsing (BeautifulSoup) with browser automation (Selenium) for dynamic content.",
      architecture: [
        "1. Extraction: Headless browser handles client-side rendering and pagination.",
        "2. Parsing: BeautifulSoup parses HTML trees and isolates structured selectors.",
        "3. Normalization: Cleaned text, dates, and currency values with Pandas before database export."
      ],
      implementation: "Python modular scripts with error logging and backoff retries.",
      results: "Accelerated raw data collection for downstream analytical modeling."
    }
  },
  {
    id: "flutter-shopping-app",
    title: "Mobile Shopping Application with SQLite Engine",
    category: "software",
    featured: false,
    badge: "Mobile Software",
    badgeType: "academic",
    shortDescription: "Cross-platform mobile application featuring CSV catalog parsing, user authentication, and SQLite persistence.",
    role: "Mobile App Developer",
    client: "Personal Mobile Project",
    period: "2024",
    github: "https://github.com/abdelrahman200-web/shopping_mopile_application",
    demo: null,
    metrics: [
      { label: "Client Platform", value: "Flutter & Dart (iOS / Android)" },
      { label: "Local Database", value: "SQLite Offline Cart & Order System" },
      { label: "Data Import", value: "Dynamic CSV Catalog Ingestion" }
    ],
    technologies: [
      "Flutter", "Dart", "SQLite", "CSV Parsing", "State Management"
    ],
    story: {
      problem: "Creating reliable offline-first mobile applications with dynamic catalog ingestion and client-side database management.",
      approach: "Engineered a Flutter mobile app utilizing Dart and local SQLite databases for cart persistence, combined with CSV catalog parsing routines.",
      architecture: [
        "1. UI Layer: Modern Material Design with animated route transitions.",
        "2. Storage: Embedded SQLite engine maintaining user sessions and cart items.",
        "3. Ingestion: Automated CSV parsing for rapid catalog bootstrapping."
      ],
      implementation: "Clean Dart codebase with responsive layouts and state management.",
      results: "Demonstrated mobile engineering capability and client-side data persistence."
    }
  },
  {
    id: "store-management-system",
    title: "Enterprise Store Management & Inventory System",
    category: "software",
    featured: false,
    badge: "Desktop Software",
    badgeType: "academic",
    shortDescription: "Comprehensive desktop business application built with .NET, C#, LINQ, and SQL Express for inventory, invoicing, and accounting.",
    role: "Desktop Software Developer",
    client: "Commercial Management Project",
    period: "2023",
    github: "https://github.com/abdelrahman200-web",
    demo: null,
    metrics: [
      { label: "Platform", value: ".NET Framework & C#" },
      { label: "Database", value: "Microsoft SQL Express with LINQ" },
      { label: "Modules", value: "Invoicing, Stock Inventory, Accounting" }
    ],
    technologies: [
      "C#", ".NET Framework", "SQL Express", "LINQ", "Windows Forms"
    ],
    story: {
      problem: "Small-to-medium retail warehouses needed a unified offline desktop system to manage inventory, track invoices, and calculate ledger balances without cloud dependence.",
      approach: "Developed a desktop application using C# and .NET Framework connected to Microsoft SQL Express via LINQ queries.",
      architecture: [
        "1. User Interface: Multi-view Windows desktop dashboard for clerks and accountants.",
        "2. Business Logic: Real-time stock decrementing, invoice generation, and tax calculation.",
        "3. Database Layer: SQL Express relational tables with indexed lookups via LINQ."
      ],
      implementation: "Engineered in C# with robust transactional checks during invoice posting.",
      results: "Streamlined inventory reconciliation and daily sales reporting for retail management."
    }
  }
];

// Provide data access helper
window.PORTFOLIO_PROJECTS = projectsData;

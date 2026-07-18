// ============================================================
// SITE CONTENT — Edit this file to update the portfolio
// ============================================================

export const siteConfig = {
  name: "Rajendra Gokhale",
  title: "Rajendra Gokhale — AI Developer & Backend Engineer",
  description:
    "AI & Data Science engineering graduate building production AI systems, backend services, and data infrastructure. From prompts to production.",
  url: "https://rajendragokhale.dev",
  ogImage: "/og-image.png",
  email: "rajendra.careers01@gmail.com",
  emailSecondary: "rajendragokhale2004@gmail.com",
  phone: "+91-9150273312",
  location: "India",
  github: "https://github.com/rajendragokhale18",
  linkedin: "https://linkedin.com/in/rajendragokhale",
  leetcode: "https://leetcode.com/u/rajendra_gokhale16/",
  resumeUrl: "/resume.pdf",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Insights", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const heroRoles = [
  "AI Development",
  "Backend Engineering",
  "Systems Architecture",
  "Data Pipelines",
  "Agentic Automation",
];

export const heroTagline = "From prompts to production.";
export const heroSubtext =
  "Building AI systems, backend services, and data infrastructure that don't just work — they matter.";

export const about = {
  bio: "What if a self-taught Engineer from Chennai could turn late-night ideas into shipped AI systems? That’s been my quiet journey. I build with passion: LLMs, robust backend architectures, smart data pipelines, and multi-agent solutions that move from concept to production. Whether it’s intelligent automation or impactful healthcare AI, I love creating systems that don’t just work, they matter. Persistent, curious, and always thinking end-to-end, I’m driven to solve real problems and grow alongside great teams.",
  location: "India",
  status: "Open to work — AI Engineering, Data Engineering & Backend roles · India + Remote + open to relocation",
  stats: [
    { value: 7, suffix: "", label: "Projects Shipped" },
    { value: 1, suffix: "M+", label: "Daily Data Points Processed" },
    { value: 99.9, suffix: "%", label: "Uptime on Production Systems", decimal: true },
    { value: 500, suffix: "+", label: "Daily API Calls Orchestrated" },
  ],
  topSkills: [
    "Artificial Intelligence",
    "Python",
    "Software Development",
    "Product Development",
    "Team Management",
  ],
};

export const experiences = [
  {
    company: "Vijetha Softwares Pvt. Ltd.",
    role: "AI Developer / Software Engineer Intern",
    period: "Aug 2025 – Jan 2026",
    location: "Chennai (Hybrid)",
    type: "work",
    highlights: [
      "Architected Python + SQL data pipelines ingesting/validating 1M+ daily compliance data points across 12 regulatory workflows — cut manual verification effort 29%, accelerated stakeholder decisions 40%",
      "Built automated anomaly detection on structured/unstructured datasets — 3× report throughput across 50K+ monthly reports, zero manual intervention",
      "Achieved 99%+ dataset consistency via multi-layer data quality validation",
      "Authored BRDs and workflow documentation, cutting operational overhead 35%",
    ],
  },
  {
    company: "RoFabs.co",
    role: "AI Engineer / Backend Engineer Intern (Freelance)",
    period: "Dec 2024 – Mar 2025",
    location: "Chennai (Remote)",
    type: "work",
    highlights: [
      "Designed a RESTful API layer for a Hotel Management System, centralizing 10K+ daily records",
      "Eliminated 85% of critical performance bottlenecks, scaled AI-assisted transaction throughput 5×",
      "Cut dashboard query latency 30% (800ms → 560ms) via SQL optimization and backend refactoring",
      "Delivered 12 production features 2 weeks ahead of schedule across 8 Agile sprints, 6-person team",
    ],
  },
  {
    company: "Rotaract Club, Prathyusha Engineering College",
    role: "Technical Head",
    period: "Aug 2024 – Sep 2025",
    location: "Tiruvallur, Tamil Nadu",
    type: "leadership",
    highlights: [
      "Managed club website, digital communications, AV setup for events",
      "Coordinated 10+ community service initiatives",
    ],
  },
  {
    company: "Unstop",
    role: "Student Director",
    period: "Nov 2024 – Aug 2025",
    location: "Chennai (Remote)",
    type: "leadership",
    highlights: [
      "Campus ambassador driving student participation in national hackathons and coding competitions",
    ],
  },
  {
    company: "Cognifyz Technologies",
    role: "Data Science Intern",
    period: "Jul 2024 – Aug 2024",
    location: "Remote",
    type: "work",
    highlights: [
      "EDA & preprocessing on structured datasets (Pandas, NumPy); built classification/regression models (Scikit-learn)",
    ],
  },
  {
    company: "CodeClause",
    role: "AI Intern",
    period: "Dec 2023",
    location: "Remote",
    type: "work",
    highlights: [
      "Short-term AI internship focused on NLP and computer vision tasks using Python; implemented text classification and image recognition mini-projects",
    ],
  },
  {
    company: "Coincent.ai",
    role: "Machine Learning Intern",
    period: "Nov 2022 – Feb 2023",
    location: "Remote",
    type: "work",
    highlights: [
      "Worked on ML model training pipelines and data preparation tasks; hands-on experience in supervised learning, feature engineering, and model evaluation using Scikit-learn and Python — first industry exposure to production ML workflows",
    ],
  },
];

export const education = [
  {
    institution: "Prathyusha Engineering College, Anna University",
    degree: "B.Tech, Artificial Intelligence & Data Science",
    period: "Nov 2022 – Jun 2026",
    gpa: "8.41 / 10",
    note: "Graduated June 2026",
    coursework: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "DSA",
      "DBMS",
      "OS",
      "Computer Networks",
      "Software Engineering",
    ],
  },
  {
    institution: "Kendriya Vidyalaya",
    degree: "SSC & HSC",
    period: "2010 – 2022",
    gpa: "",
    note: "",
    coursework: [],
  },
];

export const skillCategories = [
  {
    name: "Programming",
    icon: "Code2",
    skills: ["Python", "SQL", "JavaScript", "Java"],
  },
  {
    name: "GenAI & LLMs",
    icon: "Brain",
    skills: [
      "LangChain",
      "OpenAI API",
      "RAG",
      "Prompt Engineering",
      "AI Agents",
      "Agentic AI",
      "Embeddings & Semantic Search",
      "LLMOps",
    ],
  },
  {
    name: "Backend Engineering",
    icon: "Server",
    skills: [
      "FastAPI",
      "Flask",
      "Django",
      "REST APIs",
      "JWT Auth",
      "Microservices",
      "Node.js",
    ],
  },
  {
    name: "AI & Machine Learning",
    icon: "Cpu",
    skills: [
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "Pandas",
      "NumPy",
      "spaCy",
      "OpenCV",
      "NLP",
      "Computer Vision",
    ],
  },
  {
    name: "Databases & Cloud",
    icon: "Database",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Supabase",
      "Docker",
      "Git",
      "GCP",
      "AWS Lambda",
      "S3",
      "IAM",
    ],
  },
  {
    name: "Automation & Tools",
    icon: "Workflow",
    skills: ["n8n", "Selenium", "Linux/Bash", "Workflow Automation"],
  },
];

export type ProjectFilter = "All" | "AI & LLM" | "Backend" | "Data Pipelines" | "Full-Stack";

export const projects = [
  {
    id: 1,
    title: "Autonomous Content & Workflow Automation Engine",
    period: "Jan 2026 – Present",
    tags: ["AI & LLM", "Backend"] as ProjectFilter[],
    tech: ["n8n", "Claude API", "Docker", "REST APIs", "Python"],
    shortDesc:
      "Fully Dockerized n8n automation platform integrating Claude LLM API via multi-stage event-driven REST API orchestration.",
    fullDesc:
      "Autonomously manages 30+ daily workflows and 500+ daily API calls with 99.9% uptime and zero manual intervention. Fault-tolerant pipelines with intelligent retry logic, caching, and automated error recovery — 35% latency reduction.",
    badge: null,
    github: "https://github.com/rajendragokhale18",
    featured: true,
  },
  {
    id: 2,
    title: "Smart Task Management System",
    period: "Jun 2026 – Ongoing",
    tags: ["Full-Stack", "AI & LLM"] as ProjectFilter[],
    tech: ["React.js", "Node.js", "MongoDB", "Django", "LLM APIs"],
    shortDesc:
      "Full-stack platform integrating LLM/NLP services to auto-classify and prioritize 50+ tasks/day at 88% accuracy.",
    fullDesc:
      "Modular REST APIs for auth/task orchestration supporting 150+ concurrent users, sub-400ms response times. JWT auth, RBAC, 75% test coverage.",
    badge: null,
    github: "https://github.com/rajendragokhale18",
    featured: false,
  },
  {
    id: 3,
    title: "CMT Data Scraper: Automated Financial Data Processing System",
    period: "Dec 2025 – Apr 2026",
    tags: ["Data Pipelines", "Backend"] as ProjectFilter[],
    tech: ["Python", "PostgreSQL", "Selenium", "Pandas", "Docker"],
    shortDesc:
      "Resilient ETL pipeline processing 10,000+ records from dynamic web sources at 99.9% ingestion reliability.",
    fullDesc:
      "Exponential backoff, idempotent ingestion, schema-optimized PostgreSQL storage. Dockerized deployment (45min → 10min). Presented as a research paper at ICCET 2026 — 14th International Conference on Contemporary Engineering and Technology, Chennai, March 2026.",
    badge: { label: "Published Research", conference: "ICCET 2026" },
    github: "https://github.com/rajendragokhale18",
    featured: true,
    isCapstone: true,
  },
  {
    id: 4,
    title: "Hotel CV REST API + Customer Churn Prediction",
    period: "Mar – Sep 2024",
    tags: ["AI & LLM", "Backend"] as ProjectFilter[],
    tech: ["FastAPI", "Python", "PostgreSQL", "OpenCV"],
    shortDesc:
      "Production computer vision REST API achieving 95% facial verification accuracy for 1,000+ daily hotel check-ins.",
    fullDesc:
      "Reduced check-in time 4min → 90sec with 99.5% uptime. Companion churn prediction pipeline (Logistic Regression + XGBoost, AUC 0.91) on 500K+ records.",
    badge: null,
    github: "https://github.com/rajendragokhale18",
    featured: false,
  },
  {
    id: 5,
    title: "ACCI-KAWACH",
    period: "May – Sep 2023",
    tags: ["AI & LLM"] as ProjectFilter[],
    tech: ["Python", "IoT Sensors", "Geolocation APIs"],
    shortDesc:
      "Smart accident-detection system using sensors to analyze vehicle orientation/speed changes.",
    fullDesc:
      "On collision detection, automatically alerts nearby hospitals and family with precise location for rapid response. MSME National Hackathon Semi-Finalist (top teams out of 1,000+ entries).",
    badge: { label: "Hackathon Semi-Finalist", conference: "MSME National Hackathon" },
    github: "https://github.com/rajendragokhale18",
    featured: false,
  },
  {
    id: 6,
    title: "Webbed Healthcare (ZS Health Care)",
    period: "Nov 2022 – Apr 2023",
    tags: ["Full-Stack"] as ProjectFilter[],
    tech: ["Python", "SQL", "Sensors Integration", "Web Stack"],
    shortDesc:
      "Integrated system for patients to measure vitals and report directly to a hospital database.",
    fullDesc:
      "Patients can measure temperature, blood pressure, and heart rate and have readings automatically logged to a hospital database for remote monitoring.",
    badge: null,
    github: "https://github.com/rajendragokhale18",
    featured: false,
  },
  {
    id: 7,
    title: "AI Rocket Launch Simulator",
    period: "2023",
    tags: ["AI & LLM"] as ProjectFilter[],
    tech: ["Python", "AI", "Data Visualization"],
    shortDesc:
      "Autonomous dashboard monitoring key launch parameters to reduce complexity and risk throughout the launch process.",
    fullDesc:
      "AI-driven simulation and monitoring system tracking critical launch parameters in real-time, flagging anomalies and providing decision support throughout the launch lifecycle.",
    badge: null,
    github: "https://github.com/rajendragokhale18",
    featured: false,
  },
];

export const certifications = [
  {
    name: "LangChain & Vector Databases in Production",
    issuer: "Activeloop",
    date: "Jul 2026",
    highlight: true,
  },
  {
    name: "SQL for Data Analysis",
    issuer: "LinkedIn Learning",
    date: "2024",
    highlight: false,
  },
  {
    name: "Joy of Computing with Python",
    issuer: "NPTEL Swayam",
    date: "2024",
    badge: "Elite Rank — Top 10% nationally among 15,000+ learners",
    highlight: true,
  },
  {
    name: "Programming Fundamentals Using Python",
    issuer: "Infosys Springboard",
    date: "2023",
    highlight: false,
  },
  {
    name: "NPTEL Online Certification",
    issuer: "IIT Madras",
    date: "Apr 2023",
    highlight: false,
  },
  {
    name: "Machine Learning with Python",
    issuer: "Microsoft",
    date: "Feb 2023",
    highlight: false,
  },
];

export const publications = [
  {
    title: "CMT Data Scraper: An Automated Financial Data Processing System",
    venue: "14th International Conference on Contemporary Engineering and Technology (ICCET 2026)",
    details: "Organized by OSIET in collaboration with Samarkand State University (Uzbekistan) and Prince Shri Venkateshwara Padmavathy Engineering College, Chennai · 22–23 March 2026",
    type: "Publication",
    featured: true,
    isCapstone: true,
  },
  {
    title: "Advancing ECLAT for Real-Time Association Rule Mining: A GPU Accelerated Approach with Machine Learning Integration",
    venue: "AICTE-sponsored NCEE 2025, Sri Ramakrishna Institute of Technology",
    details: "Jun 2025",
    type: "Publication",
    featured: false,
  },
  {
    title: "Cloud-Based 3D Printing in Metal Working",
    venue: "IMTEX 2025, Bangalore",
    details: "IMTMA / Tata Electronics · Jan 2025",
    type: "Presentation",
    featured: false,
  },
];

export const honors = [
  {
    title: "Rashtrapati Award 2022",
    issuer: "Bharat Scouts & Guides",
    desc: "National-level recognition from the President of India for leadership and community service.",
    highlight: true,
  },
  {
    title: "MSME Acci-Kawach National Hackathon — Semi-Finalist",
    issuer: "MSME",
    desc: "Top teams out of 1,000+ entries nationwide.",
    highlight: false,
  },
  {
    title: "LeetCode — 150+ Problems Solved",
    issuer: "LeetCode",
    desc: "DSA, SQL, algorithm optimization.",
    highlight: false,
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "The AI Race Is Being Won By Those Who Slow Down",
    hook: "Lean, fine-tuned models are quietly outperforming scale-obsessed approaches — and the data proves it.",
    tag: "#AgenticAI",
    teaser:
      "Everyone's obsessed with scale. Bigger models, more parameters, more compute. But in 2026, the operators actually winning aren't the ones throwing GPUs at the problem — they're the ones building smaller, sharper systems that know exactly what they're doing. Real-world performance benchmarks tell a story that hype cycles don't: fine-tuned, domain-specific models are consistently outperforming their bloated general counterparts on production tasks.",
    full: "The shift is already happening in production. When you're processing 1M+ records daily or orchestrating 500+ API calls with 99.9% uptime requirements, you can't afford the latency and cost of a model that's trying to do everything. The engineers I respect most aren't the ones talking about AGI — they're the ones who chose a 7B parameter model, fine-tuned it on their domain data, and built reliable infrastructure around it. That's the quiet revolution. The winners of the AI race are slowing down long enough to build systems that actually work in the real world, not just in benchmark papers.",
  },
  {
    id: 2,
    title: "Autonomy Without Isolation Is a Liability",
    hook: "The 'lethal trifecta' of agentic AI risk — and why most teams are building it wrong.",
    tag: "#AISecurity",
    teaser:
      "Agentic AI is powerful. It's also a security nightmare if you're not thinking about isolation from day one. The pattern I see again and again: teams add autonomy to their systems without adding boundaries. They give agents private data access, external communication channels, and the ability to process untrusted input — all at once. That's the lethal trifecta, and it's a disaster waiting to happen.",
    full: "When I built the autonomous workflow engine — 30+ daily workflows, 500+ API calls — the first thing I thought about wasn't capability. It was blast radius. What's the worst thing that can happen if this goes wrong? Sandboxing isn't just a security concept, it's an architectural discipline. Every agent that touches sensitive data should have its permissions scoped to exactly what it needs, no more. Every external communication should be logged and rate-limited. Every input from the outside world should be treated as untrusted until proven otherwise. The engineers who treat security as an afterthought will be the case studies that everyone else learns from. Build the fence before you let the horses run.",
  },
  {
    id: 3,
    title: "From Chatting With AI to Agents That Act",
    hook: "The shift from prompt-engineering to architecting autonomy — and what it means for the future of work.",
    tag: "#AgenticAI",
    teaser:
      "There's a fundamental difference between talking to an AI and building one that acts. The first is a conversation. The second is infrastructure. The companies making serious bets on agentic AI in 2026 aren't just adding chatbots to their products — they're rethinking what work actually is. When an AI can autonomously plan, execute, and recover from failures across a multi-step workflow, you're not just automating tasks. You're creating a new category of worker.",
    full: "The infrastructure investment signals are clear. When teams start building retry logic, audit trails, and error recovery systems for their AI agents — that's not a feature, that's an engineering discipline. It means they're treating AI output as something that needs the same rigor as any production system. I've seen this shift firsthand: building an automation engine that runs 500+ daily API calls isn't about prompt engineering. It's about fault tolerance, observability, and designing systems that fail gracefully. The future of AI isn't smarter chatbots. It's reliable digital workers with proper engineering discipline behind them.",
  },
  {
    id: 4,
    title: "The Data You're Not Looking For",
    hook: "Walmart's storm-driven sales patterns and what accidental discoveries mean for hidden signals in your own data.",
    tag: "#DataScience",
    teaser:
      "The biggest data breakthroughs in history weren't found by people who were looking for them. Walmart discovered that Pop-Tart sales spike 700% before hurricanes — not because an analyst set out to study storm behavior, but because someone was willing to look at correlations that made no intuitive sense. Google Flu Trends predicted flu outbreaks weeks before the CDC — using search queries, not medical data. The pattern is consistent: the most valuable signal is usually hiding where nobody thought to look.",
    full: "This is what keeps me obsessed with data infrastructure. When you're building pipelines that process 50K+ monthly reports or validating 1M+ daily compliance data points, the goal isn't just to move data from A to B. It's to create the conditions where the unexpected discovery can happen. That means not just validating data quality, but building systems that surface anomalies — because an anomaly is often a signal waiting to be understood. The organizations winning with data in 2026 aren't just the ones with the best models. They're the ones whose data infrastructure is sensitive enough to notice things that weren't on the roadmap.",
  },
];

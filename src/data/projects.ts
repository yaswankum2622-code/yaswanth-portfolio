import { assets } from "@/data/assets";

export type ProjectId =
  | "cortexAgent"
  | "experimentOS"
  | "fairLend"
  | "modelWatch"
  | "neuroShield"
  | "carbonLedgerX"
  | "migrationLens"
  | "bankingOS";

export type ProjectLink = {
  label: string;
  href: string | null;
};

export type ProjectCard = {
  id: ProjectId;
  title: string;
  status: string;
  category: string;
  domain: string;
  image: string;
  accent: string;
  oneLineDescription: string;
  shortDescription: string;
  techStack: string[];
  topMetrics: string[];
  github: string | null;
  live: ProjectLink;
  featured: boolean;
};

export const projects: ProjectCard[] = [
  {
    id: "cortexAgent",
    title: "CortexAgent",
    status: "Local / Self-hosted",
    category: "Agentic RAG",
    domain: "AI/MLOps, specifically Financial Technology",
    image: assets.cortexAgent,
    accent: "red-moon",
    oneLineDescription:
      "Production-grade agentic RAG platform that answers SEC 10-K financial research questions using four specialized LLM agents orchestrated through a quality-gated revision loop, grounding every claim in cited filing evidence.",
    shortDescription:
      "A multi-agent financial research platform with evaluation gates, section-aware retrieval, and cost-aware provider routing.",
    techStack: ["Python", "LangGraph", "LangChain", "FastAPI", "ChromaDB", "RAGAS"],
    topMetrics: ["932 chunks indexed", "20/20 red-team safe", "$0.05-$0.15 per query"],
    github: "https://github.com/yaswankum2622-code/cortexagent",
    live: { label: "Local / Self-hosted deployment", href: null },
    featured: true,
  },
  {
    id: "experimentOS",
    title: "ExperimentOS",
    status: "Deployed",
    category: "Experimentation Platform",
    domain: "Product Analytics / Experimentation Infrastructure",
    image: assets.experimentOS,
    accent: "ember",
    oneLineDescription:
      "Bayesian A/B testing platform with CUPED variance reduction and dbt-style metric governance for product teams to make statistically rigorous, interpretable experimentation decisions on e-commerce data.",
    shortDescription:
      "An experimentation system that combines Bayesian decisioning, CUPED, governed metrics, and decision memo generation.",
    techStack: ["Python", "PyMC", "Statsmodels", "dbt-sqlite", "Streamlit", "GitHub Actions"],
    topMetrics: ["541,909 transactions", "31.4% variance reduction", "27 pytest tests"],
    github: "https://github.com/yaswankum2622-code/ExperimentOS",
    live: { label: "Live demo", href: "https://yaswtutu-experimentos.hf.space" },
    featured: true,
  },
  {
    id: "fairLend",
    title: "FairLend",
    status: "Deployed",
    category: "Responsible AI",
    domain: "Fintech / Fair Machine Learning / Compliance & Regulation",
    image: assets.fairLend,
    accent: "compliance-red",
    oneLineDescription:
      "A fairness-constrained credit scoring system that prevents proxy discrimination with SHAP explainability, ECOA compliance letters, and EU AI Act readiness.",
    shortDescription:
      "A fairness-first credit scoring platform with per-applicant explanations, compliance chat, and automated reporting.",
    techStack: ["Python", "LightGBM", "Fairlearn", "SHAP", "DoWhy", "Streamlit"],
    topMetrics: ["500,000 HMDA rows", "DPR 0.9025", "34 pytest tests"],
    github: "https://github.com/yaswankum2622-code/fairlend",
    live: { label: "Live demo", href: "https://huggingface.co/spaces/yaswtutu/fairlend" },
    featured: true,
  },
  {
    id: "modelWatch",
    title: "ModelWatch",
    status: "Deployed",
    category: "MLOps",
    domain: "MLOps / Model Monitoring (credit-risk / fintech)",
    image: assets.modelWatch,
    accent: "steel-blue",
    oneLineDescription:
      "A production ML monitoring platform that detects data drift, performance decay, and behaviour change in credit-risk models before silent model failure causes business damage.",
    shortDescription:
      "A drift and retraining observatory that catches silent degradation with statistical, deep, and explanation-based signals.",
    techStack: ["Python", "LightGBM", "TensorFlow", "SHAP", "Evidently AI", "Streamlit"],
    topMetrics: ["30,000 records", "AUC 0.9258 to 0.6553", "42 pytest tests"],
    github: "https://github.com/yaswankum2622-code/modelwatch",
    live: { label: "Live demo", href: "https://huggingface.co/spaces/yaswtutu/modelwatch" },
    featured: true,
  },
  {
    id: "neuroShield",
    title: "NeuroShield",
    status: "Local / Self-hosted",
    category: "Graph AML",
    domain: "Fintech / Compliance / AML / Cryptocurrency Risk Detection",
    image: assets.neuroShield,
    accent: "electric-red",
    oneLineDescription:
      "An end-to-end Anti-Money Laundering platform that detects illicit Bitcoin transactions using temporal graph neural networks, explains flagged transactions to investigators, simulates privacy-preserving federated learning across banks, supports real-time streaming inference, and generates evidence-grounded SAR narratives.",
    shortDescription:
      "An AML intelligence platform built around temporal graph learning, explainability, federated privacy, and grounded reporting.",
    techStack: ["Python", "PyTorch Geometric", "Neo4j", "Redis", "FastAPI", "Docker Compose"],
    topMetrics: ["203,769 nodes", "PR-AUC 0.5177", "119 passed tests"],
    github: "https://github.com/yaswankum2622-code/NeuroShield",
    live: { label: "Local / Self-hosted deployment", href: null },
    featured: true,
  },
  {
    id: "carbonLedgerX",
    title: "CarbonLedgerX",
    status: "Local / Self-hosted",
    category: "Climate Intelligence",
    domain: "ESG / Climate Tech / Climate Intelligence",
    image: assets.carbonLedgerX,
    accent: "gold-ember",
    oneLineDescription:
      "A climate commitment failure intelligence platform that evaluates whether companies' stated climate targets are credible, forecasts their likelihood of missing targets through 2030, and recommends prioritized interventions.",
    shortDescription:
      "A climate intelligence system linking emissions logic, forecasting, contradiction detection, and intervention planning.",
    techStack: ["Python", "scikit-learn", "DuckDB", "Polars", "FastAPI", "Streamlit"],
    topMetrics: ["~500 synthetic companies", "2015-2030 time series", "15 pytest smoke tests"],
    github: "https://github.com/yaswankum2622-code/cabonledgerX",
    live: { label: "Local / Self-hosted deployment", href: null },
    featured: true,
  },
  {
    id: "migrationLens",
    title: "MigrationLens",
    status: "Local / Self-hosted",
    category: "Developer Tooling",
    domain: "DevOps / Database Migration / Backend Infrastructure",
    image: assets.migrationLens,
    accent: "orange-slash",
    oneLineDescription:
      "Semgrep for PostgreSQL migrations - an open-source, deterministic migration-risk linter that scans application code for database dialect incompatibilities, validated SQL fixes, and blast-radius graphs to surface PostgreSQL migration risks before cutover.",
    shortDescription:
      "A deterministic migration-risk linter with validated fixes, blast-radius analysis, and benchmark-backed accuracy.",
    techStack: ["Python", "sqlglot", "tree-sitter", "networkx", "Docker", "Streamlit"],
    topMetrics: ["37/37 benchmark recall", "55 YAML rules", "138 tests passed"],
    github: "https://github.com/yaswankum2622-code/MigrationLens",
    live: { label: "Local / Self-hosted deployment", href: null },
    featured: true,
  },
  {
    id: "bankingOS",
    title: "Banking OS",
    status: "Ongoing",
    category: "Workflow Control Layer",
    domain: "Regulated Finance / Agentic Workflow Design",
    image: assets.bankingOS,
    accent: "active-forge",
    oneLineDescription:
      "Trusted agentic workflow platform for regulated finance, built around policy-governed execution, review gates, evidence capture, and audit-ready controls.",
    shortDescription:
      "An ongoing banking workflow operating layer focused on deterministic controls, human verification, evidence packets, and append-only auditability.",
    techStack: ["Python", "FastAPI", "LangGraph", "PostgreSQL", "Streamlit", "GenAI"],
    topMetrics: ["Architecture in progress", "Workflow controls in progress"],
    github: null,
    live: { label: "In progress", href: null },
    featured: false,
  },
];

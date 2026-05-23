import type { ProjectId } from "@/data/projects";

export type ProjectCaseStudy = {
  id: ProjectId;
  overview: string;
  problemSolved: string;
  whatIBuilt: string;
  coreFeatures: string[];
  dataset: string[];
  preprocessing?: string[];
  architecture: string[];
  evaluationMetrics: string[];
  complianceAndSafety: string[];
  explainability?: string[];
  safety?: string[];
  tests: string[];
  impact: string[];
  users: string[];
  whyImpressive: string[];
  uniqueTechnicalDecision: string;
  personalContribution: string;
};

export const projectCaseStudies: ProjectCaseStudy[] = [
  {
    id: "cortexAgent",
    overview:
      "Production-grade agentic RAG platform for SEC 10-K financial research with grounded citations and revision-aware orchestration.",
    problemSolved:
      "Analysts spend 40-60% of research time manually extracting facts from 200-400 page SEC filings. CortexAgent reduces that manual work while grounding answers in cited evidence.",
    whatIBuilt:
      "A four-agent LangGraph system with section-aware retrieval, revision loops, multi-provider routing, and a quality-gated evaluation pipeline.",
    coreFeatures: [
      "Multi-agent pipeline with Researcher, Analyst, Writer, and Critic roles.",
      "Hybrid retrieval using BM25, ChromaDB, reciprocal rank fusion, and BGE reranking.",
      "Three-provider fallback with cost-aware model assignment and tracked spend.",
    ],
    dataset: [
      "2024 SEC 10-K filings from Apple, Microsoft, Alphabet, JPMorgan Chase, and Tesla.",
      "932 indexed chunks with section-aware chunk IDs.",
      "15 golden evaluation questions and 20 adversarial prompts.",
    ],
    architecture: [
      "LangGraph state machine for explicit routing and revisions.",
      "FastAPI and Streamlit interface with Docker Compose deployment.",
      "RAGAS gating, traceability, and provider fallback across Gemini, Groq, and Claude.",
    ],
    evaluationMetrics: [
      "Faithfulness 0.426 and answer correctness 0.245.",
      "Red-team safety 20/20 with 0 high-severity failures.",
      "Latency p50 around 250 ms and cost per query between $0.05 and $0.15.",
    ],
    complianceAndSafety: [
      "20 adversarial prompts covering injection, jailbreaks, PII, advice, and citation fabrication.",
      "Citation grounding with chunk ID, ticker, year, and evidence preview.",
      "Audit trail with step-level model trace, latency, and cost.",
    ],
    tests: [
      "60 RAGAS metric assertions across 15 evaluation questions.",
      "20 adversarial prompts with pass and fail criteria.",
      "Threshold-based CI gates in GitHub Actions.",
    ],
    impact: [
      "+28% faithfulness improvement from v1 to v3.",
      "+59% correctness improvement from v1 to v3.",
      "3-provider resilience reduced demo failure risk compared with single-provider routing.",
    ],
    users: [
      "Financial analysts",
      "Compliance and risk teams",
      "Corporate development and M&A teams",
      "Private equity and institutional investors",
    ],
    whyImpressive: [
      "Combines evaluation, safety, cost discipline, and observability instead of stopping at retrieval plus generation.",
      "Uses domain-aware chunking for financial filings rather than generic document slicing.",
      "Ships with deployable infrastructure, CI gates, and operator visibility.",
    ],
    uniqueTechnicalDecision:
      "Section-aware financial chunking before retrieval preserved filing structure and made citations auditable instead of treating SEC documents like flat text.",
    personalContribution:
      "Built the full agentic RAG system end to end, including retrieval, routing, evaluation, safety, and deployment artifacts.",
  },
  {
    id: "experimentOS",
    overview:
      "Bayesian experimentation platform with CUPED variance reduction and governed metrics for e-commerce decision making.",
    problemSolved:
      "Experimentation teams waste time on p-value confusion, long test cycles, inconsistent metric definitions, and manual decision memos.",
    whatIBuilt:
      "A production-ready A/B testing system that pairs Bayesian decisioning with CUPED, governed SQL metrics, and auto-generated decision memos.",
    coreFeatures: [
      "Beta-Binomial Bayesian testing with lift, credible intervals, and ship or hold guidance.",
      "CUPED variance reduction driven by pre-experiment behavior.",
      "Metric registry and governance gate with dbt and GitHub Actions.",
    ],
    dataset: [
      "UCI Online Retail II dataset.",
      "541,909 transactions across 4,372 customers and 3,684 products.",
      "Weekly cohorts and simulated funnel events for retention and conversion analysis.",
    ],
    architecture: [
      "Python data pipeline on top of SQLite persistence.",
      "dbt-sqlite transformation layer for metric lineage and testing.",
      "Streamlit dashboard with Plotly visualizations and GitHub Actions CI.",
    ],
    evaluationMetrics: [
      "P(B > A) = 87.3% with lift of +0.22 percentage points.",
      "31.4% variance reduction from CUPED.",
      "Conversion funnel of 96.7% view-to-cart, 92.0% cart-to-purchase, 89.0% overall.",
    ],
    complianceAndSafety: [
      "Governed metric changes via GitHub Actions gate.",
      "Version-controlled metric registry and lineage tracking.",
      "Credible intervals and expected loss reporting for interpretable uncertainty.",
    ],
    tests: [
      "27 pytest tests in total.",
      "13 tests for Bayesian A/B behavior.",
      "8 tests for CUPED and 6 for funnel analysis.",
    ],
    impact: [
      "31.4% variance reduction saved 5.3 days per experiment.",
      "Experiment duration reduced from 34 days to 19 days in the documented workflow.",
      "Auto-generated memos removed 1-2 hours of manual decision documentation per test.",
    ],
    users: [
      "Product managers",
      "Data analysts",
      "Data engineers",
      "Experimentation teams",
      "Business stakeholders",
    ],
    whyImpressive: [
      "Connects statistical rigor, governance, deployment, and decision documentation in one product.",
      "Uses real e-commerce data rather than a toy experimentation example.",
      "Shows production thinking with CI, tests, and live deployment.",
    ],
    uniqueTechnicalDecision:
      "Using an exact Beta-Binomial conjugate model avoided slow MCMC without sacrificing quality for binary conversion decisions.",
    personalContribution:
      "Built the experimentation platform end to end from ingestion and modeling through governance, deployment, and memo generation.",
  },
  {
    id: "fairLend",
    overview:
      "Fairness-constrained credit scoring system with explainability, compliance reporting, and EU AI Act readiness.",
    problemSolved:
      "Credit models can learn proxy discrimination, fail fairness audits, and leave compliance teams without explainable denial reasons.",
    whatIBuilt:
      "A fairness-first credit scoring workflow with constrained modeling, SHAP explanations, proxy detection, compliance chat, and adverse action support.",
    coreFeatures: [
      "LightGBM wrapped with Fairlearn ExponentiatedGradient under a DemographicParity constraint.",
      "SHAP-based per-applicant explainability with waterfall-style reasoning.",
      "Compliance chat plus a 10-point EU AI Act checklist.",
    ],
    dataset: [
      "HMDA 2024 data sourced from CFPB.",
      "500,000 rows across 20 features.",
      "55 states and 4,421 lenders represented in the data.",
    ],
    architecture: [
      "Python scoring and fairness pipeline backed by SQLite.",
      "Streamlit dashboard with GitHub Actions CI and Hugging Face hosting.",
      "Gemini-powered adverse action letters and compliance chat.",
    ],
    evaluationMetrics: [
      "Fair model DPR 0.9025 and EOD 0.0748.",
      "Unconstrained model DPR 0.7819 and EOD 0.1622.",
      "Fair model F1 0.9056 with AUC-ROC 0.7111.",
    ],
    complianceAndSafety: [
      "ECOA adverse action letter generation that excludes protected attributes.",
      "Disparate Impact Ratio audit and proxy variable detection.",
      "EU AI Act checklist covering bias testing, artifacts, documentation, and oversight.",
    ],
    tests: [
      "34 pytest tests.",
      "Coverage for data pipeline integrity, fairness constraints, compliance reporting, and proxy detection.",
    ],
    impact: [
      "DPR improved from 0.7819 to 0.9025 and passed the 0.80 threshold.",
      "Equalized odds difference dropped from 0.1622 to 0.0748, a 55% reduction.",
      "EU AI Act checklist reached compliant status on all 10 checks.",
    ],
    users: [
      "Compliance officers",
      "ML engineers",
      "Risk managers",
      "Credit analysts",
      "Data scientists",
    ],
    whyImpressive: [
      "Ties fairness, explanation, and regulation together instead of treating them as separate workstreams.",
      "Uses real regulatory context and a real public dataset.",
      "Ships as a live, tested, deployment-ready compliance product.",
    ],
    uniqueTechnicalDecision:
      "ExponentiatedGradient was chosen because it offers a mathematically grounded accuracy-fairness tradeoff while staying compatible with standard scikit-learn estimators.",
    personalContribution:
      "Built the fairness-constrained scoring system end to end, including modeling, explanations, compliance reporting, and deployment.",
  },
  {
    id: "modelWatch",
    overview:
      "Production ML monitoring platform that detects drift, performance decay, and behavior change before silent model failure causes business damage.",
    problemSolved:
      "Production risk models can keep scoring confidently while data drift and decision logic shift erode performance in the background.",
    whatIBuilt:
      "A monitoring system that combines classical drift tests, deep detectors, retraining evaluation, and executive narratives for risk teams.",
    coreFeatures: [
      "Multi-detector drift observatory with PSI, KS, Jensen-Shannon, chi-square, and Evidently AI.",
      "Deep unsupervised monitoring with autoencoder error, Isolation Forest, and SHAP rank drift.",
      "Champion-challenger retraining engine with LSTM severity forecasting.",
    ],
    dataset: [
      "UCI Credit Card Default dataset.",
      "30,000 records monitored across 23 features.",
      "Four windows: one baseline plus three progressively drifted monitoring windows.",
    ],
    architecture: [
      "SQLite-backed monitoring pipeline with Streamlit dashboard and Hugging Face deployment.",
      "LightGBM champion model plus TensorFlow-based autoencoder and LSTM modules.",
      "GitHub Actions CI and Docker packaging for reproducible delivery.",
    ],
    evaluationMetrics: [
      "Champion AUC fell from 0.9258 in W1 to 0.6553 in W4.",
      "Challenger AUC improved to 0.7459 in W4 after retraining.",
      "W4 unsupervised signals reached anomaly rate 16.53%, autoencoder drift ratio 1.291x, and SHAP rank correlation 0.6166.",
    ],
    complianceAndSafety: [
      "SHAP-based feature tracking explains why model behavior changed.",
      "Executive drift narratives translate technical signals for non-technical stakeholders.",
      "Seven alert types connect drift evidence to operational action.",
    ],
    tests: [
      "42 pytest tests across drift detection, models, and monitoring modules.",
      "Coverage for PSI, anomaly detection, feature persistence, degradation assertions, and forecast outputs.",
    ],
    impact: [
      "PSI signaled drift in W2 before the model fully crashed.",
      "Challenger retraining improved AUC by +0.1143 versus the degraded champion in W4.",
      "LSTM forecasting projected W5 severity so teams could plan retraining ahead of time.",
    ],
    users: [
      "Credit risk modelers",
      "MLOps engineers",
      "Model governance teams",
      "Risk executives",
      "Data engineers",
    ],
    whyImpressive: [
      "Treats production monitoring as a layered system instead of a single PSI dashboard.",
      "Connects drift detection to retraining decisions and stakeholder communication.",
      "Shows real MLOps thinking with live deployment and operational alerting.",
    ],
    uniqueTechnicalDecision:
      "The layered unsupervised stack of autoencoder, Isolation Forest, and SHAP rank correlation was chosen to catch failure modes that PSI and KS alone would miss.",
    personalContribution:
      "Built the monitoring platform end to end, from data windows and detectors to retraining logic, forecasting, deployment, and tests.",
  },
  {
    id: "neuroShield",
    overview:
      "End-to-end AML platform for illicit Bitcoin transaction detection, explainability, privacy-preserving collaboration, and grounded SAR generation.",
    problemSolved:
      "Rule-based AML systems generate massive false positives, lack graph reasoning, and leave investigators with weak explanations and slow reporting.",
    whatIBuilt:
      "A graph intelligence platform that trains temporal GNNs, explains flagged transactions, simulates private federated learning, and generates grounded SAR narratives.",
    coreFeatures: [
      "Temporal graph classification across GraphSAGE, GAT, and TGN with honest model comparison.",
      "Investigator-grade explainability using GNNExplainer, PGExplainer, and counterfactual analysis.",
      "Differentially private federated learning with Byzantine-resilient aggregation and streaming inference.",
    ],
    dataset: [
      "Elliptic Bitcoin Transaction Graph from PyTorch Geometric.",
      "203,769 nodes, 234,355 directed edges, and 165 node features.",
      "49 timesteps with temporal train, validation, and test splits.",
    ],
    architecture: [
      "PyTorch Geometric models, Neo4j graph storage, and Redis stream processing.",
      "FastAPI scoring service, Streamlit dashboard, and Docker Compose orchestration.",
      "Grounded SAR generation constrained by evidence JSON and traceability validation.",
    ],
    evaluationMetrics: [
      "GraphSAGE achieved PR-AUC 0.5177, ROC-AUC 0.8764, and ECE 0.0496.",
      "Warm-path streaming latency reached 3.33 ms p95 and cold-path latency 17.57 ms p95.",
      "Krum defense excluded malicious clients in 10 out of 10 rounds.",
    ],
    complianceAndSafety: [
      "Grounded SAR generation limited the LLM to schema-validated evidence JSON.",
      "SAR validation passed 5 out of 5 and adversarial SAR robustness also passed 5 out of 5.",
      "Privacy accounting and Byzantine defense were explicit parts of the architecture.",
    ],
    tests: [
      "29 test files across data ingestion, training, explainability, federated learning, streaming, and SAR generation.",
      "Latest audit reported 119 tests passing.",
    ],
    impact: [
      "GraphSAGE PR-AUC 0.5177 versus a random baseline near 0.023.",
      "FedAvg retained PR-AUC 0.5024 while DP-FedAvg reported epsilon around 5.",
      "SAR generation dropped from roughly 2 hours manually to about 100 ms from evidence JSON.",
    ],
    users: [
      "AML investigators and analysts",
      "Risk and compliance teams",
      "RegTech vendors",
      "Crypto compliance teams",
      "Engineering and MLOps teams",
    ],
    whyImpressive: [
      "Combines graph ML, explainability, privacy, streaming, and compliance reporting in one system.",
      "Uses temporal splitting and honest tradeoff reporting instead of inflated results.",
      "Ships with product-grade deliverables beyond model notebooks.",
    ],
    uniqueTechnicalDecision:
      "Using a temporal graph train and test split prevented future leakage and made the AML evaluation closer to real production behavior.",
    personalContribution:
      "Built the AML graph intelligence platform end to end, including training, explainability, federated simulation, streaming inference, grounded reporting, and deployment layers.",
  },
  {
    id: "carbonLedgerX",
    overview:
      "Climate commitment intelligence platform that evaluates target credibility, forecasts target miss risk through 2030, and prioritizes interventions.",
    problemSolved:
      "Climate-risk communication often lacks transparent operational logic, backtesting, contradiction analysis, and action-oriented intervention planning.",
    whatIBuilt:
      "A climate intelligence system connecting activity-based emissions logic, historical reconstruction, dual forecasting, reconciled risk scoring, and evidence packs.",
    coreFeatures: [
      "Transparent activity-based emissions calculator with explicit factor references.",
      "Dual forecasting stack with deterministic rules and statistical backtesting.",
      "Multi-layer scoring with heuristic, probabilistic, and disagreement-aware reconciliation.",
    ],
    dataset: [
      "EPA eGRID, DEFRA conversion factors, and public SBTi target database exports.",
      "Synthetic portfolio of roughly 500 companies.",
      "Historical series from 2015-2024 and forecast horizon from 2025-2030.",
    ],
    architecture: [
      "Python pipeline built on Pandas, Polars, DuckDB, Parquet, and OpenPyXL.",
      "Read-only FastAPI service plus Streamlit dashboard.",
      "Walk-forward evaluation and evidence packs without LLM-generated explanations.",
    ],
    evaluationMetrics: [
      "Forecast backtesting used mean absolute error and absolute percentage error.",
      "Probabilistic scoring tracked Brier score, ROC-AUC, and calibration quality.",
      "Contradiction engine surfaced 8 or more explicit contradiction flags.",
    ],
    complianceAndSafety: [
      "Transparent calculator audit with factor references and baseline deltas.",
      "Contradiction engine flags gaps between stated targets and modeled trajectory.",
      "Evidence packs and reconciliation layer prioritize traceable communication over black-box scoring.",
    ],
    tests: [
      "15 pytest smoke tests.",
      "Coverage across calculator, reconstruction, forecasting, scoring, evidence packs, dashboard, and API phases.",
    ],
    impact: [
      "Standardized three public datasets into canonical processed tables.",
      "Modeled about 500 synthetic companies with reproducible historical and forecast logic.",
      "Created three reconciled risk views instead of collapsing everything to one opaque score.",
    ],
    users: [
      "Chief Sustainability Officers",
      "Investor relations and ESG teams",
      "Lender and creditor risk teams",
      "Climate tech product teams",
      "Board and investor stakeholders",
    ],
    whyImpressive: [
      "It is a product-shaped analytical system instead of a dashboard-only climate demo.",
      "Balances transparency, backtesting, scoring, and delivery discipline.",
      "Explicitly communicates uncertainty and disagreement instead of hiding it.",
    ],
    uniqueTechnicalDecision:
      "Historical reconstruction before forecasting created a stronger bridge for backtesting, explanation, and honest uncertainty than jumping directly from a single snapshot to a forecast.",
    personalContribution:
      "Designed and implemented the full pipeline from public factor workbooks through scoring, interventions, evidence packs, dashboard, and API surfaces.",
  },
  {
    id: "migrationLens",
    overview:
      "Deterministic migration-risk linter for PostgreSQL cutovers with validated fixes and blast-radius analysis.",
    problemSolved:
      "Database migrations fail because application-code dependencies and dialect-specific risks surface after cutover, when fixes are most expensive.",
    whatIBuilt:
      "A deterministic-first migration analysis tool that parses code and SQL, explains issues, validates proposed fixes, and exports reviewable results.",
    coreFeatures: [
      "YAML rule catalog with 55 rules and deterministic code and SQL analysis.",
      "Blast-radius graph linking file, function, query, schema object, and fix.",
      "SQL fix validation layer backed by sqlglot and a sandboxed PostgreSQL check.",
    ],
    dataset: [
      "Sakila benchmark with 37 expected findings and 16 schema tables.",
      "110 rule fixtures built from 55 rules.",
      "Synthetic and public schemas across MySQL, Oracle preview, MongoDB preview, and multi-language fixtures.",
    ],
    architecture: [
      "tree-sitter, sqlglot, and deterministic text parsers for multi-language analysis.",
      "Docker and Docker Compose with sandboxed PostgreSQL validation.",
      "Streamlit UI, Plotly visualization, SARIF output, and GitHub Actions benchmark gating.",
    ],
    evaluationMetrics: [
      "37 out of 37 benchmark findings detected with 0 unexpected findings on safe code.",
      "110 out of 110 rule fixtures passing.",
      "Time to report at or below 60 seconds on a developer laptop.",
    ],
    complianceAndSafety: [
      "Secrets redaction before any LLM submission.",
      "SARIF output compatible with GitHub code scanning.",
      "Validated, needs review, and failed validation badges for every proposed fix.",
    ],
    tests: [
      "138 tests passed with 3 skipped across 21 test files.",
      "Coverage for parsers, schema readers, dynamic SQL tracing, LLM client flows, workflows, SARIF validation, and redaction.",
    ],
    impact: [
      "100% recall on the Sakila benchmark with 0% false positives on safe code.",
      "55 rules across 13 issue categories and four supported source-database paths.",
      "Validated more than 10 SQL fixes and confirmed 16 or more manual PostgreSQL fixes.",
    ],
    users: [
      "Backend engineers planning database cutovers",
      "Data engineers validating schema migrations",
      "Engineering managers and tech leads",
      "Solution architects",
      "DevOps and audit teams",
    ],
    whyImpressive: [
      "Combines parsing, validation, reporting, visualization, and LLM-assisted explanation in one tool.",
      "Attacks a documented migration failure problem with measurable benchmark discipline.",
      "Uses a deterministic-first architecture that stays useful even when the LLM is unavailable.",
    ],
    uniqueTechnicalDecision:
      "Keeping detection deterministic and using the LLM only downstream for explanation and fixes made the tool auditable, reproducible, and safer than an LLM-only scanner.",
    personalContribution:
      "Architected and implemented the tool end to end, including parsers, rule catalog, fix validator, blast-radius graph, UI, and benchmark evaluation harness.",
  },
  {
    id: "bankingOS",
    overview:
      "Ongoing policy-governed workflow control layer for regulated finance, centered on trust, evidence, and human approval.",
    problemSolved:
      "High-trust financial workflows need permissions, escalation, replayability, and evidence before agentic automation can be safely adopted.",
    whatIBuilt:
      "An in-progress control-layer concept for KYC clearance and insurance claims that focuses on trusted orchestration rather than generic automation.",
    coreFeatures: [
      "Five trust modules: Evidence Locker, Privacy Hub, Human Verification Room, Clearance Ledger, and Policy Graph.",
      "Patterns for permissions, human escalation, final clearance, and replayable audit trails.",
      "Workflow blueprints aimed at regulated finance rather than general-purpose agents.",
    ],
    dataset: [
      "No public dataset documented yet.",
      "Current scope is architecture and workflow blueprinting for KYC and insurance claims.",
    ],
    architecture: [
      "Policy-governed control layer rather than a single agent loop.",
      "Human verification and clearance modeled as first-class workflow steps.",
      "Auditability and least-privilege access drive the system design.",
    ],
    evaluationMetrics: [
      "Project is still in progress and no formal benchmark metrics are documented yet.",
    ],
    complianceAndSafety: [
      "Evidence-backed workflow design for regulated finance.",
      "Human escalation and replayable audit trails are central to the concept.",
      "Least-privilege access is treated as a design requirement.",
    ],
    tests: [
      "Formal automated test metrics are not documented yet because the project is still in the active design phase.",
    ],
    impact: [
      "Defines five trust modules for regulated workflow control.",
      "Targets KYC clearance and insurance claims where evidence and approvals matter.",
      "Positions ongoing work inside the portfolio as an active forge rather than a finished demo.",
    ],
    users: [
      "KYC operations teams",
      "Insurance claims teams",
      "Compliance stakeholders",
      "Audit and governance reviewers",
    ],
    whyImpressive: [
      "Shows systems thinking around trusted agentic finance workflows before a flashy UI exists.",
      "Centers permissions, human review, and evidence from the start.",
      "Extends the portfolio narrative into ongoing product architecture work.",
    ],
    uniqueTechnicalDecision:
      "The design is organized around five explicit trust modules instead of one monolithic workflow so permissions, evidence, privacy, and clearance stay separable and auditable.",
    personalContribution:
      "Designed the control-layer direction, trust modules, and orchestration patterns for a regulated finance workflow system that is still under active construction.",
  },
];

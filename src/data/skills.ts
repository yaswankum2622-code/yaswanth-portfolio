export type SkillBand = "Advanced" | "Intermediate" | "Familiar";

export type SkillItem = {
  name: string;
  symbol: string;
};

export type SkillGroup = {
  id: string;
  title: SkillBand;
  accent: string;
  description: string;
  items: SkillItem[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "advanced",
    title: "Advanced",
    accent: "crimson",
    description: "What you build production systems with",
    items: [
      { name: "Python", symbol: "Py" },
      { name: "SQL", symbol: "DB" },
      { name: "LLMs and GenAI", symbol: "AI" },
      { name: "Agentic AI", symbol: "AG" },
      { name: "RAG Systems", symbol: "RG" },
      { name: "LangChain", symbol: "LC" },
      { name: "LangGraph", symbol: "LG" },
      { name: "Prompt Engineering", symbol: "PE" },
      { name: "Red Teaming", symbol: "RT" },
      { name: "FastAPI", symbol: "API" },
      { name: "Streamlit", symbol: "UI" },
      { name: "Statistical Modeling", symbol: "ST" },
      { name: "SHAP", symbol: "XP" },
    ],
  },
  {
    id: "intermediate",
    title: "Intermediate",
    accent: "gold",
    description: "Comfortable. Shipped real projects with these",
    items: [
      { name: "Machine Learning", symbol: "ML" },
      { name: "LightGBM", symbol: "GB" },
      { name: "GNN", symbol: "GNN" },
      { name: "Evidently AI", symbol: "EV" },
      { name: "ML Monitoring", symbol: "MON" },
      { name: "A/B Testing", symbol: "AB" },
      { name: "PostgreSQL", symbol: "PG" },
      { name: "Docker", symbol: "DK" },
      { name: "AWS", symbol: "AWS" },
      { name: "GitHub Actions", symbol: "CI" },
      { name: "Business Analytics", symbol: "BA" },
      { name: "Data Visualization", symbol: "DV" },
    ],
  },
  {
    id: "familiar",
    title: "Familiar",
    accent: "steel",
    description: "Explored. Know when and how to use",
    items: [
      { name: "Federated Learning", symbol: "FL" },
      { name: "Neo4j", symbol: "N4" },
      { name: "Redis", symbol: "RD" },
      { name: "Spark", symbol: "SP" },
      { name: "dbt", symbol: "DBT" },
      { name: "Tableau", symbol: "TB" },
      { name: "Power BI", symbol: "BI" },
      { name: "REST API Design", symbol: "REST" },
      { name: "Linux", symbol: "LX" },
      { name: "Bash", symbol: "SH" },
    ],
  },
];

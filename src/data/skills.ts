export type SkillLevel =
  | "Advanced"
  | "Strong"
  | "Production Practice"
  | "Working Knowledge";

export type SkillItem = {
  name: string;
  level: SkillLevel;
};

export type SkillGroup = {
  id: string;
  title: string;
  accent: string;
  description: string;
  items: SkillItem[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "ai-ml",
    title: "AI / ML",
    accent: "forge",
    description: "Core capability across intelligent workflows, retrieval systems, evaluation, and model behavior.",
    items: [
      { name: "LLMs and GenAI", level: "Advanced" },
      { name: "Agentic AI", level: "Strong" },
      { name: "RAG", level: "Strong" },
      { name: "LangChain", level: "Strong" },
      { name: "LangGraph", level: "Strong" },
      { name: "Machine Learning", level: "Advanced" },
      { name: "Deep Learning", level: "Strong" },
      { name: "Prompt Engineering", level: "Strong" },
      { name: "AI Red Teaming", level: "Production Practice" },
    ],
  },
  {
    id: "data-analytics",
    title: "Data and Analytics",
    accent: "amber",
    description: "Analytical foundations for experimentation, dashboards, business insight, and measurement.",
    items: [
      { name: "Python", level: "Advanced" },
      { name: "SQL", level: "Advanced" },
      { name: "Statistics", level: "Strong" },
      { name: "A/B Testing", level: "Strong" },
      { name: "Power BI", level: "Working Knowledge" },
      { name: "Tableau", level: "Working Knowledge" },
      { name: "Data Visualization", level: "Strong" },
      { name: "Business Analytics", level: "Strong" },
    ],
  },
  {
    id: "engineering",
    title: "Engineering",
    accent: "crimson",
    description: "Execution patterns for APIs, interfaces, testing, data stores, and repeatable delivery.",
    items: [
      { name: "FastAPI", level: "Strong" },
      { name: "Streamlit", level: "Strong" },
      { name: "Docker", level: "Production Practice" },
      { name: "GitHub Actions", level: "Working Knowledge" },
      { name: "PostgreSQL", level: "Working Knowledge" },
      { name: "SQLite", level: "Strong" },
      { name: "APIs", level: "Strong" },
      { name: "Testing", level: "Production Practice" },
    ],
  },
  {
    id: "cloud-deployment",
    title: "Cloud and Deployment",
    accent: "gold",
    description: "Deployment awareness across hosting, observability, CI/CD, and production feedback loops.",
    items: [
      { name: "AWS", level: "Working Knowledge" },
      { name: "Vercel", level: "Production Practice" },
      { name: "Netlify", level: "Production Practice" },
      { name: "GitHub", level: "Strong" },
      { name: "CI/CD", level: "Production Practice" },
      { name: "Model Monitoring", level: "Working Knowledge" },
      { name: "Evidently AI", level: "Working Knowledge" },
    ],
  },
];

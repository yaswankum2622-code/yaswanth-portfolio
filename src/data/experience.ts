import { assets } from "@/data/assets";

export type ExperienceEntry = {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  accent: string;
  image: string;
  summary: string;
  achievements: string[];
};

export type EducationEntry = {
  school: string;
  degree: string;
  location: string;
  period: string;
  image: string;
  details: string[];
};

export const experience: ExperienceEntry[] = [
  {
    id: "aramalgorithm",
    company: "AramAlgorithm.ai",
    role: "AI Red Team Engineer",
    location: "Remote",
    period: "12 Mar 2025 - 12 Feb 2026",
    accent: "crimson",
    image: assets.experienceRoad,
    summary:
      "Remote AI engineering work focused on red-teaming, safety evaluation, evidence pipelines, and measurable quality controls for LLM, RAG, and agentic AI systems.",
    achievements: [
      "Designed and implemented structured red-teaming frameworks for LLM safety, robustness, misuse risks, and failure-mode discovery across production-style AI workflows.",
      "Built Python-based adversarial testing scenarios and evaluation runs for LLM chatbots, retrieval pipelines, and agentic orchestration flows.",
      "Created automated pipelines that turned evaluation outputs into structured, compliance-ready evidence artifacts for engineering and review teams.",
      "Worked with engineering and compliance stakeholders to translate responsible AI requirements into repeatable test plans, severity-driven findings, and measurable evaluation criteria.",
    ],
  },
];

export const education: EducationEntry = {
  school: "VIT Chennai",
  degree: "Integrated M.Tech in Computer Science and Engineering with Business Analytics specialization",
  location: "Chennai, India",
  period: "Jun 2020 - Sep 2025",
  image: assets.educationTemple,
  details: [
    "GPA: 8.03/10.0",
    "Built foundations in machine learning, NLP, statistics, algorithms, data mining, and business analytics.",
    "Developed portfolio-grade AI, analytics, and product intelligence systems.",
  ],
};

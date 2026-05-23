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
    role: "AI Red Team Tester - GenAI Evaluation, Agentic AI Reliability and Responsible AI",
    location: "Remote",
    period: "Mar 2025 - Feb 2026",
    accent: "crimson",
    image: assets.experienceRoad,
    summary:
      "Structured evaluation, reliability analysis, and responsible AI testing across LLM chatbots, RAG pipelines, and agentic AI systems.",
    achievements: [
      "Designed Python-based adversarial prompt scenarios for LLM chatbots, RAG pipelines, and agentic AI systems using Garak, PyRIT, and PromptBench.",
      "Evaluated grounded retrieval behavior, multi-agent handoffs, orchestration edge cases, and unsafe output patterns.",
      "Delivered structured evaluation reports with severity ratings, reproduction steps, impact assessments, and guardrail recommendations.",
      "Supported repeatable AI quality assurance practices across an 11-month remote workstream.",
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

import "server-only";

import { existsSync } from "node:fs";
import path from "node:path";

import { assets } from "@/data/assets";
import { profile } from "@/data/profile";
import { projects, type ProjectId } from "@/data/projects";

const resumeFileName = "Yaswanth_Kumar_Akkireddy_Resume.pdf";
const resumePageHref = "/resume";
const resumePdfHref = `/resume/${resumeFileName}`;

const projectIndex = new Map(projects.map((project) => [project.id, project]));

export type ResumeResource = {
  fileName: string;
  routeHref: string;
  pdfHref: string | null;
  href: string | null;
  isAvailable: boolean;
  isPdfAvailable: boolean;
  previewImage: string;
  fallbackMessage: string;
  highlights: string[];
};

export type ResumeSkillGroup = {
  title: string;
  items: string[];
};

export type ResumeExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
};

export type ResumeProjectReference = {
  title: string;
  subtitle: string;
  summary: string;
  portfolioHref: string;
  githubHref: string | null;
  liveHref: string | null;
};

export type ResumeEducation = {
  school: string;
  degree: string;
  period: string;
  gpa: string;
};

export type ResumePageData = {
  name: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  professionalSummary: string;
  coreSkills: ResumeSkillGroup[];
  experience: ResumeExperienceItem[];
  featuredProjects: ResumeProjectReference[];
  supportingProjects: ResumeProjectReference[];
  education: ResumeEducation;
  certificationsAndPrograms: string[];
};

function buildProjectReference(
  projectId: ProjectId,
  subtitle: string,
  summary?: string,
): ResumeProjectReference {
  const project = projectIndex.get(projectId);

  if (!project) {
    throw new Error(`Missing project data for resume reference: ${projectId}`);
  }

  return {
    title: project.title,
    subtitle,
    summary: summary ?? project.shortDescription,
    portfolioHref: "/#projects",
    githubHref: project.github,
    liveHref: project.live.href,
  };
}

export const resumePageData: ResumePageData = {
  name: "Yaswanth Kumar Akkireddy",
  role: "AI Engineer",
  tagline:
    "Agentic AI Systems · RAG · LLM Evaluation · Data Operations · Workflow Automation",
  location: "Bengaluru, India",
  email: profile.email,
  phone: profile.phone,
  github: profile.github,
  linkedin: profile.linkedin,
  professionalSummary:
    "Postgraduate AI/GenAI engineer with 1 year of production experience evaluating LLM chatbots, RAG pipelines, and agentic AI systems, plus portfolio-grade builds spanning SEC research, experimentation infrastructure, and regulated financial workflows. Hands-on with Python, SQL, LangGraph, LangChain, FastAPI, RAG, vector retrieval, LLM provider APIs, CI/CD, and evaluation frameworks.",
  coreSkills: [
    {
      title: "AI/GenAI Engineering",
      items: [
        "Python",
        "SQL",
        "LangGraph",
        "LangChain",
        "Agentic AI",
        "Multi-Agent Orchestration",
        "Prompt Engineering",
        "RAG Architectures",
        "Hybrid Retrieval",
        "Vector Search",
        "Embeddings",
        "Tool-Calling",
        "Function Orchestration",
        "LLM Provider APIs",
        "Anthropic",
        "Google GenAI",
        "Groq",
      ],
    },
    {
      title: "Backend, Data and Deployment",
      items: [
        "FastAPI",
        "RESTful APIs",
        "Scalable Backend Services",
        "SQLAlchemy",
        "PostgreSQL",
        "ChromaDB",
        "Redis",
        "dbt-core",
        "SQLite",
        "Docker",
        "Docker Compose",
        "GitHub Actions",
        "CI/CD Pipelines",
        "Streamlit",
      ],
    },
    {
      title: "Evaluation, Monitoring and Analytics",
      items: [
        "RAGAS",
        "DeepEval",
        "Langfuse",
        "LangSmith",
        "LLM Evaluation",
        "Monitoring Frameworks",
        "Cost Tracking",
        "Latency Tracking",
        "Responsible AI",
        "Guardrails",
        "Bayesian A/B Testing",
        "CUPED Variance Reduction",
      ],
    },
  ],
  experience: [
    {
      company: "AramAlgorithm.ai",
      role: "AI Red Team Tester - GenAI Evaluation, Agentic AI Reliability and Responsible AI",
      period: "Mar 2025 - Feb 2026",
      location: "Remote",
      bullets: [
        "Optimized manual AI safety validation effort by designing Python-based adversarial prompt scenarios across LLM chatbots, RAG pipelines, and agentic AI systems using Garak, PyRIT, and PromptBench.",
        "Evaluated grounded retrieval behavior, multi-agent handoffs, orchestration edge cases, and unsafe output patterns.",
        "Delivered structured evaluation reports with severity ratings, reproduction steps, impact assessments, and guardrail recommendations.",
        "Supported repeatable quality assurance practices across an 11-month remote GenAI workstream.",
      ],
    },
  ],
  featuredProjects: [
    buildProjectReference(
      "cortexAgent",
      "Production Agentic RAG Platform for SEC 10-K Research",
    ),
    buildProjectReference(
      "experimentOS",
      "Product Experimentation and SQL Metric Governance Platform",
    ),
    buildProjectReference(
      "bankingOS",
      "Trusted Agentic Banking and Fintech Operating System / Banking OS",
      "Policy-governed workflow control layer for regulated finance.",
    ),
  ],
  supportingProjects: [
    buildProjectReference("migrationLens", "Deterministic PostgreSQL migration-risk linter"),
    buildProjectReference("neuroShield", "Graph AML intelligence platform"),
    buildProjectReference("fairLend", "Fairness-first credit risk workflow"),
    buildProjectReference("modelWatch", "Production ML monitoring and drift system"),
    buildProjectReference("carbonLedgerX", "Climate commitment intelligence platform"),
  ],
  education: {
    school: "Vellore Institute of Technology",
    degree: "Integrated M.Tech in Computer Science and Engineering, Business Analytics",
    period: "Jun 2020 - Sep 2025",
    gpa: "8.03/10.0",
  },
  certificationsAndPrograms: [
    "McKinsey.org Forward Program - Selected Learner",
    "LangChain and Agentic AI - DeepLearning.AI",
    "AWS Cloud Essentials",
    "Cisco Data Analytics Essentials",
  ],
};

export function getResumeData(): ResumeResource {
  const absolutePath = path.join(process.cwd(), "public", "resume", resumeFileName);
  const isAvailable = existsSync(absolutePath);

  return {
    fileName: resumeFileName,
    routeHref: resumePageHref,
    pdfHref: isAvailable ? resumePdfHref : null,
    href: isAvailable ? resumePdfHref : null,
    isAvailable,
    isPdfAvailable: isAvailable,
    previewImage: assets.resumeScroll,
    fallbackMessage: "Resume PDF will be available soon.",
    highlights: [
      "Production experience in LLM evaluation, agentic workflows, and RAG reliability.",
      "Portfolio systems spanning SEC research, experimentation, fintech controls, and monitoring.",
      "Focused on disciplined architecture, testing, deployment, and responsible AI execution.",
    ],
  };
}

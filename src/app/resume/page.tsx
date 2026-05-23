import type { Metadata } from "next";

import { ResumeView } from "@/components/ResumeView";
import { getResumeData, resumePageData } from "@/data/resume";

export const metadata: Metadata = {
  title: "Resume | Yaswanth Kumar Akkireddy",
  description:
    "AI/GenAI Engineer resume focused on Agentic AI, RAG, LLM Evaluation, Data Operations, and Workflow Automation.",
};

export default function ResumePage() {
  const resumeResource = getResumeData();

  return <ResumeView resource={resumeResource} resume={resumePageData} />;
}

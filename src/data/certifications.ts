export type CertificationEntry = {
  id: string;
  name: string;
  issuer: string;
  accent: string;
};

export const certifications: CertificationEntry[] = [
  {
    id: "aws-cloud-essentials",
    name: "AWS Cloud Essentials",
    issuer: "AWS",
    accent: "starlight",
  },
  {
    id: "sap-successfactors",
    name: "SAP SuccessFactors",
    issuer: "SAP",
    accent: "starlight",
  },
  {
    id: "cisco-data-analytics-essentials",
    name: "Cisco Data Analytics Essentials",
    issuer: "Cisco",
    accent: "starlight",
  },
  {
    id: "langchain-agentic-ai",
    name: "LangChain and Agentic AI",
    issuer: "DeepLearning.AI",
    accent: "starlight",
  },
  {
    id: "mckinsey-forward",
    name: "McKinsey.org Forward Program - Selected Learner",
    issuer: "McKinsey.org",
    accent: "starlight",
  },
];

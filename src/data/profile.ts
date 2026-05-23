import { assets } from "@/data/assets";

export type NavigationLink = {
  label: string;
  href: `#${string}`;
};

export type SocialLink = {
  label: string;
  href: string;
};

export const profile = {
  fullName: "Yaswanth Kumar Akkireddy",
  shortName: "Yaswanth",
  role: "AI Engineer",
  location: "Bengaluru, India",
  email: "yashwanth961k@gmail.com",
  phone: "+91 88673 19189",
  github: "https://github.com/yaswankum2622-code",
  linkedin: "https://www.linkedin.com/in/yaswanth-kumar-a-450500274",
  resumePath: "/resume/Yaswanth_Kumar_Akkireddy_Resume.pdf",
  summary:
    "AI engineer focused on agentic systems, evaluation, RAG, model reliability, and regulated workflow automation.",
  heroImage: assets.heroCover,
  portraitImage: assets.portrait,
  openToWorkImage: assets.openToWork,
} as const;

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "Email", href: `mailto:${profile.email}` },
];

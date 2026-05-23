export type StoryChapter = {
  id: string;
  navLabel: string;
  title: string;
  eyebrow: string;
  mood: string;
  accent: string;
  description: string;
  transitionStyle: string;
};

export const storyChapters: StoryChapter[] = [
  {
    id: "entrance",
    navLabel: "Entrance",
    title: "Entrance",
    eyebrow: "Closed Gate",
    mood: "Closed gate, silence before the journey",
    accent: "Deep black and red",
    description:
      "The story begins in stillness, with a restrained opening that prepares the viewer for a disciplined portfolio journey.",
    transitionStyle: "Shoji doors opening",
  },
  {
    id: "cherry-blossom-dawn",
    navLabel: "Hero",
    title: "Cherry Blossom Dawn",
    eyebrow: "Identity Reveal",
    mood: "Beginning. Identity reveal. Cherry petals. Red-orange dawn.",
    accent: "Cherry, white, red, orange",
    description:
      "This chapter introduces Yaswanth through light, motion, and contrast, revealing the person behind the work.",
    transitionStyle: "Petals and red slash",
  },
  {
    id: "about-me",
    navLabel: "About",
    title: "Scholar-Warrior Path",
    eyebrow: "About Me",
    mood: "Warm amber reflection, discipline, and confident direction.",
    accent: "Amber, parchment, dark orange",
    description:
      "The about section should feel thoughtful and grounded, presenting background, intent, and discipline without losing atmosphere.",
    transitionStyle: "Warm mist reveal",
  },
  {
    id: "skills-forge",
    navLabel: "Skills",
    title: "Forging the Blade",
    eyebrow: "Skills Forge",
    mood: "Every skill is shaped by real systems, evaluation, deployment, and debugging.",
    accent: "Forge orange and red",
    description:
      "Skills are framed as forged capability, with heat, craft, and repetition replacing a generic list of technologies.",
    transitionStyle: "Fire line sweep",
  },
  {
    id: "experience-timeline",
    navLabel: "Experience",
    title: "Red Moon Discipline",
    eyebrow: "Experience Timeline",
    mood: "Professional discipline, reliability work, and steady execution under pressure.",
    accent: "Crimson and black",
    description:
      "Experience should read like a disciplined march through production work, safety evaluation, and operational rigor.",
    transitionStyle: "Vertical timeline draw",
  },
  {
    id: "project-arsenal",
    navLabel: "Projects",
    title: "Systems Built in Battle",
    eyebrow: "Project Arsenal",
    mood:
      "Production-grade AI, data, MLOps, fintech, climate, and migration systems - each built with architecture, evaluation, and deployment discipline.",
    accent: "Dark red, steel, orange glow",
    description:
      "Projects are displayed as a curated arsenal of systems, each with clear purpose, tension, and outcome.",
    transitionStyle: "Card reveal and slash",
  },
  {
    id: "active-forge",
    navLabel: "Active Forge",
    title: "Banking OS Under Construction",
    eyebrow: "Active Forge",
    mood: "Gold-orange forge energy around an honest in-progress build.",
    accent: "Gold and orange",
    description:
      "This chapter highlights ongoing work and evolving ideas, showing that the portfolio is still alive and advancing.",
    transitionStyle: "Pulse and construction glow",
  },
  {
    id: "certifications",
    navLabel: "Certifications",
    title: "Stars Collected",
    eyebrow: "Certifications",
    mood: "Dark sky, calm achievement, and steady capability.",
    accent: "Blue-white and soft gold",
    description:
      "Certifications appear like stars in the sky, supporting the main narrative without overpowering it.",
    transitionStyle: "Constellation reveal",
  },
  {
    id: "open-to-work",
    navLabel: "Open to Work",
    title: "Ready for New Missions",
    eyebrow: "Open to Work",
    mood: "Golden dawn, confidence, and availability for the next mission.",
    accent: "Gold, green, white",
    description:
      "The portfolio turns outward here, inviting the next opportunity with clarity, confidence, and warmth.",
    transitionStyle: "Light reveal",
  },
  {
    id: "contact",
    navLabel: "Contact",
    title: "Let the Next Story Begin",
    eyebrow: "Contact After Rain",
    mood: "Calm blue rain, quiet confidence, and a clear invitation to reach out.",
    accent: "Blue-white, mist",
    description:
      "The closing contact chapter should feel quiet and resolved, ending the story while leaving the next conversation open.",
    transitionStyle: "Rain fade",
  },
];

"use client";

import { motion, useReducedMotion } from "motion/react";

import { AnimatedTextReveal } from "@/components/AnimatedTextReveal";
import { SafeImage } from "@/components/SafeImage";
import { StorySection } from "@/components/StorySection";
import { assets } from "@/data/assets";
import { education } from "@/data/experience";
import { profile } from "@/data/profile";
import type { StoryChapter } from "@/data/storyChapters";

type AboutProps = {
  chapter: StoryChapter;
};

const aboutParagraphs = [
  "AI Engineer building production-grade GenAI, RAG, agentic AI, ML, and analytics systems. I approach every system with discipline, research, structure, and execution.",
  `Based in ${profile.location}. Open to AI Engineer, Data Scientist, Data Analyst, Product Analyst, Business Analyst, and ML Engineer roles across AI, fintech, SaaS, analytics, and product teams.`,
];

const aboutChips = [
  "Python",
  "LangGraph",
  "LangChain",
  "FastAPI",
  "Streamlit",
  "SQL",
  "RAG",
  "Agentic AI",
  "AI Red Teaming",
];

export function About({ chapter }: AboutProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <StorySection
      id="about"
      chapterNumber={2}
      title={chapter.title}
      eyebrow={chapter.eyebrow}
      mood={chapter.mood}
      accent={chapter.accent}
      backgroundType="amber-scholar"
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(16rem,22rem)_minmax(0,1fr)] lg:items-start">
        <motion.div
          className="relative overflow-hidden border border-[rgba(245,158,11,0.26)] bg-black/28 shadow-[0_24px_60px_rgba(0,0,0,0.24)]"
          initial={prefersReducedMotion ? false : { opacity: 0, x: -36, scale: 0.98 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative aspect-[4/5]">
            <SafeImage
              src={assets.educationTemple || assets.portrait}
              alt="About section atmosphere"
              fill
              sizes="(min-width: 1024px) 24rem, 100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.64)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-black/34 px-4 py-3 text-[0.72rem] tracking-[0.18em] text-white/74 uppercase">
              Bengaluru, India
            </div>
          </div>
        </motion.div>

        <motion.div
          className="space-y-6"
          initial={prefersReducedMotion ? false : { opacity: 0, x: 28 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.82, delay: prefersReducedMotion ? 0 : 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-medium tracking-[0.22em] text-[var(--gold)] uppercase">About Me</p>

          <div className="space-y-5 text-base leading-8 text-white/80">
            {aboutParagraphs.map((paragraph, index) => (
              <p key={paragraph}>
                <AnimatedTextReveal text={paragraph} delay={index * 0.08} />
              </p>
            ))}
          </div>

          <motion.div
            className="border border-[rgba(245,158,11,0.22)] bg-black/32 p-5"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.72, delay: prefersReducedMotion ? 0 : 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-medium tracking-[0.2em] text-[var(--forge-orange)] uppercase">
              Education
            </p>
            <div className="mt-3 space-y-2 text-white/82">
              <p className="text-lg font-semibold">{education.degree}</p>
              <p className="text-sm uppercase tracking-[0.14em] text-white/58">{education.school}</p>
              <p className="text-sm text-white/72">GPA: 8.03/10.0</p>
              <p className="text-sm text-white/72">{education.period}</p>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-2 pt-1"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, delay: prefersReducedMotion ? 0 : 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            {aboutChips.map((chip, index) => (
              <motion.span
                key={chip}
                className="border border-[rgba(245,158,11,0.22)] bg-black/26 px-3 py-2 text-xs tracking-[0.14em] text-white/82 uppercase"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.45,
                  delay: prefersReducedMotion ? 0 : 0.28 + index * 0.03,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {chip}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </StorySection>
  );
}

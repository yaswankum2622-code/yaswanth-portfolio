"use client";

import { motion, useReducedMotion } from "motion/react";

import { AnimatedTextReveal } from "@/components/AnimatedTextReveal";
import { SafeImage } from "@/components/SafeImage";
import { StorySection } from "@/components/StorySection";
import { assets } from "@/data/assets";
import type { StoryChapter } from "@/data/storyChapters";

type AboutProps = {
  chapter: StoryChapter;
};

const aboutParagraphs = [
  "I am Yaswanth Kumar Akkireddy, an AI Engineer who likes turning complex problems into intelligent, usable systems.",
  "I do not build projects just to fill a portfolio. I build them like complete systems, with data pipelines, AI agents, dashboards, evaluations, safety checks, explainability, and real-world use cases. Whether it is financial research, AML detection, responsible credit scoring, ML monitoring, experimentation analytics, climate intelligence, or database migration risk analysis, I try to understand the problem deeply and then design something that feels practical, structured, and production-ready.",
  "My strength is connecting different worlds: AI engineering, analytics, product thinking, compliance, MLOps, and storytelling. I like building systems that are not only technically strong, but also easy to understand, visually clear, and useful for decision-making.",
  "I work with Python, LangGraph, LangChain, RAG, GenAI, FastAPI, Streamlit, SQL, ML models, evaluation frameworks, and deployment workflows. My focus is on building AI systems that can be tested, explained, improved, and trusted.",
  "For me, every project is like a forge: raw ideas enter, and a structured system comes out.",
];

const focusPoints = [
  "System thinking over demo thinking",
  "Production structure over one-off prototypes",
  "Clarity, trust, and explainability in every build",
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
      image={assets.activeForge}
      imagePosition="center-right"
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(18rem,25rem)_minmax(0,1fr)] lg:items-start">
        <motion.div
          className="relative overflow-hidden border border-[rgba(245,158,11,0.2)] bg-black/34 shadow-[0_24px_70px_rgba(0,0,0,0.26)]"
          initial={prefersReducedMotion ? false : { opacity: 0, x: -30, scale: 0.985 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.24 }}
          transition={{ duration: 0.84, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative aspect-[4/5]">
            <SafeImage
              src={assets.activeForge}
              alt="About chapter atmosphere"
              fill
              quality={96}
              sizes="(min-width: 1024px) 25rem, 100vw"
              className="object-cover object-[70%_50%]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.78)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-black/44 px-5 py-4">
              <p className="text-[0.68rem] tracking-[0.2em] text-[var(--gold)] uppercase">
                Chapter 02 atmosphere
              </p>
              <p className="mt-2 text-sm leading-6 text-white/76">
                Thoughtful systems, calm execution, and disciplined engineering.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="space-y-6"
          initial={prefersReducedMotion ? false : { opacity: 0, x: 24 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.24 }}
          transition={{ duration: 0.82, delay: prefersReducedMotion ? 0 : 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-medium tracking-[0.22em] text-[var(--gold)] uppercase">
            About Me
          </p>

          <div className="space-y-5 border border-[rgba(245,158,11,0.14)] bg-[linear-gradient(180deg,rgba(12,10,8,0.62)_0%,rgba(9,8,7,0.82)_100%)] p-5 shadow-[0_18px_52px_rgba(0,0,0,0.18)] sm:p-6">
            {aboutParagraphs.map((paragraph, index) => (
              <p key={paragraph} className="text-base leading-8 text-white/78">
                <AnimatedTextReveal text={paragraph} delay={index * 0.05} />
              </p>
            ))}
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {focusPoints.map((point, index) => (
              <motion.div
                key={point}
                className="border border-[rgba(245,158,11,0.16)] bg-black/28 px-4 py-4 text-sm leading-7 text-white/74"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.46,
                  delay: prefersReducedMotion ? 0 : 0.12 + index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {point}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </StorySection>
  );
}

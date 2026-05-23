"use client";

import { motion, useReducedMotion } from "motion/react";

import { AnimatedTextReveal } from "@/components/AnimatedTextReveal";
import { SafeImage } from "@/components/SafeImage";
import { StorySection } from "@/components/StorySection";
import { assets } from "@/data/assets";
import { education } from "@/data/experience";
import type { StoryChapter } from "@/data/storyChapters";

type EducationProps = {
  chapter: StoryChapter;
};

const educationHighlights = [
  "Computer science depth paired with business analytics perspective.",
  "Built a foundation across machine learning, NLP, algorithms, statistics, and data systems.",
  "Developed the research discipline that now shapes production AI, analytics, and workflow design.",
];

export function Education({ chapter }: EducationProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <StorySection
      id="education"
      chapterNumber={3}
      title={chapter.title}
      eyebrow={chapter.eyebrow}
      mood={chapter.mood}
      accent={chapter.accent}
      backgroundType="amber-scholar"
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,24rem)] lg:items-center">
        <motion.div
          className="space-y-6"
          initial={prefersReducedMotion ? false : { opacity: 0, x: -28 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.24 }}
          transition={{ duration: 0.82, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-medium tracking-[0.22em] text-[var(--gold)] uppercase">Education</p>

          <div className="space-y-4 border border-[rgba(245,158,11,0.22)] bg-black/30 p-5 shadow-[0_24px_60px_rgba(0,0,0,0.18)] sm:p-6">
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold text-white">{education.degree}</h3>
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm tracking-[0.08em] text-white/62 uppercase">
                <span>{education.school}</span>
                <span>{education.location}</span>
                <span>{education.period}</span>
                <span>GPA 8.03 / 10.0</span>
              </div>
            </div>

            <div className="space-y-4 text-base leading-8 text-white/78">
              <p>
                <AnimatedTextReveal
                  text="The foundation behind the portfolio comes from an integrated path across engineering, analytics, and disciplined problem solving."
                  delay={0}
                />
              </p>
              <p>
                <AnimatedTextReveal
                  text="This academic base shaped how I design AI systems today: grounded in research, measurable in evaluation, and practical in execution."
                  delay={0.08}
                />
              </p>
            </div>
          </div>

          <div className="grid gap-3">
            {educationHighlights.map((item, index) => (
              <motion.div
                key={item}
                className="border border-white/8 bg-black/24 px-4 py-3 text-sm leading-7 text-white/76"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.48,
                  delay: prefersReducedMotion ? 0 : 0.16 + index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative overflow-hidden border border-[rgba(245,158,11,0.22)] bg-black/30 shadow-[0_24px_70px_rgba(0,0,0,0.24)]"
          initial={prefersReducedMotion ? false : { opacity: 0, x: 30, scale: 0.98 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.84, delay: prefersReducedMotion ? 0 : 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative aspect-[4/5]">
            <SafeImage
              src={assets.scholarPath}
              alt="Education journey atmosphere"
              fill
              quality={94}
              sizes="(min-width: 1024px) 24rem, 100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.10)_0%,rgba(0,0,0,0.68)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-black/42 px-4 py-4">
              <p className="text-[0.68rem] tracking-[0.18em] text-[var(--gold)] uppercase">Research to execution</p>
              <p className="mt-2 text-sm leading-6 text-white/76">
                Technical depth, business context, and disciplined systems thinking shaped together.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </StorySection>
  );
}

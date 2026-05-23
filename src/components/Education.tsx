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

const educationPillars = [
  {
    title: "Engineering Foundation",
    description:
      "Built depth across algorithms, machine learning, NLP, databases, statistics, and full-stack problem solving.",
  },
  {
    title: "Analytics Perspective",
    description:
      "The business analytics specialization sharpened how I think about measurement, decision-making, experimentation, and practical outcomes.",
  },
  {
    title: "Portfolio Discipline",
    description:
      "Academic rigor became execution discipline, shaping how I now design AI systems that are testable, structured, and production-minded.",
  },
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
      image={assets.scholarPath}
      imagePosition="center"
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.04fr)_minmax(18rem,25rem)] lg:items-stretch">
        <motion.div
          className="space-y-6"
          initial={prefersReducedMotion ? false : { opacity: 0, x: -28 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.24 }}
          transition={{ duration: 0.82, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-medium tracking-[0.22em] text-[var(--gold)] uppercase">
            Education
          </p>

          <div className="border border-[rgba(245,158,11,0.2)] bg-[linear-gradient(180deg,rgba(14,11,8,0.72)_0%,rgba(10,8,7,0.88)_100%)] p-6 shadow-[0_22px_64px_rgba(0,0,0,0.22)]">
            <div className="space-y-4 border-b border-white/10 pb-5">
              <h3 className="font-heading text-3xl tracking-[0.04em] text-white sm:text-4xl">
                {education.degree}
              </h3>
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm tracking-[0.08em] text-white/62 uppercase">
                <span>{education.school}</span>
                <span>{education.location}</span>
                <span>{education.period}</span>
                <span>GPA {education.details[0].replace("GPA: ", "")}</span>
              </div>
            </div>

            <div className="space-y-4 pt-5 text-base leading-8 text-white/78">
              <p>
                <AnimatedTextReveal
                  text="My academic path gave me more than technical coverage. It built the habit of studying systems carefully, understanding tradeoffs, and translating theory into something useful."
                  delay={0}
                />
              </p>
              <p>
                <AnimatedTextReveal
                  text="That combination of engineering and business analytics now shapes how I build AI products: grounded in research, aware of decision context, and structured for production reality."
                  delay={0.08}
                />
              </p>
            </div>
          </div>

          <div className="grid gap-3">
            {educationPillars.map((item, index) => (
              <motion.article
                key={item.title}
                className="border border-[rgba(245,158,11,0.12)] bg-black/26 px-5 py-4"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{
                  duration: 0.46,
                  delay: prefersReducedMotion ? 0 : 0.14 + index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <p className="text-[0.72rem] tracking-[0.18em] text-[var(--gold)] uppercase">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-7 text-white/72">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative overflow-hidden border border-[rgba(245,158,11,0.2)] bg-black/30 shadow-[0_24px_70px_rgba(0,0,0,0.24)]"
          initial={prefersReducedMotion ? false : { opacity: 0, x: 30, scale: 0.985 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.84, delay: prefersReducedMotion ? 0 : 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative aspect-[4/5] lg:h-full lg:aspect-auto">
            <SafeImage
              src={assets.scholarPath}
              alt="Education chapter atmosphere"
              fill
              quality={96}
              sizes="(min-width: 1024px) 25rem, 100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.76)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-black/46 px-5 py-5">
              <p className="text-[0.68rem] tracking-[0.18em] text-[var(--gold)] uppercase">
                Foundation of study
              </p>
              <p className="mt-2 text-sm leading-7 text-white/76">
                A long-form academic chapter that built technical depth, analytical patience, and disciplined execution.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </StorySection>
  );
}

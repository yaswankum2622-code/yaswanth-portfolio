"use client";

import { motion, useReducedMotion } from "motion/react";

import { SafeImage } from "@/components/SafeImage";
import { StorySection } from "@/components/StorySection";
import { experience } from "@/data/experience";
import type { StoryChapter } from "@/data/storyChapters";

type ExperienceProps = {
  chapter: StoryChapter;
};

const roleSignals = [
  "AI Engineering function",
  "Remote workstream",
  "Structured safety and reliability evaluation",
];

export function Experience({ chapter }: ExperienceProps) {
  const prefersReducedMotion = useReducedMotion();
  const primaryExperience = experience[0];

  return (
    <StorySection
      id="experience"
      chapterNumber={5}
      title={chapter.title}
      eyebrow={chapter.eyebrow}
      mood={chapter.mood}
      accent={chapter.accent}
      backgroundType="red-moon"
      image={primaryExperience.image}
      imagePosition="center-right"
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(18rem,24rem)] lg:items-start">
        <motion.div
          className="space-y-6"
          initial={prefersReducedMotion ? false : { opacity: 0, x: -28 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.24 }}
          transition={{ duration: 0.82, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="border border-[rgba(200,32,45,0.22)] bg-[linear-gradient(180deg,rgba(11,7,8,0.78)_0%,rgba(8,6,7,0.94)_100%)] p-6 shadow-[0_24px_64px_rgba(0,0,0,0.22)]">
            <div className="space-y-4 border-b border-white/10 pb-5">
              <p className="text-[0.72rem] tracking-[0.18em] text-[var(--forge-orange)] uppercase">
                {primaryExperience.company}
              </p>
              <h3 className="font-heading text-3xl tracking-[0.04em] text-white sm:text-4xl">
                {primaryExperience.role}
              </h3>
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm tracking-[0.08em] text-white/62 uppercase">
                <span>{primaryExperience.period}</span>
                <span>{primaryExperience.location}</span>
              </div>
              <p className="text-base leading-8 text-white/78">{primaryExperience.summary}</p>
            </div>

            <div className="mt-5 grid gap-4">
              {primaryExperience.achievements.map((bullet, index) => (
                <motion.div
                  key={bullet}
                  className="flex gap-4 border border-white/8 bg-black/24 px-4 py-4"
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.14 }}
                  transition={{
                    duration: 0.44,
                    delay: prefersReducedMotion ? 0 : index * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center border border-[rgba(200,32,45,0.28)] bg-[rgba(200,32,45,0.12)] text-[0.65rem] tracking-[0.12em] text-white uppercase">
                    {`0${index + 1}`}
                  </span>
                  <p className="text-sm leading-7 text-white/76">{bullet}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {roleSignals.map((item, index) => (
              <motion.div
                key={item}
                className="border border-[rgba(200,32,45,0.14)] bg-black/26 px-4 py-4 text-sm leading-7 text-white/74"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{
                  duration: 0.42,
                  delay: prefersReducedMotion ? 0 : 0.1 + index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial={prefersReducedMotion ? false : { opacity: 0, x: 26 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.82, delay: prefersReducedMotion ? 0 : 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative overflow-hidden border border-[rgba(200,32,45,0.18)] bg-black/28 shadow-[0_24px_64px_rgba(0,0,0,0.24)]">
            <div className="relative aspect-[4/5]">
              <SafeImage
                src={primaryExperience.image}
                alt="Experience chapter atmosphere"
                fill
                quality={96}
                sizes="(min-width: 1024px) 24rem, 100vw"
                className="object-cover object-center opacity-88"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.06)_0%,rgba(0,0,0,0.76)_100%)]" />
            </div>
          </div>

          <div className="border border-[rgba(200,32,45,0.16)] bg-[linear-gradient(180deg,rgba(12,8,8,0.82)_0%,rgba(8,6,6,0.94)_100%)] p-5">
            <p className="text-[0.68rem] tracking-[0.18em] text-[var(--forge-orange)] uppercase">
              Official role context
            </p>
            <p className="mt-3 text-sm leading-7 text-white/74">
              The appointment and experience letters establish the role as AI Red Team Engineer, working remotely with responsibility across AI safety testing, evidence generation, and measurable evaluation design.
            </p>
          </div>
        </motion.div>
      </div>
    </StorySection>
  );
}

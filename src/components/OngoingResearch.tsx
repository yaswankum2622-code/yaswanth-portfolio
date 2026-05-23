"use client";

import { motion, useReducedMotion } from "motion/react";

import { SafeImage } from "@/components/SafeImage";
import { StorySection } from "@/components/StorySection";
import { TechChip } from "@/components/TechChip";
import { assets } from "@/data/assets";
import { projects } from "@/data/projects";
import type { StoryChapter } from "@/data/storyChapters";

type OngoingResearchProps = {
  chapter: StoryChapter;
};

const progressSteps = [
  "Architecture",
  "Core Engine",
  "Agent Layer",
  "Compliance Layer",
  "UI",
  "Deployment",
];

const activeTech = ["Python", "FastAPI", "LangGraph", "PostgreSQL", "Streamlit", "GenAI"];

export function OngoingResearch({ chapter }: OngoingResearchProps) {
  const prefersReducedMotion = useReducedMotion();
  const bankingProject = projects.find((project) => project.id === "bankingOS");
  const imageSource = bankingProject?.image || assets.heroCover || assets.fallbackFog;

  return (
    <StorySection
      id="active-forge"
      chapterNumber={6}
      title={chapter.title}
      eyebrow={chapter.eyebrow}
      mood={chapter.mood}
      accent={chapter.accent}
      backgroundType="active-gold"
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(18rem,26rem)_minmax(0,1fr)] lg:items-stretch">
        <motion.div
          className="relative overflow-hidden border border-[rgba(249,115,22,0.2)] bg-black/28 shadow-[0_24px_70px_rgba(0,0,0,0.24)]"
          initial={prefersReducedMotion ? false : { opacity: 0, x: -34 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.82, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative aspect-[4/5] lg:aspect-auto lg:h-full">
            <SafeImage
              src={imageSource}
              alt="Banking OS atmosphere"
              fill
              sizes="(min-width: 1024px) 26rem, 100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.7)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_28%,rgba(249,115,22,0.22),transparent_30%)]" />
          </div>
        </motion.div>

        <motion.div
          className="space-y-6 border border-[rgba(249,115,22,0.16)] bg-[linear-gradient(180deg,rgba(10,10,10,0.76)_0%,rgba(18,14,10,0.92)_100%)] p-5 shadow-[0_22px_64px_rgba(0,0,0,0.18)] backdrop-blur-sm sm:p-6"
          initial={prefersReducedMotion ? false : { opacity: 0, x: 28 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.84, delay: prefersReducedMotion ? 0 : 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 border border-[rgba(249,115,22,0.22)] bg-[rgba(249,115,22,0.08)] px-3 py-2 text-[0.68rem] tracking-[0.18em] text-white uppercase">
              <motion.span
                className="size-2 rounded-full bg-[var(--gold)] shadow-[0_0_14px_rgba(234,179,8,0.72)]"
                animate={prefersReducedMotion ? undefined : { scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />
              Actively Building
            </span>
            <span className="border border-white/10 bg-white/[0.03] px-3 py-2 text-[0.68rem] tracking-[0.18em] text-white/68 uppercase">
              Architecture and Core Systems in Progress
            </span>
          </div>

          <div className="space-y-4">
            <h3 className="font-heading text-3xl tracking-[0.04em] text-white sm:text-4xl">
              {bankingProject?.title ?? "Banking OS"}
            </h3>
            <p className="text-base leading-8 text-white/78">
              Banking OS is an ongoing intelligent banking infrastructure project integrating
              GenAI agents, policy-governed workflows, compliance automation, fraud detection, and
              audit-ready financial operations.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {activeTech.map((tech, index) => (
              <motion.div
                key={tech}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{
                  duration: 0.4,
                  delay: prefersReducedMotion ? 0 : 0.12 + index * 0.03,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <TechChip label={tech} />
              </motion.div>
            ))}
          </div>

          <div className="space-y-3 border-t border-white/8 pt-5">
            <p className="text-[0.7rem] tracking-[0.18em] text-[var(--forge-orange)] uppercase">
              Progress pathway
            </p>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {progressSteps.map((step, index) => (
                <motion.div
                  key={step}
                  className="border border-[rgba(249,115,22,0.14)] bg-black/22 px-4 py-3 text-sm text-white/76"
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{
                    duration: 0.42,
                    delay: prefersReducedMotion ? 0 : 0.18 + index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div className="mb-3 flex items-center gap-3">
                    <motion.span
                      className="size-2 rounded-full bg-[var(--forge-orange)]"
                      animate={
                        prefersReducedMotion
                          ? undefined
                          : { opacity: [0.4, 1, 0.4], scale: [1, 1.18, 1] }
                      }
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: index * 0.18,
                      }}
                    />
                    <span className="text-[0.66rem] tracking-[0.16em] text-white/48 uppercase">
                      Stage {index + 1}
                    </span>
                  </div>
                  <p>{step}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </StorySection>
  );
}

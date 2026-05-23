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
const capabilityNotes = [
  "Policy-governed workflow orchestration",
  "Compliance automation and evidence capture",
  "Fraud-aware operational intelligence",
];

export function OngoingResearch({ chapter }: OngoingResearchProps) {
  const prefersReducedMotion = useReducedMotion();
  const bankingProject = projects.find((project) => project.id === "bankingOS");

  return (
    <StorySection
      id="active-forge"
      chapterNumber={7}
      title={chapter.title}
      eyebrow={chapter.eyebrow}
      mood={chapter.mood}
      accent={chapter.accent}
      backgroundType="active-gold"
      image={assets.bankingOSUpscaled}
      imagePosition="center"
    >
      <div className="relative grid gap-8 lg:grid-cols-[minmax(18rem,27rem)_minmax(0,1fr)] lg:items-stretch">
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute left-[12%] top-8 h-36 w-36 rounded-full bg-[rgba(249,115,22,0.12)] blur-3xl"
            animate={prefersReducedMotion ? undefined : { opacity: [0.5, 0.9, 0.5], scale: [1, 1.06, 1] }}
            transition={{ duration: 4.4, repeat: prefersReducedMotion ? 0 : Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute right-[8%] bottom-10 h-44 w-44 rounded-full bg-[rgba(234,179,8,0.12)] blur-3xl"
            animate={prefersReducedMotion ? undefined : { opacity: [0.35, 0.72, 0.35], scale: [1, 1.08, 1] }}
            transition={{ duration: 5.2, repeat: prefersReducedMotion ? 0 : Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
        </div>

        <motion.div
          className="relative overflow-hidden border border-[rgba(249,115,22,0.2)] bg-black/28 shadow-[0_24px_70px_rgba(0,0,0,0.24)]"
          initial={prefersReducedMotion ? false : { opacity: 0, x: -32 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.82, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative aspect-[4/5] lg:h-full lg:aspect-auto">
            <SafeImage
              src={assets.bankingOSUpscaled}
              alt="Banking OS featured atmosphere"
              fill
              quality={96}
              sizes="(min-width: 1024px) 27rem, 100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.7)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-black/46 px-5 py-5">
              <p className="text-[0.68rem] tracking-[0.18em] text-[var(--gold)] uppercase">
                Active forge
              </p>
              <p className="mt-2 text-sm leading-7 text-white/76">
                A live system design chapter focused on trusted AI workflows for regulated financial operations.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="space-y-6 border border-[rgba(249,115,22,0.16)] bg-[linear-gradient(180deg,rgba(12,10,8,0.78)_0%,rgba(9,7,6,0.94)_100%)] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-sm sm:p-6"
          initial={prefersReducedMotion ? false : { opacity: 0, x: 28 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.84, delay: prefersReducedMotion ? 0 : 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 border border-[rgba(249,115,22,0.24)] bg-[rgba(249,115,22,0.08)] px-3 py-2 text-[0.68rem] tracking-[0.18em] text-white uppercase">
              <motion.span
                className="size-2 rounded-full bg-[var(--gold)] shadow-[0_0_14px_rgba(234,179,8,0.72)]"
                animate={prefersReducedMotion ? undefined : { scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />
              Actively Building
            </span>
            <span className="border border-white/10 bg-white/[0.03] px-3 py-2 text-[0.68rem] tracking-[0.18em] text-white/66 uppercase">
              Architecture and Core Systems in Progress
            </span>
          </div>

          <div className="space-y-4">
            <h3 className="font-heading text-3xl tracking-[0.04em] text-white sm:text-4xl">
              {bankingProject?.title ?? "Banking OS"}
            </h3>
            <p className="text-base leading-8 text-white/78">
              Banking OS is an ongoing intelligent banking infrastructure project integrating GenAI agents, policy-governed workflows, compliance automation, fraud detection, and audit-ready financial operations.
            </p>
            <p className="text-sm leading-7 text-white/66">
              The direction is powerful on purpose, but the presentation stays honest: this is an active build, with architecture, control layers, and system orchestration being shaped in a structured sequence rather than presented as a finished product.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {capabilityNotes.map((item, index) => (
              <motion.div
                key={item}
                className="border border-[rgba(249,115,22,0.14)] bg-black/24 px-4 py-4 text-sm leading-7 text-white/74"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{
                  duration: 0.42,
                  delay: prefersReducedMotion ? 0 : 0.12 + index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {item}
              </motion.div>
            ))}
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
                  delay: prefersReducedMotion ? 0 : 0.16 + index * 0.03,
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
                      animate={prefersReducedMotion ? undefined : { opacity: [0.4, 1, 0.4], scale: [1, 1.18, 1] }}
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

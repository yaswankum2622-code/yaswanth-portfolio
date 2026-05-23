"use client";

import { Download, Mail, Network } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { StorySection } from "@/components/StorySection";
import { buttonVariants } from "@/components/ui/button";
import { profile } from "@/data/profile";
import type { StoryChapter } from "@/data/storyChapters";
import { cn } from "@/lib/utils";

type OpenToWorkProps = {
  chapter: StoryChapter;
  resumeHref: string;
};

const roleTargets = [
  "AI Engineer",
  "Data Scientist",
  "Data Analyst",
  "Product Analyst",
  "Business Analyst",
  "ML Engineer",
];

export function OpenToWork({ chapter, resumeHref }: OpenToWorkProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <StorySection
      id="open-to-work"
      chapterNumber={8}
      title={chapter.title}
      eyebrow={chapter.eyebrow}
      mood={chapter.mood}
      accent={chapter.accent}
      backgroundType="golden-dawn"
      image={profile.openToWorkImage}
      imagePosition="center"
      className="text-center"
    >
      <div className="mx-auto max-w-4xl space-y-8">
        <motion.div
          className="space-y-4"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.24 }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-3 border border-[rgba(74,222,128,0.2)] bg-[rgba(74,222,128,0.08)] px-4 py-2 text-[0.72rem] tracking-[0.18em] text-white uppercase">
            <motion.span
              className="size-2 rounded-full bg-[var(--green-life)] shadow-[0_0_14px_rgba(74,222,128,0.65)]"
              animate={prefersReducedMotion ? undefined : { scale: [1, 1.2, 1], opacity: [0.75, 1, 0.75] }}
              transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
            Available for New Opportunities
          </div>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-white/78">
            I am open to building and scaling intelligent systems across AI, analytics, product,
            fintech, and workflow-heavy teams that care about shipping responsibly.
          </p>
          <p className="text-sm tracking-[0.18em] text-white/58 uppercase">
            Bengaluru &middot; India &middot; Remote &middot; Global
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {roleTargets.map((role, index) => (
            <motion.span
              key={role}
              className="border border-[rgba(255,255,255,0.12)] bg-black/24 px-3 py-2 text-[0.72rem] tracking-[0.16em] text-white/82 uppercase"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.4,
                delay: prefersReducedMotion ? 0 : 0.12 + index * 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {role}
            </motion.span>
          ))}
        </div>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-3"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: prefersReducedMotion ? 0 : 0.22, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href={`mailto:${profile.email}`}
            data-slash-trigger="full"
            className={cn(
              buttonVariants({ size: "lg" }),
              "rounded-none border border-[rgba(74,222,128,0.24)] bg-[linear-gradient(135deg,rgba(74,222,128,0.18)_0%,rgba(234,179,8,0.16)_100%)] px-4 tracking-[0.12em] text-white uppercase hover:border-[rgba(234,179,8,0.38)]",
            )}
          >
            <Mail className="mr-2 size-4" />
            Send Mission Brief
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-slash-trigger="light"
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "rounded-none border-white/12 bg-black/22 px-4 tracking-[0.12em] text-white uppercase hover:border-[rgba(249,115,22,0.28)] hover:bg-white/[0.05]",
            )}
          >
            <Network className="mr-2 size-4" />
            View LinkedIn
          </a>
          <a
            href={resumeHref}
            data-slash-trigger="light"
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "rounded-none border-white/12 bg-black/22 px-4 tracking-[0.12em] text-white uppercase hover:border-[rgba(249,115,22,0.28)] hover:bg-white/[0.05]",
            )}
          >
            <Download className="mr-2 size-4" />
            Download Resume
          </a>
        </motion.div>
      </div>
    </StorySection>
  );
}

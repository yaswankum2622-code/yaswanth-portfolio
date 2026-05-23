"use client";

import { Download, Mail, Network } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { SafeImage } from "@/components/SafeImage";
import { StorySection } from "@/components/StorySection";
import { buttonVariants } from "@/components/ui/button";
import { assets } from "@/data/assets";
import { profile } from "@/data/profile";
import type { StoryChapter } from "@/data/storyChapters";
import { cn } from "@/lib/utils";

type OpenToWorkProps = {
  chapter: StoryChapter;
  resumeHref: string;
};

const hiringReasons = [
  "I build systems, not isolated demos. That means architecture, evaluation, deployment, clarity, and practical decision support are designed together.",
  "I am comfortable working across AI engineering, analytics, product context, compliance thinking, and workflow-heavy environments where reliability matters.",
  "I bring a production mindset: understand the problem deeply, structure the solution carefully, and make the result usable, testable, and trustworthy.",
];

export function OpenToWork({ chapter, resumeHref }: OpenToWorkProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <StorySection
      id="open-to-work"
      chapterNumber={9}
      title={chapter.title}
      eyebrow={chapter.eyebrow}
      mood={chapter.mood}
      accent={chapter.accent}
      backgroundType="golden-dawn"
      image={profile.openToWorkImage}
      imagePosition="center-left"
      className="text-center"
    >
      <div className="relative isolate mx-auto max-w-5xl space-y-8 overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[1.5rem]">
          <SafeImage
            src={assets.openToWork}
            alt="Open to work background atmosphere"
            fill
            quality={96}
            sizes="100vw"
            className="object-cover object-[30%_42%] opacity-42"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,6,6,0.86)_0%,rgba(10,10,10,0.48)_48%,rgba(8,8,8,0.82)_100%)]" />
        </div>

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
          <p className="mx-auto max-w-3xl text-lg leading-8 text-white/82">
            If you need someone who can move from problem framing to structured AI execution, I can help design systems that are technically strong, clearly explained, and ready for real use.
          </p>
          <p className="text-sm tracking-[0.18em] text-white/62 uppercase">
            India · Remote · Hybrid · Global
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {hiringReasons.map((reason, index) => (
            <motion.article
              key={reason}
              className="border border-[rgba(255,255,255,0.12)] bg-black/28 px-5 py-5 text-left shadow-[0_18px_48px_rgba(0,0,0,0.18)]"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{
                duration: 0.46,
                delay: prefersReducedMotion ? 0 : 0.12 + index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="text-sm leading-7 text-white/76">{reason}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-3"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: prefersReducedMotion ? 0 : 0.24, ease: [0.22, 1, 0.36, 1] }}
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
            Resume
          </a>
        </motion.div>
      </div>
    </StorySection>
  );
}

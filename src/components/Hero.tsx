"use client";

import {
  ArrowDown,
  ArrowRight,
  BriefcaseBusiness,
  FileText,
  FolderGit2,
  Mail,
  Network,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { GlowDivider } from "@/components/GlowDivider";
import { buttonVariants } from "@/components/ui/button";
import { profile } from "@/data/profile";
import type { StoryChapter } from "@/data/storyChapters";
import { cn } from "@/lib/utils";

type HeroProps = {
  chapter: StoryChapter;
  resumeHref: string;
};

const roleLine = "Software Engineer";
const heroNarrative = [
  "I am a Software Engineer shaping intelligent products where rigorous engineering meets the possibilities of modern AI.",
  "Leveraging Generative AI, LLMs, RAG, and agentic systems, I build experiences that feel seamless, dependable, and thoughtfully crafted.",
  "My work is guided by precision, clarity, and a belief that advanced technology should create lasting value in the real world.",
] as const;
const heroNotes = [
  {
    label: "Foundation",
    value: "Software Engineering",
  },
  {
    label: "Leverage",
    value: "GenAI, LLMs, RAG, Agentic Systems",
  },
  {
    label: "Standard",
    value: "Elegant, reliable, real-world execution",
  },
] as const;

const ctaButtons = [
  {
    label: "View Projects",
    href: "#projects",
    icon: ArrowRight,
    slash: "full",
    variant: "default" as const,
  },
  {
    label: "Open to Work",
    href: "#open-to-work",
    icon: BriefcaseBusiness,
    slash: "light",
    variant: "outline" as const,
  },
  {
    label: "Resume",
    href: "resume",
    icon: FileText,
    slash: "full",
    variant: "outline" as const,
  },
] as const;

const socialButtons = [
  {
    label: "GitHub",
    href: profile.github,
    icon: FolderGit2,
    external: true,
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    icon: Network,
    external: true,
  },
  {
    label: "Mail Me",
    href: `mailto:${profile.email}`,
    icon: Mail,
    external: false,
  },
] as const;

export function Hero({ chapter, resumeHref }: HeroProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative isolate min-h-screen overflow-hidden scroll-mt-24"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_28%_80%,rgba(249,115,22,0.28),transparent_28%),radial-gradient(circle_at_70%_20%,rgba(251,191,36,0.12),transparent_22%),linear-gradient(90deg,rgba(6,6,6,0.5)_0%,rgba(6,6,6,0.22)_36%,rgba(6,6,6,0.38)_100%),linear-gradient(180deg,rgba(8,5,4,0.22)_0%,rgba(7,6,6,0.44)_58%,rgba(5,5,5,0.82)_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[url('/assets/ch1-sakura.jpg')] bg-cover bg-center opacity-[0.96]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_26%,rgba(255,255,255,0.06),transparent_20%),linear-gradient(90deg,rgba(6,6,6,0.64)_0%,rgba(6,6,6,0.26)_32%,rgba(6,6,6,0.34)_70%,rgba(6,6,6,0.62)_100%)]"
      />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent via-black/15 to-[var(--ink)]" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-6 py-24 sm:px-8 lg:px-10">
        <div className="max-w-5xl space-y-7">
          <motion.p
            className="text-xs font-medium tracking-[0.26em] text-white/72 uppercase"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            Chapter 01 - Cherry Blossom Dawn
          </motion.p>

          <h1 className="font-heading text-[clamp(3.15rem,9vw,7.2rem)] leading-[0.92] tracking-[0.06em] text-white uppercase">
            <span className="flex flex-col gap-y-2 sm:gap-y-3">
              <motion.span
                className="inline-block drop-shadow-[0_12px_34px_rgba(0,0,0,0.55)]"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 24, filter: "blur(8px)" }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.8, delay: prefersReducedMotion ? 0 : 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                YASWANTH
              </motion.span>
              <motion.span
                className="inline-block bg-[linear-gradient(90deg,#fffaf4_0%,rgba(245,214,197,0.92)_42%,rgba(249,115,22,0.94)_100%)] bg-clip-text text-transparent drop-shadow-[0_12px_34px_rgba(0,0,0,0.55)]"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 24, filter: "blur(8px)" }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.88, delay: prefersReducedMotion ? 0 : 0.18, ease: [0.22, 1, 0.36, 1] }}
              >
                KUMAR AKKIREDDY
              </motion.span>
            </span>
          </h1>

          <motion.div
            className="inline-flex w-fit items-center gap-4 border border-white/14 bg-black/24 px-4 py-3 backdrop-blur-sm"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.75 }}
            transition={{ duration: 0.68, delay: prefersReducedMotion ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="h-px w-10 bg-[linear-gradient(90deg,rgba(246,122,166,0),rgba(246,122,166,0.95),rgba(249,115,22,0.95))]" />
            <span className="text-sm font-medium tracking-[0.22em] text-[var(--mist)] uppercase sm:text-base">
              {roleLine}
            </span>
            <span className="h-px w-10 bg-[linear-gradient(90deg,rgba(249,115,22,0.95),rgba(249,115,22,0.35),rgba(249,115,22,0))]" />
          </motion.div>

          <GlowDivider accent={chapter.accent} className="max-w-[220px]" />

          <motion.div
            className="relative max-w-3xl overflow-hidden border border-white/14 bg-[linear-gradient(145deg,rgba(9,7,7,0.8)_0%,rgba(9,7,7,0.4)_100%)] px-6 py-6 shadow-[0_24px_70px_rgba(0,0,0,0.26)] backdrop-blur-md sm:px-8 sm:py-8"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.74, delay: prefersReducedMotion ? 0 : 0.42, ease: [0.22, 1, 0.36, 1] }}
          >
            <span
              aria-hidden
              className="absolute left-3 top-3 h-8 w-8 border-l border-t border-[rgba(246,122,166,0.65)]"
            />
            <span
              aria-hidden
              className="absolute right-3 top-3 h-8 w-8 border-r border-t border-[rgba(249,115,22,0.65)]"
            />
            <span
              aria-hidden
              className="absolute bottom-3 left-3 h-8 w-8 border-b border-l border-[rgba(246,122,166,0.65)]"
            />
            <span
              aria-hidden
              className="absolute bottom-3 right-3 h-8 w-8 border-b border-r border-[rgba(249,115,22,0.65)]"
            />

            <div className="relative space-y-5">
              <p className="text-[0.7rem] font-medium tracking-[0.3em] text-white/56 uppercase">
                Crafted introduction
              </p>
              <div className="space-y-4">
                {heroNarrative.map((line, index) => (
                  <p
                    key={line}
                    className={cn(
                      "max-w-2xl text-base leading-8 sm:text-lg",
                      index === 0 ? "text-white/92" : "text-white/78",
                    )}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="grid max-w-4xl gap-3 sm:grid-cols-3"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.72, delay: prefersReducedMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {heroNotes.map((note, index) => (
              <motion.div
                key={note.label}
                className="relative overflow-hidden border border-white/12 bg-black/26 px-5 py-4 backdrop-blur-sm"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                whileHover={prefersReducedMotion ? undefined : { y: -3 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.48, delay: prefersReducedMotion ? 0 : 0.56 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,rgba(246,122,166,0),rgba(246,122,166,0.85),rgba(249,115,22,0.85),rgba(249,115,22,0))]"
                />
                <p className="text-[0.68rem] font-medium tracking-[0.28em] text-white/48 uppercase">
                  {note.label}
                </p>
                <p className="mt-3 text-sm leading-6 text-white/84 sm:text-[0.95rem]">
                  {note.value}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-3 pt-2"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.64 }}
            transition={{ duration: 0.74, delay: prefersReducedMotion ? 0 : 0.54, ease: [0.22, 1, 0.36, 1] }}
          >
            {ctaButtons.map((item, index) => {
              const href = item.href === "resume" ? resumeHref : item.href;

              return (
                <motion.a
                  key={item.label}
                  href={href}
                  data-slash-trigger={item.slash}
                  className={cn(
                    buttonVariants({ size: "lg", variant: item.variant }),
                    "rounded-none border px-4 tracking-[0.12em] uppercase",
                    item.variant === "default"
                      ? "border-[var(--samurai-red)] bg-[linear-gradient(135deg,rgba(200,32,45,0.94)_0%,rgba(159,22,32,0.94)_100%)] text-white hover:border-[var(--forge-orange)] hover:bg-[linear-gradient(135deg,rgba(200,32,45,1)_0%,rgba(249,115,22,0.92)_100%)]"
                      : "border-[rgba(255,255,255,0.14)] bg-black/30 text-white hover:border-[var(--forge-orange)] hover:bg-white/8",
                  )}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                  whileHover={prefersReducedMotion ? undefined : { y: -2 }}
                  whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.52, delay: prefersReducedMotion ? 0 : 0.58 + index * 0.07, ease: [0.22, 1, 0.36, 1] }}
                >
                  <item.icon className="mr-2 size-4" />
                  {item.label}
                </motion.a>
              );
            })}
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-3"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.58 }}
            transition={{ duration: 0.66, delay: prefersReducedMotion ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {socialButtons.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                data-slash-trigger="light"
                className={cn(
                  buttonVariants({ size: "lg", variant: "ghost" }),
                  "rounded-none border border-transparent px-4 tracking-[0.12em] text-white/84 uppercase hover:border-white/12 hover:bg-white/8 hover:text-white",
                )}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                whileHover={prefersReducedMotion ? undefined : { y: -2 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                viewport={{ once: true, amount: 0.58 }}
                transition={{ duration: 0.46, delay: prefersReducedMotion ? 0 : 0.84 + index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <item.icon className="mr-2 size-4" />
                {item.label}
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="flex items-center gap-3 pt-3 text-xs tracking-[0.18em] text-white/58 uppercase"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            animate={
              prefersReducedMotion
                ? undefined
                : {
                    opacity: [0.58, 0.92, 0.58],
                    y: [0, 4, 0],
                  }
            }
            viewport={{ once: true, amount: 0.6 }}
            transition={{
              duration: prefersReducedMotion ? 0.7 : 2.2,
              delay: prefersReducedMotion ? 0 : 1.05,
              ease: "easeInOut",
              repeat: prefersReducedMotion ? 0 : Number.POSITIVE_INFINITY,
              repeatDelay: prefersReducedMotion ? 0 : 0.2,
            }}
          >
            <ArrowDown className="size-4 text-[var(--forge-orange)]" />
            <span>Scroll to enter the story</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

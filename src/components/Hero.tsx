"use client";

import { useRef } from "react";

import {
  ArrowDown,
  ArrowRight,
  BriefcaseBusiness,
  FileText,
  FolderGit2,
  Mail,
  Network,
} from "lucide-react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

import { GlowDivider } from "@/components/GlowDivider";
import { useAnimationProvider } from "@/components/AnimationProvider";
import { SafeImage } from "@/components/SafeImage";
import { StorySection } from "@/components/StorySection";
import { buttonVariants } from "@/components/ui/button";
import { assets } from "@/data/assets";
import { profile } from "@/data/profile";
import type { StoryChapter } from "@/data/storyChapters";
import { cn } from "@/lib/utils";

type HeroProps = {
  chapter: StoryChapter;
  resumeHref: string;
};

const roleLine = "AI Engineer · GenAI · RAG · Agentic AI · ML";
const heroBio =
  "Building intelligent systems with Python, LangChain, LangGraph, FastAPI, Streamlit, and production-grade AI workflows. Focused on GenAI, RAG, AI agents, analytics systems, and AI safety.";

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
  const { canUseCustomCursor } = useAnimationProvider();
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const heroImageY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 70, damping: 20, mass: 0.45 });
  const smoothY = useSpring(pointerY, { stiffness: 70, damping: 20, mass: 0.45 });
  const allowPointerParallax = canUseCustomCursor && !prefersReducedMotion;

  return (
    <StorySection
      id="hero"
      chapterNumber={1}
      title={chapter.title}
      eyebrow={chapter.eyebrow}
      mood={chapter.mood}
      accent={chapter.accent}
      backgroundType="cherry-dawn"
      className="min-h-screen"
      hideHeader
    >
      <div
        ref={sectionRef}
        className="relative isolate"
        onPointerMove={
          allowPointerParallax ?
            (event) => {
              const bounds = event.currentTarget.getBoundingClientRect();
              const nextX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 26;
              const nextY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 18;
              pointerX.set(nextX);
              pointerY.set(nextY);
            }
          : undefined
        }
        onPointerLeave={
          allowPointerParallax ?
            () => {
              pointerX.set(0);
              pointerY.set(0);
            }
          : undefined
        }
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
          style={prefersReducedMotion ? undefined : { y: heroImageY }}
        >
          <motion.div
            className="absolute inset-0"
            style={allowPointerParallax ? { x: smoothX, y: smoothY } : undefined}
          >
            <SafeImage
              src={assets.cherryBlossomDawn}
              alt="Hero background atmosphere"
              fill
              priority
              quality={96}
              sizes="100vw"
              className="object-cover object-center opacity-[0.9]"
            />
          </motion.div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_78%,rgba(249,115,22,0.38),transparent_26%),radial-gradient(circle_at_74%_14%,rgba(251,191,36,0.12),transparent_22%),linear-gradient(90deg,rgba(5,5,5,0.92)_0%,rgba(10,7,6,0.6)_42%,rgba(6,6,6,0.72)_100%),linear-gradient(180deg,rgba(10,6,5,0.22)_0%,rgba(8,7,7,0.42)_58%,rgba(4,4,4,0.8)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(0,0,0,0.44)_0%,rgba(0,0,0,0.08)_42%,rgba(0,0,0,0.54)_100%)]" />
        </motion.div>

        <div className="max-w-4xl space-y-7">
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

          <motion.p
            className="max-w-3xl text-sm font-medium tracking-[0.18em] text-[var(--mist)] uppercase sm:text-base"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.75 }}
            transition={{ duration: 0.68, delay: prefersReducedMotion ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {roleLine}
          </motion.p>

          <GlowDivider accent={chapter.accent} className="max-w-[220px]" />

          <motion.p
            className="max-w-3xl text-base leading-8 text-white/82 sm:text-lg"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.74, delay: prefersReducedMotion ? 0 : 0.42, ease: [0.22, 1, 0.36, 1] }}
          >
            {heroBio}
          </motion.p>

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
              prefersReducedMotion ?
                undefined
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
    </StorySection>
  );
}

"use client";

import { useRef } from "react";

import {
  ArrowDown,
  ArrowRight,
  BriefcaseBusiness,
  Download,
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
import { useRecruiterMode } from "@/components/RecruiterModeProvider";
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

const roleLine = "AI Engineer / GenAI / RAG / Agentic AI / ML";
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
    label: "Download Resume",
    href: "resume",
    icon: Download,
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
  const { recruiterMode } = useRecruiterMode();
  const { canUseCustomCursor } = useAnimationProvider();
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const heroImageY = useTransform(scrollYProgress, [0, 1], [0, 84]);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothPointerX = useSpring(pointerX, { stiffness: 90, damping: 18, mass: 0.4 });
  const smoothPointerY = useSpring(pointerY, { stiffness: 90, damping: 18, mass: 0.4 });
  const branchX = useTransform(smoothPointerX, (value) => value * -0.45);
  const branchY = useTransform(smoothPointerY, (value) => value * -0.35);

  const enablePointerParallax = canUseCustomCursor && !prefersReducedMotion && !recruiterMode;

  const handlePointerMove: React.PointerEventHandler<HTMLDivElement> = (event) => {
    if (!enablePointerParallax) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const normalizedX = (event.clientX - rect.left) / rect.width - 0.5;
    const normalizedY = (event.clientY - rect.top) / rect.height - 0.5;

    pointerX.set(normalizedX * 18);
    pointerY.set(normalizedY * 14);
  };

  const handlePointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

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
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        className="relative isolate grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_18rem] lg:items-end"
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
          style={prefersReducedMotion || recruiterMode ? undefined : { y: heroImageY }}
        >
          <motion.div style={enablePointerParallax ? { x: smoothPointerX, y: smoothPointerY } : undefined}>
            <SafeImage
              src={assets.heroCover}
              alt="Portfolio cover atmosphere"
              fill
              priority
              sizes="100vw"
              className={cn(
                "object-cover object-[66%_48%]",
                recruiterMode
                  ? "opacity-12 sm:opacity-14 md:opacity-16 lg:opacity-18"
                  : "opacity-18 sm:opacity-20 md:opacity-24 lg:opacity-30",
              )}
            />
          </motion.div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_82%,rgba(249,115,22,0.28),transparent_30%),radial-gradient(circle_at_62%_22%,rgba(244,114,182,0.16),transparent_26%),linear-gradient(90deg,rgba(4,4,4,0.92)_0%,rgba(4,4,4,0.46)_44%,rgba(4,4,4,0.82)_100%)]" />
        </motion.div>

        <motion.div
          className={cn(
            "pointer-events-none absolute -right-4 top-[-4rem] hidden w-[24rem] lg:block xl:w-[28rem]",
            recruiterMode ? "opacity-16" : "opacity-28",
          )}
          style={enablePointerParallax ? { x: branchX, y: branchY } : undefined}
        >
          <SafeImage
            src={assets.sakuraBranch}
            alt="Cherry blossom branch accent"
            width={920}
            height={480}
            className="h-auto w-full object-contain"
          />
        </motion.div>

        <div className="max-w-3xl space-y-7">
          <motion.p
            className="text-xs font-medium tracking-[0.26em] text-white/68 uppercase"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            Chapter 01 - Cherry Blossom Dawn
          </motion.p>

          <h1 className="font-heading text-[clamp(3rem,8vw,6.85rem)] leading-[0.9] tracking-[0.08em] text-white uppercase">
            <span className="flex flex-col gap-y-3">
              <motion.span
                className="inline-block drop-shadow-[0_8px_30px_rgba(0,0,0,0.45)]"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 24, filter: "blur(10px)" }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.84, delay: prefersReducedMotion ? 0 : 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                YASWANTH
              </motion.span>
              <motion.span
                className="inline-block bg-[linear-gradient(90deg,#fff6ef_0%,rgba(245,214,197,0.94)_46%,rgba(249,115,22,0.92)_100%)] bg-clip-text text-transparent drop-shadow-[0_8px_30px_rgba(0,0,0,0.45)]"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 24, filter: "blur(10px)" }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.88, delay: prefersReducedMotion ? 0 : 0.18, ease: [0.22, 1, 0.36, 1] }}
              >
                KUMAR AKKIREDDY
              </motion.span>
            </span>
          </h1>

          <motion.p
            className="max-w-2xl text-sm font-medium tracking-[0.18em] text-[var(--mist)] uppercase sm:text-base"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.75 }}
            transition={{
              duration: 0.7,
              delay: prefersReducedMotion ? 0 : 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {roleLine}
          </motion.p>

          {recruiterMode ? (
            <div className="inline-flex border border-white/12 bg-white/[0.05] px-3 py-2 text-[0.68rem] tracking-[0.18em] text-white/86 uppercase">
              Recruiter Mode
            </div>
          ) : null}

          <GlowDivider accent={chapter.accent} className="max-w-[220px]" />

          <motion.p
            className="max-w-2xl text-base leading-8 text-white/78 sm:text-lg"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{
              duration: 0.75,
              delay: prefersReducedMotion ? 0 : 0.42,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {heroBio}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3 pt-2"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 22 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.65 }}
            transition={{
              duration: 0.75,
              delay: prefersReducedMotion ? 0 : 0.52,
              ease: [0.22, 1, 0.36, 1],
            }}
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
                      ? "border-[var(--samurai-red)] bg-[linear-gradient(135deg,rgba(200,32,45,0.92)_0%,rgba(149,18,27,0.92)_100%)] text-white hover:border-[var(--forge-orange)] hover:bg-[linear-gradient(135deg,rgba(200,32,45,1)_0%,rgba(249,115,22,0.92)_100%)]"
                      : "border-[rgba(255,255,255,0.14)] bg-black/28 text-white hover:border-[var(--forge-orange)] hover:bg-white/8",
                  )}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                  whileHover={prefersReducedMotion ? undefined : { y: -2 }}
                  whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{
                    duration: 0.55,
                    delay: prefersReducedMotion ? 0 : 0.58 + index * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
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
            transition={{
              duration: 0.68,
              delay: prefersReducedMotion ? 0 : 0.78,
              ease: [0.22, 1, 0.36, 1],
            }}
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
                  "rounded-none border border-transparent px-4 tracking-[0.12em] text-white/82 uppercase hover:border-white/12 hover:bg-white/8 hover:text-white",
                )}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                whileHover={prefersReducedMotion ? undefined : { y: -2 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                viewport={{ once: true, amount: 0.58 }}
                transition={{
                  duration: 0.48,
                  delay: prefersReducedMotion ? 0 : 0.84 + index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <item.icon className="mr-2 size-4" />
                {item.label}
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="flex items-center gap-3 pt-4 text-xs tracking-[0.18em] text-white/56 uppercase"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            animate={
              prefersReducedMotion
                ? undefined
                : {
                    opacity: [0.56, 0.95, 0.56],
                    y: [0, 4, 0],
                  }
            }
            viewport={{ once: true, amount: 0.6 }}
            transition={{
              duration: prefersReducedMotion ? 0.7 : 2.2,
              delay: prefersReducedMotion ? 0 : 1.02,
              ease: "easeInOut",
              repeat: prefersReducedMotion ? 0 : Number.POSITIVE_INFINITY,
              repeatDelay: prefersReducedMotion ? 0 : 0.2,
            }}
          >
            <ArrowDown className="size-4 text-[var(--forge-orange)]" />
            <span>Scroll to enter the story</span>
          </motion.div>
        </div>

        <motion.aside
          className={cn(
            "hidden border p-5 text-sm lg:block",
            recruiterMode
              ? "border-white/12 bg-black/42"
              : "border-[rgba(255,255,255,0.12)] bg-black/22 backdrop-blur-sm",
          )}
          initial={prefersReducedMotion ? false : { opacity: 0, x: 24 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.8,
            delay: prefersReducedMotion ? 0 : 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p className="text-[0.72rem] font-medium tracking-[0.22em] text-white/54 uppercase">
            Built for real systems
          </p>
          <div className="mt-5 space-y-3 text-white/76">
            {["GenAI Workflows", "RAG Pipelines", "Agentic Systems", "Reliability Evaluation"].map(
              (item, index) => (
                <motion.div
                  key={item}
                  className="border-l border-[var(--samurai-red)]/36 pl-3"
                  initial={prefersReducedMotion ? false : { opacity: 0, x: 12 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.45,
                    delay: prefersReducedMotion ? 0 : 0.7 + index * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {item}
                </motion.div>
              ),
            )}
          </div>
        </motion.aside>
      </div>
    </StorySection>
  );
}

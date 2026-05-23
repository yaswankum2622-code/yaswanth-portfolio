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
  useReducedMotion,
  useScroll,
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
  const enablePointerParallax = canUseCustomCursor && !prefersReducedMotion && !recruiterMode;

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
        className="relative isolate grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_18rem] lg:items-end"
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
          style={prefersReducedMotion || recruiterMode ? undefined : { y: heroImageY }}
        >
          <SafeImage
            src={assets.scholarPath}
            alt="Hero background atmosphere"
            fill
            priority
            quality={95}
            sizes="100vw"
            className={cn(
              "object-cover object-[62%_42%] transition-transform duration-500",
              enablePointerParallax ? "scale-[1.02]" : "",
              recruiterMode
                ? "opacity-16 sm:opacity-[0.18] md:opacity-[0.2]"
                : "opacity-26 sm:opacity-30 md:opacity-34 lg:opacity-38",
            )}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_78%,rgba(249,115,22,0.26),transparent_30%),radial-gradient(circle_at_62%_16%,rgba(251,191,36,0.10),transparent_24%),linear-gradient(90deg,rgba(4,4,4,0.92)_0%,rgba(4,4,4,0.52)_44%,rgba(4,4,4,0.82)_100%)]" />
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
            "hidden lg:block",
            recruiterMode
              ? "text-white/88"
              : "text-white/82",
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
          <div className="relative overflow-hidden border border-[rgba(255,255,255,0.12)] bg-black/24 shadow-[0_24px_64px_rgba(0,0,0,0.24)] backdrop-blur-sm">
            <div className="relative aspect-[4/5]">
              <SafeImage
                src={assets.contactRain}
                alt="Night gate atmosphere"
                fill
                quality={94}
                sizes="22rem"
                className="object-cover object-center opacity-82"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.76)_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.12),transparent_22%)]" />
              <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-black/36 p-5">
                <p className="text-[0.68rem] font-medium tracking-[0.22em] text-[var(--forge-orange)] uppercase">
                  Built for real systems
                </p>
                <div className="mt-4 space-y-3 text-sm text-white/76">
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
              </div>
            </div>
          </div>
        </motion.aside>
      </div>
    </StorySection>
  );
}

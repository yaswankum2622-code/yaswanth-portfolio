"use client";

import { useEffect, useState } from "react";

import { ArrowUpRightFromSquare, FileText, FolderGit2 } from "lucide-react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";

import { useAnimationProvider } from "@/components/AnimationProvider";
import { MetricBadge } from "@/components/MetricBadge";
import { useRecruiterMode } from "@/components/RecruiterModeProvider";
import { SafeImage } from "@/components/SafeImage";
import { TechChip } from "@/components/TechChip";
import { buttonVariants } from "@/components/ui/button";
import { assets } from "@/data/assets";
import type { ProjectCard as ProjectCardData, ProjectId } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: ProjectCardData;
  index: number;
  onOpenCaseStudy: (projectId: ProjectId) => void;
};

export function hasLiveDemo(project: ProjectCardData) {
  return Boolean(project.live.href);
}

export function resolveProjectImage(project: ProjectCardData) {
  if (project.id === "bankingOS") {
    return project.image || assets.githubStars || assets.fallbackFog;
  }

  if (project.id === "cortexAgent") {
    return project.image || assets.heroCover || assets.fallbackFog;
  }

  return project.image || assets.fallbackFog;
}

export function getProjectStatusClasses(status: string) {
  const value = status.toLowerCase();

  if (value.includes("deployed")) {
    return "border-[rgba(74,222,128,0.32)] bg-[rgba(74,222,128,0.08)] text-[rgba(214,255,228,0.94)]";
  }

  if (value.includes("ongoing")) {
    return "border-[rgba(234,179,8,0.32)] bg-[rgba(234,179,8,0.08)] text-[rgba(255,239,196,0.94)]";
  }

  if (value.includes("research")) {
    return "border-[rgba(96,165,250,0.32)] bg-[rgba(96,165,250,0.08)] text-[rgba(219,234,254,0.94)]";
  }

  if (value.includes("local")) {
    return "border-[rgba(217,119,6,0.28)] bg-[rgba(217,119,6,0.08)] text-[rgba(255,234,191,0.92)]";
  }

  return "border-[rgba(200,32,45,0.32)] bg-[rgba(200,32,45,0.10)] text-white";
}

export function ProjectCard({ project, index, onOpenCaseStudy }: ProjectCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const { canUseCustomCursor } = useAnimationProvider();
  const { recruiterMode } = useRecruiterMode();
  const [isDesktopViewport, setIsDesktopViewport] = useState(false);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const smoothRotateX = useSpring(rotateX, { stiffness: 180, damping: 22, mass: 0.4 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 180, damping: 22, mass: 0.4 });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const updateDesktopViewport = () => {
      setIsDesktopViewport(mediaQuery.matches);
    };
    const frame = window.requestAnimationFrame(updateDesktopViewport);

    mediaQuery.addEventListener("change", updateDesktopViewport);

    return () => {
      window.cancelAnimationFrame(frame);
      mediaQuery.removeEventListener("change", updateDesktopViewport);
    };
  }, []);

  const canTilt =
    isDesktopViewport && canUseCustomCursor && !prefersReducedMotion && !recruiterMode;

  const handlePointerMove: React.PointerEventHandler<HTMLElement> = (event) => {
    if (!canTilt) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    rotateX.set(-y * 5);
    rotateY.set(x * 6);
  };

  const handlePointerLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.article
      data-cursor="project-card"
      className={cn(
        "group relative isolate overflow-hidden border shadow-[0_26px_70px_rgba(0,0,0,0.24)] transition-shadow duration-300 hover:shadow-[0_34px_86px_rgba(0,0,0,0.3)]",
        recruiterMode
          ? "border-white/10 bg-[linear-gradient(180deg,rgba(12,12,12,0.92)_0%,rgba(8,8,8,0.96)_100%)]"
          : "border-[rgba(200,32,45,0.16)] bg-[linear-gradient(180deg,rgba(10,10,10,0.8)_0%,rgba(8,8,8,0.92)_100%)] backdrop-blur-sm",
      )}
      style={
        canTilt
          ? {
              rotateX: smoothRotateX,
              rotateY: smoothRotateY,
              transformPerspective: 1200,
              transformStyle: "preserve-3d",
            }
          : undefined
      }
      initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: 0.72,
        delay: prefersReducedMotion ? 0 : index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={prefersReducedMotion ? undefined : recruiterMode ? { y: -2 } : { y: -6 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="pointer-events-none absolute inset-0 border border-transparent transition-colors duration-300 group-hover:border-[rgba(249,115,22,0.3)]" />
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.08),transparent_48%)]" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent_0%,rgba(200,32,45,0.7)_45%,rgba(249,115,22,0.64)_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative h-[220px] overflow-hidden border-b border-white/8">
        <SafeImage
          src={resolveProjectImage(project)}
          alt={`${project.title} preview`}
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          className={cn(
            "object-cover object-center transition-transform duration-500 ease-out",
            recruiterMode ? "group-hover:scale-[1.02]" : "group-hover:scale-[1.04]",
          )}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.64)_100%)]" />
        <div className="absolute inset-x-0 top-0 flex items-center justify-between gap-3 p-4">
          <span
            className={cn(
              "border px-2.5 py-1 text-[0.64rem] tracking-[0.16em] uppercase backdrop-blur-sm",
              getProjectStatusClasses(project.status),
            )}
          >
            {project.status}
          </span>
          <span className="border border-white/10 bg-black/35 px-2.5 py-1 text-[0.62rem] tracking-[0.16em] text-white/72 uppercase">
            {project.category}
          </span>
        </div>
      </div>

      <div className="space-y-5 p-5">
        <div className="space-y-3">
          {recruiterMode ? (
            <p className="text-[0.68rem] tracking-[0.16em] text-white/52 uppercase">
              {project.domain}
            </p>
          ) : null}
          <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
          <p className="text-sm leading-7 text-white/72">{project.oneLineDescription}</p>
          {recruiterMode ? (
            <p className="text-sm leading-7 text-white/58">{project.shortDescription}</p>
          ) : null}
        </div>

        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 6).map((tech) => (
            <TechChip key={`${project.id}-${tech}`} label={tech} />
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {project.topMetrics.slice(0, 2).map((metric) => (
            <MetricBadge key={`${project.id}-${metric}`} label={metric} />
          ))}
        </div>

        <div className="flex flex-wrap gap-2 pt-1">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              data-slash-trigger="light"
              className={cn(
                buttonVariants({ size: "sm", variant: "outline" }),
                "rounded-none border-white/12 bg-white/[0.03] tracking-[0.12em] text-white uppercase hover:border-[rgba(249,115,22,0.3)] hover:bg-white/[0.06]",
              )}
            >
              <FolderGit2 className="mr-1 size-4" />
              GitHub
            </a>
          ) : null}

          {hasLiveDemo(project) ? (
            <a
              href={project.live.href ?? undefined}
              target="_blank"
              rel="noopener noreferrer"
              data-slash-trigger="light"
              className={cn(
                buttonVariants({ size: "sm", variant: "outline" }),
                "rounded-none border-white/12 bg-white/[0.03] tracking-[0.12em] text-white uppercase hover:border-[rgba(74,222,128,0.32)] hover:bg-white/[0.06]",
              )}
            >
              <ArrowUpRightFromSquare className="mr-1 size-4" />
              Live
            </a>
          ) : null}

          <button
            type="button"
            onClick={() => onOpenCaseStudy(project.id)}
            className={cn(
              buttonVariants({ size: "sm" }),
              "rounded-none border border-[rgba(200,32,45,0.28)] bg-[linear-gradient(135deg,rgba(200,32,45,0.2)_0%,rgba(249,115,22,0.16)_100%)] tracking-[0.12em] text-white uppercase hover:border-[rgba(249,115,22,0.42)] hover:bg-[linear-gradient(135deg,rgba(200,32,45,0.26)_0%,rgba(249,115,22,0.22)_100%)] before:left-[-18%] before:w-[14%]",
            )}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-4 bottom-[5px] h-px origin-left scale-x-0 bg-[linear-gradient(90deg,var(--samurai-red)_0%,var(--forge-orange)_100%)] transition-transform duration-300 ease-out group-hover/button:scale-x-100"
            />
            <FileText className="mr-1 size-4" />
            View Case Study
          </button>
        </div>
      </div>
    </motion.article>
  );
}

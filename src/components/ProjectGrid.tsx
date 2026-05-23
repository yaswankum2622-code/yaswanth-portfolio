"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

import { motion, useReducedMotion } from "motion/react";

import { ProjectCard } from "@/components/ProjectCard";
import { ProjectDetailDrawer } from "@/components/ProjectDetailDrawer";
import { ProjectFilters, type ProjectFilter } from "@/components/ProjectFilters";
import { StorySection } from "@/components/StorySection";
import { useSlashTransition } from "@/components/SlashTransition";
import { projects, type ProjectCard as ProjectCardData, type ProjectId } from "@/data/projects";
import { projectCaseStudies } from "@/data/projectCaseStudies";
import {
  consumePendingProjectCaseStudy,
  OPEN_PROJECT_CASE_STUDY_EVENT,
} from "@/lib/portfolio-navigation";
import type { StoryChapter } from "@/data/storyChapters";

type ProjectGridProps = {
  chapter: StoryChapter;
};

function matchesFilter(project: ProjectCardData, filter: ProjectFilter) {
  if (filter === "all") {
    return true;
  }

  if (filter === "featured") {
    return project.featured;
  }

  if (filter === "ongoing") {
    return project.status.toLowerCase().includes("ongoing");
  }

  if (filter === "deployed") {
    return Boolean(project.live.href);
  }

  if (filter === "local") {
    return project.status.toLowerCase().includes("local");
  }

  return !project.status.toLowerCase().includes("ongoing");
}

export function ProjectGrid({ chapter }: ProjectGridProps) {
  const prefersReducedMotion = useReducedMotion();
  const { triggerSlash } = useSlashTransition();
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("all");
  const [selectedProjectId, setSelectedProjectId] = useState<ProjectId | null>(null);

  const filteredProjects = useMemo(
    () => projects.filter((project) => matchesFilter(project, activeFilter)),
    [activeFilter],
  );

  const filterCounts = useMemo(
    () => ({
      all: projects.length,
      featured: projects.filter((project) => matchesFilter(project, "featured")).length,
      completed: projects.filter((project) => matchesFilter(project, "completed")).length,
      ongoing: projects.filter((project) => matchesFilter(project, "ongoing")).length,
      deployed: projects.filter((project) => matchesFilter(project, "deployed")).length,
      local: projects.filter((project) => matchesFilter(project, "local")).length,
    }),
    [],
  );

  const selectedProject = useMemo(
    () => projects.find((project) => project.id === selectedProjectId) ?? null,
    [selectedProjectId],
  );

  const selectedCaseStudy = useMemo(
    () => projectCaseStudies.find((caseStudy) => caseStudy.id === selectedProjectId) ?? null,
    [selectedProjectId],
  );

  const handleOpenCaseStudy = useCallback((projectId: ProjectId) => {
    triggerSlash({ intensity: "full" });
    setSelectedProjectId(projectId);
  }, [triggerSlash]);

  useEffect(() => {
    const pendingProjectId = consumePendingProjectCaseStudy();
    const pendingOpenTimeoutId =
      pendingProjectId ?
        window.setTimeout(() => {
          handleOpenCaseStudy(pendingProjectId);
        }, 0)
      : null;

    const handleProjectCommand = (event: Event) => {
      const detail = (event as CustomEvent<{ projectId: ProjectId }>).detail;

      if (detail?.projectId) {
        handleOpenCaseStudy(detail.projectId);
      }
    };

    window.addEventListener(OPEN_PROJECT_CASE_STUDY_EVENT, handleProjectCommand);

    return () => {
      if (pendingOpenTimeoutId !== null) {
        window.clearTimeout(pendingOpenTimeoutId);
      }
      window.removeEventListener(OPEN_PROJECT_CASE_STUDY_EVENT, handleProjectCommand);
    };
  }, [handleOpenCaseStudy]);

  return (
    <>
      <StorySection
        id="projects"
        chapterNumber={6}
        title={chapter.title}
        eyebrow={chapter.eyebrow}
        mood={chapter.mood}
        accent={chapter.accent}
        backgroundType="battle-dark"
      >
        <div id="project-arsenal" className="absolute inset-x-0 top-0 scroll-mt-28" />

        <div className="relative space-y-8">
          <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:84px_84px]" />
            <div className="absolute left-[8%] top-[12%] h-36 w-36 rounded-full bg-[rgba(200,32,45,0.10)] blur-3xl" />
            <div className="absolute right-[10%] top-[32%] h-44 w-44 rounded-full bg-[rgba(249,115,22,0.08)] blur-3xl" />
          </div>

          <ProjectFilters
            activeFilter={activeFilter}
            onChange={setActiveFilter}
            counts={filterCounts}
          />

          <motion.div
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onOpenCaseStudy={handleOpenCaseStudy}
              />
            ))}
          </motion.div>
        </div>
      </StorySection>

      <ProjectDetailDrawer
        open={Boolean(selectedProjectId)}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedProjectId(null);
          }
        }}
        project={selectedProject}
        caseStudy={selectedCaseStudy}
      />
    </>
  );
}

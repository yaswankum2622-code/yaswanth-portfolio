"use client";

import { ArrowUpRightFromSquare, ChevronRight, FolderGit2 } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { MetricBadge } from "@/components/MetricBadge";
import { SafeImage } from "@/components/SafeImage";
import { getProjectStatusClasses, hasLiveDemo, resolveProjectImage } from "@/components/ProjectCard";
import { TechChip } from "@/components/TechChip";
import { buttonVariants } from "@/components/ui/button";
import type { ProjectCaseStudy } from "@/data/projectCaseStudies";
import type { ProjectCard as ProjectCardData } from "@/data/projects";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

type ProjectDetailDrawerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project: ProjectCardData | null;
  caseStudy: ProjectCaseStudy | null;
};

type DossierPanelProps = {
  title: string;
  items?: string[];
  children?: React.ReactNode;
  className?: string;
  index?: number;
};

function DossierPanel({ title, items = [], children, className, index = 0 }: DossierPanelProps) {
  const prefersReducedMotion = useReducedMotion();

  if (!children && items.length === 0) {
    return null;
  }

  return (
    <motion.section
      className={cn("border border-white/8 bg-black/24 p-4", className)}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 18, scale: 0.985 }}
      animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.42,
        delay: prefersReducedMotion ? 0 : index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <h4 className="text-xs font-medium tracking-[0.18em] text-[var(--forge-orange)] uppercase">
        {title}
      </h4>
      {children ? <div className="mt-3">{children}</div> : null}
      {items.length > 0 ? (
        <ul className="mt-3 grid gap-3 text-sm leading-7 text-white/76">
          {items.map((item) => (
            <li key={item} className="flex gap-3 border-l border-white/8 pl-4">
              <ChevronRight className="mt-1 size-4 shrink-0 text-[var(--forge-orange)]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </motion.section>
  );
}

export function ProjectDetailDrawer({
  open,
  onOpenChange,
  project,
  caseStudy,
}: ProjectDetailDrawerProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        showCloseButton={false}
        className="data-[side=right]:w-full data-[side=right]:sm:w-full data-[side=right]:sm:max-w-none data-[side=right]:lg:w-[min(72rem,94vw)] border-l-[rgba(200,32,45,0.16)] bg-[linear-gradient(180deg,rgba(5,5,5,0.98)_0%,rgba(10,8,8,0.98)_100%)] p-0 text-white"
      >
        {project && caseStudy ? (
          <motion.div
            key={project.id}
            className="flex h-full min-h-0 flex-col"
            initial={prefersReducedMotion ? false : { opacity: 0, filter: "blur(10px)" }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="border-b border-white/8 bg-black/54 px-4 py-3 backdrop-blur-xl sm:px-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[0.7rem] tracking-[0.18em] text-white/54 uppercase">
                    Classified Technical Dossier
                  </p>
                  <SheetTitle className="mt-1 text-lg font-semibold text-white">
                    {project.title}
                  </SheetTitle>
                </div>
                <SheetClose
                  render={
                    <button
                      type="button"
                      className="border border-white/10 px-3 py-2 text-[0.7rem] tracking-[0.16em] text-white/72 uppercase transition hover:border-[rgba(249,115,22,0.3)] hover:text-white"
                    />
                  }
                >
                  Close
                </SheetClose>
              </div>
              <SheetDescription className="mt-2 max-w-3xl text-white/62">
                {project.oneLineDescription}
              </SheetDescription>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto">
              <motion.div
                className="relative h-[260px] overflow-hidden border-b border-white/8"
                initial={prefersReducedMotion ? false : { opacity: 0, scale: 1.04 }}
                animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  className="absolute inset-0"
                  initial={prefersReducedMotion ? false : { scale: 1.06 }}
                  animate={prefersReducedMotion ? undefined : { scale: 1 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                >
                  <SafeImage
                    src={resolveProjectImage(project)}
                    alt={`${project.title} large preview`}
                    fill
                    sizes="100vw"
                    className="object-cover object-center"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12)_0%,rgba(0,0,0,0.72)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
                  <div className="flex flex-wrap gap-2">
                    <span
                      className={cn(
                        "border px-2.5 py-1 text-[0.64rem] tracking-[0.16em] uppercase backdrop-blur-sm",
                        getProjectStatusClasses(project.status),
                      )}
                    >
                      {project.status}
                    </span>
                    <span className="border border-white/10 bg-black/34 px-2.5 py-1 text-[0.64rem] tracking-[0.16em] text-white/74 uppercase">
                      {project.domain}
                    </span>
                    <span className="border border-white/10 bg-black/34 px-2.5 py-1 text-[0.64rem] tracking-[0.16em] text-white/74 uppercase">
                      {project.category}
                    </span>
                  </div>
                </div>
              </motion.div>

              <div className="space-y-5 px-4 py-5 sm:px-6 sm:py-6">
                <motion.div
                  className="flex flex-wrap gap-2"
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                  animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.42, delay: prefersReducedMotion ? 0 : 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  {project.topMetrics.map((metric) => (
                    <MetricBadge key={`${project.id}-${metric}`} label={metric} />
                  ))}
                </motion.div>

                <div className="flex flex-wrap gap-2">
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
                </div>

                <Tabs key={project.id} defaultValue="overview" className="min-h-0">
                  <div className="sticky top-0 z-10 -mx-4 border-y border-white/8 bg-[rgba(5,5,5,0.92)] px-4 py-3 backdrop-blur-xl sm:-mx-6 sm:px-6">
                    <TabsList variant="line" className="flex w-full flex-wrap items-center justify-start gap-2 p-0">
                      <TabsTrigger
                        value="overview"
                        className="rounded-none border border-transparent px-3 py-2 text-[0.68rem] tracking-[0.16em] text-white/62 uppercase data-active:border-[rgba(200,32,45,0.24)] data-active:text-white data-active:after:bg-[linear-gradient(90deg,var(--samurai-red)_0%,var(--forge-orange)_100%)]"
                      >
                        Overview
                      </TabsTrigger>
                      <TabsTrigger
                        value="architecture"
                        className="rounded-none border border-transparent px-3 py-2 text-[0.68rem] tracking-[0.16em] text-white/62 uppercase data-active:border-[rgba(200,32,45,0.24)] data-active:text-white data-active:after:bg-[linear-gradient(90deg,var(--samurai-red)_0%,var(--forge-orange)_100%)]"
                      >
                        Architecture
                      </TabsTrigger>
                      <TabsTrigger
                        value="data"
                        className="rounded-none border border-transparent px-3 py-2 text-[0.68rem] tracking-[0.16em] text-white/62 uppercase data-active:border-[rgba(200,32,45,0.24)] data-active:text-white data-active:after:bg-[linear-gradient(90deg,var(--samurai-red)_0%,var(--forge-orange)_100%)]"
                      >
                        Data
                      </TabsTrigger>
                      <TabsTrigger
                        value="metrics"
                        className="rounded-none border border-transparent px-3 py-2 text-[0.68rem] tracking-[0.16em] text-white/62 uppercase data-active:border-[rgba(200,32,45,0.24)] data-active:text-white data-active:after:bg-[linear-gradient(90deg,var(--samurai-red)_0%,var(--forge-orange)_100%)]"
                      >
                        Metrics
                      </TabsTrigger>
                      <TabsTrigger
                        value="impact"
                        className="rounded-none border border-transparent px-3 py-2 text-[0.68rem] tracking-[0.16em] text-white/62 uppercase data-active:border-[rgba(200,32,45,0.24)] data-active:text-white data-active:after:bg-[linear-gradient(90deg,var(--samurai-red)_0%,var(--forge-orange)_100%)]"
                      >
                        Impact
                      </TabsTrigger>
                      <TabsTrigger
                        value="hiring-signal"
                        className="rounded-none border border-transparent px-3 py-2 text-[0.68rem] tracking-[0.16em] text-white/62 uppercase data-active:border-[rgba(200,32,45,0.24)] data-active:text-white data-active:after:bg-[linear-gradient(90deg,var(--samurai-red)_0%,var(--forge-orange)_100%)]"
                      >
                        Hiring Signal
                      </TabsTrigger>
                    </TabsList>
                  </div>

                  <TabsContent value="overview" className="pt-5">
                    <div className="grid gap-4 lg:grid-cols-3">
                      <DossierPanel
                        title="Overview"
                        index={0}
                        className="lg:col-span-3"
                      >
                        <p className="text-sm leading-7 text-white/78">{caseStudy.overview}</p>
                      </DossierPanel>
                      <DossierPanel
                        title="Problem Solved"
                        index={1}
                        className="lg:col-span-3"
                      >
                        <p className="text-sm leading-7 text-white/78">{caseStudy.problemSolved}</p>
                      </DossierPanel>
                      <DossierPanel
                        title="What I Built"
                        index={2}
                        className="lg:col-span-3"
                      >
                        <p className="text-sm leading-7 text-white/78">{caseStudy.whatIBuilt}</p>
                      </DossierPanel>
                    </div>
                  </TabsContent>

                  <TabsContent value="architecture" className="pt-5">
                    <div className="grid gap-4 lg:grid-cols-2">
                      <DossierPanel title="Core Features" items={caseStudy.coreFeatures} index={0} />
                      <DossierPanel title="Architecture" items={caseStudy.architecture} index={1} />
                      <DossierPanel
                        title="Tech Stack"
                        index={2}
                        className="lg:col-span-2"
                      >
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech) => (
                            <TechChip key={`${project.id}-${tech}`} label={tech} />
                          ))}
                        </div>
                      </DossierPanel>
                    </div>
                  </TabsContent>

                  <TabsContent value="data" className="pt-5">
                    <div className="grid gap-4 lg:grid-cols-2">
                      <DossierPanel title="Dataset" items={caseStudy.dataset} index={0} />
                      <DossierPanel title="Preprocessing" items={caseStudy.preprocessing} index={1} />
                    </div>
                  </TabsContent>

                  <TabsContent value="metrics" className="pt-5">
                    <div className="grid gap-4 lg:grid-cols-2">
                      <DossierPanel
                        title="Top Metrics"
                        index={0}
                      >
                        <div className="flex flex-wrap gap-2">
                          {project.topMetrics.map((metric) => (
                            <MetricBadge key={`${project.id}-top-${metric}`} label={metric} />
                          ))}
                        </div>
                      </DossierPanel>
                      <DossierPanel title="Evaluation Metrics" items={caseStudy.evaluationMetrics} index={1} />
                      <DossierPanel title="Tests" items={caseStudy.tests} index={2} />
                      <DossierPanel title="Trust and Safety" items={caseStudy.complianceAndSafety} index={3} />
                      <DossierPanel title="Explainability" items={caseStudy.explainability} index={4} />
                      <DossierPanel title="Safety" items={caseStudy.safety} index={5} />
                    </div>
                  </TabsContent>

                  <TabsContent value="impact" className="pt-5">
                    <div className="grid gap-4 lg:grid-cols-2">
                      <DossierPanel title="Impact" items={caseStudy.impact} index={0} />
                      <DossierPanel title="Users" items={caseStudy.users} index={1} />
                    </div>
                  </TabsContent>

                  <TabsContent value="hiring-signal" className="pt-5">
                    <div className="grid gap-4 lg:grid-cols-2">
                      <DossierPanel title="Why It Is Impressive" items={caseStudy.whyImpressive} index={0} />
                      <DossierPanel
                        title="Unique Technical Decision"
                        index={1}
                      >
                        <p className="text-sm leading-7 text-white/78">
                          {caseStudy.uniqueTechnicalDecision}
                        </p>
                      </DossierPanel>
                      <DossierPanel
                        title="Personal Contribution"
                        index={2}
                        className="lg:col-span-2"
                      >
                        <p className="text-sm leading-7 text-white/78">
                          {caseStudy.personalContribution}
                        </p>
                      </DossierPanel>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </motion.div>
        ) : null}
      </SheetContent>
    </Sheet>
  );
}

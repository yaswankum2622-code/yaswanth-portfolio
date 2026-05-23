"use client";

import { Filter } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

export type ProjectFilter =
  | "all"
  | "featured"
  | "completed"
  | "ongoing"
  | "deployed"
  | "local";

type FilterOption = {
  key: ProjectFilter;
  label: string;
};

const filterOptions: FilterOption[] = [
  { key: "all", label: "All" },
  { key: "featured", label: "Featured" },
  { key: "completed", label: "Completed" },
  { key: "ongoing", label: "Ongoing" },
  { key: "deployed", label: "Deployed" },
  { key: "local", label: "Local / Self-hosted" },
];

type ProjectFiltersProps = {
  activeFilter: ProjectFilter;
  onChange: (filter: ProjectFilter) => void;
  counts: Record<ProjectFilter, number>;
  className?: string;
};

export function ProjectFilters({
  activeFilter,
  onChange,
  counts,
  className,
}: ProjectFiltersProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(
        "border border-[rgba(200,32,45,0.18)] bg-black/24 p-4 backdrop-blur-sm",
        className,
      )}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-3 text-sm text-white/70">
          <Filter className="size-4 text-[var(--forge-orange)]" />
          <span className="tracking-[0.18em] uppercase">Filter the arsenal</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {filterOptions.map((option) => {
            const isActive = option.key === activeFilter;

            return (
              <button
                key={option.key}
                type="button"
                onClick={() => onChange(option.key)}
                className={cn(
                  "inline-flex items-center gap-2 border px-3 py-2 text-[0.68rem] tracking-[0.16em] uppercase transition-all duration-200",
                  isActive
                    ? "border-[rgba(249,115,22,0.42)] bg-[linear-gradient(135deg,rgba(200,32,45,0.16)_0%,rgba(249,115,22,0.12)_100%)] text-white shadow-[0_0_18px_rgba(249,115,22,0.12)]"
                    : "border-white/10 bg-white/[0.02] text-white/68 hover:border-[rgba(249,115,22,0.24)] hover:text-white",
                )}
              >
                <span>{option.label}</span>
                <span className="text-white/48">{counts[option.key]}</span>
              </button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

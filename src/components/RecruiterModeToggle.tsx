"use client";

import { BriefcaseBusiness, Sparkles } from "lucide-react";

import { useRecruiterMode } from "@/components/RecruiterModeProvider";
import { cn } from "@/lib/utils";

type RecruiterModeToggleProps = {
  className?: string;
  showBadge?: boolean;
};

export function RecruiterModeToggle({
  className,
  showBadge = true,
}: RecruiterModeToggleProps) {
  const { recruiterMode, setRecruiterMode } = useRecruiterMode();

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div
        role="group"
        aria-label="Display mode"
        className="inline-flex items-center border border-white/10 bg-black/35 p-1 backdrop-blur-xl"
      >
        <button
          type="button"
          aria-pressed={!recruiterMode}
          onClick={() => setRecruiterMode(false)}
          className={cn(
            "inline-flex items-center gap-2 px-3 py-2 text-[0.68rem] tracking-[0.14em] uppercase transition",
            recruiterMode
              ? "text-white/50 hover:text-white/80"
              : "bg-[linear-gradient(135deg,rgba(200,32,45,0.24)_0%,rgba(249,115,22,0.14)_100%)] text-white",
          )}
        >
          <Sparkles className="size-3.5" />
          Cinematic Mode
        </button>
        <button
          type="button"
          aria-pressed={recruiterMode}
          onClick={() => setRecruiterMode(true)}
          className={cn(
            "inline-flex items-center gap-2 px-3 py-2 text-[0.68rem] tracking-[0.14em] uppercase transition",
            recruiterMode
              ? "bg-[linear-gradient(135deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.05)_100%)] text-white"
              : "text-white/50 hover:text-white/80",
          )}
        >
          <BriefcaseBusiness className="size-3.5" />
          Recruiter Mode
        </button>
      </div>

      {showBadge && recruiterMode ? (
        <span className="hidden border border-[rgba(255,255,255,0.12)] bg-white/[0.06] px-2.5 py-1 text-[0.64rem] tracking-[0.16em] text-white/88 uppercase sm:inline-flex">
          Recruiter Mode
        </span>
      ) : null}
    </div>
  );
}

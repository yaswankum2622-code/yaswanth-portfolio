import { AnimatedTextReveal } from "@/components/AnimatedTextReveal";
import { GlowDivider } from "@/components/GlowDivider";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  chapterNumber: number;
  title: string;
  eyebrow: string;
  subtitle: string;
  accent: string;
  className?: string;
};

function getAccentClass(accent: string) {
  const value = accent.toLowerCase();

  if (value.includes("blue") || value.includes("rain")) {
    return "text-[var(--rain-blue)]";
  }

  if (value.includes("gold") || value.includes("green")) {
    return "text-[var(--gold)]";
  }

  if (value.includes("amber") || value.includes("orange") || value.includes("forge")) {
    return "text-[var(--forge-orange)]";
  }

  return "text-[var(--samurai-red)]";
}

export function SectionHeader({
  chapterNumber,
  title,
  eyebrow,
  subtitle,
  accent,
  className,
}: SectionHeaderProps) {
  const accentClass = getAccentClass(accent);

  return (
    <div className={cn("max-w-3xl space-y-5", className)}>
      <div className="space-y-3">
        <p className={cn("text-xs font-medium tracking-[0.26em] uppercase", accentClass)}>
          Chapter {String(chapterNumber).padStart(2, "0")}
        </p>
        <p className="text-sm font-medium tracking-[0.22em] text-white/70 uppercase">{eyebrow}</p>
      </div>
      <div className="space-y-4">
        <h2 className="font-heading text-4xl tracking-[0.04em] text-white sm:text-5xl lg:text-6xl">
          <AnimatedTextReveal text={title} />
        </h2>
        <p className="max-w-2xl text-sm leading-7 text-[var(--mist)] sm:text-base">
          <AnimatedTextReveal text={subtitle} delay={0.1} />
        </p>
      </div>
      <GlowDivider accent={accent} />
    </div>
  );
}

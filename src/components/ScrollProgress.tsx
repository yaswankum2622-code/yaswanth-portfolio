"use client";

import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 28,
    mass: 0.22,
  });

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-[2px] bg-white/5">
      <motion.div
        className="h-full origin-left bg-[linear-gradient(90deg,var(--samurai-red)_0%,var(--forge-orange)_58%,var(--gold)_100%)] shadow-[0_0_20px_rgba(249,115,22,0.38)]"
        style={{ scaleX: progress }}
      />
    </div>
  );
}

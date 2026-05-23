"use client";

import { useEffect, useState } from "react";

import { motion, useMotionValue, useSpring } from "motion/react";

import { cn } from "@/lib/utils";

import { useAnimationProvider } from "./AnimationProvider";

type CustomCursorProps = {
  className?: string;
};

const interactiveSelector = [
  "a",
  "button",
  "[role='button']",
  "[data-cursor='hover']",
  "[data-cursor='project-card']",
  "[data-slash-trigger]",
].join(",");

export function CustomCursor({ className }: CustomCursorProps) {
  const { canUseCustomCursor, reducedMotion } = useAnimationProvider();
  const [isVisible, setIsVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const ringX = useMotionValue(-100);
  const ringY = useMotionValue(-100);

  const smoothDotX = useSpring(dotX, { stiffness: 680, damping: 42, mass: 0.12 });
  const smoothDotY = useSpring(dotY, { stiffness: 680, damping: 42, mass: 0.12 });
  const smoothRingX = useSpring(ringX, { stiffness: 280, damping: 28, mass: 0.5 });
  const smoothRingY = useSpring(ringY, { stiffness: 280, damping: 28, mass: 0.5 });

  useEffect(() => {
    if (!canUseCustomCursor || reducedMotion) {
      document.body.removeAttribute("data-custom-cursor");
      return;
    }

    document.body.setAttribute("data-custom-cursor", "true");

    const handlePointerMove = (event: PointerEvent) => {
      dotX.set(event.clientX - 4);
      dotY.set(event.clientY - 4);
      ringX.set(event.clientX - 20);
      ringY.set(event.clientY - 20);
      setIsVisible(true);
      setIsActive(Boolean(event.target instanceof Element && event.target.closest(interactiveSelector)));
    };

    const handlePointerDown = () => setIsPressed(true);
    const handlePointerUp = () => setIsPressed(false);
    const handlePointerLeave = () => setIsVisible(false);
    const handlePointerEnter = () => setIsVisible(true);

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("pointerenter", handlePointerEnter);

    return () => {
      document.body.removeAttribute("data-custom-cursor");
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("pointerenter", handlePointerEnter);
    };
  }, [canUseCustomCursor, dotX, dotY, reducedMotion, ringX, ringY]);

  if (!canUseCustomCursor || reducedMotion) {
    return null;
  }

  return (
    <>
      <motion.div
        aria-hidden
        className={cn(
          "pointer-events-none fixed left-0 top-0 z-[115] h-2 w-2 rounded-full bg-[var(--samurai-red)] shadow-[0_0_20px_rgba(200,32,45,0.85)]",
          className,
        )}
        style={{
          x: smoothDotX,
          y: smoothDotY,
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          scale: isPressed ? 0.82 : isActive ? 1.12 : 1,
        }}
        transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[114] h-10 w-10 rounded-full border border-[var(--samurai-red)]/40 bg-[radial-gradient(circle,rgba(200,32,45,0.18)_0%,rgba(200,32,45,0.03)_65%,transparent_100%)] shadow-[0_0_26px_rgba(200,32,45,0.2)]"
        style={{
          x: smoothRingX,
          y: smoothRingY,
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          scale: isPressed ? 0.92 : isActive ? 1.45 : 1,
          borderColor: isActive ? "rgba(249, 115, 22, 0.52)" : "rgba(200, 32, 45, 0.4)",
        }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
}

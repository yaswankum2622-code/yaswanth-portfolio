"use client";

import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

import { useAnimationProvider } from "./AnimationProvider";
import { useRecruiterMode } from "./RecruiterModeProvider";

type SakuraCanvasProps = {
  className?: string;
};

type Petal = {
  x: number;
  y: number;
  size: number;
  speedY: number;
  drift: number;
  sway: number;
  phase: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  tint: number;
};

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function createPetal(width: number, height: number, seededY?: number): Petal {
  return {
    x: randomBetween(0, width),
    y: seededY ?? randomBetween(-height, height),
    size: randomBetween(8, 16),
    speedY: randomBetween(0.45, 1.1),
    drift: randomBetween(-0.18, 0.18),
    sway: randomBetween(0.4, 1.1),
    phase: randomBetween(0, Math.PI * 2),
    rotation: randomBetween(0, Math.PI * 2),
    rotationSpeed: randomBetween(-0.018, 0.018),
    opacity: randomBetween(0.14, 0.28),
    tint: randomBetween(0, 1),
  };
}

export function SakuraCanvas({ className }: SakuraCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const petalsRef = useRef<Petal[]>([]);
  const pointerRef = useRef({ x: -1000, y: -1000, active: false });
  const { reducedMotion } = useAnimationProvider();
  const { recruiterMode } = useRecruiterMode();

  useEffect(() => {
    if (reducedMotion) {
      return;
    }

    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    let viewportWidth = window.innerWidth;
    let viewportHeight = window.innerHeight;

    const setCanvasSize = () => {
      viewportWidth = window.innerWidth;
      viewportHeight = window.innerHeight;

      const devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(viewportWidth * devicePixelRatio);
      canvas.height = Math.round(viewportHeight * devicePixelRatio);
      canvas.style.width = `${viewportWidth}px`;
      canvas.style.height = `${viewportHeight}px`;
      context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);

      const particleCount = viewportWidth < 768 ? (recruiterMode ? 10 : 18) : recruiterMode ? 26 : 52;
      petalsRef.current = Array.from({ length: particleCount }, () => {
        const petal = createPetal(viewportWidth, viewportHeight);

        if (recruiterMode) {
          petal.opacity = randomBetween(0.08, 0.16);
          petal.sway = randomBetween(0.18, 0.56);
          petal.speedY = randomBetween(0.38, 0.88);
        }

        return petal;
      });
    };

    const drawPetal = (petal: Petal) => {
      context.save();
      context.translate(petal.x, petal.y);
      context.rotate(petal.rotation);
      context.scale(petal.size, petal.size * 0.72);

      context.beginPath();
      context.moveTo(0, -1.15);
      context.bezierCurveTo(1.18, -0.9, 1.5, 0.72, 0, 1.24);
      context.bezierCurveTo(-1.38, 0.7, -1.12, -0.9, 0, -1.15);
      context.closePath();

      const tintRed = petal.tint > 0.5 ? 246 : 232;
      const tintGreen = petal.tint > 0.5 ? 122 : 96;
      const tintBlue = petal.tint > 0.5 ? 166 : 118;

      context.fillStyle = `rgba(${tintRed}, ${tintGreen}, ${tintBlue}, ${petal.opacity})`;
      context.shadowColor = "rgba(248, 113, 113, 0.12)";
      context.shadowBlur = 10;
      context.fill();
      context.restore();
    };

    const animate = () => {
      context.clearRect(0, 0, viewportWidth, viewportHeight);

      for (const petal of petalsRef.current) {
        petal.phase += 0.018;
        petal.rotation += petal.rotationSpeed;
        petal.y += petal.speedY;
        petal.x += petal.drift + Math.sin(petal.phase) * petal.sway;

        if (!recruiterMode && pointerRef.current.active) {
          const dx = petal.x - pointerRef.current.x;
          const dy = petal.y - pointerRef.current.y;
          const distance = Math.hypot(dx, dy);
          const influenceRadius = 130;

          if (distance < influenceRadius && distance > 0) {
            const force = (influenceRadius - distance) / influenceRadius;
            petal.x += (dx / distance) * force * 1.6;
            petal.y += (dy / distance) * force * 0.85;
          }
        }

        if (petal.y > viewportHeight + 24 || petal.x < -40 || petal.x > viewportWidth + 40) {
          Object.assign(petal, createPetal(viewportWidth, viewportHeight, randomBetween(-120, -16)));
        }

        drawPetal(petal);
      }

      frameRef.current = window.requestAnimationFrame(animate);
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointerRef.current = {
        x: event.clientX,
        y: event.clientY,
        active: true,
      };
    };

    const handlePointerLeave = () => {
      pointerRef.current.active = false;
    };

    setCanvasSize();
    animate();

    window.addEventListener("resize", setCanvasSize);

    if (!recruiterMode) {
      window.addEventListener("pointermove", handlePointerMove);
      window.addEventListener("pointerleave", handlePointerLeave);
    }

    return () => {
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }

      window.removeEventListener("resize", setCanvasSize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [recruiterMode, reducedMotion]);

  if (reducedMotion) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={cn(
        "pointer-events-none fixed inset-0 z-[1]",
        recruiterMode ? "opacity-35" : "opacity-80",
        className,
      )}
    />
  );
}

"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

import { useReducedMotion } from "motion/react";

import { useRecruiterMode } from "./RecruiterModeProvider";

const SESSION_STORAGE_KEY = "portfolio-entered";

export type TriggerSlashOptions = {
  intensity?: "light" | "full";
};

type SlashEvent = {
  id: number;
  intensity: "light" | "full";
};

type AnimationContextValue = {
  reducedMotion: boolean;
  animationsEnabled: boolean;
  recruiterMode: boolean;
  slashEvent: SlashEvent | null;
  triggerSlash: (options?: TriggerSlashOptions) => void;
  hasEnteredSession: boolean | null;
  markSessionEntered: () => void;
  isTouchDevice: boolean;
  canUseCustomCursor: boolean;
};

const AnimationContext = createContext<AnimationContextValue | null>(null);

type AnimationProviderProps = {
  children: ReactNode;
};

export function AnimationProvider({ children }: AnimationProviderProps) {
  const prefersReducedMotion = useReducedMotion();
  const { recruiterMode } = useRecruiterMode();
  const [slashEvent, setSlashEvent] = useState<SlashEvent | null>(null);
  const [hasEnteredSession, setHasEnteredSession] = useState<boolean | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [canUseCustomCursor, setCanUseCustomCursor] = useState(false);
  const slashTimeoutsRef = useRef<number[]>([]);

  const reducedMotion = Boolean(prefersReducedMotion);

  useEffect(() => {
    let frame = 0;

    try {
      const storedValue = window.sessionStorage.getItem(SESSION_STORAGE_KEY) === "true";
      frame = window.requestAnimationFrame(() => {
        setHasEnteredSession(storedValue);
      });
    } catch {
      frame = window.requestAnimationFrame(() => {
        setHasEnteredSession(false);
      });
    }

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const coarsePointerQuery = window.matchMedia("(pointer: coarse)");
    const finePointerQuery = window.matchMedia("(pointer: fine)");

    const updatePointerMode = () => {
      const hasTouchPoints = navigator.maxTouchPoints > 0;
      const coarsePointer = coarsePointerQuery.matches || hasTouchPoints;
      const finePointer = finePointerQuery.matches && !coarsePointer;

      setIsTouchDevice(coarsePointer);
      setCanUseCustomCursor(finePointer && !reducedMotion && !recruiterMode);
    };

    const frame = window.requestAnimationFrame(updatePointerMode);

    coarsePointerQuery.addEventListener("change", updatePointerMode);
    finePointerQuery.addEventListener("change", updatePointerMode);

    return () => {
      window.cancelAnimationFrame(frame);
      coarsePointerQuery.removeEventListener("change", updatePointerMode);
      finePointerQuery.removeEventListener("change", updatePointerMode);
    };
  }, [reducedMotion, recruiterMode]);

  const markSessionEntered = useCallback(() => {
    try {
      window.sessionStorage.setItem(SESSION_STORAGE_KEY, "true");
    } catch {
      // Ignore storage write failures and continue with local state.
    }

    setHasEnteredSession(true);
  }, []);

  const triggerSlash = useCallback(
    (options?: TriggerSlashOptions) => {
      if (reducedMotion) {
        return;
      }

      const nextSlashEvent = {
        id: Date.now(),
        intensity: options?.intensity ?? "full",
      } satisfies SlashEvent;

      setSlashEvent(nextSlashEvent);

      const timeoutId = window.setTimeout(() => {
        setSlashEvent((current) =>
          current?.id === nextSlashEvent.id ? null : current,
        );
        slashTimeoutsRef.current = slashTimeoutsRef.current.filter(
          (currentTimeoutId) => currentTimeoutId !== timeoutId,
        );
      }, 420);

      slashTimeoutsRef.current.push(timeoutId);
    },
    [reducedMotion],
  );

  useEffect(() => {
    return () => {
      slashTimeoutsRef.current.forEach((timeoutId) => {
        window.clearTimeout(timeoutId);
      });
      slashTimeoutsRef.current = [];
    };
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      return;
    }

    const handleClick = (event: MouseEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const triggerElement = target.closest<HTMLElement>("[data-slash-trigger]");

      if (!triggerElement) {
        return;
      }

      const intensity = triggerElement.dataset.slashTrigger === "light" ? "light" : "full";
      triggerSlash({ intensity });
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [reducedMotion, triggerSlash]);

  const value = useMemo<AnimationContextValue>(
    () => ({
      reducedMotion,
      animationsEnabled: !reducedMotion,
      recruiterMode,
      slashEvent,
      triggerSlash,
      hasEnteredSession,
      markSessionEntered,
      isTouchDevice,
      canUseCustomCursor,
    }),
    [
      reducedMotion,
      recruiterMode,
      slashEvent,
      triggerSlash,
      hasEnteredSession,
      markSessionEntered,
      isTouchDevice,
      canUseCustomCursor,
    ],
  );

  return <AnimationContext.Provider value={value}>{children}</AnimationContext.Provider>;
}

export function useAnimationProvider() {
  const context = useContext(AnimationContext);

  if (!context) {
    throw new Error("useAnimationProvider must be used within AnimationProvider.");
  }

  return context;
}

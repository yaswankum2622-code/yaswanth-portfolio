"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

const RECRUITER_MODE_STORAGE_KEY = "portfolio-recruiter-mode";

type RecruiterModeContextValue = {
  recruiterMode: boolean;
  setRecruiterMode: (value: boolean) => void;
  toggleRecruiterMode: () => void;
};

const RecruiterModeContext = createContext<RecruiterModeContextValue | null>(null);

type RecruiterModeProviderProps = {
  children: ReactNode;
};

export function RecruiterModeProvider({ children }: RecruiterModeProviderProps) {
  const [recruiterMode, setRecruiterModeState] = useState(false);

  useEffect(() => {
    let frame = 0;

    try {
      const storedValue =
        window.localStorage.getItem(RECRUITER_MODE_STORAGE_KEY) === "true";
      frame = window.requestAnimationFrame(() => {
        setRecruiterModeState(storedValue);
      });
    } catch {
      frame = window.requestAnimationFrame(() => {
        setRecruiterModeState(false);
      });
    }

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(RECRUITER_MODE_STORAGE_KEY, String(recruiterMode));
    } catch {
      // Ignore storage failures and keep the in-memory toggle working.
    }

    if (recruiterMode) {
      document.body.setAttribute("data-recruiter-mode", "true");
    } else {
      document.body.removeAttribute("data-recruiter-mode");
    }
  }, [recruiterMode]);

  const setRecruiterMode = useCallback((value: boolean) => {
    setRecruiterModeState(value);
  }, []);

  const toggleRecruiterMode = useCallback(() => {
    setRecruiterModeState((current) => !current);
  }, []);

  const value = useMemo<RecruiterModeContextValue>(
    () => ({
      recruiterMode,
      setRecruiterMode,
      toggleRecruiterMode,
    }),
    [recruiterMode, setRecruiterMode, toggleRecruiterMode],
  );

  return (
    <RecruiterModeContext.Provider value={value}>
      {children}
    </RecruiterModeContext.Provider>
  );
}

export function useRecruiterMode() {
  const context = useContext(RecruiterModeContext);

  if (!context) {
    throw new Error("useRecruiterMode must be used within RecruiterModeProvider.");
  }

  return context;
}

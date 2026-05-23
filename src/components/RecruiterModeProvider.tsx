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
    try {
      window.localStorage.removeItem(RECRUITER_MODE_STORAGE_KEY);
    } catch {
      // Ignore storage cleanup failures and keep the default mode.
    }

    setRecruiterModeState(false);
    document.body.removeAttribute("data-recruiter-mode");
  }, []);

  useEffect(() => {
    document.body.removeAttribute("data-recruiter-mode");
  }, [recruiterMode]);

  const setRecruiterMode = useCallback((_value: boolean) => {
    setRecruiterModeState(false);
  }, []);

  const toggleRecruiterMode = useCallback(() => {
    setRecruiterModeState(false);
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

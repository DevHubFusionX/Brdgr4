"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface LoadingContextType {
  phase: "enter" | "pause" | "fly-and-exit" | "done";
  setPhase: (phase: "enter" | "pause" | "fly-and-exit" | "done") => void;
  isHeroReady: boolean;
  setIsHeroReady: (ready: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType>({
  phase: "enter",
  setPhase: () => {},
  isHeroReady: false,
  setIsHeroReady: () => {},
});

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [phase, setPhase] = useState<"enter" | "pause" | "fly-and-exit" | "done">("enter");
  const [isHeroReady, setIsHeroReady] = useState(false);

  // Safety fallback: ensure hero is revealed even if loading is interrupted or cancelled
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHeroReady(true);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LoadingContext.Provider value={{ phase, setPhase, isHeroReady, setIsHeroReady }}>
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  return useContext(LoadingContext);
}

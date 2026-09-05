"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { useLoading } from "@/context/LoadingContext";
import ConnectingLogoAnimation from "./ConnectingLogoAnimation";

export default function LoadingScreen() {
  const { phase, setPhase, setIsHeroReady } = useLoading();
  const [animKey, setAnimKey] = useState(0);
  const [targetPos, setTargetPos] = useState<{ x: number; y: number; scale: number }>({
    x: 0,
    y: 0,
    scale: 1,
  });
  const logoRef = useRef<HTMLDivElement>(null);

  const measureTarget = useCallback(() => {
    const navLogoEl = document.getElementById("main-navbar-logo");
    const centerLogoEl = logoRef.current;

    if (navLogoEl && centerLogoEl) {
      const navRect = navLogoEl.getBoundingClientRect();
      const centerRect = centerLogoEl.getBoundingClientRect();

      const navCenterX = navRect.left + navRect.width / 2;
      const navCenterY = navRect.top + navRect.height / 2;

      const currentCenterX = centerRect.left + centerRect.width / 2;
      const currentCenterY = centerRect.top + centerRect.height / 2;

      // Calculate translation offset from center to navbar logo
      const deltaX = navCenterX - currentCenterX;
      const deltaY = navCenterY - currentCenterY;

      // Calculate scale ratio: navbar logo height vs centered logo initial height
      const scaleRatio = navRect.height / centerRect.height;

      setTargetPos({
        x: deltaX,
        y: deltaY,
        scale: scaleRatio || 0.65,
      });
      return true;
    }
    return false;
  }, []);

  const runSequence = useCallback(() => {
    setAnimKey((prev) => prev + 1);
    setPhase("enter");
    setIsHeroReady(false);
    document.body.style.overflow = "hidden";

    const navLogoEl = document.getElementById("main-navbar-logo");
    if (navLogoEl) {
      navLogoEl.style.opacity = "0";
    }

    // Step 1: Measure target coordinates early
    setTimeout(() => {
      measureTarget();
    }, 120);

    // Step 2: Settle in center
    const pauseTimer = setTimeout(() => {
      setPhase("pause");
      measureTarget();
    }, 600);

    // Step 3: Fly to navbar and scroll curtain up (1.95s) -> triggers hero animation as curtain lifts!
    const flyTimer = setTimeout(() => {
      measureTarget();
      setPhase("fly-and-exit");
      setIsHeroReady(true);
    }, 1950);

    // Step 4: Hand-off seamlessly to navbar logo (2.8s)
    const handoffTimer = setTimeout(() => {
      if (navLogoEl) {
        navLogoEl.style.transition = "opacity 0.2s ease-out";
        navLogoEl.style.opacity = "1";
      }
    }, 2800);

    // Step 5: Finished and restore page scroll
    const doneTimer = setTimeout(() => {
      setPhase("done");
      setIsHeroReady(true);
      document.body.style.overflow = "";
      if (navLogoEl) {
        navLogoEl.style.opacity = "1";
      }
    }, 2900);

    return () => {
      clearTimeout(pauseTimer);
      clearTimeout(flyTimer);
      clearTimeout(handoffTimer);
      clearTimeout(doneTimer);
    };
  }, [measureTarget, setPhase, setIsHeroReady]);

  useEffect(() => {
    const cleanup = runSequence();
    return () => {
      document.body.style.overflow = "";
      cleanup();
    };
  }, [runSequence]);

  return (
    <>
      {phase !== "done" && (
        <div className="fixed inset-0 z-[100] pointer-events-none select-none font-sans overflow-hidden">
          {/* ─── 1. Pure, Clean White Curtain (Slides down from top, then scrolls up) ─── */}
          <motion.div
            initial={{ y: "-100%" }}
            animate={
              phase === "fly-and-exit"
                ? { y: "-100%" }
                : { y: "0%" }
            }
            transition={
              phase === "fly-and-exit"
                ? { duration: 0.85, ease: [0.76, 0, 0.24, 1] }
                : { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
            }
            className="absolute inset-0 bg-white pointer-events-auto"
          />

          {/* ─── 2. Animated Connecting Logo (Connects in center, then smoothly glides to navbar) ─── */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              ref={logoRef}
              initial={{ opacity: 0, scale: 0.9, y: 12 }}
              animate={
                phase === "fly-and-exit"
                  ? {
                      x: targetPos.x,
                      y: targetPos.y,
                      scale: targetPos.scale,
                      opacity: [1, 1, 0.95, 0],
                      transition: {
                        duration: 0.85,
                        ease: [0.76, 0, 0.24, 1],
                        opacity: { times: [0, 0.75, 0.92, 1], duration: 0.85 },
                      },
                    }
                  : {
                      x: 0,
                      y: 0,
                      scale: 1,
                      opacity: 1,
                      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.05 },
                    }
              }
              className="flex items-center justify-center origin-center will-change-transform"
            >
              {/* Animated Connecting Logo (Gray skeleton -> Black connecting circuit) */}
              <ConnectingLogoAnimation key={animKey} />
            </motion.div>
          </div>
        </div>
      )}

      {/* ─── Replay Button (Discreet preview control in bottom-right corner) ─── */}
      {phase === "done" && (
        <button
          type="button"
          onClick={runSequence}
          aria-label="Replay intro loading animation"
          className="fixed bottom-4 right-4 z-40 px-3.5 py-2 rounded-full bg-white/90 hover:bg-white border border-slate-200 text-xs font-semibold text-slate-600 hover:text-black hover:border-slate-400 shadow-md shadow-slate-900/5 transition-all flex items-center gap-1.5 cursor-pointer backdrop-blur-md active:scale-95 group"
        >
          <span className="group-hover:rotate-180 transition-transform duration-500">↺</span>
          <span>Replay Loading</span>
        </button>
      )}
    </>
  );
}

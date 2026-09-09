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
    const navLogoIconEl = document.getElementById("main-navbar-logo-icon");
    const navLogoEl = navLogoIconEl || document.getElementById("main-navbar-logo");
    const centerLogoEl = logoRef.current;

    if (navLogoEl && centerLogoEl) {
      const navRect = navLogoEl.getBoundingClientRect();
      const centerRect = centerLogoEl.getBoundingClientRect();

      const navCenterX = navRect.left + navRect.width / 2;
      const navCenterY = navRect.top + navRect.height / 2;

      const currentCenterX = centerRect.left + centerRect.width / 2;
      const currentCenterY = centerRect.top + centerRect.height / 2;

      // Calculate translation offset from center to navbar logo icon
      const deltaX = navCenterX - currentCenterX;
      const deltaY = navCenterY - currentCenterY;

      // Calculate scale ratio: navbar logo icon height vs centered logo initial height
      const scaleRatio = navRect.height / centerRect.height;

      setTargetPos({
        x: deltaX,
        y: deltaY,
        scale: scaleRatio || 0.38,
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

    // Step 3: Fly to navbar and scroll curtain up (1.95s) -> triggers hero animation as curtain lifts
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
          {/* ─── 1. Hero Sky Gradient Curtain (With ambient sky lighting & glass arcs) ─── */}
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
            className="absolute inset-0 bg-[linear-gradient(180deg,#c8defc_0%,#d8e8fc_25%,#e5f0fe_55%,#edf5fe_80%,#f6f8fb_100%)] pointer-events-auto overflow-hidden"
          >
            {/* Ambient Sky Lighting Orb */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(147,197,253,0.65),transparent_70%)] pointer-events-none"
              aria-hidden="true"
            />

            {/* Top-Left: Soft Blue Radial Wash */}
            <div
              className="absolute top-0 left-0 w-[420px] h-[420px] bg-[radial-gradient(ellipse_at_top_left,rgba(147,197,253,0.55)_0%,rgba(191,219,254,0.35)_40%,transparent_70%)] pointer-events-none"
              aria-hidden="true"
            />

            {/* Top-Left: Crisp White Specular Glass Arc */}
            <svg
              className="absolute top-0 left-0 w-[240px] sm:w-[480px] h-[170px] sm:h-[350px] pointer-events-none overflow-visible"
              viewBox="0 0 500 370"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M -20,210 C 80,180 180,120 340,10"
                stroke="#FFFFFF"
                strokeWidth="12"
                strokeOpacity="0.45"
                strokeLinecap="round"
                className="blur-[6px]"
              />
              <path
                d="M -20,210 C 80,180 180,120 340,10"
                stroke="url(#screen-tl-arc)"
                strokeWidth="2.75"
                strokeLinecap="round"
              />
              <path
                d="M -10,250 C 90,210 190,150 330,45"
                stroke="url(#screen-tl-arc-soft)"
                strokeWidth="1.25"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="screen-tl-arc" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
                  <stop offset="25%" stopColor="#FFFFFF" stopOpacity="0.95" />
                  <stop offset="70%" stopColor="#FFFFFF" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="screen-tl-arc-soft" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
                  <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.45" />
                  <stop offset="80%" stopColor="#FFFFFF" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>

            {/* Bottom-Right: Soft Blue Radial Wash */}
            <div
              className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-[radial-gradient(ellipse_at_bottom_right,rgba(147,197,253,0.55)_0%,rgba(191,219,254,0.35)_40%,transparent_70%)] pointer-events-none"
              aria-hidden="true"
            />

            {/* Bottom-Right: Crisp White Specular Glass Arc */}
            <svg
              className="absolute bottom-0 right-0 w-[240px] sm:w-[480px] h-[170px] sm:h-[350px] pointer-events-none overflow-visible"
              viewBox="0 0 500 370"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M 160,360 C 320,260 420,200 520,-10"
                stroke="#FFFFFF"
                strokeWidth="12"
                strokeOpacity="0.45"
                strokeLinecap="round"
                className="blur-[6px]"
              />
              <path
                d="M 160,360 C 320,260 420,200 520,-10"
                stroke="url(#screen-br-arc)"
                strokeWidth="2.75"
                strokeLinecap="round"
              />
              <path
                d="M 170,390 C 325,290 420,230 510,25"
                stroke="url(#screen-br-arc-soft)"
                strokeWidth="1.25"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="screen-br-arc" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
                  <stop offset="30%" stopColor="#FFFFFF" stopOpacity="0.95" />
                  <stop offset="75%" stopColor="#FFFFFF" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="screen-br-arc-soft" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
                  <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.45" />
                  <stop offset="80%" stopColor="#FFFFFF" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          {/* ─── 2. Center Stage: Only Logo & Icon (Clean & Minimal) ─────────── */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Ambient Center Glow */}
            <div className="absolute w-[440px] sm:w-[620px] h-[440px] sm:h-[620px] rounded-full bg-[radial-gradient(circle,rgba(3,100,255,0.18)_0%,rgba(147,197,253,0.15)_50%,transparent_75%)] pointer-events-none blur-3xl" />

            {/* Flying Logo Anchor (3D Blue Squircle + BRDGR Typography) */}
            <motion.div
              ref={logoRef}
              initial={{ opacity: 0, scale: 0.92, y: 8 }}
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
              className="relative flex items-center justify-center origin-center will-change-transform z-10"
            >
              <ConnectingLogoAnimation key={animKey} />
            </motion.div>
          </div>
        </div>
      )}


    </>
  );
}

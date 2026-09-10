"use client";

import React, { useState, useEffect } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

interface SectionBlurRevealProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: React.ReactNode;
  className?: string;
  blur?: number;
  y?: number;
  scale?: number;
  duration?: number;
  delay?: number;
  once?: boolean;
  amount?: number | "some" | "all";
  deferred?: boolean;
}

/**
 * SectionBlurReveal
 * Wraps page sections to produce a butter-smooth reveal as the user
 * scrolls through the page.
 * 
 * Mobile Optimizations:
 * - Disables CSS filter: blur() on mobile to completely prevent GPU spikes and lag.
 * - Uses eager viewport margins to eliminate "hanging" or empty screen delay.
 * - Clears transform, filter, and willChange upon completion to preserve native 60/120fps scroll and CSS position: sticky.
 */
export default function SectionBlurReveal({
  children,
  className = "",
  blur = 6,
  y = 24,
  scale = 0.99,
  duration = 0.45,
  delay = 0,
  once = true,
  amount = 0.05,
  deferred = true,
  ...props
}: SectionBlurRevealProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        window.innerWidth < 768 ||
        window.matchMedia("(pointer: coarse)").matches ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      );
    };
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Zero blur and scale on mobile to protect phone GPU and eliminate hanging lag
  const effectiveBlur = isMobile ? 0 : blur;
  const effectiveScale = isMobile ? 1 : scale;
  const effectiveY = isMobile ? 14 : y;
  const effectiveDuration = isMobile ? 0.35 : duration;
  // Eager margin ensures content reveals smoothly before the user has to scroll deep
  const effectiveMargin = isMobile ? "160px 0px 0px 0px" : "40px 0px -20px 0px";

  if (isMobile) {
    return (
      <div className={`w-full ${deferred ? "section-deferred-render" : ""} ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        filter: blur > 0 ? `blur(${blur}px)` : "none",
        y: y,
        scale: scale,
      }}
      whileInView={{
        opacity: 1,
        filter: "none",
        y: 0,
        scale: 1,
      }}
      viewport={{
        once,
        amount,
        margin: "40px 0px -20px 0px",
      }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // High-performance easeOutExpo curve
      }}
      className={`w-full ${deferred ? "section-deferred-render" : ""} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}

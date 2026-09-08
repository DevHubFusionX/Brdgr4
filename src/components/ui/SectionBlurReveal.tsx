"use client";

import React, { useState } from "react";
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
}

/**
 * SectionBlurReveal
 * Wraps page sections to produce a smooth, cinematic blur-to-focus
 * animation as the user scrolls from section to section.
 * Clears transform upon completion to preserve native CSS position: sticky.
 */
export default function SectionBlurReveal({
  children,
  className = "",
  blur = 16,
  y = 36,
  scale = 0.985,
  duration = 0.85,
  delay = 0,
  once = true,
  amount = 0.1,
  ...props
}: SectionBlurRevealProps) {
  const [isAnimationDone, setIsAnimationDone] = useState(false);

  return (
    <motion.div
      initial={{
        opacity: 0,
        filter: `blur(${blur}px)`,
        y,
        scale,
      }}
      whileInView={{
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        scale: 1,
      }}
      viewport={{
        once,
        amount,
        margin: "-40px 0px -40px 0px",
      }}
      transition={{
        duration,
        delay,
        ease: [0.21, 1, 0.36, 1], // Custom smooth cubic-bezier curve
      }}
      onAnimationComplete={() => {
        setIsAnimationDone(true);
      }}
      style={{
        transform: isAnimationDone ? "none" : undefined,
        willChange: isAnimationDone ? "auto" : "transform, filter, opacity",
      }}
      className={`w-full ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}

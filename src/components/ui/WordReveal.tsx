"use client";

import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform, type Variants } from "framer-motion";

export interface WordRevealProps {
  /** The text string to reveal word by word */
  text?: string;
  children?: string;
  /** HTML tag to render: h1, h2, h3, h4, p, span, div */
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  /** CSS class applied to the outer container */
  className?: string;
  /** CSS class applied to each word */
  wordClassName?: string;
  /** Initial delay in seconds before word reveal starts */
  delay?: number;
  /** Stagger delay in seconds between each word */
  stagger?: number;
  /** Duration in seconds for each word's opacity transition */
  duration?: number;
  /** Resting opacity before reveal (default: 0.15 for subtle luxury look, or 0) */
  initialOpacity?: number;
  /** Whether the animation should trigger only once */
  once?: boolean;
  /** Mode: "in-view" (triggers on viewport enter with stagger) or "scroll" (driven by page scroll) */
  mode?: "in-view" | "scroll";
  /** Viewport margin offset to trigger */
  margin?: string;
  /** Explicit trigger: if provided, animation only runs when trigger is true */
  trigger?: boolean;
}

/**
 * WordReveal
 * 
 * Elegant, calm word-by-word opacity reveal component.
 * Supports viewport entry stagger and scroll-driven progress.
 */
export default function WordReveal({
  text,
  children,
  as: Component = "p",
  className = "",
  wordClassName = "",
  delay = 0.15,
  stagger = 0.04,
  duration = 0.45,
  initialOpacity = 0.15,
  once = true,
  mode = "in-view",
  margin = "-10%",
  trigger,
}: WordRevealProps) {
  const content = text || (typeof children === "string" ? children : "");
  const words = content.trim().split(/\s+/);
  const containerRef = useRef<HTMLDivElement>(null);

  // In-View mode state
  const isInView = useInView(containerRef, {
    once,
    margin: margin as any,
  });

  const isTriggered = trigger !== undefined ? trigger : true;
  const shouldAnimate = isTriggered && isInView;

  // Scroll mode state
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 45%"],
  });

  if (!content) return null;

  if (mode === "scroll") {
    return (
      <Component ref={containerRef as any} className={`inline-block ${className}`}>
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <ScrollWord
              key={`${word}-${i}`}
              word={word}
              progress={scrollYProgress}
              range={[start, end]}
              initialOpacity={initialOpacity}
              className={wordClassName}
            />
          );
        })}
      </Component>
    );
  }

  // Default "in-view" mode with configurable stagger delay
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: {
      opacity: initialOpacity,
      y: 2,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <Component ref={containerRef as any} className={className}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        animate={shouldAnimate ? "visible" : "hidden"}
        className="inline"
      >
        {words.map((word, i) => (
          <motion.span
            key={`${word}-${i}`}
            variants={wordVariants}
            className={`inline-block mr-[0.28em] transition-colors ${wordClassName}`}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Component>
  );
}

/** Internal helper for scroll-driven word opacity */
function ScrollWord({
  word,
  progress,
  range,
  initialOpacity,
  className = "",
}: {
  word: string;
  progress: any;
  range: [number, number];
  initialOpacity: number;
  className?: string;
}) {
  const opacity = useTransform(progress, range, [initialOpacity, 1]);

  return (
    <span className="relative inline-block mr-[0.28em]">
      {/* Background ghost word */}
      <span className="opacity-15 select-none">{word}</span>
      {/* Foreground illuminated word */}
      <motion.span
        style={{ opacity }}
        className={`absolute inset-0 transition-colors ${className}`}
      >
        {word}
      </motion.span>
    </span>
  );
}

"use client";

import React, { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

export interface AnimatedCounterProps {
  /** Numeric target OR formatted string like "99.9%", "+$14.8M", "3,400+", "100%", "+480 hrs" */
  value?: number | string;
  children?: number | string;
  /** Starting number (default: 0) */
  from?: number;
  /** Target number if value is omitted */
  to?: number;
  /** Optional custom prefix (e.g., "$", "+$", "<") */
  prefix?: string;
  /** Optional custom suffix (e.g., "%", "+", "M", " hrs") */
  suffix?: string;
  /** Number of decimal places (auto-detected if string passed) */
  decimals?: number;
  /** Duration in seconds (default: 1.8s) */
  duration?: number;
  /** Delay before animation starts (default: 0.1s) */
  delay?: number;
  /** Extra CSS classes */
  className?: string;
  /** Only animate once on scroll (default: true) */
  once?: boolean;
}

/**
 * Parses strings like "+$14.8M+", "99.9%", "3,400+", "+480 hrs", "$4.2M"
 * Returns parsed target, prefix, suffix, and decimal count.
 */
function parseNumberString(str: string) {
  // Only match numbers that optionally start with currency or math symbols (+, -, $, €, £, <, >, ~)
  const regex = /^([+\-$€£<>~]*\s*)([0-9,]+(?:\.[0-9]+)?)(.*)$/;
  const match = str.trim().match(regex);

  if (!match) {
    return null;
  }

  const detectedPrefix = match[1] ?? "";
  const rawNumStr = (match[2] ?? "").replace(/,/g, "");
  const detectedNum = parseFloat(rawNumStr);
  const detectedSuffix = match[3] ?? "";

  if (isNaN(detectedNum)) {
    return null;
  }

  const decMatch = rawNumStr.split(".")[1];
  const detectedDecimals = decMatch ? decMatch.length : 0;

  return {
    num: detectedNum,
    prefix: detectedPrefix,
    suffix: detectedSuffix,
    decimals: detectedDecimals,
  };
}

function formatNumber(num: number, dec: number): string {
  if (dec > 0) {
    const fixed = num.toFixed(dec);
    const parts = fixed.split(".");
    const intPart = parts[0] ?? "0";
    const decPart = parts[1] ?? "";
    const formattedInt = Math.abs(parseInt(intPart, 10)).toLocaleString("en-US");
    const sign = num < 0 ? "-" : "";
    return `${sign}${formattedInt}.${decPart}`;
  }
  return Math.round(num).toLocaleString("en-US");
}

/**
 * AnimatedCounter
 * 
 * Smoothly counts up from 0 to target number when scrolled into view.
 * GPU-friendly, precision eased, zero layout thrashing.
 */
export default function AnimatedCounter({
  value,
  children,
  from = 0,
  to,
  prefix,
  suffix,
  decimals,
  duration = 1.8,
  delay = 0.1,
  className = "",
  once = true,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once, margin: "-40px" });

  const rawInput = value ?? children;
  let targetNum = to ?? 0;
  let finalPrefix = prefix ?? "";
  let finalSuffix = suffix ?? "";
  let finalDecimals = decimals ?? 0;
  let isParsed = false;

  if (typeof rawInput === "string") {
    const parsed = parseNumberString(rawInput);
    if (parsed) {
      targetNum = to ?? parsed.num;
      finalPrefix = prefix ?? parsed.prefix;
      finalSuffix = suffix ?? parsed.suffix;
      finalDecimals = decimals ?? parsed.decimals;
      isParsed = true;
    } else {
      // Non-numeric string (e.g. "Tier-1"), just render directly
      return <span className={className}>{rawInput}</span>;
    }
  } else if (typeof rawInput === "number") {
    targetNum = rawInput;
    isParsed = true;
  }

  const [displayValue, setDisplayValue] = useState(() =>
    `${finalPrefix}${formatNumber(from, finalDecimals)}${finalSuffix}`
  );

  useEffect(() => {
    if (!isInView || !isParsed) return;

    const controls = animate(from, targetNum, {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1], // snappy launch with smooth decelerating landing
      onUpdate(latest) {
        setDisplayValue(
          `${finalPrefix}${formatNumber(latest, finalDecimals)}${finalSuffix}`
        );
      },
    });

    return () => controls.stop();
  }, [isInView, from, targetNum, duration, delay, finalPrefix, finalSuffix, finalDecimals, isParsed]);

  return (
    <span
      ref={ref}
      className={`tabular-nums inline-block ${className}`}
      aria-label={`${finalPrefix}${formatNumber(targetNum, finalDecimals)}${finalSuffix}`}
    >
      {displayValue}
    </span>
  );
}

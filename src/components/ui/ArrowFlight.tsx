"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface ArrowFlightProps {
  className?: string;
  sizeClass?: string;
  strokeWidth?: number;
}

export default function ArrowFlight({
  className = "",
  sizeClass = "w-4 h-4",
  strokeWidth = 2.2,
}: ArrowFlightProps) {
  return (
    <span
      className={`btn-arrow-conveyor relative inline-flex items-center justify-center overflow-hidden shrink-0 ${sizeClass} ${className}`}
      aria-hidden="true"
    >
      {/* Primary Arrow: slides forward to the right and fades out */}
      <ArrowRight
        className="arrow-primary w-full h-full shrink-0"
        strokeWidth={strokeWidth}
      />
      {/* Incoming Replacement Arrow: docks in from the left and snaps into place */}
      <ArrowRight
        className="arrow-incoming w-full h-full shrink-0"
        strokeWidth={strokeWidth}
      />
    </span>
  );
}

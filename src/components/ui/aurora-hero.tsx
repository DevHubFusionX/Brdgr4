"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface AuroraHeroProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  showSwitch?: boolean;
  children?: React.ReactNode;
  as?: React.ElementType;
}

export function AuroraHero({
  title,
  children,
  className,
  as: Component = "div",
  ...props
}: AuroraHeroProps) {
  return (
    <Component
      className={cn(
        "aurora-hero-wrapper w-full relative overflow-hidden bg-black text-white selection:bg-[#0364ff]/40 selection:text-white",
        className
      )}
      {...props}
    >
      <style>{`
        .aurora-hero-wrapper {
          background: #000000;
          font-family: inherit;
        }
        /* GPU-composited transform animation (zero CPU repaints) */
        @keyframes auroraDrift {
          0% {
            transform: translate3d(-4%, -2%, 0) rotate(0deg) scale(1);
          }
          50% {
            transform: translate3d(4%, 3%, 0) rotate(3deg) scale(1.05);
          }
          100% {
            transform: translate3d(-4%, -2%, 0) rotate(0deg) scale(1);
          }
        }
        @keyframes floatAurora {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(0, -12px, 0) scale(1.02); }
        }
        .aurora-hero-bg {
          width: 100%;
          height: 100%;
          position: absolute;
          inset: 0;
          background: #000000;
          overflow: hidden;
          contain: paint; /* Isolates background paints from page layout */
        }
        .aurora-stripes {
          position: absolute;
          inset: -30%;
          --stripes: repeating-linear-gradient(
            100deg, 
            #000000 0%, 
            #000000 7%, 
            transparent 10%, 
            transparent 12%, 
            #000000 16%
          );
          --rainbow: repeating-linear-gradient(
            105deg, 
            rgba(0, 92, 255, 0.65) 0%, 
            rgba(3, 100, 255, 0.75) 10%, 
            rgba(111, 166, 255, 0.70) 18%, 
            rgba(56, 189, 248, 0.50) 26%, 
            rgba(0, 64, 193, 0.70) 34%, 
            rgba(111, 166, 255, 0.65) 43%, 
            rgba(3, 100, 255, 0.60) 50%
          );
          background-image: var(--stripes), var(--rainbow);
          background-size: 200% 200%;
          background-position: 50% 50%;
          filter: blur(20px) saturate(175%);
          opacity: 0.65;
          mask-image: radial-gradient(ellipse at 50% 25%, black 45%, transparent 85%);
          -webkit-mask-image: radial-gradient(ellipse at 50% 25%, black 45%, transparent 85%);
          will-change: transform;
          backface-visibility: hidden;
          animation: auroraDrift 28s ease-in-out infinite alternate;
        }
      `}</style>

      {/* Aurora dynamic animated background on pure black */}
      <div className="aurora-hero-bg pointer-events-none" aria-hidden="true">
        {/* Animated fluid aurora stripes (GPU accelerated) */}
        <div className="aurora-stripes" />

        {/* Ambient glowing radial light flares in brand electric & lightning blues */}
        <div 
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[850px] sm:w-[1100px] h-[550px] rounded-full bg-gradient-to-tr from-[#005CFF]/30 via-[#0364FF]/25 to-[#38BDF8]/18 blur-[80px] pointer-events-none animate-[floatAurora_10s_ease-in-out_infinite]" 
          style={{ willChange: "transform", backfaceVisibility: "hidden" }}
        />
        <div className="absolute top-1/4 -right-28 w-[550px] h-[550px] rounded-full bg-gradient-to-bl from-[#0364FF]/20 via-[#6FA6FF]/15 to-transparent blur-[90px] pointer-events-none" />
        <div className="absolute top-1/3 -left-28 w-[550px] h-[550px] rounded-full bg-gradient-to-br from-[#005CFF]/20 via-[#38BDF8]/15 to-transparent blur-[90px] pointer-events-none" />

        {/* Soft bottom fade to solid black */}
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />
      </div>

      {/* Children container for 1-column layout elements */}
      {children && <div className="relative z-20 w-full">{children}</div>}
    </Component>
  );
}

export default AuroraHero;

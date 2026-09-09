"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import ConnectingLogoAnimation from "@/components/landing/ConnectingLogoAnimation";

interface UnderConstructionProps {
  portalName?: string;
  title?: string;
  description?: string;
}

export default function UnderConstruction({
  portalName,
  title = "Under Construction",
  description = "We are currently engineering this section. Safe agreements, verified attribution rails, and guaranteed settlement will be available here soon.",
}: UnderConstructionProps) {
  return (
    <div className="relative min-h-[90vh] w-full flex flex-col items-center justify-center font-sans overflow-hidden select-none px-4 py-16 sm:py-24 bg-[linear-gradient(180deg,#c8defc_0%,#d8e8fc_25%,#e5f0fe_55%,#edf5fe_80%,#f6f8fb_100%)]">
      {/* ─── 1. Ambient Sky Lighting Orb ───────────────────────────────────── */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(147,197,253,0.65),transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />

      {/* ─── 2. Top-Left: Soft Blue Radial Wash & Specular Glass Arc ────────── */}
      <div
        className="absolute top-0 left-0 w-[360px] sm:w-[500px] h-[360px] sm:h-[500px] bg-[radial-gradient(ellipse_at_top_left,rgba(147,197,253,0.55)_0%,rgba(191,219,254,0.35)_40%,transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />
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

      {/* ─── 3. Bottom-Right: Soft Blue Radial Wash & Specular Glass Arc ────── */}
      <div
        className="absolute bottom-0 right-0 w-[360px] sm:w-[500px] h-[360px] sm:h-[500px] bg-[radial-gradient(ellipse_at_bottom_right,rgba(147,197,253,0.55)_0%,rgba(191,219,254,0.35)_40%,transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />
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

      {/* ─── 4. Center Radiant Glow Orb ────────────────────────────────────── */}
      <div className="absolute w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-[radial-gradient(circle,rgba(3,100,255,0.2)_0%,rgba(147,197,253,0.18)_50%,transparent_75%)] pointer-events-none blur-3xl" />

      {/* ─── 5. Foreground Content Card ────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-xl w-full text-center flex flex-col items-center"
      >
        {/* Animated 3D Logo Icon */}
        <div className="mb-6 sm:mb-8">
          <ConnectingLogoAnimation />
        </div>

        {/* Portal Identifier Pill */}
        {portalName && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="mb-3 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/70 border border-white/80 shadow-2xs backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-[#0364FF] animate-pulse" />
            <span className="text-xs font-semibold text-slate-700 tracking-tight">
              {portalName}
            </span>
          </motion.div>
        )}

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-[-0.03em] leading-tight"
        >
          {title}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.5 }}
          className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-md mx-auto"
        >
          {description}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto"
        >
          {/* Primary Home Pill Button */}
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#0f172a] hover:bg-black text-white text-xs sm:text-sm font-semibold tracking-tight shadow-md hover:shadow-lg active:scale-[0.98] transition-all cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>

          {/* Secondary Demo Pill Button */}
          <Link
            href="/?demo=true"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-full bg-white/90 hover:bg-white text-slate-800 hover:text-slate-950 text-xs sm:text-sm font-semibold tracking-tight border border-slate-200/80 shadow-2xs hover:shadow-xs active:scale-[0.98] transition-all cursor-pointer backdrop-blur-xs"
          >
            <span>Explore Overview</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

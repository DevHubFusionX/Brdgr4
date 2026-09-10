"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import WordReveal from "@/components/ui/WordReveal";
import {
  ShieldCheck,
  FileCheck2,
  Activity,
  Lock,
  CheckCircle2,
  Zap,
  Building2,
  UserPlus,
  ArrowRight
} from "lucide-react";

/* ─── Butter-Smooth 3D Tilt Card with Progressive Sticky Stacking ────────── */
function Engine3DCard({
  children,
  className = "",
  glowColor = "from-[#6FA6FF]/25 via-[#0364FF]/12",
  delay = 0,
  index = 0,
  stepNumber,
}: {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  delay?: number;
  index?: number;
  stepNumber?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [isAnimationDone, setIsAnimationDone] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    setIsMobile(
      window.innerWidth < 768 ||
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  // Normalized motion values (-0.5 to 0.5)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Butter-smooth physics springs for mouse tilt (only active on desktop hover)
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), {
    damping: 24,
    stiffness: 220,
    mass: 0.25,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), {
    damping: 24,
    stiffness: 220,
    mass: 0.25,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const xRatio = (e.clientX - rect.left) / rect.width;
    const yRatio = (e.clientY - rect.top) / rect.height;

    mouseX.set(xRatio - 0.5);
    mouseY.set(yRatio - 0.5);
    setGlarePos({ x: xRatio * 100, y: yRatio * 100 });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      style={{
        top: `calc(4.75rem + ${index * 24}px)`,
        zIndex: index + 10,
        willChange: "transform",
        backfaceVisibility: "hidden",
      }}
      className="sticky w-full"
    >
      {/* ─── Card Motion Frame ────────────────────────────────────────── */}
      <motion.div
        ref={ref}
        initial={{
          opacity: 0,
          y: isMobile ? 16 : 28,
          scale: isMobile ? 1 : 0.985,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: isMobile ? 0.02 : 0.08,
          margin: isMobile ? "60px 0px -10px 0px" : "0px"
        }}
        transition={{
          duration: isMobile ? 0.4 : 0.55,
          delay: isMobile ? 0 : delay,
          ease: [0.16, 1, 0.3, 1]
        }}
        onAnimationComplete={() => setIsAnimationDone(true)}
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: !isMobile && isHovered ? rotateX : 0,
          rotateY: !isMobile && isHovered ? rotateY : 0,
          transform: isAnimationDone && !isHovered ? "none" : undefined,
          transformStyle: !isMobile && isHovered ? "preserve-3d" : undefined,
        }}
        className={`group relative rounded-[22px] sm:rounded-[28px] bg-white sm:bg-white/98 sm:backdrop-blur-xl border card-specular-rim p-5 sm:p-7 md:p-9 flex flex-col justify-between transition-all duration-300 min-h-[250px] sm:min-h-[320px] md:min-h-[360px] overflow-hidden select-none shadow-[0_14px_36px_-6px_rgba(3,100,255,0.18),0_4px_16px_rgba(15,23,42,0.06),inset_0_1.5px_0_rgba(255,255,255,1)] border-blue-200/90 hover:border-blue-400/80 hover:shadow-[0_24px_56px_-8px_rgba(3,100,255,0.28),0_8px_24px_-4px_rgba(15,23,42,0.08),inset_0_1.5px_0_#ffffff] ${className}`}
      >
        {/* Specular Beveled Crystal Highlight along the top rim */}
        <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent opacity-90 pointer-events-none" />

        {/* Ambient colored background blur orb */}
        <div
          className={`absolute -top-16 -right-16 w-52 sm:w-60 h-52 sm:h-60 rounded-full bg-gradient-to-br ${glowColor} to-transparent blur-[65px] pointer-events-none group-hover:scale-125 transition-transform duration-700`}
          aria-hidden="true"
        />

        {/* Dynamic Specular Glass Glare that tracks mouse position */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            opacity: isHovered ? 0.65 : 0,
            background: `radial-gradient(circle 260px at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.25) 45%, transparent 70%)`,
          }}
        />

        {/* Hero Section Style Overlay Background Number & Light Effects */}
        {stepNumber !== undefined && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0" aria-hidden="true">
            {/* Top-Right Soft Sky Glow Wash (matching Hero Section Card) */}
            <div
              className="absolute top-0 right-0 w-52 sm:w-72 h-52 sm:h-72 bg-[radial-gradient(ellipse_at_top_right,rgba(147,197,253,0.65)_0%,rgba(191,219,254,0.3)_40%,transparent_72%)]"
            />

            {/* Crisp White Arc Cutting Through Blue Gradient (matching Hero Section Card) */}
            <svg
              className="absolute top-0 right-0 w-36 sm:w-56 h-28 sm:h-44 pointer-events-none overflow-visible opacity-90"
              viewBox="0 0 220 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Diffuse white halo */}
              <path
                d="M 35,0 C 80,50 135,80 220,105"
                stroke="#FFFFFF"
                strokeWidth="10"
                strokeOpacity="0.5"
                strokeLinecap="round"
                className="blur-[5px]"
              />
              {/* Razor-sharp white glass reflection arc */}
              <path
                d="M 35,0 C 80,50 135,80 220,105"
                stroke={`url(#engine-hero-arc-${stepNumber})`}
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id={`engine-hero-arc-${stepNumber}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
                  <stop offset="30%" stopColor="#FFFFFF" stopOpacity="0.95" />
                  <stop offset="75%" stopColor="#FFFFFF" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>

            {/* Giant Watermark Background Step Number */}
            <div
              className="absolute -top-2 right-2 sm:-top-1 sm:right-5 font-black text-[105px] sm:text-[145px] md:text-[170px] leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#0252D4]/48 via-[#0364FF]/26 to-[#6FA6FF]/10 drop-shadow-[0_2px_12px_rgba(3,100,255,0.12)] group-hover:scale-105 transition-all duration-300"
            >
              {stepNumber}
            </div>
          </div>
        )}

        {/* Content with 3D Parallax Depth */}
        <div
          style={{ transform: "translateZ(20px)" }}
          className="relative z-10 flex flex-col justify-between h-full"
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
}

export default function EngineSection() {
  return (
    <section
      style={{ fontFamily: "var(--font-mulish), Mulish, sans-serif" }}
      className="relative w-full bg-[#f8fafc] py-14 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 font-sans border-t border-b border-slate-200/80"
    >
      {/* ─── Ambient Atmospheric Blur Orbs (Scoped container) ─────────────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-0" aria-hidden="true">
        <div className="absolute -top-32 -right-32 w-[700px] lg:w-[1000px] h-[600px] rounded-full bg-gradient-to-bl from-[#6FA6FF]/20 via-[#0364FF]/10 to-transparent blur-[140px]" />
        <div className="absolute -bottom-32 -left-20 w-[600px] h-[550px] rounded-full bg-gradient-to-tr from-[#005CFF]/15 via-[#6FA6FF]/10 to-transparent blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* ─── 2-Column Layout: Left Sticky Pinned, Right Stacking Deck ─────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-start">

          {/* ═══════════════════════════════════════════════════════════════════ */}
          {/* ─── LEFT COLUMN: STICKY & PINNED ─────────────────────────────────── */}
          {/* ═══════════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start space-y-5 sm:space-y-8">
            <div>
              {/* Eyebrow Tag with Square Accent */}
              <div className="inline-flex items-center gap-2.5 text-xs font-bold text-[#0364FF] uppercase tracking-wider mb-3 sm:mb-4">
                <span className="w-2.5 h-2.5 bg-[#0364FF] rounded-[2px]" />
                <span>THE OPERATING ENGINE</span>
              </div>

              {/* Large Headline with WordReveal */}
              <WordReveal
                as="h2"
                delay={0.1}
                stagger={0.035}
                className="text-2xl sm:text-4xl lg:text-[40px] font-normal text-neutral-900 tracking-[-0.03em] leading-[1.2]"
                text="Automated, reliable, guaranteed: partnership infrastructure built for scale."
              />

              {/* Context Description */}
              <p className="mt-3.5 sm:mt-5 text-sm sm:text-base text-neutral-600 font-normal leading-relaxed">
                Run your entire partnership program on autopilot. Scale your partner network, eliminate tracking disputes, and pay everyone on time without touching a spreadsheet.
              </p>
            </div>

            {/* ─── Value Pillars Checklist ───────────────────────────────────── */}
            <div className="pt-5 sm:pt-6 border-t border-slate-200/90 space-y-2.5 sm:space-y-3.5">
              <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-neutral-800">
                <div className="w-5 h-5 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0364FF]" />
                </div>
                <span>Vetted partners & clear contracts</span>
              </div>

              <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-neutral-800">
                <div className="w-5 h-5 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0364FF]" />
                </div>
                <span>Real-time performance tracking</span>
              </div>

              <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-neutral-800">
                <div className="w-5 h-5 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0364FF]" />
                </div>
                <span>Secure payments & guaranteed payouts</span>
              </div>

              <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-neutral-800">
                <div className="w-5 h-5 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0364FF]" />
                </div>
                <span>Automatic records & activity history</span>
              </div>
            </div>

            {/* Bottom Trust Micro-Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-blue-50/70 border border-blue-100 text-[11px] sm:text-xs font-medium text-blue-900">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0364FF] shrink-0" />
              <span>No informal deals. Just clear, secure, and reliable partnerships.</span>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════════════ */}
          {/* ─── RIGHT COLUMN: STACKING CARDS ON SCROLL ───────────────────────── */}
          {/* ═══════════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-10 pb-[30vh] sm:pb-[40vh]">

            {/* ─── Card 0: How It Works (Hero Sky Background & White Arc Glass Styling) ── */}
            <Engine3DCard
              glowColor="from-[#0364FF]/25 via-[#6FA6FF]/15"
              className="!bg-[linear-gradient(160deg,#c8defc_0%,#d8e8fc_25%,#eaf2fe_55%,#f6f8fb_85%,#ffffff_100%)] !border-blue-200/90 shadow-blue-pop-hero overflow-hidden"
              delay={0}
              index={0}
            >
              {/* ─── Hero Style Top-Right: Soft Blue Gradient Wash ───────── */}
              <div
                className="absolute -top-16 -right-16 w-[320px] sm:w-[400px] h-[320px] sm:h-[400px] bg-[radial-gradient(ellipse_at_top_right,rgba(147,197,253,0.7)_0%,rgba(191,219,254,0.4)_40%,transparent_70%)] pointer-events-none -z-0"
                aria-hidden="true"
              />

              {/* ─── Hero Style Top-Right: Crisp White Glass Arc ─────────── */}
              <svg
                className="absolute top-0 right-0 w-[240px] sm:w-[360px] h-[160px] sm:h-[240px] pointer-events-none overflow-visible -z-0"
                viewBox="0 0 360 240"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {/* Diffuse white halo */}
                <path
                  d="M 60,0 C 130,80 220,130 380,160"
                  stroke="#FFFFFF"
                  strokeWidth="12"
                  strokeOpacity="0.5"
                  strokeLinecap="round"
                  className="blur-[6px]"
                />
                {/* Razor-sharp white glass reflection arc */}
                <path
                  d="M 60,0 C 130,80 220,130 380,160"
                  stroke="url(#card-white-arc)"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                />
                {/* Subtle secondary glass refraction line */}
                <path
                  d="M 90,0 C 150,75 235,120 370,145"
                  stroke="url(#card-white-arc-soft)"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="card-white-arc" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
                    <stop offset="30%" stopColor="#FFFFFF" stopOpacity="0.95" />
                    <stop offset="75%" stopColor="#FFFFFF" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="card-white-arc-soft" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
                    <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.45" />
                    <stop offset="80%" stopColor="#FFFFFF" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="relative z-10 flex flex-col justify-between h-full gap-6 sm:gap-8">
                {/* ─── Top Header: Icon + Heading + Subtitle ───────────────── */}
                <div>
                  {/* Top Left Icon: Light-blue circular badge matching hero & reference image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: -6 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#d0e5fc] border border-white/90 shadow-sm flex items-center justify-center text-[#0364FF] mb-3.5 sm:mb-4"
                  >
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="4" y1="9" x2="20" y2="9" />
                      <circle cx="8" cy="9" r="2.5" fill="currentColor" />
                      <line x1="4" y1="15" x2="20" y2="15" />
                      <circle cx="16" cy="15" r="2.5" fill="currentColor" />
                    </svg>
                  </motion.div>

                  <WordReveal
                    as="h3"
                    delay={0.15}
                    stagger={0.03}
                    className="text-xl sm:text-2xl md:text-[26px] font-bold text-neutral-900 tracking-tight leading-snug"
                    text="HOW IT WORKS"
                  />

                  <WordReveal
                    as="p"
                    delay={0.25}
                    stagger={0.015}
                    className="text-xs sm:text-sm md:text-base text-neutral-600 font-normal leading-relaxed mt-1.5 max-w-xl"
                    text="4 clear, structured processes built to run smoothly, from onboarding to payout."
                  />
                </div>

                {/* ─── 4-Step Process Stepper in Clean Grayscale with Staggered Animation ── */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-3 md:gap-4 items-start pt-3 sm:pt-5 border-t border-slate-200/70">
                  {[
                    {
                      num: 1,
                      title: "Onboard",
                      desc: "Invite and verify partners, set up agreements.",
                    },
                    {
                      num: 2,
                      title: "Track",
                      desc: "Monitor performance and activity in real time.",
                    },
                    {
                      num: 3,
                      title: "Approve",
                      desc: "Review and confirm commissions & payouts.",
                    },
                    {
                      num: 4,
                      title: "Pay",
                      desc: "Automated, secure payouts — on time, every time.",
                    },
                  ].map((step, idx, arr) => {
                    const baseDelay = 0.32 + idx * 0.18;
                    return (
                      <div key={step.num} className="flex flex-col items-start text-left group">
                        {/* Step Number Badge + Connector Arrow */}
                        <div className="flex items-center justify-between w-full mb-2.5 sm:mb-3">
                          <motion.div
                            initial={{ opacity: 0, scale: 0.75, y: 8 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.45,
                              delay: baseDelay,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-900 text-white font-bold text-xs sm:text-sm flex items-center justify-center shadow-md shadow-slate-900/15 ring-4 ring-white/90 group-hover:bg-[#0364FF] transition-colors duration-200"
                          >
                            {step.num}
                          </motion.div>

                          {idx < arr.length - 1 && (
                            <motion.div
                              initial={{ opacity: 0, x: -6 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.35,
                                delay: baseDelay + 0.12,
                                ease: "easeOut",
                              }}
                              className="hidden sm:flex items-center justify-center flex-1 px-2"
                            >
                              <ArrowRight className="w-3.5 h-3.5 text-slate-400/80" />
                            </motion.div>
                          )}
                        </div>

                        {/* Title with WordReveal */}
                        <WordReveal
                          as="span"
                          text={step.title}
                          delay={baseDelay + 0.05}
                          stagger={0.03}
                          initialOpacity={0}
                          className="text-sm sm:text-[15px] font-bold text-neutral-900 tracking-tight block"
                        />

                        {/* Description with WordReveal */}
                        <WordReveal
                          as="p"
                          text={step.desc}
                          delay={baseDelay + 0.1}
                          stagger={0.02}
                          initialOpacity={0}
                          className="text-[11px] sm:text-xs text-neutral-600 font-normal leading-relaxed mt-1"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </Engine3DCard>

            {/* ─── Card 1: Recruit ────────────────────────────────────────────── */}
            <Engine3DCard
              glowColor="from-[#0364FF]/22 via-[#6FA6FF]/12"
              delay={0.04}
              index={1}
              stepNumber={1}
            >
              {/* Top Elevated Floating Stage */}
              <div className="h-20 sm:h-28 md:h-32 flex items-center justify-center">
                <div className="relative p-3 sm:p-4 rounded-2xl bg-white/95 border border-slate-100/90 shadow-md shadow-slate-300/30 group-hover:border-[#0364FF]/40 transition-all duration-300 group-hover:scale-105 flex items-center gap-2.5 sm:gap-3 max-w-full">
                  <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0364FF] shrink-0">
                    <UserPlus className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white animate-pulse" />
                  </div>

                  <div className="flex flex-col text-left min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-neutral-900 truncate">Sourced Network</span>
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    </div>
                    <span className="text-[10px] text-neutral-400 font-medium truncate">Curated Growth Talent</span>
                  </div>

                  <span className="text-[10px] font-bold text-[#0364FF] bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100 ml-1 shrink-0">
                    Active
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="mt-2 sm:mt-4">
                <h4 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight">
                  Recruit
                </h4>
                <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed mt-1.5 sm:mt-2.5">
                  We source the right growth partners from our verified network so you don’t have to .
                </p>
              </div>
            </Engine3DCard>

            {/* ─── Card 2: Vet & Match ────────────────────────────────────────── */}
            <Engine3DCard
              glowColor="from-[#6FA6FF]/30 via-[#0364FF]/15"
              delay={0.04}
              index={2}
              stepNumber={2}
            >
              {/* Top Elevated Floating Stage */}
              <div className="h-20 sm:h-28 md:h-32 flex items-center justify-center">
                <div className="relative p-3 sm:p-4 rounded-2xl bg-white/95 border border-slate-100/90 shadow-md shadow-slate-300/30 group-hover:border-[#0364FF]/40 transition-all duration-300 group-hover:scale-105 flex items-center gap-2.5 sm:gap-3 max-w-full">
                  <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0364FF] shrink-0">
                    <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white animate-pulse" />
                  </div>

                  <div className="flex flex-col text-left min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-neutral-900 truncate">Audited Partner</span>
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    </div>
                    <span className="text-[10px] text-neutral-400 font-medium truncate">99.8% Compliance Score</span>
                  </div>

                  <span className="text-[10px] font-bold text-[#0364FF] bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100 ml-1 shrink-0">
                    Vetted
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="mt-2 sm:mt-4">
                <h4 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight">
                  Vet & Match
                </h4>
                <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed mt-1.5 sm:mt-2.5">
                  Every partner is checked for real audience engagement, clean compliance history, and proven conversion results before matching with your brand.
                </p>
              </div>
            </Engine3DCard>

            {/* ─── Card 3: Contract & Terms ───────────────────────────────────── */}
            <Engine3DCard
              glowColor="from-[#005CFF]/25 via-[#6FA6FF]/15"
              delay={0.04}
              index={3}
              stepNumber={3}
            >
              {/* Top Elevated Floating Stage */}
              <div className="h-20 sm:h-28 md:h-32 flex items-center justify-center">
                <div className="relative p-3 sm:p-4 rounded-2xl bg-white/95 border border-slate-100/90 shadow-md shadow-slate-300/30 group-hover:border-[#0364FF]/40 transition-all duration-300 group-hover:scale-105 flex items-center gap-2.5 sm:gap-3 max-w-full">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-sm shrink-0">
                    <FileCheck2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>

                  <div className="flex flex-col text-left min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-neutral-900 truncate">Bilateral Agreement</span>
                      <Lock className="w-3 h-3 text-indigo-600 shrink-0" />
                    </div>
                    <span className="text-[10px] text-neutral-400 font-medium truncate">Locked CPA & Terms</span>
                  </div>

                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100 ml-1 shrink-0">
                    Enforced
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="mt-2 sm:mt-4">
                <h4 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight">
                  Contract & Terms
                </h4>
                <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed mt-1.5 sm:mt-2.5">
                  Replace informal DMs and slow legal reviews. Simple digital contracts lock commission terms and protect direct partner relationships before work begins.
                </p>
              </div>
            </Engine3DCard>

            {/* ─── Card 4: Real-Time Tracking ─────────────────────────────────── */}
            <Engine3DCard
              glowColor="from-[#0364FF]/25 via-[#6FA6FF]/18"
              delay={0.04}
              index={4}
              stepNumber={4}
            >
              {/* Top Elevated Floating Stage */}
              <div className="h-20 sm:h-28 md:h-32 flex items-center justify-center">
                <div className="relative p-3 sm:p-4 rounded-2xl bg-white/95 border border-slate-100/90 shadow-md shadow-slate-300/30 group-hover:border-[#0364FF]/40 transition-all duration-300 group-hover:scale-105 flex items-center gap-2.5 sm:gap-3 max-w-full">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-50 border border-blue-200 text-[#0364FF] flex items-center justify-center shrink-0">
                    <Activity className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
                  </div>

                  <div className="flex flex-col text-left min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-neutral-900 truncate">Direct S2S Rail</span>
                      <Zap className="w-3 h-3 text-amber-500 shrink-0" />
                    </div>
                    <span className="text-[10px] text-neutral-400 font-medium truncate">Sub-14ms Telemetry</span>
                  </div>

                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100 ml-1 shrink-0">
                    99.9%
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="mt-2 sm:mt-4">
                <h4 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight">
                  Real-Time Tracking
                </h4>
                <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed mt-1.5 sm:mt-2.5">
                  See where your referrals come from, track results accurately, and keep fake activity out.
                </p>
              </div>
            </Engine3DCard>

            {/* ─── Card 5: Payment Settlement ─────────────────────────────────── */}
            <Engine3DCard
              glowColor="from-[#005CFF]/22 via-[#6FA6FF]/15"
              delay={0.04}
              index={5}
              stepNumber={5}
            >
              {/* Top Elevated Floating Stage */}
              <div className="h-20 sm:h-28 md:h-32 flex items-center justify-center">
                <div className="relative p-3 sm:p-4 rounded-2xl bg-white/95 border border-slate-100/90 shadow-md shadow-slate-300/30 group-hover:border-[#0364FF]/40 transition-all duration-300 group-hover:scale-105 flex items-center gap-2.5 sm:gap-3 max-w-full">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center font-bold text-sm shrink-0">
                    $
                  </div>

                  <div className="flex flex-col text-left min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-neutral-900 truncate">USD Escrow Rails</span>
                      <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                    </div>
                    <span className="text-[10px] text-neutral-400 font-medium truncate">Monthly Calendar Payout</span>
                  </div>

                  <span className="text-[10px] font-bold text-[#0364FF] bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100 ml-1 shrink-0">
                    Guaranteed
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="mt-2 sm:mt-4">
                <h4 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight">
                  Payment Settlement
                </h4>
                <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed mt-1.5 sm:mt-2.5">
                  Automated, transparent and on time. Partners get paid according to agreed terms with full transaction history.
                </p>
              </div>
            </Engine3DCard>

          </div>
        </div>
      </div>
    </section>
  );
}

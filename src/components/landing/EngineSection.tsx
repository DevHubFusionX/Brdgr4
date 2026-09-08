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
  ArrowRight,
  Building2
} from "lucide-react";

/* ─── Butter-Smooth 3D Tilt Card with Progressive Sticky Stacking ────────── */
function Engine3DCard({
  children,
  className = "",
  glowColor = "from-[#6FA6FF]/25 via-[#0364FF]/12",
  delay = 0,
  index = 0,
}: {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  delay?: number;
  index?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });

  // Normalized motion values (-0.5 to 0.5)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Butter-smooth physics springs for mouse tilt
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    damping: 24,
    stiffness: 220,
    mass: 0.25,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    damping: 24,
    stiffness: 220,
    mass: 0.25,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
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
        top: `calc(4.75rem + ${index * 10}px)`,
        zIndex: index + 10,
      }}
      className="sticky w-full"
    >
      {/* ─── Card Motion Frame ────────────────────────────────────────── */}
      <motion.div
        ref={ref}
        initial={{ 
          opacity: 0, 
          y: 35, 
          scale: 0.98, 
        }}
        whileInView={{ 
          opacity: 1, 
          y: 0, 
          scale: 1, 
        }}
        viewport={{ 
          once: true, 
          amount: 0.12, 
          margin: "-20px" 
        }}
        transition={{ 
          duration: 0.6, 
          delay, 
          ease: [0.16, 1, 0.3, 1] 
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={`group relative rounded-[22px] sm:rounded-[28px] bg-white/98 backdrop-blur-xl border card-specular-rim p-5 sm:p-7 md:p-9 flex flex-col justify-between transition-all duration-300 min-h-[250px] sm:min-h-[320px] md:min-h-[360px] overflow-hidden select-none shadow-[0_10px_28px_-6px_rgba(3,100,255,0.12),0_4px_16px_rgba(15,23,42,0.05),inset_0_1px_0_rgba(255,255,255,0.95)] border-blue-100/90 hover:border-blue-300/90 hover:shadow-[0_20px_48px_-8px_rgba(3,100,255,0.22),0_8px_24px_-4px_rgba(15,23,42,0.06),inset_0_1.5px_0_#ffffff] ${className}`}
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
                <span>Audited partner vetting & bilateral contracts</span>
              </div>

              <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-neutral-800">
                <div className="w-5 h-5 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0364FF]" />
                </div>
                <span>Sub-14ms direct server-to-server tracking</span>
              </div>

              <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-neutral-800">
                <div className="w-5 h-5 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0364FF]" />
                </div>
                <span>USD escrow rails with guaranteed monthly payouts</span>
              </div>

              <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-neutral-800">
                <div className="w-5 h-5 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0364FF]" />
                </div>
                <span>100% immutable automated audit ledgers</span>
              </div>
            </div>

            {/* Bottom Trust Micro-Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-blue-50/70 border border-blue-100 text-[11px] sm:text-xs font-medium text-blue-900">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0364FF] shrink-0" />
              <span>No informal deals. Just clear, reliable software.</span>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════════════ */}
          {/* ─── RIGHT COLUMN: STACKING CARDS ON SCROLL ───────────────────────── */}
          {/* ═══════════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-8">
            
            {/* ─── Card 0: Narrative Overview Block ──────────────────────────── */}
            <Engine3DCard
              glowColor="from-[#0364FF]/20 via-[#6FA6FF]/10"
              className="bg-white/95"
              delay={0}
              index={0}
            >
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0364FF] text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4 border border-blue-100/80">
                  <ArrowRight className="w-3.5 h-3.5" />
                  CORE ADVANTAGE
                </div>

                <WordReveal
                  as="h3"
                  delay={0.15}
                  stagger={0.03}
                  className="text-xl sm:text-2xl md:text-[26px] font-bold text-neutral-900 tracking-tight leading-snug mb-2.5 sm:mb-4"
                  text="Why manage partnerships on BRDGR?"
                />

                <WordReveal
                  as="p"
                  delay={0.25}
                  stagger={0.015}
                  className="text-xs sm:text-sm md:text-base text-neutral-600 font-normal leading-relaxed mb-4 sm:mb-6"
                  text="Run your entire partnership program on autopilot. Scale your partner network, eliminate tracking disputes, and pay everyone on time without touching a spreadsheet."
                />
              </div>

              <div className="pt-4 sm:pt-6 border-t border-slate-200/80 flex items-center justify-between gap-2">
                <span className="text-xs sm:text-sm font-semibold text-neutral-900">
                  Zero spreadsheets · 100% automated
                </span>
                <span className="text-[11px] sm:text-xs font-bold text-[#0364FF] bg-blue-50 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-blue-100 shrink-0">
                  Turnkey Infrastructure
                </span>
              </div>
            </Engine3DCard>

            {/* ─── Card 1: Vet & Match ────────────────────────────────────────── */}
            <Engine3DCard
              glowColor="from-[#6FA6FF]/30 via-[#0364FF]/15"
              delay={0.04}
              index={1}
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
                <div className="text-[10px] sm:text-[11px] font-bold tracking-wider text-[#0364FF] uppercase mb-1">
                  STAGE 01 · AUDITED PARTNERS ONLY
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight">
                  Vet & Match
                </h4>
                <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed mt-1.5 sm:mt-2.5">
                  Every partner is checked for real audience engagement, clean compliance history, and proven conversion results before matching with your brand.
                </p>
              </div>
            </Engine3DCard>

            {/* ─── Card 2: Bilateral Contract ─────────────────────────────────── */}
            <Engine3DCard
              glowColor="from-[#005CFF]/25 via-[#6FA6FF]/15"
              delay={0.04}
              index={2}
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
                <div className="text-[10px] sm:text-[11px] font-bold tracking-wider text-[#0364FF] uppercase mb-1">
                  STAGE 02 · CLEAR LEGAL PROTECTION
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight">
                  Bilateral Contract
                </h4>
                <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed mt-1.5 sm:mt-2.5">
                  Replace informal DMs and slow legal reviews. Simple digital contracts lock commission terms and protect direct partner relationships before work begins.
                </p>
              </div>
            </Engine3DCard>

            {/* ─── Card 3: S2S Tracking ───────────────────────────────────────── */}
            <Engine3DCard
              glowColor="from-[#0364FF]/25 via-[#6FA6FF]/18"
              delay={0.04}
              index={3}
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
                <div className="text-[10px] sm:text-[11px] font-bold tracking-wider text-[#0364FF] uppercase mb-1">
                  STAGE 03 · ACCURATE SERVER TRACKING
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight">
                  S2S Tracking
                </h4>
                <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed mt-1.5 sm:mt-2.5">
                  Direct server tracking records every referral without ad-blocker loss, while automated fraud filters block fake clicks and duplicate accounts.
                </p>
              </div>
            </Engine3DCard>

            {/* ─── Card 4: USD Settlement ─────────────────────────────────────── */}
            <Engine3DCard
              glowColor="from-[#005CFF]/22 via-[#6FA6FF]/15"
              delay={0.04}
              index={4}
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
                <div className="text-[10px] sm:text-[11px] font-bold tracking-wider text-[#0364FF] uppercase mb-1">
                  STAGE 04 · GUARANTEED MONTHLY PAYOUTS
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight">
                  USD Settlement
                </h4>
                <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed mt-1.5 sm:mt-2.5">
                  Client commissions are held safely in escrow and paid out automatically by the 5th business day of each month with full itemized reports.
                </p>
              </div>
            </Engine3DCard>

            {/* ─── Card 5: 100% Automated Tracking / Ledgers ──────────────────── */}
            <Engine3DCard
              glowColor="from-[#6FA6FF]/35 via-[#0364FF]/20"
              className="border-dashed border-[#6FA6FF]/60"
              delay={0.04}
              index={5}
            >
              <div className="flex flex-col justify-center items-center h-full text-center py-4 sm:py-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl sm:rounded-3xl bg-gradient-to-tr from-[#0364FF] to-[#6FA6FF] shadow-lg shadow-blue-500/30 flex items-center justify-center text-white mb-3 sm:mb-5 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>

                <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight block mb-1">
                  100%
                </span>
                <span className="text-[11px] sm:text-xs font-bold tracking-wider text-[#0364FF] uppercase block mb-2 sm:mb-3">
                  Automated Tracking & Ledgers
                </span>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-[340px]">
                  Every deal, referral, and payout is recorded on an exact, step-by-step verifiable ledger.
                </p>
              </div>
            </Engine3DCard>

          </div>
        </div>
      </div>
    </section>
  );
}

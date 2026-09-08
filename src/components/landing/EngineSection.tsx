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
  TrendingUp,
  Cpu,
  Layers,
  Database,
  Building2,
  CalendarCheck
} from "lucide-react";

/* ─── Butter-Smooth 3D Tilt Card Component ─────────────────────────────────── */
function Engine3DCard({
  children,
  className = "",
  glowColor = "from-[#6FA6FF]/25 via-[#0364FF]/12",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });

  // Normalized motion values (-0.5 to 0.5)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Butter-smooth physics springs
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), {
    damping: 24,
    stiffness: 220,
    mass: 0.25,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), {
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
    <div style={{ perspective: 1100 }} className="h-full">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
        className={`group relative rounded-[28px] bg-white/85 backdrop-blur-xl border border-white/90 ring-1 ring-slate-200/80 p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 min-h-[430px] overflow-hidden select-none ${
          isHovered
            ? "shadow-[0_24px_50px_-12px_rgba(3,100,255,0.22),0_10px_24px_-6px_rgba(0,0,0,0.06)] border-blue-200/80"
            : "shadow-[0_4px_24px_rgba(0,0,0,0.04),0_1px_2px_rgba(0,0,0,0.02)]"
        } ${className}`}
      >
        {/* Specular Beveled Crystal Highlight along the top rim */}
        <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent opacity-90 pointer-events-none" />

        {/* Ambient colored background blur orb */}
        <div
          className={`absolute -top-16 -right-16 w-60 h-60 rounded-full bg-gradient-to-br ${glowColor} to-transparent blur-[75px] pointer-events-none group-hover:scale-125 transition-transform duration-700`}
          aria-hidden="true"
        />

        {/* Dynamic Specular Glass Glare that tracks mouse position */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            opacity: isHovered ? 0.75 : 0,
            background: `radial-gradient(circle 260px at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.25) 45%, transparent 70%)`,
          }}
        />

        {/* Content with 3D Parallax Depth */}
        <div
          style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
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
      className="relative w-full bg-[#f8fafc] py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 font-sans border-t border-b border-slate-200/80 overflow-hidden"
    >
      {/* ─── Ambient Atmospheric Blur Orbs ─────────────────────────────────── */}
      <div
        className="absolute -top-32 -right-32 w-[700px] lg:w-[1000px] h-[600px] rounded-full bg-gradient-to-bl from-[#6FA6FF]/20 via-[#0364FF]/10 to-transparent blur-[140px] pointer-events-none -z-0"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-20 w-[600px] h-[550px] rounded-full bg-gradient-to-tr from-[#005CFF]/15 via-[#6FA6FF]/10 to-transparent blur-[130px] pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* ─── Top Header Section: Tag + Large Asymmetric Headline ─────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 sm:mb-20 items-start">
          {/* Top Left: Eyebrow Tag with Square Accent */}
          <div className="lg:col-span-4">
            <div className="inline-flex items-center gap-2.5 text-xs font-bold text-[#0364FF] uppercase tracking-wider">
              <span className="w-2.5 h-2.5 bg-[#0364FF] rounded-[2px]" />
              <span>THE OPERATING ENGINE</span>
            </div>
          </div>

          {/* Top Right: Large Headline with WordReveal */}
          <div className="lg:col-span-8">
            <WordReveal
              as="h2"
              delay={0.1}
              stagger={0.035}
              className="text-3xl sm:text-4xl lg:text-[44px] font-normal text-neutral-900 tracking-[-0.03em] leading-[1.18]"
              text="Automated, reliable, guaranteed: partnership infrastructure built for scale."
            />
          </div>
        </div>

        {/* ─── Main 3-Column Card Grid with 3D Pop ───────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 items-stretch">
          
          {/* ─── Position 1: Narrative Block (Why manage partnerships?) ──────── */}
          <Engine3DCard
            glowColor="from-[#0364FF]/20 via-[#6FA6FF]/10"
            className="bg-white/70"
            delay={0}
          >
            <div>
              <WordReveal
                as="h3"
                delay={0.15}
                stagger={0.03}
                className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight leading-snug mb-4"
                text="Why manage partnerships on BRDGR?"
              />
              <WordReveal
                as="p"
                delay={0.25}
                stagger={0.015}
                className="text-sm sm:text-[14.5px] text-neutral-600 font-normal leading-relaxed mb-4"
                text="Run your entire partnership program on autopilot. Scale your partner network, eliminate tracking disputes, and pay everyone on time without touching a spreadsheet."
              />
            </div>

            <div className="pt-6 border-t border-slate-200/80">
              <WordReveal
                as="p"
                delay={0.35}
                stagger={0.025}
                className="text-sm sm:text-[15px] font-semibold text-neutral-900 leading-snug"
                text="No informal deals. Just clear, reliable software."
              />
            </div>
          </Engine3DCard>

          {/* ─── Card 1: Vet & Match ──────────────────────────────────────────── */}
          <Engine3DCard
            glowColor="from-[#6FA6FF]/30 via-[#0364FF]/15"
            delay={0.08}
          >
            {/* Top Elevated 3D Floating Stage */}
            <div 
              style={{ transform: "translateZ(35px)" }}
              className="h-32 flex items-center justify-center"
            >
              <div className="relative p-4 rounded-2xl bg-white/95 border border-slate-100/90 shadow-md shadow-slate-300/30 group-hover:border-[#0364FF]/40 transition-all duration-300 group-hover:scale-105 flex items-center gap-3">
                {/* Glowing Radar Vetting Node */}
                <div className="relative w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0364FF]">
                  <Building2 className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white animate-pulse" />
                </div>

                <div className="flex flex-col text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-neutral-900">Audited Partner</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <span className="text-[10px] text-neutral-400 font-medium">99.8% Compliance Score</span>
                </div>

                {/* Match Chip */}
                <span className="text-[10px] font-bold text-[#0364FF] bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100 ml-1">
                  Vetted
                </span>
              </div>
            </div>

            {/* Content: Title, Eyebrow & Description */}
            <div className="mt-4">
              <h4 className="text-2xl font-bold text-neutral-900 tracking-tight">
                Vet & Match
              </h4>
              <p className="text-xs font-bold tracking-wider text-[#0364FF] uppercase mt-3 mb-2">
                Audited partners only.
              </p>
              <p className="text-xs sm:text-[13px] text-neutral-600 font-normal leading-relaxed">
                Every partner is checked for real audience engagement, clean compliance history, and proven conversion results before matching with your brand.
              </p>
            </div>
          </Engine3DCard>

          {/* ─── Card 2: Bilateral Contract ───────────────────────────────────── */}
          <Engine3DCard
            glowColor="from-[#005CFF]/25 via-[#6FA6FF]/15"
            delay={0.16}
          >
            {/* Top Elevated 3D Floating Stage */}
            <div 
              style={{ transform: "translateZ(35px)" }}
              className="h-32 flex items-center justify-center"
            >
              <div className="relative p-4 rounded-2xl bg-white/95 border border-slate-100/90 shadow-md shadow-slate-300/30 group-hover:border-[#0364FF]/40 transition-all duration-300 group-hover:scale-105 flex items-center gap-3">
                {/* Legal Seal Node */}
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-sm">
                  <FileCheck2 className="w-5 h-5" />
                </div>

                <div className="flex flex-col text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-neutral-900">Bilateral Agreement</span>
                    <Lock className="w-3 h-3 text-indigo-600" />
                  </div>
                  <span className="text-[10px] text-neutral-400 font-medium">Locked CPA & Terms</span>
                </div>

                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100 ml-1">
                  Enforced
                </span>
              </div>
            </div>

            {/* Content: Title, Eyebrow & Description */}
            <div className="mt-4">
              <h4 className="text-2xl font-bold text-neutral-900 tracking-tight">
                Bilateral Contract
              </h4>
              <p className="text-xs font-bold tracking-wider text-[#0364FF] uppercase mt-3 mb-2">
                Clear legal protection.
              </p>
              <p className="text-xs sm:text-[13px] text-neutral-600 font-normal leading-relaxed">
                Replace informal DMs and slow legal reviews. Simple digital contracts lock commission terms and protect direct partner relationships before work begins.
              </p>
            </div>
          </Engine3DCard>

          {/* ─── Card 3: S2S Tracking ─────────────────────────────────────────── */}
          <Engine3DCard
            glowColor="from-[#0364FF]/25 via-[#6FA6FF]/18"
            delay={0.22}
          >
            {/* Top Elevated 3D Floating Stage */}
            <div 
              style={{ transform: "translateZ(35px)" }}
              className="h-32 flex items-center justify-center"
            >
              <div className="relative p-4 rounded-2xl bg-white/95 border border-slate-100/90 shadow-md shadow-slate-300/30 group-hover:border-[#0364FF]/40 transition-all duration-300 group-hover:scale-105 flex items-center gap-3">
                {/* S2S Activity Node */}
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-[#0364FF] flex items-center justify-center">
                  <Activity className="w-5 h-5 animate-pulse" />
                </div>

                <div className="flex flex-col text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-neutral-900">Direct S2S Rail</span>
                    <Zap className="w-3 h-3 text-amber-500" />
                  </div>
                  <span className="text-[10px] text-neutral-400 font-medium">Sub-14ms Telemetry</span>
                </div>

                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100 ml-1">
                  99.9%
                </span>
              </div>
            </div>

            {/* Content: Title, Eyebrow & Description */}
            <div className="mt-4">
              <h4 className="text-2xl font-bold text-neutral-900 tracking-tight">
                S2S Tracking
              </h4>
              <p className="text-xs font-bold tracking-wider text-[#0364FF] uppercase mt-3 mb-2">
                Accurate server tracking.
              </p>
              <p className="text-xs sm:text-[13px] text-neutral-600 font-normal leading-relaxed">
                Direct server tracking records every referral without ad-blocker loss, while automated fraud filters block fake clicks and duplicate accounts.
              </p>
            </div>
          </Engine3DCard>

          {/* ─── Card 4: USD Settlement ───────────────────────────────────────── */}
          <Engine3DCard
            glowColor="from-[#005CFF]/22 via-[#6FA6FF]/15"
            delay={0.28}
          >
            {/* Top Elevated 3D Floating Stage */}
            <div 
              style={{ transform: "translateZ(35px)" }}
              className="h-32 flex items-center justify-center"
            >
              <div className="relative p-4 rounded-2xl bg-white/95 border border-slate-100/90 shadow-md shadow-slate-300/30 group-hover:border-[#0364FF]/40 transition-all duration-300 group-hover:scale-105 flex items-center gap-3">
                {/* Escrow Vault Node */}
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center font-bold text-sm">
                  $
                </div>

                <div className="flex flex-col text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-neutral-900">USD Escrow Rails</span>
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  </div>
                  <span className="text-[10px] text-neutral-400 font-medium">Monthly Calendar Payout</span>
                </div>

                <span className="text-[10px] font-bold text-[#0364FF] bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100 ml-1">
                  Guaranteed
                </span>
              </div>
            </div>

            {/* Content: Title, Eyebrow & Description */}
            <div className="mt-4">
              <h4 className="text-2xl font-bold text-neutral-900 tracking-tight">
                USD Settlement
              </h4>
              <p className="text-xs font-bold tracking-wider text-[#0364FF] uppercase mt-3 mb-2">
                Guaranteed monthly payouts.
              </p>
              <p className="text-xs sm:text-[13px] text-neutral-600 font-normal leading-relaxed">
                Client commissions are held safely in escrow and paid out automatically by the 5th business day of each month with full itemized reports.
              </p>
            </div>
          </Engine3DCard>

          {/* ─── Position 6: Stat Card (100% Automated Tracking) ──────────────── */}
          <Engine3DCard
            glowColor="from-[#6FA6FF]/35 via-[#0364FF]/20"
            className="border-dashed border-[#6FA6FF]/60"
            delay={0.34}
          >
            <div className="flex flex-col justify-center items-center h-full text-center py-6">
              {/* Central Glowing 3D Dial */}
              <div 
                style={{ transform: "translateZ(40px)" }}
                className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-[#0364FF] to-[#6FA6FF] shadow-lg shadow-blue-500/30 flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300"
              >
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>

              <span 
                style={{ transform: "translateZ(30px)" }}
                className="text-4xl font-extrabold text-neutral-900 tracking-tight block mb-1.5"
              >
                100%
              </span>
              <span 
                style={{ transform: "translateZ(25px)" }}
                className="text-xs font-bold tracking-wider text-[#0364FF] uppercase block mb-3"
              >
                Automated Tracking
              </span>
              <p 
                style={{ transform: "translateZ(20px)" }}
                className="text-xs text-neutral-600 leading-relaxed max-w-[230px]"
              >
                Every deal, referral, and payout is recorded on an exact, step-by-step ledger.
              </p>
            </div>
          </Engine3DCard>

        </div>
      </div>
    </section>
  );
}



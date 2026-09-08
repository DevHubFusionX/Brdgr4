"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import WordReveal from "@/components/ui/WordReveal";

type ChannelType = "supplied" | "byo";

interface StageInfo {
  id: string;
  name: string;
  step: string;
  desc: string;
  stat: string;
}

const STAGES: StageInfo[] = [
  {
    id: "vetting",
    name: "Vetting",
    step: "01",
    desc: "Pre-screened audience reach, regulatory checks, and verified conversion history.",
    stat: "99.4% Pass Fidelity",
  },
  {
    id: "contracts",
    name: "Contracts",
    step: "02",
    desc: "Digital bilateral SLAs, programmatic rate cards, and non-circumvention covenants.",
    stat: "100% Legal Enforceability",
  },
  {
    id: "tracking",
    name: "Tracking",
    step: "03",
    desc: "Server-to-server cookieless postbacks with sub-millisecond attribution fidelity.",
    stat: "Zero Tracking Loss",
  },
  {
    id: "settlement",
    name: "Settlement",
    step: "04",
    desc: "Smart milestone escrows automatically disbursed via Tier-1 institutional rails.",
    stat: "Net-0 USD Payouts",
  },
];

export default function DualPathSection() {
  const [activeChannel, setActiveChannel] = useState<ChannelType>("supplied");
  const [activeStage, setActiveStage] = useState<number>(0);

  return (
    <section className="relative w-full bg-[#fbfbfd] py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden border-t border-b border-slate-200/60">
      {/* ─── Ambient Subtle Soft Blue Light ─────────────────────────────────── */}
      <div
        className="absolute -bottom-28 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] lg:w-[1200px] h-[300px] sm:h-[360px] rounded-full bg-gradient-to-t from-[#6FA6FF]/20 via-[#0364FF]/10 to-transparent blur-[110px] sm:blur-[130px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-16 left-1/4 w-[300px] sm:w-[420px] h-[200px] sm:h-[280px] rounded-full bg-[#6FA6FF]/15 blur-[90px] sm:blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* ─── Section Header (Left-Aligned) ─────────────────────────────── */}
        <div className="text-left max-w-3xl mb-10 sm:mb-14 md:mb-16">
          <WordReveal
            as="h2"
            delay={0.1}
            stagger={0.035}
            className="text-2xl sm:text-4xl md:text-5xl font-normal text-slate-900 tracking-[-0.025em] leading-[1.2]"
            text="Market supply or your existing network"
          />

          <WordReveal
            as="p"
            delay={0.22}
            stagger={0.02}
            className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-slate-500 font-normal leading-relaxed"
            text="A single infrastructure to discover verified performance talent or migrate your entire partner roster onto auditable escrow rails."
          />
        </div>

        {/* ─── ULTRA-COMPACT MOBILE CARD (Visible on Mobile/Tablet: < lg) ────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="block lg:hidden rounded-[26px] bg-white card-blue-pop-hero card-specular-rim p-5 sm:p-6 transition-all"
        >
          {/* Channel Selector Pill */}
          <div className="flex w-full p-1 rounded-full bg-slate-100/90 border border-slate-200/80 shadow-2xs mb-5">
            <button
              type="button"
              onClick={() => setActiveChannel("supplied")}
              className={`flex-1 text-center py-2 px-3 rounded-full text-xs font-medium transition-all cursor-pointer ${
                activeChannel === "supplied"
                  ? "bg-[#0364FF] text-white shadow-2xs font-semibold"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Supplied Partners
            </button>
            <button
              type="button"
              onClick={() => setActiveChannel("byo")}
              className={`flex-1 text-center py-2 px-3 rounded-full text-xs font-medium transition-all cursor-pointer ${
                activeChannel === "byo"
                  ? "bg-[#0364FF] text-white shadow-2xs font-semibold"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Bring Your Own
            </button>
          </div>

          {/* Eyebrow */}
          <div className="text-slate-400 font-semibold text-[11px] tracking-wider uppercase">
            {activeChannel === "supplied"
              ? "CURATED MARKET SUPPLY"
              : "PRIVATE NETWORK MIGRATION"}
          </div>

          {/* Heading */}
          <h3 className="mt-1.5 text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight leading-snug">
            {activeChannel === "supplied"
              ? "Audited performance talent, on institutional rails."
              : "Your affiliate roster, on auditable rails."}
          </h3>

          {/* Subtitle / Short Description */}
          <p className="mt-2 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
            {activeChannel === "supplied"
              ? "Pre-screened trading creators and brokers matched to your campaign brief."
              : "Email or CSV onboarding with protected commercial terms."}
          </p>

          {/* Compact Vertical Pipeline: Vetting ↓ Contracts ↓ Tracking ↓ Settlement */}
          <div className="my-5 p-3.5 sm:p-4 rounded-2xl bg-gradient-to-b from-[#EFF5FF] to-[#E5EFFE] border border-[#6FA6FF]/35 shadow-2xs">
            <div className="flex items-center justify-between text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2.5">
              <span>Operating Engine Rails</span>
              <span className="text-[#0364FF] font-mono">4-STAGE VERIFIED</span>
            </div>

            <div className="space-y-1">
              {STAGES.map((stage, idx) => {
                const isActive = activeStage === idx;
                const isPast = activeStage > idx;

                return (
                  <React.Fragment key={stage.id}>
                    <button
                      type="button"
                      onClick={() => setActiveStage(idx)}
                      className={`w-full flex items-center justify-between p-2 sm:p-2.5 rounded-xl text-left transition-all cursor-pointer ${
                        isActive
                          ? "bg-white text-slate-900 shadow-sm border border-[#6FA6FF]/40 font-semibold"
                          : "text-slate-600 hover:bg-white/60"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`w-2 h-2 rounded-full transition-all shrink-0 ${
                            isActive
                              ? "bg-[#0364FF] ring-4 ring-[#0364FF]/20"
                              : isPast
                              ? "bg-[#0364FF]/60"
                              : "bg-slate-300"
                          }`}
                        />
                        <span className="text-xs font-medium">
                          {stage.name}
                        </span>
                      </div>
                      <span
                        className={`text-[10px] font-medium font-mono px-2 py-0.5 rounded ${
                          isActive
                            ? "bg-[#EFF5FF] text-[#005CFF] border border-[#BFDBFE]"
                            : "text-slate-400"
                        }`}
                      >
                        {stage.stat}
                      </span>
                    </button>

                    {idx < STAGES.length - 1 && (
                      <div className="pl-3 py-0.5 flex items-center text-[#6FA6FF]/60">
                        <span className="text-[10px] leading-none font-mono">↓</span>
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            {/* Dynamic Stage Description Bar */}
            <div className="mt-3 pt-2.5 border-t border-[#6FA6FF]/20 text-[11px] text-slate-600 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
              <span className="leading-normal">{STAGES[activeStage].desc}</span>
            </div>
          </div>

          {/* Key Stat & Trust Badge */}
          <div className="flex items-center justify-between gap-2 mb-4 px-1">
            <div className="flex items-center gap-1.5 text-xs font-medium text-slate-600">
              <ShieldCheck className="w-4 h-4 text-[#0364FF] shrink-0" />
              <span>
                {activeChannel === "supplied"
                  ? "Audited Institutional Escrow"
                  : "100% Non-Circumvention Guaranteed"}
              </span>
            </div>
            <span className="text-xs font-bold text-[#0364FF] font-mono shrink-0">
              {STAGES[activeStage].stat}
            </span>
          </div>

          {/* Primary Action Button */}
          <Link
            href="/sign-up"
            className="flex items-center justify-center gap-2 w-full py-3 px-5 rounded-full bg-[#0364FF] hover:bg-[#005CFF] text-white text-xs sm:text-sm font-medium shadow-md shadow-[#0364FF]/25 active:scale-[0.98] transition-all group"
          >
            <span>
              {activeChannel === "supplied"
                ? "Submit Campaign Brief"
                : "Onboard Your Roster"}
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>

        {/* ─── DESKTOP MASTER COMPOSITE CONTAINER (Visible on Desktop: lg+) ─── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block rounded-[36px] lg:rounded-[40px] bg-white card-blue-pop-hero card-specular-rim p-6 lg:p-7 transition-all"
        >
          <div className="grid grid-cols-12 gap-7 items-stretch">
            {/* ─── LEFT COLUMN: Clean, Mature Editorial Panel ────────────────── */}
            <div className="col-span-5 flex flex-col justify-between p-7 rounded-[26px] bg-[#f8fafc] border border-slate-100/90">
              <div>
                {/* Segmented Channel Control */}
                <div className="inline-flex p-1 rounded-full bg-white border border-slate-200/80 shadow-2xs mb-8">
                  <button
                    type="button"
                    onClick={() => setActiveChannel("supplied")}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
                      activeChannel === "supplied"
                        ? "bg-[#0364FF] text-white shadow-2xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Supplied Partners
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveChannel("byo")}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
                      activeChannel === "byo"
                        ? "bg-[#0364FF] text-white shadow-2xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Bring Your Own
                  </button>
                </div>

                {/* Two-Tone Title: Muted Eyebrow + Confident Heading */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeChannel}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-slate-400 font-medium text-sm tracking-tight">
                      {activeChannel === "supplied"
                        ? "Curated Market Supply"
                        : "Private Network Migration"}
                    </div>
                    <h3 className="mt-1 text-2xl lg:text-3xl font-semibold text-slate-900 tracking-tight leading-[1.2]">
                      {activeChannel === "supplied"
                        ? "Audited performance talent matched to your brief."
                        : "Your entire affiliate roster on auditable rails."}
                    </h3>

                    {/* Concise Narrative */}
                    <p className="mt-4 text-sm lg:text-[15px] text-slate-600 font-normal leading-relaxed">
                      {activeChannel === "supplied"
                        ? "Direct access to invite-only prop trading and forex partners. Each candidate is pre-screened for genuine audience reach, regulatory compliance, and verified conversion history."
                        : "Onboard your private affiliates via direct email or bulk CSV upload. Partners clear expedited verification, receive custom commercial terms, and remain fully protected under non-circumvention covenants."}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Clean Feature Pills */}
                <div className="mt-8 space-y-2">
                  <div className="flex flex-wrap gap-2">
                    {activeChannel === "supplied" ? (
                      <>
                        <span className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-white text-slate-700 border border-slate-200/90 shadow-2xs">
                          Audited Talent
                        </span>
                        <span className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-white text-slate-700 border border-slate-200/90 shadow-2xs">
                          Algorithmic Fit
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-white text-slate-700 border border-slate-200/90 shadow-2xs">
                          Bulk CSV Ingest
                        </span>
                        <span className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-white text-slate-700 border border-slate-200/90 shadow-2xs">
                          Fast-Track KYC
                        </span>
                      </>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeChannel === "supplied" ? (
                      <>
                        <span className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-white text-slate-700 border border-slate-200/90 shadow-2xs">
                          Non-Circumvention
                        </span>
                        <span className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-white text-slate-700 border border-slate-200/90 shadow-2xs">
                          Tier-1 Brokers
                        </span>
                        <span className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-white text-slate-700 border border-slate-200/90 shadow-2xs">
                          Zero Fraud Waste
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-white text-slate-700 border border-slate-200/90 shadow-2xs">
                          Custom Terms
                        </span>
                        <span className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-white text-slate-700 border border-slate-200/90 shadow-2xs">
                          Zero Circumvention
                        </span>
                        <span className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-white text-slate-700 border border-slate-200/90 shadow-2xs">
                          Protected Roster
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Action Button */}
              <div className="mt-8 pt-2">
                <Link
                  href="/sign-up"
                  className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-[#0364FF] text-white text-sm font-medium transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98]"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6FA6FF] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0364FF] group-hover:bg-white transition-colors" />
                  </span>
                  <span>
                    {activeChannel === "supplied"
                      ? "Submit Campaign Brief"
                      : "Onboard Your Roster"}
                  </span>
                </Link>
              </div>
            </div>

            {/* ─── RIGHT COLUMN: Light Blue Signature Card ──────────────────── */}
            <div className="col-span-7 rounded-[30px] bg-gradient-to-b from-[#EFF5FF] to-[#E5EFFE] border border-[#6FA6FF]/40 shadow-[0_16px_40px_-10px_rgba(3,100,255,0.18),inset_0_1px_0_rgba(255,255,255,0.9)] p-8 md:p-9 flex flex-col justify-between relative overflow-hidden transition-all">
              {/* Soft Radial Ambient Lights */}
              <div
                className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-[#6FA6FF]/25 blur-[80px] pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-[#0364FF]/10 blur-[80px] pointer-events-none"
                aria-hidden="true"
              />

              {/* Card Header */}
              <div className="relative z-10">
                <h4 className="text-2xl font-semibold text-slate-900 tracking-tight">
                  The Deterministic Operating Engine.
                </h4>
                <p className="mt-2 text-sm text-slate-600 font-normal leading-relaxed max-w-lg">
                  Deterministic server-to-server tracking, bilateral legal locks, and guaranteed monthly USD escrow settlement.
                </p>
              </div>

              {/* Center Geometric Venn / Radar Concentric Circles */}
              <div className="relative z-10 my-6 py-4 px-4 rounded-2xl bg-white/85 backdrop-blur-xs border border-[#6FA6FF]/25 shadow-2xs">
                <div className="relative w-full h-[160px] flex items-center justify-center overflow-hidden">
                  <svg
                    viewBox="0 0 640 160"
                    className="w-full h-full max-w-[580px] select-none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Axis wire */}
                    <line
                      x1="60"
                      y1="80"
                      x2="580"
                      y2="80"
                      stroke="#BFDBFE"
                      strokeWidth="1"
                      strokeDasharray="3 4"
                    />

                    {/* Concentric Geometric Venn Circles */}
                    {STAGES.map((stage, idx) => {
                      const cx = 100 + idx * 146;
                      const cy = 80;
                      const isActive = activeStage === idx;

                      return (
                        <g
                          key={stage.id}
                          className="cursor-pointer transition-all duration-300"
                          onClick={() => setActiveStage(idx)}
                        >
                          {/* Outer boundary circles creating optical Venn intersections */}
                          <circle
                            cx={cx}
                            cy={cy}
                            r="66"
                            stroke={isActive ? "#0364FF" : "#6FA6FF"}
                            strokeOpacity={isActive ? "0.35" : "0.18"}
                            strokeWidth="1"
                          />
                          <circle
                            cx={cx}
                            cy={cy}
                            r="46"
                            stroke={isActive ? "#005CFF" : "#93C5FD"}
                            strokeOpacity={isActive ? "0.5" : "0.25"}
                            strokeWidth="1"
                          />

                          {/* Active Stage Highlighted Concentric Ring */}
                          {isActive && (
                            <>
                              <circle
                                cx={cx}
                                cy={cy}
                                r="38"
                                stroke="#0364FF"
                                strokeWidth="1.75"
                                strokeDasharray="4 4"
                                className="animate-[spin_24s_linear_infinite]"
                                style={{ transformOrigin: `${cx}px ${cy}px` }}
                              />
                              <circle
                                cx={cx}
                                cy={cy}
                                r="44"
                                fill="#0364FF"
                                fillOpacity="0.06"
                              />
                            </>
                          )}

                          {/* Center Node Target */}
                          <circle
                            cx={cx}
                            cy={cy}
                            r={isActive ? "26" : "22"}
                            fill={isActive ? "#0364FF" : "#FFFFFF"}
                            stroke={isActive ? "#005CFF" : "#BFDBFE"}
                            strokeWidth={isActive ? "1.5" : "1"}
                            className="transition-all duration-200"
                          />

                          {/* Stage Name */}
                          <text
                            x={cx}
                            y={cy + 4}
                            textAnchor="middle"
                            fill={isActive ? "#FFFFFF" : "#475569"}
                            fontSize="11"
                            fontWeight={isActive ? "600" : "500"}
                            letterSpacing="0.02em"
                          >
                            {stage.name}
                          </text>
                        </g>
                      );
                    })}
                  </svg>
                </div>

                {/* Stage Detail Micro-Banner */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStage}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="mt-2.5 pt-2.5 border-t border-slate-200/60 flex items-center justify-between gap-1 text-xs text-slate-600"
                  >
                    <div className="flex items-center gap-1.5">
                      <span className="font-semibold text-[#0364FF]">
                        {STAGES[activeStage].step}. {STAGES[activeStage].name}:
                      </span>
                      <span className="text-slate-600">
                        {STAGES[activeStage].desc}
                      </span>
                    </div>
                    <span className="shrink-0 font-medium text-[#005CFF] bg-[#EFF5FF] px-2 py-0.5 rounded-md border border-[#BFDBFE]/60">
                      {STAGES[activeStage].stat}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom Row of Right Card */}
              <div className="relative z-10 pt-2 flex items-center justify-between gap-3">
                {/* Left Badge: Clean, Understated Trust Pill */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-[#6FA6FF]/35 text-[#005CFF] text-xs font-medium shadow-2xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0364FF] shrink-0" />
                  <span>
                    {activeChannel === "supplied"
                      ? "Audited Institutional Escrow"
                      : "100% Non-Circumvention Guaranteed"}
                  </span>
                </div>

                {/* Right Button: Understated Primary Action */}
                <Link
                  href="/sign-up"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#0364FF] hover:bg-[#005CFF] text-white text-sm font-medium transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98] group cursor-pointer"
                >
                  <span>
                    {activeChannel === "supplied"
                      ? "Explore Verified Supply"
                      : "Onboard Your Roster"}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

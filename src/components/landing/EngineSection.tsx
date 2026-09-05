"use client";

import { motion } from "framer-motion";
import WordReveal from "@/components/ui/WordReveal";

export default function EngineSection() {
  return (
    <section className="relative w-full bg-[#f8fafc] py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 font-sans border-t border-b border-slate-200/80 overflow-hidden">
      {/* ─── Soft White & Brand Blue Ambient Gradient Light (Top-Right & Bottom-Right) ── */}
      <div
        className="absolute -top-20 -right-20 w-[650px] sm:w-[850px] lg:w-[1000px] h-[550px] rounded-full bg-gradient-to-bl from-blue-200/40 via-sky-100/30 to-transparent blur-[130px] pointer-events-none -z-0"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 right-1/4 w-[500px] h-[450px] rounded-full bg-gradient-to-tl from-blue-100/30 via-white to-transparent blur-[120px] pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* ─── Top Header Section: Tag + Large Asymmetric Headline ─────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 sm:mb-20 items-start">
          {/* Top Left: Eyebrow Tag with Square Accent */}
          <div className="lg:col-span-4">
            <div className="inline-flex items-center gap-2.5 text-xs font-bold text-[#0364ff] uppercase tracking-wider">
              <span className="w-2.5 h-2.5 bg-[#0364ff] rounded-[2px]" />
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
              text="Automated, auditable, guaranteed: we build partnership infrastructure for everyone!"
            />
          </div>
        </div>

        {/* ─── Main 3-Column Card Grid (Matching Reference Layout) ─────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 items-stretch">
          {/* ─── Position (Row 1, Col 1): Editorial Left Narrative Block ────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-between py-2 sm:py-4 pr-4 lg:pr-6"
          >
            <div>
              <WordReveal
                as="h3"
                delay={0.2}
                stagger={0.03}
                className="text-lg sm:text-xl font-normal text-neutral-900 tracking-tight leading-snug mb-4"
                text="Ready for verified enterprise partnership infrastructure?"
              />
              <WordReveal
                as="p"
                delay={0.3}
                stagger={0.015}
                className="text-sm sm:text-[14.5px] text-neutral-600 font-normal leading-relaxed mb-4"
                text="With our verified infrastructure, you model and execute your entire partnership operation on deterministic rails. Increase partner volume, eliminate attribution disputes, and automate monthly settlements with zero manual overhead."
              />
            </div>

            <div className="pt-6 border-t border-slate-200/80">
              <WordReveal
                as="p"
                delay={0.4}
                stagger={0.025}
                className="text-sm sm:text-[15px] font-medium text-neutral-900 leading-snug"
                text="It's not informal deals, it's institutional software engineering."
              />
            </div>
          </motion.div>

          {/* ─── Card 1 (Row 1, Col 2): Vet & Match ──────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group rounded-[24px] bg-white border border-slate-200/90 hover:border-blue-300/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_32px_rgba(3,100,255,0.06)] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 min-h-[420px]"
          >
            {/* Top Line Diagram Illustration (Overlapping Diamonds + Arrow) */}
            <div className="h-28 flex items-center justify-center">
              <svg width="160" height="90" viewBox="0 0 160 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="overflow-visible">
                {/* Background dashed diamond */}
                <rect
                  x="80"
                  y="15"
                  width="44"
                  height="44"
                  rx="6"
                  transform="rotate(45 80 15)"
                  stroke="#cbd5e1"
                  strokeWidth="1.5"
                  strokeDasharray="4 3"
                  className="group-hover:stroke-blue-200 transition-colors"
                />
                {/* Foreground solid diamond in brand blue/grey */}
                <rect
                  x="50"
                  y="15"
                  width="44"
                  height="44"
                  rx="6"
                  transform="rotate(45 50 15)"
                  fill="#ffffff"
                  stroke="#94a3b8"
                  strokeWidth="1.75"
                  className="group-hover:stroke-[#0364ff] transition-colors"
                />
                {/* Arrow pointing right */}
                <path
                  d="M 44 45 L 62 45 M 56 39 L 62 45 L 56 51"
                  stroke="#0364ff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Content: Title, Eyebrow & Description */}
            <div className="mt-4">
              <h4 className="text-2xl font-normal text-neutral-900 tracking-tight">
                Vet & Match
              </h4>
              <p className="text-xs font-bold tracking-wider text-[#0364ff] uppercase mt-4 mb-2.5">
                Audience authenticity & track record.
              </p>
              <p className="text-xs sm:text-[13px] text-neutral-500 font-normal leading-relaxed">
                Unvetted contacts never enter the pool. Partners undergo rigorous review across audience authenticity, compliance history, and verified track record — matched by algorithmic fit.
              </p>
            </div>
          </motion.div>

          {/* ─── Card 2 (Row 1, Col 3): Bilateral Contract ──────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group rounded-[24px] bg-white border border-slate-200/90 hover:border-blue-300/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_32px_rgba(3,100,255,0.06)] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 min-h-[420px]"
          >
            {/* Top Line Diagram Illustration (Horizontal Timeline with Tick Marks) */}
            <div className="h-28 flex items-center justify-center">
              <svg width="180" height="90" viewBox="0 0 180 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Horizontal main rail arrow */}
                <line x1="20" y1="45" x2="152" y2="45" stroke="#94a3b8" strokeWidth="1.75" className="group-hover:stroke-[#0364ff] transition-colors" />
                <path d="M 144 37 L 154 45 L 144 53" stroke="#0364ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

                {/* Vertical tick marks across line */}
                <line x1="36" y1="28" x2="36" y2="62" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="56" y1="28" x2="56" y2="62" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="76" y1="28" x2="76" y2="62" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="108" y1="28" x2="108" y2="62" stroke="#94a3b8" strokeWidth="1.75" strokeLinecap="round" className="group-hover:stroke-[#0364ff] transition-colors" />
                <line x1="130" y1="28" x2="130" y2="62" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>

            {/* Content: Title, Eyebrow & Description */}
            <div className="mt-4">
              <h4 className="text-2xl font-normal text-neutral-900 tracking-tight">
                Bilateral Contract
              </h4>
              <p className="text-xs font-bold tracking-wider text-[#0364ff] uppercase mt-4 mb-2.5">
                Audited gating & commercial locks.
              </p>
              <p className="text-xs sm:text-[13px] text-neutral-500 font-normal leading-relaxed">
                Replace informal chats and legal friction. In-platform digital contracts lock commercial terms, commission schedules, and covenants — while counterpart identities stay sealed until mutual signature.
              </p>
            </div>
          </motion.div>

          {/* ─── Card 3 (Row 2, Col 1): S2S Tracking ────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group rounded-[24px] bg-white border border-slate-200/90 hover:border-blue-300/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_32px_rgba(3,100,255,0.06)] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 min-h-[420px]"
          >
            {/* Top Line Diagram Illustration (Input Line to Connected Circle Nodes to Arrow) */}
            <div className="h-28 flex items-center justify-center">
              <svg width="180" height="90" viewBox="0 0 180 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Input line on left */}
                <line x1="20" y1="45" x2="65" y2="45" stroke="#94a3b8" strokeWidth="1.75" />

                {/* Central Cluster of 4 connected circles */}
                <g transform="translate(90, 45)">
                  <circle cx="-10" cy="-10" r="8" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.5" className="group-hover:stroke-[#0364ff] transition-colors" />
                  <circle cx="10" cy="-10" r="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
                  <circle cx="-10" cy="10" r="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
                  <circle cx="10" cy="10" r="8" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.5" className="group-hover:stroke-[#0364ff] transition-colors" />
                  <circle cx="0" cy="0" r="3" fill="#0364ff" />
                </g>

                {/* Output arrow on right */}
                <line x1="115" y1="45" x2="152" y2="45" stroke="#94a3b8" strokeWidth="1.75" className="group-hover:stroke-[#0364ff] transition-colors" />
                <path d="M 144 37 L 154 45 L 144 53" stroke="#0364ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Content: Title, Eyebrow & Description */}
            <div className="mt-4">
              <h4 className="text-2xl font-normal text-neutral-900 tracking-tight">
                S2S Tracking
              </h4>
              <p className="text-xs font-bold tracking-wider text-[#0364ff] uppercase mt-4 mb-2.5">
                Server-side postbacks & fraud gates.
              </p>
              <p className="text-xs sm:text-[13px] text-neutral-500 font-normal leading-relaxed">
                Cryptographic server-to-server postbacks eliminate browser ad-blocker leakage. Automated fraud gates screen velocity, geography, and duplicate signals before confirmation.
              </p>
            </div>
          </motion.div>

          {/* ─── Card 4 (Row 2, Col 2): USD Settlement ──────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group rounded-[24px] bg-white border border-slate-200/90 hover:border-blue-300/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_32px_rgba(3,100,255,0.06)] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 min-h-[420px]"
          >
            {/* Top Line Diagram Illustration (Parallel Split & Merge Circuit Arrows) */}
            <div className="h-28 flex items-center justify-center">
              <svg width="180" height="90" viewBox="0 0 180 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Split line entering from left into upper and lower tracks */}
                <path
                  d="M 20 45 L 45 45 C 55 45, 62 26, 75 26 L 125 26"
                  stroke="#94a3b8"
                  strokeWidth="1.75"
                  fill="none"
                  className="group-hover:stroke-[#0364ff] transition-colors"
                />
                <path
                  d="M 20 45 L 45 45 C 55 45, 62 64, 75 64 L 125 64"
                  stroke="#cbd5e1"
                  strokeWidth="1.75"
                  fill="none"
                />
                {/* Mid-track arrows */}
                <path d="M 88 21 L 96 26 L 88 31" stroke="#0364ff" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 104 59 L 112 64 L 104 69" stroke="#94a3b8" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />

                {/* Converging back to single exit arrow */}
                <path
                  d="M 125 26 C 138 26, 145 45, 154 45"
                  stroke="#94a3b8"
                  strokeWidth="1.75"
                  fill="none"
                  className="group-hover:stroke-[#0364ff] transition-colors"
                />
                <path
                  d="M 125 64 C 138 64, 145 45, 154 45"
                  stroke="#cbd5e1"
                  strokeWidth="1.75"
                  fill="none"
                />
                <path d="M 148 38 L 158 45 L 148 52" stroke="#0364ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Content: Title, Eyebrow & Description */}
            <div className="mt-4">
              <h4 className="text-2xl font-normal text-neutral-900 tracking-tight">
                USD Settlement
              </h4>
              <p className="text-xs font-bold tracking-wider text-[#0364ff] uppercase mt-4 mb-2.5">
                Double-entry ledger & monthly payouts.
              </p>
              <p className="text-xs sm:text-[13px] text-neutral-500 font-normal leading-relaxed">
                Balanced ledger entries post to an immutable USD book. Payout manifests are approved and executed by the 5th business day, guaranteeing partners fixed, predictable settlement.
              </p>
            </div>
          </motion.div>

          {/* ─── Position (Row 2, Col 3): Ambient Light & Stat/Value Highlight ─ */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:flex flex-col justify-center items-center p-8 rounded-[24px] border border-dashed border-slate-200/90 bg-white/40 backdrop-blur-sm"
          >
            {/* Internal ambient soft blue glow */}
            <div
              className="absolute inset-0 rounded-[24px] bg-gradient-to-br from-blue-50/60 via-transparent to-sky-100/40 pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative z-10 text-center max-w-[240px]">
              <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-[#0364ff] mx-auto mb-4">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <span className="text-3xl font-semibold text-neutral-900 tracking-tight block mb-1">
                100%
              </span>
              <span className="text-xs font-bold tracking-wider text-[#0364ff] uppercase block mb-2">
                Automated Ledger
              </span>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Deterministic lifecycle states guarantee audited execution without missing steps.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

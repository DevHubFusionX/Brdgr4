"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CtaSection() {
  return (
    <section 
      style={{ fontFamily: "var(--font-mulish), Mulish, sans-serif" }}
      className="relative w-full bg-white pt-20 sm:pt-28 md:pt-36 pb-24 sm:pb-32 md:pb-44 overflow-hidden select-none"
    >
      {/* ─── Background Blue Shade (Matching How It Works) & Halftone Dot Grid ─── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Base white canvas */}
        <div className="absolute inset-0 bg-white" />

        {/* Soft Blue Elliptical Glow rising from bottom (exact How It Works palette: #c8defc / #d8e8fc / #eaf3ff) */}
        <div
          className="absolute inset-x-0 bottom-0 h-[75%] sm:h-[70%] w-full"
          style={{
            background:
              "radial-gradient(ellipse 115% 80% at 50% 100%, #c8defc 0%, #d8e8fc 28%, #eaf3ff 58%, rgba(255, 255, 255, 0) 100%)",
          }}
        />

        {/* Ambient Sky Horizon Wash (matching How It Works radial-gradient) */}
        <div
          className="absolute inset-x-0 bottom-0 h-[52%] sm:h-[48%] w-full"
          style={{
            background:
              "linear-gradient(to top, #c8defc 0%, rgba(216, 232, 252, 0.8) 32%, rgba(234, 243, 255, 0.5) 65%, transparent 100%)",
          }}
        />

        {/* Ambient Sky Glow Orb (rgba(147,197,253,0.5)) */}
        <div 
          className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-full max-w-6xl h-64 bg-[radial-gradient(ellipse_at_bottom,rgba(147,197,253,0.55),transparent_70%)] pointer-events-none" 
          aria-hidden="true" 
        />

        {/* Crisp Halftone Dot Grid Pattern with smooth vertical mask */}
        <div
          className="absolute inset-x-0 bottom-0 h-[60%] sm:h-[55%] w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(3, 100, 255, 0.3) 1.25px, transparent 1.25px)",
            backgroundSize: "9px 9px",
            maskImage:
              "linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.9) 35%, rgba(0, 0, 0, 0.2) 75%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.9) 35%, rgba(0, 0, 0, 0.2) 75%, transparent 100%)",
          }}
        />
      </div>

      {/* ─── Centered Foreground Content ─── */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Mulish Headline - Strictly 2 Lines */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontFamily: "var(--font-mulish), Mulish, sans-serif" }}
          className="text-[26px] min-[390px]:text-[30px] sm:text-[44px] md:text-[54px] lg:text-[62px] font-bold text-[#0f172a] tracking-[-0.03em] leading-[1.15] max-w-4xl mx-auto text-center"
        >
          <span className="block whitespace-normal sm:whitespace-nowrap">
            Built for the partnerships that can’t
          </span>
          <span className="block">
            afford to get it wrong.
          </span>
        </motion.h2>

        {/* Subheadline grounded in brand identity brief */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontFamily: "var(--font-mulish), Mulish, sans-serif" }}
          className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-slate-600 font-normal max-w-xl mx-auto leading-relaxed"
        >
          Safe agreements, verified attribution rails, and guaranteed USD escrow payouts.
          From first handshake to every payday.
        </motion.p>

        {/* Dual Action Pill Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 sm:mt-9 flex items-center justify-center gap-3 sm:gap-3.5"
        >
          {/* Primary Dark Pill Button */}
          <Link
            href="/sign-up"
            style={{ fontFamily: "var(--font-mulish), Mulish, sans-serif" }}
            className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#0f172a] hover:bg-black text-white text-xs sm:text-sm font-semibold tracking-tight shadow-md hover:shadow-lg active:scale-[0.98] transition-all cursor-pointer"
          >
            Start for free
          </Link>

          {/* Secondary Light Grey Pill Button */}
          <Link
            href="/sign-up?demo=true"
            style={{ fontFamily: "var(--font-mulish), Mulish, sans-serif" }}
            className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/90 hover:bg-white text-slate-800 hover:text-slate-950 text-xs sm:text-sm font-semibold tracking-tight border border-slate-200/80 shadow-xs hover:shadow-sm active:scale-[0.98] transition-all cursor-pointer backdrop-blur-xs"
          >
            Book a demo
          </Link>
        </motion.div>

        {/* Institutional Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.24 }}
          style={{ fontFamily: "var(--font-mulish), Mulish, sans-serif" }}
          className="mt-7 sm:mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] sm:text-xs text-slate-500 font-medium"
        >
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0364FF]" />
            <span>Double-entry USD escrow</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0364FF]" />
            <span>Institutional broker rails</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0364FF]" />
            <span>14-day full access trial</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


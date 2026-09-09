"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ArrowFlight from "@/components/ui/ArrowFlight";

export default function CtaSection() {
  return (
    <section 
      style={{ fontFamily: "var(--font-mulish), Mulish, sans-serif" }}
      className="relative w-full bg-white pt-20 sm:pt-28 md:pt-36 pb-24 sm:pb-32 md:pb-44 overflow-hidden select-none"
    >
      {/* ─── Brand Blue Gradient Background (Rich Horizon & Radiant Glows, Zero Dots) ─── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Base white canvas */}
        <div className="absolute inset-0 bg-white" />

        {/* Soft Blue Horizon Wash rising from bottom */}
        <div
          className="absolute inset-x-0 bottom-0 h-[75%] sm:h-[70%] w-full"
          style={{
            background:
              "linear-gradient(to top, #c8defc 0%, rgba(216, 232, 252, 0.85) 30%, rgba(234, 243, 255, 0.55) 60%, rgba(255, 255, 255, 0) 100%)",
          }}
        />

        {/* Radiant Brand Blue Elliptical Glow rising from bottom-center */}
        <div
          className="absolute inset-x-0 bottom-0 h-[65%] sm:h-[60%] w-full"
          style={{
            background:
              "radial-gradient(ellipse 120% 85% at 50% 100%, rgba(3, 100, 255, 0.28) 0%, rgba(0, 92, 255, 0.18) 25%, rgba(111, 166, 255, 0.14) 50%, transparent 80%)",
          }}
        />

        {/* Concentrated Electric Blue Horizon Glow at bottom edge for punchy pop */}
        <div
          className="absolute inset-x-0 bottom-0 h-44 sm:h-56 w-full"
          style={{
            background:
              "radial-gradient(ellipse 85% 60% at 50% 100%, rgba(3, 100, 255, 0.35) 0%, rgba(111, 166, 255, 0.2) 35%, transparent 75%)",
          }}
        />

        {/* Atmospheric Flank Accents (Left & Right soft blue radiant washes) */}
        <div
          className="absolute bottom-0 left-0 w-[300px] sm:w-[500px] h-[250px] sm:h-[350px]"
          style={{
            background:
              "radial-gradient(circle at 10% 100%, rgba(111, 166, 255, 0.22) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[300px] sm:w-[500px] h-[250px] sm:h-[350px]"
          style={{
            background:
              "radial-gradient(circle at 90% 100%, rgba(3, 100, 255, 0.2) 0%, transparent 65%)",
          }}
        />

        {/* Ambient Horizon Shimmer Line along the bottom */}
        <div
          className="absolute bottom-0 inset-x-0 h-[1px]"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(111, 166, 255, 0.4) 25%, rgba(3, 100, 255, 0.6) 50%, rgba(111, 166, 255, 0.4) 75%, transparent 100%)",
          }}
        />
      </div>

      {/* ─── Centered Foreground Content ─── */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Mulish Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontFamily: "var(--font-mulish), Mulish, sans-serif" }}
          className="text-[26px] min-[390px]:text-[30px] sm:text-[40px] md:text-[50px] lg:text-[56px] font-bold text-[#0f172a] tracking-[-0.03em] leading-[1.18] max-w-4xl mx-auto text-center"
        >
          Your partnerships shouldn’t be difficult to manage
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontFamily: "var(--font-mulish), Mulish, sans-serif" }}
          className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-slate-600 font-normal max-w-2xl mx-auto leading-relaxed"
        >
          From finding the right partners and setting clear terms to tracking performance and managing payments, BRDGR handles the partnership operations from start to finish – giving you the confidence to focus on what matters: growth.
        </motion.p>

        {/* Dual Action Pill Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 sm:mt-9 flex items-center justify-center gap-3 sm:gap-3.5"
        >
          {/* Primary 3D Pill Button */}
          <Link
            href="/sign-up"
            className="btn-3d-primary group px-6 sm:px-7 py-3 text-xs sm:text-sm font-semibold tracking-tight text-white gap-2 cursor-pointer"
          >
            <span>Start for free</span>
            <ArrowFlight sizeClass="w-4 h-4" />
          </Link>

          {/* Secondary 3D Pill Button */}
          <Link
            href="/sign-up?demo=true"
            className="btn-3d-secondary group px-6 sm:px-7 py-3 text-xs sm:text-sm font-semibold tracking-tight gap-2 cursor-pointer"
          >
            <span>Book a demo</span>
            <ArrowFlight sizeClass="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Institutional Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.24 }}
          style={{ fontFamily: "var(--font-mulish), Mulish, sans-serif" }}
          className="mt-7 sm:mt-8 flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-8 gap-y-2 text-[11px] sm:text-xs text-slate-600 font-medium"
        >
          <span>Secure payments</span>
          <span>All partnerships in one place</span>
          <span>7 days to try BRDGR</span>
        </motion.div>
      </div>
    </section>
  );
}


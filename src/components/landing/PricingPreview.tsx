"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ArrowFlight from "@/components/ui/ArrowFlight";

export default function PricingPreview() {
  const [role, setRole] = useState<"client" | "partner">("client");

  return (
    <section className="relative w-full bg-[#f6f8fb] py-14 sm:py-18 md:py-20 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* ─── Header ──────────────────────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-neutral-900 tracking-[-0.025em] leading-[1.18]">
            Simple plans. Clear Pricing.
          </h2>

          <p className="mt-3.5 text-base sm:text-lg text-neutral-500 font-normal leading-relaxed">
            {role === "client"
              ? "Choose the plan that fits your business. As your partnership volume grows, your platform commission rate decreases – so you keep more as you grow."
              : "Choose the plan that fits your growth. Scale your partnership earnings with direct tracking, verified badges, and guaranteed on-time payouts."}
          </p>

          {/* Role Switcher Pill */}
          <div className="mt-7 inline-flex items-center p-1 rounded-full bg-slate-200/60 border border-slate-300/60 shadow-[inset_0_1px_3px_rgba(0,0,0,0.04)]">
            <button
              onClick={() => setRole("client")}
              className={`px-5 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${role === "client"
                ? "bg-[#0364FF] text-white shadow-md shadow-[#0364FF]/25 font-semibold"
                : "text-neutral-500 hover:text-[#0364FF]"
                }`}
            >
              Companies
            </button>
            <button
              onClick={() => setRole("partner")}
              className={`px-5 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${role === "partner"
                ? "bg-[#0364FF] text-white shadow-md shadow-[#0364FF]/25 font-semibold"
                : "text-neutral-500 hover:text-[#0364FF]"
                }`}
            >
              Partners
            </button>
          </div>
        </div>

        {/* ─── 3 Tier Cards ────────────────────────────────────────────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={role}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch"
          >
            {role === "client" ? (
              <>
                {/* ─── Companies: Starter Plan (White Card + Black 3D Button) ──── */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="rounded-[28px] card-pricing-pop card-specular-rim p-4.5 sm:p-5 flex flex-col justify-between min-h-[560px] relative"
                >
                  {/* Top Inner Well Container */}
                  <div className="rounded-[18px] bg-[#eff2f6] p-4 sm:p-4.5 min-h-[148px] flex flex-col justify-between">
                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-[11px] font-bold tracking-wider uppercase text-neutral-800 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05)] w-fit">
                      STARTER
                    </span>
                    <div>
                      <div className="text-xl sm:text-[24px] font-extrabold text-neutral-900 tracking-tight leading-tight">
                        7 Days FREE
                      </div>
                      <span className="text-[11px] sm:text-xs text-neutral-500 block mt-0.5">
                        Then standard monthly subscription
                      </span>
                    </div>
                  </div>

                  {/* Middle Content (Centered in card height) */}
                  <div className="flex-1 flex flex-col justify-center py-4 sm:py-5">
                    {/* Description */}
                    <p className="mb-3.5 text-xs sm:text-[13px] text-neutral-600 font-medium min-h-[34px] leading-snug text-left">
                      For companies starting out with structured partnerships.
                    </p>

                    {/* Feature Checklist */}
                    <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-[13px] text-neutral-700">
                      <li className="flex items-center gap-2.5">
                        <Check className="w-3.5 h-3.5 text-slate-400 stroke-[2.2] shrink-0" />
                        <span>Manage up to 10 active partnerships</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Check className="w-3.5 h-3.5 text-slate-400 stroke-[2.2] shrink-0" />
                        <span>Track activities automatically</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Check className="w-3.5 h-3.5 text-slate-400 stroke-[2.2] shrink-0" />
                        <span>Standard partner matching</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Check className="w-3.5 h-3.5 text-slate-400 stroke-[2.2] shrink-0" />
                        <span>Onboard up to 10 of your own partners</span>
                      </li>
                    </ul>
                  </div>

                  {/* Black 3D Button (Compact) – pinned to bottom left */}
                  <div className="w-full flex justify-start mt-auto pt-2">
                    <Link
                      href="/sign-up"
                      className="btn-3d-dark w-fit px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-[13px] font-semibold text-white cursor-pointer gap-2 group inline-flex items-center justify-center"
                    >
                      <span>Get Started</span>
                      <ArrowFlight sizeClass="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>

                {/* ─── Companies: Growth Plan (Black Card + Hero Top Well + Blue 3D Button) ─ */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="rounded-[28px] card-pricing-featured card-specular-rim p-4.5 sm:p-5 flex flex-col justify-between min-h-[560px] relative overflow-hidden"
                >
                  {/* Subtle top specular glass rim */}
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-80 pointer-events-none" />

                  {/* Top Inner Well Container: Hero Sky Gradient & Glass Arc Background */}
                  <div
                    className="relative rounded-[18px] border border-blue-200/90 p-4 sm:p-4.5 min-h-[148px] flex flex-col justify-between overflow-hidden shadow-xs"
                    style={{
                      background: "linear-gradient(160deg, #c2daf9 0%, #d2e5fc 25%, #e6f1fe 55%, #f6f9fc 85%, #ffffff 100%)",
                    }}
                  >
                    {/* Specular Beveled Highlight along top rim */}
                    <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent opacity-95 pointer-events-none z-10" />

                    {/* Hero Style Top-Right: Soft Blue Gradient Wash */}
                    <div
                      className="absolute -top-12 -right-12 w-[200px] h-[200px] bg-[radial-gradient(ellipse_at_top_right,rgba(147,197,253,0.75)_0%,rgba(191,219,254,0.4)_45%,transparent_70%)] pointer-events-none -z-0"
                      aria-hidden="true"
                    />

                    {/* Hero Style Top-Right: Crisp White Glass Arc */}
                    <svg
                      className="absolute top-0 right-0 w-[220px] h-[130px] pointer-events-none overflow-visible -z-0"
                      viewBox="0 0 240 150"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      {/* Diffuse white halo */}
                      <path
                        d="M 40,0 C 90,52 150,86 250,102"
                        stroke="#FFFFFF"
                        strokeWidth="11"
                        strokeOpacity="0.5"
                        strokeLinecap="round"
                        className="blur-[5px]"
                      />
                      {/* Razor-sharp white glass reflection arc */}
                      <path
                        d="M 40,0 C 90,52 150,86 250,102"
                        stroke="url(#growth-white-arc)"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                      />
                      {/* Subtle secondary glass refraction line */}
                      <path
                        d="M 62,0 C 108,48 162,78 245,92"
                        stroke="url(#growth-white-arc-soft)"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient id="growth-white-arc" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
                          <stop offset="30%" stopColor="#FFFFFF" stopOpacity="0.95" />
                          <stop offset="75%" stopColor="#FFFFFF" stopOpacity="0.95" />
                          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
                        </linearGradient>
                        <linearGradient id="growth-white-arc-soft" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
                          <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.45" />
                          <stop offset="80%" stopColor="#FFFFFF" stopOpacity="0.5" />
                          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>

                    <div className="relative z-10 flex items-center justify-between">
                      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider text-neutral-900 bg-white/95 backdrop-blur-xs shadow-[0_1px_3px_rgba(0,0,0,0.06)] border border-white/80 w-fit">
                        GROWTH
                      </span>
                      <span className="text-[10px] font-bold text-blue-600 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded-full uppercase tracking-wider shadow-xs border border-blue-100">
                        POPULAR
                      </span>
                    </div>
                    <div className="relative z-10">
                      <div className="text-xl sm:text-[24px] font-extrabold text-neutral-900 tracking-tight leading-tight">
                        7 Days FREE
                      </div>
                      <span className="text-[11px] sm:text-xs text-neutral-600 block mt-0.5 font-medium">
                        Then standard monthly subscription
                      </span>
                    </div>
                  </div>

                  {/* Middle Content (Centered in card height) */}
                  <div className="flex-1 flex flex-col justify-center py-4 sm:py-5">
                    {/* Description */}
                    <p className="mb-3.5 text-xs sm:text-[13px] text-slate-300 font-normal min-h-[34px] leading-snug text-left">
                      For growing companies managing more partners and increasing partnership volume.
                    </p>

                    {/* Feature Checklist */}
                    <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-[13px] text-slate-300">
                      <li className="flex items-center gap-2.5">
                        <Check className="w-3.5 h-3.5 text-blue-400 stroke-[2.2] shrink-0" />
                        <span>Manage up to 50 partnerships</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Check className="w-3.5 h-3.5 text-blue-400 stroke-[2.2] shrink-0" />
                        <span>Priority partner matching</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Check className="w-3.5 h-3.5 text-blue-400 stroke-[2.2] shrink-0" />
                        <span>Onboard up to 50 of your own partners</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Check className="w-3.5 h-3.5 text-blue-400 stroke-[2.2] shrink-0" />
                        <span>Priority support</span>
                      </li>
                    </ul>
                  </div>

                  {/* Blue 3D Button (Compact) – pinned to bottom left */}
                  <div className="w-full flex justify-start mt-auto pt-2">
                    <Link
                      href="/sign-up"
                      className="btn-3d-primary w-fit px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-[13px] font-semibold text-white cursor-pointer gap-2 group inline-flex items-center justify-center"
                    >
                      <span>Get Started</span>
                      <ArrowFlight sizeClass="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>

                {/* ─── Companies: Enterprise Plan (White Card + Black 3D Button) ─ */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="rounded-[28px] card-pricing-pop card-specular-rim p-4.5 sm:p-5 flex flex-col justify-between min-h-[560px] relative"
                >
                  {/* Top Inner Well Container */}
                  <div className="rounded-[18px] bg-[#eff2f6] p-4 sm:p-4.5 min-h-[148px] flex flex-col justify-between">
                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-[11px] font-bold tracking-wider uppercase text-neutral-800 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05)] w-fit">
                      ENTERPRISE
                    </span>
                    <div>
                      <div className="text-xl sm:text-[24px] font-extrabold text-neutral-900 tracking-tight leading-tight">
                        7 Days FREE
                      </div>
                      <span className="text-[11px] sm:text-xs text-neutral-500 block mt-0.5">
                        Then standard monthly subscription
                      </span>
                    </div>
                  </div>

                  {/* Middle Content (Centered in card height) */}
                  <div className="flex-1 flex flex-col justify-center py-4 sm:py-5">
                    {/* Description */}
                    <p className="mb-3.5 text-xs sm:text-[13px] text-neutral-600 font-medium min-h-[34px] leading-snug text-left">
                      For established companies running partnerships at scale.
                    </p>

                    {/* Feature Checklist */}
                    <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-[13px] text-neutral-700">
                      <li className="flex items-center gap-2.5">
                        <Check className="w-3.5 h-3.5 text-slate-400 stroke-[2.2] shrink-0" />
                        <span>Manage unlimited active partnerships</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Check className="w-3.5 h-3.5 text-slate-400 stroke-[2.2] shrink-0" />
                        <span>Onboard unlimited partners of your own</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Check className="w-3.5 h-3.5 text-slate-400 stroke-[2.2] shrink-0" />
                        <span>Dedicated operations Manager</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Check className="w-3.5 h-3.5 text-slate-400 stroke-[2.2] shrink-0" />
                        <span>Exclusive access to top Growth Partners</span>
                      </li>
                      <li className="flex items-center gap-2.5 text-neutral-500 font-medium">
                        <Check className="w-3.5 h-3.5 text-slate-400 stroke-[2.2] shrink-0" />
                        <span>And more.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Black 3D Button (Compact) – pinned to bottom left */}
                  <div className="w-full flex justify-start mt-auto pt-2">
                    <Link
                      href="/sign-up"
                      className="btn-3d-dark w-fit px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-[13px] font-semibold text-white cursor-pointer gap-2 group inline-flex items-center justify-center"
                    >
                      <span>Get Started</span>
                      <ArrowFlight sizeClass="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              </>
            ) : (
              <>
                {/* ─── Partners: Starter Plan (White Card + Black 3D Button) ───── */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="rounded-[28px] card-pricing-pop card-specular-rim p-4.5 sm:p-5 flex flex-col justify-between min-h-[560px] relative"
                >
                  {/* Top Inner Well Container */}
                  <div className="rounded-[18px] bg-[#eff2f6] p-4 sm:p-4.5 min-h-[148px] flex flex-col justify-between">
                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-[11px] font-bold tracking-wider uppercase text-neutral-800 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05)] w-fit">
                      STARTER
                    </span>
                    <div className="text-xl sm:text-[24px] font-extrabold text-neutral-900 tracking-tight">
                      FREE
                    </div>
                  </div>

                  {/* Middle Content (Centered in card height) */}
                  <div className="flex-1 flex flex-col justify-center py-4 sm:py-5">
                    {/* Description */}
                    <p className="mb-3.5 text-xs sm:text-[13px] text-neutral-600 font-medium min-h-[34px] leading-snug text-left">
                      For Growth Partners/Affiliates starting out and looking for new opportunities.
                    </p>

                    {/* Feature Checklist */}
                    <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-[13px] text-neutral-700">
                      <li className="flex items-center gap-2.5">
                        <Check className="w-3.5 h-3.5 text-slate-400 stroke-[2.2] shrink-0" />
                        <span>Access to BRDGR network</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Check className="w-3.5 h-3.5 text-slate-400 stroke-[2.2] shrink-0" />
                        <span>Browse available opportunities</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Check className="w-3.5 h-3.5 text-slate-400 stroke-[2.2] shrink-0" />
                        <span>Manage up to 3 active partnerships</span>
                      </li>
                    </ul>
                  </div>

                  {/* Black 3D Button (Compact) – pinned to bottom left */}
                  <div className="w-full flex justify-start mt-auto pt-2">
                    <Link
                      href="/partner"
                      className="btn-3d-dark w-fit px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-[13px] font-semibold text-white cursor-pointer gap-2 group inline-flex items-center justify-center"
                    >
                      <span>Get Started</span>
                      <ArrowFlight sizeClass="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>

                {/* ─── Partners: Pro Plan (Black Card + Hero Top Well + Blue 3D Button) ─ */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="rounded-[28px] card-pricing-featured card-specular-rim p-4.5 sm:p-5 flex flex-col justify-between min-h-[560px] relative overflow-hidden"
                >
                  {/* Subtle top specular glass rim */}
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-80 pointer-events-none" />

                  {/* Top Inner Well Container: Hero Sky Gradient & Glass Arc Background */}
                  <div
                    className="relative rounded-[18px] border border-blue-200/90 p-4 sm:p-4.5 min-h-[148px] flex flex-col justify-between overflow-hidden shadow-xs"
                    style={{
                      background: "linear-gradient(160deg, #c2daf9 0%, #d2e5fc 25%, #e6f1fe 55%, #f6f9fc 85%, #ffffff 100%)",
                    }}
                  >
                    {/* Specular Beveled Highlight along top rim */}
                    <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent opacity-95 pointer-events-none z-10" />

                    {/* Hero Style Top-Right: Soft Blue Gradient Wash */}
                    <div
                      className="absolute -top-12 -right-12 w-[200px] h-[200px] bg-[radial-gradient(ellipse_at_top_right,rgba(147,197,253,0.75)_0%,rgba(191,219,254,0.4)_45%,transparent_70%)] pointer-events-none -z-0"
                      aria-hidden="true"
                    />

                    {/* Hero Style Top-Right: Crisp White Glass Arc */}
                    <svg
                      className="absolute top-0 right-0 w-[220px] h-[130px] pointer-events-none overflow-visible -z-0"
                      viewBox="0 0 240 150"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      {/* Diffuse white halo */}
                      <path
                        d="M 40,0 C 90,52 150,86 250,102"
                        stroke="#FFFFFF"
                        strokeWidth="11"
                        strokeOpacity="0.5"
                        strokeLinecap="round"
                        className="blur-[5px]"
                      />
                      {/* Razor-sharp white glass reflection arc */}
                      <path
                        d="M 40,0 C 90,52 150,86 250,102"
                        stroke="url(#pro-white-arc)"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                      />
                      {/* Subtle secondary glass refraction line */}
                      <path
                        d="M 62,0 C 108,48 162,78 245,92"
                        stroke="url(#pro-white-arc-soft)"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient id="pro-white-arc" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
                          <stop offset="30%" stopColor="#FFFFFF" stopOpacity="0.95" />
                          <stop offset="75%" stopColor="#FFFFFF" stopOpacity="0.95" />
                          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
                        </linearGradient>
                        <linearGradient id="pro-white-arc-soft" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
                          <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.45" />
                          <stop offset="80%" stopColor="#FFFFFF" stopOpacity="0.5" />
                          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
                        </linearGradient>
                      </defs>
                    </svg>

                    <div className="relative z-10 flex items-center justify-between">
                      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider text-neutral-900 bg-white/95 backdrop-blur-xs shadow-[0_1px_3px_rgba(0,0,0,0.06)] border border-white/80 w-fit">
                        PRO
                      </span>
                      <span className="text-[10px] font-bold text-blue-600 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded-full uppercase tracking-wider shadow-xs border border-blue-100">
                        POPULAR
                      </span>
                    </div>
                    <div className="relative z-10 text-lg sm:text-[22px] font-bold text-neutral-900 tracking-tight">
                      Payment Undisclosed
                    </div>
                  </div>

                  {/* Middle Content (Centered in card height) */}
                  <div className="flex-1 flex flex-col justify-center py-4 sm:py-5">
                    {/* Description */}
                    <p className="mb-3.5 text-xs sm:text-[13px] text-slate-300 font-normal min-h-[34px] leading-snug text-left">
                      For growth partners ready to take on more opportunities and grow their earnings.
                    </p>

                    {/* Feature Checklist */}
                    <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-[13px] text-slate-300">
                      <li className="flex items-center gap-2.5">
                        <Check className="w-3.5 h-3.5 text-blue-400 stroke-[2.2] shrink-0" />
                        <span>Get a verified badge</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Check className="w-3.5 h-3.5 text-blue-400 stroke-[2.2] shrink-0" />
                        <span>Manage up to 10 active Partnerships</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Check className="w-3.5 h-3.5 text-blue-400 stroke-[2.2] shrink-0" />
                        <span>Get priority access to new opportunities</span>
                      </li>
                    </ul>
                  </div>

                  {/* Blue 3D Button (Compact) – pinned to bottom left */}
                  <div className="w-full flex justify-start mt-auto pt-2">
                    <Link
                      href="/partner"
                      className="btn-3d-primary w-fit px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-[13px] font-semibold text-white cursor-pointer gap-2 group inline-flex items-center justify-center"
                    >
                      <span>Get Started</span>
                      <ArrowFlight sizeClass="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>

                {/* ─── Partners: Elite Plan (White Card + Black 3D Button) ─────── */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="rounded-[28px] card-pricing-pop card-specular-rim p-4.5 sm:p-5 flex flex-col justify-between min-h-[560px] relative"
                >
                  {/* Top Inner Well Container */}
                  <div className="rounded-[18px] bg-[#eff2f6] p-4 sm:p-4.5 min-h-[148px] flex flex-col justify-between">
                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-[11px] font-bold tracking-wider uppercase text-neutral-800 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05)] w-fit">
                      ELITE
                    </span>
                    <div className="text-lg sm:text-[22px] font-bold text-neutral-900 tracking-tight">
                      Payment Undisclosed
                    </div>
                  </div>

                  {/* Middle Content (Centered in card height) */}
                  <div className="flex-1 flex flex-col justify-center py-4 sm:py-5">
                    {/* Description */}
                    <p className="mb-3.5 text-xs sm:text-[13px] text-neutral-600 font-medium min-h-[34px] leading-snug text-left">
                      For established growth partners ready to take on bigger opportunities and scale their partnerships.
                    </p>

                    {/* Feature Checklist */}
                    <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-[13px] text-neutral-700">
                      <li className="flex items-center gap-2.5">
                        <Check className="w-3.5 h-3.5 text-slate-400 stroke-[2.2] shrink-0" />
                        <span>Get a verified badge</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Check className="w-3.5 h-3.5 text-slate-400 stroke-[2.2] shrink-0" />
                        <span>Unlimited active partnerships</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Check className="w-3.5 h-3.5 text-slate-400 stroke-[2.2] shrink-0" />
                        <span>Access to exclusive opportunities</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Check className="w-3.5 h-3.5 text-slate-400 stroke-[2.2] shrink-0" />
                        <span>Dedicated account manager</span>
                      </li>
                      <li className="flex items-center gap-2.5 text-neutral-500 font-medium">
                        <Check className="w-3.5 h-3.5 text-slate-400 stroke-[2.2] shrink-0" />
                        <span>Priority support</span>
                      </li>
                    </ul>
                  </div>

                  {/* Black 3D Button (Compact) – pinned to bottom left */}
                  <div className="w-full flex justify-start mt-auto pt-2">
                    <Link
                      href="/partner"
                      className="btn-3d-dark w-fit px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-[13px] font-semibold text-white cursor-pointer gap-2 group inline-flex items-center justify-center"
                    >
                      <span>Get Started</span>
                      <ArrowFlight sizeClass="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}


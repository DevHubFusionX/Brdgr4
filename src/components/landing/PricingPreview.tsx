"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ArrowFlight from "@/components/ui/ArrowFlight";

export default function PricingPreview() {
  const [role, setRole] = useState<"client" | "partner">("client");

  return (
    <section className="relative w-full bg-[#f6f8fb] py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* ─── Header ──────────────────────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-neutral-900 tracking-[-0.025em] leading-[1.18]">
            Simple plans. Clear Pricing.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-500 font-normal leading-relaxed">
            {role === "client"
              ? "Choose the plan that fits your business. As your partnership volume grows, your platform commission rate decreases – so you keep more as you grow."
              : "Choose the plan that fits your growth. Scale your partnership earnings with direct tracking, verified badges, and guaranteed on-time payouts."}
          </p>

          {/* Role Switcher Pill */}
          <div className="mt-8 inline-flex items-center p-1 rounded-full bg-slate-200/60 border border-slate-300/60 shadow-[inset_0_1px_3px_rgba(0,0,0,0.04)]">
            <button
              onClick={() => setRole("client")}
              className={`px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                role === "client"
                  ? "bg-[#0364FF] text-white shadow-md shadow-[#0364FF]/25 font-semibold"
                  : "text-neutral-500 hover:text-[#0364FF]"
              }`}
            >
              Companies
            </button>
            <button
              onClick={() => setRole("partner")}
              className={`px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                role === "partner"
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
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch"
          >
            {role === "client" ? (
              <>
                {/* ─── Companies: Starter Plan ─────────────────────────────────── */}
                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="rounded-[28px] card-pricing-pop card-specular-rim p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden"
                >
                  {/* Specular Beveled Crystal Highlight along the top rim */}
                  <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent opacity-95 pointer-events-none z-10" />
                  <div>
                    <div className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-black tracking-wider bg-blue-100/90 text-[#0364FF] border border-blue-200/90 uppercase mb-3">
                      STARTER
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-600 font-medium mt-1">
                      For companies starting out with structured partnerships.
                    </p>

                    <div className="my-6 pt-5 border-t border-slate-100">
                      <span className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
                        7 Days FREE
                      </span>
                      <span className="text-xs text-neutral-400 block mt-1">Then standard monthly subscription</span>
                    </div>

                    <ul className="space-y-3 text-xs sm:text-sm text-neutral-700">
                      <li className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-[#0364FF] shrink-0" />
                        <span>Manage up to 10 active partnerships</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-[#0364FF] shrink-0" />
                        <span>Track activities automatically</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-[#0364FF] shrink-0" />
                        <span>Standard partner matching</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-[#0364FF] shrink-0" />
                        <span>Onboard up to 10 of your own partners</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-8 pt-5 border-t border-slate-100">
                    <Link
                      href="/sign-up"
                      className="btn-3d-secondary group w-full py-3 text-xs sm:text-sm font-semibold tracking-tight gap-2 cursor-pointer"
                    >
                      <span>Get Started</span>
                      <ArrowFlight sizeClass="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>

                {/* ─── Companies: Growth Plan (Noticeable & Highlighted) ─────────── */}
                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="rounded-[28px] text-white card-pricing-featured card-specular-rim p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-xl shadow-blue-500/20"
                >
                  {/* Specular Beveled Crystal Highlight along the top rim */}
                  <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-95 pointer-events-none z-10" />
                  <div>
                    <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-black tracking-wider bg-white text-[#0364FF] shadow-sm uppercase mb-3 ring-2 ring-blue-400/40">
                      GROWTH
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                      For growing companies managing more partners and increasing partnership volume.
                    </p>

                    <div className="my-6 pt-5 border-t border-neutral-800">
                      <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                        7 Days FREE
                      </span>
                      <span className="text-xs text-slate-400 block mt-1">Then standard monthly subscription</span>
                    </div>

                    <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
                      <li className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-[#0364FF] shrink-0" />
                        <span>Manage up to 50 partnerships</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-[#0364FF] shrink-0" />
                        <span>Priority partner matching</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-[#0364FF] shrink-0" />
                        <span>Onboard up to 50 of your own partners</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-[#0364FF] shrink-0" />
                        <span>Priority support</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-8 pt-5 border-t border-neutral-800">
                    <Link
                      href="/sign-up"
                      className="btn-3d-primary group w-full py-3 text-xs sm:text-sm font-semibold tracking-tight text-white gap-2 cursor-pointer"
                    >
                      <span>Get Started</span>
                      <ArrowFlight sizeClass="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>

                {/* ─── Companies: Enterprise Plan ─────────────────────────────── */}
                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="rounded-[28px] card-pricing-pop card-specular-rim p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden"
                >
                  {/* Specular Beveled Crystal Highlight along the top rim */}
                  <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent opacity-95 pointer-events-none z-10" />
                  <div>
                    <div className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-black tracking-wider bg-slate-200/90 text-slate-800 border border-slate-300/80 uppercase mb-3">
                      ENTERPRISE
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-600 font-medium mt-1">
                      For established companies running partnerships at scale
                    </p>

                    <div className="my-6 pt-5 border-t border-slate-100">
                      <span className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
                        7 Days FREE
                      </span>
                      <span className="text-xs text-neutral-400 block mt-1">Then standard monthly subscription</span>
                    </div>

                    <ul className="space-y-3 text-xs sm:text-sm text-neutral-700">
                      <li className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-[#0364FF] shrink-0" />
                        <span>Manage unlimited active partnerships</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-[#0364FF] shrink-0" />
                        <span>Onboard unlimited partners of your own</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-[#0364FF] shrink-0" />
                        <span>Dedicated operations Manager</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-[#0364FF] shrink-0" />
                        <span>Exclusive access to top Growth Partners</span>
                      </li>
                      <li className="flex items-center gap-2.5 text-neutral-500 font-medium">
                        <Check className="w-4 h-4 text-[#0364FF] shrink-0" />
                        <span>And more.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-8 pt-5 border-t border-slate-100">
                    <Link
                      href="/sign-up"
                      className="btn-3d-secondary group w-full py-3 text-xs sm:text-sm font-semibold tracking-tight gap-2 cursor-pointer"
                    >
                      <span>Get Started</span>
                      <ArrowFlight sizeClass="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              </>
            ) : (
              <>
                {/* ─── Partners: Starter Plan ─────────────────────────────────── */}
                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="rounded-[28px] card-pricing-pop card-specular-rim p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden"
                >
                  {/* Specular Beveled Crystal Highlight along the top rim */}
                  <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent opacity-95 pointer-events-none z-10" />
                  <div>
                    <div className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-black tracking-wider bg-blue-100/90 text-[#0364FF] border border-blue-200/90 uppercase mb-3">
                      STARTER
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-600 font-medium mt-1">
                      For Growth Partners/Affiliates starting out and looking for new opportunities
                    </p>

                    <div className="my-6 pt-5 border-t border-slate-100">
                      <span className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
                        FREE
                      </span>
                    </div>

                    <ul className="space-y-3 text-xs sm:text-sm text-neutral-700">
                      <li className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-[#0364FF] shrink-0" />
                        <span>Access to BRDGR network</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-[#0364FF] shrink-0" />
                        <span>Browse available opportunities</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-[#0364FF] shrink-0" />
                        <span>Manage up to 3 active partnerships</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-8 pt-5 border-t border-slate-100">
                    <Link
                      href="/partner"
                      className="btn-3d-secondary group w-full py-3 text-xs sm:text-sm font-semibold tracking-tight gap-2 cursor-pointer"
                    >
                      <span>Get Started</span>
                      <ArrowFlight sizeClass="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>

                {/* ─── Partners: Pro Plan ─────────────────────────────────────── */}
                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="rounded-[28px] text-white card-pricing-featured card-specular-rim p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-xl shadow-blue-500/20"
                >
                  {/* Specular Beveled Crystal Highlight along the top rim */}
                  <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-95 pointer-events-none z-10" />
                  <div>
                    <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-black tracking-wider bg-white text-[#0364FF] shadow-sm uppercase mb-3 ring-2 ring-blue-400/40">
                      PRO
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                      For growth partners ready to take on more opportunities and grow their earnings
                    </p>

                    <div className="my-6 pt-5 border-t border-neutral-800">
                      <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        (Payment Undisclosed)
                      </span>
                    </div>

                    <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
                      <li className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-[#0364FF] shrink-0" />
                        <span>Get a verified badge</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-[#0364FF] shrink-0" />
                        <span>Manage up to 10 active Partnerships</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-[#0364FF] shrink-0" />
                        <span>Get priority access to new opportunities</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-8 pt-5 border-t border-neutral-800">
                    <Link
                      href="/partner"
                      className="btn-3d-primary group w-full py-3 text-xs sm:text-sm font-semibold tracking-tight text-white gap-2 cursor-pointer"
                    >
                      <span>Get Started</span>
                      <ArrowFlight sizeClass="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>

                {/* ─── Partners: Elite Plan ───────────────────────────────────── */}
                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="rounded-[28px] card-pricing-pop card-specular-rim p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden"
                >
                  {/* Specular Beveled Crystal Highlight along the top rim */}
                  <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent opacity-95 pointer-events-none z-10" />
                  <div>
                    <div className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-black tracking-wider bg-slate-200/90 text-slate-800 border border-slate-300/80 uppercase mb-3">
                      ELITE
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-600 font-medium mt-1">
                      For established growth partners ready to take on bigger opportunities and scale their partnerships.
                    </p>

                    <div className="my-6 pt-5 border-t border-slate-100">
                      <span className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight">
                        Payment Undisclosed
                      </span>
                    </div>

                    <ul className="space-y-3 text-xs sm:text-sm text-neutral-700">
                      <li className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-[#0364FF] shrink-0" />
                        <span>Get a verified badge</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-[#0364FF] shrink-0" />
                        <span>Unlimited active partnerships</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-[#0364FF] shrink-0" />
                        <span>Access to exclusive opportunities</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-[#0364FF] shrink-0" />
                        <span>Dedicated account manager</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-[#0364FF] shrink-0" />
                        <span>Priority support</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-8 pt-5 border-t border-slate-100">
                    <Link
                      href="/partner"
                      className="btn-3d-secondary group w-full py-3 text-xs sm:text-sm font-semibold tracking-tight gap-2 cursor-pointer"
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

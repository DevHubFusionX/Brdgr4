"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import UiverseHeroButton from "@/components/ui/UiverseHeroButton";

export default function PricingPreview() {
  const [role, setRole] = useState<"client" | "partner">("client");

  return (
    <section className="relative w-full bg-[#f6f8fb] py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* ─── Header ──────────────────────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/90 text-xs sm:text-sm font-medium text-slate-700 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
            <span>Transparent Commercial Structure</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-neutral-900 tracking-[-0.025em] leading-[1.18]">
            Predictable plans. Zero hidden take rates.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-500 font-normal leading-relaxed">
            Every account starts with a 14-day full product trial. Platform commission share decreases automatically on higher tiers, aligning our incentives directly with your volume.
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
              For Prop Firms & Brokers
            </button>
            <button
              onClick={() => setRole("partner")}
              className={`px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                role === "partner"
                  ? "bg-[#0364FF] text-white shadow-md shadow-[#0364FF]/25 font-semibold"
                  : "text-neutral-500 hover:text-[#0364FF]"
              }`}
            >
              For Growth Partners
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
                {/* Starter Plan */}
                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="rounded-[28px] bg-white border border-slate-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.02)] p-6 sm:p-8 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-bold tracking-wider text-neutral-400 uppercase">
                      STARTER
                    </span>
                    <h3 className="text-xl font-normal text-neutral-900 mt-1">Boutique Programs</h3>
                    <p className="text-xs text-neutral-500 mt-2">
                      For emerging prop firms launching their initial vetted partner roster.
                    </p>

                    <div className="my-6 pt-5 border-t border-slate-100">
                      <span className="text-2xl font-bold text-neutral-900">
                        <AnimatedCounter value={14} /> Days Free
                      </span>
                      <span className="text-xs text-neutral-400 block mt-0.5">Then standard monthly subscription</span>
                    </div>

                    <ul className="space-y-3 text-xs sm:text-sm text-neutral-700">
                      <li className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-neutral-800 shrink-0" />
                        <span>Up to <AnimatedCounter value={10} /> active live partnerships</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-neutral-800 shrink-0" />
                        <span>Server-to-server (S2S) signed postbacks</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-neutral-800 shrink-0" />
                        <span>Double-entry USD escrow settlement</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-neutral-800 shrink-0" />
                        <span>Standard candidate proposal queue</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-8 pt-5 border-t border-slate-100">
                    <Link
                      href="/sign-up"
                      className="w-full py-3 rounded-full bg-slate-100 hover:bg-[#0364FF] text-neutral-900 hover:text-white text-xs sm:text-sm font-semibold tracking-tight transition-all duration-200 flex items-center justify-center gap-2 group shadow-xs"
                    >
                      <span>Start Free Trial</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </motion.div>

                {/* Growth Plan (Highlighted) */}
                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="rounded-[28px] bg-neutral-900 text-white border border-neutral-800 shadow-[0_8px_30px_rgba(0,0,0,0.12)] p-6 sm:p-8 flex flex-col justify-between relative"
                >
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-white text-neutral-900 text-[10px] font-bold tracking-wider uppercase shadow-sm">
                    MOST POPULAR
                  </div>

                  <div>
                    <span className="text-xs font-bold tracking-wider text-slate-400 uppercase">
                      GROWTH
                    </span>
                    <h3 className="text-xl font-normal text-white mt-1">Scaling Operations</h3>
                    <p className="text-xs text-slate-300 mt-2">
                      For active prop challenge operators expanding volume across regions.
                    </p>

                    <div className="my-6 pt-5 border-t border-neutral-800">
                      <span className="text-2xl font-bold text-white">
                        <AnimatedCounter value={14} /> Days Free
                      </span>
                      <span className="text-xs text-slate-400 block mt-0.5">Reduced commission share applied</span>
                    </div>

                    <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
                      <li className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-[#0364FF] shrink-0" />
                        <span>Up to <AnimatedCounter value={50} /> active live partnerships</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-[#0364FF] shrink-0" />
                        <span>Priority candidate generation & matching</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-[#0364FF] shrink-0" />
                        <span>Fraud gate velocity & anomaly analytics</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-[#0364FF] shrink-0" />
                        <span>Bulk BYO network invitation by CSV</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-[#0364FF] shrink-0" />
                        <span>Reduced platform share rate</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-8 pt-5 border-t border-neutral-800 flex justify-center">
                    <UiverseHeroButton
                      href="/sign-up"
                      text="Start Free Trial"
                      className="w-full justify-between"
                      size="sm"
                    />
                  </div>
                </motion.div>

                {/* Enterprise Plan */}
                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="rounded-[28px] bg-white border border-slate-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.02)] p-6 sm:p-8 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-bold tracking-wider text-neutral-400 uppercase">
                      ENTERPRISE
                    </span>
                    <h3 className="text-xl font-normal text-neutral-900 mt-1">Multi-Brand Groups</h3>
                    <p className="text-xs text-neutral-500 mt-2">
                      For established brokerages and prop firms requiring tailored infrastructure.
                    </p>

                    <div className="my-6 pt-5 border-t border-slate-100">
                      <span className="text-2xl font-bold text-neutral-900">Custom Architecture</span>
                      <span className="text-xs text-neutral-400 block mt-0.5">Lowest platform share tier</span>
                    </div>

                    <ul className="space-y-3 text-xs sm:text-sm text-neutral-700">
                      <li className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-[#0364FF] shrink-0" />
                        <span>Unlimited active live partnerships</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-[#0364FF] shrink-0" />
                        <span>Custom trading platform bridge adapters</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-[#0364FF] shrink-0" />
                        <span>Dedicated Operations Administrator</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-[#0364FF] shrink-0" />
                        <span>Bespoke bilateral agreement templates</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-8 pt-5 border-t border-slate-100">
                    <Link
                      href="/sign-up"
                      className="w-full py-3 rounded-full bg-slate-100 hover:bg-[#0364FF] text-neutral-900 hover:text-white text-xs sm:text-sm font-semibold tracking-tight transition-all duration-200 flex items-center justify-center gap-2 group shadow-xs"
                    >
                      <span>Contact Operations</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              </>
            ) : (
              <>
                {/* Starter Partner */}
                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="rounded-[28px] bg-white border border-slate-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.02)] p-6 sm:p-8 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-bold tracking-wider text-neutral-400 uppercase">
                      STARTER
                    </span>
                    <h3 className="text-xl font-normal text-neutral-900 mt-1">Verified Partner</h3>
                    <p className="text-xs text-neutral-500 mt-2">
                      For individual trading educators and creators entering the vetting queue.
                    </p>

                    <div className="my-6 pt-5 border-t border-slate-100">
                      <span className="text-2xl font-bold text-neutral-900">
                        <AnimatedCounter value={14} /> Days Free
                      </span>
                      <span className="text-xs text-neutral-400 block mt-0.5">Guaranteed 5th biz day payouts</span>
                    </div>

                    <ul className="space-y-3 text-xs sm:text-sm text-neutral-700">
                      <li className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-[#0364FF] shrink-0" />
                        <span>Full 3-dimension vetting audit</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-[#0364FF] shrink-0" />
                        <span>Direct campaign brief proposals</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-[#0364FF] shrink-0" />
                        <span>Itemised monthly running statements</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-8 pt-5 border-t border-slate-100">
                    <Link
                      href="/partner"
                      className="w-full py-3 rounded-full bg-slate-100 hover:bg-[#0364FF] text-neutral-900 hover:text-white text-xs sm:text-sm font-semibold tracking-tight transition-all duration-200 flex items-center justify-center gap-2 group shadow-xs"
                    >
                      <span>Apply for Vetting</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </motion.div>

                {/* Pro Partner */}
                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="rounded-[28px] bg-neutral-900 text-white border border-neutral-800 shadow-[0_8px_30px_rgba(0,0,0,0.12)] p-6 sm:p-8 flex flex-col justify-between relative"
                >
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-white text-neutral-900 text-[10px] font-bold tracking-wider uppercase shadow-sm">
                    RECOMMENDED
                  </div>

                  <div>
                    <span className="text-xs font-bold tracking-wider text-slate-400 uppercase">
                      PRO PARTNER
                    </span>
                    <h3 className="text-xl font-normal text-white mt-1">High-Volume Creators</h3>
                    <p className="text-xs text-slate-300 mt-2">
                      For active trading analysts and community operators with established audience.
                    </p>

                    <div className="my-6 pt-5 border-t border-neutral-800">
                      <span className="text-2xl font-bold text-white">Priority Matching</span>
                      <span className="text-xs text-slate-400 block mt-0.5">Top-tier brand allocations</span>
                    </div>

                    <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
                      <li className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-[#0364FF] shrink-0" />
                        <span>Priority matching against top brand briefs</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-[#0364FF] shrink-0" />
                        <span>Promo-code offline attribution tracking</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-[#0364FF] shrink-0" />
                        <span>Growth Partner Academy certifications</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-[#0364FF] shrink-0" />
                        <span>Fast-track dispute resolution window</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-8 pt-5 border-t border-neutral-800 flex justify-center">
                    <UiverseHeroButton
                      href="/partner"
                      text="Apply for Vetting"
                      className="w-full justify-between"
                      size="sm"
                    />
                  </div>
                </motion.div>

                {/* Elite Partner */}
                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="rounded-[28px] bg-white border border-slate-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.02)] p-6 sm:p-8 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-bold tracking-wider text-neutral-400 uppercase">
                      ELITE
                    </span>
                    <h3 className="text-xl font-normal text-neutral-900 mt-1">Institutional Networks</h3>
                    <p className="text-xs text-neutral-500 mt-2">
                      For multi-analyst media agencies and regional trading master syndicates.
                    </p>

                    <div className="my-6 pt-5 border-t border-slate-100">
                      <span className="text-2xl font-bold text-neutral-900">Custom Retainers</span>
                      <span className="text-xs text-neutral-400 block mt-0.5">Direct wire settlement options</span>
                    </div>

                    <ul className="space-y-3 text-xs sm:text-sm text-neutral-700">
                      <li className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-[#0364FF] shrink-0" />
                        <span>Dedicated brand campaign exclusivity windows</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-[#0364FF] shrink-0" />
                        <span>Sub-partner account management seats</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-[#0364FF] shrink-0" />
                        <span>Dedicated Operations liaison</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-8 pt-5 border-t border-slate-100">
                    <Link
                      href="/partner"
                      className="w-full py-3 rounded-full bg-slate-100 hover:bg-[#0364FF] text-neutral-900 hover:text-white text-xs sm:text-sm font-semibold tracking-tight transition-all duration-200 flex items-center justify-center gap-2 group shadow-xs"
                    >
                      <span>Inquire with Operations</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
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

"use client";

import Link from "next/link";
import { ArrowRight, Check, Users, UserPlus, ShieldAlert, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import WordReveal from "@/components/ui/WordReveal";
import UiverseHeroButton from "@/components/ui/UiverseHeroButton";

export default function DualPathSection() {
  return (
    <section className="relative w-full bg-[#fbfbfd] py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden border-t border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto">
        {/* ─── Section Header ─────────────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/90 text-xs sm:text-sm font-medium text-slate-700 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0364FF]" />
            <span>Two Ways Onto The Platform</span>
          </div>

          <WordReveal
            as="h2"
            delay={0.15}
            stagger={0.05}
            className="text-3xl sm:text-4xl md:text-5xl font-normal text-neutral-900 tracking-[-0.025em] leading-[1.18]"
            text="Market supply or your existing network"
          />

          <WordReveal
            as="p"
            delay={0.35}
            stagger={0.03}
            className="mt-4 text-base sm:text-lg text-neutral-500 font-normal leading-relaxed"
            text="Whether you need pre-vetted growth partners discovered for you, or want to migrate your entire existing affiliate roster onto verified tracking and automated escrow rails."
          />
        </div>

        {/* ─── Side-by-Side Dual Path Cards (Wireframe §05 Region 3) ───────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* ─── Path 1: Curated Market Supply (PRD §10 & §11) ─────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group rounded-[28px] sm:rounded-[32px] bg-white border border-slate-200/90 hover:border-blue-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-6 sm:p-9 md:p-10 flex flex-col justify-between transition-colors duration-200"
          >
            <div>
              {/* Card Header & Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 group-hover:bg-blue-50/60 group-hover:border-blue-200 flex items-center justify-center text-neutral-800 group-hover:text-[#0364FF] transition-all duration-200">
                  <Users className="w-6 h-6" />
                </div>
                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-neutral-800 uppercase px-3 py-1 rounded-full bg-slate-100 border border-slate-200">
                  CURATED MATCHING
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-xl sm:text-2xl font-normal text-neutral-900 tracking-tight">
                Supplied Partners
              </h3>
              <p className="text-xs sm:text-sm font-medium text-slate-400 mt-1">
                Audited external talent matched to your exact campaign brief
              </p>

              {/* Description */}
              <p className="mt-4 text-sm text-neutral-600 font-normal leading-relaxed">
                Gain access to our invite-only directory of screened growth partners across prop trading, forex, and crypto. Every partner is audited across 3 dimensions before entering candidate matching.
              </p>

              {/* Architecture Details */}
              <div className="mt-6 pt-5 border-t border-slate-100 space-y-3">
                <div className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-blue-50 border border-blue-200/60 flex items-center justify-center text-[#0364FF] shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-neutral-700">
                    <strong>Triple-vetted:</strong> Authenticity, compliance history, and conversion audit (VET-02)
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-blue-50 border border-blue-200/60 flex items-center justify-center text-[#0364FF] shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-neutral-700">
                    <strong>Algorithmic fit:</strong> Multi-factor scoring with mandatory human operations approval
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-blue-50 border border-blue-200/60 flex items-center justify-center text-[#0364FF] shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-neutral-700">
                    <strong>Non-circumvention:</strong> Enforced legal covenants protecting introduced relationships (CON-05)
                  </span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex justify-center">
              <UiverseHeroButton
                href="/sign-up"
                text="Submit a Campaign Brief"
                className="w-full justify-between"
                size="sm"
              />
            </div>
          </motion.div>

          {/* ─── Path 2: Bring Your Own Network (PRD PRF-07 & VET-09) ──────── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group rounded-[28px] sm:rounded-[32px] bg-white border border-slate-200/90 hover:border-blue-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-6 sm:p-9 md:p-10 flex flex-col justify-between transition-colors duration-200"
          >
            <div>
              {/* Card Header & Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 group-hover:bg-blue-50/60 group-hover:border-blue-200 flex items-center justify-center text-neutral-800 group-hover:text-[#0364FF] transition-all duration-200">
                  <UserPlus className="w-6 h-6" />
                </div>
                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-neutral-800 uppercase px-3 py-1 rounded-full bg-slate-100 border border-slate-200">
                  BYO NETWORK RAILS
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-xl sm:text-2xl font-normal text-neutral-900 tracking-tight">
                Bring Your Own (BYO)
              </h3>
              <p className="text-xs sm:text-sm font-medium text-slate-400 mt-1">
                Migrate your existing affiliates onto auditable infrastructure
              </p>

              {/* Description */}
              <p className="mt-4 text-sm text-neutral-600 font-normal leading-relaxed">
                Invite your existing affiliate roster via direct email or bulk CSV upload. Your partners pass streamlined verification and link straight to your account with zero non-circumvention terms.
              </p>

              {/* Architecture Details */}
              <div className="mt-6 pt-5 border-t border-slate-100 space-y-3">
                <div className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-blue-50 border border-blue-200/60 flex items-center justify-center text-[#0364FF] shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-neutral-700">
                    <strong>Direct onboarding:</strong> Single email or CSV roster invite with custom deal terms (PRF-07)
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-blue-50 border border-blue-200/60 flex items-center justify-center text-[#0364FF] shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-neutral-700">
                    <strong>Streamlined verification:</strong> Fast identity and compliance check without matching queue (VET-09)
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-blue-50 border border-blue-200/60 flex items-center justify-center text-[#0364FF] shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-neutral-700">
                    <strong>Zero circumvention clauses:</strong> Your relationships remain entirely yours by construction (CON-05)
                  </span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex justify-center">
              <UiverseHeroButton
                href="/sign-up"
                text="Onboard Your Roster"
                variant="surface"
                className="w-full justify-between"
                size="sm"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

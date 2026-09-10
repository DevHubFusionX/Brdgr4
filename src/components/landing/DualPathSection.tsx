"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ArrowFlight from "@/components/ui/ArrowFlight";
import WordReveal from "@/components/ui/WordReveal";

export default function DualPathSection() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    setIsMobile(
      window.innerWidth < 768 ||
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  return (
    <section className="relative w-full bg-[#fbfbfd] py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden border-t border-b border-slate-200/60">
      {/* ─── Ambient Subtle Soft Blue Light ─────────────────────────────────── */}
      <div
        className="absolute -bottom-28 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] lg:w-[1200px] h-[300px] sm:h-[360px] rounded-full bg-gradient-to-t from-[#6FA6FF]/15 via-[#0364FF]/8 to-transparent blur-[80px] sm:blur-[130px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-16 left-1/4 w-[300px] sm:w-[420px] h-[200px] sm:h-[280px] rounded-full bg-[#6FA6FF]/10 blur-[60px] sm:blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* ─── Section Header (Centered) ─────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <WordReveal
            as="h2"
            delay={0.1}
            stagger={0.035}
            className="text-2xl sm:text-4xl md:text-5xl font-normal text-slate-900 tracking-[-0.025em] leading-[1.18]"
            text="BRDGR Sourced or your existing partners."
          />

          <WordReveal
            as="p"
            delay={0.22}
            stagger={0.02}
            className="mt-3 sm:mt-4 text-xs sm:text-base md:text-lg text-slate-500 font-normal leading-relaxed max-w-2xl mx-auto"
            text="Get matched with the right partners through BRDGR, or bring your existing partners and let us manage everything in one unified place."
          />
        </div>

        {/* ─── 2-Column Side-by-Side Cards (Clean, Minimal, Premium) ──────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 items-stretch">
          {/* ─── Column 1: BRDGR Sourced ────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 14 : 45, scale: isMobile ? 1 : 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: isMobile ? "80px 0px 0px 0px" : "-50px" }}
            transition={{ duration: isMobile ? 0.4 : 0.65, ease: [0.22, 1, 0.36, 1], delay: isMobile ? 0 : 0.06 }}
            whileHover={!isMobile ? { y: -6, transition: { duration: 0.25 } } : undefined}
            className="group relative rounded-[24px] sm:rounded-[32px] bg-white card-blue-pop card-specular-rim p-5 sm:p-9 md:p-10 flex flex-col justify-between overflow-hidden"
          >
            {/* Specular Crystal Rim Highlight along top */}
            <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent opacity-95 pointer-events-none z-20" />

            {/* Soft Ambient Radial Highlight Wash in Top-Right */}
            <div
              className="absolute top-0 right-0 w-60 h-60 bg-[radial-gradient(ellipse_at_top_right,rgba(147,197,253,0.32)_0%,rgba(191,219,254,0.14)_40%,transparent_70%)] pointer-events-none -z-0 group-hover:scale-115 transition-transform duration-500"
              aria-hidden="true"
            />

            <div className="relative z-10">
              {/* Clean Kicker */}
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.14 }}
                className="text-xs font-semibold tracking-wider uppercase text-[#0364FF] block"
              >
                BRDGR Sourced
              </motion.span>

              {/* Title with Slide Up */}
              <motion.h3
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="mt-2.5 text-2xl sm:text-[28px] font-semibold text-slate-900 tracking-tight leading-snug"
              >
                We find the right partners for you
              </motion.h3>

              {/* Description with Slide Up */}
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
                className="mt-3 text-sm sm:text-[15px] text-slate-600 font-normal leading-relaxed"
              >
                Share what you need and BRDGR proposes vetted partners that match your brief. Once approved, we handle the agreement, tracking, and payouts.
              </motion.p>

              {/* Clean Specs Row with Staggered Slide In */}
              <div className="my-8 space-y-3.5 border-t border-b border-slate-100 py-6">
                {[
                  { label: "Partner Vetting", desc: "Audited compliance & conversion history" },
                  { label: "Partner Matching", desc: "Tailored to your vertical and target audience" },
                  { label: "Settlement", desc: "Audited institutional escrow with on-time payouts" },
                ].map((spec, idx) => (
                  <motion.div
                    key={spec.label}
                    initial={{ opacity: 0, y: 12, x: -6 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: 0.32 + idx * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 text-left"
                  >
                    <span className="text-xs sm:text-sm font-semibold text-slate-900">{spec.label}</span>
                    <span className="text-xs sm:text-sm text-slate-500">{spec.desc}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Action Button with Slide & Scale Animation */}
            <motion.div
              initial={{ opacity: 0, y: 14, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.54, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="relative z-10 mt-auto pt-2 flex items-center justify-start"
            >
              <Link
                href="/sign-up"
                className="btn-3d-primary group inline-flex items-center justify-center gap-2 w-fit py-2.5 px-5 text-xs sm:text-sm font-semibold text-white cursor-pointer"
              >
                <span>Submit Campaign Brief</span>
                <ArrowFlight sizeClass="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          </motion.div>

          {/* ─── Column 2: Bring Your Own [BYO] ─────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 14 : 45, scale: isMobile ? 1 : 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: isMobile ? "80px 0px 0px 0px" : "-50px" }}
            transition={{ duration: isMobile ? 0.4 : 0.65, ease: [0.22, 1, 0.36, 1], delay: isMobile ? 0.05 : 0.16 }}
            whileHover={!isMobile ? { y: -6, transition: { duration: 0.25 } } : undefined}
            className="group relative rounded-[24px] sm:rounded-[32px] bg-white card-blue-pop card-specular-rim p-5 sm:p-9 md:p-10 flex flex-col justify-between overflow-hidden"
          >
            {/* Specular Crystal Rim Highlight along top */}
            <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent opacity-95 pointer-events-none z-20" />

            {/* Soft Ambient Radial Highlight Wash in Top-Right */}
            <div
              className="absolute top-0 right-0 w-60 h-60 bg-[radial-gradient(ellipse_at_top_right,rgba(147,197,253,0.32)_0%,rgba(191,219,254,0.14)_40%,transparent_70%)] pointer-events-none -z-0 group-hover:scale-115 transition-transform duration-500"
              aria-hidden="true"
            />

            <div className="relative z-10">
              {/* Clean Kicker */}
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.22 }}
                className="text-xs font-semibold tracking-wider uppercase text-slate-500 block"
              >
                Bring Your Own
              </motion.span>

              {/* Title with Slide Up */}
              <motion.h3
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="mt-2.5 text-2xl sm:text-[28px] font-semibold text-slate-900 tracking-tight leading-snug"
              >
                Bring your existing partners
              </motion.h3>

              {/* Description with Slide Up */}
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
                className="mt-3 text-sm sm:text-[15px] text-slate-600 font-normal leading-relaxed"
              >
                Invite your partners individually or in bulk. We verify them, put the right agreements in place, and manage the entire programme through BRDGR.
              </motion.p>

              {/* Clean Specs Row with Staggered Slide In */}
              <div className="my-8 space-y-3.5 border-t border-b border-slate-100 py-6">
                {[
                  { label: "Bulk Ingestion", desc: "One-click CSV upload and fast-track KYC" },
                  { label: "Legal Contracts", desc: "Bilateral SLAs and non-circumvention locks" },
                  { label: "Protected Roster", desc: "Your network remains 100% private to you" },
                ].map((spec, idx) => (
                  <motion.div
                    key={spec.label}
                    initial={{ opacity: 0, y: 12, x: -6 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: 0.4 + idx * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 text-left"
                  >
                    <span className="text-xs sm:text-sm font-semibold text-slate-900">{spec.label}</span>
                    <span className="text-xs sm:text-sm text-slate-500">{spec.desc}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Action Button with Slide & Scale Animation */}
            <motion.div
              initial={{ opacity: 0, y: 14, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.62, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="relative z-10 mt-auto pt-2 flex items-center justify-start"
            >
              <Link
                href="/sign-up"
                className="btn-3d-dark group inline-flex items-center justify-center gap-2 w-fit py-2.5 px-5 text-xs sm:text-sm font-semibold text-white cursor-pointer"
              >
                <span>Onboard Your Partner</span>
                <ArrowFlight sizeClass="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

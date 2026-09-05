"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import WordReveal from "@/components/ui/WordReveal";
import { useLoading } from "@/context/LoadingContext";
import PartnerSearchCard from "./hero/PartnerSearchCard";
import UiverseHeroButton from "@/components/ui/UiverseHeroButton";

export default function HeroSection() {
  const { isHeroReady } = useLoading();

  return (
    <section className="relative w-full min-h-[85vh] lg:min-h-[90vh] bg-[#f6f8fb] pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 px-3 sm:px-6 lg:px-8 font-sans flex flex-col justify-center items-center">
      {/* ─── Hero Frame / Rounded Island Card ──────── */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.985 }}
        animate={isHeroReady ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 24, scale: 0.985 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-5xl lg:max-w-6xl mx-auto rounded-[32px] sm:rounded-[44px] md:rounded-[52px] bg-white border border-slate-200/80 shadow-xl shadow-slate-200/40 overflow-hidden my-auto"
      >
        {/* Subtle ambient light gradient at the top of the card */}
        <div 
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] sm:w-[850px] h-[350px] rounded-full bg-gradient-to-b from-blue-50/80 via-slate-50/50 to-transparent blur-3xl pointer-events-none" 
          aria-hidden="true" 
        />

        <div className="relative z-10 px-6 sm:px-12 md:px-16 py-14 sm:py-18 md:py-20 lg:py-24 text-center flex flex-col items-center">
          {/* ─── Tagline Badge ──────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isHeroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100/90 border border-slate-200/80 text-xs sm:text-sm font-medium text-slate-600 mb-5 sm:mb-7"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#0364FF]" />
            <span>The bridge to better partnerships</span>
          </motion.div>

          {/* ─── Headline: Brand Essence with WordReveal ────────────────────── */}
          <WordReveal
            as="h1"
            trigger={isHeroReady}
            delay={0.2}
            stagger={0.06}
            initialOpacity={0.15}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-[64px] font-normal text-neutral-900 tracking-[-0.025em] leading-[1.14] max-w-3xl sm:max-w-4xl"
            text="Partnership infrastructure for measurable growth"
          />

          {/* ─── Subtitle: Brand Promise & Purpose with WordReveal ──────────── */}
          <WordReveal
            as="p"
            trigger={isHeroReady}
            delay={0.5}
            stagger={0.035}
            initialOpacity={0.15}
            className="mt-5 sm:mt-6 md:mt-7 max-w-xl sm:max-w-2xl text-base sm:text-lg md:text-[19px] text-neutral-600 font-normal leading-relaxed"
            text="The right partnership. Properly managed. Reliably paid. Making high-performing partnerships easier to build and sustain."
          />

          {/* ─── Pill Action Buttons ────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={isHeroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ duration: 0.55, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 sm:mt-8 md:mt-9 flex flex-wrap items-center justify-center gap-3.5"
          >
            <UiverseHeroButton href="/sign-up" text="Request a demo" />

            <Link
              href="/sign-up"
              className="px-7 sm:px-8 py-3.5 rounded-full text-sm sm:text-base font-medium text-neutral-700 hover:text-[#0364FF] bg-white hover:bg-blue-50/50 border border-neutral-200/90 shadow-2xs hover:border-blue-200 transition-all duration-150 active:scale-[0.98] cursor-pointer"
            >
              Explore Solutions
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* ─── Interactive Partner Search Card ──────────────────────────────── */}
      <PartnerSearchCard />
    </section>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import WordReveal from "@/components/ui/WordReveal";
import { useLoading } from "@/context/LoadingContext";
import UiverseHeroButton from "@/components/ui/UiverseHeroButton";

export default function HeroSection() {
  const { isHeroReady } = useLoading();

  return (
    <section className="relative w-full min-h-[90vh] lg:min-h-[94vh] bg-[linear-gradient(180deg,#c8defc_0%,#d8e8fc_25%,#e5f0fe_55%,#edf5fe_80%,#f6f8fb_100%)] pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 px-4 sm:px-8 lg:px-12 font-sans flex flex-col justify-center items-center overflow-hidden">
      {/* ─── Ambient Sky Lighting ──────────────────────────── */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(147,197,253,0.5),transparent_70%)] pointer-events-none" 
        aria-hidden="true" 
      />

      {/* ─── Hero Frame / Large Rounded Island Card (Big & Spacious with Space Around) ── */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.985 }}
        animate={isHeroReady ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 24, scale: 0.985 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-5xl lg:max-w-6xl mx-auto rounded-[36px] sm:rounded-[48px] md:rounded-[56px] bg-white/95 backdrop-blur-2xl border border-white/90 shadow-[0_20px_70px_-15px_rgba(0,80,220,0.08)] overflow-hidden my-auto"
      >
        {/* ─── Top-Left: Soft Blue Gradient Wash ─────────────── */}
        <div
          className="absolute top-0 left-0 w-80 sm:w-[420px] h-80 sm:h-[420px] bg-[radial-gradient(ellipse_at_top_left,rgba(147,197,253,0.55)_0%,rgba(191,219,254,0.35)_40%,transparent_70%)] pointer-events-none"
          aria-hidden="true"
        />

        {/* ─── Top-Left: Crisp White Arc Cutting Through the Blue Gradient ─ */}
        <svg
          className="absolute top-0 left-0 w-[360px] sm:w-[500px] h-[260px] sm:h-[370px] pointer-events-none overflow-visible"
          viewBox="0 0 500 370"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Diffuse white halo */}
          <path
            d="M -20,210 C 80,180 180,120 340,10"
            stroke="#FFFFFF"
            strokeWidth="12"
            strokeOpacity="0.45"
            strokeLinecap="round"
            className="blur-[6px]"
          />
          {/* Razor-sharp white glass reflection arc */}
          <path
            d="M -20,210 C 80,180 180,120 340,10"
            stroke="url(#tl-white-arc)"
            strokeWidth="2.75"
            strokeLinecap="round"
          />
          {/* Subtle secondary glass refraction line */}
          <path
            d="M -10,250 C 90,210 190,150 330,45"
            stroke="url(#tl-white-arc-soft)"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="tl-white-arc" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
              <stop offset="25%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="70%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="tl-white-arc-soft" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
              <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.45" />
              <stop offset="80%" stopColor="#FFFFFF" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* ─── Bottom-Right: Soft Blue Gradient Wash ──────────── */}
        <div
          className="absolute bottom-0 right-0 w-80 sm:w-[420px] h-80 sm:h-[420px] bg-[radial-gradient(ellipse_at_bottom_right,rgba(147,197,253,0.55)_0%,rgba(191,219,254,0.35)_40%,transparent_70%)] pointer-events-none"
          aria-hidden="true"
        />

        {/* ─── Bottom-Right: Crisp White Arc Cutting Through the Blue Gradient ─ */}
        <svg
          className="absolute bottom-0 right-0 w-[360px] sm:w-[500px] h-[260px] sm:h-[370px] pointer-events-none overflow-visible"
          viewBox="0 0 500 370"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Diffuse white halo */}
          <path
            d="M 160,360 C 320,260 420,200 520,-10"
            stroke="#FFFFFF"
            strokeWidth="12"
            strokeOpacity="0.45"
            strokeLinecap="round"
            className="blur-[6px]"
          />
          {/* Razor-sharp white glass reflection arc */}
          <path
            d="M 160,360 C 320,260 420,200 520,-10"
            stroke="url(#br-white-arc)"
            strokeWidth="2.75"
            strokeLinecap="round"
          />
          {/* Subtle secondary glass refraction line */}
          <path
            d="M 170,390 C 325,290 420,230 510,25"
            stroke="url(#br-white-arc-soft)"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="br-white-arc" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
              <stop offset="30%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="75%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="br-white-arc-soft" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
              <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.45" />
              <stop offset="80%" stopColor="#FFFFFF" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* ─── Hero Content (Spacious & Balanced) ─────────────── */}
        <div className="relative z-10 px-6 sm:px-12 md:px-16 py-14 sm:py-18 md:py-20 lg:py-24 text-center flex flex-col items-center">
          {/* ─── Headline (Strictly 2 Lines with Reduced Font Size) ─── */}
          <h1 className="text-2xl sm:text-4xl md:text-[44px] lg:text-[50px] xl:text-[52px] font-normal text-neutral-900 tracking-[-0.03em] leading-[1.18] max-w-4xl text-center">
            <span className="block">
              <WordReveal
                as="span"
                trigger={isHeroReady}
                delay={0.15}
                stagger={0.04}
                initialOpacity={0.15}
                text="One place to find growth partners,"
              />
            </span>
            <span className="block mt-1 sm:mt-1.5">
              <WordReveal
                as="span"
                trigger={isHeroReady}
                delay={0.4}
                stagger={0.04}
                initialOpacity={0.15}
                text="work together and grow revenue."
              />
            </span>
          </h1>

          {/* ─── Subtitle ──────────────────────────────────────── */}
          <WordReveal
            as="p"
            trigger={isHeroReady}
            delay={0.65}
            stagger={0.025}
            initialOpacity={0.15}
            className="mt-5 sm:mt-6 max-w-xl sm:max-w-2xl text-sm sm:text-base md:text-[17px] text-neutral-500 font-normal leading-relaxed text-center"
            text="Agreements. Tracking. Payments. Payouts. We handle the partnership operations for you."
          />

          {/* ─── Pill Action Buttons ──────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={isHeroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ duration: 0.55, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <UiverseHeroButton
              href="/sign-up"
              text="Request a demo"
              iconBorderClass="border-0 shadow-none"
              className="!bg-[#0062FF] hover:!bg-[#0055e0] !shadow-lg !shadow-[#0062FF]/25 font-medium !h-[52px] !pl-7 !pr-2 !rounded-full"
            />

            <Link
              href="/sign-up"
              className="h-[52px] px-8 rounded-full text-sm sm:text-base font-medium text-neutral-800 hover:text-neutral-900 bg-white hover:bg-slate-50/90 border border-slate-200/90 shadow-2xs hover:shadow-xs transition-all duration-150 active:scale-[0.98] cursor-pointer inline-flex items-center justify-center"
            >
              Explore Solutions
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

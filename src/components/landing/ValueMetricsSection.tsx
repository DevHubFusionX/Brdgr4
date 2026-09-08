"use client";

import React from "react";
import Link from "next/link";
import { Eye, TrendingUp, ShieldCheck, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import WordReveal from "@/components/ui/WordReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

interface MetricCard {
  id: string;
  stat: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  renderSvgLines: () => React.ReactNode;
}

const VALUE_METRICS: MetricCard[] = [
  {
    id: "attribution",
    stat: "99.9%",
    title: "Tracking accuracy",
    description:
      "Capture every qualified sale without ad-blocker leakage or bot fraud.",
    icon: Eye,
    // SVG Design 1: Precision radar / parabolic focus arcs
    renderSvgLines: () => (
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40 group-hover:opacity-70 transition-opacity duration-300"
        viewBox="0 0 400 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M 260,-20 A 150,150 0 0,0 430,150"
          stroke="url(#attr-grad-1)"
          strokeWidth="1.75"
          strokeDasharray="4 3"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M 200,-20 A 220,220 0 0,0 430,210"
          stroke="url(#attr-grad-1)"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M 140,-20 A 290,290 0 0,0 430,270"
          stroke="url(#attr-grad-1)"
          strokeWidth="1.75"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M 80,-20 A 360,360 0 0,0 430,330"
          stroke="url(#attr-grad-1)"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M 20,-20 A 430,430 0 0,0 430,390"
          stroke="url(#attr-grad-1)"
          strokeWidth="1.25"
          strokeDasharray="6 4"
          vectorEffect="non-scaling-stroke"
        />
        <defs>
          <linearGradient id="attr-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0364FF" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#6FA6FF" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#0364FF" stopOpacity="0.05" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: "volume",
    stat: "+$14.8M",
    title: "Escrow volume paid",
    description:
      "Commissions are safely held in escrow and paid out on an exact ledger.",
    icon: TrendingUp,
    // SVG Design 2: Financial momentum sine curves undulating upward
    renderSvgLines: () => (
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40 group-hover:opacity-70 transition-opacity duration-300"
        viewBox="0 0 400 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M -30,230 Q 90,130 200,200 T 430,80"
          stroke="url(#vol-grad-1)"
          strokeWidth="1.75"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M -30,265 Q 90,165 200,235 T 430,115"
          stroke="url(#vol-grad-1)"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M -30,300 Q 90,200 200,270 T 430,150"
          stroke="url(#vol-grad-1)"
          strokeWidth="1.75"
          strokeDasharray="5 3"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M -30,185 Q 110,75 220,165 T 430,45"
          stroke="url(#vol-grad-1)"
          strokeWidth="1.25"
          vectorEffect="non-scaling-stroke"
        />
        <defs>
          <linearGradient id="vol-grad-1" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0364FF" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#6FA6FF" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#0364FF" stopOpacity="0.05" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: "compliance",
    stat: "100%",
    title: "Protected contracts",
    description:
      "Digital agreements lock clear terms and protect direct partner relationships.",
    icon: ShieldCheck,
    // SVG Design 3: Interlocking protective curved shield geometry
    renderSvgLines: () => (
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40 group-hover:opacity-70 transition-opacity duration-300"
        viewBox="0 0 400 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M -40,160 C 60,30 260,30 360,160 C 260,290 60,290 -40,160 Z"
          stroke="url(#comp-grad-1)"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M -10,160 C 70,60 230,60 310,160 C 230,260 70,260 -10,160 Z"
          stroke="url(#comp-grad-1)"
          strokeWidth="1.75"
          strokeDasharray="4 4"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M 20,160 C 85,90 200,90 265,160 C 200,230 85,230 20,160 Z"
          stroke="url(#comp-grad-1)"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M 50,160 C 100,115 170,115 220,160 C 170,205 100,205 50,160 Z"
          stroke="url(#comp-grad-1)"
          strokeWidth="1.25"
          vectorEffect="non-scaling-stroke"
        />
        <defs>
          <linearGradient id="comp-grad-1" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0364FF" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#6FA6FF" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#0364FF" stopOpacity="0.05" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: "time-saved",
    stat: "+480 hrs",
    title: "Admin time saved",
    description:
      "Eliminate manual partner checks, custom contracts, and spreadsheet disputes.",
    icon: Clock,
    // SVG Design 4: Sweeping orbital loops and speed curves
    renderSvgLines: () => (
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40 group-hover:opacity-70 transition-opacity duration-300"
        viewBox="0 0 400 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M -30,60 C 80,10 330,130 430,230"
          stroke="url(#time-grad-1)"
          strokeWidth="1.75"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M -30,105 C 80,55 330,175 430,275"
          stroke="url(#time-grad-1)"
          strokeWidth="1.5"
          strokeDasharray="6 3"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M 190,-40 C 310,50 340,210 210,310 C 80,410 -30,250 50,130"
          stroke="url(#time-grad-1)"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M 230,0 C 320,70 330,180 230,260"
          stroke="url(#time-grad-1)"
          strokeWidth="1.75"
          vectorEffect="non-scaling-stroke"
        />
        <defs>
          <linearGradient id="time-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0364FF" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#6FA6FF" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#0364FF" stopOpacity="0.05" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: "default-rate",
    stat: "0%",
    title: "Missed payouts",
    description:
      "Guaranteed on-time USD payouts by the 5th of every month.",
    icon: CheckCircle2,
    // SVG Design 5: Calm, parallel harmonic horizon waves representing stability & zero default
    renderSvgLines: () => (
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40 group-hover:opacity-70 transition-opacity duration-300"
        viewBox="0 0 400 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M -30,190 C 70,150 170,230 280,180 C 340,150 390,190 430,180"
          stroke="url(#def-grad-1)"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M -30,225 C 70,185 170,265 280,215 C 340,185 390,225 430,215"
          stroke="url(#def-grad-1)"
          strokeWidth="1.75"
          strokeDasharray="5 4"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M -30,260 C 70,220 170,300 280,250 C 340,220 390,260 430,250"
          stroke="url(#def-grad-1)"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M -30,150 C 80,110 190,190 300,140 C 360,110 400,150 430,140"
          stroke="url(#def-grad-1)"
          strokeWidth="1.25"
          vectorEffect="non-scaling-stroke"
        />
        <defs>
          <linearGradient id="def-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0364FF" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#6FA6FF" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#0364FF" stopOpacity="0.05" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
];

export default function ValueMetricsSection() {
  return (
    <section className="relative w-full bg-[linear-gradient(180deg,#f6f8fb_0%,#eaf3ff_18%,#dbeafe_50%,#e8f2fe_82%,#f8fafc_100%)] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      {/* Light blue ambient fade & atmospheric glows */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(111,166,255,0.28),rgba(3,100,255,0.08)_50%,transparent_80%)] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[650px] bg-gradient-to-r from-[#6FA6FF]/25 via-[#93C5FD]/20 to-[#0364FF]/20 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-full max-w-5xl h-48 bg-gradient-to-b from-[#6FA6FF]/15 to-transparent blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* ─── 3-Column x 2-Row Card Grid ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ staggerChildren: 0.08 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          {/* Card 1: Lead Action Card (White card with crisp brand accents) ─── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group relative flex flex-col justify-between p-8 sm:p-10 rounded-[28px] sm:rounded-[32px] bg-white border border-slate-200/90 hover:border-[#0364FF]/40 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden"
          >
            {/* Ambient Corner Flare */}
            <div
              className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-blue-400/10 blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-500"
              aria-hidden="true"
            />

            {/* SVG Design 6: Flowing ribbon curves for Lead Card */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none opacity-40 group-hover:opacity-70 transition-opacity duration-300"
              viewBox="0 0 400 320"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M -20,270 C 110,150 210,310 430,170"
                stroke="url(#lead-grad-1)"
                strokeWidth="1.75"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M -20,305 C 120,185 230,335 430,205"
                stroke="url(#lead-grad-1)"
                strokeWidth="1.5"
                strokeDasharray="5 3"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M 50,20 C 180,110 270,-20 430,70"
                stroke="url(#lead-grad-1)"
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M 120,-10 C 220,70 310,10 430,40"
                stroke="url(#lead-grad-1)"
                strokeWidth="1.25"
                vectorEffect="non-scaling-stroke"
              />
              <defs>
                <linearGradient id="lead-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0364FF" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#6FA6FF" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#0364FF" stopOpacity="0.05" />
                </linearGradient>
              </defs>
            </svg>

            {/* Lead Content */}
            <div className="relative z-10">
              <WordReveal
                as="h3"
                delay={0.1}
                stagger={0.04}
                className="text-2xl sm:text-3xl font-normal text-neutral-900 tracking-[-0.025em] leading-[1.2]"
                text="Proven results for brokers and partners"
              />
              <p className="mt-4 sm:mt-5 text-sm sm:text-base text-neutral-500 font-normal leading-relaxed">
                Run, track, and pay your partnerships on verified, secure rails.
              </p>
            </div>

            {/* High-Contrast Action CTA */}
            <div className="relative z-10 mt-8 pt-2">
              <Link
                href="/sign-up"
                className="btn-3d-primary inline-flex items-center justify-center gap-2.5 px-6 py-3 text-sm font-semibold transition-all duration-200"
              >
                <span>Talk to our team</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>
            </div>
          </motion.div>

          {/* Cards 2 to 6: Proof & Metric Cards with White Backgrounds ─── */}
          {VALUE_METRICS.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative flex flex-col justify-between p-8 sm:p-10 rounded-[28px] sm:rounded-[32px] bg-white border border-slate-200/90 hover:border-[#0364FF]/40 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden"
              >
                {/* Dynamic Corner Ambient Glow */}
                <div
                  className="absolute -top-14 -right-14 w-48 h-48 rounded-full bg-blue-500/5 blur-2xl pointer-events-none group-hover:scale-110 transition-transform duration-500"
                  aria-hidden="true"
                />

                {/* Individualized Background SVG Curved Lines */}
                {item.renderSvgLines()}

                {/* Icon Badge */}
                <div className="relative z-10 w-11 h-11 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0364FF] shadow-2xs group-hover:bg-[#0364FF] group-hover:text-white group-hover:border-[#0364FF] transition-all duration-200">
                  <Icon className="w-5 h-5 transition-transform group-hover:scale-105" />
                </div>

                {/* Stat, Title & Description */}
                <div className="relative z-10 mt-10 sm:mt-12">
                  <div className="text-4xl sm:text-[42px] font-normal tracking-[-0.03em] text-neutral-900 leading-none">
                    <AnimatedCounter value={item.stat} />
                  </div>
                  <div className="text-base font-semibold text-neutral-900 mt-2.5">
                    {item.title}
                  </div>
                  <p className="text-sm text-neutral-500 font-normal leading-relaxed mt-2">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}


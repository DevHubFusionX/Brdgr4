"use client";

import React from "react";
import Link from "next/link";
import { Target, TrendingUp, Shield, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

interface MetricCardData {
  id: string;
  stat: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  colClass?: string;
}

const METRICS: MetricCardData[] = [
  {
    id: "accuracy",
    stat: "99.9%",
    title: "Tracking accuracy",
    description: "Capture every qualified sale without ad-blocker leakage or bot fraud.",
    icon: Target,
    colClass: "lg:col-start-2 lg:row-start-1",
  },
  {
    id: "volume",
    stat: "+ $14.8M",
    title: "Escrow volume paid",
    description: "Commissions are safely held in escrow and paid out on an exact ledger.",
    icon: TrendingUp,
    colClass: "lg:col-start-3 lg:row-start-1",
  },
  {
    id: "contracts",
    stat: "100%",
    title: "Protected contracts",
    description: "Digital agreements lock clear terms and protect direct partner relationships.",
    icon: Shield,
    colClass: "lg:col-start-1 lg:row-start-2",
  },
  {
    id: "time",
    stat: "+480 hrs",
    title: "Admin time saved",
    description: "Eliminate manual partner checks, custom contracts, and spreadsheet disputes.",
    icon: Clock,
    colClass: "lg:col-start-2 lg:row-start-2",
  },
  {
    id: "payouts",
    stat: "0%",
    title: "Missed payouts",
    description: "Guaranteed on-time USD payouts by the 5th of every month.",
    icon: CheckCircle2,
    colClass: "lg:col-start-3 lg:row-start-2",
  },
];

function MetricCardItem({ item, index }: { item: MetricCardData; index: number }) {
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`group relative flex flex-col justify-between p-5 sm:p-7 lg:p-8 rounded-[22px] sm:rounded-[32px] card-blue-pop card-specular-rim min-h-[220px] sm:min-h-[260px] overflow-hidden ${item.colClass ?? ""}`}
    >
      {/* Subtle Top-Right Ambient Arc from Reference Image */}
      <div className="absolute top-0 right-0 w-36 h-36 sm:w-52 sm:h-52 pointer-events-none overflow-hidden select-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Soft ambient glow in top right */}
          <circle cx="185" cy="15" r="95" fill="url(#card-glow)" />
          {/* Concentric curved translucent arcs */}
          <path
            d="M 55,0 C 85,60 135,115 200,145"
            stroke="#93C5FD"
            strokeWidth="1.5"
            strokeOpacity="0.4"
            strokeLinecap="round"
          />
          <path
            d="M 90,0 C 115,50 155,95 200,120"
            stroke="#60A5FA"
            strokeWidth="1.25"
            strokeOpacity="0.25"
            strokeLinecap="round"
          />
          <path
            d="M 25,0 C 65,80 115,135 200,170"
            stroke="#0364FF"
            strokeWidth="1"
            strokeOpacity="0.15"
            strokeLinecap="round"
          />
          <defs>
            <radialGradient id="card-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.35" />
              <stop offset="60%" stopColor="#DBEAFE" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#EFF6FF" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Top: Squircle Icon Badge */}
      <div className="relative z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-[14px] sm:rounded-[16px] bg-[#eff6ff] border border-blue-100/70 text-[#0364FF] flex items-center justify-center mb-4 sm:mb-6 shadow-xs group-hover:scale-105 transition-transform duration-200">
        <Icon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
      </div>

      {/* Stat, Title & Description */}
      <div className="relative z-10">
        <div className="text-[28px] sm:text-[36px] lg:text-[40px] font-bold tracking-tight text-[#0364FF] leading-none mb-2 sm:mb-3">
          <AnimatedCounter value={item.stat} />
        </div>
        <h3 className="text-[15px] sm:text-[17px] font-bold text-slate-900 leading-snug mb-1 sm:mb-2">
          {item.title}
        </h3>
        <p className="text-xs sm:text-[13.5px] text-slate-500 font-normal leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function ValueMetricsSection() {
  return (
    <section className="relative w-full bg-[linear-gradient(180deg,#f3f8fe_0%,#ebf4fd_35%,#f2f7fe_75%,#f8fbff_100%)] py-14 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      {/* Background ambient curved wave lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none overflow-visible select-none"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M -100,800 C 300,750 800,500 1550,650"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          strokeOpacity="0.75"
        />
        <path
          d="M -50,850 C 350,780 850,530 1600,700"
          stroke="#93C5FD"
          strokeWidth="1.5"
          strokeOpacity="0.4"
        />
        <path
          d="M 100,200 C 600,100 1100,350 1500,150"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeOpacity="0.6"
        />
      </svg>

      {/* Subtle radial ambient atmosphere */}
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-br from-blue-200/25 via-sky-100/35 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -top-24 left-1/4 w-[500px] h-[350px] bg-blue-100/30 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* ─── 3-Column x 2-Row Asymmetric Layout (Responsive Grid) ─────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-stretch">
          {/* Column 1 Row 1: Header / Info Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-2 lg:col-span-1 lg:col-start-1 lg:row-start-1 flex flex-col justify-between py-1 sm:py-3 lg:pr-4"
          >
            <div>
              {/* Main Headline */}
              <h2 className="text-[26px] sm:text-3xl lg:text-[42px] font-bold text-slate-900 tracking-[-0.03em] leading-[1.16] sm:leading-[1.14] mb-3 sm:mb-4">
                Real impact for<br className="hidden sm:inline" /> brokers and<br className="hidden sm:inline" /> partners.
              </h2>

              {/* Subtitle */}
              <p className="text-sm sm:text-[15.5px] text-slate-500 font-normal leading-relaxed mb-5 sm:mb-6 max-w-sm">
                Run, track, and pay your partnerships on verified, secure rails.
              </p>

              {/* Primary CTA Button */}
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 rounded-full bg-[#0364FF] hover:bg-[#0055e0] text-white font-semibold text-sm sm:text-[14.5px] shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer w-full sm:w-fit mb-5 sm:mb-7"
              >
                <span>Talk to our team</span>
                <ArrowRight className="w-4 h-4 stroke-[2.2]" />
              </Link>
            </div>

            {/* Bullet Value List */}
            <div className="space-y-2.5 sm:space-y-3 pt-1 pb-4 sm:pb-0">
              {[
                "Trusted by industry leaders",
                "Built for scale",
                "Real, measurable results",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-600"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#0364FF] shrink-0 stroke-[2.2]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Cards 1 to 5 */}
          {METRICS.map((item, index) => (
            <MetricCardItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

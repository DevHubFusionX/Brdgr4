"use client";

import React from "react";
import Link from "next/link";
import { Target, Shield, Clock, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import ArrowFlight from "@/components/ui/ArrowFlight";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import WordReveal from "@/components/ui/WordReveal";

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
    id: "time",
    stat: "100%",
    title: "Admin time saved",
    description: "Eliminate manual partner checks, custom contracts, and spreadsheet disputes.",
    icon: Clock,
    colClass: "lg:col-start-3 lg:row-start-1",
  },
  {
    id: "contracts",
    stat: "100%",
    title: "Structured partnerships",
    description: "Digital agreements lock clear terms and protect direct partner relationships.",
    icon: Shield,
    colClass: "lg:col-start-2 lg:row-start-2",
  },
  {
    id: "payouts",
    stat: "0%",
    title: "Missed payouts",
    description: "Guaranteed on-time payout.",
    icon: CheckCircle2,
    colClass: "lg:col-start-3 lg:row-start-2",
  },
];

function MetricCardItem({ item, index }: { item: MetricCardData; index: number }) {
  const Icon = item.icon;
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    setIsMobile(
      window.innerWidth < 768 ||
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: isMobile ? 12 : 38, scale: 1 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: isMobile ? "60px 0px 0px 0px" : "0px" }}
      transition={{ duration: isMobile ? 0.35 : 0.55, delay: isMobile ? 0.04 * index : 0.12 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={!isMobile ? { y: -6, transition: { duration: 0.2 } } : undefined}
      className={`group relative flex flex-col justify-between p-4.5 sm:p-7 lg:p-8 rounded-[20px] sm:rounded-[32px] card-blue-pop card-specular-rim min-h-[200px] sm:min-h-[260px] overflow-hidden ${item.colClass ?? ""}`}
    >
      {/* Specular Beveled Crystal Highlight along the top rim */}
      <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent opacity-95 pointer-events-none z-20" />

      {/* Soft Blue Gradient Wash in Top-Right like Hero Card */}
      <div
        className="absolute top-0 right-0 w-32 h-32 sm:w-56 sm:h-56 bg-[radial-gradient(ellipse_at_top_right,rgba(147,197,253,0.35)_0%,rgba(191,219,254,0.18)_40%,transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle Top-Right Ambient Arc */}
      <div className="absolute top-0 right-0 w-36 h-36 sm:w-52 sm:h-52 pointer-events-none overflow-hidden select-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Soft ambient glow in top right */}
          <circle cx="185" cy="15" r="95" fill={`url(#card-glow-${item.id})`} />
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
            <radialGradient id={`card-glow-${item.id}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.35" />
              <stop offset="60%" stopColor="#DBEAFE" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#EFF6FF" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Top: Squircle Icon Badge with Pop-in Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, y: -8, rotate: -6 }}
        whileInView={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.2 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ scale: 1.12, rotate: 4 }}
        className="relative z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-[14px] sm:rounded-[16px] bg-[#eff6ff] border border-blue-100/70 text-[#0364FF] flex items-center justify-center mb-4 sm:mb-6 shadow-xs transition-transform duration-200"
      >
        <Icon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
      </motion.div>

      {/* Stat, Title & Description with Staggered Slide In */}
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 14, scale: 0.92 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.26 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[28px] sm:text-[36px] lg:text-[40px] font-bold tracking-tight text-[#0364FF] leading-none mb-2 sm:mb-3"
        >
          <AnimatedCounter value={item.stat} />
        </motion.div>
        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.32 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-[15px] sm:text-[17px] font-bold text-slate-900 leading-snug mb-1 sm:mb-2"
        >
          {item.title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.38 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-xs sm:text-[13.5px] text-slate-500 font-normal leading-relaxed"
        >
          {item.description}
        </motion.p>
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
          {/* Column 1: Header / Info Block (spans 2 rows on desktop) */}
          <div className="md:col-span-2 lg:col-span-1 lg:row-span-2 lg:col-start-1 lg:row-start-1 flex flex-col justify-between py-1 sm:py-3 lg:pr-4">
            <div>
              {/* Main Headline with WordReveal */}
              <WordReveal
                as="h2"
                delay={0.08}
                stagger={0.035}
                className="text-[26px] sm:text-3xl lg:text-[42px] font-bold text-slate-900 tracking-[-0.03em] leading-[1.16] sm:leading-[1.14] mb-3 sm:mb-4"
                text="Real impact for companies and growth partners"
              />

              {/* Subtitle with Slide Up Animation */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-sm sm:text-[15.5px] text-slate-500 font-normal leading-relaxed mb-5 sm:mb-6 max-w-sm"
              >
                Run, track, and pay your partnerships on verified, secure rails.
              </motion.p>

              {/* Primary CTA Button with Scale & Slide Animation */}
              <motion.div
                initial={{ opacity: 0, y: 16, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.02 }}
                className="w-full sm:w-fit mb-5 sm:mb-7"
              >
                <Link
                  href="/#contact"
                  className="btn-3d-primary group inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-[14.5px] font-semibold text-white w-full sm:w-fit"
                >
                  <span>Talk to our team</span>
                  <ArrowFlight sizeClass="w-4 h-4" />
                </Link>
              </motion.div>
            </div>

            {/* Bullet Value List with Staggered Entrance */}
            <div className="space-y-2.5 sm:space-y-3 pt-1 pb-4 sm:pb-0">
              {[
                "Trusted by industry leaders",
                "Built for scale",
                "Real, measurable results",
              ].map((item, idx) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -14, y: 6 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: 0.36 + idx * 0.09,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-600"
                >
                  <motion.div
                    whileHover={{ scale: 1.25, rotate: 6 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#0364FF] shrink-0 stroke-[2.2]" />
                  </motion.div>
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Cards 1 to 5 */}
          {METRICS.map((item, index) => (
            <MetricCardItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

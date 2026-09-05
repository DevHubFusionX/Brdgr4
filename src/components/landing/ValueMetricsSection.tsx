"use client";

import Link from "next/link";
import { Eye, TrendingUp, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import WordReveal from "@/components/ui/WordReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import UiverseHeroButton from "@/components/ui/UiverseHeroButton";

interface MetricCard {
  id: string;
  stat: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const VALUE_METRICS: MetricCard[] = [
  {
    id: "attribution",
    stat: "99.9%",
    title: "Attribution accuracy",
    description:
      "Prop firms and brokers capture every qualified challenge purchase with verified, fraud-screened tracking rails.",
    icon: Eye,
  },
  {
    id: "volume",
    stat: "+$14.8M",
    title: "Escrow volume routed",
    description:
      "Client commission deposits are held in dedicated escrow and disbursed on an auditable double-entry ledger.",
    icon: TrendingUp,
  },
  {
    id: "compliance",
    stat: "100%",
    title: "Contractual compliance",
    description:
      "Every partnership operates under standardized, bilateral digital agreements with automated non-circumvention rules.",
    icon: ShieldCheck,
  },
  {
    id: "time-saved",
    stat: "+480 hrs",
    title: "Operational time saved",
    description:
      "Partnership leads eliminate manual partner vetting, custom contract negotiation, and month-end spreadsheet disputes.",
    icon: Clock,
  },
  {
    id: "default-rate",
    stat: "0%",
    title: "Payout default rate",
    description:
      "Guaranteed on-schedule USD payouts by the fifth business day of each month with fully itemized deductions.",
    icon: CheckCircle2,
  },
];

export default function ValueMetricsSection() {
  return (
    <section className="relative w-full bg-[#f6f8fb] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* ─── 3-Column x 2-Row Card Grid ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          {/* Card 1: Lead Action Card (Monochrome & Authoritative) ────────── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="flex flex-col justify-between p-8 sm:p-10 rounded-[28px] sm:rounded-[32px] bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div>
              <WordReveal
                as="h3"
                delay={0.1}
                stagger={0.04}
                className="text-2xl sm:text-3xl font-normal text-neutral-900 tracking-[-0.025em] leading-[1.2]"
                text="Delivering real value to clients and partners"
              />
              <p className="mt-4 sm:mt-5 text-sm sm:text-base text-neutral-500 font-normal leading-relaxed">
                Scale your partnership operations with the trusted infrastructure engineered for performance finance.
              </p>
            </div>

            <div className="mt-8 pt-2">
              <UiverseHeroButton
                href="/sign-up"
                text="Talk to our team"
                size="sm"
              />
            </div>
          </motion.div>

          {/* Cards 2 to 6: Proof & Metric Cards ───────────────────────────── */}
          {VALUE_METRICS.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group flex flex-col justify-between p-8 sm:p-10 rounded-[28px] sm:rounded-[32px] bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-blue-200/80 transition-colors duration-200"
              >
                {/* Monochrome Minimalist Icon Badge */}
                <div className="w-11 h-11 rounded-full bg-slate-50 border border-slate-200/70 flex items-center justify-center text-neutral-800 shadow-2xs group-hover:bg-[#0364FF] group-hover:text-white group-hover:border-[#0364FF] transition-all duration-200">
                  <Icon className="w-5 h-5 transition-transform group-hover:scale-105" />
                </div>

                {/* Big Stat & Clear Label */}
                <div className="mt-10 sm:mt-12">
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

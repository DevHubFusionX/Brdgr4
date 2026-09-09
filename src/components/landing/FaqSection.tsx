"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import ArrowFlight from "@/components/ui/ArrowFlight";
import WordReveal from "@/components/ui/WordReveal";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: "audience",
    question: "Do I need an existing partner network to start?",
    answer:
      "No. With BRDGR Sourced, you can submit a brief and our team matches you with vetted, compliance-audited growth partners suited for your business. If you already have your own partners, you can also onboard them directly using our BYO (Bring Your Own) pipeline.",
  },
  {
    id: "cost",
    question: "What does it cost?",
    answer:
      "We offer clear and transparent pricing starting with a 7-day free trial on our Starter and Growth plans. You get automated tracking, bilateral contracts, and payout reconciliation without hidden fees. Enterprise plans are tailored for high-volume firms.",
  },
  {
    id: "partnerships-supported",
    question: "What types of partnerships does BRDGR support?",
    answer:
      "BRDGR is built for performance-driven partnerships. While starting with proprietary trading firms, brokers, and fintechs, the infrastructure natively handles CPA bounties, recurring RevShare, tiered volume agreements, and hybrid compensation models.",
  },
  {
    id: "payout-speed",
    question: "How fast do I get paid?",
    answer:
      "Payouts are automated on an exact ledger schedule. Client escrow funds are held securely and released to partners according to the contract's agreed terms—ensuring 100% on-time settlement with complete transaction records.",
  },
  {
    id: "global-availability",
    question: "Does BRDGR work in my country?",
    answer:
      "Yes. BRDGR operates globally with compliance screening, KYC verification, and international payment settlement. We support clients and performance growth partners across North America, Europe, Asia-Pacific, and emerging markets.",
  },
  {
    id: "processor-role",
    question: "Is BRDGR a payment processor?",
    answer:
      "BRDGR is a full partnership operating engine that incorporates secure escrow and automated settlement reconciliation. We provide the legal agreements, deterministic server-to-server tracking, and payout rails so you don't have to manage fragmented spreadsheets.",
  },
  {
    id: "migration",
    question: "Can I move my existing business over?",
    answer:
      "Yes, absolutely. Our bulk onboarding tools let you import your current partners, establish digital agreements, and connect S2S postback webhooks in minutes without downtime to your existing traffic or revenue.",
  },
  {
    id: "fraud-protection",
    question: "How does BRDGR protect against fraud and disputes?",
    answer:
      "Every partner is audited before approval. Real-time attribution filters duplicate conversions, proxy bots, and suspicious clicks, while bilateral digital contracts provide enforceable non-circumvention terms to prevent disputes.",
  },
];

export default function FaqSection() {
  // First item open by default matching reference image
  const [expandedId, setExpandedId] = useState<string | null>("audience");

  const toggleItem = (id: string) => {
    setExpandedId((current) => (current === id ? null : id));
  };

  return (
    <section
      id="faq"
      style={{ fontFamily: "var(--font-mulish), Mulish, sans-serif" }}
      className="relative w-full bg-[#f8fafc] py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden border-t border-slate-200/80"
    >
      {/* ─── Ambient Atmospheric Lighting ─────────────────────────────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-0" aria-hidden="true">
        <div className="absolute -top-40 right-1/4 w-[600px] h-[500px] rounded-full bg-gradient-to-bl from-[#6FA6FF]/15 via-[#0364FF]/8 to-transparent blur-[130px]" />
        <div className="absolute -bottom-40 left-1/4 w-[600px] h-[500px] rounded-full bg-gradient-to-tr from-[#005CFF]/10 via-[#6FA6FF]/10 to-transparent blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* ─── Section Header ───────────────────────────────────────────── */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#0364FF] text-xs font-semibold uppercase tracking-wider mb-4 shadow-2xs">
            <span>FAQ</span>
          </div>

          <WordReveal
            as="h2"
            delay={0.1}
            stagger={0.03}
            className="text-2xl sm:text-4xl md:text-[44px] font-bold text-slate-900 tracking-[-0.03em] leading-[1.18]"
            text="Frequently asked questions"
          />

          <WordReveal
            as="p"
            delay={0.25}
            stagger={0.02}
            className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-500 font-normal leading-relaxed max-w-xl mx-auto"
            text="Everything you need to know about BRDGR, partner recruiting, contracts, tracking, and automated payments."
          />
        </div>

        {/* ─── FAQ Accordion List (Matching Reference Design) ───────────── */}
        <div className="space-y-3 sm:space-y-3.5">
          {FAQ_ITEMS.map((item) => {
            const isExpanded = expandedId === item.id;

            return (
              <div
                key={item.id}
                className={`transition-all duration-300 rounded-[18px] sm:rounded-[24px] ${
                  isExpanded
                    ? "bg-white card-blue-pop card-specular-rim border border-blue-200/90 shadow-[0_12px_32px_-6px_rgba(3,100,255,0.14),0_4px_16px_rgba(15,23,42,0.05),inset_0_1.5px_0_rgba(255,255,255,1)] p-5 sm:p-7"
                    : "bg-transparent border-b border-slate-200/80 hover:border-slate-300/90 px-3 sm:px-5 py-4 sm:py-5"
                }`}
              >
                {/* Accordion Toggle Header */}
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isExpanded}
                  className="w-full flex items-center justify-between text-left gap-4 cursor-pointer group select-none"
                >
                  <span
                    className={`text-base sm:text-[17px] tracking-tight leading-snug transition-colors ${
                      isExpanded
                        ? "font-bold text-slate-900"
                        : "font-semibold text-slate-800 group-hover:text-[#0364FF]"
                    }`}
                  >
                    {item.question}
                  </span>

                  {/* Toggle Icon: Plus / Minus */}
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                      isExpanded
                        ? "bg-slate-100 text-slate-700"
                        : "text-slate-400 group-hover:text-slate-700 group-hover:bg-slate-100"
                    }`}
                  >
                    {isExpanded ? (
                      <Minus className="w-4 h-4 stroke-[2.2]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[2.2]" />
                    )}
                  </div>
                </button>

                {/* Animated Answer Body */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                        transition: {
                          height: { duration: 0.28, ease: [0.16, 1, 0.3, 1] },
                          opacity: { duration: 0.24, delay: 0.05 },
                        },
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                          height: { duration: 0.22, ease: [0.16, 1, 0.3, 1] },
                          opacity: { duration: 0.15 },
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <p className="mt-3 text-sm sm:text-[15px] text-slate-600 font-normal leading-relaxed pr-6 sm:pr-8">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* ─── Bottom Help Callout with 3D Button ───────────────────────── */}
        <div className="mt-12 sm:mt-16 text-center pt-8 sm:pt-10 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 px-2 sm:px-4">
          <div className="text-left sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
              Still have questions?
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 font-normal mt-0.5">
              Our partnership specialists are ready to help with your custom requirements.
            </p>
          </div>

          <Link
            href="/#contact"
            className="btn-3d-primary group px-6 sm:px-7 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white gap-2 cursor-pointer shrink-0 w-full sm:w-auto"
          >
            <span>Talk to our team</span>
            <ArrowFlight sizeClass="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

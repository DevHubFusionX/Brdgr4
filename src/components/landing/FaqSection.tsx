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
      className="relative w-full bg-[#f8fafc] py-14 sm:py-24 md:py-32 px-3.5 sm:px-6 lg:px-8 font-sans overflow-hidden border-t border-slate-200/80"
    >
      {/* ─── Ambient Atmospheric Lighting ─────────────────────────────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-0" aria-hidden="true">
        <div className="absolute -top-40 right-1/4 w-[600px] h-[500px] rounded-full bg-gradient-to-bl from-[#6FA6FF]/15 via-[#0364FF]/8 to-transparent blur-[130px]" />
        <div className="absolute -bottom-40 left-1/4 w-[600px] h-[500px] rounded-full bg-gradient-to-tr from-[#005CFF]/10 via-[#6FA6FF]/10 to-transparent blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* ─── Section Header ───────────────────────────────────────────── */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#0364FF] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4 shadow-2xs"
          >
            <span>FAQ</span>
          </motion.div>

          <WordReveal
            as="h2"
            delay={0.1}
            stagger={0.03}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold text-slate-900 tracking-[-0.03em] leading-[1.18]"
            text="Frequently asked questions"
          />

          <WordReveal
            as="p"
            delay={0.25}
            stagger={0.02}
            className="mt-2.5 sm:mt-4 text-xs sm:text-sm md:text-base text-slate-500 font-normal leading-relaxed max-w-xl mx-auto px-2"
            text="Everything you need to know about BRDGR, partner recruiting, contracts, tracking, and automated payments."
          />
        </div>

        {/* ─── FAQ Accordion List (Responsive Mobile & Desktop) ─────────── */}
        <div className="space-y-2.5 sm:space-y-3.5">
          {FAQ_ITEMS.map((item, idx) => {
            const isExpanded = expandedId === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.04 + idx * 0.03, ease: [0.22, 1, 0.36, 1] }}
                className={`transition-all duration-300 rounded-2xl sm:rounded-[22px] p-4 sm:p-6 ${
                  isExpanded
                    ? "bg-white card-blue-pop card-specular-rim border border-blue-200/90 shadow-[0_10px_28px_-6px_rgba(3,100,255,0.12),0_4px_16px_rgba(15,23,42,0.04),inset_0_1.5px_0_rgba(255,255,255,1)]"
                    : "bg-white/70 backdrop-blur-sm border border-slate-200/80 hover:border-blue-200/80 hover:bg-white shadow-[0_2px_8px_rgba(15,23,42,0.03)]"
                }`}
              >
                {/* Accordion Toggle Header */}
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isExpanded}
                  className="w-full flex items-center justify-between text-left gap-3 sm:gap-4 cursor-pointer select-none py-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0364FF] rounded-lg group"
                >
                  <span
                    className={`text-[15px] sm:text-[17px] tracking-tight leading-snug transition-colors pr-1 ${
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
                        ? "bg-[#0364FF] text-white shadow-sm shadow-[#0364FF]/25 rotate-180"
                        : "bg-slate-100 text-slate-500 group-hover:text-slate-800 group-hover:bg-slate-200/80"
                    }`}
                  >
                    {isExpanded ? (
                      <Minus className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
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
                          opacity: { duration: 0.22, delay: 0.04 },
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
                      <p className="mt-2.5 sm:mt-3 text-xs sm:text-[15px] text-slate-600 font-normal leading-relaxed pr-1 sm:pr-6 border-t border-slate-100/80 pt-2.5 sm:pt-3">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* ─── Bottom Help Callout with 3D Button ───────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 sm:mt-14 rounded-2xl sm:rounded-3xl bg-white/90 backdrop-blur-sm border border-slate-200/90 p-4.5 sm:p-7 shadow-[0_4px_20px_rgba(15,23,42,0.04)] flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6"
        >
          <div className="text-left w-full sm:w-auto">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
              Still have questions?
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 font-normal mt-0.5 leading-relaxed max-w-md">
              Our partnership specialists are ready to help with your custom setup and requirements.
            </p>
          </div>

          <div className="w-full sm:w-auto shrink-0">
            <Link
              href="/#contact"
              className="btn-3d-primary group px-6 sm:px-7 py-3 text-xs sm:text-sm font-semibold text-white gap-2 cursor-pointer w-full sm:w-auto inline-flex items-center justify-center shadow-md active:scale-[0.98] transition-transform"
            >
              <span>Talk to our team</span>
              <ArrowFlight sizeClass="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

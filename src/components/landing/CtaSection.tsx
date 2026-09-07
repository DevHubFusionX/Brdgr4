"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import WordReveal from "@/components/ui/WordReveal";
import AuroraHero from "@/components/ui/aurora-hero";

export default function CtaSection() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<"client" | "partner">("client");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      router.push(`/sign-up?role=${role}`);
      return;
    }
    router.push(`/sign-up?role=${role}&email=${encodeURIComponent(email.trim())}`);
  };

  return (
    <section className="relative w-full bg-[#f6f8fb] py-16 sm:py-24 md:py-28 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* ─── Main Island Card with Aurora Hero Background ─── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <AuroraHero
            as="div"
            className="relative rounded-[28px] sm:rounded-[36px] border border-slate-800/80 shadow-[0_20px_60px_rgba(0,0,0,0.25)] p-8 sm:p-12 md:p-14 lg:p-16 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              {/* ─── Left Column: Direct, High-Conviction Copy ─────────────── */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <WordReveal
                  as="h2"
                  delay={0.1}
                  stagger={0.035}
                  initialOpacity={0.2}
                  className="text-3xl sm:text-4xl md:text-[44px] font-normal text-white tracking-[-0.03em] leading-[1.18]"
                  text="Ready to scale on verified infrastructure?"
                />

                <WordReveal
                  as="p"
                  delay={0.25}
                  stagger={0.02}
                  initialOpacity={0.2}
                  className="mt-4 text-sm sm:text-base md:text-lg text-slate-300 font-normal leading-relaxed max-w-lg"
                  text="Discover screened partners, lock bilateral terms, and settle commissions on guaranteed USD escrow rails."
                />

                {/* Quiet Reassurance Indicators */}
                <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#38BDF8]" />
                    <span>14-day full trial</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#38BDF8]" />
                    <span>Double-entry USD escrow</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#38BDF8]" />
                    <span>Zero long-term lock-in</span>
                  </div>
                </div>
              </div>

              {/* ─── Right Column: Clean, Frictionless Action Form ─────────── */}
              <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center w-full">
                <div className="w-full max-w-md flex flex-col gap-4">
                  {/* Minimal Role Switcher */}
                  <div className="inline-flex p-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md self-start sm:self-auto">
                    <button
                      type="button"
                      onClick={() => setRole("client")}
                      className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                        role === "client"
                          ? "bg-[#0364FF] text-white shadow-xs font-semibold"
                          : "text-slate-300 hover:text-white"
                      }`}
                    >
                      Prop Firm / Broker
                    </button>
                    <button
                      type="button"
                      onClick={() => setRole("partner")}
                      className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                        role === "partner"
                          ? "bg-[#0364FF] text-white shadow-xs font-semibold"
                          : "text-slate-300 hover:text-white"
                      }`}
                    >
                      Growth Partner
                    </button>
                  </div>

                  {/* Clean Email Input + Action Button */}
                  <form
                    onSubmit={handleSubmit}
                    className="relative w-full rounded-full bg-white/10 backdrop-blur-xl border border-white/20 p-1.5 pl-5 flex items-center justify-between transition-all focus-within:border-[#38BDF8]/80 focus-within:bg-white/15 shadow-xl"
                  >
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={
                        role === "client"
                          ? "Enter your company email..."
                          : "Enter your personal email..."
                      }
                      className="w-full bg-transparent text-sm text-white placeholder-slate-400 focus:outline-none pr-3"
                    />

                    <button
                      type="submit"
                      className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-full bg-[#0364FF] hover:bg-[#005CFF] text-white text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer shadow-md shadow-[#0364FF]/40 shrink-0 group active:scale-[0.98]"
                    >
                      <span>Get Started</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </form>

                  {/* Clean Sign-in Anchor */}
                  <div className="flex items-center justify-between px-2 text-xs text-slate-400">
                    <span>No credit card required</span>
                    <button
                      type="button"
                      onClick={() => router.push("/sign-in")}
                      className="text-slate-300 hover:text-[#38BDF8] transition-colors cursor-pointer"
                    >
                      Already have an account? Sign in
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </AuroraHero>
        </motion.div>
      </div>
    </section>
  );
}

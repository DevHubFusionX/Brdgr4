"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import WordReveal from "@/components/ui/WordReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
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
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <AuroraHero
            as="div"
            className="relative rounded-[28px] sm:rounded-[36px] border border-slate-800/80 shadow-[0_20px_60px_rgba(0,0,0,0.25)] p-8 sm:p-12 md:p-16 lg:p-20 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 lg:gap-16 items-center">
              {/* ─── Left Column: Headline & Description ─────────────────────── */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                {/* Tagline Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs sm:text-sm font-medium text-sky-200 mb-6 backdrop-blur-md self-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
                  <span>Get Started with Brdgr</span>
                </div>

                <WordReveal
                  as="h2"
                  delay={0.15}
                  stagger={0.045}
                  initialOpacity={0.2}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-normal text-white tracking-[-0.03em] leading-[1.15]"
                  text="Ready to put your partnerships on verified infrastructure?"
                />

                <WordReveal
                  as="p"
                  delay={0.35}
                  stagger={0.025}
                  initialOpacity={0.2}
                  className="mt-5 text-sm sm:text-base md:text-lg text-slate-300 font-normal leading-relaxed max-w-xl"
                  text="We evaluate your campaign requirements, match you with pre-screened performance partners, and run attribution through guaranteed double-entry USD escrow rails."
                />

                {/* 3 Reassurance Checkmarks */}
                <div className="mt-8 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#0364FF]/25 border border-[#0364FF]/50 flex items-center justify-center text-[#38BDF8] shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span><AnimatedCounter value={14} />-day full product trial</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#0364FF]/25 border border-[#0364FF]/50 flex items-center justify-center text-[#38BDF8] shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>Double-entry USD escrow</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#0364FF]/25 border border-[#0364FF]/50 flex items-center justify-center text-[#38BDF8] shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>Zero long-term lock-in</span>
                  </div>
                </div>
              </div>

              {/* ─── Right Column: Chat Speech Bubble & Interactive Pill Form ── */}
              <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center w-full">
                <div className="w-full max-w-md flex flex-col gap-4">
                  {/* Speech Bubble */}
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 350, damping: 25, delay: 0.2 }}
                    className="self-start sm:self-auto inline-flex items-center gap-2 px-5 py-3 rounded-2xl rounded-bl-sm bg-white/95 backdrop-blur-md text-neutral-900 shadow-xl border border-white/20 select-none"
                  >
                    <span className="text-xs sm:text-sm font-medium tracking-tight">
                      Let&apos;s get to know each other better?
                    </span>
                    <span className="text-base" role="img" aria-label="waving hand">
                      👋
                    </span>
                  </motion.div>

                  {/* Role Switcher Pills */}
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-300 pl-1">
                    <span>I represent a:</span>
                    <div className="inline-flex rounded-full bg-white/10 p-0.5 border border-white/15 backdrop-blur-md">
                      <button
                        type="button"
                        onClick={() => setRole("client")}
                        className={`px-3.5 py-1 rounded-full text-xs transition-all cursor-pointer ${
                          role === "client"
                            ? "bg-[#0364FF] text-white font-semibold shadow-sm shadow-[#0364FF]/40"
                            : "text-slate-300 hover:text-white"
                        }`}
                      >
                        Prop Firm / Broker
                      </button>
                      <button
                        type="button"
                        onClick={() => setRole("partner")}
                        className={`px-3.5 py-1 rounded-full text-xs transition-all cursor-pointer ${
                          role === "partner"
                            ? "bg-[#0364FF] text-white font-semibold shadow-sm shadow-[#0364FF]/40"
                            : "text-slate-300 hover:text-white"
                        }`}
                      >
                        Growth Partner
                      </button>
                    </div>
                  </div>

                  {/* Input Pill Container with Submit Arrow */}
                  <form
                    onSubmit={handleSubmit}
                    className="relative w-full rounded-full bg-white/10 backdrop-blur-xl border border-white/20 p-1.5 pl-5 sm:pl-6 flex items-center justify-between transition-all focus-within:border-[#38BDF8]/80 focus-within:bg-white/15 shadow-2xl"
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
                      className="w-full bg-transparent text-sm sm:text-base text-white placeholder-slate-400 focus:outline-none pr-3"
                    />

                    {/* Circular Submit Button with Hero Dot Arrow Animation */}
                    <button
                      type="submit"
                      aria-label="Submit and continue to sign up"
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#0364FF] hover:bg-[#005CFF] text-white flex items-center justify-center shrink-0 transition-all duration-200 cursor-pointer shadow-lg shadow-[#0364FF]/40 group overflow-hidden"
                    >
                      <svg
                        width={15}
                        height={18}
                        viewBox="0 0 16 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-transform duration-300 group-hover:animate-[arrow_1s_linear_infinite]"
                      >
                        <circle cx="1.61321" cy="1.61321" r="1.5" className="fill-white" />
                        <circle cx="5.73583" cy="1.61321" r="1.5" className="fill-white" />
                        <circle cx="5.73583" cy="5.5566" r="1.5" className="fill-white" />
                        <circle cx="9.85851" cy="5.5566" r="1.5" className="fill-white" />
                        <circle cx="9.85851" cy="9.5" r="1.5" className="fill-white" />
                        <circle cx="13.9811" cy="9.5" r="1.5" className="fill-white" />
                        <circle cx="5.73583" cy="13.4434" r="1.5" className="fill-white" />
                        <circle cx="9.85851" cy="13.4434" r="1.5" className="fill-white" />
                        <circle cx="1.61321" cy="17.3868" r="1.5" className="fill-white" />
                        <circle cx="5.73583" cy="17.3868" r="1.5" className="fill-white" />
                      </svg>
                    </button>
                  </form>

                  {/* Micro Guarantee Note */}
                  <div className="flex items-center justify-between px-2 text-[11px] text-slate-400">
                    <span>Start <AnimatedCounter value={14} />-day full access trial</span>
                    <span
                      className="text-slate-300 hover:text-[#38BDF8] hover:underline cursor-pointer transition-colors"
                      onClick={() => router.push("/sign-in")}
                    >
                      Already have an account? Sign in
                    </span>
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


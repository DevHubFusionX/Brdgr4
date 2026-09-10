"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUp, ChevronRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import NavLogo from "./navbar/NavLogo";

interface FooterLink {
  label: string;
  href?: string;
  badge?: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Platform",
    links: [
      { label: "Performance", href: "/client" },
      { label: "Discover and Recruit", href: "/sign-up" },
      { label: "Contract and Pay", href: "/sign-up" },
      { label: "Track", href: "/client" },
      { label: "Optimize" },
    ],
  },
  {
    title: "For companies",
    links: [
      { label: "Affiliate marketing", href: "/sign-up" },
      { label: "Managed services: Influencer" },
      { label: "Referral marketing", href: "/sign-up" },
      { label: "Analytics and attribution" },
      { label: "Services" },
    ],
  },
  {
    title: "For partners",
    links: [
      { label: "Overview", href: "/partner" },
      { label: "Affiliates", href: "/partner" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "About BRDGR", href: "/sign-in" },
      { label: "Why partnerships", href: "/sign-in" },
      { label: "Contact", href: "/sign-in" },
      { label: "Help center" },
      { label: "Security and privacy", href: "/sign-in" },
    ],
  },
];

export default function Footer() {
  const [year, setYear] = useState(2026);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      suppressHydrationWarning
      className="relative w-full bg-white border-t border-slate-200/80 font-sans text-neutral-600 select-none overflow-hidden"
    >
      {/* ─── Blue Gradient Wash: Top-Left Radiant Ambient Glow ──────────────── */}
      <div
        className="absolute top-0 left-0 w-[320px] sm:w-[620px] h-[320px] sm:h-[480px] bg-[radial-gradient(ellipse_at_top_left,rgba(3,100,255,0.18)_0%,rgba(147,197,253,0.26)_38%,transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />

      {/* ─── Blue Gradient Wash: Top-Right Radiant Ambient Glow ─────────────── */}
      <div
        className="absolute top-0 right-0 w-[320px] sm:w-[620px] h-[320px] sm:h-[480px] bg-[radial-gradient(ellipse_at_top_right,rgba(3,100,255,0.16)_0%,rgba(191,219,254,0.24)_38%,transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />

      {/* ─── Blue Gradient Wash: Center / Mid Ambient Glow ──────────────────── */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-[420px] bg-[radial-gradient(ellipse_at_center,rgba(3,100,255,0.11)_0%,rgba(147,197,253,0.17)_45%,transparent_75%)] pointer-events-none"
        aria-hidden="true"
      />

      {/* ─── Blue Gradient Wash: Bottom-Right Radiant Ambient Glow ──────────── */}
      <div
        className="absolute bottom-0 right-0 w-[320px] sm:w-[640px] h-[320px] sm:h-[460px] bg-[radial-gradient(ellipse_at_bottom_right,rgba(3,100,255,0.18)_0%,rgba(147,197,253,0.25)_40%,transparent_75%)] pointer-events-none"
        aria-hidden="true"
      />

      {/* ─── Foreground Content ─────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 lg:pt-20 pb-8 sm:pb-12">
        {/* ─── 1. Navigation Columns: Mobile Accordion (< md) ────────────────── */}
        <div className="md:hidden flex flex-col divide-y divide-slate-200/80 border-b border-slate-200/80 pb-6 mb-8">
          {FOOTER_COLUMNS.map((column) => {
            const isOpen = !!openSections[column.title];
            return (
              <div key={column.title} className="py-1">
                <button
                  type="button"
                  onClick={() => toggleSection(column.title)}
                  className="w-full flex items-center justify-between py-3.5 text-left group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-[13.5px] font-semibold text-neutral-900 group-hover:text-[#0364FF] transition-colors">
                    {column.title}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-neutral-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#0364FF]" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 pb-3" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <ul className="flex flex-col gap-1 text-[13px] text-neutral-500 pt-1 pl-1">
                      {column.links.map((link, idx) => (
                        <li key={idx} className="flex items-center gap-1.5 min-h-[34px]">
                          {link.href ? (
                            <Link
                              href={link.href}
                              className="text-neutral-600 hover:text-[#0364FF] active:text-[#0043CC] transition-colors inline-block py-1"
                            >
                              {link.label}
                            </Link>
                          ) : (
                            <span className="text-neutral-400 inline-block py-1">
                              {link.label}
                            </span>
                          )}
                          {link.badge && (
                            <span className="px-1.5 py-0.5 rounded-full bg-blue-100 text-[#0364FF] text-[9.5px] font-semibold shrink-0">
                              {link.badge}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ─── 1. Navigation Columns: Desktop Grid (>= md) ──────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="hidden md:grid md:grid-cols-4 gap-x-8 lg:gap-x-12 gap-y-10 pb-16"
        >
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title} className="flex flex-col gap-3">
              <span className="text-[13px] font-bold text-neutral-900 tracking-tight">
                {column.title}
              </span>
              <ul className="space-y-2 text-[13px] text-neutral-500 font-normal">
                {column.links.map((link, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    {link.href ? (
                      <Link
                        href={link.href}
                        className="hover:text-[#0364FF] transition-colors inline-block py-0.5 leading-snug"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <span className="text-neutral-400 inline-block py-0.5 leading-snug">
                        {link.label}
                      </span>
                    )}
                    {link.badge && (
                      <span className="px-1.5 py-0.2 rounded-full bg-blue-100 text-[#0364FF] text-[9.5px] font-semibold shrink-0">
                        {link.badge}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* ─── 2. Full-Width Clean Divider Line ──────────────────────────────── */}
        <div className="w-full border-t border-slate-200/90 pt-8 sm:pt-10" />

        {/* ─── 3. Newsletter Subscription & Social Badges Row ───────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-10 sm:pb-12"
        >
          {/* Newsletter Input Form */}
          <div className="flex flex-col gap-3 max-w-lg w-full">
            <span className="text-sm sm:text-[14.5px] font-semibold text-neutral-900">
              Sign up for our monthly newsletter
            </span>

            {subscribed ? (
              <div className="text-sm font-medium text-[#0364FF] py-2">
                Thank you for subscribing to BRDGR updates!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full max-w-md">
                <input
                  type="email"
                  required
                  placeholder="Business email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full sm:flex-1 h-[46px] sm:h-[44px] px-4 sm:px-5 rounded-full bg-white border border-slate-300 text-base sm:text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#0364FF] focus:ring-2 focus:ring-[#0364FF]/20 shadow-2xs transition-all"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto h-[46px] sm:h-[44px] px-7 rounded-full bg-neutral-900 hover:bg-black text-white text-sm font-semibold tracking-tight shadow-sm hover:shadow transition-all active:scale-[0.98] cursor-pointer shrink-0 inline-flex items-center justify-center"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

          {/* Social Icons & App Store Badges */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between lg:justify-end gap-5 sm:gap-6 w-full lg:w-auto">
            {/* Circular Social Icons */}
            <div className="flex items-center flex-wrap gap-2.5 sm:gap-2">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 sm:w-8 sm:h-8 rounded-full border border-slate-300 bg-white hover:bg-blue-50/70 flex items-center justify-center text-neutral-700 hover:text-[#0364FF] hover:border-[#0364FF]/40 transition-all shadow-2xs active:scale-95"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 sm:w-8 sm:h-8 rounded-full border border-slate-300 bg-white hover:bg-blue-50/70 flex items-center justify-center text-neutral-700 hover:text-[#0364FF] hover:border-[#0364FF]/40 transition-all shadow-2xs active:scale-95"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              {/* Facebook / X */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X (formerly Twitter)"
                className="w-9 h-9 sm:w-8 sm:h-8 rounded-full border border-slate-300 bg-white hover:bg-blue-50/70 flex items-center justify-center text-neutral-700 hover:text-[#0364FF] hover:border-[#0364FF]/40 transition-all shadow-2xs active:scale-95"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 sm:w-8 sm:h-8 rounded-full border border-slate-300 bg-white hover:bg-blue-50/70 flex items-center justify-center text-neutral-700 hover:text-[#0364FF] hover:border-[#0364FF]/40 transition-all shadow-2xs active:scale-95"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* RSS */}
              <a
                href="/sign-in"
                aria-label="RSS Feed"
                className="w-9 h-9 sm:w-8 sm:h-8 rounded-full border border-slate-300 bg-white hover:bg-blue-50/70 flex items-center justify-center text-neutral-700 hover:text-[#0364FF] hover:border-[#0364FF]/40 transition-all shadow-2xs active:scale-95"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 11a9 9 0 0 1 9 9" />
                  <path d="M4 4a16 16 0 0 1 16 16" />
                  <circle cx="5" cy="19" r="1" />
                </svg>
              </a>
            </div>

            {/* App Store & Google Play Pills */}
            <div className="flex items-center flex-wrap gap-2.5 sm:gap-2">
              <a
                href="https://apple.com"
                target="_blank"
                rel="noreferrer"
                className="h-[36px] sm:h-[34px] px-3 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 flex items-center gap-1.5 text-neutral-800 transition-all shadow-2xs shrink-0 active:scale-95"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.64 1.36-.58.68-1.09 1.76-.95 2.8 1 .08 2.05-.56 2.67-1.31" />
                </svg>
                <div className="flex flex-col text-[8.5px] leading-tight">
                  <span className="text-neutral-400">Download on the</span>
                  <span className="font-semibold text-neutral-800">App Store</span>
                </div>
              </a>

              <a
                href="https://google.com"
                target="_blank"
                rel="noreferrer"
                className="h-[36px] sm:h-[34px] px-3 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 flex items-center gap-1.5 text-neutral-800 transition-all shadow-2xs shrink-0 active:scale-95"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a1.44 1.44 0 0 1-.22-.767V2.581c0-.285.08-.55.219-.767zm11.238 11.241l2.42 2.42-12.01 6.862 9.59-9.282zm0-2.11L5.257 1.663l12.01 6.862-2.42 2.42zm1.488 1.055l3.197 1.827c.896.512.896 1.348 0 1.86l-3.197 1.827-1.83-1.83 1.83-1.884z" />
                </svg>
                <div className="flex flex-col text-[8.5px] leading-tight">
                  <span className="text-neutral-400">GET IT ON</span>
                  <span className="font-semibold text-neutral-800">Google Play</span>
                </div>
              </a>
            </div>
          </div>
        </motion.div>

        {/* ─── 4. Full-Width Clean Divider Line ──────────────────────────────── */}
        <div className="w-full border-t border-slate-200/90 pt-6 sm:pt-8" />

        {/* ─── 5. Bottom Brand Logo & Legal Policies Bar ────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-6 text-xs sm:text-[13px] text-neutral-500"
        >
          {/* Logo Mark & Mobile Scroll to Top */}
          <div className="flex items-center justify-between w-full sm:w-auto">
            <NavLogo id="footer-logo" />
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="sm:hidden w-9 h-9 rounded-full bg-slate-100 hover:bg-[#0364FF] text-neutral-600 hover:text-white border border-slate-200 hover:border-[#0364FF] flex items-center justify-center transition-all cursor-pointer shadow-2xs shrink-0 active:scale-95"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

          {/* Legal Policies & Copyright */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 w-full sm:w-auto">
            <div className="flex items-center gap-3">
              <Link
                href="/sign-in"
                className="inline-flex items-center gap-1 text-neutral-700 hover:text-[#0364FF] font-medium transition-colors"
              >
                <span>Legal policies</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
              <span className="hidden sm:inline text-slate-300">|</span>
            </div>

            <span className="text-neutral-500 text-[11px] sm:text-xs">
              © {year} BRDGR Solutions Ltd. All rights reserved.
            </span>

            {/* Desktop Back to top button */}
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="hidden sm:flex w-7 h-7 rounded-full bg-slate-100 hover:bg-[#0364FF] text-neutral-600 hover:text-white border border-slate-200 hover:border-[#0364FF] items-center justify-center transition-all cursor-pointer shadow-2xs ml-2 shrink-0 active:scale-95"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

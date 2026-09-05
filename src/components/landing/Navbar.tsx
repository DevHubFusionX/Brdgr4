"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowDown, ArrowRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import NavLogo from "./navbar/NavLogo";
import ProductsMegaMenu from "./navbar/ProductsMegaMenu";
import SolutionsMegaMenu from "./navbar/SolutionsMegaMenu";
import MobileNav from "./navbar/MobileNav";

type MenuType = "products" | "solutions" | null;

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<MenuType>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const navRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Smart scroll detection: auto-hide on scroll down, reveal on scroll up
  useEffect(() => {
    let lastScrollY = window.scrollY;

    function handleScroll() {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      // Keep navbar visible if any mega menu or mobile drawer is open
      if (activeMenu || mobileMenuOpen) {
        setIsVisible(true);
        lastScrollY = currentScrollY;
        return;
      }

      // Always show navbar when near the very top of the page
      if (currentScrollY <= 60) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 8) {
        // Scrolling DOWN -> hide smoothly
        setIsVisible(false);
        setActiveMenu(null);
      } else if (currentScrollY < lastScrollY && lastScrollY - currentScrollY > 8) {
        // Scrolling UP -> reveal smoothly
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeMenu, mobileMenuOpen]);

  // Close menus on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveMenu(null);
        setMobileMenuOpen(false);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleMenuToggle = (menu: MenuType) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };

  const handleMouseEnter = (menu: MenuType) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 250);
  };

  const handleHeaderEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const isMenuOpen = Boolean(activeMenu || mobileMenuOpen);

  return (
    <>
      <header
        className={`fixed top-3 sm:top-4 md:top-5 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 pointer-events-none transition-all duration-300 ease-in-out font-sans ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-8 opacity-0"
        }`}
      >
        {/* Floating Capsule Island */}
        <div
          ref={navRef}
          onMouseEnter={handleHeaderEnter}
          onMouseLeave={handleMouseLeave}
          className={`relative max-w-5xl lg:max-w-6xl mx-auto h-16 sm:h-[68px] px-3.5 sm:px-5 pl-4 sm:pl-5 rounded-full flex items-center justify-between pointer-events-auto transition-all duration-300 ${
            activeMenu || isScrolled
              ? "bg-white/92 backdrop-blur-2xl border border-slate-200/90 shadow-xl shadow-slate-900/10"
              : "bg-white/80 backdrop-blur-xl border border-slate-200/80 shadow-lg shadow-slate-900/5"
          }`}
        >
          {/* Left: Brand Logo with 3D Blue Badge & Crisp Wordmark */}
          <div className="flex items-center z-10 shrink-0">
            <NavLogo onClick={() => setActiveMenu(null)} />
          </div>

          {/* Center: Centered Navigation Links with Pill Hover Chips */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5 text-[14px] sm:text-[15px] font-medium text-slate-600 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
            {/* Product Trigger */}
            <button
              type="button"
              onClick={() => handleMenuToggle("products")}
              onMouseEnter={() => handleMouseEnter("products")}
              aria-expanded={activeMenu === "products"}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                activeMenu === "products"
                  ? "bg-slate-100 text-[#0364FF] font-semibold"
                  : "hover:text-slate-900 hover:bg-slate-100/80"
              }`}
            >
              <span>Product</span>
              <ArrowDown
                className={`w-3.5 h-3.5 transition-transform duration-300 ease-out ${
                  activeMenu === "products"
                    ? "text-[#0364FF] -translate-y-0.5 rotate-180"
                    : "text-slate-400 group-hover:text-slate-600"
                }`}
              />
            </button>

            {/* Solutions Trigger */}
            <button
              type="button"
              onClick={() => handleMenuToggle("solutions")}
              onMouseEnter={() => handleMouseEnter("solutions")}
              aria-expanded={activeMenu === "solutions"}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                activeMenu === "solutions"
                  ? "bg-slate-100 text-[#0364FF] font-semibold"
                  : "hover:text-slate-900 hover:bg-slate-100/80"
              }`}
            >
              <span>Solutions</span>
              <ArrowDown
                className={`w-3.5 h-3.5 transition-transform duration-300 ease-out ${
                  activeMenu === "solutions"
                    ? "text-[#0364FF] -translate-y-0.5 rotate-180"
                    : "text-slate-400 group-hover:text-slate-600"
                }`}
              />
            </button>

            {/* Pricing Direct Link */}
            <Link
              href="/#pricing"
              onClick={() => setActiveMenu(null)}
              className="px-3.5 py-1.5 rounded-full text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 transition-colors"
            >
              Pricing
            </Link>

            {/* Contact Us Direct Link */}
            <Link
              href="/#contact"
              onClick={() => setActiveMenu(null)}
              className="px-3.5 py-1.5 rounded-full text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Right: Actions for Login & Get started */}
          <div className="hidden md:flex items-center gap-2 sm:gap-2.5 z-10 shrink-0">
            <Link
              href="/sign-in"
              className="px-4 py-1.5 sm:px-4.5 sm:py-2 text-[13.5px] sm:text-[14px] font-medium text-slate-800 hover:text-slate-950 bg-white/75 hover:bg-white border border-slate-200/90 rounded-[12px] sm:rounded-[14px] shadow-xs hover:border-slate-300/80 transition-all duration-150 inline-flex items-center justify-center cursor-pointer"
            >
              Login
            </Link>

            <Link
              href="/sign-up"
              className="px-4 py-1.5 sm:px-4.5 sm:py-2 text-[13.5px] sm:text-[14px] font-semibold text-white bg-gradient-to-b from-[#529eff] via-[#2076fe] to-[#045de9] border border-blue-400/50 rounded-[12px] sm:rounded-[14px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.5),0_2px_0_#0044b8,0_3px_8px_rgba(3,100,255,0.25)] hover:from-[#62a7ff] hover:to-[#0052d4] hover:shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.6),0_2.5px_0_#0044b8,0_5px_12px_rgba(3,100,255,0.35)] active:translate-y-0.5 active:shadow-[inset_0_1px_1px_rgba(0,0,0,0.15),0_1px_0_#0044b8] transition-all duration-150 inline-flex items-center gap-1.5 cursor-pointer"
            >
              <span>Get started</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.2]" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center z-10">
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="p-2 rounded-full text-slate-700 hover:text-slate-950 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* ─── CONTINUOUS FLOATING GLASS MEGA MENU ──────────── */}
        <AnimatePresence>
          {activeMenu && (
            <motion.div
              key={activeMenu}
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={handleHeaderEnter}
              onMouseLeave={handleMouseLeave}
              className="absolute left-3 right-3 sm:left-6 sm:right-6 lg:left-8 lg:right-8 top-[calc(100%+10px)] max-w-5xl mx-auto rounded-[28px] bg-white/95 backdrop-blur-3xl border border-slate-200/90 shadow-2xl shadow-slate-900/15 z-50 overflow-hidden text-slate-900 pointer-events-auto"
            >
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.28, delay: 0.05, ease: "easeOut" }}
              >
                {activeMenu === "products" && (
                  <ProductsMegaMenu onClose={() => setActiveMenu(null)} />
                )}
                {activeMenu === "solutions" && (
                  <SolutionsMegaMenu onClose={() => setActiveMenu(null)} />
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="md:hidden mt-2 max-w-md mx-auto rounded-3xl bg-white/95 backdrop-blur-3xl border border-slate-200/80 shadow-2xl overflow-hidden pointer-events-auto"
            >
              <MobileNav onClose={() => setMobileMenuOpen(false)} />
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ─── FULL-PAGE BLUR & DIM OVERLAY (SUBTLE LIGHT VEIL) ─────────────── */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            onClick={() => setActiveMenu(null)}
            className="fixed inset-0 z-40 bg-slate-900/10 backdrop-blur-xs cursor-pointer"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  );
}

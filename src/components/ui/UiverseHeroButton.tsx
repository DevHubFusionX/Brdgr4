"use client";

import React from "react";
import Link from "next/link";

interface UiverseHeroButtonProps {
  text?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  containerClassName?: string;
  variant?: "primary" | "dark" | "surface";
  size?: "default" | "sm";
  type?: "button" | "submit" | "reset";
  iconBgColor?: string;
  dotColor?: string;
}

export default function UiverseHeroButton({
  text = "Request a demo",
  href,
  onClick,
  className = "",
  containerClassName = "",
  variant = "primary",
  size = "default",
  type = "button",
  iconBgColor,
  dotColor,
}: UiverseHeroButtonProps) {
  // Brand color configuration
  const styles = {
    primary: {
      container:
        "bg-[#0364FF] hover:bg-[#005CFF] text-white shadow-md shadow-[#0364FF]/25 hover:shadow-lg hover:shadow-[#0364FF]/35 active:scale-[0.98]",
      text: "text-white",
      iconWrapper: "bg-white border-[#0364FF] group-hover:border-[#005CFF]",
      defaultDot: "fill-[#0364FF] group-hover:fill-[#005CFF]",
    },
    dark: {
      container:
        "bg-[#0F172A] hover:bg-[#1E293B] text-white shadow-md shadow-slate-950/20 hover:shadow-lg hover:shadow-slate-950/30 active:scale-[0.98]",
      text: "text-white",
      iconWrapper: "bg-[#0364FF] group-hover:bg-[#005CFF] border-[#0F172A] group-hover:border-[#1E293B]",
      defaultDot: "fill-white",
    },
    surface: {
      container:
        "bg-[#F2F4F9] hover:bg-white text-[#0F172A] border border-slate-200/80 shadow-xs hover:border-[#6FA6FF]/50 active:scale-[0.98]",
      text: "text-[#0F172A]",
      iconWrapper: "bg-[#0364FF] group-hover:bg-[#005CFF] border-[#F2F4F9]",
      defaultDot: "fill-white",
    },
  }[variant];

  const sizeStyles = {
    default: {
      container: "h-[52px] min-w-[170px] px-2 pl-6 rounded-[40px]",
      text: "text-sm sm:text-[15px]",
      iconWrapper: "w-[42px] h-[42px]",
      svgScale: 1,
    },
    sm: {
      container: "h-[44px] min-w-[145px] px-1.5 pl-4.5 rounded-[36px]",
      text: "text-xs sm:text-[13.5px]",
      iconWrapper: "w-[34px] h-[34px]",
      svgScale: 0.85,
    },
  }[size];

  const isFullWidth = className.includes("w-full");

  const content = (
    <div
      className={`group relative inline-flex items-center justify-between gap-3 transition-all duration-200 select-none cursor-pointer ${
        sizeStyles.container
      } ${styles.container} ${className}`}
    >
      <span
        className={`font-semibold tracking-[0.6px] transition-colors whitespace-nowrap ${sizeStyles.text} ${styles.text}`}
      >
        {text}
      </span>
      <span
        style={iconBgColor ? { backgroundColor: iconBgColor } : undefined}
        className={`shrink-0 rounded-full flex items-center justify-center border-[2.5px] sm:border-[3px] shadow-xs overflow-hidden transition-all duration-200 group-hover:scale-105 ${sizeStyles.iconWrapper} ${styles.iconWrapper}`}
      >
        <svg
          width={Math.round(16 * sizeStyles.svgScale)}
          height={Math.round(19 * sizeStyles.svgScale)}
          viewBox="0 0 16 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 group-hover:animate-[arrow_1s_linear_infinite]"
        >
          <circle
            cx="1.61321"
            cy="1.61321"
            r="1.5"
            style={dotColor ? { fill: dotColor } : undefined}
            className={!dotColor ? styles.defaultDot : undefined}
          />
          <circle
            cx="5.73583"
            cy="1.61321"
            r="1.5"
            style={dotColor ? { fill: dotColor } : undefined}
            className={!dotColor ? styles.defaultDot : undefined}
          />
          <circle
            cx="5.73583"
            cy="5.5566"
            r="1.5"
            style={dotColor ? { fill: dotColor } : undefined}
            className={!dotColor ? styles.defaultDot : undefined}
          />
          <circle
            cx="9.85851"
            cy="5.5566"
            r="1.5"
            style={dotColor ? { fill: dotColor } : undefined}
            className={!dotColor ? styles.defaultDot : undefined}
          />
          <circle
            cx="9.85851"
            cy="9.5"
            r="1.5"
            style={dotColor ? { fill: dotColor } : undefined}
            className={!dotColor ? styles.defaultDot : undefined}
          />
          <circle
            cx="13.9811"
            cy="9.5"
            r="1.5"
            style={dotColor ? { fill: dotColor } : undefined}
            className={!dotColor ? styles.defaultDot : undefined}
          />
          <circle
            cx="5.73583"
            cy="13.4434"
            r="1.5"
            style={dotColor ? { fill: dotColor } : undefined}
            className={!dotColor ? styles.defaultDot : undefined}
          />
          <circle
            cx="9.85851"
            cy="13.4434"
            r="1.5"
            style={dotColor ? { fill: dotColor } : undefined}
            className={!dotColor ? styles.defaultDot : undefined}
          />
          <circle
            cx="1.61321"
            cy="17.3868"
            r="1.5"
            style={dotColor ? { fill: dotColor } : undefined}
            className={!dotColor ? styles.defaultDot : undefined}
          />
          <circle
            cx="5.73583"
            cy="17.3868"
            r="1.5"
            style={dotColor ? { fill: dotColor } : undefined}
            className={!dotColor ? styles.defaultDot : undefined}
          />
        </svg>
      </span>
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={`${isFullWidth ? "block w-full" : "inline-block"} ${containerClassName}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`border-none bg-transparent p-0 cursor-pointer ${
        isFullWidth ? "block w-full" : "inline-block"
      } ${containerClassName}`}
    >
      {content}
    </button>
  );
}

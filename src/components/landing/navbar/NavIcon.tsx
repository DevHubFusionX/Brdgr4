"use client";

import React from "react";
import {
  Zap,
  ShieldCheck,
  FileText,
  Activity,
  Share2,
  Layers,
  CreditCard,
  Lock,
  GraduationCap,
  Globe,
  Building2,
  Users,
  Target,
  Compass,
  TrendingUp,
  BarChart3,
  Cloud,
  Landmark,
  Percent,
  Award,
  Sparkles,
  LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Zap,
  ShieldCheck,
  FileText,
  Activity,
  Share2,
  Layers,
  CreditCard,
  Lock,
  GraduationCap,
  Globe,
  Building2,
  Users,
  Target,
  Compass,
  TrendingUp,
  BarChart3,
  Cloud,
  Landmark,
  Percent,
  Award,
  Sparkles,
};

interface NavIconProps {
  name?: string;
  className?: string;
}

export default function NavIcon({ name, className = "w-4 h-4" }: NavIconProps) {
  if (!name || !ICON_MAP[name]) {
    return <Sparkles className={className} />;
  }
  const IconComponent = ICON_MAP[name];
  return <IconComponent className={className} />;
}

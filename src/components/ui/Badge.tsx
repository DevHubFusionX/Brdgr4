import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "brand" | "slate" | "success";
  className?: string;
}

const variantStyles = {
  brand: "bg-brand/10 text-brand",
  slate: "bg-slate-100 text-slate-600",
  success: "bg-emerald-50 text-emerald-700",
};

export function Badge({ children, variant = "brand", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

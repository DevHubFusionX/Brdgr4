/**
 * BrdgrLogo — inline SVG brand mark
 * Usage: <BrdgrLogo className="h-8 w-auto" />
 */
export function BrdgrLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Brdgr"
    >
      {/* Placeholder wordmark — replace with final brand asset */}
      <text
        x="0"
        y="24"
        fontFamily="Inter, sans-serif"
        fontWeight="800"
        fontSize="28"
        fill="#0364FF"
      >
        Brdgr
      </text>
    </svg>
  );
}

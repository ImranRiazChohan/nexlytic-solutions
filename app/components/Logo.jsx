export default function Logo({ size = 34, showWordmark = true, wordmarkColor = "#fff" }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: size * 0.28 }}>
      <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true">
        <defs>
          <linearGradient id="nexlytic-logo-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6366f1" />
            <stop offset="1" stopColor="#a78bfa" />
          </linearGradient>
        </defs>
        <rect width="40" height="40" rx="11" fill="url(#nexlytic-logo-grad)" />
        <path
          d="M12.5 28V12h3.1l10 11.4V12h2.9v16h-3.1l-10-11.4V28h-2.9z"
          fill="#fff"
        />
      </svg>
      {showWordmark && (
        <span style={{ fontSize: size * 0.62, fontWeight: 900, letterSpacing: "-0.5px", color: wordmarkColor }}>
          Nexlytic
        </span>
      )}
    </span>
  );
}

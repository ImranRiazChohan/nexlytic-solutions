import LogoIcon from "./LogoIcon";

export default function Logo({ size = 34, showWordmark = true }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: size * 0.32 }}>
      <LogoIcon size={size} />
      {showWordmark && (
        <span
          style={{
            fontSize: size * 0.5,
            fontWeight: 900,
            letterSpacing: "-0.4px",
            whiteSpace: "nowrap",
            background: "linear-gradient(135deg, #6366f1 0%, #a78bfa 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Nexlytics Solutions
        </span>
      )}
    </span>
  );
}

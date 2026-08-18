import Image from "next/image";

const LOGO_ASPECT = 697 / 273;

export default function Logo({ size = 34, showWordmark = true, wordmarkColor = "#fff" }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: size * 0.32 }}>
      <Image
        src="/logo.png"
        alt="Nexlytic Solutions logo"
        width={Math.round(size * LOGO_ASPECT)}
        height={size}
        style={{ height: size, width: "auto" }}
      />
      {showWordmark && (
        <span style={{ fontSize: size * 0.62, fontWeight: 900, letterSpacing: "-0.5px", color: wordmarkColor }}>
          Nexlytic
        </span>
      )}
    </span>
  );
}

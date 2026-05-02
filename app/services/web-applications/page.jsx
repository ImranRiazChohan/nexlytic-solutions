"use client";
import Link from "next/link";

const NAV_LINKS = ["About", "Process", "Contact"];

const SERVICES_LIST = [
  { icon: "◈", title: "Mobile Applications", slug: "mobile-applications" },
  { icon: "⬡", title: "Web Applications", slug: "web-applications" },
  { icon: "⬢", title: "Data & AI Services", slug: "data-ai-services" },
];

export default function WebApplicationsPage() {
  return (
    <div style={{ background: "#0a0a0a", color: "#e8e8e8", minHeight: "100vh" }}>

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        height: 64, padding: "0 5%",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: "rgba(10,10,10,0.95)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid #1f1f1f",
      }}>
        <Link href="/" style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.5px", color: "#fff", textDecoration: "none" }}>
          Nexlytic <span style={{ color: "#6366f1" }}>Solutions</span>
        </Link>
        <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
          <div style={{ position: "relative" }}>
            <span style={{ color: "#fff", fontSize: 14 }}>Services</span>
            <div style={{
              position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)",
              marginTop: 8, background: "#111", border: "1px solid #1f1f1f",
              borderRadius: 12, padding: "8px 0", minWidth: 240, opacity: 0,
              pointerEvents: "none", transition: "opacity 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.pointerEvents = "auto"; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = "0"; e.currentTarget.style.pointerEvents = "none"; }}>
              {SERVICES_LIST.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} style={{
                  display: "flex", alignItems: "center", gap: 12,
                  padding: "10px 20px", color: s.slug === "web-applications" ? "#fff" : "#a0a0a0", textDecoration: "none",
                  transition: "all 0.15s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = "#1a1a1a"; e.currentTarget.style.color = "#fff"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = s.slug === "web-applications" ? "#fff" : "#a0a0a0"; }}>
                  <span style={{ fontSize: 16, color: "#6366f1" }}>{s.icon}</span>
                  <span style={{ fontSize: 14 }}>{s.title}</span>
                </Link>
              ))}
            </div>
          </div>
          {NAV_LINKS.map((l) => (
            <Link key={l} href={`/#${l.toLowerCase()}`}
              style={{ color: "#a0a0a0", fontSize: 14, textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = "#fff"}
              onMouseLeave={e => e.target.style.color = "#a0a0a0"}>
              {l}
            </Link>
          ))}
          <Link href="/#contact" style={{
            background: "#6366f1", color: "#fff", borderRadius: 8, padding: "8px 20px", fontSize: 14,
            fontWeight: 500, textDecoration: "none",
          }}>
            Get Started
          </Link>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ paddingTop: 140, paddingBottom: 80, padding: "140px 5% 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "30%", right: "10%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", padding: "4px 12px", borderRadius: 100, background: "#1a1a2e", color: "#6366f1", border: "1px solid #2a2a4a", textTransform: "uppercase", display: "inline-block", marginBottom: 20 }}>
              Web Applications
            </span>
            <h1 style={{ fontSize: "clamp(2rem,4.5vw,3.2rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-2px", color: "#fff", margin: "0 0 20px" }}>
              Web Applications
            </h1>
            <p style={{ fontSize: 15, color: "#6366f1", fontWeight: 500, marginBottom: 16, lineHeight: 1.6 }}>
              Scalable, high-performance web applications built with modern frameworks.
            </p>
            <p style={{ fontSize: 15, color: "#555", lineHeight: 1.8, marginBottom: 36 }}>
              {/* Add your content here */}
            </p>
            <div style={{ display: "flex", gap: 14 }}>
              <Link href="/#contact" style={{ background: "#6366f1", color: "#fff", borderRadius: 10, padding: "13px 28px", fontSize: 15, fontWeight: 600, textDecoration: "none" }}>
                Contact Us →
              </Link>
              <Link href="/" style={{ background: "transparent", color: "#e8e8e8", border: "1px solid #2a2a2a", borderRadius: 10, padding: "13px 28px", fontSize: 15, fontWeight: 500, textDecoration: "none" }}>
                Back to Home
              </Link>
            </div>
          </div>
          <div style={{ borderRadius: 20, overflow: "hidden", border: "1px solid #1a1a1a", aspectRatio: "4/3", background: "#0d0d0d", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {/* Add your hero image or GIF here */}
            <span style={{ color: "#333", fontSize: 14 }}>Add hero image or GIF here</span>
          </div>
        </div>
      </section>

      {/* ── TECH STACK / LOGOS ── */}
      <section style={{ padding: "60px 5%", background: "#080808" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.15em", color: "#6366f1", textTransform: "uppercase", marginBottom: 32 }}>Tech Stack</p>
          <div style={{ display: "flex", gap: 40, justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
            {/* Add your programming logos / tech logos here */}
            {["Next.js", "React", "Node.js", "TypeScript"].map((tech) => (
              <div key={tech} style={{ padding: "20px 32px", background: "#0d0d0d", border: "1px solid #1a1a1a", borderRadius: 12 }}>
                {/* Replace with logo image */}
                <span style={{ color: "#555", fontSize: 14 }}>{tech} logo</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES / WHAT WE OFFER ── */}
      <section style={{ padding: "80px 5%" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.15em", color: "#6366f1", textTransform: "uppercase", marginBottom: 12 }}>What We Offer</p>
          <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 700, color: "#fff", letterSpacing: "-1px", marginBottom: 48 }}>
            {/* Add section title here */}
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 2, background: "#1a1a1a", borderRadius: 16, overflow: "hidden" }}>
            {/* Add feature cards here */}
          </div>
        </div>
      </section>

      {/* ── GIF / ANIMATION SECTION ── */}
      <section style={{ padding: "80px 5%", background: "#080808" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ borderRadius: 20, overflow: "hidden", border: "1px solid #1a1a1a", aspectRatio: "16/7", background: "#0d0d0d", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {/* Add your GIF or animation here */}
            <span style={{ color: "#333", fontSize: 14 }}>Add GIF or animation here</span>
          </div>
        </div>
      </section>

      {/* ── CASE STUDY ── */}
      <section style={{ padding: "80px 5%" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.15em", color: "#6366f1", textTransform: "uppercase", marginBottom: 12 }}>Proven Results</p>
          <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 700, color: "#fff", letterSpacing: "-1px", marginBottom: 48 }}>
            Case Study
          </h2>
          <div style={{ borderRadius: 20, overflow: "hidden", border: "1px solid #1a1a1a", background: "#0d0d0d", padding: "44px 40px" }}>
            {/* Add your case study content here */}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section style={{ padding: "80px 5%", background: "#080808" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.15em", color: "#6366f1", textTransform: "uppercase", marginBottom: 12 }}>How We Work</p>
          <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 700, color: "#fff", letterSpacing: "-1px", marginBottom: 48 }}>
            Our Process
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 2 }}>
            {/* Add process steps here */}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <div style={{ margin: "0 5% 80px", borderRadius: 20, padding: "60px 48px", textAlign: "center", background: "linear-gradient(135deg,#1a1a2e 0%,#16213e 50%,#0f3460 100%)", border: "1px solid #2a2a5a" }}>
        <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 700, color: "#fff", marginBottom: 14, letterSpacing: "-1px" }}>
          Ready to Get Started?
        </h2>
        <p style={{ color: "#8080b0", fontSize: 15, marginBottom: 32 }}>
          Tell us about your project and we'll get back to you within 24 hours.
        </p>
        <Link href="/#contact" style={{ background: "#6366f1", color: "#fff", borderRadius: 10, padding: "13px 36px", fontSize: 15, fontWeight: 600, textDecoration: "none" }}>
          Contact Us →
        </Link>
      </div>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: "1px solid #141414", padding: "28px 5%", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 14 }}>
        <Link href="/" style={{ fontSize: 18, fontWeight: 700, color: "#fff", textDecoration: "none" }}>
          Nexlytic <span style={{ color: "#6366f1" }}>Solutions</span>
        </Link>
        <p style={{ fontSize: 12, color: "#2a2a2a" }}>© 2025 Nexlytic Solutions. All rights reserved.</p>
        <div style={{ display: "flex", gap: 20 }}>
          {NAV_LINKS.map((l) => (
            <Link key={l} href={`/#${l.toLowerCase()}`} style={{ color: "#333", fontSize: 13, textDecoration: "none" }}>
              {l}
            </Link>
          ))}
        </div>
      </footer>
    </div>
  );
}

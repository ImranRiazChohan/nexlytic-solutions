"use client";
import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const VALUES = [
  {
    number: "01",
    title: "Integrity",
    desc: "Honest timelines, clear pricing, no surprises.",
  },
  {
    number: "02",
    title: "Excellence",
    desc: "We don't ship until it meets our standard.",
  },
  {
    number: "03",
    title: "Innovation",
    desc: "Always exploring better ways to build and deliver.",
  },
  {
    number: "04",
    title: "Ownership",
    desc: "We treat your product like our own.",
  },
];

export default function About({ scrollTo }) {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const leftRef = useRef(null);
  const valueRefs = useRef([]);

  useGSAP(() => {
    gsap.set(headerRef.current, { opacity: 0, y: 40 });
    gsap.set(leftRef.current, { opacity: 0, x: -50 });
    valueRefs.current.forEach((el) => {
      if (el) gsap.set(el, { opacity: 0, y: 28 });
    });
  });

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        gsap.to(headerRef.current, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" });
        gsap.to(leftRef.current, { opacity: 1, x: 0, duration: 0.9, ease: "power3.out", delay: 0.2 });
        gsap.to(valueRefs.current.filter(Boolean), {
          opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.12, delay: 0.35,
        });
        observer.disconnect();
      },
      { threshold: 0.05 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-alt"
      style={{ padding: "120px 5%", position: "relative", overflow: "hidden" }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute", top: "40%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: 900, height: 900, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>

        {/* ── Header ── */}
        <div ref={headerRef} style={{ textAlign: "center", marginBottom: 88 }}>

          {/* Badge */}
          <div
            style={{
              display: "inline-flex", alignItems: "center", gap: 9,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 100, padding: "9px 20px",
              fontSize: 13, color: "#888", marginBottom: 36, fontWeight: 500,
            }}
          >
            <span
              style={{
                width: 8, height: 8, borderRadius: "50%",
                background: "#6366f1",
                boxShadow: "0 0 10px rgba(99,102,241,0.8)",
                display: "inline-block", flexShrink: 0,
              }}
            />
            About Nexlytics Solutions
          </div>

          {/* Headline */}
          <h2
            style={{
              fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)",
              fontWeight: 800, color: "#fff",
              letterSpacing: "-0.8px", lineHeight: 1.1, marginBottom: 24,
            }}
          >
            We Build Products<br />
            That Move{" "}
            <span className="about-headline-accent">Startups</span>
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 15, color: "#707070",
              maxWidth: 580, lineHeight: 1.75, margin: "0 auto",
            }}
          >
            A digital agency building data-driven web apps, mobile experiences, and AI
            agents for businesses around the world, so they can scale smarter and move faster.
          </p>
        </div>

        {/* ── Two-column body ── */}
        <div className="about-layout">

          {/* Left — narrative + CTA */}
          <div ref={leftRef}>

            {/* Accent text block with left border */}
            <div
              style={{
                borderLeft: "3px solid #6366f1",
                paddingLeft: 22, marginBottom: 28,
              }}
            >
              <p style={{ fontSize: 16, color: "#c0c0c0", lineHeight: 1.85 }}>
                We&rsquo;re a small team of{" "}
                <strong style={{ color: "#fff", fontWeight: 700 }}>engineers and designers</strong>{" "}
                who&rsquo;d rather ship something{" "}
                <span style={{ color: "#6366f1", fontWeight: 600 }}>solid</span>{" "}
                than pad a proposal with buzzwords.
              </p>
            </div>

            {/* Secondary paragraph */}
            <p style={{ fontSize: 15, color: "#505050", lineHeight: 1.9, marginBottom: 40 }}>
              You&rsquo;ll talk directly to the people writing your code — no account
              managers relaying messages between you and the developers.
            </p>

            {/* CTA row */}
            <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
              <button
                onClick={() => scrollTo("contact")}
                style={{
                  background: "linear-gradient(135deg, #6366f1 0%, #818cf8 100%)",
                  color: "#fff", border: "none", borderRadius: 12,
                  padding: "15px 32px", fontSize: 15, fontWeight: 700,
                  cursor: "pointer",
                  boxShadow: "0 10px 32px rgba(99,102,241,0.4)",
                  transition: "all 0.3s ease", letterSpacing: "-0.2px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 18px 48px rgba(99,102,241,0.55)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 10px 32px rgba(99,102,241,0.4)";
                }}
              >
                Let&rsquo;s Work Together
              </button>

              <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                <span
                  style={{
                    width: 9, height: 9, borderRadius: "50%",
                    background: "#4ade80",
                    boxShadow: "0 0 10px rgba(74,222,128,0.65)",
                    display: "inline-block", flexShrink: 0,
                  }}
                />
                <span style={{ fontSize: 13, color: "#606060" }}>Available for new projects</span>
              </div>
            </div>
          </div>

          {/* Right — 2×2 values grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {VALUES.map((v, i) => (
              <div
                key={i}
                ref={(el) => { valueRefs.current[i] = el; }}
                style={{
                  background: "#0d0d0d",
                  border: "1px solid #191919",
                  borderRadius: 16,
                  padding: "26px 22px",
                  transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#2e2e2e";
                  e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#191919";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    fontSize: 13, fontWeight: 700, color: "#2a2a2a",
                    letterSpacing: "0.08em", marginBottom: 22,
                  }}
                >
                  {v.number}
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#e0e0e0", marginBottom: 10, lineHeight: 1.3 }}>
                  {v.title}
                </h3>
                <p style={{ fontSize: 13, color: "#484848", lineHeight: 1.75 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

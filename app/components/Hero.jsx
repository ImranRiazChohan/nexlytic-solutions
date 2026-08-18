"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ParticleCanvas from "./ParticleCanvas";
import TechStack from "./TechStack";

function HeroMockup() {
  return (
    <div className="hero-mock" aria-hidden="true">
      <div className="hero-mock-bar">
        <span className="hero-mock-dot" />
        <span className="hero-mock-dot" />
        <span className="hero-mock-dot" />
        <span className="hero-mock-url" />
      </div>
      <div className="hero-mock-body">
        <div className="hero-mock-side">
          {[0, 1, 2, 3, 4].map((i) => (
            <span key={i} className={`hero-mock-nav${i === 1 ? " is-active" : ""}`} />
          ))}
        </div>
        <div className="hero-mock-main">
          <div className="hero-mock-stats">
            {[0, 1, 2].map((i) => (
              <div key={i} className="hero-mock-stat">
                <span className="hero-mock-stat-line" style={{ width: "70%" }} />
                <span className="hero-mock-stat-line is-strong" />
              </div>
            ))}
          </div>
          <div className="hero-mock-chart">
            <svg viewBox="0 0 300 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="heroChartFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0 78 L40 60 L80 68 L120 34 L160 50 L200 20 L240 38 L300 12 L300 100 L0 100 Z"
                fill="url(#heroChartFill)"
              />
              <path
                d="M0 78 L40 60 L80 68 L120 34 L160 50 L200 20 L240 38 L300 12"
                fill="none"
                stroke="#818cf8"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero({ scrollTo }) {
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const btn1Ref = useRef(null);
  const btn2Ref = useRef(null);
  const visualRef = useRef(null);
  const techRef = useRef(null);
  const orb1Ref = useRef(null);
  const orb2Ref = useRef(null);
  const orb3Ref = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(badgeRef.current, { opacity: 0, y: -24, duration: 0.8 })
      .from(titleRef.current, { opacity: 0, y: 60, duration: 1 }, "-=0.5")
      .from(subRef.current, { opacity: 0, y: 36, duration: 0.9 }, "-=0.6")
      .from([btn1Ref.current, btn2Ref.current].filter(Boolean), {
        opacity: 0, y: 24, stagger: 0.15, duration: 0.7,
      }, "-=0.5")
      .from(visualRef.current, { opacity: 0, y: 40, scale: 0.97, duration: 0.9 }, "-=0.3")
      .from(techRef.current, { opacity: 0, y: 20, duration: 0.6 }, "-=0.3");

    // Floating orbs
    gsap.to(orb1Ref.current, {
      x: 40, y: -30, scale: 1.12,
      duration: 8, repeat: -1, yoyo: true, ease: "sine.inOut",
    });
    gsap.to(orb2Ref.current, {
      x: -30, y: -40, scale: 1.08,
      duration: 10, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 2,
    });
    gsap.to(orb3Ref.current, {
      x: 20, y: 25, scale: 0.94,
      duration: 6, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1,
    });
  });

  return (
    <section className="hero-section">
      {/* Background orbs */}
      <div
        ref={orb1Ref}
        style={{
          position: "absolute", top: "10%", left: "5%",
          width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        ref={orb2Ref}
        style={{
          position: "absolute", bottom: "5%", right: "8%",
          width: 600, height: 600, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        ref={orb3Ref}
        style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          width: 900, height: 900, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.03) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Grid overlay */}
      <div
        style={{
          position: "absolute", inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      {/* Particle network — floats above grid, behind content */}
      <ParticleCanvas count={72} connected mouseRepel particleOpacity={0.75} />

      <div className="hero-layout">
        <div className="hero-content">
          {/* Badge */}
          <div
            ref={badgeRef}
            className="hero-badge-row"
            style={{
              display: "inline-flex", alignItems: "center", gap: 9,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 100, padding: "9px 20px",
              fontSize: 13, color: "#888", marginBottom: 32, fontWeight: 500,
            }}
          >
            <span
              style={{
                width: 8, height: 8, borderRadius: "50%",
                background: "#6366f1",
                boxShadow: "0 0 10px rgba(99,102,241,0.8)",
                display: "inline-block",
              }}
            />
            Web, Mobile & AI Development Studio
          </div>

          {/* Headline */}
          <h1
            ref={titleRef}
            style={{
              fontSize: "clamp(2rem, 4.6vw, 3.6rem)",
              fontWeight: 800, color: "#ffffff",
              letterSpacing: "-1.5px", lineHeight: 1.12, marginBottom: 24,
            }}
          >
            We Build Web, Mobile &{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #6366f1 0%, #a78bfa 60%, #818cf8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              AI Products That Work
            </span>
          </h1>

          {/* Subtitle */}
          <p
            ref={subRef}
            className="hero-subtitle"
            style={{
              fontSize: 17, color: "#909090",
              maxWidth: 640, lineHeight: 1.8,
            }}
          >
            Nexlytic Solutions is a Karachi-based development studio. We design and build
            websites, mobile apps, and AI-powered tools for businesses that need software
            done right the first time.
          </p>

          {/* Buttons */}
          <div className="hero-btn-row" style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 56 }}>
            <div ref={btn1Ref}>
              <button
                onClick={() => scrollTo("contact")}
                style={{
                  background: "linear-gradient(135deg, #6366f1 0%, #818cf8 100%)",
                  color: "#fff", border: "none", borderRadius: 12,
                  padding: "16px 44px", fontSize: 15, fontWeight: 700,
                  cursor: "pointer",
                  boxShadow: "0 12px 40px rgba(99,102,241,0.4)",
                  transition: "all 0.3s ease", letterSpacing: "-0.3px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 20px 60px rgba(99,102,241,0.55)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 12px 40px rgba(99,102,241,0.4)";
                }}
              >
                Start a Project
              </button>
            </div>
            <div ref={btn2Ref}>
              <button
                onClick={() => scrollTo("services")}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  color: "#d0d0d0",
                  border: "1px solid rgba(255,255,255,0.18)",
                  borderRadius: 12, padding: "16px 44px",
                  fontSize: 15, fontWeight: 600,
                  cursor: "pointer", transition: "all 0.3s ease",
                  letterSpacing: "-0.3px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(99,102,241,0.15)";
                  e.currentTarget.style.borderColor = "rgba(99,102,241,0.5)";
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
                  e.currentTarget.style.color = "#d0d0d0";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                See Our Services
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative product mockup */}
      <div ref={visualRef} className="hero-visual">
        <div className="hero-visual-glow" />
        <HeroMockup />
      </div>

      {/* Tech stack row */}
      <div ref={techRef} className="hero-stats-row">
        <TechStack />
      </div>
    </section>
  );
}

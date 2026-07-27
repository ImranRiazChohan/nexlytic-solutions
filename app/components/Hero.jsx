"use client";
import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ParticleCanvas from "./ParticleCanvas";
import TechStack from "./TechStack";

const STATS = [
  { value: "50+", label: "Projects Delivered" },
  { value: "3+", label: "Years of Experience" },
  { value: "98%", label: "Client Satisfaction" },
];

export default function Hero({ scrollTo }) {
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const btn1Ref = useRef(null);
  const btn2Ref = useRef(null);
  const trustRef = useRef(null);
  const statRefs = useRef([]);
  const imageRef = useRef(null);
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
      .from(trustRef.current, { opacity: 0, y: 16, duration: 0.6 }, "-=0.3")
      .from(statRefs.current.filter(Boolean), {
        opacity: 0, y: 20, stagger: 0.12, duration: 0.5,
      }, "-=0.1")
      .from(imageRef.current, { opacity: 0, y: 40, scale: 0.94, duration: 1.1 }, "-=1.4");

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

    // Gentle float on the hero image
    gsap.to(imageRef.current, {
      y: -18,
      duration: 4.5, repeat: -1, yoyo: true, ease: "sine.inOut",
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
        {/* Left — copy */}
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
            Digital Solutions for Modern Businesses
          </div>

          {/* Headline */}
          <h1
            ref={titleRef}
            style={{
              fontSize: "clamp(2rem, 4.2vw, 3.4rem)",
              fontWeight: 800, color: "#ffffff",
              letterSpacing: "-1.5px", lineHeight: 1.12, marginBottom: 24,
            }}
          >
            A Technical Catalyst for{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #6366f1 0%, #a78bfa 60%, #818cf8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Thoughtful Digital Experiences
            </span>
          </h1>

          {/* Subtitle */}
          <p
            ref={subRef}
            className="hero-subtitle"
            style={{
              fontSize: 17, color: "#909090",
              maxWidth: 560, lineHeight: 1.8,
            }}
          >
            We close the gap between &ldquo;what is&rdquo; and &ldquo;what could be&rdquo; — building intelligent
            digital products that connect and convert through strategic thinking and creative execution.
          </p>

          {/* Buttons */}
          <div className="hero-btn-row" style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 52 }}>
            {/* Entrance animation targets this wrapper, not the button itself —
                keeps GSAP's opacity/transform tween from fighting the button's
                own hover `transition`, which also touches those properties. */}
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
                View Our Work
              </button>
            </div>
          </div>

          {/* Trust indicator */}
          {/* <div
            ref={trustRef}
            className="hero-trust-row"
            style={{ display: "flex", alignItems: "center", gap: 10, color: "#505050", fontSize: 13 }}
          >
            <span
              style={{
                width: 10, height: 10, borderRadius: "50%",
                background: "#4ade80",
                boxShadow: "0 0 12px rgba(74,222,128,0.6)",
                display: "inline-block",
              }}
            />
            Available for new projects · Fast response · Flexible engagements
          </div> */}
        </div>

        {/* Right — hero image */}
        <div ref={imageRef} className="hero-image-col">
          <div className="hero-image-glow" />
          <Image
            src="/Images/HeroImage.png"
            alt="Nexlytic Solutions product mockups — a web dashboard and a mobile finance app interface"
            width={1074}
            height={976}
            preload
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>

      {/* Stats */}
      <div className="hero-stats-row">
        <TechStack/>
        {/* {STATS.map((stat, i) => (
          <div key={i} ref={(el) => { statRefs.current[i] = el; }} style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)",
                fontWeight: 900, letterSpacing: "-1.5px",
                background: "linear-gradient(135deg, #fff 0%, #6366f1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {stat.value}
            </div>
            <div style={{ fontSize: 13, color: "#505050", marginTop: 6, letterSpacing: "0.02em" }}>
              {stat.label}
            </div>
          </div>
        ))} */}
      </div>
    </section>
  );
}

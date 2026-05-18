"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import ParticleCanvas from "./ParticleCanvas";

export default function CTA({ scrollTo }) {
  const sectionRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        gsap.from(innerRef.current, { opacity: 0, y: 50, scale: 0.97, duration: 1, ease: "power3.out" });
        observer.disconnect();
      },
      { threshold: 0.05 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const glowEl = document.querySelector(".cta-glow");
    if (!glowEl) return;
    const anim = gsap.to(glowEl, {
      scale: 1.2, opacity: 0.8, duration: 4,
      repeat: -1, yoyo: true, ease: "sine.inOut",
    });
    return () => anim.kill();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ padding: "80px 5%", position: "relative", overflow: "hidden" }}
    >
      <div
        ref={innerRef}
        style={{
          maxWidth: 900, margin: "0 auto",
          background: "linear-gradient(135deg, rgba(99,102,241,0.1) 0%, rgba(139,92,246,0.06) 100%)",
          border: "1px solid rgba(99,102,241,0.2)",
          borderRadius: 28, padding: "68px 52px",
          textAlign: "center", position: "relative", overflow: "hidden",
        }}
      >
        {/* Subtle floating particles clipped to the CTA box */}
        <ParticleCanvas
          count={32}
          connected={false}
          color="139,92,246"
          speed={0.25}
          particleOpacity={0.45}
        />

        <div
          className="cta-glow"
          style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(circle at 50% 50%, rgba(99,102,241,0.12) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute", top: 0, left: 0, width: 200, height: 200,
            background: "radial-gradient(circle at 0% 0%, rgba(99,102,241,0.15) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute", bottom: 0, right: 0, width: 200, height: 200,
            background: "radial-gradient(circle at 100% 100%, rgba(139,92,246,0.12) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", zIndex: 2 }}>
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
            Ready to Build?
          </div>

          <h2
            style={{
              fontSize: "clamp(1.6rem, 4vw, 2.8rem)",
              fontWeight: 800, color: "#fff",
              letterSpacing: "-0.8px", lineHeight: 1.15, marginBottom: 20,
            }}
          >
            Ready to Transform{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #6366f1 0%, #a78bfa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Your Ideas?
            </span>
          </h2>

          <p
            style={{
              fontSize: 16, color: "#909090",
              maxWidth: 580, lineHeight: 1.75, margin: "0 auto 40px",
            }}
          >
            Let&rsquo;s discuss your project and find the perfect solution for your business needs.
          </p>

          <button
            onClick={() => scrollTo("contact")}
            style={{
              background: "linear-gradient(135deg, #6366f1 0%, #818cf8 100%)",
              color: "#fff", border: "none", borderRadius: 12,
              padding: "18px 52px", fontSize: 16, fontWeight: 700,
              cursor: "pointer",
              boxShadow: "0 12px 40px rgba(99,102,241,0.45)",
              transition: "all 0.3s ease", letterSpacing: "-0.3px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 20px 60px rgba(99,102,241,0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 12px 40px rgba(99,102,241,0.45)";
            }}
          >
            Let&rsquo;s Discuss Your Project
          </button>

          <p style={{ fontSize: 13, color: "#484848", marginTop: 24 }}>
            Available for new projects · Quick response time · Flexible engagement
          </p>
        </div>
      </div>
    </section>
  );
}

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
      style={{ padding: "0 5% 100px", position: "relative", overflow: "hidden" }}
    >
      <div
        ref={innerRef}
        className="cta-banner-layout"
        style={{
          maxWidth: 1200, margin: "0 auto",
          background: "linear-gradient(135deg, rgba(99,102,241,0.1) 0%, rgba(139,92,246,0.06) 100%)",
          border: "1px solid rgba(99,102,241,0.2)",
          borderRadius: 28, padding: "56px 52px",
          position: "relative", overflow: "hidden",
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

        <div style={{ position: "relative", zIndex: 2 }} className="cta-banner-row">
          <div className="cta-banner-copy">
            <h2
              style={{
                fontSize: "clamp(1.6rem, 3.2vw, 2.2rem)",
                fontWeight: 800, color: "#fff",
                letterSpacing: "-0.6px", lineHeight: 1.2, marginBottom: 12,
              }}
            >
              Have a project in mind?
            </h2>
            <p style={{ fontSize: 15, color: "#909090", lineHeight: 1.7 }}>
              Let&rsquo;s build something amazing together.
            </p>
          </div>

          <button
            onClick={() => scrollTo("contact")}
            style={{
              flexShrink: 0,
              background: "linear-gradient(135deg, #6366f1 0%, #818cf8 100%)",
              color: "#fff", border: "none", borderRadius: 12,
              padding: "17px 40px", fontSize: 15, fontWeight: 700,
              cursor: "pointer",
              boxShadow: "0 12px 40px rgba(99,102,241,0.45)",
              transition: "all 0.3s ease", letterSpacing: "-0.3px",
              whiteSpace: "nowrap",
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
            Get In Touch →
          </button>
        </div>
      </div>
    </section>
  );
}

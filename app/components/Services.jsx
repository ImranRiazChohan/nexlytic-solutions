"use client";
import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const SERVICES = [
  {
    icon: "</>",
    title: "Web Development",
    desc: "Modern, responsive and high-performance websites and web applications tailored to your business needs.",
    color: "#6366f1",
    rgb: "99,102,241",
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    desc: "User-friendly, scalable and feature-rich mobile apps for iOS and Android platforms.",
    color: "#6366f1",
    rgb: "99,102,241",
  },
  {
    icon: "🧠",
    title: "Data & AI",
    desc: "Intelligent solutions using data and AI to solve real-world problems and drive better decisions.",
    color: "#6366f1",
    rgb: "99,102,241",
  },
];

export default function Services({ scrollTo }) {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardRefs = useRef([]);

  useGSAP(() => {
    gsap.set(headerRef.current, { opacity: 0, y: 40 });
    cardRefs.current.forEach((el) => {
      if (el) gsap.set(el, { opacity: 0, y: 50 });
    });
  });

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        gsap.to(headerRef.current, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" });
        gsap.to(cardRefs.current.filter(Boolean), {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.14, delay: 0.2,
        });
        observer.disconnect();
      },
      { threshold: 0.05 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-pad" style={{ position: "relative", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute", top: "30%", left: "50%",
          transform: "translate(-50%,-50%)",
          width: 800, height: 800, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <div ref={headerRef} style={{ textAlign: "center", marginBottom: 72 }}>
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
            Our Services
          </div>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)",
              fontWeight: 800, color: "#fff",
              letterSpacing: "-0.8px", lineHeight: 1.1, marginBottom: 20,
            }}
          >
            What We Do
          </h2>
          <p style={{ color: "#707070", fontSize: 15, maxWidth: 560, lineHeight: 1.75, margin: "0 auto" }}>
            End-to-end digital solutions to help your business innovate, automate and scale.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((service, i) => (
            // Outer element carries the GSAP entrance ref (opacity/transform);
            // the inner element carries the hover `transition` (also transform) —
            // kept on separate elements so the two animations don't fight.
            <div key={service.title} ref={(el) => { cardRefs.current[i] = el; }} style={{ height: "100%" }}>
              <div
                style={{
                  height: "100%",
                  display: "flex", flexDirection: "column",
                  background: "#0d0d0d",
                  border: "1px solid #191919",
                  borderRadius: 20, padding: "36px 32px",
                  transition: "border-color 0.35s ease, box-shadow 0.35s ease, transform 0.35s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = service.color + "50";
                  e.currentTarget.style.boxShadow = `0 24px 60px rgba(${service.rgb},0.14)`;
                  e.currentTarget.style.transform = "translateY(-6px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#191919";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      width: 56, height: 56, borderRadius: 16,
                      background: `linear-gradient(135deg, ${service.color} 0%, rgba(${service.rgb},0.6) 100%)`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 24, fontWeight: 700, color: "#fff", marginBottom: 24,
                      boxShadow: `0 10px 28px rgba(${service.rgb},0.35)`,
                    }}
                  >
                    {service.icon}
                  </div>
                  <h3 style={{ fontSize: 20, fontWeight: 800, color: "#fff", marginBottom: 12 }}>
                    {service.title}
                  </h3>
                  <p style={{ fontSize: 14, color: "#707070", lineHeight: 1.8 }}>
                    {service.desc}
                  </p>
                </div>
                <button
                  onClick={() => scrollTo?.("contact")}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    background: "none", border: "none", padding: 0,
                    color: service.color, fontSize: 14, fontWeight: 700,
                    cursor: "pointer", marginTop: 24,
                  }}
                >
                  Get a quote <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

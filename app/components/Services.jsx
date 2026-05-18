"use client";
import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const SERVICES = [
  {
    icon: "🚀",
    title: "Mobile Applications",
    desc: "Native and cross-platform apps for iOS and Android — built for performance and a polished user experience.",
    tags: ["React Native", "Flutter", "iOS & Android"],
    color: "#f59e0b",
  },
  {
    icon: "⚡",
    title: "Web Applications",
    desc: "Scalable, high-performance web applications built with modern frameworks — fast, secure, and SEO-ready.",
    tags: ["Next.js / React", "Node.js", "REST & GraphQL"],
    color: "#6366f1",
  },
  {
    icon: "🧠",
    title: "Data & AI Services",
    desc: "End-to-end data solutions and AI-powered chatbots that drive smarter decisions and automate workflows.",
    tags: ["Data Engineering", "LLM Integration", "BI & Analytics"],
    color: "#10b981",
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardRefs = useRef([]);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Set initial hidden state before first paint
  useGSAP(() => {
    gsap.set(headerRef.current, { opacity: 0, y: 40 });
    cardRefs.current.forEach((el) => {
      if (el) gsap.set(el, { opacity: 0, y: 60 });
    });
  });

  // Reveal with IntersectionObserver when section enters viewport
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        gsap.to(headerRef.current, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" });
        gsap.to(cardRefs.current.filter(Boolean), {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.15, delay: 0.25,
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
      style={{ padding: "120px 5%", position: "relative", overflow: "hidden" }}
    >
      <div
        style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          width: 700, height: 700, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>
        {/* Header */}
        <div ref={headerRef} style={{ textAlign: "center", marginBottom: 80 }}>
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
            Our Expertise
          </div>
          <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.8px", lineHeight: 1.1, marginBottom: 20 }}>
            What Exactly Do We Do?
          </h2>
          <p style={{ color: "#707070", fontSize: 15, maxWidth: 580, lineHeight: 1.75, margin: "0 auto" }}>
            We specialize in building intelligent digital products that solve real business problems.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
          {SERVICES.map((service, i) => {
            const isHovered = hoveredCard === i;
            return (
              <div
                key={i}
                ref={(el) => { cardRefs.current[i] = el; }}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  background: isHovered ? `linear-gradient(135deg, ${service.color}0d 0%, #0d0d0d 100%)` : "#0d0d0d",
                  border: `1px solid ${isHovered ? service.color + "40" : "#1a1a1a"}`,
                  borderRadius: 20, padding: "40px 32px",
                  cursor: "default", position: "relative", overflow: "hidden",
                  transition: "border-color 0.4s ease, background 0.4s ease, box-shadow 0.4s ease",
                  transform: isHovered ? "translateY(-10px)" : "translateY(0)",
                  boxShadow: isHovered ? `0 24px 64px ${service.color}20` : "none",
                }}
              >
                <div style={{ position: "absolute", top: 0, left: "15%", right: "15%", height: 2, background: `linear-gradient(90deg, transparent, ${service.color}, transparent)`, opacity: isHovered ? 1 : 0, transition: "opacity 0.4s ease" }} />
                <div style={{ position: "absolute", top: -50, right: -50, width: 160, height: 160, borderRadius: "50%", background: `radial-gradient(circle, ${service.color}18, transparent 70%)`, opacity: isHovered ? 1 : 0, transition: "opacity 0.4s ease", pointerEvents: "none" }} />

                <div style={{ position: "relative", zIndex: 2 }}>
                  <div style={{ width: 64, height: 64, borderRadius: 18, background: isHovered ? `${service.color}18` : "#111", border: `1px solid ${isHovered ? service.color + "40" : "#1e1e1e"}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30, marginBottom: 24, transition: "all 0.4s ease", transform: isHovered ? "scale(1.12) rotate(-4deg)" : "scale(1) rotate(0deg)" }}>
                    {service.icon}
                  </div>
                  <h3 style={{ fontSize: 20, fontWeight: 800, color: "#fff", marginBottom: 12, lineHeight: 1.3 }}>
                    {service.title}
                  </h3>
                  <p style={{ fontSize: 15, color: isHovered ? "#959595" : "#606060", lineHeight: 1.75, marginBottom: 24, transition: "color 0.3s" }}>
                    {service.desc}
                  </p>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {service.tags.map((tag, j) => (
                      <span key={j} style={{ display: "inline-block", background: `${service.color}12`, border: `1px solid ${service.color}30`, color: service.color, borderRadius: 8, padding: "6px 12px", fontSize: 12, fontWeight: 600, opacity: isHovered ? 1 : 0.65, transition: "opacity 0.3s ease" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

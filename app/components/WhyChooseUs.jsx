"use client";
import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const WHY_REASONS = [
  {
    icon: "⚡",
    title: "Speed to Market",
    desc: "We ship fast without cutting corners. Your MVP in weeks, not quarters.",
    metric: "3×",
    metricLabel: "faster delivery",
    color: "#f59e0b",
  },
  {
    icon: "🔒",
    title: "Production-Grade Code",
    desc: "Scalable, tested, and maintainable — built to handle real users from day one.",
    metric: "99.9%",
    metricLabel: "uptime guaranteed",
    color: "#6366f1",
  },
  {
    icon: "🎯",
    title: "Business-First Thinking",
    desc: "We don't just write code. We solve business problems with technology.",
    metric: "ROI",
    metricLabel: "focused approach",
    color: "#10b981",
  },
  {
    icon: "🤝",
    title: "Transparent Partnership",
    desc: "Weekly demos, shared boards, and direct access to your dev team.",
    metric: "24h",
    metricLabel: "max response time",
    color: "#0ea5e9",
  },
  {
    icon: "🚀",
    title: "Scale-Ready Architecture",
    desc: "Systems designed to grow with you — from 100 to 100,000 users.",
    metric: "100×",
    metricLabel: "scalability built-in",
    color: "#8b5cf6",
  },
  {
    icon: "🛠️",
    title: "Long-Term Support",
    desc: "We stay after launch. Maintenance, updates, new features — always available.",
    metric: "98%",
    metricLabel: "client retention",
    color: "#ef4444",
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardRefs = useRef([]);
  const [hoveredCard, setHoveredCard] = useState(null);

  useGSAP(() => {
    gsap.set(headerRef.current, { opacity: 0, y: 40 });
    cardRefs.current.forEach((el) => {
      if (el) gsap.set(el, { opacity: 0, y: 60 });
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
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.12, delay: 0.25,
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
          width: 800, height: 800, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>
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
            Why Nexlytic
          </div>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)",
              fontWeight: 800, color: "#fff",
              letterSpacing: "-0.8px", lineHeight: 1.1, marginBottom: 20,
            }}
          >
            Why Clients{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #6366f1 0%, #a78bfa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Choose Us
            </span>
          </h2>
          <p style={{ color: "#707070", fontSize: 15, maxWidth: 640, lineHeight: 1.75, margin: "0 auto" }}>
            Not just developers — partners who care about your business outcomes.
          </p>
        </div>

        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}
        >
          {WHY_REASONS.map((reason, i) => {
            const isHovered = hoveredCard === i;
            return (
              <div
                key={i}
                ref={(el) => { cardRefs.current[i] = el; }}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  background: isHovered
                    ? `linear-gradient(135deg, ${reason.color}0d 0%, #0d0d0d 100%)`
                    : "#0d0d0d",
                  border: `1px solid ${isHovered ? reason.color + "40" : "#1a1a1a"}`,
                  borderRadius: 20, padding: "32px 28px",
                  cursor: "default", position: "relative", overflow: "hidden",
                  display: "flex", flexDirection: "column", justifyContent: "space-between",
                  minHeight: 280,
                  transition: "all 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform: isHovered ? "translateY(-10px)" : "translateY(0)",
                  boxShadow: isHovered ? `0 24px 64px ${reason.color}18` : "none",
                }}
              >
                <div
                  style={{
                    position: "absolute", top: 0, left: "20%", right: "20%", height: 2,
                    background: `linear-gradient(90deg, transparent, ${reason.color}, transparent)`,
                    opacity: isHovered ? 1 : 0, transition: "opacity 0.4s ease",
                  }}
                />
                <div
                  style={{
                    position: "absolute", top: -40, right: -40,
                    width: 130, height: 130, borderRadius: "50%",
                    background: `radial-gradient(circle, ${reason.color}18, transparent 70%)`,
                    opacity: isHovered ? 1 : 0, transition: "opacity 0.4s ease",
                    pointerEvents: "none",
                  }}
                />

                <div style={{ position: "relative", zIndex: 2 }}>
                  <div
                    style={{
                      width: 52, height: 52, borderRadius: 15,
                      background: isHovered ? `${reason.color}18` : "#111",
                      border: `1px solid ${isHovered ? reason.color + "40" : "#1e1e1e"}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 24, marginBottom: 18,
                      transition: "all 0.4s ease",
                      transform: isHovered ? "scale(1.12) rotate(-4deg)" : "scale(1) rotate(0deg)",
                    }}
                  >
                    {reason.icon}
                  </div>

                  <h3
                    style={{
                      fontSize: 18, fontWeight: 800,
                      color: isHovered ? "#fff" : "#ccc",
                      marginBottom: 10, transition: "color 0.3s ease",
                    }}
                  >
                    {reason.title}
                  </h3>

                  <p
                    style={{
                      fontSize: 14, color: isHovered ? "#808080" : "#505050",
                      lineHeight: 1.75, transition: "color 0.3s ease",
                    }}
                  >
                    {reason.desc}
                  </p>
                </div>

                <div
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 10,
                    background: `${reason.color}10`,
                    border: `1px solid ${reason.color}28`,
                    borderRadius: 12, padding: "10px 16px", marginTop: 20,
                    opacity: isHovered ? 1 : 0,
                    transform: isHovered ? "translateY(0)" : "translateY(10px)",
                    transition: "all 0.4s ease 0.05s",
                  }}
                >
                  <span style={{ fontSize: 20, fontWeight: 900, color: reason.color, letterSpacing: "-0.5px" }}>
                    {reason.metric}
                  </span>
                  <span style={{ fontSize: 12, color: "#808080", lineHeight: 1.4 }}>
                    {reason.metricLabel}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

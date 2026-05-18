"use client";
import { useRef, useEffect, Fragment } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const STEPS = [
  {
    number: "01",
    title: "Discovery",
    desc: "We dive deep into your business goals, users, and technical requirements to craft a clear, actionable roadmap.",
    icon: "🔍",
    color: "#6366f1",
  },
  {
    number: "02",
    title: "Design",
    desc: "Wireframes, prototypes, and design systems built for your brand — reviewed and refined with your team.",
    icon: "🎨",
    color: "#8b5cf6",
  },
  {
    number: "03",
    title: "Development",
    desc: "Clean, scalable code built in agile sprints with regular demos so you always stay in the loop.",
    icon: "⚙️",
    color: "#0ea5e9",
  },
  {
    number: "04",
    title: "QA & Testing",
    desc: "Rigorous testing across devices, browsers, and edge cases to ensure a flawless user experience.",
    icon: "✅",
    color: "#10b981",
  },
  {
    number: "05",
    title: "Launch",
    desc: "Zero-downtime deployment with live monitoring and rollback safety nets — launch day handled end to end.",
    icon: "🚀",
    color: "#f59e0b",
  },
  {
    number: "06",
    title: "Growth & Support",
    desc: "Post-launch analytics, maintenance, and iterative improvements to keep your product evolving.",
    icon: "📈",
    color: "#ef4444",
  },
];

function hexRgb(hex) {
  return [
    parseInt(hex.slice(1, 3), 16),
    parseInt(hex.slice(3, 5), 16),
    parseInt(hex.slice(5, 7), 16),
  ].join(",");
}

export default function Process() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const lineRef = useRef(null);
  const cardRefs = useRef([]);
  const dotRefs = useRef([]);

  useGSAP(() => {
    gsap.set(headerRef.current, { opacity: 0, y: 40 });
    if (lineRef.current) gsap.set(lineRef.current, { scaleY: 0, transformOrigin: "top center" });

    const mobile = window.innerWidth <= 768;
    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.set(el, mobile
        ? { opacity: 0, y: 28 }
        : { opacity: 0, x: i % 2 === 0 ? -56 : 56 }
      );
    });
    dotRefs.current.forEach((el) => {
      if (el) gsap.set(el, { opacity: 0, scale: 0 });
    });
  });

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        gsap.to(headerRef.current, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" });

        const mobile = window.innerWidth <= 768;

        if (!mobile && lineRef.current) {
          gsap.to(lineRef.current, { scaleY: 1, duration: 1.8, ease: "power2.inOut", delay: 0.3 });
        }

        cardRefs.current.forEach((el, i) => {
          if (!el) return;
          if (mobile) {
            gsap.to(el, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", delay: 0.3 + i * 0.14 });
          } else {
            gsap.to(el, { opacity: 1, x: 0, duration: 0.85, ease: "power3.out", delay: 0.42 + i * 0.17 });
          }
        });

        dotRefs.current.forEach((el, i) => {
          if (el) gsap.to(el, {
            opacity: 1, scale: 1, duration: 0.45, ease: "back.out(2.5)",
            delay: 0.52 + i * 0.17,
          });
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
      {/* Background glow */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%,-50%)",
        width: 800, height: 800, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(99,102,241,0.04) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 2 }}>

        {/* Header */}
        <div ref={headerRef} style={{ textAlign: "center", marginBottom: 96 }}>
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
            How We Work
          </div>
          <h2 style={{
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            fontWeight: 800, color: "#fff",
            letterSpacing: "-1px", lineHeight: 1.1, marginBottom: 20,
          }}>
            From Idea to{" "}
            <span style={{
              background: "linear-gradient(135deg, #6366f1 0%, #a78bfa 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Launch
            </span>
          </h2>
          <p style={{ color: "#707070", fontSize: 15, maxWidth: 520, lineHeight: 1.75, margin: "0 auto" }}>
            A proven {STEPS.length}-step process that turns your vision into a polished, production-ready product.
          </p>
        </div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>

          {/* Vertical line */}
          <div
            ref={lineRef}
            style={{
              position: "absolute",
              left: "calc(50% - 1px)",
              top: 0, bottom: 0,
              width: 2,
              background: "linear-gradient(180deg, #6366f1 0%, #8b5cf6 40%, #0ea5e9 80%, #10b981 100%)",
              zIndex: 1,
            }}
          />

          {/* Steps grid */}
          <div className="process-grid">
            {STEPS.map((step, i) => {
              const isLeft = i % 2 === 0;
              const rgb = hexRgb(step.color);

              const card = (
                <div
                  ref={(el) => { cardRefs.current[i] = el; }}
                  style={{
                    background: "#0d0d0d",
                    border: "1px solid #1a1a1a",
                    borderRadius: 16,
                    padding: "28px 28px 28px 28px",
                    width: "100%",
                    maxWidth: 420,
                    position: "relative",
                    overflow: "hidden",
                    transition: "border-color 0.35s ease, box-shadow 0.35s ease, transform 0.35s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = step.color + "50";
                    e.currentTarget.style.boxShadow = `0 20px 52px rgba(${rgb},0.1)`;
                    e.currentTarget.style.transform = "translateY(-5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#1a1a1a";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {/* Ghost step number */}
                  <div style={{
                    position: "absolute", top: 12, right: 16,
                    fontSize: 56, fontWeight: 900,
                    color: step.color + "0e",
                    lineHeight: 1, userSelect: "none", pointerEvents: "none",
                  }}>
                    {step.number}
                  </div>

                  {/* Top accent line */}
                  <div style={{
                    position: "absolute", top: 0, left: "8%", right: "8%", height: 1,
                    background: `linear-gradient(90deg, transparent, ${step.color}55, transparent)`,
                    pointerEvents: "none",
                  }} />

                  {/* Icon + title row */}
                  <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
                    <div style={{
                      width: 46, height: 46, borderRadius: 14, flexShrink: 0,
                      background: `linear-gradient(135deg, rgba(${rgb},0.18), rgba(${rgb},0.08))`,
                      border: `1px solid rgba(${rgb},0.3)`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 22,
                      boxShadow: `0 0 20px rgba(${rgb},0.15)`,
                    }}>
                      {step.icon}
                    </div>
                    <div>
                      <div style={{
                        fontSize: 10, fontWeight: 700, color: step.color,
                        letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 3,
                      }}>
                        Step {step.number}
                      </div>
                      <h3 style={{ fontSize: 18, fontWeight: 800, color: "#fff", lineHeight: 1.25 }}>
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p style={{ fontSize: 14, color: "#5e5e5e", lineHeight: 1.8 }}>
                    {step.desc}
                  </p>
                </div>
              );

              return (
                <Fragment key={i}>
                  {/* Left slot */}
                  <div className="process-slot-left">
                    {isLeft ? card : null}
                  </div>

                  {/* Center — timeline dot */}
                  <div className="process-slot-center">
                    <div
                      ref={(el) => { dotRefs.current[i] = el; }}
                      style={{
                        width: 14, height: 14, borderRadius: "50%",
                        background: step.color,
                        boxShadow: `0 0 0 5px rgba(${rgb},0.15), 0 0 20px rgba(${rgb},0.35)`,
                        flexShrink: 0,
                      }}
                    />
                  </div>

                  {/* Right slot */}
                  <div className="process-slot-right">
                    {!isLeft ? card : null}
                  </div>
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const TESTIMONIALS = [
  {
    name: "Alex Morgan",
    role: "Product Lead · SaaS Company",
    text: "Nexlytic felt like an extension of our team. Clear communication, solid execution, and no unnecessary back-and-forth.",
    rating: 5,
    initials: "AM",
    color: "#6366f1",
  },
  {
    name: "Priya Shah",
    role: "Founder · Startup",
    text: "They took our idea seriously and helped us shape it into something real. The process was smooth from start to launch.",
    rating: 5,
    initials: "PS",
    color: "#10b981",
  },
  {
    name: "Daniel Brooks",
    role: "Operations Manager · Ecommerce",
    text: "What stood out was their transparency and reliability. We always knew where things stood and what was coming next.",
    rating: 5,
    initials: "DB",
    color: "#f59e0b",
  },
  {
    name: "Sarah Kim",
    role: "Head of Growth · Tech Company",
    text: "Strong execution, thoughtful decisions, and a team that actually listens. We'd happily work with Nexlytic again.",
    rating: 5,
    initials: "SK",
    color: "#0ea5e9",
  },
];

export default function Testimonials() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardWrapRef = useRef(null);
  const cardRef = useRef(null);
  const dotsRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useGSAP(() => {
    gsap.set(headerRef.current, { opacity: 0, y: 40 });
    gsap.set(cardWrapRef.current, { opacity: 0, y: 50 });
    gsap.set(dotsRef.current, { opacity: 0, y: 20 });
  });

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        gsap.to(headerRef.current, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" });
        gsap.to(cardWrapRef.current, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", delay: 0.2 });
        gsap.to(dotsRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", delay: 0.4 });
        observer.disconnect();
      },
      { threshold: 0.05 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const goTo = (index) => {
    if (animating || index === activeIndex) return;
    setAnimating(true);

    gsap.to(cardRef.current, {
      opacity: 0, y: -20, duration: 0.25, ease: "power2.in",
      onComplete: () => {
        setActiveIndex(index);
        gsap.fromTo(
          cardRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1, y: 0, duration: 0.35, ease: "power3.out",
            onComplete: () => setAnimating(false),
          }
        );
      },
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!animating) {
        setActiveIndex((prev) => {
          const next = (prev + 1) % TESTIMONIALS.length;
          if (cardRef.current) {
            gsap.to(cardRef.current, {
              opacity: 0, y: -20, duration: 0.25, ease: "power2.in",
              onComplete: () => {
                gsap.fromTo(cardRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.35, ease: "power3.out" });
              },
            });
          }
          return next;
        });
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [animating]);

  const t = TESTIMONIALS[activeIndex];

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

      <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 2 }}>
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
            What People Say
          </div>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)",
              fontWeight: 800, color: "#fff",
              letterSpacing: "-0.8px", lineHeight: 1.1,
            }}
          >
            What People Say About Working With{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #6366f1 0%, #a78bfa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Nexlytic
            </span>
          </h2>
        </div>

        <div ref={cardWrapRef}>
          <div
            ref={cardRef}
            style={{
              background: "linear-gradient(135deg, rgba(99,102,241,0.07) 0%, #0d0d0d 100%)",
              border: "1px solid rgba(99,102,241,0.18)",
              borderRadius: 24, padding: "48px 44px",
              backdropFilter: "blur(10px)",
              position: "relative", overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute", top: 24, right: 36,
                fontSize: 80, color: "rgba(99,102,241,0.08)",
                fontFamily: "Georgia, serif", lineHeight: 1,
                userSelect: "none", pointerEvents: "none",
              }}
            >
              &ldquo;
            </div>

            <div style={{ marginBottom: 24, display: "flex", gap: 4 }}>
              {Array(t.rating).fill(0).map((_, j) => (
                <span key={j} style={{ color: "#fbbf24", fontSize: 18 }}>★</span>
              ))}
            </div>

            <p
              style={{
                fontSize: 19, color: "#e0e0e0",
                lineHeight: 1.85, marginBottom: 36,
                fontStyle: "italic", fontWeight: 400, maxWidth: 740,
              }}
            >
              &ldquo;{t.text}&rdquo;
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div
                style={{
                  width: 52, height: 52, borderRadius: "50%",
                  background: `linear-gradient(135deg, ${t.color} 0%, ${t.color}99 100%)`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 16, fontWeight: 800, color: "#fff", flexShrink: 0,
                  boxShadow: `0 4px 16px ${t.color}40`,
                }}
              >
                {t.initials}
              </div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 3 }}>
                  {t.name}
                </div>
                <div style={{ fontSize: 13, color: "#606060" }}>{t.role}</div>
              </div>
            </div>
          </div>
        </div>

        <div ref={dotsRef} style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 36 }}>
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: i === activeIndex ? 36 : 8,
                height: 8, borderRadius: 4,
                border: "none",
                background: i === activeIndex ? "#6366f1" : "#252525",
                cursor: "pointer", transition: "all 0.4s ease",
                boxShadow: i === activeIndex ? "0 0 12px rgba(99,102,241,0.5)" : "none",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

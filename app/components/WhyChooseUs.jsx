"use client";
import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const WHY_REASONS = [
  {
    icon: "🚀",
    title: "Innovative Solutions",
    desc: "We use the latest technologies to build future-ready products.",
  },
  {
    icon: "🛡️",
    title: "Quality & Reliability",
    desc: "We follow best practices to ensure high quality and on-time delivery.",
  },
  {
    icon: "👥",
    title: "Client-Centric Approach",
    desc: "Your goals are our priority. We work as your technology partner.",
  },
  {
    icon: "📈",
    title: "Scalable & Future-Ready",
    desc: "We build solutions that grow with your business.",
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const itemRefs = useRef([]);

  useGSAP(() => {
    gsap.set(headerRef.current, { opacity: 0, y: 40 });
    itemRefs.current.forEach((el) => {
      if (el) gsap.set(el, { opacity: 0, y: 40 });
    });
  });

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        gsap.to(headerRef.current, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" });
        gsap.to(itemRefs.current.filter(Boolean), {
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
    <section ref={sectionRef} id="why" className="section-pad" style={{ position: "relative", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          width: 800, height: 800, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 2 }}>
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
            Why Choose Us
          </div>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)",
              fontWeight: 800, color: "#fff",
              letterSpacing: "-0.8px", lineHeight: 1.1, marginBottom: 20,
            }}
          >
            Your Success,{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #6366f1 0%, #a78bfa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Our Promise
            </span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 40 }}>
          {WHY_REASONS.map((reason, i) => (
            <div
              key={reason.title}
              ref={(el) => { itemRefs.current[i] = el; }}
              style={{ textAlign: "center" }}
            >
              <div
                style={{
                  width: 68, height: 68, borderRadius: "50%",
                  border: "1px solid rgba(99,102,241,0.3)",
                  background: "rgba(99,102,241,0.06)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 28, margin: "0 auto 22px",
                }}
              >
                {reason.icon}
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 800, color: "#fff", marginBottom: 10 }}>
                {reason.title}
              </h3>
              <p style={{ fontSize: 13.5, color: "#707070", lineHeight: 1.75, maxWidth: 240, margin: "0 auto" }}>
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

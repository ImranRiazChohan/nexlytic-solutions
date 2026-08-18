"use client";
import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SearchIcon, ClipboardIcon, PencilIcon, CodeIcon, RocketIcon } from "./Icons";

const STEPS = [
  { number: "01", title: "Discover", desc: "We understand your idea, goals and requirements.", Icon: SearchIcon },
  { number: "02", title: "Plan", desc: "We strategize, define scope and create a roadmap.", Icon: ClipboardIcon },
  { number: "03", title: "Design", desc: "We design intuitive and engaging user experiences.", Icon: PencilIcon },
  { number: "04", title: "Develop", desc: "We build robust, scalable and secure solutions.", Icon: CodeIcon },
  { number: "05", title: "Deliver", desc: "We test, deploy and support your product for growth.", Icon: RocketIcon },
];

export default function Process() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const lineRef = useRef(null);
  const nodeRefs = useRef([]);

  useGSAP(() => {
    gsap.set(headerRef.current, { opacity: 0, y: 40 });
    if (lineRef.current) gsap.set(lineRef.current, { scaleX: 0, transformOrigin: "left center" });
    nodeRefs.current.forEach((el) => {
      if (el) gsap.set(el, { opacity: 0, y: 30 });
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
          gsap.to(lineRef.current, { scaleX: 1, duration: 1.4, ease: "power2.inOut", delay: 0.25 });
        }
        gsap.to(nodeRefs.current.filter(Boolean), {
          opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.14, delay: 0.35,
        });

        observer.disconnect();
      },
      { threshold: 0.05 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="process" className="section-pad section-alt" style={{ position: "relative", overflow: "hidden" }}>
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
            Our Process
          </div>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)",
              fontWeight: 800, color: "#fff",
              letterSpacing: "-0.8px", lineHeight: 1.1, marginBottom: 20,
            }}
          >
            How We Work
          </h2>
          <p style={{ color: "#707070", fontSize: 15, maxWidth: 560, lineHeight: 1.75, margin: "0 auto" }}>
            A simple, transparent process to turn your idea into a successful product.
          </p>
        </div>

        {/* Steps row */}
        <div className="process-row">
          <div ref={lineRef} className="process-row-line" />
          {STEPS.map((step, i) => (
            <div
              key={step.number}
              ref={(el) => { nodeRefs.current[i] = el; }}
              className="process-node"
            >
              <div className="process-node-icon">
                <step.Icon size={24} color="#6366f1" strokeWidth={1.6} />
                <span className="process-node-number">{step.number}</span>
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 800, color: "#fff", marginTop: 20, marginBottom: 8 }}>
                {step.title}
              </h3>
              <p className="process-node-desc" style={{ fontSize: 13, color: "#707070", lineHeight: 1.7 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

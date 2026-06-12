"use client";
import { useRef, useState, useEffect, useCallback } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// Place your background image at /public/service-bg.jpg
const SERVICES = [
  {
    label: "MOBILE APPS",
    title: ["Mobile", "Applications"],
    desc: "Native and cross-platform apps for iOS and Android — built for performance and a polished user experience.",
    tags: ["React Native", "Flutter", "iOS & Android"],
    color: "#f59e0b",
    rgb: "245,158,11",
  },
  {
    label: "WEB APPLICATIONS",
    title: ["Web", "Applications"],
    desc: "Scalable, high-performance web applications built with modern frameworks — fast, secure, and SEO-ready.",
    tags: ["Next.js / React", "Node.js", "REST & GraphQL"],
    color: "#6366f1",
    rgb: "99,102,241",
  },
  {
    label: "DATA & AI",
    title: ["Data Science", "& AI"],
    desc: "End-to-end data solutions and AI-powered chatbots that drive smarter decisions and automate workflows.",
    tags: ["Data Engineering", "LLM Integration", "BI & Analytics"],
    color: "#10b981",
    rgb: "16,185,129",
  },
];

const AUTO_DELAY = 5000;

export default function Services() {
  const [active, setActive] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const activeRef = useRef(1);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const sliderRef = useRef(null);
  const contentRefs = useRef([]);
  const timerRef = useRef(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useGSAP(() => {
    gsap.set(headerRef.current, { opacity: 0, y: 40 });
    gsap.set(sliderRef.current, { opacity: 0, y: 40 });
  }, { dependencies: [], revertOnUpdate: false });

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        gsap.to(headerRef.current, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" });
        gsap.to(sliderRef.current, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", delay: 0.2 });
        observer.disconnect();
      },
      { threshold: 0.05 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const changeTo = useCallback((index) => {
    if (index === activeRef.current) return;
    activeRef.current = index;
    setActive(index);
    const entering = contentRefs.current[index];
    if (entering) {
      gsap.fromTo(entering, { y: 28 }, { y: 0, duration: 0.6, ease: "power3.out", delay: 0.36 });
    }
  }, []);

  // Auto-advance — resets whenever user manually picks a slide
  useEffect(() => {
    timerRef.current = setInterval(() => {
      changeTo((activeRef.current + 1) % SERVICES.length);
    }, AUTO_DELAY);
    return () => clearInterval(timerRef.current);
  }, [active, changeTo]);

  const prev = useCallback(
    () => changeTo((activeRef.current - 1 + SERVICES.length) % SERVICES.length),
    [changeTo]
  );
  const next = useCallback(
    () => changeTo((activeRef.current + 1) % SERVICES.length),
    [changeTo]
  );

  const inactiveWidth = isMobile ? 52 : 112;

  return (
    <section
      ref={sectionRef}
      style={{ padding: "120px 0", position: "relative", overflow: "hidden" }}
    >
      {/* Header */}
      <div ref={headerRef} style={{ textAlign: "center", marginBottom: 64, padding: "0 5%" }}>
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
        <h2
          style={{
            fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)",
            fontWeight: 800, color: "#fff",
            letterSpacing: "-0.8px", lineHeight: 1.1, marginBottom: 20,
          }}
        >
          What Exactly Do We Do?
        </h2>
        <p style={{ color: "#707070", fontSize: 15, maxWidth: 580, lineHeight: 1.75, margin: "0 auto" }}>
          We specialize in building intelligent digital products that solve real business problems.
        </p>
      </div>

      {/* Slider */}
      <div
        ref={sliderRef}
        style={{
          display: "flex",
          height: isMobile ? 480 : 560,
          margin: "0 5%",
          borderRadius: 20,
          overflow: "hidden",
          gap: 4,
          boxShadow: "0 40px 100px rgba(0,0,0,0.55)",
        }}
      >
        {SERVICES.map((service, i) => {
          const isActive = i === active;

          return (
            <div
              key={i}
              onClick={() => !isActive && changeTo(i)}
              style={{
                flex: isActive ? "1" : `0 0 ${inactiveWidth}px`,
                transition: "flex 0.85s cubic-bezier(0.77, 0, 0.175, 1)",
                position: "relative",
                overflow: "hidden",
                cursor: isActive ? "default" : "pointer",
                borderRadius: 14,
                background: "#080808",
                minWidth: 0,
              }}
            >
              {/* ── Full-width background image ── */}
              <div
                style={{
                  position: "absolute", inset: 0,
                  backgroundImage: "url(/service-bg.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: isActive ? 0.82 : 0.35,
                  transform: isActive ? "scale(1)" : "scale(1.06)",
                  transition: "opacity 0.85s ease, transform 0.85s ease",
                }}
              />

              {/* ── Active: left-gradient overlay (image shows through on right) ── */}
              {isActive && (
                <div
                  style={{
                    position: "absolute", inset: 0, zIndex: 1,
                    background: `linear-gradient(to right,
                      rgba(0,0,0,0.92) 0%,
                      rgba(0,0,0,0.75) 28%,
                      rgba(0,0,0,0.28) 55%,
                      rgba(0,0,0,0.04) 100%)`,
                  }}
                />
              )}

              {/* ── Active: top color accent line ── */}
              {isActive && (
                <div
                  style={{
                    position: "absolute", top: 0, left: 0, right: 0,
                    height: 3, zIndex: 3,
                    background: `linear-gradient(90deg, ${service.color} 0%, transparent 65%)`,
                    opacity: 0.85,
                  }}
                />
              )}

              {/* ── Inactive: glassmorphism overlay ── */}
              {!isActive && (
                <>
                  {/* Frosted base layer */}
                  <div
                    style={{
                      position: "absolute", inset: 0, zIndex: 1,
                      background: "rgba(8,8,12,0.55)",
                      backdropFilter: "blur(18px) saturate(1.4)",
                      WebkitBackdropFilter: "blur(18px) saturate(1.4)",
                    }}
                  />
                  {/* Glass border highlight — left edge */}
                  <div
                    style={{
                      position: "absolute", top: 0, left: 0, bottom: 0,
                      width: 1, zIndex: 2,
                      background: "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 50%, transparent 100%)",
                    }}
                  />
                  {/* Glass border highlight — right edge */}
                  <div
                    style={{
                      position: "absolute", top: 0, right: 0, bottom: 0,
                      width: 1, zIndex: 2,
                      background: "linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.03) 50%, transparent 100%)",
                    }}
                  />
                  {/* Top inner highlight (glass sheen) */}
                  <div
                    style={{
                      position: "absolute", top: 0, left: 0, right: 0,
                      height: 60, zIndex: 2,
                      background: "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)",
                    }}
                  />
                  {/* Subtle service-color tint at bottom */}
                  <div
                    style={{
                      position: "absolute", bottom: 0, left: 0, right: 0,
                      height: 120, zIndex: 2,
                      background: `linear-gradient(0deg, rgba(${service.rgb},0.08) 0%, transparent 100%)`,
                    }}
                  />
                </>
              )}

              {/* ── Inactive: arrow + vertical label ── */}
              <div
                style={{
                  position: "absolute", inset: 0, zIndex: 4,
                  display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "space-between",
                  padding: "24px 0 28px",
                  opacity: isActive ? 0 : 1,
                  transition: isActive ? "opacity 0.2s ease" : "opacity 0.35s ease 0.3s",
                  pointerEvents: isActive ? "none" : "auto",
                }}
              >
                <div
                  style={{
                    width: 34, height: 34, borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,0.15)",
                    background: "rgba(255,255,255,0.05)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "rgba(255,255,255,0.55)", fontSize: 14,
                  }}
                >
                  →
                </div>
                {!isMobile && (
                  <div
                    style={{
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                      fontSize: 9, fontWeight: 700,
                      color: "rgba(255,255,255,0.32)",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {service.label}
                  </div>
                )}
              </div>

              {/* ── Active: slide content ── */}
              <div
                ref={(el) => { contentRefs.current[i] = el; }}
                style={{
                  position: "absolute", inset: 0, zIndex: 5,
                  padding: isMobile ? "32px 28px 28px" : "44px 52px 40px",
                  display: "flex", flexDirection: "column",
                  justifyContent: "space-between",
                  opacity: isActive ? 1 : 0,
                  transition: isActive ? "opacity 0.45s ease 0.3s" : "opacity 0.18s ease",
                  pointerEvents: isActive ? "auto" : "none",
                }}
              >
                {/* Top: line + nav arrows */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div
                    style={{
                      flex: 1, height: 1, marginRight: 20,
                      background: "linear-gradient(to right, rgba(255,255,255,0.3), rgba(255,255,255,0.05))",
                    }}
                  />
                  <div style={{ display: "flex", gap: 10 }}>
                    {[{ arrow: "←", fn: prev }, { arrow: "→", fn: next }].map(({ arrow, fn }) => (
                      <button
                        key={arrow}
                        onClick={(e) => { e.stopPropagation(); fn(); }}
                        style={{
                          width: 38, height: 38, borderRadius: "50%",
                          border: "1px solid rgba(255,255,255,0.2)",
                          background: "rgba(255,255,255,0.08)",
                          backdropFilter: "blur(8px)",
                          WebkitBackdropFilter: "blur(8px)",
                          color: "#fff", cursor: "pointer",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontSize: 15, transition: "all 0.25s ease", flexShrink: 0,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "rgba(255,255,255,0.18)";
                          e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                          e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                        }}
                      >
                        {arrow}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Title + description + CTA */}
                <div>
                  <h2
                    style={{
                      fontSize: isMobile ? "clamp(2rem, 8vw, 2.8rem)" : "clamp(2.4rem, 4.5vw, 3.8rem)",
                      fontWeight: 900, color: "#fff",
                      lineHeight: 1.05, marginBottom: 16,
                      letterSpacing: "-1.5px",
                      textTransform: "uppercase",
                    }}
                  >
                    {service.title[0]}<br />{service.title[1]}
                  </h2>
                  <p
                    style={{
                      fontSize: 15, color: "rgba(255,255,255,0.68)",
                      lineHeight: 1.8, maxWidth: 420, marginBottom: 28,
                    }}
                  >
                    {service.desc}
                  </p>
                  <button
                    style={{
                      background: service.color,
                      color: "#fff", border: "none",
                      borderRadius: 100, padding: "13px 34px",
                      fontSize: 12, fontWeight: 700, cursor: "pointer",
                      letterSpacing: "0.1em", textTransform: "uppercase",
                      boxShadow: `0 8px 28px rgba(${service.rgb},0.4)`,
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = `0 14px 40px rgba(${service.rgb},0.62)`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = `0 8px 28px rgba(${service.rgb},0.4)`;
                    }}
                  >
                    Learn More
                  </button>
                </div>

                {/* Bottom: tags + counter + auto-progress dots */}
                <div
                  style={{
                    display: "flex", alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap", gap: 12,
                  }}
                >
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {service.tags.map((tag, j) => (
                      <span
                        key={j}
                        style={{
                          background: "rgba(255,255,255,0.08)",
                          backdropFilter: "blur(8px)",
                          WebkitBackdropFilter: "blur(8px)",
                          border: "1px solid rgba(255,255,255,0.13)",
                          color: "rgba(255,255,255,0.65)",
                          borderRadius: 8, padding: "6px 14px",
                          fontSize: 12, fontWeight: 600,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 14, flexShrink: 0 }}>
                    {/* Slide dots */}
                    <div style={{ display: "flex", gap: 6 }}>
                      {SERVICES.map((_, di) => (
                        <button
                          key={di}
                          onClick={(e) => { e.stopPropagation(); changeTo(di); }}
                          style={{
                            width: di === active ? 20 : 6,
                            height: 6, borderRadius: 3, border: "none", cursor: "pointer",
                            background: di === active ? service.color : "rgba(255,255,255,0.2)",
                            transition: "all 0.4s ease",
                            boxShadow: di === active ? `0 0 8px rgba(${service.rgb},0.6)` : "none",
                          }}
                        />
                      ))}
                    </div>
                    <span style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.22)" }}>
                      {String(i + 1).padStart(2, "0")} / {String(SERVICES.length).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

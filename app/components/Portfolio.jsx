"use client";
import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";

// Case-study routes don't exist yet — swap `href` once the pages land.
const PROJECTS = [
  {
    title: "FinTrack Dashboard",
    tag: "Web Application",
    color: "#6366f1",
    rgb: "99,102,241",
    desc: "A comprehensive finance dashboard for SMEs to track and manage their financial performance.",
    href: "#work",
    mock: "dashboard",
  },
  {
    title: "Healthify App",
    tag: "Mobile App",
    color: "#a78bfa",
    rgb: "167,139,250",
    desc: "A health & fitness mobile app that helps users track workouts, nutrition and progress.",
    href: "#work",
    mock: "phones",
  },
  {
    title: "AI Support Assistant",
    tag: "AI Solution",
    color: "#818cf8",
    rgb: "129,140,248",
    desc: "An intelligent assistant that automates customer support and improves response time.",
    href: "#work",
    mock: "chat",
  },
];

/* ── Decorative UI mockups (pure markup, no assets) ────────────── */

function DashboardMock() {
  return (
    <div className="pf-dash" aria-hidden="true">
      <div className="pf-dash-side">
        <span className="pf-dash-logo" />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <span key={i} className={`pf-dash-nav${i === 1 ? " is-active" : ""}`} />
        ))}
      </div>

      <div className="pf-dash-main">
        <div className="pf-dash-top">
          <span className="pf-line" style={{ width: "34%" }} />
          <span className="pf-dash-avatar" />
        </div>

        <div className="pf-dash-chart">
          <svg viewBox="0 0 200 76" preserveAspectRatio="none" className="pf-dash-svg">
            <defs>
              <linearGradient id="pfArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 62 L26 44 L52 52 L78 26 L104 38 L130 16 L156 30 L200 10 L200 76 L0 76 Z"
              fill="url(#pfArea)"
            />
            <path
              d="M0 62 L26 44 L52 52 L78 26 L104 38 L130 16 L156 30 L200 10"
              fill="none"
              stroke="#818cf8"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          <div className="pf-dash-bars">
            {[38, 62, 46, 78, 54, 88, 40].map((h, i) => (
              <span key={i} style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>

        <div className="pf-dash-stats">
          {[0, 1, 2].map((i) => (
            <div key={i} className="pf-dash-stat">
              <span className="pf-line" style={{ width: "70%" }} />
              <span className="pf-line pf-line-strong" style={{ width: "45%" }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PhonesMock() {
  return (
    <div className="pf-phones" aria-hidden="true">
      <div className="pf-phone">
        <span className="pf-phone-notch" />
        <div className="pf-ring" />
        <span className="pf-line" style={{ width: "70%" }} />
        <span className="pf-line" style={{ width: "48%" }} />
      </div>

      <div className="pf-phone pf-phone-lead">
        <span className="pf-phone-notch" />
        <span className="pf-line pf-line-strong" style={{ width: "62%" }} />
        <div className="pf-phone-bars">
          {[46, 72, 58, 90, 66].map((h, i) => (
            <span key={i} style={{ height: `${h}%` }} />
          ))}
        </div>
        <span className="pf-line" style={{ width: "80%" }} />
        <span className="pf-line" style={{ width: "55%" }} />
      </div>

      <div className="pf-phone">
        <span className="pf-phone-notch" />
        {[0, 1, 2].map((i) => (
          <div key={i} className="pf-phone-row">
            <span className="pf-dot" />
            <span className="pf-line" style={{ width: "62%" }} />
          </div>
        ))}
      </div>
    </div>
  );
}

function ChatMock() {
  return (
    <div className="pf-chat" aria-hidden="true">
      <div className="pf-chat-brand">
        <div className="portfolio-chat-avatar pf-chat-avatar" />
        <span className="pf-line" style={{ width: 56 }} />
      </div>

      <div className="pf-chat-thread">
        {[0, 1, 2].map((i) => (
          <div key={i} className="pf-chat-msg">
            <span className="pf-dot" />
            <div className="pf-chat-lines">
              <span className="pf-line pf-line-strong" style={{ width: "58%" }} />
              <span className="pf-line" style={{ width: "88%" }} />
              <span className="pf-line" style={{ width: "70%" }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const MOCKS = { dashboard: DashboardMock, phones: PhonesMock, chat: ChatMock };

export default function Portfolio() {
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
    <section ref={sectionRef} id="work" className="section-pad" style={{ position: "relative", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute", top: "40%", left: "50%",
          transform: "translate(-50%,-50%)",
          width: 800, height: 800, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <div className="portfolio-layout">
          {/* Left — copy */}
          <div ref={headerRef} className="portfolio-intro">
            <div
              style={{
                fontSize: 13, fontWeight: 700, color: "#6366f1",
                letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 22,
              }}
            >
              Our Work
            </div>
            <h2
              style={{
                fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)",
                fontWeight: 800, color: "#fff",
                letterSpacing: "-0.8px", lineHeight: 1.15, marginBottom: 20,
              }}
            >
              Solutions That Drive Impact
            </h2>
            <p style={{ color: "#707070", fontSize: 15, lineHeight: 1.75, marginBottom: 36 }}>
              We build digital products that solve real problems and create real value.
            </p>
            <Link
              href="#work"
              style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                background: "rgba(255,255,255,0.05)",
                color: "#d0d0d0",
                border: "1px solid rgba(255,255,255,0.18)",
                borderRadius: 12, padding: "15px 30px",
                fontSize: 15, fontWeight: 600, textDecoration: "none",
                transition: "all 0.3s ease", letterSpacing: "-0.3px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(99,102,241,0.15)";
                e.currentTarget.style.borderColor = "rgba(99,102,241,0.5)";
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
                e.currentTarget.style.color = "#d0d0d0";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              View All Projects <span aria-hidden="true">↗</span>
            </Link>
          </div>

          {/* Right — project cards */}
          <div className="portfolio-grid">
            {PROJECTS.map((project, i) => {
              const Mock = MOCKS[project.mock];
              return (
                // Outer element carries the GSAP entrance ref (opacity/transform);
                // the inner element owns the CSS hover transition (also transform)
                // so the two animations don't fight.
                <div key={project.title} ref={(el) => { cardRefs.current[i] = el; }}>
                  <div
                    className="portfolio-card"
                    style={{ "--pf-accent": project.color, "--pf-accent-rgb": project.rgb }}
                  >
                    <div className="portfolio-thumb">
                      <Mock />
                    </div>

                    <div className="portfolio-card-head">
                      <h3 style={{ fontSize: 18, fontWeight: 800, color: "#fff", letterSpacing: "-0.3px" }}>
                        {project.title}
                      </h3>
                      <span className="portfolio-tag">{project.tag}</span>
                    </div>

                    <p style={{ fontSize: 14, color: "#707070", lineHeight: 1.8, marginBottom: 20 }}>
                      {project.desc}
                    </p>

                    <Link href={project.href} className="portfolio-link">
                      View Case Study <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

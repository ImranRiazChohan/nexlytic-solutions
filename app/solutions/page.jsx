"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = ["Services", "Solutions", "About", "Process", "Contact"];

const SOLUTIONS = [
  {
    id: "startup-launchpad",
    badge: "For Startups",
    badgeColor: "#6366f1",
    icon: "🚀",
    title: "Startup Launchpad",
    tagline: "Go from idea to live product in weeks, not months.",
    desc: "We help early-stage startups validate ideas fast, build MVPs with production-grade code, and launch with a design that earns user trust from day one.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80",
    outcomes: ["MVP in 6–10 weeks", "Investor-ready UI", "Scalable architecture from day 1"],
    services: ["Web Development", "UI/UX Design", "AI Chatbot & Agents"],
    caseStudy: {
      metric: "3×",
      label: "faster time-to-market vs. in-house teams",
    },
  },
  {
    id: "enterprise-data",
    badge: "For Enterprises",
    badgeColor: "#0ea5e9",
    icon: "📊",
    title: "Enterprise Data Intelligence",
    tagline: "Turn raw data into decisions that drive revenue.",
    desc: "From data pipelines to executive dashboards, we build the infrastructure that transforms scattered business data into a unified intelligence layer.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    outcomes: ["Unified BI dashboards", "Real-time ETL pipelines", "Predictive analytics models"],
    services: ["Data Services", "Web Development"],
    caseStudy: {
      metric: "60%",
      label: "reduction in manual reporting time",
    },
  },
  {
    id: "ai-automation",
    badge: "AI-Powered",
    badgeColor: "#8b5cf6",
    icon: "🤖",
    title: "AI Automation Suite",
    tagline: "Automate repetitive work. Amplify your team.",
    desc: "We design and deploy custom AI agents, LLM-powered chatbots, and workflow automation systems that handle the grunt work so your team can focus on what matters.",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
    outcomes: ["24/7 AI customer support", "Lead qualification automation", "Internal workflow bots"],
    services: ["AI Chatbot & Agents", "Data Services"],
    caseStudy: {
      metric: "80%",
      label: "of support tickets handled without human input",
    },
  },
  {
    id: "brand-digital",
    badge: "Full Brand",
    badgeColor: "#f59e0b",
    icon: "✦",
    title: "Brand & Digital Presence",
    tagline: "Make a first impression that converts.",
    desc: "A complete brand and web overhaul — from logo and identity to a stunning website and social media kit. Everything aligned, consistent, and built to grow.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    outcomes: ["Complete brand identity", "High-converting landing pages", "Social media creative system"],
    services: ["Graphics Designing", "UI/UX Design", "Web Development"],
    caseStudy: {
      metric: "2.4×",
      label: "increase in conversion rate after redesign",
    },
  },
  {
    id: "mobile-first",
    badge: "Mobile",
    badgeColor: "#10b981",
    icon: "◇",
    title: "Mobile-First Product",
    tagline: "Your product in every pocket.",
    desc: "We build polished iOS and Android apps — cross-platform or native — with performance that feels premium and UX that keeps users coming back.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    outcomes: ["iOS & Android launch", "Offline-first architecture", "App Store optimization"],
    services: ["Mobile App Development", "UI/UX Design"],
    caseStudy: {
      metric: "4.8★",
      label: "average App Store rating across client apps",
    },
  },
  {
    id: "scale-ops",
    badge: "Scale-Up",
    badgeColor: "#ef4444",
    icon: "⬢",
    title: "Scale-Up Operations",
    tagline: "Built for growth. Ready for what's next.",
    desc: "For businesses scaling fast, we embed as a technical partner — refactoring legacy systems, adding new product surfaces, and building the infrastructure to handle 10× the load.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    outcomes: ["Legacy system modernization", "Performance optimization", "Team augmentation"],
    services: ["Web Development", "Data Services", "Mobile App Development"],
    caseStudy: {
      metric: "99.9%",
      label: "uptime achieved post-infrastructure rebuild",
    },
  },
];

const INDUSTRIES = [
  { icon: "🏥", label: "Healthcare" },
  { icon: "🏦", label: "Fintech" },
  { icon: "🛒", label: "E-Commerce" },
  { icon: "🎓", label: "EdTech" },
  { icon: "🏗️", label: "Real Estate" },
  { icon: "📦", label: "Logistics" },
  { icon: "🍽️", label: "F&B" },
  { icon: "⚖️", label: "Legal Tech" },
];

export default function SolutionsPage() {
  const [scrolled, setScrolled] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const filters = ["All", "Startup", "Enterprise", "AI-Powered", "Mobile", "Brand"];
  const filterMap = {
    All: () => true,
    Startup: (s) => s.badge === "For Startups",
    Enterprise: (s) => s.badge === "For Enterprises",
    "AI-Powered": (s) => s.badge === "AI-Powered",
    Mobile: (s) => s.badge === "Mobile",
    Brand: (s) => s.badge === "Full Brand",
  };

  const filtered = SOLUTIONS.filter(filterMap[activeFilter] || (() => true));

  return (
    <div style={{ background: "#0a0a0a", color: "#e8e8e8", minHeight: "100vh" }}>

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        height: 64, padding: "0 5%",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled ? "rgba(10,10,10,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #1f1f1f" : "none",
        transition: "all 0.3s ease",
      }}>
        <Link href="/" style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.5px", color: "#fff", textDecoration: "none" }}>
          Nexlytic <span style={{ color: "#6366f1" }}>Solutions</span>
        </Link>
        <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {NAV_LINKS.map((l) => (
            <Link key={l}
              href={l === "Solutions" ? "/solutions" : `/#${l.toLowerCase()}`}
              style={{
                color: l === "Solutions" ? "#fff" : "#a0a0a0",
                fontSize: 14, textDecoration: "none", transition: "color 0.2s",
              }}>
              {l}
            </Link>
          ))}
          <Link href="/#contact" style={{
            background: "#6366f1", color: "#fff", border: "none",
            borderRadius: 8, padding: "8px 20px", fontSize: 14,
            fontWeight: 500, cursor: "pointer", textDecoration: "none",
          }}>
            Get Started
          </Link>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{
        minHeight: "55vh", display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        textAlign: "center", padding: "100px 5% 60px", position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
          width: 600, height: 600, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "#111", border: "1px solid #2a2a2a",
          borderRadius: 100, padding: "6px 16px",
          fontSize: 13, color: "#a0a0a0", marginBottom: 28,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#6366f1", display: "inline-block" }} />
          Tailored for Your Business
        </div>
        <h1 style={{
          fontSize: "clamp(2rem,5.5vw,3.6rem)", fontWeight: 800,
          lineHeight: 1.1, letterSpacing: "-2px", color: "#fff",
          margin: "0 0 20px", maxWidth: 720,
        }}>
          Solutions Built Around<br />
          <span style={{ color: "#6366f1" }}>Your Goals</span>
        </h1>
        <p style={{ fontSize: 16, color: "#606060", maxWidth: 480, lineHeight: 1.75 }}>
          Not just services — complete solution packages designed around your industry, stage, and objectives.
        </p>
      </section>

      {/* ── FILTER BAR ── */}
      <div style={{ padding: "0 5% 48px", display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
        {filters.map((f) => (
          <button key={f} onClick={() => setActiveFilter(f)} style={{
            background: activeFilter === f ? "#6366f1" : "#111",
            color: activeFilter === f ? "#fff" : "#606060",
            border: `1px solid ${activeFilter === f ? "#6366f1" : "#1f1f1f"}`,
            borderRadius: 100, padding: "7px 18px", fontSize: 13,
            fontWeight: 500, cursor: "pointer", transition: "all 0.2s",
          }}>
            {f}
          </button>
        ))}
      </div>

      {/* ── SOLUTIONS GRID ── */}
      <section style={{ padding: "0 5% 100px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexDirection: "column", gap: 2 }}>
          {filtered.map((sol, i) => (
            <div key={sol.id} style={{
              display: "grid",
              gridTemplateColumns: i % 2 === 0 ? "1fr 420px" : "420px 1fr",
              gap: 0, borderRadius: 20, overflow: "hidden",
              border: "1px solid #1a1a1a", marginBottom: 28,
              background: "#0d0d0d",
            }}>
              {/* Content */}
              <div style={{
                padding: "48px 44px",
                order: i % 2 === 0 ? 1 : 2,
                display: "flex", flexDirection: "column", justifyContent: "space-between",
              }}>
                <div>
                  <span style={{
                    fontSize: 11, fontWeight: 600, letterSpacing: "0.1em",
                    padding: "4px 12px", borderRadius: 100,
                    background: `${sol.badgeColor}20`, color: sol.badgeColor,
                    border: `1px solid ${sol.badgeColor}40`,
                    textTransform: "uppercase", display: "inline-block", marginBottom: 20,
                  }}>{sol.badge}</span>
                  <h2 style={{ fontSize: "clamp(1.4rem,2.5vw,1.9rem)", fontWeight: 700, color: "#fff", letterSpacing: "-1px", marginBottom: 10 }}>
                    {sol.title}
                  </h2>
                  <p style={{ fontSize: 14, color: sol.badgeColor, fontWeight: 500, marginBottom: 14 }}>
                    {sol.tagline}
                  </p>
                  <p style={{ fontSize: 14, color: "#555", lineHeight: 1.8, marginBottom: 24 }}>
                    {sol.desc}
                  </p>
                  <div style={{ marginBottom: 24 }}>
                    <p style={{ fontSize: 11, color: "#333", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>Key Outcomes</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                      {sol.outcomes.map((o) => (
                        <div key={o} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <div style={{ width: 5, height: 5, borderRadius: "50%", background: sol.badgeColor, flexShrink: 0 }} />
                          <span style={{ fontSize: 13, color: "#808080" }}>{o}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 28 }}>
                    {sol.services.map((s) => (
                      <span key={s} style={{
                        fontSize: 11, padding: "4px 10px", borderRadius: 100,
                        background: "#1a1a1a", color: "#606060", border: "1px solid #222",
                      }}>{s}</span>
                    ))}
                  </div>
                </div>
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <Link href={`/services/${sol.id}`} style={{
                    background: sol.badgeColor, color: "#fff", border: "none",
                    borderRadius: 8, padding: "10px 22px", fontSize: 13,
                    fontWeight: 600, cursor: "pointer", textDecoration: "none",
                    display: "inline-block",
                  }}>
                    Learn More →
                  </Link>
                  <Link href="/#contact" style={{
                    background: "transparent", color: "#606060",
                    fontSize: 13, cursor: "pointer", textDecoration: "none",
                  }}>
                    Get a Quote
                  </Link>
                </div>
              </div>

              {/* Image + Stat */}
              <div style={{
                position: "relative", order: i % 2 === 0 ? 2 : 1,
                minHeight: 340, overflow: "hidden",
              }}>
                <img
                  src={sol.image}
                  alt={sol.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  loading="lazy"
                />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(135deg, rgba(10,10,10,0.5) 0%, transparent 60%)",
                }} />
                {/* Floating stat */}
                <div style={{
                  position: "absolute", bottom: 20, right: 20,
                  background: "rgba(10,10,10,0.88)", backdropFilter: "blur(12px)",
                  border: "1px solid #2a2a2a", borderRadius: 12,
                  padding: "14px 18px", textAlign: "center", minWidth: 110,
                }}>
                  <div style={{ fontSize: 22, fontWeight: 800, color: sol.badgeColor, letterSpacing: "-1px" }}>
                    {sol.caseStudy.metric}
                  </div>
                  <div style={{ fontSize: 11, color: "#555", lineHeight: 1.5, marginTop: 4, maxWidth: 100 }}>
                    {sol.caseStudy.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section style={{ padding: "80px 5%", background: "#080808", textAlign: "center" }}>
        <p style={{ fontSize: 11, letterSpacing: "0.15em", color: "#6366f1", textTransform: "uppercase", marginBottom: 12 }}>Industries We Serve</p>
        <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 700, color: "#fff", letterSpacing: "-1px", marginBottom: 48 }}>
          Experience Across Every Sector
        </h2>
        <div style={{
          maxWidth: 900, margin: "0 auto",
          display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 2,
        }}>
          {INDUSTRIES.map((ind) => (
            <div key={ind.label} style={{
              padding: "24px 16px", background: "#0d0d0d",
              border: "1px solid #141414", textAlign: "center",
              transition: "border-color 0.2s", cursor: "default",
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "#6366f1"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "#141414"}
            >
              <div style={{ fontSize: 28, marginBottom: 10 }}>{ind.icon}</div>
              <div style={{ fontSize: 13, color: "#555", fontWeight: 500 }}>{ind.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <div style={{
        margin: "80px 5%", borderRadius: 20, padding: "60px 48px", textAlign: "center",
        background: "linear-gradient(135deg,#1a1a2e 0%,#16213e 50%,#0f3460 100%)",
        border: "1px solid #2a2a5a",
      }}>
        <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 700, color: "#fff", marginBottom: 14, letterSpacing: "-1px" }}>
          Not Sure Which Solution Fits?
        </h2>
        <p style={{ color: "#8080b0", fontSize: 15, marginBottom: 32 }}>
          Book a free 30-minute discovery call and we'll map the right solution to your goals.
        </p>
        <Link href="/#contact" style={{
          background: "#6366f1", color: "#fff", border: "none",
          borderRadius: 10, padding: "13px 36px", fontSize: 15,
          fontWeight: 600, cursor: "pointer", textDecoration: "none", display: "inline-block",
        }}>
          Book a Free Call →
        </Link>
      </div>

      {/* ── FOOTER ── */}
      <footer style={{
        borderTop: "1px solid #141414", padding: "28px 5%",
        display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 14,
      }}>
        <Link href="/" style={{ fontSize: 18, fontWeight: 700, color: "#fff", textDecoration: "none" }}>
          Nexlytic <span style={{ color: "#6366f1" }}>Solutions</span>
        </Link>
        <p style={{ fontSize: 12, color: "#2a2a2a" }}>© 2025 Nexlytic Solutions. All rights reserved.</p>
        <div style={{ display: "flex", gap: 20 }}>
          {NAV_LINKS.map((l) => (
            <Link key={l} href={l === "Solutions" ? "/solutions" : `/#${l.toLowerCase()}`}
              style={{ color: "#333", fontSize: 13, textDecoration: "none" }}>
              {l}
            </Link>
          ))}
        </div>
      </footer>
    </div>
  );
}

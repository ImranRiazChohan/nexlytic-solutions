"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const NAV_LINKS = ["About", "Process", "Contact"];

const SERVICE_SLUGS = {
  "Mobile Applications": "mobile-applications",
  "Web Applications": "web-applications",
  "Data & AI Services": "data-ai-services",
};

const SERVICES = [
  {
    icon: "◈",
    title: "Mobile Applications",
    desc: "Native and cross-platform apps for iOS and Android — built for performance and a polished user experience.",
    tags: ["React Native", "Flutter", "iOS & Android"],
    image: "",
  },
  {
    icon: "⬡",
    title: "Web Applications",
    desc: "Scalable, high-performance web applications built with modern frameworks — fast, secure, and SEO-ready.",
    tags: ["Next.js / React", "Node.js", "REST & GraphQL"],
    image: "",
  },
  {
    icon: "⬢",
    title: "Data & AI Services",
    desc: "End-to-end data solutions and AI-powered chatbots that drive smarter decisions and automate workflows.",
    tags: ["Data Engineering", "LLM Integration", "BI & Analytics"],
    image: "",
  },
];

const PROCESS = [
  { num: "01", title: "Discovery", desc: "We dive deep into your business goals, users, and technical requirements to craft a clear roadmap." },
  { num: "02", title: "Design", desc: "Wireframes, prototypes, and design systems built for your brand — reviewed and refined with your team." },
  { num: "03", title: "Development", desc: "Clean, scalable code delivered in agile sprints with continuous communication and progress updates." },
  { num: "04", title: "Launch & Support", desc: "We deploy, monitor, and iterate — ensuring your product performs flawlessly after go-live." },
];

const STATS = [
  { val: "50+", label: "Projects Delivered" },
  { val: "98%", label: "Client Satisfaction" },
  { val: "5+", label: "Years Experience" },
  { val: "15+", label: "Expert Team Members" },
];

const WHY_CHOOSE = [
  { icon: "⚡", title: "Speed to Market", desc: "We ship fast without cutting corners. Your MVP in weeks, not quarters." },
  { icon: "🔒", title: "Production-Grade Code", desc: "Scalable, tested, and maintainable — built to handle real users from day one." },
  { icon: "🎯", title: "Business-First Thinking", desc: "We don't just write code. We solve business problems with technology." },
  { icon: "🤝", title: "Transparent Partnership", desc: "Weekly demos, shared boards, and direct access to your dev team." },
  { icon: "🚀", title: "Scale-Ready Architecture", desc: "Systems designed to grow with you — from 100 to 100,000 users." },
  { icon: "🛠️", title: "Long-Term Support", desc: "We stay after launch. Maintenance, updates, and new features — always available." },
];

const MILESTONES = [
  { year: "2026", title: "Founded in Karachi", desc: "Started with a 3-person team and a vision to build intelligent digital products." },
];

const VALUES = [
  { label: "Integrity", desc: "Honest timelines, clear pricing, no surprises." },
  { label: "Excellence", desc: "We don't ship until it meets our standard." },
  { label: "Innovation", desc: "Always exploring better ways to build and deliver." },
  { label: "Ownership", desc: "We treat your product like our own." },
];

function AnimatedAboutHero() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [activeValue, setActiveValue] = useState(null);
  const [counts, setCounts] = useState({ projects: 0, satisfaction: 0, years: 0, team: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = Math.min(step / steps, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCounts({
        projects: Math.round(50 * ease),
        satisfaction: Math.round(98 * ease),
        years: Math.round(5 * ease),
        team: Math.round(15 * ease),
      });
      if (step >= steps) clearInterval(timer);
    }, interval);
    return () => clearInterval(timer);
  }, [visible]);

  return (
    <div ref={ref} style={{ maxWidth: 1100, margin: "0 auto" }}>
      {/* ── Floating Background Orbs ── */}
      <div style={{ position: "absolute", top: "10%", left: "5%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)", pointerEvents: "none", animation: "float1 8s ease-in-out infinite" }} />
      <div style={{ position: "absolute", bottom: "15%", right: "8%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.04) 0%, transparent 70%)", pointerEvents: "none", animation: "float2 10s ease-in-out infinite" }} />

      {/* ── Header Row ── */}
      <div style={{ textAlign: "center", marginBottom: 64, opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: "all 0.8s ease" }}>
        <p style={{ fontSize: 11, letterSpacing: "0.15em", color: "#6366f1", textTransform: "uppercase", marginBottom: 16 }}>Who We Are</p>
        <h2 style={{ fontSize: "clamp(2rem,5vw,3.4rem)", fontWeight: 800, color: "#fff", letterSpacing: "-2px", lineHeight: 1.1, marginBottom: 20 }}>
          We Build Products<br />That <span style={{ color: "#6366f1", position: "relative" }}>
            Move Markets
            <span style={{ position: "absolute", bottom: -4, left: 0, right: 0, height: 3, background: "#6366f1", borderRadius: 2, opacity: 0.4 }} />
          </span>
        </h2>
        <p style={{ color: "#555", fontSize: 16, maxWidth: 560, lineHeight: 1.8, margin: "0 auto" }}>
          Nexlytic Solutions is a full-service digital agency based in Karachi, Pakistan. We partner with startups and enterprises to design, build, and scale high-impact digital products.
        </p>
      </div>

      {/* {
      //  ── Animated Stats Row ──
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 2, background: "#1a1a1a", borderRadius: 16, overflow: "hidden", marginBottom: 64, opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: "all 0.8s ease 0.2s" }}>
        {[
          { val: `${counts.projects}+`, label: "Projects Delivered", icon: "◈" },
          { val: `${counts.satisfaction}%`, label: "Client Satisfaction", icon: "⬡" },
          { val: `${counts.years}+`, label: "Years Experience", icon: "⬢" },
          { val: `${counts.team}+`, label: "Expert Team Members", icon: "⬟" },
        ].map((s, i) => (
          <div key={i} style={{
            padding: "28px 20px", background: "#0d0d0d", textAlign: "center",
            transition: "all 0.3s", cursor: "default",
          }}
            onMouseEnter={e => { e.currentTarget.style.background = "#111"; e.currentTarget.style.transform = "scale(1.02)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#0d0d0d"; e.currentTarget.style.transform = "scale(1)"; }}>
            <div style={{ fontSize: 18, color: "#6366f1", marginBottom: 8 }}>{s.icon}</div>
            <div style={{ fontSize: 32, fontWeight: 800, color: "#fff", letterSpacing: "-1px", lineHeight: 1 }}>{s.val}</div>
            <div style={{ fontSize: 12, color: "#555", marginTop: 6 }}>{s.label}</div>
          </div>
        ))}
      </div>
      } */}

      {/* ── Content + Interactive Value Cards ── */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "start", marginBottom: 64 }}>
        {/* ── Left: Text + CTA ── */}
        <div style={{ opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(-30px)", transition: "all 0.8s ease 0.3s" }}>
          <div style={{ position: "relative", marginBottom: 32 }}>
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 3, background: "linear-gradient(180deg, #6366f1 0%, transparent 100%)", borderRadius: 2 }} />
            <p style={{ color: "#808080", fontSize: 16, lineHeight: 1.9, paddingLeft: 20 }}>
              Our multidisciplinary team combines <span style={{ color: "#fff", fontWeight: 600 }}>deep technical expertise</span> with <span style={{ color: "#fff", fontWeight: 600 }}>creative thinking</span> — delivering solutions that are not just functional, but <span style={{ color: "#6366f1", fontWeight: 600 }}>exceptional</span>.
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <button onClick={() => scrollTo("contact")} style={{
              background: "#6366f1", color: "#fff",
              border: "none", borderRadius: 10,
              padding: "14px 32px", fontSize: 15, fontWeight: 600,
              cursor: "pointer", transition: "all 0.3s",
              boxShadow: "0 0 20px rgba(99,102,241,0.3)",
            }}
              onMouseEnter={e => { e.target.style.background = "#4f46e5"; e.target.style.transform = "translateY(-3px)"; e.target.style.boxShadow = "0 0 30px rgba(99,102,241,0.5)"; }}
              onMouseLeave={e => { e.target.style.background = "#6366f1"; e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 0 20px rgba(99,102,241,0.3)"; }}>
              Let's Work Together
            </button>
            <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#555", fontSize: 13 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px rgba(74,222,128,0.4)" }} />
              Available for new projects
            </div>
          </div>
        </div>

        {/* ── Right: Value Cards ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(30px)", transition: "all 0.8s ease 0.4s" }}>
          {VALUES.map((v, i) => (
            <div key={v.label}
              onMouseEnter={() => setActiveValue(i)}
              onMouseLeave={() => setActiveValue(null)}
              style={{
                background: activeValue === i ? "linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(99,102,241,0.02) 100%)" : "#0f0f0f",
                border: `1px solid ${activeValue === i ? "rgba(99,102,241,0.4)" : "#1a1a1a"}`,
                borderRadius: 16, padding: "24px 20px", cursor: "default",
                transition: "all 0.4s ease", position: "relative", overflow: "hidden",
                transform: activeValue === i ? "translateY(-4px)" : "translateY(0)",
                boxShadow: activeValue === i ? "0 8px 32px rgba(99,102,241,0.15)" : "none",
              }}>
              {/* Top glow line */}
              <div style={{
                position: "absolute", top: 0, left: "20%", right: "20%", height: 1,
                background: "linear-gradient(90deg, transparent 0%, #6366f1 50%, transparent 100%)",
                opacity: activeValue === i ? 1 : 0, transition: "opacity 0.4s",
              }} />
              {/* Animated icon area */}
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: activeValue === i ? "#6366f1" : "#111",
                border: `1px solid ${activeValue === i ? "#6366f1" : "#1a1a1a"}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 16, transition: "all 0.4s ease",
                fontSize: 18,
              }}>
                {activeValue === i ? (
                  <span style={{ color: "#fff", fontSize: 20 }}>
                    {i === 0 ? "✦" : i === 1 ? "◆" : i === 2 ? "⬡" : "◈"}
                  </span>
                ) : (
                  <span style={{ color: "#333", fontSize: 14, fontWeight: 700 }}>0{i + 1}</span>
                )}
              </div>
              <div style={{ fontSize: 15, fontWeight: 700, color: activeValue === i ? "#fff" : "#ccc", marginBottom: 8, transition: "color 0.3s" }}>{v.label}</div>
              <div style={{ fontSize: 12, color: activeValue === i ? "#808080" : "#3a3a3a", lineHeight: 1.7, transition: "color 0.3s" }}>
                {v.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Animated Gradient Divider ── */}
      <div style={{
        height: 2, borderRadius: 2, marginBottom: 64,
        background: "linear-gradient(90deg, transparent 0%, #6366f1 50%, transparent 100%)",
        opacity: visible ? 0.3 : 0, transition: "opacity 1s ease 0.6s",
      }} />
    </div>
  );
}

function AnimatedProcess() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const steps = [
    { num: "01", title: "Discovery", desc: "We dive deep into your business goals, users, and technical requirements to craft a clear roadmap.", icon: "🔍", duration: "Week 1–2", deliverables: ["Project scope doc", "Technical requirements", "Timeline & milestones"] },
    { num: "02", title: "Design", desc: "Wireframes, prototypes, and design systems built for your brand — reviewed and refined with your team.", icon: "🎨", duration: "Week 2–4", deliverables: ["Wireframes & user flows", "Interactive prototypes", "Design system"] },
    { num: "03", title: "Development", desc: "Clean, scalable code delivered in agile sprints with continuous communication and progress updates.", icon: "⚙️", duration: "Week 4–10", deliverables: ["Weekly builds", "Code reviews", "CI/CD pipeline"] },
    { num: "04", title: "Launch & Support", desc: "We deploy, monitor, and iterate — ensuring your product performs flawlessly after go-live.", icon: "🚀", duration: "Week 10+", deliverables: ["Production deployment", "Monitoring setup", "Post-launch support"] },
  ];

  return (
    <div ref={ref} style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
      {/* ── Background glow ── */}
      <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

      {/* ── Header ── */}
      <div style={{ textAlign: "center", marginBottom: 72, opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: "all 0.8s ease" }}>
        <p style={{ fontSize: 11, letterSpacing: "0.15em", color: "#6366f1", textTransform: "uppercase", marginBottom: 16 }}>How We Work</p>
        <h2 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 800, color: "#fff", letterSpacing: "-2px", lineHeight: 1.1 }}>
          From Idea to <span style={{ color: "#6366f1" }}>Launch</span>
        </h2>
        <p style={{ color: "#555", fontSize: 16, maxWidth: 500, lineHeight: 1.7, margin: "16px auto 0" }}>
          A proven 4-step process that turns your vision into a polished, production-ready product.
        </p>
      </div>

      {/* ── Roadmap Timeline ── */}
      <div style={{ position: "relative" }}>
        {/* ── Central road line ── */}
        <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 2, background: "#1a1a1a", transform: "translateX(-50%)" }} />
        {/* ── Animated progress line ── */}
        <div style={{
          position: "absolute", left: "50%", top: 0,
          width: 2, height: visible ? "100%" : 0,
          background: "linear-gradient(180deg, #6366f1 0%, #6366f1 50%, transparent 100%)",
          transform: "translateX(-50%)", transition: "height 1.5s ease 0.5s",
        }} />

        {steps.map((step, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "center",
            marginBottom: 32, position: "relative",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: `all 0.6s ease ${0.3 + i * 0.2}s`,
          }}>
            {/* ── Left card (even) or Right card (odd) ── */}
            <div style={{ width: "calc(50% - 40px)", order: i % 2 === 0 ? 1 : 3 }}>
              <div
                onClick={() => setActiveStep(activeStep === i ? -1 : i)}
                style={{
                  background: activeStep === i ? "linear-gradient(135deg, rgba(99,102,241,0.1) 0%, #0d0d0d 100%)" : "#0d0d0d",
                  border: `1px solid ${activeStep === i ? "rgba(99,102,241,0.4)" : "#1a1a1a"}`,
                  borderRadius: 16, padding: "28px 24px", cursor: "pointer",
                  transition: "all 0.4s ease", position: "relative", overflow: "hidden",
                  transform: activeStep === i ? "translateY(-4px)" : "translateY(0)",
                  boxShadow: activeStep === i ? "0 8px 32px rgba(99,102,241,0.12)" : "none",
                  textAlign: i % 2 === 0 ? "right" : "left",
                }}>
                {/* Top glow */}
                <div style={{
                  position: "absolute", top: 0, left: "15%", right: "15%", height: 1,
                  background: "linear-gradient(90deg, transparent 0%, #6366f1 50%, transparent 100%)",
                  opacity: activeStep === i ? 1 : 0, transition: "opacity 0.4s",
                }} />

                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12, justifyContent: i % 2 === 0 ? "flex-end" : "flex-start" }}>
                  <span style={{ fontSize: 28 }}>{step.icon}</span>
                  <div>
                    <div style={{ fontSize: 11, color: "#6366f1", fontWeight: 600, letterSpacing: "0.05em" }}>{step.duration}</div>
                    <h3 style={{ fontSize: 18, fontWeight: 700, color: "#fff", margin: 0 }}>{step.title}</h3>
                  </div>
                </div>
                <p style={{ fontSize: 14, color: "#555", lineHeight: 1.7, marginBottom: activeStep === i ? 16 : 0, transition: "margin 0.3s" }}>{step.desc}</p>

                {/* Expandable deliverables */}
                <div style={{
                  maxHeight: activeStep === i ? 200 : 0, overflow: "hidden",
                  transition: "max-height 0.5s ease, opacity 0.3s",
                  opacity: activeStep === i ? 1 : 0,
                }}>
                  <p style={{ fontSize: 11, color: "#333", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>Deliverables</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: i % 2 === 0 ? "flex-end" : "flex-start" }}>
                    {step.deliverables.map((d) => (
                      <div key={d} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        {i % 2 !== 0 && <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#6366f1", flexShrink: 0 }} />}
                        <span style={{ fontSize: 13, color: "#808080" }}>{d}</span>
                        {i % 2 === 0 && <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#6366f1", flexShrink: 0 }} />}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ── Center dot ── */}
            <div style={{
              position: "absolute", left: "50%", transform: "translateX(-50%)",
              width: 18, height: 18, borderRadius: "50%",
              background: activeStep === i ? "#6366f1" : "#1a1a1a",
              border: `2px solid ${activeStep === i ? "#6366f1" : "#2a2a2a"}`,
              zIndex: 2, transition: "all 0.4s ease",
              boxShadow: activeStep === i ? "0 0 16px rgba(99,102,241,0.5)" : "none",
            }}>
              {activeStep === i && (
                <div style={{
                  position: "absolute", top: "50%", left: "50%",
                  width: 18, height: 18, borderRadius: "50%",
                  border: "2px solid #6366f1",
                  animation: "pulseRing 1.5s ease-out infinite",
                }} />
              )}
              <div style={{
                width: 6, height: 6, borderRadius: "50%",
                background: activeStep === i ? "#fff" : "#333",
                position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
                transition: "all 0.4s ease",
              }} />
            </div>

            {/* ── Spacer ── */}
            <div style={{ width: "calc(50% - 40px)", order: i % 2 === 0 ? 3 : 1 }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

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
        <span style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.5px", color: "#fff" }}>
          Nexlytic <span style={{ color: "#6366f1" }}>Solutions</span>
        </span>
        <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
          <div style={{ position: "relative" }}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}>
            <button onClick={() => scrollTo("services")} style={{
              background: "none", border: "none", color: servicesOpen ? "#fff" : "#a0a0a0",
              fontSize: 14, cursor: "pointer", transition: "color 0.2s",
            }}>
              Services
            </button>
            <div style={{
              position: "absolute", top: "100%", left: "50%", transform: servicesOpen ? "translateX(-50%) translateY(0)" : "translateX(-50%) translateY(-4px)",
              marginTop: 8, background: "#111", border: "1px solid #1f1f1f",
              borderRadius: 12, padding: "8px 0", minWidth: 240, opacity: servicesOpen ? 1 : 0,
              pointerEvents: servicesOpen ? "auto" : "none", transition: "opacity 0.2s, transform 0.2s",
            }}>
              {SERVICES.map((s) => (
                <Link key={s.title} href={`/services/${SERVICE_SLUGS[s.title]}`} style={{
                  display: "flex", alignItems: "center", gap: 12,
                  padding: "10px 20px", color: "#a0a0a0", textDecoration: "none",
                  transition: "all 0.15s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = "#1a1a1a"; e.currentTarget.style.color = "#fff"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#a0a0a0"; }}>
                  <span style={{ fontSize: 16, color: "#6366f1" }}>{s.icon}</span>
                  <span style={{ fontSize: 14 }}>{s.title}</span>
                </Link>
              ))}
            </div>
          </div>
          {NAV_LINKS.map((l) => (
            <button key={l} onClick={() => scrollTo(l.toLowerCase())} style={{
              background: "none", border: "none", color: "#a0a0a0",
              fontSize: 14, cursor: "pointer", transition: "color 0.2s",
            }}
              onMouseEnter={e => e.target.style.color = "#fff"}
              onMouseLeave={e => e.target.style.color = "#a0a0a0"}>
              {l}
            </button>
          ))}
          <button onClick={() => scrollTo("contact")} style={{
            background: "#6366f1", color: "#fff", border: "none",
            borderRadius: 8, padding: "8px 20px", fontSize: 14,
            fontWeight: 500, cursor: "pointer", transition: "background 0.2s",
          }}
            onMouseEnter={e => e.target.style.background = "#4f46e5"}
            onMouseLeave={e => e.target.style.background = "#6366f1"}>
            Get Started
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section id="hero" style={{
        minHeight: "100vh", display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        textAlign: "center", padding: "80px 5% 60px", position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: "40%", left: "50%", transform: "translate(-50%,-50%)",
          width: 700, height: 700, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.13) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "#111", border: "1px solid #2a2a2a",
          borderRadius: 100, padding: "6px 16px",
          fontSize: 13, color: "#a0a0a0", marginBottom: 32,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#6366f1", display: "inline-block" }} />
          AI-Powered Digital Solutions
        </div>
        <h1 style={{
          fontSize: "clamp(2rem, 5.5vw, 4rem)", fontWeight: 800,
          lineHeight: 1.1, letterSpacing: "-2px", color: "#fff",
          margin: "0 0 24px", maxWidth: 820,
        }}>
          Transforming Ideas into<br />
          <span style={{ color: "#6366f1" }}>Intelligent Digital Products</span>
        </h1>
        <p style={{ fontSize: 17, color: "#606060", maxWidth: 520, lineHeight: 1.75, marginBottom: 40 }}>
          We build data-driven web apps, mobile experiences, and AI agents that help businesses scale smarter and move faster.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <button onClick={() => scrollTo("services")} style={{
            background: "#6366f1", color: "#fff", border: "none",
            borderRadius: 10, padding: "13px 28px", fontSize: 15,
            fontWeight: 600, cursor: "pointer", transition: "background 0.2s, transform 0.15s",
          }}
            onMouseEnter={e => { e.target.style.background = "#4f46e5"; e.target.style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { e.target.style.background = "#6366f1"; e.target.style.transform = "none"; }}>
            Explore Services
          </button>
          <button onClick={() => scrollTo("contact")} style={{
            background: "transparent", color: "#e8e8e8",
            border: "1px solid #2a2a2a", borderRadius: 10,
            padding: "13px 28px", fontSize: 15, fontWeight: 500,
            cursor: "pointer", transition: "border-color 0.2s",
          }}
            onMouseEnter={e => e.target.style.borderColor = "#555"}
            onMouseLeave={e => e.target.style.borderColor = "#2a2a2a"}>
            Contact Us →
          </button>
        </div>
        <div style={{
          display: "flex", gap: 48, marginTop: 72, paddingTop: 48,
          borderTop: "1px solid #1a1a1a", flexWrap: "wrap", justifyContent: "center",
        }}>
          {STATS.map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 26, fontWeight: 700, color: "#fff" }}>{s.val}</div>
              <div style={{ fontSize: 12, color: "#444", marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" style={{ padding: "100px 5%" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.15em", color: "#6366f1", textTransform: "uppercase", marginBottom: 12 }}>What We Do</p>
          <h2 style={{ fontSize: "clamp(1.8rem,4vw,2.6rem)", fontWeight: 700, color: "#fff", letterSpacing: "-1px", marginBottom: 14 }}>Our Core Services</h2>
          <p style={{ color: "#555", fontSize: 15, maxWidth: 460, lineHeight: 1.7, marginBottom: 52 }}>
            A complete suite of digital services to take your product from concept to scale.
          </p>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 24,
          }}>
            {SERVICES.map((s, i) => (
              <div key={i} style={{
                background: "#0d0d0d", border: "1px solid #1a1a1a",
                borderRadius: 16, overflow: "hidden", transition: "border-color 0.2s",
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "#6366f1"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "#1a1a1a"}>
                <div style={{
                  aspectRatio: "16/9", background: "#111",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  borderBottom: "1px solid #1a1a1a",
                }}>
                  {/* Add your image here */}
                  <span style={{ color: "#333", fontSize: 14 }}>Add image</span>
                </div>
                <div style={{ padding: "24px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                    <span style={{ fontSize: 20, color: "#6366f1" }}>{s.icon}</span>
                    <h3 style={{ fontSize: 18, fontWeight: 600, color: "#fff" }}>{s.title}</h3>
                  </div>
                  <p style={{ fontSize: 14, color: "#555", lineHeight: 1.7, marginBottom: 16 }}>{s.desc}</p>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 20 }}>
                    {s.tags.map((t) => (
                      <span key={t} style={{
                        fontSize: 11, padding: "3px 10px", borderRadius: 100,
                        background: "#1a1a2e", color: "#6366f1", border: "1px solid #2a2a4a",
                      }}>{t}</span>
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: 10 }}>
                    <Link href={`/services/${SERVICE_SLUGS[s.title]}`} style={{
                      background: "#6366f1", color: "#fff", border: "none",
                      borderRadius: 8, padding: "10px 22px", fontSize: 13,
                      fontWeight: 600, cursor: "pointer", textDecoration: "none",
                    }}>
                      Read More →
                    </Link>
                    <Link href="/#contact" style={{
                      background: "transparent", color: "#a0a0a0",
                      border: "1px solid #2a2a2a", borderRadius: 8,
                      padding: "10px 22px", fontSize: 13, fontWeight: 500,
                      cursor: "pointer", textDecoration: "none",
                    }}>
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT: HERO ── */}
      <section id="about" style={{ padding: "100px 5%", background: "#080808", position: "relative", overflow: "hidden" }}>
        <AnimatedAboutHero />
      </section>

      {/* ── ABOUT: WHY CHOOSE US ── */}
      <section style={{ padding: "100px 5%", background: "#080808" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.15em", color: "#6366f1", textTransform: "uppercase", marginBottom: 12 }}>Why Nexlytic</p>
          <h2 style={{ fontSize: "clamp(1.8rem,4vw,2.6rem)", fontWeight: 700, color: "#fff", letterSpacing: "-1px", marginBottom: 52 }}>
            Why Clients Choose Us
          </h2>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 1, background: "#1a1a1a", borderRadius: 16, overflow: "hidden",
          }}>
            {WHY_CHOOSE.map((item) => (
              <div key={item.title} style={{
                padding: "28px 24px", background: "#0d0d0d",
                transition: "all 0.2s", cursor: "default",
              }}
                onMouseEnter={e => { e.currentTarget.style.background = "#111"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "#0d0d0d"; e.currentTarget.style.transform = "none"; }}>
                <div style={{ fontSize: 24, marginBottom: 14 }}>{item.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: "#fff", marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 13, color: "#555", lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT: TIMELINE ── */}
      <section style={{ padding: "100px 5%" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.15em", color: "#6366f1", textTransform: "uppercase", marginBottom: 12 }}>Our Journey</p>
          <h2 style={{ fontSize: "clamp(1.8rem,4vw,2.6rem)", fontWeight: 700, color: "#fff", letterSpacing: "-1px", marginBottom: 52 }}>
            How We Got Here
          </h2>
          <div style={{ position: "relative", paddingLeft: 32 }}>
            <div style={{ position: "absolute", left: 11, top: 0, bottom: 0, width: 2, background: "#1a1a1a" }} />
            {MILESTONES.map((m, i) => (
              <div key={i} style={{ position: "relative", paddingBottom: 48 }}>
                <div style={{
                  position: "absolute", left: -32, top: 4,
                  width: 12, height: 12, borderRadius: "50%",
                  background: i === MILESTONES.length - 1 ? "#6366f1" : "#1a1a1a",
                  border: `2px solid ${i === MILESTONES.length - 1 ? "#6366f1" : "#2a2a2a"}`,
                }} />
                <span style={{ fontSize: 12, fontWeight: 700, color: "#6366f1", letterSpacing: "0.05em" }}>{m.year}</span>
                <h3 style={{ fontSize: 17, fontWeight: 600, color: "#fff", margin: "6px 0 8px" }}>{m.title}</h3>
                <p style={{ fontSize: 13, color: "#555", lineHeight: 1.7, maxWidth: 500 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="process" style={{ padding: "100px 5%", background: "#080808", position: "relative", overflow: "hidden" }}>
        <AnimatedProcess />
      </section>

      {/* ── CTA BANNER ── */}
      <div style={{
        margin: "0 5% 80px", borderRadius: 20, padding: "60px 48px", textAlign: "center",
        background: "linear-gradient(135deg,#1a1a2e 0%,#16213e 50%,#0f3460 100%)",
        border: "1px solid #2a2a5a",
      }}>
        <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 700, color: "#fff", marginBottom: 14, letterSpacing: "-1px" }}>
          Ready to Build Something Great?
        </h2>
        <p style={{ color: "#8080b0", fontSize: 15, marginBottom: 32 }}>
          Tell us about your project and we'll get back to you within 24 hours.
        </p>
        <button onClick={() => scrollTo("contact")} style={{
          background: "#6366f1", color: "#fff", border: "none",
          borderRadius: 10, padding: "13px 36px", fontSize: 15,
          fontWeight: 600, cursor: "pointer",
        }}>
          Start a Project →
        </button>
      </div>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding: "100px 5%", background: "#080808" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.15em", color: "#6366f1", textTransform: "uppercase", marginBottom: 12 }}>Get In Touch</p>
          <h2 style={{ fontSize: "clamp(1.8rem,4vw,2.6rem)", fontWeight: 700, color: "#fff", letterSpacing: "-1px", marginBottom: 12 }}>Let's Talk</h2>
          <p style={{ color: "#555", fontSize: 15, marginBottom: 44 }}>
            Have a project in mind? Drop us a message and our team will respond within 24 hours.
          </p>
          {sent ? (
            <div style={{
              background: "#0f2a1a", border: "1px solid #1a4a2a",
              borderRadius: 12, padding: 24, color: "#4ade80", fontSize: 15,
            }}>
              ✓ Message sent! We'll get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14, textAlign: "left" }}>
              {[
                { key: "name", label: "Your Name", type: "text", placeholder: "John Smith" },
                { key: "email", label: "Email Address", type: "email", placeholder: "john@company.com" },
              ].map((f) => (
                <div key={f.key}>
                  <label style={{ fontSize: 13, color: "#606060", display: "block", marginBottom: 5 }}>{f.label}</label>
                  <input type={f.type} placeholder={f.placeholder} required
                    value={form[f.key]}
                    onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                    style={{
                      width: "100%", background: "#0f0f0f", border: "1px solid #1f1f1f",
                      borderRadius: 8, padding: "11px 14px", color: "#e8e8e8",
                      fontSize: 14, outline: "none", boxSizing: "border-box", transition: "border-color 0.2s",
                    }}
                    onFocus={e => e.target.style.borderColor = "#6366f1"}
                    onBlur={e => e.target.style.borderColor = "#1f1f1f"}
                  />
                </div>
              ))}
              <div>
                <label style={{ fontSize: 13, color: "#606060", display: "block", marginBottom: 5 }}>Message</label>
                <textarea rows={5} placeholder="Tell us about your project..." required
                  value={form.message}
                  onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                  style={{
                    width: "100%", background: "#0f0f0f", border: "1px solid #1f1f1f",
                    borderRadius: 8, padding: "11px 14px", color: "#e8e8e8",
                    fontSize: 14, outline: "none", resize: "vertical",
                    boxSizing: "border-box", fontFamily: "inherit", transition: "border-color 0.2s",
                  }}
                  onFocus={e => e.target.style.borderColor = "#6366f1"}
                  onBlur={e => e.target.style.borderColor = "#1f1f1f"}
                />
              </div>
              <button type="submit" style={{
                background: "#6366f1", color: "#fff", border: "none",
                borderRadius: 10, padding: 14, fontSize: 15,
                fontWeight: 600, cursor: "pointer", transition: "background 0.2s",
              }}
                onMouseEnter={e => e.target.style.background = "#4f46e5"}
                onMouseLeave={e => e.target.style.background = "#6366f1"}>
                Send Message
              </button>
            </form>
          )}
          <div style={{ display: "flex", justifyContent: "center", gap: 36, marginTop: 44, flexWrap: "wrap" }}>
            {[
              { label: "Email", val: "hello@nexlyticsolutions.com" },
              { label: "Location", val: "Karachi, Pakistan" },
              { label: "Response Time", val: "Within 24 hours" },
            ].map((item) => (
              <div key={item.label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 12, color: "#333", marginBottom: 3 }}>{item.label}</div>
                <div style={{ fontSize: 13, color: "#888" }}>{item.val}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        borderTop: "1px solid #141414", padding: "28px 5%",
        display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 14,
      }}>
        <span style={{ fontSize: 18, fontWeight: 700, color: "#fff" }}>
          Nexlytic <span style={{ color: "#6366f1" }}>Solutions</span>
        </span>
        <p style={{ fontSize: 12, color: "#2a2a2a" }}>© 2025 Nexlytic Solutions. All rights reserved.</p>
        <div style={{ display: "flex", gap: 20 }}>
          {NAV_LINKS.map((l) => (
            <button key={l} onClick={() => scrollTo(l.toLowerCase())} style={{
              background: "none", border: "none", color: "#333", fontSize: 13, cursor: "pointer",
            }}>{l}</button>
          ))}
        </div>
      </footer>
    </div>
  );
}
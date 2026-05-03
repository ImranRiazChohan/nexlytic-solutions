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
  },
  {
    icon: "⬡",
    title: "Web Applications",
    desc: "Scalable, high-performance web applications built with modern frameworks — fast, secure, and SEO-ready.",
    tags: ["Next.js / React", "Node.js", "REST & GraphQL"],
  },
  {
    icon: "⬢",
    title: "Data & AI Services",
    desc: "End-to-end data solutions and AI-powered chatbots that drive smarter decisions and automate workflows.",
    tags: ["Data Engineering", "LLM Integration", "BI & Analytics"],
  },
];

const STATS = [
  { val: "50+", label: "Projects Delivered" },
  { val: "98%", label: "Client Satisfaction" },
  { val: "5+", label: "Years Experience" },
  { val: "15+", label: "Expert Team Members" },
];

const VALUES = [
  { label: "Integrity", desc: "Honest timelines, clear pricing, no surprises." },
  { label: "Excellence", desc: "We don't ship until it meets our standard." },
  { label: "Innovation", desc: "Always exploring better ways to build and deliver." },
  { label: "Ownership", desc: "We treat your product like our own." },
];

const MILESTONES = [
  { year: "2026", title: "Founded in Karachi", desc: "Started with a 3-person team and a vision to build intelligent digital products." },
];

/* ─── Reusable animated section divider ─── */
function SectionDivider() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ position: "relative", height: 2, margin: "0 5%", opacity: vis ? 1 : 0, transition: "opacity 1s ease" }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, transparent 0%, #6366f1 50%, transparent 100%)", borderRadius: 2 }} />
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 8, height: 8, borderRadius: "50%", background: "#6366f1", boxShadow: "0 0 16px 4px rgba(99,102,241,0.5)" }} />
    </div>
  );
}

/* ─── WhyChooseUs ─── */
function WhyChooseUs() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const reasons = [
    { icon: "⚡", title: "Speed to Market", desc: "We ship fast without cutting corners. Your MVP in weeks, not quarters.", metric: "3×", metricLabel: "faster delivery than industry avg", color: "#f59e0b" },
    { icon: "🔒", title: "Production-Grade Code", desc: "Scalable, tested, and maintainable — built to handle real users from day one.", metric: "99.9%", metricLabel: "uptime across all deployed apps", color: "#6366f1" },
    { icon: "🎯", title: "Business-First Thinking", desc: "We don't just write code. We solve business problems with technology.", metric: "ROI", metricLabel: "focused — every feature ties to a business goal", color: "#10b981" },
    { icon: "🤝", title: "Transparent Partnership", desc: "Weekly demos, shared boards, and direct access to your dev team.", metric: "24h", metricLabel: "max response time on all projects", color: "#0ea5e9" },
    { icon: "🚀", title: "Scale-Ready Architecture", desc: "Systems designed to grow with you — from 100 to 100,000 users.", metric: "100×", metricLabel: "scalability built into every architecture", color: "#8b5cf6" },
    { icon: "🛠️", title: "Long-Term Support", desc: "We stay after launch. Maintenance, updates, and new features — always available.", metric: "98%", metricLabel: "of clients retain us post-launch", color: "#ef4444" },
  ];

  return (
    <div ref={ref} style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle,rgba(99,102,241,0.04) 0%,transparent 70%)", pointerEvents: "none" }} />

      <div style={{ textAlign: "center", marginBottom: 64, opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: "all 0.8s ease" }}>
        <p style={{ fontSize: 11, letterSpacing: "0.15em", color: "#6366f1", textTransform: "uppercase", marginBottom: 16 }}>Why Nexlytic</p>
        <h2 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 800, color: "#fff", letterSpacing: "-2px", lineHeight: 1.1 }}>
          Why Clients <span style={{ color: "#6366f1" }}>Choose Us</span>
        </h2>
        <p style={{ color: "#555", fontSize: 16, maxWidth: 520, lineHeight: 1.7, margin: "16px auto 0" }}>
          Not just developers — partners who care about your business outcomes.
        </p>
      </div>

      <div className="why-grid">
        {reasons.map((r, i) => {
          const isH = hoveredCard === i;
          return (
            <div key={i}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                background: isH ? "linear-gradient(135deg,rgba(99,102,241,0.08) 0%,#0d0d0d 100%)" : "#0d0d0d",
                border: `1px solid ${isH ? "rgba(99,102,241,0.3)" : "#1a1a1a"}`,
                borderRadius: 20, padding: "32px 24px",
                cursor: "default",
                transform: visible ? (isH ? "translateY(-6px)" : "translateY(0)") : "translateY(40px)",
                boxShadow: isH ? "0 12px 40px rgba(99,102,241,0.15)" : "none",
                position: "relative", overflow: "hidden",
                display: "flex", flexDirection: "column", justifyContent: "space-between",
                minHeight: 220,
                opacity: visible ? 1 : 0,
                transition: `all 0.6s ease ${0.1 + i * 0.08}s`,
              }}>
              <div style={{ position: "absolute", top: 0, left: "20%", right: "20%", height: 2, background: `linear-gradient(90deg,transparent,${r.color},transparent)`, opacity: isH ? 1 : 0, transition: "opacity 0.4s" }} />
              <div style={{ position: "absolute", top: -40, right: -40, width: 120, height: 120, borderRadius: "50%", background: `radial-gradient(circle,${r.color}15,transparent 70%)`, opacity: isH ? 1 : 0, transition: "opacity 0.4s", pointerEvents: "none" }} />
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 14, background: isH ? `${r.color}20` : "#111", border: `1px solid ${isH ? `${r.color}40` : "#1a1a1a"}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, transition: "all 0.4s", flexShrink: 0 }}>
                    {r.icon}
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: isH ? "#fff" : "#ccc", transition: "color 0.3s" }}>{r.title}</h3>
                </div>
                <p style={{ fontSize: 14, color: isH ? "#808080" : "#444", lineHeight: 1.8 }}>{r.desc}</p>
              </div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 12, background: `${r.color}10`, border: `1px solid ${r.color}25`, borderRadius: 12, padding: "10px 16px", marginTop: 20, opacity: isH ? 1 : 0, transform: isH ? "translateY(0)" : "translateY(8px)", transition: "all 0.4s ease 0.1s" }}>
                <span style={{ fontSize: 20, fontWeight: 800, color: r.color, letterSpacing: "-1px" }}>{r.metric}</span>
                <span style={{ fontSize: 12, color: "#808080", lineHeight: 1.5 }}>{r.metricLabel}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ─── AnimatedAboutHero ─── */
function AnimatedAboutHero({ scrollTo }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [activeValue, setActiveValue] = useState(null);
  const [rotatingWord, setRotatingWord] = useState("Markets");
  const words = ["Markets", "Industries", "Startups", "Enterprises"];

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    let idx = 0;
    const t = setInterval(() => { idx = (idx + 1) % words.length; setRotatingWord(words[idx]); }, 2500);
    return () => clearInterval(t);
  }, [visible]);

  return (
    <div ref={ref} style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
      <div style={{ position: "absolute", top: "5%", left: "2%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(99,102,241,0.06) 0%,transparent 70%)", pointerEvents: "none", animation: "float1 8s ease-in-out infinite" }} />
      <div style={{ position: "absolute", bottom: "10%", right: "5%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(99,102,241,0.04) 0%,transparent 70%)", pointerEvents: "none", animation: "float2 10s ease-in-out infinite" }} />

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 56, opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: "all 0.8s ease" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#111", border: "1px solid #2a2a2a", borderRadius: 100, padding: "6px 16px", fontSize: 13, color: "#a0a0a0", marginBottom: 24 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#6366f1" }} />
          About Nexlytic Solutions
        </div>
        <h2 style={{ fontSize: "clamp(2rem,5vw,3.6rem)", fontWeight: 800, color: "#fff", letterSpacing: "-2px", lineHeight: 1.1, marginBottom: 20 }}>
          We Build Products<br />That Move{" "}
          <span style={{ color: "#6366f1", position: "relative", display: "inline-block", minWidth: "clamp(130px,18vw,200px)", textAlign: "left" }}>
            {rotatingWord}
            <span style={{ position: "absolute", bottom: -2, left: 0, right: 0, height: 4, background: "linear-gradient(90deg,#6366f1,transparent)", borderRadius: 2 }} />
          </span>
        </h2>
        <p style={{ color: "#606060", fontSize: "clamp(14px,2vw,17px)", maxWidth: 600, lineHeight: 1.8, margin: "0 auto" }}>
          A Karachi-based digital agency building data-driven web apps, mobile experiences, and AI agents that help businesses scale smarter and move faster.
        </p>
      </div>

      {/* Content grid */}
      <div className="about-content-grid">
        {/* Left */}
        <div style={{ opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(-30px)", transition: "all 0.8s ease 0.3s" }}>
          <div style={{ position: "relative", marginBottom: 32 }}>
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 3, background: "linear-gradient(180deg,#6366f1 0%,transparent 100%)", borderRadius: 2 }} />
            <p style={{ color: "#808080", fontSize: 15, lineHeight: 1.9, paddingLeft: 20, marginBottom: 20 }}>
              Our multidisciplinary team combines <span style={{ color: "#fff", fontWeight: 600 }}>deep technical expertise</span> with <span style={{ color: "#fff", fontWeight: 600 }}>creative thinking</span> — delivering solutions that are not just functional, but <span style={{ color: "#6366f1", fontWeight: 600 }}>exceptional</span>.
            </p>
            <p style={{ color: "#505050", fontSize: 14, lineHeight: 1.9, paddingLeft: 20 }}>
              We don't just build software. We build partnerships. Every project is a shared journey from rough idea to polished, production-ready product.
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16, paddingLeft: 20, flexWrap: "wrap" }}>
            <button onClick={() => scrollTo("contact")} style={{ background: "#6366f1", color: "#fff", border: "none", borderRadius: 10, padding: "12px 28px", fontSize: 14, fontWeight: 600, cursor: "pointer", boxShadow: "0 0 20px rgba(99,102,241,0.3)", transition: "all 0.3s" }}
              onMouseEnter={e => { e.target.style.background = "#4f46e5"; e.target.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.target.style.background = "#6366f1"; e.target.style.transform = "translateY(0)"; }}>
              Let's Work Together
            </button>
            <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#555", fontSize: 13 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px rgba(74,222,128,0.4)" }} />
              Available for new projects
            </div>
          </div>
        </div>

        {/* Right: Value Cards */}
        <div className="value-cards-grid" style={{ opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(30px)", transition: "all 0.8s ease 0.4s" }}>
          {VALUES.map((v, i) => (
            <div key={v.label}
              onMouseEnter={() => setActiveValue(i)}
              onMouseLeave={() => setActiveValue(null)}
              style={{
                background: activeValue === i ? "linear-gradient(135deg,rgba(99,102,241,0.08) 0%,rgba(99,102,241,0.02) 100%)" : "#0f0f0f",
                border: `1px solid ${activeValue === i ? "rgba(99,102,241,0.4)" : "#1a1a1a"}`,
                borderRadius: 16, padding: "22px 18px", cursor: "default",
                transition: "all 0.4s ease", position: "relative", overflow: "hidden",
                transform: activeValue === i ? "translateY(-4px)" : "translateY(0)",
                boxShadow: activeValue === i ? "0 8px 32px rgba(99,102,241,0.15)" : "none",
              }}>
              <div style={{ position: "absolute", top: 0, left: "15%", right: "15%", height: 1, background: "linear-gradient(90deg,transparent,#6366f1,transparent)", opacity: activeValue === i ? 1 : 0, transition: "opacity 0.4s" }} />
              <div style={{ width: 40, height: 40, borderRadius: 12, background: activeValue === i ? "#6366f1" : "#111", border: `1px solid ${activeValue === i ? "#6366f1" : "#1a1a1a"}`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14, transition: "all 0.4s" }}>
                {activeValue === i
                  ? <span style={{ color: "#fff", fontSize: 18 }}>{["✦", "◆", "⬡", "◈"][i]}</span>
                  : <span style={{ color: "#333", fontSize: 13, fontWeight: 700 }}>0{i + 1}</span>}
              </div>
              <div style={{ fontSize: 14, fontWeight: 700, color: activeValue === i ? "#fff" : "#ccc", marginBottom: 6, transition: "color 0.3s" }}>{v.label}</div>
              <div style={{ fontSize: 12, color: activeValue === i ? "#808080" : "#3a3a3a", lineHeight: 1.7, transition: "color 0.3s" }}>{v.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Philosophy */}
      <div style={{ marginBottom: 80, opacity: visible ? 1 : 0, transition: "opacity 0.8s ease 0.6s" }}>
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.15em", color: "#6366f1", textTransform: "uppercase", marginBottom: 24 }}>Our Philosophy</p>
          <h3 style={{ fontSize: "clamp(1.6rem,4vw,3rem)", fontWeight: 800, color: "#fff", letterSpacing: "-2px", lineHeight: 1.2, maxWidth: 800, margin: "0 auto" }}>
            We don't just build software.<br />
            We build <span style={{ color: "#6366f1" }}>partnerships</span>.
          </h3>
        </div>
      </div>
    </div>
  );
}

/* ─── AnimatedProcess ─── */
function AnimatedProcess() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(-1);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const ProcessCard = ({ step, i, activeStep, setActiveStep, align }) => (
    <div onClick={() => setActiveStep(activeStep === i ? -1 : i)} style={{
      background: activeStep === i ? "linear-gradient(135deg,rgba(99,102,241,0.1) 0%,#0d0d0d 100%)" : "#0d0d0d",
      border: `1px solid ${activeStep === i ? "rgba(99,102,241,0.4)" : "#1a1a1a"}`,
      borderRadius: 16, padding: "24px 20px", cursor: "pointer",
      transition: "all 0.4s ease", position: "relative", overflow: "hidden",
      transform: activeStep === i ? "translateY(-4px)" : "translateY(0)",
      boxShadow: activeStep === i ? "0 8px 32px rgba(99,102,241,0.12)" : "none",
      textAlign: align,
    }}>
      <div style={{ position: "absolute", top: 0, left: "15%", right: "15%", height: 1, background: "linear-gradient(90deg,transparent,#6366f1,transparent)", opacity: activeStep === i ? 1 : 0, transition: "opacity 0.4s" }} />
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12, justifyContent: align === "right" ? "flex-end" : "flex-start" }}>
        <span style={{ fontSize: 28 }}>{step.icon}</span>
        <div>
          <div style={{ fontSize: 11, color: "#6366f1", fontWeight: 600, letterSpacing: "0.05em" }}>{step.duration}</div>
          <h3 style={{ fontSize: 17, fontWeight: 700, color: "#fff", margin: 0 }}>{step.title}</h3>
        </div>
      </div>
      <p style={{ fontSize: 14, color: "#555", lineHeight: 1.7, marginBottom: activeStep === i ? 16 : 0 }}>{step.desc}</p>
      <div style={{ maxHeight: activeStep === i ? 200 : 0, overflow: "hidden", transition: "max-height 0.5s ease, opacity 0.3s", opacity: activeStep === i ? 1 : 0 }}>
        <p style={{ fontSize: 11, color: "#333", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>Deliverables</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: align === "right" ? "flex-end" : "flex-start" }}>
          {step.deliverables.map((d) => (
            <div key={d} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              {align === "left" && <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#6366f1", flexShrink: 0 }} />}
              <span style={{ fontSize: 13, color: "#808080" }}>{d}</span>
              {align === "right" && <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#6366f1", flexShrink: 0 }} />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const steps = [
    { num: "01", title: "Discovery", desc: "We dive deep into your business goals, users, and technical requirements to craft a clear roadmap.", icon: "🔍", deliverables: ["Project scope doc", "Technical requirements", "Timeline & milestones"] },
    { num: "02", title: "Design", desc: "Wireframes, prototypes, and design systems built for your brand — reviewed and refined with your team.", icon: "🎨", deliverables: ["Wireframes & user flows", "Interactive prototypes", "Design system"] },
    { num: "03", title: "Development", desc: "Clean, scalable code delivered in agile sprints with continuous communication and progress updates.", icon: "⚙️", deliverables: ["Weekly builds", "Code reviews", "CI/CD pipeline"] },
    { num: "04", title: "Launch & Support", desc: "We deploy, monitor, and iterate — ensuring your product performs flawlessly after go-live.", icon: "🚀", deliverables: ["Production deployment", "Monitoring setup", "Post-launch support"] },
  ];

  return (
    <div ref={ref} style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
      <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle,rgba(99,102,241,0.05) 0%,transparent 70%)", pointerEvents: "none" }} />

      <div style={{ textAlign: "center", marginBottom: 72, opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: "all 0.8s ease" }}>
        <p style={{ fontSize: 11, letterSpacing: "0.15em", color: "#6366f1", textTransform: "uppercase", marginBottom: 16 }}>How We Work</p>
        <h2 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 800, color: "#fff", letterSpacing: "-2px", lineHeight: 1.1 }}>
          From Idea to <span style={{ color: "#6366f1" }}>Launch</span>
        </h2>
        <p style={{ color: "#555", fontSize: 16, maxWidth: 500, lineHeight: 1.7, margin: "16px auto 0" }}>
          A proven 4-step process that turns your vision into a polished, production-ready product.
        </p>
      </div>

      <div style={{ position: "relative" }}>
        {/* Centre vertical lines */}
        <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 2, background: "#1a1a1a", transform: "translateX(-50%)", zIndex: 0 }} />
        <div style={{ position: "absolute", left: "50%", top: 0, width: 2, height: visible ? "100%" : 0, background: "linear-gradient(180deg,#6366f1,#6366f1 60%,transparent)", transform: "translateX(-50%)", transition: "height 1.5s ease 0.5s", zIndex: 1 }} />

        {steps.map((step, i) => {
          const isLeft = i % 2 === 0; // card on left side
          return (
            <div key={i} style={{
              display: "grid",
              gridTemplateColumns: "1fr 80px 1fr",
              alignItems: "start",
              marginBottom: 40,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transition: `all 0.6s ease ${0.3 + i * 0.2}s`,
            }}>
              {/* Left slot */}
              <div style={{ paddingRight: 24, display: "flex", justifyContent: "flex-end" }}>
                {isLeft && <ProcessCard step={step} i={i} activeStep={activeStep} setActiveStep={setActiveStep} align="right" />}
              </div>

              {/* Centre dot column */}
              <div style={{ display: "flex", justifyContent: "center", paddingTop: 20, position: "relative", zIndex: 2 }}>
                <div style={{
                  width: 20, height: 20, borderRadius: "50%", flexShrink: 0,
                  background: activeStep === i ? "#6366f1" : "#1a1a1a",
                  border: `2px solid ${activeStep === i ? "#6366f1" : "#2a2a2a"}`,
                  transition: "all 0.4s",
                  boxShadow: activeStep === i ? "0 0 16px rgba(99,102,241,0.6)" : "none",
                  position: "relative",
                }}>
                  {activeStep === i && <div style={{ position: "absolute", top: "50%", left: "50%", width: 20, height: 20, borderRadius: "50%", border: "2px solid #6366f1", animation: "pulseRing 1.5s ease-out infinite" }} />}
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: activeStep === i ? "#fff" : "#333", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", transition: "all 0.4s" }} />
                </div>
              </div>

              {/* Right slot */}
              <div style={{ paddingLeft: 24 }}>
                {!isLeft && <ProcessCard step={step} i={i} activeStep={activeStep} setActiveStep={setActiveStep} align="left" />}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ─── Main Page ─── */
export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div style={{ background: "#0a0a0a", color: "#e8e8e8", minHeight: "100vh" }}>

      {/* ══ NAV ══ */}
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

        {/* Desktop nav */}
        <div className="desktop-nav">
          <div style={{ position: "relative" }}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}>
            <button onClick={() => scrollTo("services")} style={{ background: "none", border: "none", color: servicesOpen ? "#fff" : "#a0a0a0", fontSize: 14, cursor: "pointer", transition: "color 0.2s" }}>
              Services
            </button>
            <div style={{ position: "absolute", top: "100%", left: "50%", transform: servicesOpen ? "translateX(-50%) translateY(0)" : "translateX(-50%) translateY(-4px)", marginTop: 8, background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, padding: "8px 0", minWidth: 240, opacity: servicesOpen ? 1 : 0, pointerEvents: servicesOpen ? "auto" : "none", transition: "opacity 0.2s, transform 0.2s" }}>
              {SERVICES.map((s) => (
                <Link key={s.title} href={`/services/${SERVICE_SLUGS[s.title]}`} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 20px", color: "#a0a0a0", textDecoration: "none", transition: "all 0.15s" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "#1a1a1a"; e.currentTarget.style.color = "#fff"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#a0a0a0"; }}>
                  <span style={{ fontSize: 16, color: "#6366f1" }}>{s.icon}</span>
                  <span style={{ fontSize: 14 }}>{s.title}</span>
                </Link>
              ))}
            </div>
          </div>
          {NAV_LINKS.map((l) => (
            <button key={l} onClick={() => scrollTo(l.toLowerCase())} style={{ background: "none", border: "none", color: "#a0a0a0", fontSize: 14, cursor: "pointer", transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = "#fff"}
              onMouseLeave={e => e.target.style.color = "#a0a0a0"}>
              {l}
            </button>
          ))}
          <button onClick={() => scrollTo("contact")} style={{ background: "#6366f1", color: "#fff", border: "none", borderRadius: 8, padding: "8px 20px", fontSize: 14, fontWeight: 500, cursor: "pointer", transition: "background 0.2s" }}
            onMouseEnter={e => e.target.style.background = "#4f46e5"}
            onMouseLeave={e => e.target.style.background = "#6366f1"}>
            Get Started
          </button>
        </div>

        {/* Hamburger */}
        <button className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div style={{ position: "fixed", top: 64, left: 0, right: 0, background: "rgba(10,10,10,0.98)", backdropFilter: "blur(12px)", zIndex: 99, borderBottom: "1px solid #1f1f1f", padding: "20px 5%", display: "flex", flexDirection: "column", gap: 16 }}>
          <button onClick={() => scrollTo("services")} style={{ background: "none", border: "none", color: "#a0a0a0", fontSize: 16, cursor: "pointer", textAlign: "left" }}>Services</button>
          {NAV_LINKS.map((l) => (
            <button key={l} onClick={() => scrollTo(l.toLowerCase())} style={{ background: "none", border: "none", color: "#a0a0a0", fontSize: 16, cursor: "pointer", textAlign: "left" }}>{l}</button>
          ))}
          <button onClick={() => scrollTo("contact")} style={{ background: "#6366f1", color: "#fff", border: "none", borderRadius: 8, padding: "10px 20px", fontSize: 15, fontWeight: 500, cursor: "pointer", textAlign: "center" }}>
            Get Started
          </button>
        </div>
      )}

      {/* ══ HERO ══ */}
      <section id="hero" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "80px 5% 60px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "40%", left: "50%", transform: "translate(-50%,-50%)", width: "min(700px,90vw)", height: "min(700px,90vw)", borderRadius: "50%", background: "radial-gradient(circle,rgba(99,102,241,0.13) 0%,transparent 70%)", pointerEvents: "none" }} />
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#111", border: "1px solid #2a2a2a", borderRadius: 100, padding: "6px 16px", fontSize: 13, color: "#a0a0a0", marginBottom: 32 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#6366f1", display: "inline-block" }} />
          AI-Powered Digital Solutions
        </div>
        <h1 style={{ fontSize: "clamp(2rem,5.5vw,4rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-2px", color: "#fff", margin: "0 0 24px", maxWidth: 820 }}>
          Transforming Ideas into<br />
          <span style={{ color: "#6366f1" }}>Intelligent Digital Products</span>
        </h1>
        <p style={{ fontSize: "clamp(14px,2vw,17px)", color: "#606060", maxWidth: 520, lineHeight: 1.75, marginBottom: 40 }}>
          We build data-driven web apps, mobile experiences, and AI agents that help businesses scale smarter and move faster.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <button onClick={() => scrollTo("services")} style={{ background: "#6366f1", color: "#fff", border: "none", borderRadius: 10, padding: "13px 28px", fontSize: 15, fontWeight: 600, cursor: "pointer", transition: "background 0.2s, transform 0.15s" }}
            onMouseEnter={e => { e.target.style.background = "#4f46e5"; e.target.style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { e.target.style.background = "#6366f1"; e.target.style.transform = "none"; }}>
            Explore Services
          </button>
          <button onClick={() => scrollTo("contact")} style={{ background: "transparent", color: "#e8e8e8", border: "1px solid #2a2a2a", borderRadius: 10, padding: "13px 28px", fontSize: 15, fontWeight: 500, cursor: "pointer", transition: "border-color 0.2s" }}
            onMouseEnter={e => e.target.style.borderColor = "#555"}
            onMouseLeave={e => e.target.style.borderColor = "#2a2a2a"}>
            Contact Us →
          </button>
        </div>
        <div className="hero-stats">
          {STATS.map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "clamp(20px,3vw,26px)", fontWeight: 700, color: "#fff" }}>{s.val}</div>
              <div style={{ fontSize: 12, color: "#444", marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <SectionDivider />

      {/* ══ SERVICES ══ */}
      <section id="services" className="section-pad">
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.15em", color: "#6366f1", textTransform: "uppercase", marginBottom: 12 }}>What We Do</p>
          <h2 style={{ fontSize: "clamp(1.6rem,3.5vw,2.6rem)", fontWeight: 700, color: "#fff", letterSpacing: "-1px", marginBottom: 14 }}>Our Core Services</h2>
          <p style={{ color: "#555", fontSize: 15, maxWidth: 460, lineHeight: 1.7, marginBottom: 52 }}>
            A complete suite of digital services to take your product from concept to scale.
          </p>
          <div className="services-grid">
            {SERVICES.map((s, i) => (
              <div key={i} style={{ background: "#0d0d0d", border: "1px solid #1a1a1a", borderRadius: 16, overflow: "hidden", transition: "border-color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "#6366f1"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "#1a1a1a"}>
                <div style={{ aspectRatio: "16/9", background: "#111", display: "flex", alignItems: "center", justifyContent: "center", borderBottom: "1px solid #1a1a1a" }}>
                  <span style={{ color: "#333", fontSize: 14 }}>Add image</span>
                </div>
                <div style={{ padding: "24px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                    <span style={{ fontSize: 20, color: "#6366f1" }}>{s.icon}</span>
                    <h3 style={{ fontSize: 17, fontWeight: 600, color: "#fff" }}>{s.title}</h3>
                  </div>
                  <p style={{ fontSize: 14, color: "#555", lineHeight: 1.7, marginBottom: 16 }}>{s.desc}</p>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 20 }}>
                    {s.tags.map((t) => (
                      <span key={t} style={{ fontSize: 11, padding: "3px 10px", borderRadius: 100, background: "#1a1a2e", color: "#6366f1", border: "1px solid #2a2a4a" }}>{t}</span>
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                    <Link href={`/services/${SERVICE_SLUGS[s.title]}`} style={{ background: "#6366f1", color: "#fff", borderRadius: 8, padding: "10px 22px", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>
                      Read More →
                    </Link>
                    <Link href="/#contact" style={{ background: "transparent", color: "#a0a0a0", border: "1px solid #2a2a2a", borderRadius: 8, padding: "10px 22px", fontSize: 13, fontWeight: 500, textDecoration: "none" }}>
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <SectionDivider />

      {/* ══ ABOUT HERO ══ */}
      <section id="about" className="section-pad" style={{ background: "#080808", position: "relative", overflow: "hidden" }}>
        <AnimatedAboutHero scrollTo={scrollTo} />
      </section>

      {/* ── DIVIDER ── */}
      <SectionDivider />

      {/* ══ WHY CHOOSE US ══ */}
      <section className="section-pad" style={{ background: "#080808" }}>
        <WhyChooseUs />
      </section>

      {/* ── DIVIDER ── */}
      <SectionDivider />

      {/* ══ TIMELINE ══ */}
      <section className="section-pad">
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.15em", color: "#6366f1", textTransform: "uppercase", marginBottom: 12 }}>Our Journey</p>
          <h2 style={{ fontSize: "clamp(1.6rem,3.5vw,2.6rem)", fontWeight: 700, color: "#fff", letterSpacing: "-1px", marginBottom: 52 }}>How We Got Here</h2>
          <div style={{ position: "relative", paddingLeft: 32 }}>
            <div style={{ position: "absolute", left: 11, top: 0, bottom: 0, width: 2, background: "#1a1a1a" }} />
            {MILESTONES.map((m, i) => (
              <div key={i} style={{ position: "relative", paddingBottom: 48 }}>
                <div style={{ position: "absolute", left: -32, top: 4, width: 12, height: 12, borderRadius: "50%", background: i === MILESTONES.length - 1 ? "#6366f1" : "#1a1a1a", border: `2px solid ${i === MILESTONES.length - 1 ? "#6366f1" : "#2a2a2a"}` }} />
                <span style={{ fontSize: 12, fontWeight: 700, color: "#6366f1", letterSpacing: "0.05em" }}>{m.year}</span>
                <h3 style={{ fontSize: 17, fontWeight: 600, color: "#fff", margin: "6px 0 8px" }}>{m.title}</h3>
                <p style={{ fontSize: 13, color: "#555", lineHeight: 1.7, maxWidth: 500 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <SectionDivider />

      {/* ══ PROCESS ══ */}
      <section id="process" className="section-pad" style={{ background: "#080808", position: "relative", overflow: "hidden" }}>
        <AnimatedProcess />
      </section>

      {/* ══ CTA BANNER ══ */}
      <div className="cta-banner">
        <h2 style={{ fontSize: "clamp(1.4rem,3vw,2.2rem)", fontWeight: 700, color: "#fff", marginBottom: 14, letterSpacing: "-1px" }}>
          Ready to Build Something Great?
        </h2>
        <p style={{ color: "#8080b0", fontSize: 15, marginBottom: 32 }}>
          Tell us about your project and we'll get back to you within 24 hours.
        </p>
        <button onClick={() => scrollTo("contact")} style={{ background: "#6366f1", color: "#fff", border: "none", borderRadius: 10, padding: "13px 36px", fontSize: 15, fontWeight: 600, cursor: "pointer" }}>
          Start a Project →
        </button>
      </div>

      {/* ══ CONTACT ══ */}
      <section id="contact" className="section-pad" style={{ background: "#080808" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.15em", color: "#6366f1", textTransform: "uppercase", marginBottom: 12 }}>Get In Touch</p>
          <h2 style={{ fontSize: "clamp(1.6rem,3.5vw,2.6rem)", fontWeight: 700, color: "#fff", letterSpacing: "-1px", marginBottom: 12 }}>Let's Talk</h2>
          <p style={{ color: "#555", fontSize: 15, marginBottom: 44 }}>
            Have a project in mind? Drop us a message and our team will respond within 24 hours.
          </p>
          {sent ? (
            <div style={{ background: "#0f2a1a", border: "1px solid #1a4a2a", borderRadius: 12, padding: 24, color: "#4ade80", fontSize: 15 }}>
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
                  <input type={f.type} placeholder={f.placeholder} required value={form[f.key]}
                    onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                    style={{ width: "100%", background: "#0f0f0f", border: "1px solid #1f1f1f", borderRadius: 8, padding: "11px 14px", color: "#e8e8e8", fontSize: 14, outline: "none", boxSizing: "border-box", transition: "border-color 0.2s" }}
                    onFocus={e => e.target.style.borderColor = "#6366f1"}
                    onBlur={e => e.target.style.borderColor = "#1f1f1f"}
                  />
                </div>
              ))}
              <div>
                <label style={{ fontSize: 13, color: "#606060", display: "block", marginBottom: 5 }}>Message</label>
                <textarea rows={5} placeholder="Tell us about your project..." required value={form.message}
                  onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                  style={{ width: "100%", background: "#0f0f0f", border: "1px solid #1f1f1f", borderRadius: 8, padding: "11px 14px", color: "#e8e8e8", fontSize: 14, outline: "none", resize: "vertical", boxSizing: "border-box", fontFamily: "inherit", transition: "border-color 0.2s" }}
                  onFocus={e => e.target.style.borderColor = "#6366f1"}
                  onBlur={e => e.target.style.borderColor = "#1f1f1f"}
                />
              </div>
              <button type="submit" style={{ background: "#6366f1", color: "#fff", border: "none", borderRadius: 10, padding: 14, fontSize: 15, fontWeight: 600, cursor: "pointer", transition: "background 0.2s" }}
                onMouseEnter={e => e.target.style.background = "#4f46e5"}
                onMouseLeave={e => e.target.style.background = "#6366f1"}>
                Send Message
              </button>
            </form>
          )}
          
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer className="site-footer">
        <span style={{ fontSize: 18, fontWeight: 700, color: "#fff" }}>
          Nexlytic <span style={{ color: "#6366f1" }}>Solutions</span>
        </span>
        <p style={{ fontSize: 12, color: "#2a2a2a" }}>© 2026 Nexlytic Solutions. All rights reserved.</p>
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
          {NAV_LINKS.map((l) => (
            <button key={l} onClick={() => scrollTo(l.toLowerCase())} style={{ background: "none", border: "none", color: "#333", fontSize: 13, cursor: "pointer" }}>{l}</button>
          ))}
        </div>
      </footer>
    </div>
  );
}
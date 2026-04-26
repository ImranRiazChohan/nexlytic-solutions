"use client";
import { useState, useEffect } from "react";

const NAV_LINKS = ["Services", "About", "Process", "Contact"];

const SERVICES = [
  {
    icon: "◈",
    title: "Data Services",
    desc: "End-to-end data solutions — pipelines, warehousing, BI dashboards, and analytics that drive smarter decisions.",
    tags: ["Data Engineering", "BI & Analytics", "ETL Pipelines"],
  },
  {
    icon: "⬡",
    title: "Web Development",
    desc: "Scalable, high-performance web applications built with modern frameworks — fast, secure, and SEO-ready.",
    tags: ["Next.js / React", "Node.js", "REST & GraphQL"],
  },
  {
    icon: "◇",
    title: "UI / UX Design",
    desc: "User-centered design that converts. Intuitive interfaces, design systems, and prototypes balancing beauty with usability.",
    tags: ["Figma Prototypes", "Design Systems", "User Research"],
  },
  {
    icon: "⬢",
    title: "Mobile App Development",
    desc: "Native and cross-platform apps for iOS and Android — built for performance and a polished user experience.",
    tags: ["React Native", "Flutter", "iOS & Android"],
  },
  {
    icon: "⬟",
    title: "AI Chatbot & Agents",
    desc: "Custom AI-powered chatbots and autonomous agents for customer support, lead generation, and workflow automation.",
    tags: ["LLM Integration", "RAG Systems", "Workflow Automation"],
  },
  {
    icon: "✦",
    title: "Graphics Designing",
    desc: "Striking visuals that tell your brand story — logos, brand identities, social media creatives, and marketing materials.",
    tags: ["Brand Identity", "Logo Design", "Social Media"],
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

const ABOUT_CARDS = [
  { title: "Client-First", desc: "Your success is our metric. Every decision aligned with your business outcomes." },
  { title: "Agile Delivery", desc: "Iterative sprints and transparent communication keep projects on track." },
  { title: "Cutting-Edge Stack", desc: "We use the latest tools and frameworks — no legacy baggage." },
  { title: "Post-Launch Care", desc: "We don't disappear after go-live. Long-term support is in our DNA." },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeService, setActiveService] = useState(0);
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
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
            gap: 1, background: "#1a1a1a", borderRadius: 16, overflow: "hidden",
          }}>
            {SERVICES.map((s, i) => (
              <div key={i} onClick={() => setActiveService(i)} style={{
                padding: "28px 24px",
                background: activeService === i ? "#111" : "#0d0d0d",
                borderLeft: activeService === i ? "2px solid #6366f1" : "2px solid transparent",
                cursor: "pointer", transition: "all 0.2s",
              }}>
                <div style={{ fontSize: 22, color: "#6366f1", marginBottom: 14 }}>{s.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: "#fff", marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: "#555", lineHeight: 1.7, marginBottom: 14 }}>{s.desc}</p>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {s.tags.map((t) => (
                    <span key={t} style={{
                      fontSize: 11, padding: "3px 10px", borderRadius: 100,
                      background: "#1a1a2e", color: "#6366f1", border: "1px solid #2a2a4a",
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ padding: "100px 5%", background: "#080808" }}>
        <div style={{
          maxWidth: 1100, margin: "0 auto",
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center",
        }}>
          <div>
            <p style={{ fontSize: 11, letterSpacing: "0.15em", color: "#6366f1", textTransform: "uppercase", marginBottom: 12 }}>Who We Are</p>
            <h2 style={{ fontSize: "clamp(1.8rem,4vw,2.6rem)", fontWeight: 700, color: "#fff", letterSpacing: "-1px", marginBottom: 24 }}>
              Built for Businesses That Think Ahead
            </h2>
            <p style={{ color: "#555", fontSize: 14, lineHeight: 1.9, marginBottom: 18 }}>
              Nexlytic Solutions is a full-service digital agency based in Karachi, Pakistan. We partner with startups and enterprises to design, build, and scale high-impact digital products.
            </p>
            <p style={{ color: "#555", fontSize: 14, lineHeight: 1.9, marginBottom: 32 }}>
              Our multidisciplinary team combines deep technical expertise with creative thinking — delivering solutions that are not just functional, but exceptional.
            </p>
            <button onClick={() => scrollTo("contact")} style={{
              background: "transparent", color: "#6366f1",
              border: "1px solid #6366f1", borderRadius: 8,
              padding: "11px 24px", fontSize: 14, fontWeight: 500,
              cursor: "pointer", transition: "all 0.2s",
            }}
              onMouseEnter={e => { e.target.style.background = "#6366f1"; e.target.style.color = "#fff"; }}
              onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = "#6366f1"; }}>
              Let's Work Together
            </button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {ABOUT_CARDS.map((c) => (
              <div key={c.title} style={{
                background: "#0f0f0f", border: "1px solid #1a1a1a",
                borderRadius: 12, padding: "18px 16px",
              }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#fff", marginBottom: 6 }}>{c.title}</div>
                <div style={{ fontSize: 12, color: "#444", lineHeight: 1.7 }}>{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="process" style={{ padding: "100px 5%" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.15em", color: "#6366f1", textTransform: "uppercase", marginBottom: 12 }}>How We Work</p>
          <h2 style={{ fontSize: "clamp(1.8rem,4vw,2.6rem)", fontWeight: 700, color: "#fff", letterSpacing: "-1px", marginBottom: 48 }}>Our Process</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 2 }}>
            {PROCESS.map((p, i) => (
              <div key={i} style={{
                padding: "28px 22px", background: "#0d0d0d", border: "1px solid #1a1a1a",
                borderRadius: i === 0 ? "12px 0 0 12px" : i === PROCESS.length - 1 ? "0 12px 12px 0" : 0,
              }}>
                <div style={{ fontSize: 34, fontWeight: 800, color: "#1e1e1e", marginBottom: 14, letterSpacing: "-1px" }}>{p.num}</div>
                <div style={{ width: 28, height: 2, background: "#6366f1", borderRadius: 2, marginBottom: 14 }} />
                <h3 style={{ fontSize: 15, fontWeight: 600, color: "#fff", marginBottom: 8 }}>{p.title}</h3>
                <p style={{ fontSize: 13, color: "#444", lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
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
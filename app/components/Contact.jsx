"use client";
import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Contact() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "", email: "", company: "", service: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useGSAP(() => {
    gsap.set(headerRef.current, { opacity: 0, y: 40 });
    gsap.set(formRef.current, { opacity: 0, y: 60 });
  });

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        gsap.to(headerRef.current, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" });
        gsap.to(formRef.current, { opacity: 1, y: 0, scale: 1, duration: 0.95, ease: "power3.out", delay: 0.2 });
        observer.disconnect();
      },
      { threshold: 0.05 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", company: "", service: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const inputStyle = {
    width: "100%",
    background: "#080808",
    border: "1px solid #1e1e1e",
    borderRadius: 12,
    padding: "13px 16px",
    color: "#fff",
    fontSize: 15,
    outline: "none",
    transition: "all 0.3s ease",
  };

  const onFocus = (e) => {
    e.target.style.borderColor = "#6366f1";
    e.target.style.boxShadow = "0 0 0 3px rgba(99,102,241,0.12)";
  };

  const onBlur = (e) => {
    e.target.style.borderColor = "#1e1e1e";
    e.target.style.boxShadow = "none";
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
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

      <div style={{ maxWidth: 760, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <div ref={headerRef} style={{ textAlign: "center", marginBottom: 64 }}>
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
            Get in Touch
          </div>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)",
              fontWeight: 800, color: "#fff",
              letterSpacing: "-0.8px", lineHeight: 1.1, marginBottom: 20,
            }}
          >
            Let&rsquo;s Start a{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #6366f1 0%, #a78bfa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Conversation
            </span>
          </h2>
          <p style={{ color: "#707070", fontSize: 15, lineHeight: 1.75 }}>
            Have a project in mind? Fill out the form and we&rsquo;ll get back to you within 24 hours.
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          style={{
            background: "linear-gradient(135deg, rgba(99,102,241,0.07) 0%, #0d0d0d 100%)",
            border: "1px solid rgba(99,102,241,0.18)",
            borderRadius: 24, padding: "44px 40px",
          }}
        >
          <div style={{ marginBottom: 24 }}>
            <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#ccc", marginBottom: 8 }}>
              Full Name
            </label>
            <input
              type="text" name="name" value={formData.name}
              onChange={handleChange} required placeholder="John Doe"
              style={inputStyle} onFocus={onFocus} onBlur={onBlur}
            />
          </div>

          <div style={{ marginBottom: 24 }}>
            <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#ccc", marginBottom: 8 }}>
              Email Address
            </label>
            <input
              type="email" name="email" value={formData.email}
              onChange={handleChange} required placeholder="john@example.com"
              style={inputStyle} onFocus={onFocus} onBlur={onBlur}
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 24 }}>
            <div>
              <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#ccc", marginBottom: 8 }}>
                Company
              </label>
              <input
                type="text" name="company" value={formData.company}
                onChange={handleChange} placeholder="Your Company"
                style={inputStyle} onFocus={onFocus} onBlur={onBlur}
              />
            </div>
            <div>
              <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#ccc", marginBottom: 8 }}>
                Service
              </label>
              <select
                name="service" value={formData.service}
                onChange={handleChange}
                style={{ ...inputStyle, cursor: "pointer" }}
                onFocus={onFocus} onBlur={onBlur}
              >
                <option value="">Select a service</option>
                <option value="web">Web Application</option>
                <option value="mobile">Mobile App</option>
                <option value="ai">Data & AI</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div style={{ marginBottom: 28 }}>
            <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#ccc", marginBottom: 8 }}>
              Tell us about your project
            </label>
            <textarea
              name="message" value={formData.message}
              onChange={handleChange} required
              placeholder="Describe your project, goals, and timeline..."
              rows="6"
              style={{ ...inputStyle, fontFamily: "inherit", resize: "vertical" }}
              onFocus={onFocus} onBlur={onBlur}
            />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              background: "linear-gradient(135deg, #6366f1 0%, #818cf8 100%)",
              color: "#fff", border: "none", borderRadius: 12,
              padding: "16px 24px", fontSize: 16, fontWeight: 700,
              cursor: "pointer",
              boxShadow: "0 12px 36px rgba(99,102,241,0.4)",
              transition: "all 0.3s ease", letterSpacing: "-0.3px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 20px 52px rgba(99,102,241,0.55)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 12px 36px rgba(99,102,241,0.4)";
            }}
          >
            {submitted ? "✓ Message Sent!" : "Send Message"}
          </button>

          {submitted && (
            <p style={{ marginTop: 16, color: "#10b981", textAlign: "center", fontSize: 14, fontWeight: 600 }}>
              Thanks for reaching out! We&rsquo;ll be in touch soon.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

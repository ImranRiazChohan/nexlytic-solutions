"use client";
import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "About Us", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

const SERVICE_LINKS = [
  { label: "Web Development", href: "/#services" },
  { label: "Mobile App Development", href: "/#services" },
  { label: "Data & AI", href: "/#services" },
];

const linkStyle = {
  color: "#808080",
  textDecoration: "none",
  fontSize: 14,
  transition: "color 0.3s ease",
};

function FooterLink({ href, children }) {
  return (
    <Link
      href={href}
      style={linkStyle}
      onMouseEnter={(e) => (e.currentTarget.style.color = "#6366f1")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "#808080")}
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <footer
      style={{
        borderTop: "1px solid #1a1a1a",
        padding: "72px 5% 30px",
        background: "#0a0a0a",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="footer-columns">
          {/* Column 1 - Brand */}
          <div>
            <div style={{ marginBottom: 16 }}>
              <Logo size={30} />
            </div>
            <p style={{ color: "#808080", fontSize: 14, lineHeight: 1.75, marginBottom: 22 }}>
              A studio building websites, mobile apps, and AI-driven tools for growing businesses worldwide.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 18, textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <FooterLink href={l.href}>{l.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h4 style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 18, textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Services
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              {SERVICE_LINKS.map((l) => (
                <li key={l.label}>
                  <FooterLink href={l.href}>{l.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact Us */}
          <div>
            <h4 style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 18, textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Contact Us
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <a
                href="mailto:info@nexlytic.com"
                style={{ ...linkStyle, display: "flex", alignItems: "center", gap: 10 }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#6366f1")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#808080")}
              >
                <span aria-hidden="true">✉</span> info@nexlytic.com
              </a>
              <a
                href="tel:+923334886288"
                style={{ ...linkStyle, display: "flex", alignItems: "center", gap: 10 }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#6366f1")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#808080")}
              >
                <span aria-hidden="true">☎</span> +92 (333) 488-6288
              </a>
            </div>
          </div>

          {/* Column 5 - Newsletter */}
          <div>
            <h4 style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 18, textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Newsletter
            </h4>
            <p style={{ color: "#808080", fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>
              Stay updated with our latest news and insights.
            </p>
            <form onSubmit={handleSubscribe} style={{ display: "flex", gap: 8 }}>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                style={{
                  flex: 1, minWidth: 0,
                  background: "#080808",
                  border: "1px solid #1e1e1e",
                  borderRadius: 10, padding: "11px 14px",
                  color: "#fff", fontSize: 13, outline: "none",
                }}
              />
              <button
                type="submit"
                aria-label="Subscribe"
                style={{
                  flexShrink: 0,
                  width: 42, height: 42, borderRadius: 10,
                  background: "linear-gradient(135deg, #6366f1 0%, #818cf8 100%)",
                  border: "none", color: "#fff", cursor: "pointer",
                  fontSize: 16,
                }}
              >
                →
              </button>
            </form>
            {subscribed && (
              <p style={{ marginTop: 10, color: "#10b981", fontSize: 13 }}>Thanks for subscribing!</p>
            )}
          </div>
        </div>

        {/* Bottom Footer */}
        <div
          style={{
            borderTop: "1px solid #1a1a1a",
            marginTop: 56,
            paddingTop: 30,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <p style={{ color: "#606060", fontSize: 14 }}>
            © {currentYear} Nexlytic Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

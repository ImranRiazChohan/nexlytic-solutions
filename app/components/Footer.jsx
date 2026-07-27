"use client";
import { useState } from "react";
import Link from "next/link";

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "#",
    path: "M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 8.98h4v12H3v-12zm7 0h3.83v1.64h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1v6.32h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96v5.7h-4v-12z",
  },
  {
    label: "Twitter",
    href: "#",
    path: "M22 5.9c-.68.3-1.4.5-2.16.6a3.8 3.8 0 001.66-2.1 7.6 7.6 0 01-2.4.93 3.77 3.77 0 00-6.42 3.44A10.7 10.7 0 013.2 4.9a3.77 3.77 0 001.17 5.03c-.6-.02-1.18-.19-1.68-.46v.05a3.77 3.77 0 003.03 3.7c-.55.15-1.14.17-1.7.06a3.78 3.78 0 003.53 2.62A7.57 7.57 0 012 17.4a10.68 10.68 0 005.8 1.7c6.95 0 10.76-5.76 10.76-10.75l-.01-.49A7.7 7.7 0 0022 5.9z",
  },
  {
    label: "GitHub",
    href: "#",
    path: "M12 2a10 10 0 00-3.16 19.49c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.1.39-2 1.03-2.7-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 015 0c1.9-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.7 0 3.85-2.34 4.7-4.57 4.94.36.31.68.92.68 1.85v2.75c0 .26.18.58.69.48A10 10 0 0012 2z",
  },
];

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About Us", href: "#about" },
  { label: "Blog", href: "#" },
  { label: "Contact", href: "#contact" },
];

const SERVICE_LINKS = [
  { label: "Web Development", href: "/services/web-applications" },
  { label: "Mobile App Development", href: "/services/mobile-applications" },
  { label: "Data & AI", href: "/services/data-ai-services" },
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
            <h3
              style={{
                fontSize: 20, fontWeight: 900, color: "#fff", marginBottom: 16,
                background: "linear-gradient(135deg, #6366f1 0%, #a78bfa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Nexlytic Solutions
            </h3>
            <p style={{ color: "#808080", fontSize: 14, lineHeight: 1.75, marginBottom: 22 }}>
              We are a digital solutions company helping businesses innovate, automate and grow with technology.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  style={{
                    width: 36, height: 36, borderRadius: "50%",
                    border: "1px solid #1e1e1e",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(99,102,241,0.5)";
                    e.currentTarget.style.background = "rgba(99,102,241,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#1e1e1e";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#a0a0a0">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
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
          <div style={{ display: "flex", gap: 24 }}>
            <a
              href="#"
              style={{ color: "#606060", textDecoration: "none", fontSize: 13, transition: "color 0.3s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#6366f1")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#606060")}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              style={{ color: "#606060", textDecoration: "none", fontSize: 13, transition: "color 0.3s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#6366f1")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#606060")}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

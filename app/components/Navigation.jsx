"use client";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";

export default function Navigation({ scrollTo }) {
  const navRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(
    () => {
      gsap.set(".nav-logo", { autoAlpha: 0, y: -20 });
      gsap.set(".nav-item", { autoAlpha: 0, y: -16 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.to(".nav-logo", { autoAlpha: 1, y: 0, duration: 0.8 })
        .to(".nav-item", { autoAlpha: 1, y: 0, stagger: 0.1, duration: 0.6 }, "-=0.4");
    },
    { scope: navRef }
  );

  const handleMobileNav = (id) => {
    setIsMobileMenuOpen(false);
    scrollTo(id);
  };

  return (
    <>
      <nav
        ref={navRef}
        style={{
          position: isSticky ? "fixed" : "absolute",
          top: 0, left: 0, right: 0,
          zIndex: 1000,
          padding: "16px 5%",
          background: isSticky ? "rgba(10,10,10,0.92)" : "transparent",
          backdropFilter: isSticky ? "blur(16px)" : "none",
          borderBottom: isSticky ? "1px solid rgba(99,102,241,0.1)" : "none",
          transition: "background 0.4s ease, border-color 0.4s ease",
        }}
      >
        <div
          style={{
            maxWidth: 1200, margin: "0 auto",
            display: "flex", justifyContent: "space-between", alignItems: "center",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            className="nav-logo"
            style={{
              fontSize: 22, fontWeight: 900,
              background: "linear-gradient(135deg, #6366f1 0%, #a78bfa 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textDecoration: "none", cursor: "pointer",
              letterSpacing: "-0.5px",
            }}
          >
            Nexlytic
          </Link>

          {/* Desktop nav */}
          <div className="desktop-nav">
            {[
              { label: "Services", id: "services" },
              { label: "Portfolio", id: "portfolio" },
              { label: "Process", id: "process" },
              { label: "Why Us", id: "why" },
            ].map(({ label, id }) => (
              <button
                key={id}
                className="nav-item"
                onClick={() => scrollTo(id)}
                style={{
                  background: "none", border: "none",
                  color: "#a0a0a0", fontSize: 15, fontWeight: 600,
                  cursor: "pointer", transition: "color 0.3s ease",
                  padding: "4px 0",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#a0a0a0")}
              >
                {label}
              </button>
            ))}
            <button
              className="nav-item"
              onClick={() => scrollTo("contact")}
              style={{
                background: "linear-gradient(135deg, #6366f1 0%, #818cf8 100%)",
                color: "#fff", border: "none", borderRadius: 8,
                padding: "10px 24px", fontSize: 14, fontWeight: 700,
                cursor: "pointer", transition: "all 0.3s ease",
                boxShadow: "0 4px 16px rgba(99,102,241,0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 28px rgba(99,102,241,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(99,102,241,0.3)";
              }}
            >
              Contact
            </button>
          </div>

          {/* Hamburger */}
          <button
            className="hamburger"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: "fixed", top: 60, left: 0, right: 0,
            background: "rgba(10,10,10,0.97)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid #1a1a1a",
            padding: "24px 5%",
            zIndex: 999,
            display: "flex", flexDirection: "column", gap: 8,
          }}
        >
          {[
            { label: "Services", id: "services" },
            { label: "Portfolio", id: "portfolio" },
            { label: "Process", id: "process" },
            { label: "Why Us", id: "why" },
            { label: "Contact", id: "contact" },
          ].map(({ label, id }) => (
            <button
              key={id}
              onClick={() => handleMobileNav(id)}
              style={{
                background: "none", border: "none",
                color: "#a0a0a0", fontSize: 16, fontWeight: 600,
                cursor: "pointer", textAlign: "left",
                padding: "12px 0",
                borderBottom: "1px solid #141414",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#6366f1")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#a0a0a0")}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}

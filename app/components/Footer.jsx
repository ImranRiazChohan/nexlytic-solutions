"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid #1a1a1a",
        padding: "60px 5% 30px",
        background: "#0a0a0a",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Main Footer Content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: 40,
            marginBottom: 60,
          }}
        >
          {/* Column 1 - Brand */}
          <div>
            <h3
              style={{
                fontSize: 20,
                fontWeight: 900,
                color: "#fff",
                marginBottom: 16,
                background: "linear-gradient(135deg, #6366f1 0%, #a78bfa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Nexlytic
            </h3>
            <p
              style={{
                color: "#808080",
                fontSize: 14,
                lineHeight: 1.7,
              }}
            >
              Building intelligent digital products for modern businesses. From idea to launch, we're here to help.
            </p>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h4
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: "#fff",
                marginBottom: 16,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Services
            </h4>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <li>
                <a
                  href="#"
                  style={{
                    color: "#808080",
                    textDecoration: "none",
                    fontSize: 14,
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#6366f1")}
                  onMouseLeave={(e) => (e.target.style.color = "#808080")}
                >
                  Web Applications
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{
                    color: "#808080",
                    textDecoration: "none",
                    fontSize: 14,
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#6366f1")}
                  onMouseLeave={(e) => (e.target.style.color = "#808080")}
                >
                  Mobile Apps
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{
                    color: "#808080",
                    textDecoration: "none",
                    fontSize: 14,
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#6366f1")}
                  onMouseLeave={(e) => (e.target.style.color = "#808080")}
                >
                  Data & AI
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div>
            <h4
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: "#fff",
                marginBottom: 16,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Company
            </h4>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <li>
                <a
                  href="#"
                  style={{
                    color: "#808080",
                    textDecoration: "none",
                    fontSize: 14,
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#6366f1")}
                  onMouseLeave={(e) => (e.target.style.color = "#808080")}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{
                    color: "#808080",
                    textDecoration: "none",
                    fontSize: 14,
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#6366f1")}
                  onMouseLeave={(e) => (e.target.style.color = "#808080")}
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{
                    color: "#808080",
                    textDecoration: "none",
                    fontSize: 14,
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#6366f1")}
                  onMouseLeave={(e) => (e.target.style.color = "#808080")}
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: "#fff",
                marginBottom: 16,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Contact
            </h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <a
                href="mailto:info@nexlytic.com"
                style={{
                  color: "#808080",
                  textDecoration: "none",
                  fontSize: 14,
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#6366f1")}
                onMouseLeave={(e) => (e.target.style.color = "#808080")}
              >
                info@nexlytic.com
              </a>
              <a
                href="tel:+923334886288"
                style={{
                  color: "#808080",
                  textDecoration: "none",
                  fontSize: 14,
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#6366f1")}
                onMouseLeave={(e) => (e.target.style.color = "#808080")}
              >
                +92 (333) 488-6288
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div
          style={{
            borderTop: "1px solid #1a1a1a",
            paddingTop: 30,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <p
            style={{
              color: "#606060",
              fontSize: 14,
            }}
          >
            © {currentYear} Nexlytic Solutions. All rights reserved.
          </p>
          <div
            style={{
              display: "flex",
              gap: 24,
            }}
          >
            <a
              href="#"
              style={{
                color: "#606060",
                textDecoration: "none",
                fontSize: 13,
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#6366f1")}
              onMouseLeave={(e) => (e.target.style.color = "#606060")}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              style={{
                color: "#606060",
                textDecoration: "none",
                fontSize: 13,
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#6366f1")}
              onMouseLeave={(e) => (e.target.style.color = "#606060")}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

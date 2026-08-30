"use client";
import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Html5Icon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M3.5 2h17l-1.55 17.4L12 22l-6.95-2.6L3.5 2z" fill="#e34f26" />
      <path d="M12 20.2l5.6-1.85L18.9 4.2H12v16z" fill="#ef652a" />
      <path
        d="M12 11.2H8.65l-.23-2.6H12V6.15H5.7l.55 6.35H12v-1.3zm0 6.35l-2.85-.77-.18-2.05H6.55l.36 4.03L12 20.05v-2.5z"
        fill="#fff"
      />
      <path
        d="M12 11.2v2.5h3.1l-.3 3.3L12 17.55v2.5l5.15-1.43.68-7.6H12zm0-5.05v2.45h6.1l.2-2.45H12z"
        fill="#ebebeb"
      />
    </svg>
  );
}

function Css3Icon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M3.5 2h17l-1.55 17.4L12 22l-6.95-2.6L3.5 2z" fill="#1572b6" />
      <path d="M12 20.2l5.6-1.85L18.9 4.2H12v16z" fill="#33a9dc" />
      <path
        d="M12 11.2H8.5l-.23-2.6H12V6.15H5.85l.55 6.35H12v-1.3zm0 6.35l-2.85-.77-.18-2.05H6.6l.36 4.03L12 20.05v-2.5z"
        fill="#fff"
      />
      <path
        d="M12 11.2v2.5h3.15l-.3 3.3L12 17.55v2.5l5.15-1.43.68-7.6H12zm0-5.05v2.45h6.15l.2-2.45H12z"
        fill="#ebebeb"
      />
    </svg>
  );
}

function JsIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="3" fill="#f7df1e" />
      <text x="12" y="16.5" textAnchor="middle" fontSize="9" fontWeight="700" fill="#000">JS</text>
    </svg>
  );
}

function ReactIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="2.2" fill="#61dafb" />
      <g stroke="#61dafb" strokeWidth="1.3" fill="none">
        <ellipse cx="12" cy="12" rx="10" ry="4" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
      </g>
    </svg>
  );
}

function NextIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10.5" fill="#000" stroke="#333" />
      <path d="M8.5 8v8M8.5 8h1.3l6 8" stroke="#fff" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="14.7" y="8" width="1.3" height="8" fill="#fff" />
    </svg>
  );
}

function NodeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2 21 7v10l-9 5-9-5V7l9-5z"
        fill="none"
        stroke="#83cd29"
        strokeWidth="1.4"
      />
      <path d="M12 2 21 7v10l-9 5V2z" fill="#83cd29" opacity="0.25" />
    </svg>
  );
}

function PythonIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2.2c-4.4 0-4.1 1.9-4.1 1.9v2h4.2v.6H6.1S3 6.3 3 10.8s2.7 4.3 2.7 4.3h1.6v-2.2s-.1-2.7 2.6-2.7h4.1s2.5 0 2.5-2.4V4.6s.4-2.4-4.5-2.4z"
        fill="#3776ab"
      />
      <circle cx="9.6" cy="4.3" r="0.8" fill="#fff" />
      <path
        d="M12 21.8c4.4 0 4.1-1.9 4.1-1.9v-2h-4.2v-.6h6s3.1.4 3.1-4.1-2.7-4.3-2.7-4.3h-1.6v2.2s.1 2.7-2.6 2.7H10s-2.5 0-2.5 2.4v3.8s-.4 2.4 4.5 2.4z"
        fill="#ffd43b"
      />
      <circle cx="14.4" cy="19.7" r="0.8" fill="#fff" />
    </svg>
  );
}

function MongoIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2c2.5 3 4 6.7 4 10.2 0 4-1.8 6.7-4 8.8-2.2-2.1-4-4.8-4-8.8C8 8.7 9.5 5 12 2z"
        fill="#47a248"
      />
      <path d="M12 2v19" stroke="#e8f5e9" strokeWidth="0.8" />
    </svg>
  );
}

const TECHS = [
  { name: "HTML5", Icon: Html5Icon },
  { name: "CSS3", Icon: Css3Icon },
  { name: "JavaScript", Icon: JsIcon },
  { name: "React", Icon: ReactIcon },
  { name: "Next.js", Icon: NextIcon },
  { name: "Node.js", Icon: NodeIcon },
  { name: "Python", Icon: PythonIcon },
  { name: "MongoDB", Icon: MongoIcon },
];

export default function TechStack() {
  const sectionRef = useRef(null);
  const rowRef = useRef(null);

  useGSAP(() => {
    gsap.set(rowRef.current, { opacity: 0, y: 24 });
  });

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        gsap.to(rowRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" });
        observer.disconnect();
      },
      { threshold: 0.05 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef}>
      <p
        style={{
          fontSize: 12, color: "#484848", fontWeight: 600,
          letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 20,
        }}
      >
        Technologies we work with
      </p>
      <div
        ref={rowRef}
        style={{
          display: "flex", flexWrap: "wrap", justifyContent: "flex-start",
          gap: 14,
        }}
      >
        {TECHS.map(({ name, Icon }) => (
          <span
            key={name}
            title={name}
            aria-label={name}
            style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              width: 48, height: 48,
              background: "#0d0d0d",
              border: "1px solid #1a1a1a",
              borderRadius: 14,
              transition: "border-color 0.3s ease, transform 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(99,102,241,0.4)";
              e.currentTarget.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#1a1a1a";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <Icon />
          </span>
        ))}
      </div>
    </div>
  );
}

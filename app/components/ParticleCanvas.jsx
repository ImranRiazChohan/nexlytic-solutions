"use client";
import { useRef, useEffect } from "react";

/**
 * Lightweight canvas particle system.
 * - Particles float and wrap around edges.
 * - Optional connecting lines between nearby particles (desktop only).
 * - Optional mouse repulsion (particles drift away from cursor).
 * - Pauses automatically when the browser tab is hidden.
 */
export default function ParticleCanvas({
  count = 60,
  connected = true,
  color = "99,102,241",
  speed = 0.35,
  maxDist = 130,
  mouseRepel = false,
  particleOpacity = 0.65,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let rafId;
    let w = 0, h = 0;
    const mouse = { x: -9999, y: -9999 };
    let viewRect = { left: 0, top: 0 };

    const isMobile = () => window.innerWidth < 768;
    const maxDist2 = maxDist * maxDist;
    const repelR = 90;
    const repelR2 = repelR * repelR;
    const capV = speed * 2.5;

    function setSize() {
      viewRect = canvas.getBoundingClientRect();
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    }

    function makePt() {
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        r: Math.random() * 2 + 1,
        a: (Math.random() * 0.45 + 0.15) * particleOpacity,
      };
    }

    let pts = [];

    function build() {
      setSize();
      const n = isMobile() ? Math.max(Math.floor(count * 0.45), 12) : count;
      pts = Array.from({ length: n }, makePt);
    }

    function tick() {
      ctx.clearRect(0, 0, w, h);

      for (const p of pts) {
        if (mouseRepel) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < repelR2 && d2 > 0.01) {
            const d = Math.sqrt(d2);
            const f = ((repelR - d) / repelR) * 0.09;
            p.vx += (dx / d) * f;
            p.vy += (dy / d) * f;
          }
        }

        p.vx *= 0.99;
        p.vy *= 0.99;
        if (p.vx > capV) p.vx = capV; else if (p.vx < -capV) p.vx = -capV;
        if (p.vy > capV) p.vy = capV; else if (p.vy < -capV) p.vy = -capV;

        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -10) p.x = w + 10; else if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10; else if (p.y > h + 10) p.y = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color},${p.a})`;
        ctx.fill();
      }

      // Connections — desktop only, batched into 4 opacity bands for fewer draw calls
      if (connected && !isMobile()) {
        const BANDS = 4;
        const paths = Array.from({ length: BANDS }, () => new Path2D());

        for (let i = 0; i < pts.length; i++) {
          for (let j = i + 1; j < pts.length; j++) {
            const dx = pts[i].x - pts[j].x;
            const dy = pts[i].y - pts[j].y;
            const d2 = dx * dx + dy * dy;
            if (d2 < maxDist2) {
              const d = Math.sqrt(d2);
              const band = Math.min(Math.floor((1 - d / maxDist) * BANDS), BANDS - 1);
              paths[band].moveTo(pts[i].x, pts[i].y);
              paths[band].lineTo(pts[j].x, pts[j].y);
            }
          }
        }

        ctx.lineWidth = 0.6;
        for (let b = 0; b < BANDS; b++) {
          const a = ((b + 0.5) / BANDS) * 0.22 * particleOpacity;
          ctx.strokeStyle = `rgba(${color},${a})`;
          ctx.stroke(paths[b]);
        }
      }

      rafId = requestAnimationFrame(tick);
    }

    build();
    tick();

    const updateRect = () => { viewRect = canvas.getBoundingClientRect(); };
    const onMove = (e) => {
      mouse.x = e.clientX - viewRect.left;
      mouse.y = e.clientY - viewRect.top;
    };
    const onLeave = () => { mouse.x = -9999; mouse.y = -9999; };

    if (mouseRepel) {
      window.addEventListener("mousemove", onMove);
      document.addEventListener("mouseleave", onLeave);
      window.addEventListener("scroll", updateRect, { passive: true });
    }

    const ro = new ResizeObserver(build);
    ro.observe(canvas);

    const onVis = () => {
      if (document.hidden) cancelAnimationFrame(rafId);
      else tick();
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      if (mouseRepel) {
        window.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseleave", onLeave);
        window.removeEventListener("scroll", updateRect);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
}

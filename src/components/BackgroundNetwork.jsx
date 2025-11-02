import React, { useEffect, useRef } from "react";

export default function BackgroundNetwork() {
  const canvasRef = useRef(null);
  const animationRef = useRef(0);
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const NUM_PARTICLES = 80;
    const SPEED = 0.18;
    const LINK_DIST = 160;

    const palette = {
      node: "rgba(255, 255, 255, 0.9)",
      link: "rgba(255, 255, 255, 0.5)",
    };

    const initParticles = () => {
      const rect = canvas.getBoundingClientRect();
      particlesRef.current = Array.from({ length: NUM_PARTICLES }, () => ({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        vx: (Math.random() - 0.5) * SPEED,
        vy: (Math.random() - 0.5) * SPEED,
        r: 1.8 + Math.random() * 1.6,
      }));
    };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const parent = canvas.parentElement;
      if (!parent) return;

      const width = parent.offsetWidth;
      const height = parent.offsetHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // Re-initialize particles when canvas size changes
      initParticles();
    };

    resize();
    window.addEventListener("resize", resize);

    const step = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particlesRef.current.length; i++) {
        const p1 = particlesRef.current[i];
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p2 = particlesRef.current[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.hypot(dx, dy);
          if (dist < LINK_DIST) {
            const alpha = 1 - dist / LINK_DIST;
            ctx.strokeStyle = palette.link;
            ctx.lineWidth = 1;
            ctx.globalAlpha = 0.6 * alpha;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }

      const rect = canvas.getBoundingClientRect();
      for (const p of particlesRef.current) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -20) p.x = rect.width + 20;
        if (p.x > rect.width + 20) p.x = -20;
        if (p.y < -20) p.y = rect.height + 20;
        if (p.y > rect.height + 20) p.y = -20;

        ctx.fillStyle = palette.node;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(step);
    };

    initParticles();
    step();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        opacity: 0.7,
      }}
    />
  );
}

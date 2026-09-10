import { useEffect, useRef } from "react";
import "./NeuronBackground.css";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const DOT_COLOR = "rgba(29, 78, 216, 0.9)";
const DOT_CORE_COLOR = "rgba(255, 255, 255, 0.9)";
const LINE_COLOR = "29, 78, 216";
const LINK_DISTANCE = 200;
const DENSITY = 1 / 5000;
const MIN_PARTICLES = 70;
const MAX_PARTICLES = 340;
const SPEED = 0.2;
const DOT_RADIUS = 3.4;

export function NeuronBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let animationFrame: number;

    function resize() {
      const parent = canvas!.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.max(MIN_PARTICLES, Math.min(MAX_PARTICLES, Math.round(width * height * DENSITY)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * SPEED,
        vy: (Math.random() - 0.5) * SPEED,
      }));
    }

    function step() {
      ctx!.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DISTANCE) {
            const opacity = (1 - dist / LINK_DISTANCE) * 0.3;
            ctx!.strokeStyle = `rgba(${LINE_COLOR}, ${opacity})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }

      for (const p of particles) {
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, DOT_RADIUS, 0, Math.PI * 2);
        ctx!.fillStyle = DOT_COLOR;
        ctx!.fill();
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, DOT_RADIUS * 0.35, 0, Math.PI * 2);
        ctx!.fillStyle = DOT_CORE_COLOR;
        ctx!.fill();
      }

      animationFrame = requestAnimationFrame(step);
    }

    resize();
    window.addEventListener("resize", resize);

    if (prefersReducedMotion) {
      step();
    } else {
      animationFrame = requestAnimationFrame(step);
    }

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <canvas ref={canvasRef} className="neuron-background" aria-hidden="true" />;
}

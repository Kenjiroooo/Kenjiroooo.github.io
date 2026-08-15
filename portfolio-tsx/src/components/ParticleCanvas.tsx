import { useEffect, useRef } from 'react';

const PARTICLE_COUNT = 60;
const CONNECTION_DIST = 140;
const MOUSE_RADIUS = 160;

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let mouseX = -1000;
    let mouseY = -1000;
    let animId: number;

    function resize() {
      const hero = document.getElementById('home');
      if (!hero) return;
      width = canvas!.width = hero.offsetWidth;
      height = canvas!.height = hero.offsetHeight;
    }

    function createParticles() {
      particles = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.8 + 0.6,
        opacity: Math.random() * 0.5 + 0.2,
      }));
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST) {
            const alpha = (1 - dist / CONNECTION_DIST) * 0.15;
            ctx!.strokeStyle = `rgba(96, 165, 250, ${alpha})`;
            ctx!.lineWidth = 0.6;
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.stroke();
          }
        }
      }

      // Draw & update particles
      particles.forEach(p => {
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_RADIUS && dist > 0) {
          const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS * 0.02;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }

        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.999;
        p.vy *= 0.999;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(96, 165, 250, ${p.opacity})`;
        ctx!.fill();
      });

      animId = requestAnimationFrame(draw);
    }

    const heroSection = document.getElementById('home');

    function onMouseMove(e: MouseEvent) {
      const rect = heroSection!.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    }
    function onMouseLeave() { mouseX = -1000; mouseY = -1000; }
    function onResize() { resize(); }

    heroSection?.addEventListener('mousemove', onMouseMove);
    heroSection?.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('resize', onResize);

    resize();
    createParticles();
    draw();

    return () => {
      cancelAnimationFrame(animId);
      heroSection?.removeEventListener('mousemove', onMouseMove);
      heroSection?.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <canvas ref={canvasRef} id="hero-particles" />;
}

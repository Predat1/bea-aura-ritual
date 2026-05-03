import { useEffect, useRef } from 'react';

const GoldParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number; life: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -Math.random() * 0.5 - 0.1,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.2,
        life: Math.random() * 200 + 100,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.life--;
        if (p.life <= 0 || p.y < -10) {
          p.x = Math.random() * canvas.width;
          p.y = canvas.height + 10;
          p.life = Math.random() * 200 + 100;
          p.opacity = Math.random() * 0.5 + 0.2;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201, 168, 76, ${p.opacity})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" aria-hidden="true" />;
};

const HeroSection = () => (
  <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
    <GoldParticles />
    <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
      {/* Ornament */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="w-16 h-px bg-primary/40" />
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-primary">
          <path d="M10 0L12.5 7.5L20 10L12.5 12.5L10 20L7.5 12.5L0 10L7.5 7.5L10 0Z" fill="currentColor" opacity="0.6" />
        </svg>
        <div className="w-16 h-px bg-primary/40" />
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold leading-tight mb-6 text-primary">
        Le secret des femmes{' '}
        <em className="italic font-normal">qui rayonnent</em>
      </h1>

      <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 mb-10 max-w-2xl mx-auto" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}>
        Un rituel unique pour attirer le meilleur dans votre vie
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#boutique" className="px-8 py-3.5 bg-primary text-primary-foreground font-medium tracking-widest uppercase text-sm transition-all duration-300 hover:bg-accent hover:scale-[1.02] active:scale-[0.97]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          Découvrir les rituels
        </a>
        <a href="#histoire" className="px-8 py-3.5 border border-primary/50 text-primary font-light tracking-widest uppercase text-sm transition-all duration-300 hover:bg-primary/10 hover:border-primary active:scale-[0.97]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          Notre histoire
        </a>
      </div>

      {/* Ornament bottom */}
      <div className="flex items-center justify-center gap-4 mt-12">
        <div className="w-8 h-px bg-primary/30" />
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-primary/40">
          <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z" fill="currentColor" />
        </svg>
        <div className="w-8 h-px bg-primary/30" />
      </div>

      {/* Scroll indicator */}
      <div className="mt-16 scroll-indicator">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="mx-auto text-primary/60">
          <path d="M7 13l5 5 5-5M7 7l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  </section>
);

export default HeroSection;

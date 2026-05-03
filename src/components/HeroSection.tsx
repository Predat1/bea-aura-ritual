import { useEffect, useRef } from 'react';

const GoldParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number; color: string }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 80; i++) {
      const isGold = Math.random() > 0.5;
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.1,
        vy: -Math.random() * 0.2 - 0.05,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
        color: isGold ? '232, 201, 107' : '248, 244, 255', // Or vs Lavande
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -10) {
          p.x = Math.random() * canvas.width;
          p.y = canvas.height + 10;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.opacity})`;
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
  <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-mystic-dark">
    <GoldParticles />
    <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
      {/* Ornament */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="w-16 h-px bg-or/30" />
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gold">
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="currentColor" opacity="0.8" />
        </svg>
        <div className="w-16 h-px bg-or/30" />
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold leading-tight mb-6 text-gold drop-shadow-lg">
        Le secret des femmes{' '}
        <em className="italic font-normal text-lavande accent-font">qui rayonnent</em>
      </h1>

      <p className="text-lg sm:text-xl md:text-2xl text-lavande/80 mb-10 max-w-2xl mx-auto accent-font" style={{ fontWeight: 300 }}>
        Un rituel unique pour attirer le meilleur dans votre vie
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#boutique" className="px-10 py-4 bg-couleur-2 text-white font-medium tracking-widest uppercase text-sm transition-all duration-300 hover:bg-couleur-1 hover:mystic-halo hover:scale-[1.05] active:scale-[0.97] border border-couleur-3/20">
          Découvrir les rituels
        </a>
        <a href="#histoire" className="px-10 py-4 border border-gold/40 text-gold font-light tracking-widest uppercase text-sm transition-all duration-300 hover:bg-gold/10 active:scale-[0.97]">
          Notre histoire
        </a>
      </div>

      {/* Ornament bottom */}
      <div className="flex items-center justify-center gap-4 mt-16">
        <div className="w-8 h-px bg-or/20" />
        <svg width="16" height="16" viewBox="0 0 12 12" fill="none" className="text-gold/40">
          <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z" fill="currentColor" />
        </svg>
        <div className="w-8 h-px bg-or/20" />
      </div>
    </div>
  </section>
);


export default HeroSection;

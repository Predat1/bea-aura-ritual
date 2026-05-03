import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 500, suffix: '+', label: 'Clientes satisfaites' },
  { value: 100, suffix: '%', label: 'Fait main' },
  { value: 5, suffix: '', label: 'Rituels uniques' },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 2000;
        const startTime = performance.now();
        const animate = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(eased * target));
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const StorySection = () => (
  <section id="histoire" className="py-24 px-6 fade-section" style={{ backgroundColor: 'var(--fond-secondaire)' }}>
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-couleur-1/30" />
            <span className="text-couleur-1 text-xs tracking-[0.3em] uppercase font-bold">Notre histoire</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-texte-dark mb-8">
            Fait avec amour,<br /><em className="italic font-normal accent-font">pensé pour vous</em>
          </h2>
          <div className="space-y-6 text-texte-muted text-lg leading-relaxed accent-font">
            <p>
              Chaque savon est fabriqué à la main, avec des ingrédients soigneusement sélectionnés et une intention positive déposée à chaque étape de la création.
            </p>
            <p>
              Shopping Bea est née d'une conviction profonde : votre quotidien mérite d'être un rituel. Un moment sacré, rien que pour vous, où chaque geste devient une affirmation de votre valeur et de votre pouvoir.
            </p>
            <p>
              Nos cosmétiques artisanaux ne sont pas de simples produits — ce sont des compagnons de transformation, pensés pour vous aider à libérer votre plein potentiel et attirer le meilleur dans votre vie.
            </p>
          </div>
        </div>

        {/* Ornament + counters */}
        <div className="flex flex-col items-center gap-16">
          {/* Decorative element */}
          <div className="relative w-72 h-72 flex items-center justify-center">
            <div className="absolute inset-0 border border-couleur-1/10 rounded-full animate-spin-slow" />
            <div className="absolute inset-6 border border-couleur-3/20 rounded-full" />
            <div className="absolute inset-12 border border-gold/10 rounded-full" />
            <svg width="60" height="60" viewBox="0 0 40 40" fill="none" className="text-gold/60">
              <path d="M20 2l4.5 13.5L38 20l-13.5 4.5L20 38l-4.5-13.5L2 20l13.5-4.5L20 2z" fill="currentColor" />
            </svg>
            {/* Constellation dots */}
            <div className="absolute top-0 left-1/2 w-2 h-2 bg-gold/40 rounded-full" />
            <div className="absolute bottom-10 right-10 w-1.5 h-1.5 bg-couleur-1/40 rounded-full" />
            <div className="absolute top-20 left-4 w-1 h-1 bg-gold/60 rounded-full" />
          </div>

          {/* Counters */}
          <div className="grid grid-cols-3 gap-8 sm:gap-16">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-couleur-2 mb-2">
                  <Counter target={s.value} suffix={s.suffix} />
                </div>
                <div className="text-texte-muted text-[10px] tracking-[0.2em] uppercase font-bold leading-tight">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default StorySection;

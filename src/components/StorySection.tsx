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
  <section id="histoire" className="py-24 px-6 fade-section bg-background">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-primary/30" />
            <span className="text-primary/50 text-xs tracking-[0.3em] uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>Notre histoire</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-primary mb-8">
            Fait avec amour,<br /><em className="italic font-normal">pensé pour vous</em>
          </h2>
          <div className="space-y-5 text-foreground/60 text-lg leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
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
        <div className="flex flex-col items-center gap-12">
          {/* Decorative element */}
          <div className="relative w-64 h-64 flex items-center justify-center">
            <div className="absolute inset-0 border border-primary/15 rotate-45" />
            <div className="absolute inset-6 border border-primary/10 rotate-45" />
            <div className="absolute inset-12 border border-primary/5 rotate-45" />
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-primary/40">
              <path d="M20 2l4.5 13.5L38 20l-13.5 4.5L20 38l-4.5-13.5L2 20l13.5-4.5L20 2z" fill="currentColor" />
            </svg>
          </div>

          {/* Counters */}
          <div className="flex gap-8 sm:gap-12">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl sm:text-4xl font-semibold text-primary mb-1">
                  <Counter target={s.value} suffix={s.suffix} />
                </div>
                <div className="text-foreground/40 text-xs tracking-[0.15em] uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>
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

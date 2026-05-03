const testimonials = [
  {
    name: 'Aminata',
    city: 'Paris',
    initial: 'A',
    stars: 5,
    text: 'Depuis que j\'utilise le kit complet, je ressens un vrai changement dans mon quotidien. Les gens autour de moi le remarquent aussi. Je me sens plus confiante et rayonnante.',
  },
  {
    name: 'Fatou',
    city: 'Lyon',
    initial: 'F',
    stars: 5,
    text: 'Le savon de déblocage a littéralement transformé mon énergie. Je recommande Shopping Bea à toutes les femmes qui veulent reprendre le contrôle de leur vie.',
  },
  {
    name: 'Marie-Claire',
    city: 'Marseille',
    initial: 'M',
    stars: 5,
    text: 'Des produits d\'exception, faits avec une attention incroyable. Le parfum est envoûtant et le rituel est devenu un moment sacré de ma journée. Merci Bea !',
  },
];

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-1">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-primary">
        <path d="M8 1l2.2 4.4L15 6.3l-3.5 3.4.8 4.9L8 12.4l-4.3 2.2.8-4.9L1 6.3l4.8-.9L8 1z" />
      </svg>
    ))}
  </div>
);

const TestimonialsSection = () => (
  <section className="py-24 px-6 fade-section bg-background">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-12 h-px bg-primary/30" />
          <span className="text-primary/50 text-xs tracking-[0.3em] uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>Témoignages</span>
          <div className="w-12 h-px bg-primary/30" />
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary">
          Ce que disent <em className="italic font-normal">nos clientes</em>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="p-8 border border-primary/10 hover:border-primary/20 transition-all duration-500 bg-card">
            <Stars count={t.stars} />
            <blockquote className="mt-6 text-foreground/60 text-base leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              <span className="text-primary/40 text-2xl">« </span>
              {t.text}
              <span className="text-primary/40 text-2xl"> »</span>
            </blockquote>
            <div className="mt-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary text-sm font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
                {t.initial}
              </div>
              <div>
                <div className="text-foreground/80 text-sm font-medium" style={{ fontFamily: "'Montserrat', sans-serif" }}>{t.name}</div>
                <div className="text-foreground/30 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>{t.city}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;

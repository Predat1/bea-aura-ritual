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
  <div className="flex gap-1.5">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} width="18" height="18" viewBox="0 0 16 16" fill="currentColor" className="text-gold">
        <path d="M8 1l2.2 4.4L15 6.3l-3.5 3.4.8 4.9L8 12.4l-4.3 2.2.8-4.9L1 6.3l4.8-.9L8 1z" />
      </svg>
    ))}
  </div>
);

const TestimonialsSection = () => (
  <section className="py-24 px-6 fade-section" style={{ backgroundColor: 'var(--fond-secondaire)' }}>
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-12 h-px bg-couleur-1/30" />
          <span className="text-couleur-1 text-xs tracking-[0.3em] uppercase font-bold">Témoignages</span>
          <div className="w-12 h-px bg-couleur-1/30" />
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-texte-dark">
          Ce que disent <em className="italic font-normal accent-font">nos clientes</em>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="p-10 bg-white rounded-2xl border border-couleur-3/20 shadow-sm hover:shadow-xl hover:shadow-couleur-1/5 transition-all duration-500">
            <Stars count={t.stars} />
            <blockquote className="mt-8 text-texte-muted text-lg leading-relaxed italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              <span className="text-couleur-2/20 text-4xl block mb-[-10px]">“</span>
              {t.text}
              <span className="text-couleur-2/20 text-4xl block text-right mt-[-10px]">”</span>
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-fond-secondaire border border-couleur-1/20 flex items-center justify-center text-couleur-2 text-base font-bold">
                {t.initial}
              </div>
              <div>
                <div className="text-texte-dark text-sm font-bold">{t.name}</div>
                <div className="text-texte-muted text-xs font-medium uppercase tracking-wider">{t.city}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;

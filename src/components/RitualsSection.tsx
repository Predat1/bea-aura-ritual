const rituals = [
  {
    title: 'DÉBLOCAGE',
    description: 'Libérez-vous des énergies négatives et des blocages qui vous freinent. Ouvrez la voie à une vie plus fluide et harmonieuse.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-couleur-1">
        <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <path d="M24 8v32M16 16l8-8 8 8M16 32l8 8 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'ATTIRANCE',
    description: 'Renforcez votre magnétisme naturel et attirez les bonnes personnes et opportunités dans votre quotidien.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-couleur-1">
        <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <path d="M24 14c-5.5 0-10 4-10 9s7 15 10 17c3-2 10-12 10-17s-4.5-9-10-9z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: 'CHANCE',
    description: 'Ouvrez la voie à de nouvelles possibilités et événements positifs. Accueillez l\'abondance dans votre vie.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-couleur-1">
        <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <path d="M24 10l3.5 10.5L38 24l-10.5 3.5L24 38l-3.5-10.5L10 24l10.5-3.5L24 10z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const RitualsSection = () => (
  <section id="rituels" className="py-24 px-6 fade-section" style={{ backgroundColor: 'var(--fond-secondaire)' }}>
    <div className="max-w-6xl mx-auto text-center">
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="w-12 h-px bg-couleur-1/30" />
        <span className="text-couleur-1 text-xs tracking-[0.3em] uppercase font-bold">Les 3 rituels</span>
        <div className="w-12 h-px bg-couleur-1/30" />
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-texte-dark mb-4">
        Trois actions. <em className="italic font-normal accent-font">Une transformation.</em>
      </h2>
      <p className="text-texte-muted text-lg mb-16 max-w-xl mx-auto accent-font">
        Chaque rituel Shopping Bea agit sur une dimension essentielle de votre bien-être
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {rituals.map((r, i) => (
          <div key={i} className="group flex flex-col items-center text-center p-10 bg-white rounded-2xl border border-couleur-3/20 hover:border-couleur-1 hover:shadow-xl hover:shadow-couleur-1/5 transition-all duration-500">
            <div className="mb-8 transform group-hover:scale-110 transition-transform duration-500">{r.icon}</div>
            <h3 className="text-lg tracking-[0.3em] text-couleur-2 mb-4 font-bold">
              {r.title}
            </h3>
            <p className="text-texte-muted leading-relaxed text-base accent-font">
              {r.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default RitualsSection;

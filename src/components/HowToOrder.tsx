const steps = [
  { num: '01', title: 'Choisissez votre rituel', desc: 'Explorez notre boutique et sélectionnez les produits qui résonnent avec vos intentions.' },
  { num: '02', title: 'Commandez en toute sécurité', desc: 'Passez commande via WhatsApp pour un échange personnalisé et bienveillant.' },
  { num: '03', title: 'Transformez votre quotidien', desc: 'Recevez vos produits et intégrez-les dans votre rituel pour attirer le meilleur.' },
];

const HowToOrder = () => (
  <section className="py-24 px-6 fade-section" style={{ backgroundColor: 'var(--fond-secondaire)' }}>
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-12 h-px bg-couleur-1/30" />
          <span className="text-couleur-1 text-xs tracking-[0.3em] uppercase font-bold">Comment commander</span>
          <div className="w-12 h-px bg-couleur-1/30" />
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-texte-dark">
          Simple, rapide, <em className="italic font-normal accent-font">bienveillant</em>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {steps.map((s, i) => (
          <div key={i} className="text-center p-8 bg-white rounded-2xl border border-couleur-3/10 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="text-6xl font-bold text-couleur-1/10 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>{s.num}</div>
            <h3 className="text-lg text-couleur-2 mb-4 font-bold tracking-tight">
              {s.title}
            </h3>
            <p className="text-texte-muted leading-relaxed accent-font">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowToOrder;

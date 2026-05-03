const steps = [
  { num: '01', title: 'Choisissez votre rituel', desc: 'Explorez notre boutique et sélectionnez les produits qui résonnent avec vos intentions.' },
  { num: '02', title: 'Commandez en toute sécurité', desc: 'Passez commande via WhatsApp pour un échange personnalisé et bienveillant.' },
  { num: '03', title: 'Transformez votre quotidien', desc: 'Recevez vos produits et intégrez-les dans votre rituel pour attirer le meilleur.' },
];

const HowToOrder = () => (
  <section className="py-24 px-6 fade-section" style={{ background: '#0a0805' }}>
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-12 h-px bg-primary/30" />
          <span className="text-primary/50 text-xs tracking-[0.3em] uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>Comment commander</span>
          <div className="w-12 h-px bg-primary/30" />
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary">
          Simple, rapide, <em className="italic font-normal">bienveillant</em>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((s, i) => (
          <div key={i} className="text-center p-8">
            <div className="text-5xl font-bold text-primary/20 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{s.num}</div>
            <h3 className="text-lg text-primary mb-3 tracking-[0.1em] uppercase" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}>
              {s.title}
            </h3>
            <p className="text-foreground/50 leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.05rem' }}>
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowToOrder;

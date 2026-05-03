const items = [
  '✦ Fait à la main',
  '✦ Ingrédients naturels',
  '✦ Énergie & intention',
  '✦ Livraison soignée',
];

const ReassuranceBanner = () => (
  <section className="py-6 overflow-hidden bg-couleur-1 shadow-inner">
    <div className="flex animate-marquee whitespace-nowrap">
      {[...items, ...items, ...items, ...items].map((item, i) => (
        <span key={i} className="mx-12 text-sm tracking-[0.3em] uppercase text-gold font-bold">
          {item}
        </span>
      ))}
    </div>
  </section>
);

export default ReassuranceBanner;

const items = [
  '✦ Fait à la main',
  '✦ Ingrédients naturels',
  '✦ Énergie & intention',
  '✦ Livraison soignée',
];

const ReassuranceBanner = () => (
  <section className="py-4 overflow-hidden bg-secondary/30" style={{ fontFamily: "'Montserrat', sans-serif" }}>
    <div className="flex animate-marquee whitespace-nowrap">
      {[...items, ...items, ...items, ...items].map((item, i) => (
        <span key={i} className="mx-8 text-sm tracking-[0.25em] uppercase text-primary/80 font-light">
          {item}
        </span>
      ))}
    </div>
  </section>
);

export default ReassuranceBanner;

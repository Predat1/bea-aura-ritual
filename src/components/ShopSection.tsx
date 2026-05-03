import { useState } from 'react';
import { products } from '@/data/products';
import { useCart } from '@/contexts/CartContext';

const filters = [
  { label: 'Tous', value: 'all' },
  { label: 'Kits', value: 'kits' },
  { label: 'Savons', value: 'savons' },
  { label: 'Parfums', value: 'parfums' },
  { label: 'Pommades', value: 'pommades' },
];

const ShopSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const { addItem } = useCart();

  const filtered = activeFilter === 'all' ? products : products.filter(p => p.category === activeFilter);

  return (
    <section id="boutique" className="py-24 px-6 fade-section" style={{ backgroundColor: 'var(--fond-secondaire)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-couleur-1/30" />
            <span className="text-couleur-1 text-xs tracking-[0.3em] uppercase font-bold">Boutique</span>
            <div className="w-12 h-px bg-couleur-1/30" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-texte-dark mb-4">
            Nos rituels artisanaux
          </h2>
          <p className="text-texte-muted text-lg accent-font">
            Chaque produit est une intention, chaque commande un rituel
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map(f => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-6 py-2.5 text-xs tracking-[0.2em] uppercase rounded-full border transition-all duration-300 font-bold ${
                activeFilter === f.value
                  ? 'bg-couleur-2 text-white border-couleur-2 shadow-lg shadow-couleur-2/20'
                  : 'border-couleur-1/20 text-texte-muted hover:border-couleur-1 hover:text-couleur-2'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(product => (
            <article
              key={product.id}
              className="group bg-white rounded-2xl border border-couleur-3/30 hover:border-couleur-1 hover:shadow-xl hover:shadow-couleur-1/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Image Placeholder */}
              <div className="relative aspect-square overflow-hidden bg-fond-secondaire/50">
                <div className="absolute inset-0 flex items-center justify-center p-8 bg-gradient-to-br from-white to-couleur-3/10">
                  <span className="text-center text-couleur-2/30 text-xl font-semibold italic" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {product.name}
                  </span>
                </div>
                {/* Badge */}
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-rose-accent text-texte-dark text-[10px] tracking-[0.2em] uppercase px-4 py-1.5 font-bold rounded-full">
                    {product.badge}
                  </span>
                )}
              </div>

              <div className="p-8">
                <h3 className="text-xl text-texte-dark mb-2 font-bold leading-snug group-hover:text-couleur-2 transition-colors">{product.name}</h3>
                <p className="text-texte-muted text-sm mb-6 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl text-couleur-2 font-bold">{product.price} €</span>
                  <button
                    onClick={() => addItem({ id: product.id, name: product.name, price: product.price })}
                    className="px-6 py-3 bg-couleur-2 text-white text-xs tracking-[0.15em] uppercase rounded-lg transition-all duration-300 hover:bg-couleur-1 hover:mystic-halo active:scale-[0.95] font-bold"
                  >
                    Ajouter
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopSection;

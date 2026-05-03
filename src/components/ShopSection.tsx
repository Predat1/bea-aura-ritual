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
    <section id="boutique" className="py-24 px-6 fade-section" style={{ background: '#111009' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-primary/30" />
            <span className="text-primary/50 text-xs tracking-[0.3em] uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>Boutique</span>
            <div className="w-12 h-px bg-primary/30" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary mb-4">
            Nos rituels artisanaux
          </h2>
          <p className="text-foreground/50 text-lg italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Chaque produit est une intention, chaque commande un rituel
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          {filters.map(f => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-5 py-2 text-xs tracking-[0.2em] uppercase border transition-all duration-300 ${
                activeFilter === f.value
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'border-primary/20 text-foreground/50 hover:border-primary/50 hover:text-primary'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(product => (
            <article
              key={product.id}
              className="group border border-primary/10 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1.5"
              style={{ background: 'linear-gradient(180deg, #0f0d08 0%, #0a0805 100%)' }}
            >
              {/* Placeholder image */}
              <div className="relative aspect-square overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a1508 0%, #0a0805 50%, #1a1508 100%)' }}>
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <span className="text-center text-primary/40 text-lg font-medium" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {product.name}
                  </span>
                </div>
                {/* Decorative border */}
                <div className="absolute inset-4 border border-primary/10 group-hover:border-primary/20 transition-all duration-500" />
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-[10px] tracking-[0.2em] uppercase px-3 py-1 font-medium" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {product.badge}
                  </span>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-lg text-primary mb-1 leading-snug">{product.name}</h3>
                <p className="text-foreground/40 text-sm mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl text-primary font-semibold">{product.price} €</span>
                  <button
                    onClick={() => addItem({ id: product.id, name: product.name, price: product.price })}
                    className="px-5 py-2.5 border border-primary/30 text-primary text-xs tracking-[0.15em] uppercase transition-all duration-300 hover:bg-primary hover:text-primary-foreground active:scale-[0.97]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Ajouter au panier
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

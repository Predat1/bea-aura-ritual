import { useCart } from '@/contexts/CartContext';

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, total } = useCart();

  const whatsappMessage = encodeURIComponent(
    `Bonjour Shopping Bea, je souhaite commander :\n${items.map(i => `- ${i.name} x${i.quantity} (${i.price * i.quantity} €)`).join('\n')}\n\nTotal : ${total} €`
  );

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] transition-transform duration-[350ms] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ fontFamily: "'Nunito', sans-serif", transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-8 border-b border-couleur-1/10">
            <h3 className="text-xl tracking-[0.2em] uppercase text-couleur-2 font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>Votre panier</h3>
            <button onClick={closeCart} className="text-texte-muted hover:text-couleur-2 transition-colors" aria-label="Fermer le panier">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-8 space-y-8">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-texte-muted text-lg mb-6 accent-font">
                  Votre panier est vide.<br />Explorez nos rituels artisanaux.
                </p>
                <button onClick={closeCart} className="text-couleur-2 font-bold text-sm tracking-[0.1em] uppercase border-b border-couleur-2/20 pb-1">Retour à la boutique</button>
              </div>
            ) : (
              items.map(item => (
                <div key={item.id} className="flex gap-5 pb-8 border-b border-couleur-3/10">
                  {/* Mini placeholder */}
                  <div className="w-20 h-20 flex-shrink-0 flex items-center justify-center border border-couleur-3/20 bg-fond-secondaire rounded-lg">
                    <svg width="24" height="24" viewBox="0 0 16 16" fill="none" className="text-couleur-1/20">
                      <path d="M8 2l1.5 4.5L14 8l-4.5 1.5L8 14l-1.5-4.5L2 8l4.5-1.5L8 2z" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-base text-texte-dark font-bold truncate mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{item.name}</h4>
                    <p className="text-couleur-2 font-bold">{item.price} €</p>
                    <div className="flex items-center gap-4 mt-3">
                      <div className="flex items-center border border-couleur-3/30 rounded-md overflow-hidden">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-8 h-8 flex items-center justify-center text-texte-muted hover:bg-fond-secondaire transition-colors font-bold">−</button>
                        <span className="w-8 h-8 flex items-center justify-center text-texte-dark text-sm font-bold">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-8 h-8 flex items-center justify-center text-texte-muted hover:bg-fond-secondaire transition-colors font-bold">+</button>
                      </div>
                      <button onClick={() => removeItem(item.id)} className="text-rose-accent hover:text-red-500 text-xs font-bold uppercase tracking-wider transition-colors">Supprimer</button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="p-8 bg-fond-secondaire border-t border-couleur-1/10 space-y-6">
              <div className="flex justify-between items-center text-xl">
                <span className="text-texte-muted font-bold tracking-tight uppercase text-xs">Total</span>
                <span className="text-couleur-2 font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>{total} €</span>
              </div>
              <a
                href={`https://wa.me/33601006526?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-5 bg-couleur-2 text-white text-center text-sm tracking-[0.2em] uppercase font-bold rounded-xl transition-all duration-300 hover:bg-couleur-1 hover:mystic-halo hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-couleur-2/20"
              >
                Commander via WhatsApp
              </a>
              <p className="text-center text-[10px] text-texte-muted uppercase tracking-[0.1em] font-bold">Paiement sécurisé et personnalisé ✦</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;

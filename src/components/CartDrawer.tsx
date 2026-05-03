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
        className={`fixed top-0 right-0 h-full w-full max-w-md z-[70] transition-transform duration-[350ms] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ background: '#0f0d08', fontFamily: "'Montserrat', sans-serif", transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-primary/15">
            <h3 className="text-lg tracking-[0.15em] uppercase text-primary font-light">Votre panier</h3>
            <button onClick={closeCart} className="text-foreground/50 hover:text-primary transition-colors" aria-label="Fermer le panier">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 4l12 12M16 4L4 16" />
              </svg>
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {items.length === 0 ? (
              <p className="text-center text-foreground/30 text-sm mt-12" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem' }}>
                Votre panier est vide.<br />Explorez nos rituels artisanaux.
              </p>
            ) : (
              items.map(item => (
                <div key={item.id} className="flex gap-4 border-b border-primary/10 pb-5">
                  {/* Mini placeholder */}
                  <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center border border-primary/15" style={{ background: 'linear-gradient(135deg, #1a1508, #0a0805)' }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-primary/30">
                      <path d="M8 2l1.5 4.5L14 8l-4.5 1.5L8 14l-1.5-4.5L2 8l4.5-1.5L8 2z" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm text-foreground/80 truncate" style={{ fontFamily: "'Playfair Display', serif" }}>{item.name}</h4>
                    <p className="text-primary text-sm font-medium mt-1">{item.price} €</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-6 h-6 border border-primary/20 text-foreground/50 flex items-center justify-center text-xs hover:border-primary/50 transition-colors">−</button>
                      <span className="text-foreground/70 text-sm">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-6 h-6 border border-primary/20 text-foreground/50 flex items-center justify-center text-xs hover:border-primary/50 transition-colors">+</button>
                      <button onClick={() => removeItem(item.id)} className="ml-auto text-foreground/30 hover:text-destructive text-xs transition-colors">Supprimer</button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="p-6 border-t border-primary/15 space-y-4">
              <div className="flex justify-between text-lg">
                <span className="text-foreground/60">Total</span>
                <span className="text-primary font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>{total} €</span>
              </div>
              <a
                href={`https://wa.me/33601006526?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-[#25D366] text-white text-center text-sm tracking-[0.15em] uppercase font-medium transition-all duration-300 hover:bg-[#20bd5a] active:scale-[0.97]"
              >
                Commander via WhatsApp
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;

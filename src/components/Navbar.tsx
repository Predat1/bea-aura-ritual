import { useState, useEffect } from 'react';
import { useCart } from '@/contexts/CartContext';

const navLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Boutique', href: '#boutique' },
  { label: 'Rituels', href: '#rituels' },
  { label: 'À propos', href: '#histoire' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleCart, count } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#0D0820]/95 backdrop-blur-md border-b border-gold/10' : 'bg-transparent'
      }`}
      style={{ fontFamily: "'Nunito', sans-serif" }}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#accueil" className="text-2xl font-bold tracking-tight text-gold" style={{ fontFamily: "'Playfair Display', serif" }}>
          Shopping Bea
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} className={`text-sm font-medium tracking-wide transition-colors duration-300 ${scrolled ? 'text-white/80 hover:text-gold' : 'text-white/90 hover:text-gold'}`}>
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-6">
          {/* Cart */}
          <button onClick={toggleCart} className="relative text-gold hover:scale-110 transition-transform" aria-label="Panier">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-couleur-1 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {count}
              </span>
            )}
          </button>

          {/* Hamburger */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-gold" aria-label="Menu">
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-px bg-current transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[4px]' : ''}`} />
              <span className={`block h-px bg-current transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-px bg-current transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[4px]' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ${mobileOpen ? 'max-h-80' : 'max-h-0'}`}>
        <div className="px-6 pb-6 flex flex-col gap-4 bg-[#0D0820]/98 backdrop-blur-md">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="text-sm font-medium tracking-wide text-white/80 hover:text-gold transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;

const Footer = () => (
  <footer className="bg-mystic-dark border-t border-gold/10 py-20 px-6 relative overflow-hidden">
    {/* Subtle star pattern background */}
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
    
    <div className="max-w-6xl mx-auto relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
        {/* Brand */}
        <div>
          <h4 className="text-3xl text-gold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Shopping Bea</h4>
          <p className="text-white/60 text-base leading-relaxed mb-8 accent-font">
            Transformez votre routine en rituel de réussite et d'attraction. Cosmétiques artisanaux faits main en France avec amour et intention.
          </p>
          {/* Social icons */}
          <div className="flex gap-5">
            {['instagram', 'facebook', 'tiktok'].map(s => (
              <a key={s} href="#" className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold/60 hover:text-gold hover:border-gold/50 transition-all duration-300 bg-white/5" aria-label={s}>
                <span className="text-xs font-bold uppercase">{s[0]}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h5 className="text-sm tracking-[0.2em] uppercase text-gold/80 mb-6 font-bold">Navigation</h5>
          <nav className="flex flex-col gap-3">
            {['Accueil', 'Boutique', 'Nos rituels', 'Notre histoire', 'Contact'].map(l => (
              <a key={l} href={`#${l.toLowerCase().replace(/\s/g, '')}`} className="text-white/50 hover:text-gold transition-colors text-base font-medium">
                {l}
              </a>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h5 className="text-sm tracking-[0.2em] uppercase text-gold/80 mb-6 font-bold">Contact</h5>
          <div className="flex flex-col gap-4">
            <a
              href="https://wa.me/33601006526"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-white transition-colors inline-flex items-center gap-3 text-lg font-bold"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Contact WhatsApp
            </a>
            <p className="text-white/40 text-sm italic accent-font">Réponse sous 24h maximum</p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/5 pt-10 flex flex-col sm:flex-row justify-between items-center gap-6">
        <p className="text-white/20 text-xs tracking-wider">
          © {new Date().getFullYear()} Shopping Bea. Tous droits réservés.
        </p>
        <p className="text-gold/30 text-xs font-bold uppercase tracking-[0.2em]">
          Fait avec amour en France ✦
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

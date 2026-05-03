const Footer = () => (
  <footer className="border-t border-primary/15 py-16 px-6 bg-background">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Brand */}
        <div>
          <h4 className="text-2xl text-primary mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Shopping Bea</h4>
          <p className="text-foreground/40 text-sm leading-relaxed mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1rem' }}>
            Transformez votre routine en rituel de réussite et d'attraction. Cosmétiques artisanaux faits main en France.
          </p>
          {/* Social icons */}
          <div className="flex gap-4">
            {['instagram', 'facebook', 'tiktok'].map(s => (
              <a key={s} href="#" className="w-9 h-9 border border-primary/20 flex items-center justify-center text-foreground/30 hover:text-primary hover:border-primary/40 transition-all duration-300" aria-label={s}>
                <span className="text-xs uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>{s[0].toUpperCase()}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h5 className="text-sm tracking-[0.2em] uppercase text-primary/60 mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>Navigation</h5>
          <nav className="flex flex-col gap-2">
            {['Accueil', 'Boutique', 'Nos rituels', 'Notre histoire', 'Contact'].map(l => (
              <a key={l} href={`#${l.toLowerCase().replace(/\s/g, '')}`} className="text-foreground/40 hover:text-primary transition-colors text-sm" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1rem' }}>
                {l}
              </a>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h5 className="text-sm tracking-[0.2em] uppercase text-primary/60 mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>Contact</h5>
          <a
            href="https://wa.me/33601006526"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent transition-colors inline-flex items-center gap-2"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.05rem' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            +33 6 01 00 65 26
          </a>

          <div className="mt-6">
            <h5 className="text-sm tracking-[0.2em] uppercase text-primary/60 mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>Légal</h5>
            <nav className="flex flex-col gap-1.5">
              {['Mentions légales', 'CGV', 'Politique de confidentialité'].map(l => (
                <a key={l} href="#" className="text-foreground/30 hover:text-foreground/50 transition-colors text-sm" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {l}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-primary/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-foreground/25 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          © {new Date().getFullYear()} Shopping Bea. Tous droits réservés.
        </p>
        <p className="text-foreground/25 text-xs italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          Fait avec amour en France ✦
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

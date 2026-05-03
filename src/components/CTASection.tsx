const CTASection = () => (
  <section id="contact" className="py-24 px-6 fade-section relative overflow-hidden bg-background">
    {/* Decorative elements */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="w-96 h-96 border border-primary/5 rotate-45" />
    </div>

    <div className="relative z-10 max-w-3xl mx-auto text-center">
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="w-16 h-px bg-primary/30" />
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-primary/50">
          <path d="M8 0l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6z" fill="currentColor" />
        </svg>
        <div className="w-16 h-px bg-primary/30" />
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary mb-4">
        Le meilleur <em className="italic font-normal">vous attend</em>
      </h2>
      <p className="text-foreground/50 text-lg mb-12 max-w-xl mx-auto" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
        Rejoignez des centaines de femmes qui ont transformé leur vie grâce à nos rituels artisanaux
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center" style={{ fontFamily: "'Montserrat', sans-serif" }}>
        <a
          href="https://wa.me/33601006526"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 bg-[#25D366] text-white text-sm tracking-[0.15em] uppercase font-medium transition-all duration-300 hover:bg-[#20bd5a] active:scale-[0.97] inline-flex items-center justify-center gap-3"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Commander via WhatsApp
        </a>
        <a href="#boutique" className="px-8 py-4 border border-primary/40 text-primary text-sm tracking-[0.15em] uppercase font-light transition-all duration-300 hover:bg-primary/10 hover:border-primary active:scale-[0.97]">
          Voir tous les produits
        </a>
      </div>
    </div>
  </section>
);

export default CTASection;

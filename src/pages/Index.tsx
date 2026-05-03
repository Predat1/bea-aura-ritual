import { useEffect } from 'react';
import { CartProvider } from '@/contexts/CartContext';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ReassuranceBanner from '@/components/ReassuranceBanner';
import RitualsSection from '@/components/RitualsSection';
import ShopSection from '@/components/ShopSection';
import CartDrawer from '@/components/CartDrawer';
import StorySection from '@/components/StorySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import HowToOrder from '@/components/HowToOrder';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.fade-section').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <CartProvider>
      <div className="grain-overlay">
        <Navbar />
        <main>
          <HeroSection />
          <ReassuranceBanner />
          <RitualsSection />
          <ShopSection />
          <StorySection />
          <TestimonialsSection />
          <HowToOrder />
          <CTASection />
        </main>
        <Footer />
        <CartDrawer />
        <WhatsAppButton />
      </div>
    </CartProvider>
  );
};

export default Index;

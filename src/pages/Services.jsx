import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ServicesSection from '../components/sections/ServicesSection';
import CTASection from '../components/sections/CTASection';

const Services = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t('nav.services')} — Barber Royale`;
    window.scrollTo(0, 0);
  }, [t]);

  return (
    <main>
      {/* Page Hero */}
      <section className="pt-10 pb-6 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#E10600]/5 to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </section>

      <ServicesSection />
      <CTASection />
    </main>
  );
};

export default Services;

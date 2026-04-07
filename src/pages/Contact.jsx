import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ContactSection from '../components/sections/ContactSection';

const Contact = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t('nav.contact')} — Barber Royale`;
    window.scrollTo(0, 0);
  }, [t]);

  return (
    <main>
      <section className="pt-10 pb-6 bg-[#060606] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#E10600]/5 to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </section>
      <ContactSection />
    </main>
  );
};

export default Contact;

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import TeamSection from '../components/sections/TeamSection';
import GallerySection from '../components/sections/GallerySection';
import CTASection from '../components/sections/CTASection';

const Home = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = 'Barber Royale — Style, Précision, Excellence';
  }, [t]);

  return (
    <main>
      <HeroSection />
      <ServicesSection preview />
      <TeamSection preview />
      <GallerySection preview />
      <CTASection />
    </main>
  );
};

export default Home;

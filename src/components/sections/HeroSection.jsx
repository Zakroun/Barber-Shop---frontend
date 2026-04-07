import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#0d0000]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E10600]/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#E10600]/5 rounded-full blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>
      <div className="absolute left-6 top-1/2 -translate-y-1/2 h-48 w-3 barber-pole rounded-full opacity-30 hidden lg:block" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          <div className="flex flex-col justify-center py-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="font-poppins text-[#E10600] text-xs tracking-[0.4em] uppercase">
                {t('hero.tagline')}
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-8"
            >
              <h1 className="font-montserrat font-black leading-[0.9] tracking-tight">
                <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white">
                  {t('hero.title')}
                </span>
                <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-[#E10600]">
                  {t('hero.title2')}
                </span>
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="font-inter text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mb-10"
            >
              {t('hero.subtitle')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/contact"
                className="font-poppins text-sm font-medium tracking-widest uppercase bg-[#E10600] text-white px-8 py-4 hover:bg-[#B80500] hover:shadow-[0_0_40px_rgba(225,6,0,0.5)] transition-all duration-300 text-center"
              >
                {t('hero.cta')}
              </Link>
              <Link
                to="/services"
                className="font-poppins text-sm font-medium tracking-widest uppercase border border-white/20 text-white px-8 py-4 hover:border-[#E10600] hover:text-[#E10600] transition-all duration-300 text-center"
              >
                {t('hero.cta2')}
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-[480px] h-[560px] rounded-2xl overflow-hidden border border-white/5">
              <img
                src="/assets/barber-hero.jpg"
                alt="Barber"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

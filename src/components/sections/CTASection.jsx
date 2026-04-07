import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { GiScissors } from 'react-icons/gi';
import { FaPhone } from 'react-icons/fa';
import { Reveal } from '../ui';

const CTASection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-[#E10600] relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Decorative scissors */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute right-16 top-1/2 -translate-y-1/2 text-white/5 text-[200px] hidden lg:block"
      >
        <GiScissors />
      </motion.div>
      <div className="absolute left-0 top-0 w-64 h-64 bg-black/10 rounded-full blur-3xl" />
      <div className="absolute right-1/4 bottom-0 w-48 h-48 bg-black/10 rounded-full blur-2xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <Reveal>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-white/40" />
            <GiScissors className="text-white text-2xl" />
            <div className="h-px w-12 bg-white/40" />
          </div>
          <h2 className="font-montserrat font-black text-4xl md:text-6xl text-white tracking-tight mb-6 leading-tight">
            {t('cta.title')}
          </h2>
          <p className="font-inter text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              to="/contact"
              className="font-poppins text-sm font-medium tracking-widest uppercase bg-black text-white px-10 py-4 hover:bg-white hover:text-black transition-all duration-300 shadow-xl"
            >
              {t('cta.button')}
            </Link>
            <a
              href="tel:+212625702587"
              className="font-poppins text-sm font-medium tracking-widest uppercase border-2 border-white/60 text-white px-10 py-4 hover:bg-white/10 transition-all duration-300 flex items-center gap-3"
            >
              <FaPhone />
              {t('cta.phone')}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CTASection;

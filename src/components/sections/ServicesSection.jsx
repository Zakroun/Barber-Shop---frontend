import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { GiScissors, GiRazor, GiComb } from 'react-icons/gi';
import { FaCut, FaPaintBrush, FaStar, FaGem } from 'react-icons/fa';
import { servicesData } from '../../data';
import { SectionHeader, Reveal } from '../ui';

const iconMap = {
  scissors: GiScissors,
  razor: GiRazor,
  shave: FaCut,
  color: FaPaintBrush,
  package: FaStar,
  luxury: FaGem,
};

const ServiceCard = ({ service, index }) => {
  const { t } = useTranslation();
  const Icon = iconMap[service.icon];

  return (
    <Reveal delay={index * 0.1}>
      <motion.div
        whileHover={{ y: -8, borderColor: '#E10600' }}
        className="group relative bg-[#0d0d0d] border border-white/5 p-8 cursor-pointer overflow-hidden transition-all duration-300 h-full flex flex-col"
      >
        {/* Background glow on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#E10600]/0 to-[#E10600]/0 group-hover:from-[#E10600]/5 group-hover:to-transparent transition-all duration-500" />

        {/* Popular badge */}
        {service.popular && (
          <div className="absolute top-4 right-4 bg-[#E10600] text-white font-poppins text-[10px] tracking-widest uppercase px-2 py-1">
            Populaire
          </div>
        )}

        {/* Icon */}
        <div className="w-14 h-14 bg-[#E10600]/10 border border-[#E10600]/20 flex items-center justify-center mb-6 group-hover:bg-[#E10600] group-hover:border-[#E10600] transition-all duration-300">
          <Icon className="text-[#E10600] text-2xl group-hover:text-white transition-colors duration-300" />
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="font-montserrat font-bold text-white text-lg mb-3 group-hover:text-[#E10600] transition-colors duration-300">
            {t(`services.${service.id}.name`)}
          </h3>
          <p className="font-inter text-gray-500 text-sm leading-relaxed mb-6">
            {t(`services.${service.id}.desc`)}
          </p>
        </div>

        {/* Footer: price + duration */}
        <div className="flex items-center justify-between pt-6 border-t border-white/5">
          <div>
            <span className="font-poppins text-gray-500 text-xs">{t('services.from')} </span>
            <span className="font-montserrat font-bold text-[#E10600] text-xl">{service.price}</span>
            <span className="font-poppins text-gray-500 text-xs"> MAD</span>
          </div>
          <span className="font-poppins text-gray-600 text-xs tracking-wider">{service.duration}</span>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 w-0 h-px bg-[#E10600] group-hover:w-full transition-all duration-500" />
      </motion.div>
    </Reveal>
  );
};

const ServicesSection = ({ preview = false }) => {
  const { t } = useTranslation();
  const displayed = preview ? servicesData.slice(0, 3) : servicesData;

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#E10600]/3 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          label={t('services.subtitle')}
          title={t('services.title')}
          subtitle={t('services.description')}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {preview && (
          <Reveal delay={0.3}>
            <div className="text-center mt-14">
              <Link
                to="/services"
                className="font-poppins text-sm font-medium tracking-widest uppercase border border-white/20 text-white px-10 py-4 hover:border-[#E10600] hover:text-[#E10600] transition-all duration-300 inline-block"
              >
                {t('nav.services')} →
              </Link>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;

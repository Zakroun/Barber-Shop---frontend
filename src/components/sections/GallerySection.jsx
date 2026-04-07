import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { GiScissors } from 'react-icons/gi';
import { HiZoomIn } from 'react-icons/hi';
import { galleryData } from '../../data';
import { SectionHeader, Reveal } from '../ui';

const GalleryCard = ({ item, index }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ scale: 1.02 }}
      className="group relative overflow-hidden cursor-pointer aspect-square"
    >
      {/* Visual placeholder using gradients */}
      <div className={`w-full h-full bg-[#0d0d0d] flex items-center justify-center`}>
        <GiScissors className="text-white/10 text-6xl" />
      </div>

      {/* Style label */}
      <div className="absolute bottom-4 left-4 font-poppins text-white/40 text-xs tracking-widest uppercase">
        {item.style}
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-[#E10600]/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400">
        <HiZoomIn className="text-white text-4xl mb-3" />
        <span className="font-poppins text-white text-sm font-medium tracking-widest uppercase">
          {item.style}
        </span>
      </div>
    </motion.div>
  );
};

const GallerySection = ({ preview = false }) => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { key: 'all', label: t('gallery.all') },
    { key: 'haircuts', label: t('gallery.haircuts') },
    { key: 'beards', label: t('gallery.beards') },
    { key: 'styles', label: t('gallery.styles') },
  ];

  const filtered = galleryData.filter(
    (item) => activeFilter === 'all' || item.category === activeFilter
  );
  const displayed = preview ? filtered.slice(0, 6) : filtered;

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-[#E10600]/3 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          label={t('gallery.subtitle')}
          title={t('gallery.title')}
          subtitle={t('gallery.description')}
        />

        {/* Filters */}
        {!preview && (
          <Reveal>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
              {filters.map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`font-poppins text-xs font-medium tracking-widest uppercase px-6 py-2.5 border transition-all duration-300 ${
                    activeFilter === filter.key
                      ? 'bg-[#E10600] border-[#E10600] text-white'
                      : 'border-white/10 text-gray-400 hover:border-[#E10600]/50 hover:text-white'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </Reveal>
        )}

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <AnimatePresence mode="popLayout">
            {displayed.map((item, i) => (
              <GalleryCard key={item.id} item={item} index={i} />
            ))}
          </AnimatePresence>
        </div>

        {preview && (
          <Reveal delay={0.3}>
            <div className="text-center mt-14">
              <Link
                to="/gallery"
                className="font-poppins text-sm font-medium tracking-widest uppercase border border-white/20 text-white px-10 py-4 hover:border-[#E10600] hover:text-[#E10600] transition-all duration-300 inline-block"
              >
                {t('nav.gallery')} →
              </Link>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
};

export default GallerySection;

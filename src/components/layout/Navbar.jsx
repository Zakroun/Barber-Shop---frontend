import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { GiScissors } from 'react-icons/gi';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const links = [
    { to: '/', label: t('nav.home') },
    { to: '/services', label: t('nav.services') },
    { to: '/team', label: t('nav.team') },
    { to: '/gallery', label: t('nav.gallery') },
    { to: '/contact', label: t('nav.contact') },
  ];

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'fr');
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-black/95 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img src="/assets/barberroyal.png" alt="barberroyal" className="w-12" />
              <div>
                <div className="font-montserrat font-900 text-white text-lg leading-none tracking-wider">
                  BARBER
                </div>
                <div className="font-montserrat font-400 text-[#E10600] text-xs tracking-[0.3em] uppercase">
                  ROYALE
                </div>
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`font-poppins text-sm font-medium tracking-wider uppercase transition-all duration-300 relative group ${
                    isActive(link.to) ? 'text-[#E10600]' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-px bg-[#E10600] transition-all duration-300 ${
                    isActive(link.to) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              ))}
            </div>

            {/* Right side: Lang switcher + CTA */}
            <div className="hidden md:flex items-center gap-4">
              {/* Language switcher */}
              <button
                onClick={toggleLang}
                className="flex items-center gap-2 font-poppins text-xs font-medium tracking-wider text-gray-400 hover:text-white transition-colors duration-200 border border-white/10 hover:border-white/30 px-3 py-1.5 rounded"
              >
                {i18n.language === 'fr' ? (
                  <><img src="/assets/fr.png" alt="flag" className='w-5'/> <span>FR</span> <span className="text-white/20">|</span> <span className="text-white/80">EN</span></>
                ) : (
                  <><img src="/assets/uk.png" alt="flag" className='w-5'/> <span>EN</span> <span className="text-white/20">|</span> <span className="text-white/80">FR</span></>
                )}
              </button>

              {/* Book CTA */}
              <Link
                to="/contact"
                className="font-poppins text-sm font-medium tracking-widest uppercase bg-[#E10600] text-white px-6 py-2.5 hover:bg-[#B80500] transition-all duration-300 hover:shadow-[0_0_20px_rgba(225,6,0,0.4)]"
              >
                {t('nav.book')}
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-3">
              <button onClick={toggleLang} className="text-gray-400 hover:text-white text-sm">
                {i18n.language === 'fr' ? <img src="/assets/fr.png" alt="flag" className='w-5'/> : <img src="/assets/uk.png" alt="flag" className='w-5'/>}
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="text-white text-2xl p-1"
              >
                {mobileOpen ? <HiX /> : <HiMenu />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-black flex flex-col pt-24 pb-8 px-8"
          >
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#E10600]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-0 w-60 h-60 bg-[#E10600]/3 rounded-full blur-3xl" />

            <div className="flex flex-col gap-2 relative z-10">
              {links.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.3 }}
                >
                  <Link
                    to={link.to}
                    className={`block font-montserrat text-3xl font-bold py-3 border-b border-white/5 transition-colors duration-200 ${
                      isActive(link.to) ? 'text-[#E10600]' : 'text-white hover:text-[#E10600]'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-auto relative z-10"
            >
              <Link
                to="/contact"
                className="block text-center font-poppins text-sm font-medium tracking-widest uppercase bg-[#E10600] text-white py-4 hover:bg-[#B80500] transition-colors"
              >
                {t('nav.book')}
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

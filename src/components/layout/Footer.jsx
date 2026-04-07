import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaInstagram, FaFacebook, FaTiktok, FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';

const Footer = () => {
  const { t } = useTranslation();

  const links = [
    { to: '/', label: t('nav.home') },
    { to: '/services', label: t('nav.services') },
    { to: '/team', label: t('nav.team') },
    { to: '/gallery', label: t('nav.gallery') },
    { to: '/contact', label: t('nav.contact') },
  ];

  return (
    <footer
      className="bg-[#0a0a0a] border-t border-white/5 relative overflow-hidden"
      role="contentinfo"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-[#E10600]/20 to-transparent"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="flex items-center gap-3 mb-6 group focus:outline-none focus:ring-2 focus:ring-[#E10600]"
              aria-label="Go to homepage"
            >
              <img
                src="/assets/barberroyal.png"
                alt="Barber Royale logo"
                className="w-12"
              />
              <div>
                <div className="font-montserrat font-bold text-white text-lg leading-none tracking-wider">
                  BARBER
                </div>
                <div className="font-montserrat text-[#E10600] text-xs tracking-[0.3em] uppercase">
                  ROYALE
                </div>
              </div>
            </Link>

            <p className="font-inter text-gray-300 text-sm leading-relaxed mb-6">
              {t('footer.desc')}
            </p>

            <div className="flex gap-4">
              {[
                { Icon: FaInstagram, href: '#', label: 'Instagram' },
                { Icon: FaFacebook, href: '#', label: 'Facebook' },
                { Icon: FaTiktok, href: '#', label: 'TikTok' },
              ].map(({ Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${label}`}
                  title={label}
                  className="w-9 h-9 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#E10600] hover:bg-[#E10600]/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#E10600]"
                >
                  <Icon size={14} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-bold text-white text-sm tracking-widest uppercase mb-6">
              {t('footer.links')}
            </h3>

            <nav aria-label="Quick links">
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="font-inter text-gray-300 text-sm hover:text-[#E10600] transition-colors duration-200 flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-[#E10600]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-montserrat font-bold text-white text-sm tracking-widest uppercase mb-6">
              {t('footer.contact')}
            </h3>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#E10600] mt-1 flex-shrink-0" size={14} aria-hidden="true" />
                <span className="font-inter text-gray-300 text-sm">
                  12 Avenue Mohammed V<br />Casablanca, Maroc
                </span>
              </li>

              <li className="flex items-center gap-3">
                <FaPhone className="text-[#E10600] flex-shrink-0" size={14} aria-hidden="true" />
                <a
                  href="tel:+212625702587"
                  className="font-inter text-gray-300 text-sm hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#E10600]"
                  aria-label="Call us at +212 625 702 587"
                >
                  +212 625 702 587
                </a>
              </li>

              <li className="flex items-start gap-3">
                <FaClock className="text-[#E10600] mt-1 flex-shrink-0" size={14} aria-hidden="true" />
                <span className="font-inter text-gray-300 text-sm">
                  {t('contact.hours_value')}
                </span>
              </li>
            </ul>
          </div>

          {/* Social Info */}
          <div className="flex flex-col items-start gap-6">
            <h3 className="font-montserrat font-bold text-white text-sm tracking-widest uppercase">
              {t('footer.follow')}
            </h3>

            <div className="flex gap-3 items-center">
              <div className="w-3 h-24 barber-pole rounded-sm" aria-hidden="true" />

              <div className="text-gray-400 font-poppins text-xs leading-relaxed">
                <div className="text-white font-medium mb-1">@barber.royale</div>
                <div>Instagram</div>
                <div>Facebook</div>
                <div>TikTok</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-inter text-gray-400 text-xs">
            © {new Date().getFullYear()} Barber Royale. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import { teamData } from '../../data';
import { SectionHeader, Reveal } from '../ui';

const TeamCard = ({ member, index }) => {
  const { t, i18n } = useTranslation();
  const isFr = i18n.language === 'fr';

  return (
    <Reveal delay={index * 0.12}>
      <motion.div
        whileHover={{ y: -6 }}
        className="group relative overflow-hidden bg-[#0d0d0d] border border-white/5 hover:border-[#E10600]/30 transition-all duration-400 cursor-pointer"
      >
        {/* Avatar area */}
        <div className={`relative h-72 bg-[#0d0d0d] flex items-center justify-center overflow-hidden`}>
          {/* Large initials */}
          <div className="font-montserrat font-black text-[120px] text-white/5 select-none leading-none">
            {member.avatar}
          </div>

          {/* Centered initials badge */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-black/40 border-2 border-[#E10600]/30 flex items-center justify-center backdrop-blur-sm">
              <span className="font-montserrat font-black text-3xl text-white">{member.avatar}</span>
            </div>
          </div>

          {/* Hover overlay */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ opacity: 1, y: 0 }}
            className="absolute inset-0 bg-[#E10600]/90 flex flex-col items-center justify-center gap-4 transition-all duration-300 opacity-0 group-hover:opacity-100"
          >
            <a
              href={`https://instagram.com/${member.instagram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-poppins text-white text-sm font-medium border border-white/40 px-5 py-2 hover:bg-white/10 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <FaInstagram /> {member.instagram}
            </a>
            <Link
              to="/contact"
              className="font-poppins text-sm font-medium tracking-widest uppercase bg-white text-[#E10600] px-5 py-2 hover:bg-white/90 transition-colors"
            >
              {t('team.book')} {member.name.split(' ')[0]}
            </Link>
          </motion.div>

          {/* Experience badge */}
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm border border-white/10 font-poppins text-xs text-white px-3 py-1">
            {isFr ? member.experience : member.experience_en}
          </div>
        </div>

        {/* Info */}
        <div className="p-6">
          <h3 className="font-montserrat font-bold text-white text-lg mb-1 group-hover:text-[#E10600] transition-colors duration-300">
            {member.name}
          </h3>
          <p className="font-poppins text-[#E10600] text-xs tracking-widest uppercase mb-3">
            {isFr ? member.role_fr : member.role_en}
          </p>
          <div className="flex items-start gap-2">
            <div className="w-1 h-1 rounded-full bg-[#E10600] mt-2 flex-shrink-0" />
            <p className="font-inter text-gray-500 text-sm">
              {isFr ? member.specialty_fr : member.specialty_en}
            </p>
          </div>
        </div>

        {/* Bottom accent */}
        <div className="h-px w-0 bg-[#E10600] group-hover:w-full transition-all duration-500" />
      </motion.div>
    </Reveal>
  );
};

const TeamSection = ({ preview = false }) => {
  const { t } = useTranslation();
  const displayed = preview ? teamData.slice(0, 3) : teamData;

  return (
    <section className="py-24 bg-[#060606] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-0 top-0 w-[400px] h-[400px] bg-[#E10600]/4 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          label={t('team.subtitle')}
          title={t('team.title')}
          subtitle={t('team.description')}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayed.map((member, i) => (
            <TeamCard key={member.id} member={member} index={i} />
          ))}
        </div>

        {preview && (
          <Reveal delay={0.4}>
            <div className="text-center mt-14">
              <Link
                to="/team"
                className="font-poppins text-sm font-medium tracking-widest uppercase border border-white/20 text-white px-10 py-4 hover:border-[#E10600] hover:text-[#E10600] transition-all duration-300 inline-block"
              >
                {t('nav.team')} →
              </Link>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
};

export default TeamSection;

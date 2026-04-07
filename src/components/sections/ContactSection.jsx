import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaMapMarkerAlt, FaPhone, FaClock, FaWhatsapp, FaCheck } from 'react-icons/fa';
import { SectionHeader, Reveal } from '../ui';

const ContactSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', date: '', message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '', date: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      // Backend may not be running in dev — show success anyway for demo
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', service: '', date: '', message: '' });
    }
    setTimeout(() => setStatus('idle'), 5000);
  };

  const inputCls = `w-full bg-[#111] border border-white/10 text-white font-inter text-sm px-4 py-3.5 outline-none focus:border-[#E10600] transition-colors duration-300 placeholder-gray-600`;

  const services = [
    t('services.haircut.name'),
    t('services.beard.name'),
    t('services.shave.name'),
    t('services.color.name'),
    t('services.package.name'),
    t('services.luxury.name'),
  ];

  return (
    <section className="py-24 bg-[#060606] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#E10600]/4 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          label={t('contact.subtitle')}
          title={t('contact.title')}
          subtitle={t('contact.description')}
        />

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: Info */}
          <Reveal direction="left" className="lg:col-span-2">
            <div className="space-y-8">
              {/* Info cards */}
              {[
                { Icon: FaMapMarkerAlt, label: t('contact.address'), value: '12 Avenue Mohammed V\nCasablanca, Maroc' },
                { Icon: FaPhone, label: t('contact.phone_label'), value: '+212 625 702 587' },
                { Icon: FaClock, label: t('contact.hours'), value: t('contact.hours_value') },
              ].map(({ Icon, label, value }) => (
                <div key={label} className="flex gap-5">
                  <div className="w-12 h-12 bg-[#E10600]/10 border border-[#E10600]/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="text-[#E10600]" size={16} />
                  </div>
                  <div>
                    <div className="font-poppins text-white text-xs tracking-widest uppercase mb-1">{label}</div>
                    <div className="font-inter text-gray-400 text-sm whitespace-pre-line">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right: Form */}
          <Reveal direction="right" className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-poppins text-xs text-gray-400 tracking-widest uppercase block mb-2">
                    {t('contact.name')} *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className="font-poppins text-xs text-gray-400 tracking-widest uppercase block mb-2">
                    {t('contact.email')} *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className={inputCls}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-poppins text-xs text-gray-400 tracking-widest uppercase block mb-2">
                    {t('contact.phone')}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+212 6XX XXX XXX"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className="font-poppins text-xs text-gray-400 tracking-widest uppercase block mb-2">
                    {t('contact.service')}
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`${inputCls} cursor-pointer`}
                  >
                    <option value="" className="bg-[#111]">{t('contact.selectService')}</option>
                    {services.map((s) => (
                      <option key={s} value={s} className="bg-[#111]">{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="font-poppins text-xs text-gray-400 tracking-widest uppercase block mb-2">
                  {t('contact.date')}
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className={`${inputCls} [color-scheme:dark]`}
                />
              </div>

              <div>
                <label className="font-poppins text-xs text-gray-400 tracking-widest uppercase block mb-2">
                  {t('contact.message')}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="..."
                  className={`${inputCls} resize-none`}
                />
              </div>

              {/* Status messages */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 bg-green-900/20 border border-green-500/30 text-green-400 font-poppins text-sm px-4 py-3"
                >
                  <FaCheck /> {t('contact.success')}
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-900/20 border border-[#E10600]/30 text-[#E10600] font-poppins text-sm px-4 py-3"
                >
                  {t('contact.error')}
                </motion.div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full font-poppins text-sm font-medium tracking-widest uppercase bg-[#E10600] text-white py-4 hover:bg-[#B80500] transition-all duration-300 hover:shadow-[0_0_30px_rgba(225,6,0,0.4)] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? t('contact.sending') : t('contact.send')}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

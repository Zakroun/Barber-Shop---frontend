import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Primary Button
export const Button = ({ children, to, href, onClick, variant = 'primary', size = 'md', className = '', ...props }) => {
  const base = `font-poppins font-medium tracking-widest uppercase inline-flex items-center gap-2 transition-all duration-300`;
  const sizes = {
    sm: 'text-xs px-5 py-2.5',
    md: 'text-sm px-7 py-3.5',
    lg: 'text-sm px-10 py-4',
  };
  const variants = {
    primary: 'bg-[#E10600] text-white hover:bg-[#B80500] hover:shadow-[0_0_30px_rgba(225,6,0,0.4)]',
    outline: 'border border-white/20 text-white hover:border-[#E10600] hover:text-[#E10600]',
    ghost: 'text-white hover:text-[#E10600]',
  };

  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (to) return <Link to={to} className={cls} {...props}>{children}</Link>;
  if (href) return <a href={href} className={cls} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>;
  return <button onClick={onClick} className={cls} {...props}>{children}</button>;
};

// Section Header
export const SectionHeader = ({ label, title, subtitle, light = false, center = true }) => (
  <div className={`mb-16 ${center ? 'text-center' : ''}`}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-4 mb-4 justify-center"
    >
      <div className="h-px w-12 bg-[#E10600]" />
      <span className="font-poppins text-[#E10600] text-xs tracking-[0.4em] uppercase">{label}</span>
      <div className="h-px w-12 bg-[#E10600]" />
    </motion.div>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`font-montserrat font-black text-4xl md:text-5xl tracking-tight mb-4 ${light ? 'text-black' : 'text-white'}`}
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`font-inter text-base max-w-2xl mx-auto ${light ? 'text-gray-600' : 'text-gray-400'}`}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

// Animated number / stat
export const Stat = ({ value, label }) => (
  <div className="text-center">
    <div className="font-montserrat font-black text-4xl text-[#E10600]">{value}</div>
    <div className="font-poppins text-xs text-gray-400 tracking-widest uppercase mt-1">{label}</div>
  </div>
);

// Scroll reveal wrapper
export const Reveal = ({ children, delay = 0, direction = 'up', className = '' }) => {
  const directions = {
    up: { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 } },
    left: { initial: { opacity: 0, x: -40 }, animate: { opacity: 1, x: 0 } },
    right: { initial: { opacity: 0, x: 40 }, animate: { opacity: 1, x: 0 } },
    fade: { initial: { opacity: 0 }, animate: { opacity: 1 } },
  };

  return (
    <motion.div
      initial={directions[direction].initial}
      whileInView={directions[direction].animate}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Loading skeleton card
export const SkeletonCard = () => (
  <div className="rounded-none overflow-hidden">
    <div className="skeleton h-64 w-full" />
    <div className="p-4 bg-[#111] space-y-3">
      <div className="skeleton h-4 w-3/4 rounded" />
      <div className="skeleton h-3 w-1/2 rounded" />
      <div className="skeleton h-3 w-full rounded" />
    </div>
  </div>
);

// Divider with scissors icon
export const ScissorsDivider = () => (
  <div className="flex items-center gap-4 my-8">
    <div className="flex-1 h-px bg-white/10" />
    <div className="text-[#E10600] text-lg rotate-45">✂</div>
    <div className="flex-1 h-px bg-white/10" />
  </div>
);

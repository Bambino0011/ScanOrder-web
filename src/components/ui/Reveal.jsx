import { motion } from 'framer-motion';

// Generic in-view reveal: fades + slides content up as it enters the viewport.
// `as` lets you pick the element, `delay` staggers, `y` controls travel.
const Reveal = ({ children, as = 'div', delay = 0, y = 40, className, once = true }) => {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;

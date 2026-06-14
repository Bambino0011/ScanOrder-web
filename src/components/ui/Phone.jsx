import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

// Phone mockup with an optional cursor-driven 3D tilt. Pass a screenshot `src`.
const Phone = ({ src, alt = '', tilt = true, className = '' }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 20 });
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 150, damping: 20 });

  const handleMove = (e) => {
    if (!tilt) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={`phone ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ rotateX: tilt ? rx : 0, rotateY: tilt ? ry : 0, transformPerspective: 1000 }}
    >
      <div className="phone-screen">
        <img src={src} alt={alt} loading="lazy" />
      </div>
    </motion.div>
  );
};

export default Phone;

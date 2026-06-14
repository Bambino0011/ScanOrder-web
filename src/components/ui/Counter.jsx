import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, animate } from 'framer-motion';

// Counts up from 0 to `to` when scrolled into view.
const Counter = ({ to, suffix = '', prefix = '', duration = 1.6, decimals = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const count = useMotionValue(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = `${prefix}${v.toFixed(decimals)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, to, count, duration, decimals, prefix, suffix]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
};

export default Counter;

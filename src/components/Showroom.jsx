import './Showroom.css';
import { useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform, useMotionValueEvent } from 'framer-motion';
import kdsShot from '../assets/app/kds.webp';
import grupoShot from '../assets/app/grupo.webp';
import analyticsShot from '../assets/app/analytics.webp';
import cartaShot from '../assets/app/carta.webp';

const PANELS = [
  { key: 'kds', label: 'Cocina (KDS)', img: kdsShot, title: 'Cocina conectada', caption: 'Las comandas entran en tiempo real, con temporizadores, llamadas y estados.' },
  { key: 'grupo', label: 'Multi-local', img: grupoShot, title: 'Varios locales, un panel', caption: 'Gestiona toda tu cadena desde un único sitio, con las cifras de cada local.' },
  { key: 'analytics', label: 'Analíticas', img: analyticsShot, title: 'Decisiones con datos', caption: 'Ingresos, ticket medio, tendencia y productos más vendidos.' },
  { key: 'carta', label: 'Carta', img: cartaShot, title: 'Tu carta, a tu manera', caption: 'Edita productos, precios y disponibilidad en segundos, y publica al instante.' },
];

const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

const Win = ({ i, n, panel, progress }) => {
  const d = useTransform(progress, (p) => clamp(i - p * (n - 1), -2.6, 2.6));
  const x = useTransform(d, (v) => `${v * 82}%`);                 // wide separation
  const y = useTransform(d, (v) => `${Math.abs(v) * 6}%`);        // half-moon arc
  const rotateY = useTransform(d, (v) => `${-v * 38}deg`);        // 3D coverflow
  const scale = useTransform(d, (v) => Math.max(0.6, 1 - Math.abs(v) * 0.2));
  const opacity = useTransform(d, (v) => clamp(1 - Math.abs(v) * 0.85, 0, 1)); // back ones fade out
  const filter = useTransform(d, (v) => `blur(${Math.min(Math.abs(v) * 3.5, 7)}px)`);
  const zIndex = useTransform(d, (v) => Math.round(50 - Math.abs(v) * 12));

  return (
    <motion.div className="showroom__win" style={{ x, y, rotateY, scale, opacity, filter, zIndex }}>
      <div className="showroom__screen">
        <img src={panel.img} alt={panel.label} draggable="false" />
      </div>
    </motion.div>
  );
};

const Showroom = () => {
  const ref = useRef(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  // smooth the scroll so the coverflow glides instead of snapping frame-to-frame
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 26, mass: 0.4 });

  useMotionValueEvent(progress, 'change', (p) => {
    setActive(clamp(Math.round(p * (PANELS.length - 1)), 0, PANELS.length - 1));
  });

  const panel = PANELS[active];

  return (
    <section className="showroom section--alt" id="producto" ref={ref}>
      <div className="showroom__sticky">
        <div className="showroom__header">
          <span className="eyebrow">IV — El producto</span>
          <h2 className="section-title">Así se ve <span className="text-gold">por dentro</span></h2>
        </div>

        <div className="showroom__stage">
          {PANELS.map((p, i) => (
            <Win key={p.key} i={i} n={PANELS.length} panel={p} progress={progress} />
          ))}
        </div>

        <div className="showroom__caption">
          <AnimatePresence mode="wait">
            <motion.div
              key={panel.key}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="showroom__title">{panel.title}</h3>
              <p className="showroom__desc">{panel.caption}</p>
            </motion.div>
          </AnimatePresence>

          <div className="showroom__dots">
            {PANELS.map((p, i) => (
              <span key={p.key} className={`showroom__pip ${i === active ? 'is-active' : ''}`} />
            ))}
          </div>
          <span className="showroom__trust">Desliza para explorar · capturas reales</span>
        </div>
      </div>
    </section>
  );
};

export default Showroom;

import './AISection.css';
import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useInView, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';
import sommelierShot from '../assets/app/sommelier-resp.webp';
import arabeShot from '../assets/app/menu-arabe.webp';
import extrasShot from '../assets/app/extras.webp';

const FEATURES = [
  {
    key: 'sommelier',
    img: sommelierShot,
    chip: 'Recomendando…',
    label: 'Sommelier virtual',
    title: 'Un experto que recomienda 24/7',
    desc: 'El Sommelier con IA sugiere platos y maridajes a cada cliente según lo que le apetece. Sube el ticket medio sin contratar a nadie.',
  },
  {
    key: 'translate',
    img: arabeShot,
    chip: 'Traduciendo…',
    label: 'Traducción automática',
    title: 'Tu carta, en el idioma de cada cliente',
    desc: 'La IA traduce tu menú al instante. Ideal para zonas turísticas: cada comensal lee la carta en su idioma, sin que tú toques nada.',
  },
  {
    key: 'upsell',
    img: extrasShot,
    chip: 'Ticket medio ↑',
    label: 'Venta sugerida',
    title: 'Más ticket, sin presionar',
    desc: 'La carta sugiere extras y complementos en el momento justo del pedido. Cada cliente personaliza a su gusto y el ticket medio sube solo.',
  },
];

const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

const useIsMobile = () => {
  const [m, setM] = useState(() => typeof window !== 'undefined' && window.matchMedia('(max-width: 860px)').matches);
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 860px)');
    const on = () => setM(mq.matches);
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);
  return m;
};

const PhoneVisual = ({ feature }) => (
  <div className="ai__phone phone">
    <div className="phone-screen">
      <AnimatePresence>
        <motion.img
          key={feature.key}
          src={feature.img}
          alt={feature.label}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: 'linear' }}
        />
      </AnimatePresence>
    </div>
    <AnimatePresence mode="wait">
      <motion.div
        className="ai__chip"
        key={feature.chip}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.4 }}
      >
        {feature.chip}
      </motion.div>
    </AnimatePresence>
  </div>
);

const Header = () => (
  <div className="ai__header">
    <span className="eyebrow">III — Inteligencia</span>
    <h2 className="section-title">IA trabajando<br /> <span className="text-gold">para ti</span></h2>
  </div>
);

/* ---------- PC: móvil fijo + el texto desfila al lado ---------- */
const FeatureBlock = ({ feature, index, setActive }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: '-50% 0px -50% 0px' });
  useEffect(() => {
    if (inView) setActive(index);
  }, [inView, index, setActive]);
  return (
    <div className={`ai__block ${inView ? 'is-active' : ''}`} ref={ref}>
      <span className="ai__label">{feature.label}</span>
      <h3 className="ai__title">{feature.title}</h3>
      <p className="ai__desc">{feature.desc}</p>
    </div>
  );
};

const AIDesktop = () => {
  const [active, setActive] = useState(0);
  return (
    <section className="section ai" id="ia">
      <div className="container">
        <Header />
        <div className="ai__layout">
          <div className="ai__sticky">
            <PhoneVisual feature={FEATURES[active]} />
          </div>
          <div className="ai__blocks">
            {FEATURES.map((f, i) => (
              <FeatureBlock key={f.key} feature={f} index={i} setActive={setActive} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------- Móvil: móvil fijo arriba + frases con snap ---------- */
const AIMobile = () => {
  const ref = useRef(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 30, mass: 0.5 });
  useMotionValueEvent(progress, 'change', (p) => {
    setActive(clamp(Math.floor(p * FEATURES.length), 0, FEATURES.length - 1));
  });
  const f = FEATURES[active];
  return (
    <section className="ai ai--mobile" id="ia" ref={ref}>
      <div className="ai__stage">
        <Header />
        <PhoneVisual feature={f} />
        <div className="ai__copy">
          <AnimatePresence mode="wait">
            <motion.div
              key={f.key}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="ai__label">{f.label}</span>
              <h3 className="ai__title">{f.title}</h3>
              <p className="ai__desc">{f.desc}</p>
            </motion.div>
          </AnimatePresence>
          <div className="ai__dots">
            {FEATURES.map((x, i) => (
              <span key={x.key} className={`ai__pip ${i === active ? 'is-active' : ''}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const AISection = () => (useIsMobile() ? <AIMobile /> : <AIDesktop />);

export default AISection;

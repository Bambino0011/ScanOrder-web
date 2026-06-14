import './AISection.css';
import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import sommelierShot from '../assets/app/sommelier-resp.webp';
import arabeShot from '../assets/app/menu-arabe.webp';
import menuShot from '../assets/app/menu.webp';

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
    key: 'predict',
    img: menuShot,
    chip: '+18% este finde',
    label: 'Predicción de ventas',
    title: 'Anticipa lo que vas a vender',
    desc: 'Predice la demanda y compárate con el mercado. Compra mejor, prepara con antelación y deja de quedarte sin tus platos estrella.',
  },
];

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

const AISection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="section ai" id="ia">
      <div className="ai__glow glow" />
      <div className="container">
        <div className="ai__header">
          <span className="eyebrow">Inteligencia artificial</span>
          <h2 className="section-title">IA trabajando<br /> <span className="text-gold">para ti</span></h2>
        </div>

        <div className="ai__layout">
          <div className="ai__sticky">
            <div className="ai__phone phone">
              <div className="phone-screen">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={FEATURES[active].key}
                    src={FEATURES[active].img}
                    alt={FEATURES[active].label}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  />
                </AnimatePresence>
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  className="ai__chip"
                  key={FEATURES[active].chip}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  {FEATURES[active].chip}
                </motion.div>
              </AnimatePresence>
            </div>
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

export default AISection;

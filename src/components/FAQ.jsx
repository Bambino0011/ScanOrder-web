import './FAQ.css';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from './ui/Reveal';

const ITEMS = [
  {
    q: '¿Tengo que cambiar mi TPV o caja actual?',
    a: 'No. ScanOrder funciona junto a tu sistema actual. No necesitas cambiar nada de lo que ya usas.',
  },
  {
    q: '¿Es difícil de instalar?',
    a: 'Para nada. Lo dejamos listo en unos 15 minutos, sin necesidad de técnicos ni obras. Generamos tus QR y configuramos tu carta contigo.',
  },
  {
    q: '¿Mis clientes necesitan descargar una app?',
    a: 'No. Solo escanean el QR con la cámara del móvil y acceden a la carta al instante. Sin apps, sin registros.',
  },
  {
    q: '¿Cómo se cobran los pedidos?',
    a: 'Tú eliges: pago en la mesa con tarjeta (vía Stripe) o en persona en efectivo/datáfono. El dinero de los pagos online llega directo a tu cuenta.',
  },
  {
    q: '¿Funciona para varios locales o franquicias?',
    a: 'Sí. Puedes gestionar varios restaurantes desde un único panel, con analíticas agregadas de todo el grupo.',
  },
  {
    q: '¿Cuánto cuesta?',
    a: 'Adaptamos el plan a tu tipo de local. Pídenos un presupuesto sin compromiso y te preparamos una propuesta a medida.',
  },
];

const Item = ({ item, isOpen, onToggle }) => (
  <div className={`faq__item ${isOpen ? 'is-open' : ''}`}>
    <button className="faq__q" onClick={onToggle}>
      <span>{item.q}</span>
      <span className="faq__icon">
        <span /><span />
      </span>
    </button>
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          className="faq__a-wrap"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="faq__a">{item.a}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQ = () => {
  const [open, setOpen] = useState(0);
  return (
    <section className="section faq" id="faq">
      <div className="container faq__inner">
        <Reveal className="faq__header">
          <span className="eyebrow">VI — Preguntas</span>
          <h2 className="section-title">Todo lo que<br /> necesitas saber</h2>
        </Reveal>

        <div className="faq__list">
          {ITEMS.map((item, i) => (
            <Item
              key={item.q}
              item={item}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

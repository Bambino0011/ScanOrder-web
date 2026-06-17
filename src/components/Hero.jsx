import './Hero.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Phone from './ui/Phone';
import Ticket from './ui/Ticket';
import menuShot from '../assets/app/menu.webp';

const TICKER = ['Carta QR', 'Sommelier IA', 'Cobro en mesa', 'Cocina conectada', 'Analíticas', '12 idiomas', 'Multi-local'];

const line = { hidden: { y: '108%' }, show: (i) => ({ y: 0, transition: { duration: 0.9, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] } }) };

const Hero = () => {
  return (
    <section className="hero" id="top">
      <div className="hero__spot glow" />

      <div className="container hero__grid">
        <div className="hero__head">
          <motion.span className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            Est. 2026 · Plataforma para hostelería
          </motion.span>

          <h1 className="hero__title">
            <span className="hero__mask"><motion.span className="hero__l hero__l1" variants={line} custom={0} initial="hidden" animate="show">El restaurante</motion.span></span>
            <span className="hero__mask"><motion.span className="hero__l hero__l2" variants={line} custom={1} initial="hidden" animate="show">que funciona</motion.span></span>
            <span className="hero__mask"><motion.span className="hero__l hero__l3 text-gold" variants={line} custom={2} initial="hidden" animate="show">solo.</motion.span></span>
          </h1>

          <motion.p className="hero__sub" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}>
            Carta, pedidos, cobros, cocina e inteligencia artificial en una sola
            plataforma. Tú llevas el negocio; ScanOrder lleva la operativa.
          </motion.p>

          <motion.div className="hero__actions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.82 }}>
            <Link to="/presupuesto" className="btn btn-primary">Pide presupuesto</Link>
            <a href="#plataforma" className="btn btn-ghost">Ver la plataforma</a>
          </motion.div>
        </div>

        <motion.div className="hero__media" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}>
          <motion.div className="hero__phone" animate={{ y: [0, -14, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
            <Phone src={menuShot} alt="Carta digital de ScanOrder" />
          </motion.div>
          <Ticket className="hero__ticket" />
          <span className="hero__tag">Mesa 4 · en vivo</span>
        </motion.div>
      </div>

      <div className="hero__ticker">
        <div className="hero__ticker-track">
          {[...TICKER, ...TICKER].map((t, i) => (
            <span key={i}>{t}<i>✦</i></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

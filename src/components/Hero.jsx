import './Hero.css';
import { motion } from 'framer-motion';
import Phone from './ui/Phone';
import Ticket from './ui/Ticket';
import MagneticButton from './ui/MagneticButton';
import menuShot from '../assets/app/menu.webp';

const LINE1 = ['La', 'comanda', 'de', 'papel,'];
const LINE2 = ['resuelta.'];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } };
const word = { hidden: { y: '108%' }, show: { y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } } };

const Hero = ({ onOpenDemo }) => {
  return (
    <section className="hero noise" id="top">
      <div className="container hero__inner">
        <div className="hero__text">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }}
          >
            Software para hostelería
          </motion.span>

          <motion.h1 className="hero__title" variants={container} initial="hidden" animate="show">
            <span className="hero__line">
              {LINE1.map((w, i) => (
                <span className="hero__mask" key={i}><motion.span className="hero__word" variants={word}>{w}</motion.span></span>
              ))}
            </span>
            <span className="hero__line">
              {LINE2.map((w, i) => (
                <span className="hero__mask" key={i}><motion.span className="hero__word text-gold" variants={word}>{w}</motion.span></span>
              ))}
            </span>
          </motion.h1>

          <motion.p
            className="hero__sub"
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6 }}
          >
            Tus clientes escanean, piden y pagan desde la mesa. La comanda entra directa
            en cocina: sin errores, sin esperas y sin cambiar tu TPV.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.75 }}
          >
            <MagneticButton className="btn btn-primary" onClick={onOpenDemo} strength={0.25}>
              Pide presupuesto
            </MagneticButton>
            <a href="#plataforma" className="btn btn-ghost">Ver la carta en acción</a>
          </motion.div>

          <motion.p
            className="hero__note"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.95 }}
          >
            Listo en 15 min &nbsp;·&nbsp; Sin permanencia &nbsp;·&nbsp; Soporte directo
          </motion.p>
        </div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="hero__phone"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Phone src={menuShot} alt="Carta digital de ScanOrder" />
          </motion.div>
          <Ticket className="hero__ticket" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

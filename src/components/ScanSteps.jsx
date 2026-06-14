import './ScanSteps.css';
import { motion } from 'framer-motion';

const STEPS = [
  {
    n: '01',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" /><path d="M14 14h3v3" /><path d="M21 14v.01" /><path d="M14 21h.01" /><path d="M21 21v-3h-3" />
      </svg>
    ),
    title: 'Escanea',
    desc: 'El cliente escanea el QR de la mesa. Sin apps, sin descargas, sin registros.',
  },
  {
    n: '02',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
      </svg>
    ),
    title: 'Pide',
    desc: 'Elige platos, extras y modificadores. Paga en la mesa con tarjeta o en persona.',
  },
  {
    n: '03',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" />
      </svg>
    ),
    title: 'Listo',
    desc: 'La comanda entra al instante en la pantalla de cocina y se imprime sola.',
  },
];

const ScanSteps = () => {
  return (
    <section className="section steps">
      <div className="container">
        <motion.div
          className="steps__line"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="steps__grid">
          {STEPS.map((s, i) => (
            <motion.div
              className="steps__item"
              key={s.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: i * 0.18, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="steps__icon">{s.icon}</div>
              <span className="steps__n">{s.n}</span>
              <h3 className="steps__title">{s.title}<span className="dot">.</span></h3>
              <p className="steps__desc">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScanSteps;

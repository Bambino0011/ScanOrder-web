import './Advantages.css';
import Reveal from './ui/Reveal';
import Counter from './ui/Counter';
import { motion } from 'framer-motion';

const ROWS = [
  { label: 'Instalación', value: <><Counter to={15} /> min</> },
  { label: 'Ticket medio', value: <>+<Counter to={30} suffix="%" /></> },
  { label: 'Errores de comanda', value: <>0</> },
  { label: 'Idiomas de carta', value: <><Counter to={12} suffix="+" /></> },
];

const Advantages = () => {
  return (
    <section className="section advantages" id="beneficios">
      <div className="container advantages__inner">
        <Reveal className="advantages__copy">
          <span className="eyebrow">El balance</span>
          <h2 className="section-title">Menos fricción.<br /> Más rentabilidad.</h2>
          <p className="section-lead advantages__lead">
            No es magia, es operativa. Esto es lo que cambia en tu local desde
            el primer servicio con ScanOrder.
          </p>
        </Reveal>

        <motion.div
          className="advantages__receipt"
          initial={{ clipPath: 'inset(0 0 100% 0)' }}
          whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, ease: [0.3, 0.9, 0.4, 1] }}
        >
          <div className="advantages__perf" />
          <div className="advantages__paper">
            <div className="advantages__rhead">
              <span>RESULTADOS</span>
              <span>ScanOrder</span>
            </div>
            <div className="advantages__rrule" />
            {ROWS.map((r) => (
              <div className="advantages__rrow" key={r.label}>
                <span className="advantages__rlabel">{r.label}</span>
                <span className="advantages__rdots" />
                <span className="advantages__rvalue">{r.value}</span>
              </div>
            ))}
            <div className="advantages__rrule" />
            <div className="advantages__rfoot">Gracias por digitalizar tu sala ·</div>
          </div>
          <div className="advantages__perf advantages__perf--b" />
        </motion.div>
      </div>
    </section>
  );
};

export default Advantages;

import './Ticket.css';
import { motion } from 'framer-motion';

const ITEMS = [
  { q: 2, name: 'Café con leche', price: '3,00' },
  { q: 1, name: 'Tostada tomate', price: '2,50' },
  { q: 1, name: 'Zumo natural', price: '2,80' },
  { q: 2, name: 'Croissant', price: '3,20' },
];

// The signature element: a thermal kitchen ticket that "prints" into view.
const Ticket = ({ className = '' }) => {
  return (
    <motion.div
      className={`ticket ${className}`}
      initial={{ clipPath: 'inset(0 0 100% 0)' }}
      whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 1.1, ease: [0.3, 0.9, 0.4, 1] }}
    >
      <div className="ticket__perf ticket__perf--top" />
      <div className="ticket__body">
        <div className="ticket__head">
          <span>COMANDA</span>
          <span>Mesa 4</span>
        </div>
        <div className="ticket__meta">08:42 · 4 pax · Sala</div>
        <div className="ticket__rule" />
        {ITEMS.map((it) => (
          <div className="ticket__row" key={it.name}>
            <span className="ticket__q">{it.q}×</span>
            <span className="ticket__name">{it.name}</span>
            <span className="ticket__dots" />
            <span className="ticket__price">{it.price}</span>
          </div>
        ))}
        <div className="ticket__rule" />
        <div className="ticket__row ticket__row--total">
          <span className="ticket__name">TOTAL</span>
          <span className="ticket__dots" />
          <span className="ticket__price">17,50 €</span>
        </div>
        <div className="ticket__stamp">PAGADO</div>
        <div className="ticket__foot">·  scanorder horeca  ·</div>
      </div>
      <div className="ticket__perf ticket__perf--bottom" />
    </motion.div>
  );
};

export default Ticket;

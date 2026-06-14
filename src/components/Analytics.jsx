import './Analytics.css';
import { motion } from 'framer-motion';
import Showcase from './ui/Showcase';
import Counter from './ui/Counter';

const BARS = [42, 65, 38, 80, 55, 95, 70];
const DAYS = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];

// Heatmap intensities (0-3) for a peak-hours grid
const HEAT = [
  [0, 0, 1, 2, 1, 0],
  [0, 1, 2, 3, 2, 1],
  [1, 2, 3, 3, 3, 2],
  [0, 1, 2, 2, 1, 1],
];

const AnalyticsVisual = () => (
  <div className="analytics-card glass-card">
    <div className="analytics-card__head">
      <div>
        <span className="analytics-card__label">Ventas esta semana</span>
        <strong className="analytics-card__value">
          <Counter to={4820} prefix="" suffix=" €" duration={1.8} />
        </strong>
      </div>
      <span className="analytics-card__trend">▲ <Counter to={18} suffix="%" /></span>
    </div>

    <div className="analytics-card__bars">
      {BARS.map((h, i) => (
        <div className="analytics-bar" key={i}>
          <motion.span
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          />
          <em>{DAYS[i]}</em>
        </div>
      ))}
    </div>

    <div className="analytics-card__heat">
      <span className="analytics-card__label">Horas punta</span>
      <div className="analytics-heat">
        {HEAT.flatMap((row, r) =>
          row.map((v, c) => (
            <motion.span
              key={`${r}-${c}`}
              className={`heat heat--${v}`}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (r * 6 + c) * 0.02 }}
            />
          ))
        )}
      </div>
    </div>
  </div>
);

const Analytics = () => (
  <Showcase
    id="analiticas"
    eyebrow="Analíticas e informes"
    title={<>Decisiones con datos,<br /> no con corazonadas</>}
    desc="Sabe qué se vende, cuándo y cuánto. ScanOrder convierte cada pedido en información útil para ganar más."
    bullets={[
      { icon: 'award', title: 'Productos más vendidos', text: 'Ranking y demanda de cada plato en tiempo real.' },
      { icon: 'flame', title: 'Mapa de horas punta', text: 'Organiza turnos y stock según tu demanda real.' },
      { icon: 'trend', title: 'Predicción y benchmark', text: 'Anticipa ventas y compárate con el sector.' },
    ]}
    visual={<><div className="showcase__glow glow" /><AnalyticsVisual /></>}
  />
);

export default Analytics;

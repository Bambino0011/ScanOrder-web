import './Bento.css';
import { motion } from 'framer-motion';
import Reveal from './ui/Reveal';
import Icon from './ui/Icon';

/* --- Bespoke UI mockups (no screenshots) --- */

const MENU = [
  ['Tostada de tomate', '2,50'],
  ['Café con leche', '1,80'],
  ['Zumo natural', '2,80'],
  ['Croissant artesano', '1,60'],
];

const MiniMenu = () => (
  <div className="mm">
    <div className="mm__bar">
      <span className="mm__table">Mesa 4</span>
      <span className="mm__open"><i />Abierto</span>
    </div>
    <div className="mm__cat">Desayunos</div>
    <ul className="mm__list">
      {MENU.map(([name, price]) => (
        <li key={name}>
          <span>{name}</span>
          <span className="mm__dots" />
          <span className="mm__price">{price}</span>
        </li>
      ))}
    </ul>
    <div className="mm__cta">Añadir al pedido</div>
  </div>
);

const ORDERS = [
  { t: '5', time: '2:00', items: ['1× Tostada salmón', '1× Café con leche'], p: 50 },
  { t: '8', time: '1:12', items: ['1× Coulant', '1× Té verde'], p: 25 },
];

const MiniKDS = () => (
  <div className="mk">
    {ORDERS.map((o) => (
      <div className="mk__ticket" key={o.t}>
        <div className="mk__top"><span className="mk__mesa">Mesa {o.t}</span><span className="mk__time">{o.time}</span></div>
        {o.items.map((it) => <div className="mk__item" key={it}>{it}</div>)}
        <div className="mk__bar"><motion.i initial={{ width: 0 }} whileInView={{ width: `${o.p}%` }} viewport={{ once: true }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} /></div>
      </div>
    ))}
  </div>
);

const BARS = [38, 62, 48, 80, 58, 92];
const DAYS = ['L', 'M', 'X', 'J', 'V', 'S'];

const MiniChart = () => (
  <div className="mc">
    <div className="mc__kpis">
      <div>
        <span className="mc__label">Ventas semana</span>
        <strong className="mc__val">4.820 €</strong>
      </div>
      <span className="mc__trend">▲ 18%</span>
    </div>
    <div className="mc__bars">
      {BARS.map((h, i) => (
        <div className="mc__bar" key={i}>
          <motion.span initial={{ height: 0 }} whileInView={{ height: `${h}%` }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }} />
          <em>{DAYS[i]}</em>
        </div>
      ))}
    </div>
  </div>
);

const Bento = () => {
  return (
    <section className="section bento" id="plataforma">
      <div className="container">
        <Reveal className="bento__header">
          <span className="eyebrow">I — La plataforma</span>
          <h2 className="section-title">Una herramienta.<br /> Toda la operativa.</h2>
        </Reveal>

        <div className="bento__grid">
          <Reveal className="bento__tile bento__tile--shot bento--carta" y={40}>
            <div className="bento__head">
              <span className="bento__kicker">La carta digital</span>
              <h3>Escanea, mira y pide</h3>
            </div>
            <div className="bento__stage"><MiniMenu /></div>
          </Reveal>

          <Reveal className="bento__tile bento__tile--shot bento--cocina" y={40} delay={0.05}>
            <div className="bento__head">
              <span className="bento__kicker">Cocina conectada</span>
              <h3>Comandas al instante en el KDS</h3>
            </div>
            <div className="bento__stage"><MiniKDS /></div>
          </Reveal>

          <Reveal className="bento__tile bento--somm" y={40} delay={0.1}>
            <Icon name="wine" size={26} className="bento__icon" />
            <h3>Sommelier IA</h3>
            <p>Recomienda platos y maridajes a cada cliente.</p>
          </Reveal>

          <Reveal className="bento__tile bento--cobro" y={40} delay={0.15}>
            <Icon name="card" size={26} className="bento__icon" />
            <h3>Cobro en mesa</h3>
            <p>Tarjeta o efectivo. El dinero, directo a tu cuenta.</p>
          </Reveal>

          <Reveal className="bento__tile bento__tile--shot bento--analit" y={40} delay={0.1}>
            <div className="bento__head">
              <span className="bento__kicker">Analíticas</span>
              <h3>Productos top, horas punta y predicción</h3>
            </div>
            <div className="bento__stage"><MiniChart /></div>
          </Reveal>

          <Reveal className="bento__tile bento--idiom" y={40} delay={0.15}>
            <Icon name="globe" size={26} className="bento__icon" />
            <h3>12+ idiomas</h3>
            <p>Traducción automática de tu carta.</p>
          </Reveal>

          <Reveal className="bento__tile bento--multi" y={40} delay={0.2}>
            <Icon name="building" size={26} className="bento__icon" />
            <h3>Multi-local</h3>
            <p>Cadenas y franquicias, un solo panel.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Bento;

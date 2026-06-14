import './ProblemSolution.css';
import Reveal from './ui/Reveal';

const BEFORE = [
  'Largas esperas para pedir y pagar',
  'Errores en la comanda y platos equivocados',
  'Camareros saturados en hora punta',
  'Comisiones altas de terceros',
];

const AFTER = [
  'Tus clientes piden y pagan desde la mesa',
  'La comanda llega exacta a cocina',
  'Tu equipo se centra en atender, no en correr',
  'El dinero va directo a tu cuenta',
];

const ProblemSolution = () => {
  return (
    <section className="section ps">
      <div className="container">
        <Reveal className="ps__header">
          <span className="eyebrow">El cambio</span>
          <h2 className="section-title">¿Cansado de la lentitud<br /> y los errores?</h2>
        </Reveal>

        <div className="ps__grid">
          <Reveal className="ps__card ps__card--before" y={50}>
            <div className="ps__tag">Antes</div>
            <ul>
              {BEFORE.map((t) => (
                <li key={t}><span className="ps__x">✕</span>{t}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="ps__card ps__card--after" y={50} delay={0.15}>
            <div className="ps__tag ps__tag--gold">Con ScanOrder</div>
            <ul>
              {AFTER.map((t) => (
                <li key={t}><span className="ps__check">✓</span>{t}</li>
              ))}
            </ul>
            <div className="ps__glow glow" />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;

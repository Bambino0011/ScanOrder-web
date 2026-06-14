import './Chains.css';
import Showcase from './ui/Showcase';

const LOCATIONS = [
  { name: 'Centro', sales: '1.240 €', status: 'Abierto' },
  { name: 'Playa', sales: '980 €', status: 'Abierto' },
  { name: 'Aeropuerto', sales: '2.100 €', status: 'Abierto' },
];

const ChainsVisual = () => (
  <div className="chains-card glass-card">
    <div className="chains-card__head">
      <span>Mis locales</span>
      <strong className="text-gold">3 activos</strong>
    </div>
    {LOCATIONS.map((l) => (
      <div className="chains-row" key={l.name}>
        <div className="chains-row__dot" />
        <span className="chains-row__name">{l.name}</span>
        <span className="chains-row__status">{l.status}</span>
        <strong className="chains-row__sales">{l.sales}</strong>
      </div>
    ))}
    <div className="chains-card__total">
      <span>Total grupo hoy</span>
      <strong>4.320 €</strong>
    </div>
  </div>
);

const Chains = () => (
  <Showcase
    id="cadenas"
    reverse
    eyebrow="Cadenas y franquicias"
    title={<>Varios locales,<br /> un solo panel</>}
    desc="Gestiona toda tu cadena o franquicia desde un único lugar, con analíticas agregadas de todos tus restaurantes."
    bullets={[
      { icon: 'building', title: 'Multi-local', text: 'Cada restaurante con su carta, bajo un mismo grupo.' },
      { icon: 'bars', title: 'Visión global', text: 'Compara el rendimiento de todos tus locales.' },
      { icon: 'lock', title: 'Roles y accesos', text: 'Da acceso a cada gestor solo a lo que le toca.' },
    ]}
    visual={<><div className="showcase__glow glow" /><ChainsVisual /></>}
  />
);

export default Chains;

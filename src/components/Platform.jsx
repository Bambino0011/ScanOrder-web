import './Platform.css';
import Reveal from './ui/Reveal';
import Icon from './ui/Icon';

const COLS = [
  {
    icon: 'diner',
    title: 'Tus clientes',
    desc: 'Escanean, piden, eligen extras y pagan desde la mesa. Sin apps ni esperas.',
    points: ['Carta digital al instante', 'Modificadores y alérgenos', 'Pago con tarjeta o en persona'],
  },
  {
    icon: 'kitchen',
    title: 'Tu cocina',
    desc: 'Las comandas llegan claras a la pantalla (KDS) y se imprimen solas. Cero errores.',
    points: ['Pantalla de cocina en vivo', 'Impresión térmica automática', 'Tiempos y disponibilidad'],
  },
  {
    icon: 'owner',
    title: 'Tú',
    desc: 'Gestionas la carta, los precios y ves cómo va tu negocio en tiempo real.',
    points: ['Editor de carta y precios', 'Analíticas y predicción IA', 'Cobros y facturación'],
  },
];

const Platform = () => {
  return (
    <section className="section platform" id="plataforma">
      <div className="platform__glow glow" />
      <div className="container">
        <Reveal className="platform__header">
          <span className="eyebrow">La plataforma</span>
          <h2 className="section-title">Mucho más que<br />un menú digital</h2>
          <p className="section-lead">
            ScanOrder conecta a tus clientes, tu cocina y tu gestión en un solo sistema.
            Una herramienta que sustituye a varias.
          </p>
        </Reveal>

        <div className="platform__grid">
          {COLS.map((c, i) => (
            <Reveal className="platform__card glass-card" key={c.title} y={50} delay={i * 0.12}>
              <div className="platform__icon"><Icon name={c.icon} size={30} /></div>
              <h3 className="platform__title">{c.title}</h3>
              <p className="platform__desc">{c.desc}</p>
              <ul className="platform__points">
                {c.points.map((p) => (
                  <li key={p}><span className="platform__dot" />{p}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Platform;

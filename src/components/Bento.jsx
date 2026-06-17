import './Bento.css';
import Reveal from './ui/Reveal';
import foto1 from '../assets/app/foto1.webp';
import foto2 from '../assets/app/foto2.webp';
import foto3 from '../assets/app/foto3.webp';
import foto4 from '../assets/app/foto4.webp';

const CARDS = [
  {
    photo: foto1,
    title: 'Carta digital',
    desc: 'Escanean el QR y ven la carta con fotos. Sin apps, sin esperas.',
    order: { name: 'Tostada de tomate', price: '2,50 €' },
  },
  {
    photo: foto2,
    title: 'Sommelier con IA',
    desc: 'Recomienda platos y maridajes a cada cliente, como un camarero experto.',
    order: { name: 'Te recomiendo: Rioja Crianza', price: '3,50 €' },
  },
  {
    photo: foto3,
    title: 'Venta sugerida',
    desc: 'Sugiere extras al pedir. El ticket medio sube solo, sin presionar.',
    order: { name: 'Copa de vino', price: '+3,50 €' },
  },
  {
    photo: foto4,
    title: 'Pago en la mesa',
    desc: 'Pagan con tarjeta o en persona. El dinero llega directo a tu cuenta.',
    order: { name: 'Pago completado · Mesa 4', price: '17,50 €', action: '✓' },
  },
];

const Bento = () => {
  return (
    <section className="section bento" id="plataforma">
      <div className="container">
        <Reveal className="bento__header">
          <span className="eyebrow">I — La plataforma</span>
          <h2 className="section-title">Todo en el móvil de tu cliente</h2>
        </Reveal>

        <div className="bento__grid">
          {CARDS.map((c, i) => (
            <Reveal as="article" className="pcard" key={c.title} y={40} delay={i * 0.08}>
              <img className="pcard__photo" src={c.photo} alt={c.title} loading="lazy" />
              <div className="pcard__shade" />
              <div className="pcard__top">
                <h3 className="pcard__title">{c.title}</h3>
                <p className="pcard__desc">{c.desc}</p>
              </div>
              <div className="pcard__order">
                <div className="pcard__order-info">
                  <strong>{c.order.name}</strong>
                  <span>{c.order.price}</span>
                </div>
                <button className="pcard__add" aria-hidden="true">{c.order.action || '+'}</button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bento;

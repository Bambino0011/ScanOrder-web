import './CartaDigitalQR.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import useSeo from '../hooks/useSeo';

const STEPS = [
  { n: '01', t: 'Escanean el QR', d: 'El cliente apunta con la cámara al código QR de la mesa. La carta se abre sola, sin descargar ninguna app.' },
  { n: '02', t: 'Ven la carta digital', d: 'Explora el menú digital con fotos, alérgenos y descripciones, traducido a su idioma si hace falta.' },
  { n: '03', t: 'Piden por QR', d: 'Añade los productos y envía el pedido directo a cocina o barra. Sin esperas y sin errores de comanda.' },
  { n: '04', t: 'Pagan en la mesa', d: 'Paga con tarjeta desde el móvil o en persona. El cobro llega directo a tu cuenta.' },
];

const VENTAJAS = [
  'Menos tiempo en sala: el camarero deja de ir y venir a tomar nota.',
  'Más ticket medio: la carta sugiere extras y maridajes en el momento justo.',
  'Cero errores de comanda: el pedido llega tal cual lo pide el cliente.',
  'Carta siempre actualizada: cambia precios o platos en segundos, sin reimprimir.',
  'Multi-idioma automático: ideal para zonas con turismo.',
  'Sin instalar nada: el cliente solo necesita la cámara del móvil.',
];

const FAQ = [
  { q: '¿El cliente necesita descargar una app?', a: 'No. Con la cámara del móvil escanea el QR y la carta digital se abre en el navegador al instante.' },
  { q: '¿Sirve para bares además de restaurantes y cafeterías?', a: 'Sí. ScanOrder está pensado para todo el sector HORECA, incluidos bares: incluso contempla la tapa incluida con la bebida, al estilo de los bares de toda la vida.' },
  { q: '¿Puedo cambiar la carta yo mismo?', a: 'Sí. Editas precios, fotos y platos desde el panel en segundos, y se actualiza al momento en todas las mesas.' },
  { q: '¿Cómo se cobra?', a: 'El cliente puede pagar por QR con tarjeta desde su móvil o en persona. El dinero llega directo a tu cuenta.' },
];

const CartaDigitalQR = () => {
  useSeo({
    title: 'Carta digital por QR para bares y restaurantes | ScanOrder',
    description: 'Carta digital y pedidos por QR para bares, restaurantes y cafeterías. Tus clientes escanean, ven el menú digital, piden y pagan en la mesa. Sin apps, sin esperas y con menos errores.',
    path: '/carta-digital-qr',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="cpage">
      <main>
        {/* HERO */}
        <section className="cp-hero">
          <div className="container">
            <span className="eyebrow">Carta digital · Pedidos por QR</span>
            <h1 className="cp-h1">
              Carta digital por <span className="text-gold">QR</span> para bares y restaurantes
            </h1>
            <p className="cp-lead">
              Tus clientes escanean un código QR, ven la <strong>carta digital con fotos</strong>,
              hacen sus <strong>pedidos por QR</strong> y pagan en la mesa. Sin apps, sin esperas
              y con menos errores de comanda. Más rapidez en sala y más rentabilidad para tu local.
            </p>
            <div className="cp-actions">
              <Link to="/presupuesto" className="btn btn-primary">Pide presupuesto</Link>
              <Link to="/" className="btn btn-ghost">← Volver al inicio</Link>
            </div>
          </div>
        </section>

        {/* QUÉ ES */}
        <section className="cp-section">
          <div className="container cp-narrow">
            <h2 className="cp-h2">¿Qué es una carta digital por QR?</h2>
            <p>
              Una <strong>carta digital por QR</strong> es un menú al que tus clientes acceden
              escaneando un código QR colocado en la mesa. En lugar de una carta de papel, ven
              un <strong>menú digital</strong> en su propio móvil: con fotos de cada plato,
              precios actualizados, alérgenos e incluso traducción automática a su idioma.
            </p>
            <p>
              Con ScanOrder, esa misma carta permite además <strong>pedir por QR</strong> y
              <strong> pagar en la mesa</strong>, conectando la sala con la cocina y con tu caja.
              Todo en una sola plataforma para hostelería (HORECA).
            </p>
          </div>
        </section>

        {/* CÓMO FUNCIONA */}
        <section className="cp-section cp-section--alt">
          <div className="container">
            <h2 className="cp-h2">Cómo funciona el pedido por QR</h2>
            <div className="cp-steps">
              {STEPS.map((s) => (
                <article className="cp-step" key={s.n}>
                  <span className="cp-step-n">{s.n}</span>
                  <h3 className="cp-step-t">{s.t}</h3>
                  <p className="cp-step-d">{s.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* VENTAJAS */}
        <section className="cp-section">
          <div className="container cp-narrow">
            <h2 className="cp-h2">Ventajas de la carta digital y los pedidos por QR</h2>
            <ul className="cp-list">
              {VENTAJAS.map((v) => (
                <li key={v}>{v}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* PARA BARES */}
        <section className="cp-section cp-section--alt">
          <div className="container cp-narrow">
            <h2 className="cp-h2">Carta QR para bares: con tapa incluida</h2>
            <p>
              ScanOrder está pensado también para <strong>bares</strong>, no solo para
              restaurantes y cafeterías. Contempla la <strong>tapa incluida con la bebida</strong>:
              cada cliente pide su caña o refresco y elige su tapa desde el móvil, con tope de
              variedades por mesa, como en los bares de toda la vida. Una carta digital que
              entiende cómo funciona de verdad un bar.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="cp-section">
          <div className="container cp-narrow">
            <h2 className="cp-h2">Preguntas frecuentes</h2>
            <div className="cp-faq">
              {FAQ.map((f) => (
                <div className="cp-faq-item" key={f.q}>
                  <h3 className="cp-faq-q">{f.q}</h3>
                  <p className="cp-faq-a">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="cp-cta">
          <div className="container">
            <h2 className="cp-cta-title">¿Quieres la carta digital por QR en tu local?</h2>
            <p className="cp-cta-sub">Te preparamos una propuesta sin compromiso en menos de 24 h.</p>
            <Link to="/presupuesto" className="btn btn-primary">Pide tu presupuesto</Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CartaDigitalQR;

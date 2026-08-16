import './CartaDigitalQR.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import useSeo from '../hooks/useSeo';

const PASOS = [
  { n: '01', t: 'Piden la bebida', d: 'El cliente escanea el QR de la mesa y pide su caña, refresco o copa desde el móvil. Sin esperar al camarero.' },
  { n: '02', t: 'Eligen su tapa', d: 'Cada bebida da derecho a su tapa. El cliente elige cuál quiere de las disponibles, con tope de variedades por mesa.' },
  { n: '03', t: 'Llega a la barra', d: 'El pedido (bebidas + tapas) entra directo a barra y cocina, sin errores ni comandas perdidas.' },
  { n: '04', t: 'Pagan en la mesa', d: 'Pagan con tarjeta desde el móvil o en persona cuando quieran. Sin colas en la barra.' },
];

const VENTAJAS = [
  'Gestiona la tapa incluida de verdad: una tapa por bebida, con sus reglas reales.',
  'Tope de variedades por mesa: evita el caos de 8 tapas distintas en una ronda.',
  'Menos camareros desbordados en horas punta: el cliente pide solo.',
  'Cero errores de comanda: la tapa y la bebida llegan tal cual se piden.',
  'Sube el ticket: la app sugiere otra ronda o un extra al pagar.',
  'Alérgenos y “sin tapa” contemplados: cada cliente elige con criterio.',
];

const FAQ = [
  { q: '¿ScanOrder gestiona la tapa incluida con la bebida?', a: 'Sí. Es una función pensada para los bares de aquí: cada bebida da derecho a su tapa y el cliente la elige desde el móvil, con un tope de variedades por mesa para no liar a la barra.' },
  { q: '¿Y si alguien no quiere tapa?', a: 'Existe la opción “Sin tapa”. El cliente puede renunciar a ella, y puede dejar una nota a cocina si tiene alguna alergia o preferencia.' },
  { q: '¿Puedo cobrar un suplemento en algunas tapas?', a: 'Sí. Las tapas normales van incluidas y, si quieres, puedes marcar un pequeño suplemento en las tapas premium.' },
  { q: '¿Sirve para la terraza y las horas punta?', a: 'Justo para eso. Cuando se llena, los clientes piden y pagan solos desde el móvil, y tu equipo se centra en servir.' },
];

const ParaBares = () => {
  useSeo({
    title: 'Software y carta QR para bares (con tapa incluida) | ScanOrder',
    description: 'Carta QR y pedidos por QR para bares, con la tapa incluida con la bebida: el cliente pide y elige su tapa desde el móvil. Menos colas, menos errores y más ventas en tu bar.',
    path: '/para-bares',
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
            <span className="eyebrow">Para bares · Tapa incluida</span>
            <h1 className="cp-h1">
              Carta QR para <span className="text-gold">bares</span>, con la tapa incluida
            </h1>
            <p className="cp-lead">
              ScanOrder no es una carta genérica: entiende cómo funciona un bar de verdad.
              Tus clientes <strong>piden la bebida</strong>, <strong>eligen su tapa</strong> desde
              el móvil y <strong>pagan en la mesa</strong>. Menos colas en la barra, menos errores
              y más rondas. Como los bares de toda la vida, pero sin liarse.
            </p>
            <div className="cp-actions">
              <Link to="/presupuesto" className="btn btn-primary">Pide presupuesto</Link>
              <Link to="/" className="btn btn-ghost">← Volver al inicio</Link>
            </div>
          </div>
        </section>

        {/* TAPA INCLUIDA */}
        <section className="cp-section cp-section--alt">
          <div className="container cp-narrow">
            <h2 className="cp-h2">La tapa incluida, como aquí de toda la vida</h2>
            <p>
              En los bares de Jaén la bebida lleva su tapa, y ScanOrder lo gestiona tal cual:
              cada <strong>bebida da derecho a su tapa</strong> y el cliente <strong>elige cuál
              quiere</strong> desde su móvil. Para que la barra no se vuelva loca, hay un
              <strong> tope de variedades por mesa</strong> (por ejemplo, 2): cuando la mesa elige
              sus tapas, el resto de la ronda va sobre esas.
            </p>
            <p>
              Además contempla la opción <strong>“Sin tapa”</strong> para quien no quiere, una
              <strong> nota a cocina</strong> para alergias o preferencias, y un
              <strong> suplemento opcional</strong> en las tapas premium. Todo lo que pasa en un bar
              de verdad, resuelto.
            </p>
          </div>
        </section>

        {/* CÓMO FUNCIONA */}
        <section className="cp-section">
          <div className="container">
            <h2 className="cp-h2">Cómo funciona en tu bar</h2>
            <div className="cp-steps">
              {PASOS.map((s) => (
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
        <section className="cp-section cp-section--alt">
          <div className="container cp-narrow">
            <h2 className="cp-h2">Ventajas para tu bar</h2>
            <ul className="cp-list">
              {VENTAJAS.map((v) => (
                <li key={v}>{v}</li>
              ))}
            </ul>
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

        {/* CTA */}
        <section className="cp-cta">
          <div className="container">
            <h2 className="cp-cta-title">¿Lo quieres en tu bar?</h2>
            <p className="cp-cta-sub">Te montamos una demo con la tapa incluida y te pasamos propuesta sin compromiso.</p>
            <Link to="/presupuesto" className="btn btn-primary">Pide tu presupuesto</Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ParaBares;

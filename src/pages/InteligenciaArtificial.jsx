import './CartaDigitalQR.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const USOS = [
  {
    n: '01',
    t: 'Sommelier con IA',
    d: 'Recomienda platos y maridajes a cada cliente, como un camarero experto. Sugiere el vino para ese plato o el plato estrella según lo que ya ha pedido.',
  },
  {
    n: '02',
    t: 'Sugerencia al pagar',
    d: 'Justo en el momento del cobro, la IA propone un extra a medida (un postre, una copa, un café). Sube el ticket medio sin que nadie tenga que “vender”.',
  },
  {
    n: '03',
    t: 'Analítica para el jefe',
    d: 'En tu panel, la IA analiza las ventas: qué platos se venden más y a qué horas, cuándo conviene promocionar cada uno, y qué productos rinden poco y deberías reemplazar.',
  },
];

const VENTAJAS = [
  'Más ticket medio: la IA sugiere el extra adecuado en el momento justo.',
  'Decisiones con datos, no a ojo: sabes qué vender, cuándo y a quién.',
  'Menos producto parado: detecta lo que casi no se vende para reemplazarlo.',
  'Carta más rentable: potencia tus platos estrella y corrige los flojos.',
  'Trabaja sola, 24/7: aprende de cada servicio sin que tengas que tocar nada.',
];

const FAQ = [
  { q: '¿La IA recomienda platos al cliente automáticamente?', a: 'Sí. El sommelier con IA sugiere platos y maridajes a cada cliente según lo que está pidiendo, como haría un buen camarero.' },
  { q: '¿Cómo ayuda a vender más al pagar?', a: 'En el momento del cobro, la IA propone un extra a medida (postre, copa, café). Es una sugerencia natural que sube el ticket medio sin presionar.' },
  { q: '¿Qué datos analiza para el dueño?', a: 'Analiza las ventas para decirte qué platos se venden más y a qué horas, cuándo promocionar cada uno y qué productos rinden poco y conviene reemplazar. Todo en el panel de administración.' },
  { q: '¿Tengo que saber de tecnología para usarlo?', a: 'No. La IA trabaja sola en segundo plano y te muestra las conclusiones de forma sencilla en tu panel.' },
];

const InteligenciaArtificial = () => {
  useEffect(() => {
    const prevTitle = document.title;
    const descEl = document.querySelector('meta[name="description"]');
    const prevDesc = descEl ? descEl.getAttribute('content') : null;

    document.title = 'Inteligencia artificial para restaurantes y bares | ScanOrder';
    if (descEl) {
      descEl.setAttribute('content', 'La IA de ScanOrder recomienda platos a tus clientes, sugiere extras al pagar para subir el ticket y analiza tus ventas para decirte qué vender, cuándo y qué reemplazar. IA para hostelería.');
    }
    window.scrollTo(0, 0);

    return () => {
      document.title = prevTitle;
      if (descEl && prevDesc) descEl.setAttribute('content', prevDesc);
    };
  }, []);

  return (
    <div className="cpage">
      <main>
        {/* HERO */}
        <section className="cp-hero">
          <div className="container">
            <span className="eyebrow">Inteligencia artificial · Hostelería</span>
            <h1 className="cp-h1">
              <span className="text-gold">Inteligencia artificial</span> para tu restaurante o bar
            </h1>
            <p className="cp-lead">
              ScanOrder usa IA en los tres momentos que más importan: <strong>recomienda platos</strong> a
              tus clientes, <strong>sugiere extras al pagar</strong> para subir el ticket medio y
              <strong> analiza tus ventas</strong> para decirte qué vender, cuándo y qué reemplazar.
              Como tener un maître y un analista trabajando para ti las 24 horas.
            </p>
            <div className="cp-actions">
              <Link to="/presupuesto" className="btn btn-primary">Pide presupuesto</Link>
              <Link to="/" className="btn btn-ghost">← Volver al inicio</Link>
            </div>
          </div>
        </section>

        {/* LOS 3 USOS */}
        <section className="cp-section cp-section--alt">
          <div className="container">
            <h2 className="cp-h2">Tres formas en que la IA trabaja por ti</h2>
            <div className="cp-steps">
              {USOS.map((u) => (
                <article className="cp-step" key={u.n}>
                  <span className="cp-step-n">{u.n}</span>
                  <h3 className="cp-step-t">{u.t}</h3>
                  <p className="cp-step-d">{u.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SOMMELIER */}
        <section className="cp-section">
          <div className="container cp-narrow">
            <h2 className="cp-h2">Sommelier con IA: recomienda como un experto</h2>
            <p>
              Cada cliente recibe sugerencias personalizadas mientras mira la carta: el
              <strong> maridaje</strong> perfecto para su plato, el plato estrella que combina con
              lo que ya ha pedido, o una alternativa si tiene una alergia. Es como tener un
              <strong> camarero experto</strong> en cada mesa, sin sumar personal.
            </p>
          </div>
        </section>

        {/* SUGERENCIA AL PAGAR */}
        <section className="cp-section cp-section--alt">
          <div className="container cp-narrow">
            <h2 className="cp-h2">Sugerencia al pagar: más ticket, sin presionar</h2>
            <p>
              En el momento del cobro, la IA propone un <strong>extra a medida</strong> —un postre,
              una copa, un café— según lo que el cliente ha consumido. Es una recomendación natural
              que <strong>sube el ticket medio</strong> de forma constante, servicio tras servicio,
              sin que tu equipo tenga que “vender” nada.
            </p>
          </div>
        </section>

        {/* ANALÍTICA */}
        <section className="cp-section">
          <div className="container cp-narrow">
            <h2 className="cp-h2">Analítica con IA en tu panel</h2>
            <p>
              En el panel de administración, la IA convierte tus ventas en <strong>decisiones claras</strong>:
            </p>
            <ul className="cp-list">
              <li>Qué platos se venden más y a qué horas del día.</li>
              <li>Cuándo conviene promocionar cada plato para vender más.</li>
              <li>Qué productos rinden poco y deberías reemplazar o quitar de la carta.</li>
              <li>Cómo evoluciona tu negocio para que decidas con datos, no a ojo.</li>
            </ul>
          </div>
        </section>

        {/* VENTAJAS */}
        <section className="cp-section cp-section--alt">
          <div className="container cp-narrow">
            <h2 className="cp-h2">Por qué la IA marca la diferencia</h2>
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
            <h2 className="cp-cta-title">Pon la IA a trabajar en tu local</h2>
            <p className="cp-cta-sub">Te enseñamos cómo funciona con una propuesta sin compromiso.</p>
            <Link to="/presupuesto" className="btn btn-primary">Pide tu presupuesto</Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default InteligenciaArtificial;

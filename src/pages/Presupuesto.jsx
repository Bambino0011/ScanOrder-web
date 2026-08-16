import './Presupuesto.css';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import useSeo from '../hooks/useSeo';

const SERVICE_ID = 'service_hdevgkw';
const TEMPLATE_ID = 'template_a5fcr4s';
const PUBLIC_KEY = 'KAK6yVDx3eRvSxmUw';

const CHAIN = ['Carta QR', 'Sommelier IA', 'Cobro en mesa', 'Cocina conectada', 'Analíticas', 'Multi-idioma', 'Multi-local'];

const Presupuesto = () => {
  useSeo({
    title: 'Pide presupuesto para tu bar o restaurante | ScanOrder',
    description: 'Cuéntanos cómo es tu local y te preparamos un presupuesto a medida: carta digital por QR, pedidos y cobro en mesa. Sin compromiso y con respuesta rápida.',
    path: '/presupuesto',
  });

  const form = useRef();
  const [status, setStatus] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      () => setStatus('ok'),
      () => setStatus('error')
    );
  };

  return (
    <div className="pp">
      <div className="pp__split">
        {/* IZQUIERDA — marca + frase */}
        <aside className="pp__brand">
          <div className="pp__brand-glow glow" />
          <Link to="/" className="pp__back">← Volver</Link>

          <div className="pp__lockup">
            <span className="pp__logo" role="img" aria-label="ScanOrder" />
            <div className="pp__wordmark">
              <span className="pp__name">ScanOrder</span>
              <span className="pp__tag">HORECA</span>
            </div>
          </div>

          <div className="pp__brand-mid">
            <h1 className="pp__claim">El cambio que<br /> tu local <span className="text-gold">necesita</span>.</h1>
            <p className="pp__pitch">
              Pedidos al instante, cobros sin colas y una cocina que nunca se lía.
              Más ingresos, menos estrés — desde el primer servicio.
            </p>
          </div>
        </aside>

        {/* DERECHA — formulario en tarjeta */}
        <main className="pp__formside">
          <div className="pp__card">
            {status === 'ok' ? (
              <div className="pp__done">
                <div className="pp__check">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                </div>
                <h2>¡Solicitud recibida!</h2>
                <p>Gracias. Te contactaremos muy pronto con tu propuesta.</p>
                <Link to="/" className="btn btn-primary pp__donebtn">Volver a la web</Link>
              </div>
            ) : (
              <form ref={form} className="pp__form" onSubmit={onSubmit}>
                <div className="pp__formhead">
                  <span className="eyebrow">Solicita presupuesto</span>
                  <h2 className="pp__formtitle">Cuéntanos sobre tu local</h2>
                  <p className="pp__formsub">Te respondemos en menos de 24 h, sin compromiso.</p>
                </div>
                <div className="pp__row">
                  <label className="pp__field"><span>Nombre*</span><input type="text" name="name" required placeholder="Tu nombre" /></label>
                  <label className="pp__field"><span>Teléfono / WhatsApp*</span><input type="tel" name="phone" required placeholder="+34 600 000 000" /></label>
                </div>
                <label className="pp__field"><span>Correo electrónico*</span><input type="email" name="email" required placeholder="tu@email.com" /></label>
                <div className="pp__row">
                  <label className="pp__field"><span>Nombre del local*</span><input type="text" name="restaurant" required placeholder="Ej. Cafetería La Plaza" /></label>
                  <label className="pp__field"><span>Localidad</span><input type="text" name="localidad" placeholder="Ciudad" /></label>
                </div>
                <label className="pp__field">
                  <span>¿Cuántos locales tienes?</span>
                  <select name="locales" defaultValue="1">
                    <option value="1">1 local</option>
                    <option value="2-5">2 a 5 locales</option>
                    <option value="6+">6 o más</option>
                  </select>
                </label>
                <label className="pp__field"><span>¿Algo que debamos saber? (opcional)</span><textarea name="message" rows="2" placeholder="Cuéntanos tu caso…" /></label>

                {status === 'error' && <p className="pp__err">Hubo un error al enviar. Inténtalo de nuevo o escríbenos por WhatsApp.</p>}

                <button type="submit" className="btn btn-primary pp__submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Enviando…' : 'Enviar solicitud'}
                </button>
                <p className="pp__legal">Al enviar aceptas que te contactemos para tu propuesta. Sin compromiso.</p>
              </form>
            )}
          </div>
        </main>
      </div>

      {/* CINTA inferior tipo cadena */}
      <div className="pp__chain">
        <div className="pp__chain-track">
          {[...CHAIN, ...CHAIN, ...CHAIN].map((t, i) => (
            <span className="pp__chain-item" key={i}>
              <span className="pp__chain-logo" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Presupuesto;

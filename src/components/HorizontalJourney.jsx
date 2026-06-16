import './HorizontalJourney.css';
import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Phone from './ui/Phone';
import splashShot from '../assets/app/splash.webp';
import qrCode from '../assets/app/qr.svg';
import productShot from '../assets/app/product.webp';
import checkoutShot from '../assets/app/checkout.webp';
import ratingShot from '../assets/app/rating.webp';

// Custom visual for step 01: the app opening + a real, scannable QR with a scan line.
const ScanVisual = () => (
  <div className="scanv">
    <div className="scanv__phone">
      <Phone src={splashShot} alt="La carta abriéndose" tilt={false} />
    </div>
    <div className="scanv__qr">
      <div className="scanv__qrwrap">
        <img src={qrCode} alt="Código QR de la mesa" />
        <span className="scanv__line" />
      </div>
      <span className="scanv__cap">Escanea la mesa</span>
    </div>
  </div>
);

const PANELS = [
  { n: '01', t: 'Escanea', d: 'El cliente apunta con la cámara al QR de la mesa. La carta se abre sola: sin apps, sin descargas.', media: <ScanVisual /> },
  { n: '02', t: 'Pide', d: 'Explora la carta, elige extras y modificadores, y añade al pedido a su ritmo.', media: <Phone src={productShot} alt="Pedido" tilt={false} /> },
  { n: '03', t: 'Paga', d: 'Con tarjeta desde el móvil o en persona. El cobro va directo a tu cuenta.', media: <Phone src={checkoutShot} alt="Pago" tilt={false} /> },
  { n: '04', t: 'Vuelve', d: 'Valora la experiencia y deja reseña en Google. Fidelizas sin levantar la voz.', media: <Phone src={ratingShot} alt="Valoración" tilt={false} /> },
];

const HorizontalJourney = () => {
  const wrapRef = useRef(null);
  const trackRef = useRef(null);
  const [distance, setDistance] = useState(0);

  const { scrollYProgress } = useScroll({ target: wrapRef, offset: ['start start', 'end end'] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  useEffect(() => {
    const measure = () => {
      if (trackRef.current) setDistance(Math.max(0, trackRef.current.scrollWidth - window.innerWidth));
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  return (
    <section className="hjourney" ref={wrapRef}>
      <div className="hjourney__sticky">
        <div className="hjourney__intro">
          <span className="eyebrow">II — El recorrido</span>
          <h2 className="hjourney__title">Cuatro gestos,<br />servicio completo</h2>
          <span className="hjourney__hint">desliza →</span>
        </div>

        <motion.div className="hjourney__track" ref={trackRef} style={{ x }}>
          {PANELS.map((p) => (
            <article className="hpanel" key={p.n}>
              <div className="hpanel__text">
                <span className="hpanel__n">{p.n}</span>
                <h3 className="hpanel__t">{p.t}<span className="dot">.</span></h3>
                <p className="hpanel__d">{p.d}</p>
              </div>
              <div className="hpanel__media">{p.media}</div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalJourney;

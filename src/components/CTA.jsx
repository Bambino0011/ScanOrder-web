import './CTA.css';
import { motion } from 'framer-motion';
import MagneticButton from './ui/MagneticButton';

const CTA = ({ onOpenDemo }) => {
  return (
    <section className="section cta" id="presupuesto">
      <div className="container">
        <motion.div
          className="cta__card noise"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="cta__glow glow" />
          <div className="cta__content">
            <span className="eyebrow">Empieza hoy</span>
            <h2 className="cta__title">¿Listo para digitalizar<br /> tu restaurante?</h2>
            <p className="cta__sub">
              Cuéntanos cómo es tu local y te preparamos una propuesta a medida,
              sin compromiso. Lo dejamos funcionando en 15 minutos.
            </p>
            <div className="cta__actions">
              <MagneticButton className="btn btn-primary cta__btn" onClick={onOpenDemo}>
                Solicita presupuesto
              </MagneticButton>
              <a
                href="https://wa.me/34602592328?text=Hola,%20quiero%20información%20sobre%20ScanOrder"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                Escríbenos por WhatsApp
              </a>
            </div>
            <div className="cta__trust">
              <span>Sin compromiso</span>
              <span>Sin permanencia</span>
              <span>Soporte directo</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;

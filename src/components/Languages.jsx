import './Languages.css';
import Reveal from './ui/Reveal';

const LANGS = ['Español', 'English', 'Français', 'Deutsch', 'العربية', 'Italiano', 'Português', '中文', 'Русский', '日本語', 'Nederlands', 'Polski'];

const Languages = () => {
  return (
    <section className="section langs">
      <div className="container">
        <Reveal className="langs__header">
          <span className="eyebrow">Sin barreras</span>
          <h2 className="section-title">Tu carta habla<br /> <span className="text-gold">todos los idiomas</span></h2>
          <p className="section-lead">
            La IA traduce tu menú automáticamente. Cada cliente lo lee en su idioma —
            perfecto para zonas turísticas.
          </p>
        </Reveal>
      </div>

      <div className="langs__marquee">
        <div className="langs__track">
          {[...LANGS, ...LANGS].map((l, i) => (
            <span className="langs__pill" key={i}>{l}</span>
          ))}
        </div>
      </div>
      <div className="langs__marquee langs__marquee--rev">
        <div className="langs__track langs__track--rev">
          {[...LANGS.slice().reverse(), ...LANGS.slice().reverse()].map((l, i) => (
            <span className="langs__pill" key={i}>{l}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;

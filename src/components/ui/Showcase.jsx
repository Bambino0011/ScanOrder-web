import './Showcase.css';
import Reveal from './Reveal';
import Icon from './Icon';

// Reusable alternating feature row: media on one side, copy on the other.
const Showcase = ({ id, eyebrow, title, desc, bullets = [], visual, reverse = false }) => {
  return (
    <section className={`section showcase ${reverse ? 'showcase--reverse' : ''}`} id={id}>
      <div className="container showcase__inner">
        <Reveal className="showcase__media" y={50}>
          {visual}
        </Reveal>

        <div className="showcase__copy">
          <Reveal as="span" className="eyebrow">{eyebrow}</Reveal>
          <Reveal as="h2" className="section-title showcase__title" delay={0.08}>{title}</Reveal>
          <Reveal as="p" className="showcase__desc" delay={0.14}>{desc}</Reveal>
          <ul className="showcase__list">
            {bullets.map((b, i) => (
              <Reveal as="li" key={b.title} delay={0.2 + i * 0.08}>
                <span className="showcase__bullet-icon"><Icon name={b.icon} size={20} /></span>
                <span>
                  <strong>{b.title}</strong>
                  <em>{b.text}</em>
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Showcase;

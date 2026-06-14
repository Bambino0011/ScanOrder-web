import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';
import logo from '../assets/app/logo_gold.webp';

const LINKS = [
  { href: '#plataforma', label: 'Plataforma' },
  { href: '#ia', label: 'IA' },
  { href: '#cobros', label: 'Cobros' },
  { href: '#analiticas', label: 'Analíticas' },
  { href: '#faq', label: 'FAQ' },
];

const Navbar = ({ onOpenDemo }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      className={`nav ${scrolled ? 'nav--scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container nav__inner">
        <a href="#top" className="nav__brand">
          <img src={logo} alt="ScanOrder Horeca" className="nav__logo" />
          <span className="nav__name">ScanOrder</span>
        </a>

        <nav className="nav__links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="nav__link">{l.label}</a>
          ))}
        </nav>

        <button className="btn btn-primary nav__cta" onClick={onOpenDemo}>
          Solicita presupuesto
        </button>

        <button
          className={`nav__burger ${menuOpen ? 'is-open' : ''}`}
          aria-label="Menú"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="nav__mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
            ))}
            <button className="btn btn-primary" onClick={() => { setMenuOpen(false); onOpenDemo(); }}>
              Solicita presupuesto
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;

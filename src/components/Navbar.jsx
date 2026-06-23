import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Navbar.css';

const LINKS = [
  { href: '#plataforma', label: 'Plataforma' },
  { to: '/carta-digital-qr', label: 'Carta QR' },
  { to: '/inteligencia-artificial', label: 'IA' },
  { to: '/para-bares', label: 'Para bares' },
  { href: '#producto', label: 'Producto' },
  { href: '#faq', label: 'FAQ' },
];

const Navbar = () => {
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
        <a href="#top" className="nav__brand" aria-label="ScanOrder Horeca">
          <span className="nav__logo" role="img" aria-label="ScanOrder" />
          <span className="nav__name">ScanOrder</span>
        </a>

        <nav className="nav__links">
          {LINKS.map((l) =>
            l.to ? (
              <Link key={l.to} to={l.to} className="nav__link">{l.label}</Link>
            ) : (
              <a key={l.href} href={l.href} className="nav__link">{l.label}</a>
            )
          )}
        </nav>

        <Link className="btn btn-primary nav__cta" to="/presupuesto">
          Solicita presupuesto
        </Link>

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
            {LINKS.map((l) =>
              l.to ? (
                <Link key={l.to} to={l.to} onClick={() => setMenuOpen(false)}>{l.label}</Link>
              ) : (
                <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
              )
            )}
            <Link className="btn btn-primary" to="/presupuesto" onClick={() => setMenuOpen(false)}>
              Solicita presupuesto
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Desplazamiento suave a una sección de la home, con duración proporcional a
  // la distancia (velocidad constante = se siente fluido, ni lento ni brusco).
  const scrollSmooth = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const target = el.getBoundingClientRect().top + window.scrollY - 70;
    const dist = Math.abs(target - window.scrollY);
    const duration = Math.min(2.4, Math.max(0.9, dist / 1500));
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
    if (window.__lenis) window.__lenis.scrollTo(target, { duration, easing: easeOutCubic });
    else window.scrollTo({ top: target, behavior: 'smooth' });
  };

  const goToSection = (e, href) => {
    e.preventDefault();
    e.stopPropagation(); // evita que el handler global de SmoothScroll haga OTRO scroll
    setMenuOpen(false);
    const id = href.slice(1);
    if (pathname === '/') {
      // En la misma home: deslizamiento suave normal.
      scrollSmooth(id);
    } else {
      // Desde otra página: cambiamos a la home y aparecemos DIRECTAMENTE en la
      // sección (sin viaje). Forzamos el recálculo del layout (secciones fijas)
      // y hacemos UN solo salto limpio, tapado por el fundido de la página.
      navigate('/');
      setTimeout(() => {
        try { ScrollTrigger.refresh(); } catch (err) { /* noop */ }
        const el = document.getElementById(id);
        if (!el) return;
        const top = el.getBoundingClientRect().top + window.scrollY - 70;
        if (window.__lenis) window.__lenis.scrollTo(top, { immediate: true });
        else window.scrollTo({ top });
      }, 280);
    }
  };

  const goHome = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    if (pathname === '/') {
      if (window.__lenis) window.__lenis.scrollTo(0); else window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <motion.header
      className={`nav ${scrolled ? 'nav--scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container nav__inner">
        <a href="#top" className="nav__brand" aria-label="ScanOrder Horeca" onClick={goHome}>
          <span className="nav__logo" role="img" aria-label="ScanOrder" />
          <span className="nav__name">ScanOrder</span>
        </a>

        <nav className="nav__links">
          {LINKS.map((l) =>
            l.to ? (
              <Link key={l.to} to={l.to} className="nav__link">{l.label}</Link>
            ) : (
              <a key={l.href} href={l.href} className="nav__link" onClick={(e) => goToSection(e, l.href)}>{l.label}</a>
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
                <a key={l.href} href={l.href} onClick={(e) => goToSection(e, l.href)}>{l.label}</a>
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

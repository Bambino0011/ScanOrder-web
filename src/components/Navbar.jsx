import { useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo_circular_correct.png';

const Navbar = ({ onOpenDemo }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="container navbar-content">
                {/* 1. Logo Section */}
                <div className="navbar-logo-group">
                    <img src={logo} alt="ScanOrder Logo" className="navbar-logo-img" />
                    <span className="navbar-brand-name">ScanOrder</span>
                </div>

                {/* 2. Center Links (Desktop) */}
                <div className="navbar-links-center">
                    <a href="#como-funciona">Cómo Funciona</a>
                    <a href="#beneficios">Beneficios</a>
                    <a href="#prueba-gratis">Prueba Gratis</a>
                </div>

                {/* 3. Right CTA (Desktop) */}
                <div className="navbar-cta-right">
                    <button className="btn btn-pill" onClick={onOpenDemo}>Agendar Demo</button>
                </div>

                {/* 4. Hamburger Icon (Mobile) */}
                <div className="navbar-hamburger" onClick={toggleMenu}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </div>

                {/* 5. Mobile Menu Overlay & Drawer */}
                <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`} onClick={closeMenu}></div>

                <div className={`mobile-menu-drawer ${isMenuOpen ? 'open' : ''}`}>
                    <div className="mobile-menu-header">
                        <span className="mobile-menu-title">Menú</span>
                        <div className="mobile-close-btn" onClick={closeMenu}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </div>
                    </div>

                    <div className="mobile-menu-links">
                        <a href="#como-funciona" onClick={closeMenu}>Cómo Funciona</a>
                        <a href="#beneficios" onClick={closeMenu}>Beneficios</a>
                        <a href="#prueba-gratis" className="mobile-highlight-link" onClick={closeMenu}>Prueba Gratis</a>
                        <div className="mobile-menu-action">
                            <button className="btn btn-pill full-width" onClick={() => { closeMenu(); onOpenDemo(); }}>Agendar Demo</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

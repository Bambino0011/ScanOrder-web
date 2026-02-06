import './Footer.css';


const Footer = () => {
    return (
        <footer className="footer-saas-premium">
            <div className="container">

                {/* 1. Center Section: Logo & Links */}
                <div className="footer-center-content">
                    {/* Restored Brand Block */}
                    <div className="footer-brand">
                        <div className="footer-brand-icon"></div>
                        <h3>ScanOrder</h3>
                        <p>Horeca</p>
                    </div>

                    <div className="footer-nav-links">
                        <a href="#privacidad">Privacidad</a>
                        <span className="footer-separator">•</span>
                        <a href="#terminos">Términos</a>
                        <span className="footer-separator">•</span>
                        <a href="#contacto">Contacto</a>
                    </div>
                </div>

                <div className="footer-divider-line"></div>

                {/* 2. Bottom Section: Copyright, Signature, Socials */}
                <div className="footer-bottom-bar">
                    <div className="footer-copyright">
                        &copy; 2026 ScanOrder. Todos los derechos reservados.
                    </div>

                    <div className="footer-signature">
                        A product by <span className="text-white">Marouan Mrhassi</span> & <span className="text-white">Daniel Pro777</span>
                    </div>

                    <div className="footer-socials">
                        {/* Instagram */}
                        <a href="#" aria-label="Instagram" className="social-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>
                        {/* LinkedIn */}
                        <a href="#" aria-label="LinkedIn" className="social-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </a>
                        {/* X / Twitter */}
                        <a href="#" aria-label="X (Twitter)" className="social-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4l11.733 16h4.444l-11.733-16z" />
                                <path d="M4 20l6.768-6.768" />
                                <path d="M13.232 10.768L20 4" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

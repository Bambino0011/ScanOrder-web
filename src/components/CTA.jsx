import './CTA.css';

const CTA = ({ onOpenDemo }) => {
    return (
        <section className="section cta-section" id="prueba-gratis">
            <div className="container center-content">

                {/* Gold Guarantee Seal Badge */}
                <div className="cta-badge">
                    <div className="cta-badge-content">
                        <span>15 DÍAS</span>
                        <span className="cta-badge-small">PRUEBA GRATIS</span>
                    </div>
                </div>

                {/* Headline - Removed cta-price-text */}

                {/* Headline */}
                <div className="cta-header">
                    <h2>Empieza a digitalizar tu terraza hoy</h2>
                </div>

                {/* Action */}
                <div className="cta-action-wrapper">
                    <button className="btn btn-premium-gold" onClick={onOpenDemo}>Agenda Tu Demo Gratuita Ahora</button>

                    {/* Trust Badges - Keeping them but styling for light theme */}
                    <div className="trust-badges-row">
                        <div className="trust-item">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <span>Sin compromiso</span>
                        </div>
                        <div className="trust-item">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <span>Soporte 24/7</span>
                        </div>
                        <div className="trust-item">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <span>Demo personalizada</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;

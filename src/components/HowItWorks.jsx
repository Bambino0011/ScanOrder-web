import './HowItWorks.css';
import demoVideo from '../assets/ScanOrder_Video_Generation_Request.mp4';

const HowItWorks = () => {
    return (
        <section className="how-it-works-premium" id="como-funciona">
            <div className="container">
                <div className="hiw-header">
                    <h2 className="section-title">Tecnología pensada para el ritmo real de tu negocio</h2>
                    <p className="section-subtitle">
                        Conecta tus mesas con tu cocina en menos de <span className="text-gold">2 segundos</span>.
                    </p>
                </div>

                <div className="hiw-split-layout">
                    {/* Left Column: Video Player */}
                    <div className="hiw-video-col">
                        <div className="video-frame">
                            <video
                                src={demoVideo}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="hiw-main-video"
                            />
                            <div className="video-overlay-glow"></div>
                        </div>
                    </div>

                    {/* Right Column: Feature Cards */}
                    <div className="hiw-cards-col">

                        {/* Card 1 */}
                        <div className="hiw-step-card">
                            <div className="step-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M3 7V5a2 2 0 0 1 2-2h2" />
                                    <path d="M17 3h2a2 2 0 0 1 2 2v2" />
                                    <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
                                    <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
                                    <rect x="7" y="7" width="10" height="10" rx="1" />
                                </svg>
                            </div>
                            <div className="step-content">
                                <h3>Acceso Instantáneo</h3>
                                <p>Sin descargas ni registros. El cliente accede a tu carta digital con <span className="text-gold">un solo escaneo</span>.</p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="hiw-step-card">
                            <div className="step-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 2v20" />
                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                </svg>
                            </div>
                            <div className="step-content">
                                <h3>Venta Sugerida Automática</h3>
                                <p>Interfaz diseñada para maximizar el ticket medio ofreciendo extras y complementos de forma visual.</p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="hiw-step-card">
                            <div className="step-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                                    <path d="M3 3v5h5" />
                                    <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
                                    <path d="M16 21h5v-5" />
                                </svg>
                            </div>
                            <div className="step-content">
                                <h3>Sincronización en Tiempo Real</h3>
                                <p>Gestión total desde cualquier terminal (KDS) o impresión de tickets al instante.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;

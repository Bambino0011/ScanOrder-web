import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Footer.css';


const Footer = () => {
    const [activeModal, setActiveModal] = useState(null);
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

    const openModal = (e, modalName) => {
        e.preventDefault();
        setActiveModal(modalName);
        setSubmitStatus(null);
    };

    const closeModal = () => {
        setActiveModal(null);
    };

    const handleContactSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        // Same credentials as DemoModal
        const SERVICE_ID = 'service_hdevgkw';
        const TEMPLATE_ID = 'template_a5fcr4s';
        const PUBLIC_KEY = 'KAK6yVDx3eRvSxmUw';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log('Email sent successfully:', result.text);
                setIsSubmitting(false);
                setSubmitStatus('success');
            }, (error) => {
                console.error('Email sending failed:', error.text);
                setIsSubmitting(false);
                setSubmitStatus('error');
            });
    };
    return (
        <>
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
                        <a href="#privacidad" onClick={(e) => openModal(e, 'privacy')}>Privacidad</a>
                        <span className="footer-separator">•</span>
                        <a href="#terminos" onClick={(e) => openModal(e, 'terms')}>Términos</a>
                        <span className="footer-separator">•</span>
                        <a href="#contacto" onClick={(e) => openModal(e, 'contact')}>Contacto</a>
                    </div>
                </div>

                <div className="footer-divider-line"></div>

                {/* 2. Bottom Section: Copyright, Signature, Socials */}
                <div className="footer-bottom-bar">
                    <div className="footer-copyright">
                        &copy; 2026 ScanOrder. Todos los derechos reservados.
                    </div>

                    <div className="footer-signature">
                        A product by <span className="text-white">Marouan Mrhassi</span> & <span className="text-white">Daniel Shelyuzhko</span>
                    </div>

                    <div className="footer-socials">
                        {/* Instagram */}
                        <a href="https://www.instagram.com/scanorder.es/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon">
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
                    </div>
                </div>
            </div>
        </footer>

            {/* MODALS OVERLAY */}
            {activeModal && (
                <div className="footer-modal-overlay" onClick={closeModal}>
                    <div className="footer-modal-content" onClick={e => e.stopPropagation()}>
                        <button className="footer-modal-close" onClick={closeModal} aria-label="Cerrar modal">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>

                        {/* PRIVACY POLICY */}
                        {activeModal === 'privacy' && (
                            <div className="footer-modal-body text-content">
                                <h2>Política de Privacidad</h2>
                                <p><strong>Última actualización:</strong> {new Date().toLocaleDateString()}</p>
                                <p>En ScanOrder Horeca ("nosotros", "nuestro" o "la plataforma"), operada por <strong>el equipo de ScanOrder</strong>, nos tomamos muy en serio la privacidad de nuestros usuarios y clientes. Esta Política de Privacidad describe cómo recopilamos, utilizamos y protegemos su información personal cuando utiliza nuestro servicio, de acuerdo con el Reglamento General de Protección de Datos (RGPD) aplicable en la Unión Europea.</p>
                                
                                <h3>1. Información que Recopilamos</h3>
                                <p>Recopilamos información personal necesaria para ofrecer y mejorar nuestros servicios, incluyendo, de manera enunciativa mas no limitativa: datos de contacto (nombre, correo electrónico, teléfono suministrado para demostraciones o cuentas de usuario), información del restaurante u hotel, y datos de uso de la plataforma generados mediante cookies y analíticas estándar de tráfico.</p>
                                
                                <h3>2. Uso de la Información</h3>
                                <p>Los datos que recopilamos se utilizan exclusivamente para: proporcionar y mantener el servicio de menú digital e integraciones POS, gestionar su cuenta y brindar asistencia técnica, comunicarnos con usted acerca de actualizaciones, ofertas o información relevante, y mejorar la seguridad y el rendimiento de nuestra plataforma. No vendemos sus datos personales a terceros.</p>
                                
                                <h3>3. Protección y Retención de Datos</h3>
                                <p>Implementamos medidas de seguridad técnicas y organizativas adecuadas para proteger su información personal (ej. cifrado y servidores seguros). Mantendremos su información únicamente durante el tiempo necesario para cumplir con los fines para los que fue recopilada o para cumplir con obligaciones legales y fiscales aplicables.</p>
                                
                                <h3>4. Derechos del Usuario (RGPD)</h3>
                                <p>Usted tiene derecho a <strong>acceder</strong> a sus datos personales, solicitar su <strong>rectificación</strong> si son inexactos, solicitar su <strong>supresión</strong> (derecho al olvido), oponerse o <strong>restringir</strong> su procesamiento, y solicitar la <strong>portabilidad</strong> de sus datos. Para ejercer cualquiera de estos derechos, póngase en contacto con nosotros a través del formulario de la plataforma o directamente con los responsables.</p>

                                <h3>5. Cambios en la Política</h3>
                                <p>Podemos actualizar esta Política de Privacidad de vez en cuando. Le notificaremos cualquier cambio publicando la nueva Política en esta página. Se le aconseja revisar esta Política periódicamente para cualquier cambio.</p>
                            </div>
                        )}

                        {/* TERMS OF SERVICE */}
                        {activeModal === 'terms' && (
                            <div className="footer-modal-body text-content">
                                <h2>Términos de Servicio</h2>
                                <p><strong>Última actualización:</strong> {new Date().toLocaleDateString()}</p>
                                <p>Bienvenido a ScanOrder Horeca. Al acceder o utilizar nuestra plataforma de software (incluyendo la web, menús digitales y paneles de gestión), usted acepta estar sujeto a los presentes Términos de Servicio. Si no está de acuerdo con alguna parte de estos términos, no podrá utilizar nuestros servicios.</p>

                                <h3>1. Descripción del Servicio</h3>
                                <p>ScanOrder es una solución tecnológica "Software as a Service" (SaaS) diseñada para el sector HORECA (Hoteles, Restaurantes y Cafeterías) que facilita la visualización de menús, toma de pedidos y gestión digital mediante códigos QR y software interno.</p>

                                <h3>2. Uso de la Plataforma y Cuentas</h3>
                                <p>Al crear su cuenta, usted es responsable de mantener la confidencialidad de sus credenciales de acceso. Nos reservamos el derecho de suspender o cancelar su cuenta de forma inmediata, sin previo aviso o responsabilidad, por cualquier motivo, incluyendo sin limitación el incumplimiento de estos Términos (ej. uso fraudulento, actividades ilegales, impacto negativo intencional a la infraestructura).</p>

                                <h3>3. Propiedad Intelectual</h3>
                                <p>El software original, características, funcionalidades, diseño y marca comercial de ScanOrder Horeca son propiedad exclusiva de <strong>su equipo desarrollador</strong> y están protegidos por leyes nacionales e internacionales de derechos de autor y propiedad intelectual. Usted no obtiene ningún derecho de propiedad sobre la tecnología subyacente.</p>

                                <h3>4. Limitación de Responsabilidad</h3>
                                <p>ScanOrder se proporciona "tal cual" y "según disponibilidad". No ofrecemos garantías expresas o implícitas sobre la continuidad ininterrumpida del servicio o la ausencia total de errores. En ningún caso los creadores, empleados o afiliados serán responsables de daños indirectos, incidentales, especiales, consecuentes o punitivos, incluyendo pérdida de beneficios o datos, resultantes del uso o imposibilidad de uso del software.</p>

                                <h3>5. Resolución de Conflictos y Contacto</h3>
                                <p>Cualquier disputa relacionada con estos Términos se interpretará de acuerdo con las leyes aplicables de la jurisdicción local. Si tiene alguna pregunta acerca de estos Términos, comuníquese con nosotros a través de los canales de atención oficiales de ScanOrder.</p>
                            </div>
                        )}

                        {/* CONTACT FORM */}
                        {activeModal === 'contact' && (
                            <div className="footer-modal-body form-content">
                                <div className="contact-header">
                                    <h2>Contacta con Nosotros</h2>
                                    <p>Envíanos tus dudas o sugerencias y te responderemos lo antes posible.</p>
                                </div>

                                {submitStatus === 'success' ? (
                                    <div className="contact-success-message">
                                        <div className="success-icon-small">
                                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        <h3>¡Mensaje enviado!</h3>
                                        <p>Gracias por contactarnos. Hemos recibido tu mensaje y te responderemos pronto.</p>
                                        <button className="footer-btn-primary" onClick={closeModal} style={{marginTop: '1.5rem'}}>
                                            Cerrar ventana
                                        </button>
                                    </div>
                                ) : (
                                    <form ref={form} onSubmit={handleContactSubmit} className="footer-contact-form">
                                        {submitStatus === 'error' && (
                                            <div className="form-error-msg">Hubo un error al enviar tu mensaje. Inténtalo de nuevo.</div>
                                        )}
                                        
                                        <div className="footer-input-group">
                                            <label htmlFor="contactName">Nombre</label>
                                            <input type="text" id="contactName" name="name" required placeholder="Tu nombre completo" />
                                        </div>
                                        
                                        <div className="footer-input-group">
                                            <label htmlFor="contactEmail">Correo Electrónico</label>
                                            <input type="email" id="contactEmail" name="email" required placeholder="tu@email.com" />
                                        </div>
                                        
                                        <div className="footer-input-group">
                                            <label htmlFor="contactSubject">Asunto</label>
                                            <input type="text" id="contactSubject" name="subject" required placeholder="¿En qué te podemos ayudar?" />
                                        </div>
                                        
                                        <div className="footer-input-group">
                                            <label htmlFor="contactMessage">Mensaje</label>
                                            <textarea id="contactMessage" name="message" required rows="4" placeholder="Escribe tu mensaje aquí..."></textarea>
                                        </div>
                                        
                                        <button type="submit" className="footer-btn-primary" disabled={isSubmitting}>
                                            {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                                        </button>
                                    </form>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Footer;

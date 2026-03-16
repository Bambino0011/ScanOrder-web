import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './DemoModal.css';

const DemoModal = ({ isOpen, onClose }) => {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: '',
        restaurant: '',
        phone: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // Reset state when modal opens
    useEffect(() => {
        if (isOpen) {
            setIsSubmitted(false);
            setError(null);
            setFormData({ name: '', restaurant: '', phone: '' });
        }
    }, [isOpen]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        // TODO: REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
        // Get them from https://dashboard.emailjs.com/admin
        const SERVICE_ID = 'service_hdevgkw';
        const TEMPLATE_ID = 'template_a5fcr4s';
        const PUBLIC_KEY = 'KAK6yVDx3eRvSxmUw';


        // Usamos emailjs.send pasando explícitamente los datos del estado
        emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
            .then((result) => {
                console.log('Email sent successfully:', result.text);
                setIsLoading(false);
                setIsSubmitted(true);
            }, (error) => {
                console.error('Email sending failed:', error.text);
                setError('Hubo un error al enviar tu solicitud. Por favor, inténtalo de nuevo o contáctanos por WhatsApp.');
                setIsLoading(false);
            });
    };

    if (!isOpen) return null;

    return (
        <div className={`demo-modal-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
            <div className="demo-modal-content" onClick={e => e.stopPropagation()}>
                <button className="demo-modal-close" onClick={onClose} aria-label="Cerrar">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                {!isSubmitted ? (
                    <>
                        <div className="demo-modal-header">
                            <h2 className="demo-modal-title">Solicita tu Demo Gratuita</h2>
                            <p className="demo-modal-subtitle">Descubre cómo ScanOrder puede transformar tu restaurante en minutos.</p>
                        </div>

                        <form ref={form} onSubmit={handleSubmit}>
                            {error && <div className="demo-error-message" style={{ color: 'red', marginBottom: '1rem', textAlign: 'center' }}>{error}</div>}
                            <div className="demo-form-group">
                                <label className="demo-form-label" htmlFor="name">Nombre Completo</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name" // Make sure this matches EmailJS template variable {{name}}
                                    className="demo-form-input"
                                    placeholder="Tu nombre"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="demo-form-group">
                                <label className="demo-form-label" htmlFor="restaurant">Nombre del Restaurante</label>
                                <input
                                    type="text"
                                    id="restaurant"
                                    name="restaurant" // Make sure this matches EmailJS template variable {{restaurant}}
                                    className="demo-form-input"
                                    placeholder="Ej. Restaurante La Plaza"
                                    value={formData.restaurant}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="demo-form-group">
                                <label className="demo-form-label" htmlFor="phone">Teléfono / WhatsApp</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone" // Make sure this matches EmailJS template variable {{phone}}
                                    className="demo-form-input"
                                    placeholder="+34 600 000 000"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <button type="submit" className="demo-form-submit" disabled={isLoading}>
                                {isLoading ? 'Enviando...' : 'Solicitar Demo Ahora'}
                                {!isLoading && (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="22" y1="2" x2="11" y2="13"></line>
                                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                    </svg>
                                )}
                            </button>
                        </form>
                    </>
                ) : (
                    <div className="demo-success-message">
                        <div className="success-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        </div>
                        <h3 className="success-title">¡Solicitud Recibida!</h3>
                        <p className="success-text">
                            Gracias, <strong>{formData.name}</strong>. Hemos recibido tus datos correctamente.
                            Un especialista de ScanOrder te contactará en breve al <strong>{formData.phone}</strong>.
                        </p>

                        <a
                            href={`https://wa.me/34602592328?text=Hola,%20soy%20${encodeURIComponent(formData.name)}%20de%20${encodeURIComponent(formData.restaurant)}.%20Acabo%20de%20solicitar%20una%20demo.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-whatsapp"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            Contactar por WhatsApp ahora
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DemoModal;

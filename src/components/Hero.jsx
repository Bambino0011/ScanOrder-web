import './Hero.css';
import heroBg from '../assets/hero_transparent_devices.png';

const Hero = () => {
    return (
        <section className="hero-nova-centered">
            <div className="container hero-nova-content">
                {/* Text First */}
                <div className="hero-nova-text">
                    <h1 className="hero-title">
                        Deja de perder ventas <br />
                        <span className="highlight-text">por falta de camareros.</span>
                    </h1>
                    <p className="hero-subtitle">
                        Tus clientes escanean y piden; el ticket sale directo en cocina.
                        Sistema ligero de instalar: listo en 15 minutos sin técnicos.
                    </p>
                    <div className="hero-nova-actions">
                        <button className="btn btn-primary">Ver Demo en Acción</button>
                    </div>
                    <div className="hero-trust-badges">
                        <span>Instalación fácil en 15 min</span>
                        <span>Sin cambiar tu TPV actual</span>
                        <span>Soporte técnico directo</span>
                    </div>
                </div>

                {/* Image Second */}
                <div className="hero-nova-image-container">
                    <img src={heroBg} alt="Transforma tu restaurante" className="hero-main-image" />
                </div>
            </div>
        </section>
    );
};

export default Hero;

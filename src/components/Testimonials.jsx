import './Testimonials.css';

const Testimonials = () => {
    return (
        <section className="section testimonials" id="testimonios">
            <div className="container">
                <h2 className="section-title">Lo que dicen nuestros primeros socios...</h2>
                <div className="testimonial-card">
                    <p className="testimonial-text">"Desde que usamos ScanOrder, los camareros están más tranquilos y nuestros clientes piden más rápido. ¡Una maravilla!"</p>
                    <div className="testimonial-author">
                        <div className="author-avatar">👨‍🍳</div>
                        <div className="author-info">
                            <h4>Juan Martínez</h4>
                            <p>Dueño, Restaurante La Plaza</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

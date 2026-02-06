import './ProblemSolution.css';

const ProblemSolution = () => {
    return (
        <section className="section problem-solution">
            <div className="container">
                <div className="ps-header">
                    <h2>¿Cansado de la lentitud y los errores?</h2>
                    <p>Camareros saturados, comisiones excesivas, pedidos perdidos...</p>
                </div>

                <div className="ps-grid">
                    <div className="ps-card problem">
                        <div className="ps-icon">❌</div>
                        <h3>Antes</h3>
                        <ul>
                            <li>Largas esperas para pedir</li>
                            <li>Errores en la comanda</li>
                            <li>Personal estresado</li>
                        </ul>
                    </div>
                    <div className="ps-card solution">
                        <div className="ps-icon">✨</div>
                        <h3>Con ScanOrder</h3>
                        <p className="solution-highlight">"Con ScanOrder, tus clientes piden al instante, tu cocina recibe claro, y tú ganas en eficiencia y rentabilidad."</p>
                        <ul>
                            <li>Pedidos instantáneos via QR</li>
                            <li>Comandas claras en KDS</li>
                            <li>Mayor rotación de mesas</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSolution;

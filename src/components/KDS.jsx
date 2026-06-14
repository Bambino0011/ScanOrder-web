import Showcase from './ui/Showcase';
import LazyVideo from './ui/LazyVideo';
import demoVideo from '../assets/app/kds.mp4';

const KDS = () => (
  <Showcase
    id="cocina"
    reverse
    eyebrow="Cocina conectada"
    title={<>Tu cocina,<br /> siempre sincronizada</>}
    desc="El KDS (Kitchen Display System) recibe cada comanda al instante, clara y ordenada. Una app de escritorio robusta pensada para el ritmo real del servicio."
    bullets={[
      { icon: 'screen', title: 'Pantalla en tiempo real', text: 'Pedidos con temporizadores y estados. Cero papeles perdidos.' },
      { icon: 'printer', title: 'Impresión térmica automática', text: 'Los tickets salen solos en tu impresora de cocina.' },
      { icon: 'refresh', title: 'Se actualiza sola', text: 'App para Windows con auto-actualización. Siempre al día.' },
    ]}
    visual={
      <div className="showcase__screen">
        <LazyVideo src={demoVideo} />
      </div>
    }
  />
);

export default KDS;

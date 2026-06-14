import Showcase from './ui/Showcase';
import Phone from './ui/Phone';
import checkoutShot from '../assets/app/checkout.webp';

const Payments = () => (
  <Showcase
    id="cobros"
    eyebrow="Cobros y facturación"
    title={<>Cobra como quieras.<br /> Factura sin complicarte.</>}
    desc="Pagos online con Stripe integrados de serie. Tú eliges cómo cobra cada cliente y el dinero llega directo a tu cuenta."
    bullets={[
      { icon: 'card', title: 'Pago en la mesa', text: 'Con tarjeta (Apple/Google Pay) o en persona. Lo decide el cliente.' },
      { icon: 'bank', title: 'Tu dinero, directo', text: 'Stripe Connect: los cobros van a tu cuenta, sin intermediarios.' },
      { icon: 'receipt', title: 'Tickets y facturas', text: 'Facturas simplificadas automáticas con tus datos fiscales.' },
    ]}
    visual={
      <>
        <div className="showcase__glow glow" />
        <Phone src={checkoutShot} alt="Pago y checkout en ScanOrder" />
      </>
    }
  />
);

export default Payments;

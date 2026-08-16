import { Routes, Route, useLocation } from 'react-router-dom';
import SmoothScroll from './components/ui/SmoothScroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Bento from './components/Bento';
import HorizontalJourney from './components/HorizontalJourney';
import AISection from './components/AISection';
import Showroom from './components/Showroom';
import Advantages from './components/Advantages';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Presupuesto from './pages/Presupuesto';
import CartaDigitalQR from './pages/CartaDigitalQR';
import InteligenciaArtificial from './pages/InteligenciaArtificial';
import ParaBares from './pages/ParaBares';
import useSeo from './hooks/useSeo';
import './App.css';

const Home = () => {
  useSeo({
    title: 'ScanOrder — Pedidos por QR para tu restaurante',
    description: 'ScanOrder es la solución QR para hostelería (HORECA): tus clientes escanean, ven el menú digital y piden al instante. Más rapidez en sala, menos errores y más rentabilidad. Solicita tu demo gratuita.',
    path: '/',
  });

  return (
    <SmoothScroll>
      <div className="app">
        <main>
          <Hero />
          <Bento />
          <HorizontalJourney />
          <AISection />
          <Showroom />
          <Advantages />
          <FAQ />
          <CTA />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
};

function App() {
  const { pathname } = useLocation();
  // Navbar persistente: se monta una vez y NO se recarga al cambiar de página.
  // (En /presupuesto no se muestra, esa página tiene su propio layout.)
  const showNav = pathname !== '/presupuesto';
  return (
    <>
      {showNav && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
      <Route path="/presupuesto" element={<Presupuesto />} />
      <Route path="/carta-digital-qr" element={<CartaDigitalQR />} />
      <Route path="/inteligencia-artificial" element={<InteligenciaArtificial />} />
      <Route path="/para-bares" element={<ParaBares />} />
      </Routes>
    </>
  );
}

export default App;

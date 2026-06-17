import { Routes, Route } from 'react-router-dom';
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
import './App.css';

const Home = () => (
  <SmoothScroll>
    <div className="app">
      <Navbar />
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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/presupuesto" element={<Presupuesto />} />
    </Routes>
  );
}

export default App;

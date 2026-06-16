import { useState } from 'react';
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
import DemoModal from './components/DemoModal';
import './App.css';

function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const openDemoModal = () => setIsDemoModalOpen(true);
  const closeDemoModal = () => setIsDemoModalOpen(false);

  return (
    <SmoothScroll>
      <div className="app">
        <Navbar onOpenDemo={openDemoModal} />
        <main>
          <Hero onOpenDemo={openDemoModal} />
          <Bento />
          <HorizontalJourney />
          <AISection />
          <Showroom />
          <Advantages />
          <FAQ />
          <CTA onOpenDemo={openDemoModal} />
        </main>
        <Footer />
        <DemoModal isOpen={isDemoModalOpen} onClose={closeDemoModal} />
      </div>
    </SmoothScroll>
  );
}

export default App;

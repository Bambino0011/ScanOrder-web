import { useState } from 'react';
import SmoothScroll from './components/ui/SmoothScroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import ScanSteps from './components/ScanSteps';
import Platform from './components/Platform';
import AISection from './components/AISection';
import Payments from './components/Payments';
import KDS from './components/KDS';
import Analytics from './components/Analytics';
import Languages from './components/Languages';
import Chains from './components/Chains';
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
          <ProblemSolution />
          <ScanSteps />
          <Platform />
          <AISection />
          <Payments />
          <KDS />
          <Analytics />
          <Languages />
          <Chains />
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

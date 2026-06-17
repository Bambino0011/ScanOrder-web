import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Wraps the app with Lenis smooth scrolling and syncs it with GSAP ScrollTrigger
// so pinned sections stay perfectly in step with the buttery scroll.
const SmoothScroll = ({ children }) => {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);
    window.__lenis = lenis;

    const raf = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // enlaces internos (#seccion) -> scroll suave con Lenis
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const href = a.getAttribute('href');
      if (href && href.length > 1) {
        e.preventDefault();
        lenis.scrollTo(href, { offset: -70 });
      }
    };
    document.addEventListener('click', onClick);

    return () => {
      gsap.ticker.remove(raf);
      document.removeEventListener('click', onClick);
      window.__lenis = null;
      lenis.destroy();
    };
  }, []);

  return children;
};

export default SmoothScroll;

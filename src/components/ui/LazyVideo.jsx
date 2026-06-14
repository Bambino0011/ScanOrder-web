import { useRef, useState, useEffect } from 'react';

// Only loads the video file once the element scrolls near the viewport,
// keeping it off the critical path for everyone above it.
const LazyVideo = ({ src, className = '' }) => {
  const ref = useRef(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoad(true);
          obs.disconnect();
        }
      },
      { rootMargin: '300px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      autoPlay
      loop
      muted
      playsInline
      preload="none"
    >
      {load && <source src={src} type="video/mp4" />}
    </video>
  );
};

export default LazyVideo;

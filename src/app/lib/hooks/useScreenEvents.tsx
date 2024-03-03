import { useEffect, useState } from 'react';

export const useScreenEvents = () => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [progress, setProgress] = useState('0%');
  const [opacity, setOpacity] = useState(1);
  const [mobileScroll, setMobileScroll] = useState(0);

  useEffect(() => {
    document.body.addEventListener('mousemove', cursorEffect);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    return () => {
      document.body.removeEventListener('mousemove', cursorEffect);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Update CSS variable for opacity
    document.documentElement.style.setProperty('--hero-opacity', `${opacity}`);
  }, [opacity]);

  const cursorEffect = (e: MouseEvent) => {
    if (e.pageX >= window.innerWidth - 100) {
      setCoordinates({ x: window.innerWidth - 100, y: e.pageY - 30 });
    } else {
      setCoordinates({ x: e.pageX - 30, y: e.pageY - 30 });
    }
  };

  const handleScroll = () => {
    if (isMobile()) {
      // For mobile devices, adjust scroll behavior here
      const scrollPercentage = getMobileScrollPercentage();
      setProgress(`${scrollPercentage}%`);
      setMobileScroll(parseInt(scrollPercentage));
      const newOpacity = 1 - parseInt(scrollPercentage) / 10;
      setOpacity(newOpacity);
    } else {
      // For desktop, use the existing scroll effect
      const scrolledHeight = window.pageYOffset;
      const totalHeight = document.body.offsetHeight - window.innerHeight;
      const scrollPercentage = (scrolledHeight / totalHeight) * 100;
      setProgress(`${scrollPercentage.toFixed(2)}%`);
      setOpacity(1);
    }
  };

  const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  };

  const getMobileScrollPercentage = () => {
    const scrolledHeight = window.pageYOffset;
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const adjustedScrolledHeight = Math.max(
      0,
      Math.min(scrolledHeight, totalHeight)
    );
    let scrollPercentage = (adjustedScrolledHeight / totalHeight) * 100;
    return scrollPercentage.toFixed(2);
  };

  return { coordinates, progress, opacity, mobileScroll };
};

import React, { useState, useEffect, useRef } from 'react';

/**
 * Tracks window scroll position with requestAnimationFrame for 60fps parallax layers
 */
export function useScrollParallax() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY || window.pageYOffset);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollY;
}

/**
 * Tracks normalized mouse coordinates (-1 to 1) for interactive 3D hero parallax
 */
export function useMouseParallax() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let rafId = null;
    const handleMouseMove = (e) => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        setMouse({ x, y });
        rafId = null;
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return mouse;
}

/**
 * Scroll-Reveal wrapper using IntersectionObserver for smooth entrance animations
 */
export function Reveal({
  children,
  direction = 'up', // 'up' | 'left' | 'right' | 'scale'
  delay = 0,
  className = ''
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const hiddenTransform = {
    up: 'translate-y-10 opacity-0',
    left: '-translate-x-10 opacity-0',
    right: 'translate-x-10 opacity-0',
    scale: 'scale-95 opacity-0'
  }[direction];

  return React.createElement(
    'div',
    {
      ref,
      style: { transitionDelay: `${delay}ms` },
      className: `transition-all duration-700 ease-out will-change-transform ${
        visible ? 'translate-y-0 translate-x-0 scale-100 opacity-100' : hiddenTransform
      } ${className}`
    },
    children
  );
}

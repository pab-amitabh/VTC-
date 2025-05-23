import { useEffect, useState } from 'react';

// Hook to detect if user prefers reduced motion
export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return prefersReducedMotion;
}

// Hook for performance-aware animations
export function useOptimizedAnimation() {
  const prefersReducedMotion = useReducedMotion();
  
  return {
    duration: prefersReducedMotion ? 0 : 0.2,
    ease: "easeOut" as const,
    reduce: prefersReducedMotion,
  };
}

// Hook to detect low-end devices
export function useDeviceCapabilities() {
  const [isLowEnd, setIsLowEnd] = useState(false);

  useEffect(() => {
    // Detect based on hardware concurrency and connection
    const cores = navigator.hardwareConcurrency || 1;
    const connection = (navigator as any).connection;
    
    const isSlowConnection = connection && (
      connection.effectiveType === 'slow-2g' || 
      connection.effectiveType === '2g'
    );
    
    const isLowEndDevice = cores <= 2 || isSlowConnection;
    setIsLowEnd(isLowEndDevice);
  }, []);

  return {
    isLowEnd,
    shouldReduceAnimations: isLowEnd,
    shouldOptimizeImages: isLowEnd,
  };
} 
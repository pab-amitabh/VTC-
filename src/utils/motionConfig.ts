import { Variants } from 'framer-motion';

// Simple animation configurations - fade in only
export const SIMPLE_FADE = {
  duration: 0.4,
  ease: "easeOut" as const,
};

// Basic variants - just fade in
export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: SIMPLE_FADE
  }
};

// Simple hover - just slight scale
export const simpleHover = {
  scale: 1.02,
  transition: { duration: 0.2, ease: "easeOut" }
};

// Viewport settings
export const VIEWPORT_CONFIG = {
  once: true,
  amount: 0.1,
}; 
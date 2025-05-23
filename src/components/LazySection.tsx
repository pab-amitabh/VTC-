import React, { Suspense, lazy, memo } from 'react';
import { motion } from 'framer-motion';

interface LazySectionProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  threshold?: number;
}

const LazySection: React.FC<LazySectionProps> = ({ 
  children, 
  fallback = <div className="h-96 flex items-center justify-center"><div className="animate-pulse bg-gray-200 h-8 w-32 rounded"></div></div>,
  threshold = 0.1 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: threshold }}
      transition={{ duration: 0.3 }}
    >
      <Suspense fallback={fallback}>
        {children}
      </Suspense>
    </motion.div>
  );
};

LazySection.displayName = 'LazySection';

export default memo(LazySection); 
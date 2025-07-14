import { Variants } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  delay?: number;
  durationKey?: 'fast' | 'normal' | 'slow';
  timingKey?: 'ease' | 'linear' | 'easeIn' | 'easeOut' | 'easeInOut';
  transitionDuration?: number;
}

export const usePageTransition = ({ 
  delay = 0, 
  durationKey = 'normal',
  timingKey = 'easeInOut',
  transitionDuration = 300
}: PageTransitionProps = {}) => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (location.state?.pageTransition || location.state?.pokemonTransition) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, transitionDuration);
      
      return () => clearTimeout(timer);
    }
  }, [location.state, transitionDuration]);

  const pageVariants: Variants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        delay,
        when: "beforeChildren",
        staggerChildren: 0.15
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  const itemVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      y: -10,
      transition: { 
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  const transitionProps = {
    style: {
      '--transition-duration': `var(--transition-duration-${durationKey})`,
      '--transition-timing': `var(--transition-timing-${timingKey})`
    }
  };

  return {
    pageVariants,
    itemVariants,
    transitionProps,
    isTransitioning
  };
}; 

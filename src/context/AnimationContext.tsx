import { usePageTransition } from '@/hooks';
import { Variants } from 'framer-motion';
import { FC, ReactNode, createContext, useContext } from 'react';

interface AnimationContext {
  pageVariants: Variants;
  itemVariants: Variants;
  transitionProps: {
    style: {
      '--transition-duration': string;
      '--transition-timing': string;
    }
  };
  isTransitioning: boolean;
}

interface AnimationProviderProps {
  children: ReactNode;
}

const AnimationContext = createContext<AnimationContext | undefined>(undefined);

export const AnimationProvider: FC<AnimationProviderProps> = ({ children }) => {
  const { pageVariants, itemVariants, transitionProps, isTransitioning } = usePageTransition();
  
  return (
    <AnimationContext.Provider 
      value={{ 
        pageVariants, 
        itemVariants, 
        transitionProps, 
        isTransitioning 
      }}
    >
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimationContext = (): AnimationContext => {
  const context = useContext(AnimationContext);
  
  if (context === undefined) {
    throw new Error('useAnimationContext must be used within an AnimationProvider');
  }
  
  return context;
}; 

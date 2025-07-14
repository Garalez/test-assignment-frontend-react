import { usePageTransition } from '@/hooks';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

export const NotFoundPage: FC = () => {
  const { pageVariants, itemVariants, transitionProps } = usePageTransition();
  
  return (
    <motion.div 
      className={styles.container}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      {...transitionProps}
    >
      <motion.h1 
        className={styles.title}
        variants={itemVariants}
        animate={{ 
          scale: [1, "var(--scale-sm)", 1]
        }}
        transition={{ 
          repeat: Infinity, 
          repeatType: "reverse", 
          duration: 2 
        }}
        {...transitionProps}
      >
        404
      </motion.h1>
      <motion.p 
        className={styles.message}
        variants={itemVariants}
        {...transitionProps}
      >
        Oops! The page you are looking for doesn't exist.
      </motion.p>
      <motion.div variants={itemVariants} {...transitionProps}>
        <Link to="/" className={styles.link}>
          Go back to Pokémon List
        </Link>
      </motion.div>
    </motion.div>
  );
};
